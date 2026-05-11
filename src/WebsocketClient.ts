import WebSocket from 'isomorphic-ws';

import {
  BaseWebsocketClient,
  EmittableEvent,
  MidflightWsRequestEvent,
} from './lib/BaseWSClient.js';
import {
  getStringOrUndefined,
  isRecord,
  omitKeys,
  removeInternalParamFields,
} from './lib/misc-util.js';
import { REST_CLIENT_TYPE_ENUM, serializeParams } from './lib/requestUtils.js';
import {
  getSignKeyType,
  SignAlgorithm,
  SignEncodeMethod,
  signMessage as signRawMessage,
} from './lib/webCryptoAPI.js';
import { DefaultLogger } from './lib/websocket/logger.js';
import {
  getPromiseRefForWSAPIRequest,
  getPromiseRefPrefixForWSAPIRequest,
  getWsUrl as getHtxWsUrl,
  HTXDerivativesWSAPIRawRequest,
  HTXDerivativesWSRequest,
  HTXSpotPrivateWSRequest,
  HTXSpotWSAPIRawRequest,
  HTXWSAPIRawRequest,
  HtxWSNetwork,
  HTXWSRequest,
  isPrivateWsKey,
  PRIVATE_WS_KEYS,
  TRADE_WS_KEYS,
  WS_KEY_MAP,
  WS_KEY_PATH_MAP,
  WsKey,
  WSOperation,
  WSTopicRequest,
} from './lib/websocket/websocket-util.js';
import { WSConnectedResult } from './lib/websocket/WsStore.types.js';
import {
  Exact,
  WS_API_Operations,
  WSAPIOperation,
  WSAPITopicRequestParamMap,
  WSAPITopicResponseMap,
  WSAPIWsKey,
  WSAPIWsKeyTopicMap,
} from './types/websockets/ws-api.js';
import { MessageEventLike } from './types/websockets/ws-events.js';
import {
  ParsedWsMessage,
  WSClientConfigurableOptions,
  WsDerivativesAuthParams,
  WsSpotAuthParams,
} from './types/websockets/ws-general.js';
import {
  isPrivateTopic,
  WSTopic,
} from './types/websockets/ws-subscriptions.js';

const WS_LOGGER_CATEGORY_ID = 'htx-ws';
const WS_LOGGER_CATEGORY = {
  category: WS_LOGGER_CATEGORY_ID,
};

export interface WSAPIRequestFlags {
  /** If true, will skip auth requirement for this WS API request. */
  authIsOptional?: boolean | undefined;
  /** Optional caller-supplied correlation id. Generated automatically when omitted. */
  cid?: string;
}

interface WsEndpointParts {
  url: string;
  host: string;
  path: string;
}

interface WSAPIInflightRequestRef {
  wsKey: WSAPIWsKey;
  operation: WSAPIOperation;
  cid: string;
}

export class WebsocketClient extends BaseWebsocketClient<
  WsKey,
  HTXWSRequest | HTXWSAPIRawRequest
> {
  private wsApiInflightRequestRefs: Map<string, WSAPIInflightRequestRef> =
    new Map();

  constructor(options?: WSClientConfigurableOptions, logger?: DefaultLogger) {
    super(
      {
        ...options,
        // For most connections, heartbeats are messages for HTX, not WS-level frames
        useNativeHeartbeats: false,
        wsLoggerCategory: WS_LOGGER_CATEGORY_ID,
      },
      logger,
    );
  }

  /**
   * Request connection of all market/private sockets that are useful for subscriptions.
   * Trade-command sockets are intentionally opened lazily by sendWSAPIRequest().
   */
  public connectAll(): Promise<WSConnectedResult | undefined>[] {
    return [
      this.connect(WS_KEY_MAP.spotPublic),
      this.connect(WS_KEY_MAP.spotFeed),
      this.connect(WS_KEY_MAP.spotPrivateV2),
      this.connect(WS_KEY_MAP.linearSwapPublic),
      this.connect(WS_KEY_MAP.linearSwapPrivate),
      this.connect(WS_KEY_MAP.coinDeliveryPublic),
      this.connect(WS_KEY_MAP.coinDeliveryPrivate),
      this.connect(WS_KEY_MAP.coinSwapPublic),
      this.connect(WS_KEY_MAP.coinSwapPrivate),
      this.connect(WS_KEY_MAP.derivativesIndex),
      this.connect(WS_KEY_MAP.derivativesSystem),
    ];
  }

  /**
   * Ensures a WS API connection is active and, unless skipped, authenticated.
   */
  public connectWSAPI(
    wsKey: WSAPIWsKey = WS_KEY_MAP.spotTrade,
    skipAuth?: boolean,
  ): Promise<unknown> {
    if (skipAuth) {
      return this.assertIsConnected(wsKey);
    }

    return this.assertIsAuthenticated(wsKey);
  }

  public subscribe(
    requests:
      | (WSTopicRequest<WSTopic> | WSTopic)
      | (WSTopicRequest<WSTopic> | WSTopic)[],
    wsKey: WsKey,
  ) {
    const normalisedRequests = Array.isArray(requests) ? requests : [requests];

    if (normalisedRequests.length) {
      this.subscribeTopicsForWsKey(normalisedRequests, wsKey);
    }
  }

  public unsubscribe(
    requests:
      | (WSTopicRequest<WSTopic> | WSTopic)
      | (WSTopicRequest<WSTopic> | WSTopic)[],
    wsKey: WsKey,
  ) {
    const normalisedRequests = Array.isArray(requests) ? requests : [requests];

    if (normalisedRequests.length) {
      this.unsubscribeTopicsForWsKey(normalisedRequests, wsKey);
    }
  }

  /**
   * WS API Methods - similar to the REST API, but via WebSockets
   */

  /**
   * Send a Websocket API event on a connection. Returns a promise that resolves on reply.
   *
   * Returned promise is rejected if an exception is detected in the reply OR the connection disconnects for any reason (even if automatic reconnect will happen).
   *
   * After a fresh connection, you should always send a login request first.
   *
   * If you authenticated once and you're reconnected later (e.g. connection temporarily lost), the SDK will by default automatically:
   * - Detect you were authenticated to the WS API before
   * - Try to re-authenticate (up to 5 times, in case something (bad timestamp) goes wrong)
   * - If it succeeds, it will emit the 'authenticated' event.
   * - If it fails and gives up, it will emit an 'exception' event (type: 'wsapi.auth', reason: detailed text).
   *
   * You can turn off the automatic re-auth WS API logic using `reauthWSAPIOnReconnect: false` in the WSClient config.
   *
   * @param wsKey - The connection this event is for.
   * @param channel - The channel this event is for (e.g. "spot.login" to authenticate)
   * @param params - Any request parameters for the payload (contents of req_param in the docs). Signature generation is automatic, only send parameters such as order ID as per the docs.
   * @returns Promise - tries to resolve with async WS API response. Rejects if disconnected or exception is seen in async WS API response
   */
  async sendWSAPIRequest<
    TWSKey extends keyof WSAPIWsKeyTopicMap,
    TWSOperation extends keyof WSAPITopicRequestParamMap &
      WSAPIWsKeyTopicMap[TWSKey],
    TWSParams extends Exact<WSAPITopicRequestParamMap[TWSOperation]>,
    TWSAPIResponse extends
      | WSAPITopicResponseMap[TWSOperation]
      | object = WSAPITopicResponseMap[TWSOperation],
  >(
    wsKey: TWSKey,
    operation: TWSOperation,
    params?: TWSParams,
    requestFlags?: WSAPIRequestFlags,
  ): Promise<TWSAPIResponse>;

  async sendWSAPIRequest<
    TWSKey extends keyof WSAPIWsKeyTopicMap,
    TWSOperation extends keyof WSAPITopicRequestParamMap &
      WSAPIWsKeyTopicMap[TWSKey],
    TWSParams extends Exact<WSAPITopicRequestParamMap[TWSOperation]>,
    TWSAPIResponse extends
      | WSAPITopicResponseMap[TWSOperation]
      | object = WSAPITopicResponseMap[TWSOperation],
  >(
    wsKey: TWSKey,
    operation: TWSOperation,
    params: TWSParams & { signRequest?: boolean },
    requestFlags?: WSAPIRequestFlags,
  ): Promise<TWSAPIResponse> {
    this.logger.trace(`sendWSAPIRequest(): assert "${wsKey}" is connected`, {
      ...WS_LOGGER_CATEGORY,
    });

    await this.assertIsConnected(wsKey);

    // Used by other exchanges for commands that don't require authentication.
    if (requestFlags?.authIsOptional !== true) {
      this.logger.trace(
        'sendWSAPIRequest(): assertIsAuthenticated(${wsKey})...',
      );
      await this.assertIsAuthenticated(wsKey);
      this.logger.trace(
        'sendWSAPIRequest(): assertIsAuthenticated(${wsKey}) ok',
      );
    }

    const cid = requestFlags?.cid || `${this.getNewRequestId()}`;
    const requestEvent = this.getWsApiRequestEvent(
      wsKey,
      operation,
      params,
      cid,
    );

    const promiseRef = getPromiseRefForWSAPIRequest(wsKey, requestEvent);
    this.trackWSAPIRequestRef(promiseRef, wsKey, operation, cid);

    const deferredPromise = this.getWsStore().createDeferredPromise<
      TWSAPIResponse & { request: unknown }
    >(wsKey, promiseRef, false);

    deferredPromise.promise
      ?.then((res) => {
        if (!Array.isArray(res)) {
          res.request = {
            wsKey,
            ...requestEvent,
          };
        }

        return res;
      })
      .catch((e: unknown) => {
        if (typeof e !== 'object' || !e) {
          this.logger.error('Unexpected non-object thrown by WS API request', {
            e,
            wsKey,
            requestEvent,
          });
          return e;
        }

        Object.assign(e, {
          request: {
            wsKey,
            operation,
            params,
          },
        });

        return e;
      });

    deferredPromise.promise?.then(
      () => this.wsApiInflightRequestRefs.delete(promiseRef),
      () => this.wsApiInflightRequestRefs.delete(promiseRef),
    );

    this.tryWsSend(wsKey, JSON.stringify(requestEvent), true);

    this.logger.trace(
      `sendWSAPIRequest(): sent "${operation}" event with promiseRef(${promiseRef})`,
      { ...WS_LOGGER_CATEGORY, requestEvent },
    );

    return deferredPromise.promise!;
  }

  protected isCustomReconnectionNeeded(): boolean {
    return false;
  }

  protected async triggerCustomReconnectionWorkflow(): Promise<void> {
    return;
  }

  protected async getWsUrl(wsKey: WsKey): Promise<string> {
    if (this.options.wsUrl) {
      return this.options.wsUrl;
    }

    return getHtxWsUrl(wsKey, this.getWsNetwork());
  }

  protected sendPingEvent(wsKey: WsKey, ws: WebSocket) {
    const ts = Date.now() + this.getTimeOffsetMs();

    // These WS Keys use native ping frames, since the JSON ping is not supported for these websocket endpoints (confirmed by HTX)
    const isNativeClientPingWsKey =
      wsKey === WS_KEY_MAP.derivativesIndex ||
      wsKey === WS_KEY_MAP.derivativesSystem ||
      wsKey === WS_KEY_MAP.spotPrivateV2;

    if (isNativeClientPingWsKey) {
      try {
        if (typeof ws.ping !== 'function') {
          this.logger.trace(
            'Unable to send WS ping frame. Not available in this environment.',
            { ...WS_LOGGER_CATEGORY, wsKey },
          );
          return;
        }

        if (ws.readyState !== WebSocket.OPEN) {
          this.logger.trace(
            'WS ready state not open - refusing to send WS ping frame',
            { ...WS_LOGGER_CATEGORY, wsKey, readyState: ws.readyState },
          );
          return;
        }

        ws.ping();
      } catch (e) {
        this.logger.error('Failed to send WS ping frame', {
          ...WS_LOGGER_CATEGORY,
          wsKey,
          exception: e,
        });
      }

      return;
    }

    if (this.isSpotPrivateProtocolWsKey(wsKey)) {
      this.tryWsSend(
        wsKey,
        JSON.stringify({
          action: 'ping',
          data: {
            ts,
          },
        }),
      );
      return;
    }

    if (this.isDerivativesOperationProtocolWsKey(wsKey)) {
      this.tryWsSend(
        wsKey,
        JSON.stringify({
          op: 'ping',
          ts,
        }),
      );
      return;
    }

    this.tryWsSend(
      wsKey,
      JSON.stringify({
        ping: ts,
      }),
    );
  }

  protected sendPongEvent(wsKey: WsKey, _ws: WebSocket, event?: unknown) {
    const parsed = this.parseWsMessage(event);
    const ts = this.getHeartbeatTimestamp(parsed) || Date.now();

    if (this.isSpotPrivateProtocolWsKey(wsKey)) {
      this.tryWsSend(
        wsKey,
        JSON.stringify({
          action: 'pong',
          data: {
            ts,
          },
        }),
      );
      return;
    }

    if (this.isDerivativesOperationProtocolWsKey(wsKey)) {
      this.tryWsSend(
        wsKey,
        JSON.stringify({
          op: 'pong',
          ts,
        }),
      );
      return;
    }

    this.tryWsSend(
      wsKey,
      JSON.stringify({
        pong: ts,
      }),
    );
  }

  protected isWsPing(event: unknown): boolean {
    const parsed = this.parseWsMessage(event);
    if (!parsed) {
      return false;
    }

    return (
      Object.prototype.hasOwnProperty.call(parsed, 'ping') ||
      parsed.action === 'ping' ||
      parsed.op === 'ping'
    );
  }

  protected isWsPong(event: unknown): boolean {
    const parsed = this.parseWsMessage(event);
    if (!parsed) {
      return isRecord(event) && event.eventType === 'pong';
    }

    return (
      Object.prototype.hasOwnProperty.call(parsed, 'pong') ||
      parsed.action === 'pong' ||
      parsed.op === 'pong'
    );
  }

  protected resolveEmittableEvents(
    wsKey: WsKey,
    event: MessageEventLike,
  ): EmittableEvent[] {
    const results: EmittableEvent[] = [];

    try {
      const parsed = JSON.parse(event.data) as ParsedWsMessage;
      const emittableEvent = {
        ...parsed,
        wsKey,
      };

      if (this.isWsPong(parsed)) {
        results.push({
          eventType: 'pong',
          event: emittableEvent,
        });
        return results;
      }

      if (this.isAuthResponse(parsed)) {
        const isError = this.isErrorEvent(parsed);

        if (isError) {
          results.push({
            eventType: 'exception',
            event: emittableEvent,
          });
          return results;
        }

        results.push({
          eventType: 'response',
          event: emittableEvent,
        });

        results.push({
          eventType: 'authenticated',
          event: emittableEvent,
        });
        return results;
      }

      if (this.isWSAPIResponse(wsKey, parsed)) {
        return this.resolveWSAPIResponse(wsKey, parsed);
      }

      if (this.isErrorEvent(parsed)) {
        results.push({
          eventType: 'exception',
          event: emittableEvent,
        });
        return results;
      }

      if (this.isSubscriptionResponse(parsed)) {
        results.push({
          eventType: 'response',
          event: emittableEvent,
        });
        return results;
      }

      if (this.isRequestResponse(parsed)) {
        results.push({
          eventType: 'response',
          event: emittableEvent,
        });
        return results;
      }

      results.push({
        eventType: 'message',
        event: emittableEvent,
      });
      return results;
    } catch (e) {
      this.logger.error('Failed to parse ws event message', {
        ...WS_LOGGER_CATEGORY,
        error: e,
        event,
        wsKey,
      });
    }

    return results;
  }

  protected isPrivateTopicRequest(
    request: WSTopicRequest<WSTopic>,
    wsKey: WsKey,
  ): boolean {
    const topic = request.topic;
    if (!topic) {
      return false;
    }

    if (topic.startsWith('public.')) {
      return false;
    }

    return isPrivateTopic(topic) || isPrivateWsKey(wsKey);
  }

  protected getPrivateWSKeys(): WsKey[] {
    return PRIVATE_WS_KEYS;
  }

  protected authPrivateConnectionsOnConnect(wsKey: WsKey): boolean {
    return this.isAuthOnConnectWsKey(wsKey);
  }

  protected isAuthOnConnectWsKey(wsKey: WsKey): boolean {
    return PRIVATE_WS_KEYS.includes(wsKey);
  }

  protected getMaxTopicsPerSubscribeEvent(): number | null {
    return 1;
  }

  protected async getWsRequestEvents(
    wsKey: WsKey,
    operation: WSOperation,
    requests: WSTopicRequest<WSTopic>[],
  ): Promise<MidflightWsRequestEvent<HTXWSRequest>[]> {
    const requestEvents: MidflightWsRequestEvent<HTXWSRequest>[] = [];

    for (const topicRequest of requests) {
      const payload = this.getPayloadRecord(topicRequest.payload);

      if (this.isMarketProtocolWsKey(wsKey)) {
        const id =
          this.getPayloadStringOrNumber(payload, 'id') ||
          `${this.getNewRequestId()}`;
        const requestEvent: HTXWSRequest = {
          [operation === 'subscribe' ? 'sub' : 'unsub']: topicRequest.topic,
          id,
          ...omitKeys(payload, ['id']),
        };

        requestEvents.push({
          requestKey: id,
          requestEvent,
        });
        continue;
      }

      if (wsKey === WS_KEY_MAP.spotPrivateV2) {
        const requestEvent: HTXSpotPrivateWSRequest = {
          action: operation === 'subscribe' ? 'sub' : 'unsub',
          ch: topicRequest.topic,
          ...omitKeys(payload, ['id', 'cid']),
        };

        requestEvents.push({
          requestKey: topicRequest.topic,
          requestEvent,
        });
        continue;
      }

      if (this.isDerivativesTopicProtocolWsKey(wsKey)) {
        const cid =
          this.getPayloadStringOrNumber(payload, 'cid') ||
          `${this.getNewRequestId()}`;
        const requestEvent: HTXDerivativesWSRequest = {
          op: operation === 'subscribe' ? 'sub' : 'unsub',
          cid: `${cid}`,
          topic: topicRequest.topic,
          ...omitKeys(payload, ['id', 'cid']),
        };

        requestEvents.push({
          requestKey: cid,
          requestEvent,
        });
        continue;
      }

      if (TRADE_WS_KEYS.includes(wsKey)) {
        throw new Error(
          `WS API trade key "${wsKey}" does not support topic subscriptions. Use sendWSAPIRequest() instead.`,
        );
      }

      throw new Error(`Unhandled wsKey "${wsKey}"`);
    }

    return requestEvents;
  }

  protected async getWsAuthRequestEvent(
    wsKey: WsKey,
  ): Promise<object | string | void> {
    if (!this.options.apiKey || !this.options.apiSecret) {
      throw new Error('Cannot auth - missing api key or secret in config');
    }

    if (this.isSpotPrivateProtocolWsKey(wsKey)) {
      const authParams = await this.getSpotAuthParams(wsKey);
      return {
        action: 'req',
        ch: 'auth',
        params: authParams,
      };
    }

    if (this.isDerivativesOperationProtocolWsKey(wsKey)) {
      return this.getDerivativesAuthParams(wsKey);
    }

    return;
  }

  private getWsApiRequestEvent<
    TWSKey extends keyof WSAPIWsKeyTopicMap,
    TWSOperation extends keyof WSAPITopicRequestParamMap &
      WSAPIWsKeyTopicMap[TWSKey],
    TWSParams extends Exact<WSAPITopicRequestParamMap[TWSOperation]>,
  >(
    wsKey: TWSKey,
    operation: TWSOperation,
    params: TWSParams | undefined,
    cid: string,
  ): HTXWSAPIRawRequest {
    if (wsKey === WS_KEY_MAP.spotTrade) {
      const request: HTXSpotWSAPIRawRequest<string, unknown> = {
        cid,
        ch: operation,
      };

      if (typeof params !== 'undefined') {
        request.params = removeInternalParamFields(params);
      }

      return request;
    }

    const request: HTXDerivativesWSAPIRawRequest<string, unknown> = {
      cid,
      op: operation,
    };

    if (typeof params !== 'undefined') {
      request.data = removeInternalParamFields(params);
    }

    return request;
  }

  private resolveWSAPIResponse(
    wsKey: WsKey,
    parsed: ParsedWsMessage,
  ): EmittableEvent[] {
    const promiseRef = this.getPromiseRefForWSAPIResponse(wsKey, parsed);
    const operation =
      this.getEventOperation(parsed) ||
      (promiseRef
        ? this.wsApiInflightRequestRefs.get(promiseRef)?.operation
        : undefined);
    const cid = getStringOrUndefined(parsed.cid);
    const isError = this.isErrorEvent(parsed);
    const event = {
      ...parsed,
      wsKey,
    };

    if (!promiseRef) {
      this.logger.error('WS API response could not be correlated to request', {
        ...WS_LOGGER_CATEGORY,
        wsKey,
        operation,
        cid,
        parsed,
      });
      return [
        {
          eventType: isError ? 'exception' : 'response',
          event,
          isWSAPIResponse: true,
        },
      ];
    }

    try {
      if (isError) {
        this.getWsStore().rejectDeferredPromise(wsKey, promiseRef, event, true);
      } else {
        this.getWsStore().resolveDeferredPromise(
          wsKey,
          promiseRef,
          event,
          true,
        );
      }
      this.wsApiInflightRequestRefs.delete(promiseRef);
    } catch (e) {
      this.logger.error('Exception trying to settle WS API promise', {
        ...WS_LOGGER_CATEGORY,
        wsKey,
        promiseRef,
        parsed,
        error: e,
      });
    }

    return [
      {
        eventType: isError ? 'exception' : 'response',
        event,
        isWSAPIResponse: true,
      },
    ];
  }

  private async getSpotAuthParams(wsKey: WsKey): Promise<WsSpotAuthParams> {
    const endpoint = await this.getWsEndpointParts(wsKey);
    const timestamp = this.getTimestampForSignature();
    const signatureMethod = this.getSignatureMethod();
    const paramsToSign = {
      accessKey: this.options.apiKey!,
      signatureMethod,
      signatureVersion: '2.1',
      timestamp,
    } as const;

    const signature = await this.signHtxParams(
      endpoint.host,
      endpoint.path,
      paramsToSign,
    );

    return {
      authType: 'api',
      ...paramsToSign,
      signature,
    };
  }

  private async getDerivativesAuthParams(
    wsKey: WsKey,
  ): Promise<WsDerivativesAuthParams> {
    const endpoint = await this.getWsEndpointParts(wsKey);
    const Timestamp = this.getTimestampForSignature();
    const SignatureMethod = this.getSignatureMethod();
    const paramsToSign = {
      AccessKeyId: this.options.apiKey!,
      SignatureMethod,
      SignatureVersion: '2',
      Timestamp,
    } as const;

    const Signature = await this.signHtxParams(
      endpoint.host,
      endpoint.path,
      paramsToSign,
    );

    return {
      op: 'auth',
      type: 'api',
      ...paramsToSign,
      Signature,
    };
  }

  private async signHtxParams(
    host: string,
    path: string,
    params: Record<string, string>,
  ): Promise<string> {
    const serializedParams = serializeParams(
      params,
      this.options.restOptions?.strictParamValidation,
      true,
      '',
      false,
    );

    const signInput = ['GET', host.toLowerCase(), path, serializedParams].join(
      '\n',
    );

    return this.signMessage(
      signInput,
      this.options.apiSecret!,
      'base64',
      'SHA-256',
    );
  }

  private async signMessage(
    paramsStr: string,
    secret: string,
    method: SignEncodeMethod,
    algorithm: SignAlgorithm,
  ): Promise<string> {
    if (typeof this.options.customSignMessageFn === 'function') {
      return this.options.customSignMessageFn(paramsStr, secret);
    }

    return signRawMessage(paramsStr, secret, method, algorithm);
  }

  private getSignatureMethod(): 'HmacSHA256' | 'Ed25519' {
    return getSignKeyType(this.options.apiSecret!) === 'HMAC'
      ? 'HmacSHA256'
      : 'Ed25519';
  }

  private getTimestampForSignature(): string {
    return new Date(Date.now() + this.getTimeOffsetMs())
      .toISOString()
      .split('.')[0];
  }

  private async getWsEndpointParts(wsKey: WsKey): Promise<WsEndpointParts> {
    const url = await this.getWsUrl(wsKey);
    const parsedUrl = new URL(url);

    return {
      url,
      host: parsedUrl.host,
      path: parsedUrl.pathname || WS_KEY_PATH_MAP[wsKey],
    };
  }

  private getWsNetwork(): HtxWSNetwork {
    if (this.options.wsEnvironment) {
      return this.options.wsEnvironment;
    }

    const baseUrlKey = this.options.restOptions?.baseUrlKey;

    if (
      baseUrlKey === REST_CLIENT_TYPE_ENUM.spot ||
      baseUrlKey === REST_CLIENT_TYPE_ENUM.futures ||
      baseUrlKey === REST_CLIENT_TYPE_ENUM.futuresAlt1
    ) {
      return 'standard';
    }

    return 'aws';
  }

  private isMarketProtocolWsKey(wsKey: WsKey): boolean {
    return (
      wsKey === WS_KEY_MAP.spotPublic ||
      wsKey === WS_KEY_MAP.spotFeed ||
      wsKey === WS_KEY_MAP.linearSwapPublic ||
      wsKey === WS_KEY_MAP.coinDeliveryPublic ||
      wsKey === WS_KEY_MAP.coinSwapPublic ||
      wsKey === WS_KEY_MAP.derivativesIndex
    );
  }

  private isSpotPrivateProtocolWsKey(wsKey: WsKey): boolean {
    return wsKey === WS_KEY_MAP.spotPrivateV2 || wsKey === WS_KEY_MAP.spotTrade;
  }

  private isDerivativesTopicProtocolWsKey(wsKey: WsKey): boolean {
    return (
      wsKey === WS_KEY_MAP.linearSwapPrivate ||
      wsKey === WS_KEY_MAP.coinDeliveryPrivate ||
      wsKey === WS_KEY_MAP.coinSwapPrivate ||
      wsKey === WS_KEY_MAP.derivativesSystem
    );
  }

  private isDerivativesOperationProtocolWsKey(wsKey: WsKey): boolean {
    return (
      this.isDerivativesTopicProtocolWsKey(wsKey) ||
      wsKey === WS_KEY_MAP.linearSwapTrade ||
      wsKey === WS_KEY_MAP.coinDeliveryTrade ||
      wsKey === WS_KEY_MAP.coinSwapTrade
    );
  }

  private parseWsMessage(event: unknown): ParsedWsMessage | undefined {
    if (isRecord(event) && event.type === 'message') {
      return this.parseWsMessage(event.data);
    }

    if (typeof event === 'string') {
      try {
        return JSON.parse(event) as ParsedWsMessage;
      } catch {
        return undefined;
      }
    }

    if (isRecord(event)) {
      return event;
    }

    return undefined;
  }

  private getHeartbeatTimestamp(parsed?: ParsedWsMessage): string | number {
    if (!parsed) {
      return Date.now();
    }

    if (typeof parsed.ping === 'number' || typeof parsed.ping === 'string') {
      return parsed.ping;
    }

    const data = isRecord(parsed.data) ? parsed.data : undefined;
    if (typeof data?.ts === 'number' || typeof data?.ts === 'string') {
      return data.ts;
    }

    if (typeof parsed.ts === 'number' || typeof parsed.ts === 'string') {
      return parsed.ts;
    }

    return Date.now();
  }

  private getPayloadRecord(payload: unknown): Record<string, unknown> {
    return isRecord(payload) ? payload : {};
  }

  private getPayloadStringOrNumber(
    payload: Record<string, unknown>,
    key: string,
  ): string | number | undefined {
    const value = payload[key];
    if (typeof value === 'string' || typeof value === 'number') {
      return value;
    }

    return undefined;
  }

  private isAuthResponse(parsed: ParsedWsMessage): boolean {
    return (
      (parsed.action === 'req' && parsed.ch === 'auth') || parsed.op === 'auth'
    );
  }

  private isWSAPIResponse(wsKey: WsKey, parsed: ParsedWsMessage): boolean {
    if (!TRADE_WS_KEYS.includes(wsKey)) {
      return false;
    }

    if (this.isAuthResponse(parsed) || this.isWsPing(parsed)) {
      return false;
    }

    if (getStringOrUndefined(parsed.cid)) {
      return true;
    }

    const operation = this.getEventOperation(parsed);
    if (operation) {
      return WS_API_Operations.includes(operation as WSAPIOperation);
    }

    return (
      parsed.status === 'ok' ||
      parsed.status === 'error' ||
      typeof parsed.code === 'number' ||
      typeof parsed.success === 'boolean'
    );
  }

  private isSubscriptionResponse(parsed: ParsedWsMessage): boolean {
    if (
      typeof parsed.status === 'string' &&
      (parsed.subbed || parsed.unsubbed)
    ) {
      return true;
    }

    if (
      typeof parsed.action === 'string' &&
      ['sub', 'unsub', 'req'].includes(parsed.action)
    ) {
      return true;
    }

    if (typeof parsed.op === 'string' && ['sub', 'unsub'].includes(parsed.op)) {
      return true;
    }

    return false;
  }

  private isRequestResponse(parsed: ParsedWsMessage): boolean {
    return Boolean(parsed.rep || parsed.id);
  }

  private isErrorEvent(parsed: ParsedWsMessage): boolean {
    if (parsed.status === 'error') {
      return true;
    }

    if (typeof parsed.code === 'number' && parsed.code !== 200) {
      return true;
    }

    if (typeof parsed['err-code'] === 'number' && parsed['err-code'] !== 0) {
      return true;
    }

    if (typeof parsed.success === 'boolean' && parsed.success !== true) {
      return true;
    }

    return false;
  }

  private getEventOperation(parsed: ParsedWsMessage): string | undefined {
    return getStringOrUndefined(parsed.ch) || getStringOrUndefined(parsed.op);
  }

  private trackWSAPIRequestRef(
    promiseRef: string,
    wsKey: WSAPIWsKey,
    operation: WSAPIOperation,
    cid: string,
  ): void {
    this.wsApiInflightRequestRefs.set(promiseRef, {
      wsKey,
      operation,
      cid,
    });
  }

  private getPromiseRefForWSAPIResponse(
    wsKey: WsKey,
    parsed: ParsedWsMessage,
  ): string | undefined {
    const cid = getStringOrUndefined(parsed.cid);
    if (cid) {
      return `${getPromiseRefPrefixForWSAPIRequest(wsKey)}${cid}`;
    }

    const operation = this.getEventOperation(parsed);
    const matchingRefs = [...this.wsApiInflightRequestRefs.entries()]
      .filter(([, ref]) => {
        if (ref.wsKey !== wsKey) {
          return false;
        }

        if (operation) {
          return ref.operation === operation;
        }

        return true;
      })
      .map(([promiseRef]) => promiseRef);

    if (matchingRefs.length === 1) {
      return matchingRefs[0];
    }

    if (matchingRefs.length > 1) {
      const reason =
        'HTX WS API response did not include cid/op and multiple requests are pending; send these requests sequentially.';
      this.logger.error(reason, {
        ...WS_LOGGER_CATEGORY,
        wsKey,
        parsed,
        matchingRefs,
      });

      for (const promiseRef of matchingRefs) {
        this.getWsStore().rejectDeferredPromise(
          wsKey,
          promiseRef,
          new Error(reason),
          true,
        );
        this.wsApiInflightRequestRefs.delete(promiseRef);
      }
    }

    return undefined;
  }
}
