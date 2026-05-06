import WebSocket from 'isomorphic-ws';

import { MessageEventLike } from '../../types/websockets/ws-events.js';
import { WSTopic } from '../../types/websockets/ws-subscriptions.js';

export const WS_KEY_MAP = {
  /** Spot Market Data */
  spotPublic: 'spotPublic',
  /** Spot high-frequency market data */
  spotFeed: 'spotFeed',
  /** Spot Account Events */
  spotPrivateV2: 'spotPrivateV2',
  /** Spot WS API */
  spotTrade: 'spotTrade',

  /** Linear futures market data */
  linearSwapPublic: 'linearSwapPublic',
  /** Linear futures account events */
  linearSwapPrivate: 'linearSwapPrivate',
  /** Linear futures WS API */
  linearSwapTrade: 'linearSwapTrade',

  coinDeliveryPublic: 'coinDeliveryPublic',
  coinDeliveryPrivate: 'coinDeliveryPrivate',
  coinDeliveryTrade: 'coinDeliveryTrade',

  coinSwapPublic: 'coinSwapPublic',
  coinSwapPrivate: 'coinSwapPrivate',
  coinSwapTrade: 'coinSwapTrade',

  derivativesIndex: 'derivativesIndex',
  derivativesSystem: 'derivativesSystem',
} as const;

/** This is used to differentiate between each of the available websocket streams. */
export type WsKey = (typeof WS_KEY_MAP)[keyof typeof WS_KEY_MAP];

export type WSOperation = 'subscribe' | 'unsubscribe';

export type HtxWSNetwork = 'standard' | 'aws';

export const WS_BASE_URL_MAP: Record<
  HtxWSNetwork,
  Record<'spot' | 'futures', string>
> = {
  standard: {
    spot: 'wss://api.huobi.pro',
    futures: 'wss://api.hbdm.com',
  },
  aws: {
    spot: 'wss://api-aws.huobi.pro',
    futures: 'wss://api.hbdm.vn',
  },
};

export const WS_KEY_PATH_MAP: Record<WsKey, string> = {
  spotPublic: '/ws',
  spotFeed: '/feed',
  spotPrivateV2: '/ws/v2',
  spotTrade: '/ws/trade',

  linearSwapPublic: '/linear-swap-ws',
  linearSwapPrivate: '/linear-swap-notification',
  linearSwapTrade: '/linear-swap-trade',

  coinDeliveryPublic: '/ws',
  coinDeliveryPrivate: '/notification',
  coinDeliveryTrade: '/trade',

  coinSwapPublic: '/swap-ws',
  coinSwapPrivate: '/swap-notification',
  coinSwapTrade: '/swap-trade',

  derivativesIndex: '/ws_index',
  derivativesSystem: '/center-notification',
};

export const SPOT_WS_KEYS: WsKey[] = [
  WS_KEY_MAP.spotPublic,
  WS_KEY_MAP.spotFeed,
  WS_KEY_MAP.spotPrivateV2,
  WS_KEY_MAP.spotTrade,
];

export const DERIVATIVES_WS_KEYS: WsKey[] = [
  WS_KEY_MAP.linearSwapPublic,
  WS_KEY_MAP.linearSwapPrivate,
  WS_KEY_MAP.linearSwapTrade,
  WS_KEY_MAP.coinDeliveryPublic,
  WS_KEY_MAP.coinDeliveryPrivate,
  WS_KEY_MAP.coinDeliveryTrade,
  WS_KEY_MAP.coinSwapPublic,
  WS_KEY_MAP.coinSwapPrivate,
  WS_KEY_MAP.coinSwapTrade,
  WS_KEY_MAP.derivativesIndex,
  WS_KEY_MAP.derivativesSystem,
];

export const PRIVATE_WS_KEYS: WsKey[] = [
  WS_KEY_MAP.spotPrivateV2,
  WS_KEY_MAP.spotTrade,
  WS_KEY_MAP.linearSwapPrivate,
  WS_KEY_MAP.linearSwapTrade,
  WS_KEY_MAP.coinDeliveryPrivate,
  WS_KEY_MAP.coinDeliveryTrade,
  WS_KEY_MAP.coinSwapPrivate,
  WS_KEY_MAP.coinSwapTrade,
];

export const TRADE_WS_KEYS: WsKey[] = [
  WS_KEY_MAP.spotTrade,
  WS_KEY_MAP.linearSwapTrade,
  WS_KEY_MAP.coinDeliveryTrade,
  WS_KEY_MAP.coinSwapTrade,
];

export const GZIP_WS_KEYS: WsKey[] = [
  WS_KEY_MAP.spotPublic,
  WS_KEY_MAP.spotFeed,
  WS_KEY_MAP.linearSwapPublic,
  WS_KEY_MAP.linearSwapPrivate,
  WS_KEY_MAP.linearSwapTrade,
  WS_KEY_MAP.coinDeliveryPublic,
  WS_KEY_MAP.coinDeliveryPrivate,
  WS_KEY_MAP.coinDeliveryTrade,
  WS_KEY_MAP.coinSwapPublic,
  WS_KEY_MAP.coinSwapPrivate,
  WS_KEY_MAP.coinSwapTrade,
  WS_KEY_MAP.derivativesIndex,
  WS_KEY_MAP.derivativesSystem,
];

/**
 * Normalised internal format for a request on a topic, with optional parameters.
 *
 * - Topic: the exchange topic string.
 * - Payload: optional exchange-specific fields to merge into the request.
 */
export interface WSTopicRequest<
  TWSTopic extends WSTopic = WSTopic,
  TWSPayload = Record<string, unknown>,
> {
  topic: TWSTopic;
  payload?: TWSPayload;
}

/** Conveniently allow users to request either string topics or topic objects. */
export type WSTopicRequestOrStringTopic<
  TWSTopic extends WSTopic,
  TWSPayload = Record<string, unknown>,
> = WSTopicRequest<TWSTopic, TWSPayload> | string;

export interface HTXSpotMarketWSRequest {
  sub?: string | string[];
  unsub?: string | string[];
  req?: string;
  id?: string | number;
}

export interface HTXSpotPrivateWSRequest {
  action: 'sub' | 'unsub' | 'req' | 'ping' | 'pong';
  ch?: string;
  params?: Record<string, unknown>;
  data?: Record<string, unknown>;
}

export interface HTXDerivativesWSRequest {
  op: 'sub' | 'unsub' | 'req' | 'ping' | 'pong' | 'auth' | string;
  cid?: string;
  topic?: string;
  data?: Record<string, unknown> | Record<string, unknown>[];
  [key: string]: unknown;
}

export type HTXWSRequest =
  | HTXSpotMarketWSRequest
  | HTXSpotPrivateWSRequest
  | HTXDerivativesWSRequest;

export interface HTXSpotWSAPIRawRequest<
  TOperation extends string = string,
  TParams = unknown,
> {
  cid: string;
  ch: TOperation;
  params?: TParams;
}

export interface HTXDerivativesWSAPIRawRequest<
  TOperation extends string = string,
  TParams = unknown,
> {
  op: TOperation;
  cid: string;
  data?: TParams;
}

export type HTXWSAPIRawRequest =
  | HTXSpotWSAPIRawRequest<string, unknown>
  | HTXDerivativesWSAPIRawRequest<string, unknown>;

/**
 * ws.terminate() is undefined in browsers.
 * This only works in node.js, not in browsers.
 * Does nothing if `ws` is undefined. Does nothing in browsers.
 */
export function safeTerminateWs(
  ws?: WebSocket | unknown,
  fallbackToClose?: boolean,
): boolean {
  if (!ws) {
    return false;
  }

  const websocket = ws as WebSocket & {
    terminate?: () => void;
  };

  if (typeof websocket.terminate === 'function') {
    websocket.terminate();
    return true;
  } else if (fallbackToClose) {
    websocket.close();
  }

  return false;
}

export function isSpotWsKey(wsKey: WsKey): boolean {
  return SPOT_WS_KEYS.includes(wsKey);
}

export function isDerivativesWsKey(wsKey: WsKey): boolean {
  return DERIVATIVES_WS_KEYS.includes(wsKey);
}

export function isPrivateWsKey(wsKey: WsKey): boolean {
  return PRIVATE_WS_KEYS.includes(wsKey);
}

export function isTradeWsKey(wsKey: WsKey): boolean {
  return TRADE_WS_KEYS.includes(wsKey);
}

export function isGzipWsKey(wsKey: WsKey): boolean {
  return GZIP_WS_KEYS.includes(wsKey);
}

export function getWsBaseUrl(wsKey: WsKey, network: HtxWSNetwork): string {
  if (isSpotWsKey(wsKey)) {
    return WS_BASE_URL_MAP[network].spot;
  }

  if (isDerivativesWsKey(wsKey)) {
    return WS_BASE_URL_MAP[network].futures;
  }

  throw new Error(`Unhandled wsKey "${wsKey}"`);
}

export function getWsUrl(wsKey: WsKey, network: HtxWSNetwork): string {
  return `${getWsBaseUrl(wsKey, network)}${WS_KEY_PATH_MAP[wsKey]}`;
}

export function getPromiseRefForWSAPIRequest(
  wsKey: WsKey,
  requestEvent: HTXWSAPIRawRequest,
): string {
  return `${getPromiseRefPrefixForWSAPIRequest(wsKey)}${requestEvent.cid}`;
}

export function getPromiseRefPrefixForWSAPIRequest(wsKey: WsKey): string {
  return `${wsKey}_WSAPI_`;
}

export function isBufferMessageEvent(
  msg: unknown,
): msg is MessageEventLike<Buffer | ArrayBuffer | ArrayBufferView> {
  if (typeof msg !== 'object' || !msg) {
    return false;
  }

  const message = msg as MessageEventLike<unknown>;
  if (message.type !== 'message') {
    return false;
  }

  return isBinaryLike(message.data);
}

export function isBinaryLike(
  data: unknown,
): data is Buffer | ArrayBuffer | ArrayBufferView {
  return (
    isNodeBuffer(data) ||
    data instanceof ArrayBuffer ||
    ArrayBuffer.isView(data)
  );
}

export function binaryDataToUint8Array(
  data: Buffer | ArrayBuffer | ArrayBufferView,
): Uint8Array {
  if (isNodeBuffer(data)) {
    return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
  }

  if (data instanceof ArrayBuffer) {
    return new Uint8Array(data);
  }

  return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
}

export function bufferLooksLikeText(
  data?: Buffer | ArrayBuffer | ArrayBufferView | null,
): boolean {
  if (!data) {
    return false;
  }

  const bytes = binaryDataToUint8Array(data);
  if (!bytes.length) {
    return false;
  }

  const first = bytes[0];
  return first === 0x7b || first === 0x5b || first === 0x22;
}

export async function decompressMessageEvent(
  event: MessageEventLike<Buffer | ArrayBuffer | ArrayBufferView>,
  format: CompressionFormat = 'gzip',
): Promise<MessageEventLike<string>> {
  const data = event.data;
  if (typeof data === 'string') {
    return { ...event, type: 'message', data };
  }

  if (bufferLooksLikeText(data)) {
    return {
      ...event,
      type: 'message',
      data: new TextDecoder().decode(binaryDataToUint8Array(data)),
    };
  }

  const ds = new DecompressionStream(format);
  const bytes = binaryDataToUint8Array(data);
  const dataStream = new Response(bytes).body;

  let decompressedStream: ReadableStream;
  if (!dataStream) {
    const rs = new ReadableStream({
      start(controller) {
        controller.enqueue(bytes);
        controller.close();
      },
    });
    decompressedStream = rs.pipeThrough(ds);
  } else {
    decompressedStream = dataStream.pipeThrough(ds);
  }

  return {
    ...event,
    type: 'message',
    data: await new Response(decompressedStream).text(),
  };
}

function isNodeBuffer(data: unknown): data is Buffer {
  return typeof Buffer !== 'undefined' && Buffer.isBuffer(data);
}
