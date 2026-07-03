/* eslint-disable @typescript-eslint/no-explicit-any */

import { OrderIdProperty } from '../types/response/shared.types';
import {
  HTXWSAPIRequest,
  WSAPIDerivativesOperation,
  WSAPISpotOperation,
} from '../types/websockets/ws-api';
import {
  isDerivativesWSAPIRequest,
  isSpotWSAPIRequest,
} from './websocket/type-guards.js';
import { WS_KEY_MAP, WsKey } from './websocket/websocket-util.js';

/**
 * Used to switch how authentication/requests work under the hood
 */
export const REST_CLIENT_TYPE_ENUM = {
  /** Spot */
  spot: 'spot',
  /** Spot AWS */
  spotAWS: 'spotAWS',
  /**
   * Futures Cloudflare CDN (default for futures clients)
   */
  futures: 'futures',
  /**
   * Futures
   *
   * If you can't connect "https://api.hbdm.com", please use "https://api.btcgateway.pro" for debug purpose. If your server is deployed in AWS, we recommend using "https://api.hbdm.vn".
   */
  futuresAlt1: 'futuresAlt1',
  /**
   * Futures AWS CDN
   */
  futuresAWS: 'futuresAWS',
} as const;

export type RestClientType =
  (typeof REST_CLIENT_TYPE_ENUM)[keyof typeof REST_CLIENT_TYPE_ENUM];

const htxURLMap = {
  [REST_CLIENT_TYPE_ENUM.spot]: 'https://api.huobi.pro',
  [REST_CLIENT_TYPE_ENUM.spotAWS]: 'https://api-aws.huobi.pro',
  [REST_CLIENT_TYPE_ENUM.futures]: 'https://api.hbdm.com', // Cloudflare's CDN
  // If you can't connect "https://api.hbdm.com", please use "https://api.btcgateway.pro" for debug purpose. If your server is deployed in AWS, HTX recommend using "https://api.hbdm.vn".
  [REST_CLIENT_TYPE_ENUM.futuresAlt1]: 'https://api.btcgateway.pro',
  [REST_CLIENT_TYPE_ENUM.futuresAWS]: 'https://api.hbdm.vn', // AWS's CDN
} as const;

export interface RestClientOptions {
  /** Your API key */
  apiKey?: string;

  /** Your API secret */
  apiSecret?: string;

  /**
   * Use access token instead of sign, if this is provided.
   * For guidance refer to: https://github.com/tiagosiebler/kucoin-api/issues/2
   */
  apiAccessToken?: string;

  /** Default: false. If true, we'll throw errors if any params are undefined */
  strictParamValidation?: boolean;

  /**
   * Optionally override API protocol + domain
   * e.g baseUrl: 'https://api.huobi.pro'
   **/
  baseUrl?: string;

  /**
   * Advanced: force a specific base URL.
   * - For AWS deployments, use REST_CLIENT_TYPE_ENUM.spotAWS for spot or REST_CLIENT_TYPE_ENUM.futuresAWS for futures.
   * - If you can't connect to the default futures endpoint (Cloudflare's CDN), you can use REST_CLIENT_TYPE_ENUM.futuresAlt1 to connect to the alternative endpoint (btcgateway.pro). https://www.htx.com/en-us/opend/newApiPages/?id=707
   */
  baseUrlKey?: RestClientType;

  /** Default: true. whether to try and post-process request exceptions (and throw them). */
  parseExceptions?: boolean;

  customTimestampFn?: () => number;

  /**
   * Enable keep alive for REST API requests (via axios).
   */
  keepAlive?: boolean;

  /**
   * When using HTTP KeepAlive, how often to send TCP KeepAlive packets over sockets being kept alive. Default = 1000.
   * Only relevant if keepAlive is set to true.
   * Default: 1000 (defaults comes from https agent)
   */
  keepAliveMsecs?: number;

  /**
   * Allows you to provide a custom "signMessage" function, e.g. to use node's much faster createHmac method
   *
   * Look in the examples folder for a demonstration on using node's createHmac instead.
   */
  customSignMessageFn?: (message: string, secret: string) => Promise<string>;
}

export type GenericAPIResponse<T = any> = Promise<T>;

export function serializeParams<
  T extends Record<string, any> | undefined = object,
>(
  params: T,
  strict_validation: boolean | undefined,
  encodeValues: boolean,
  prefixWith: string,
  repeatArrayValuesAsKVPairs: boolean,
): string {
  if (!params) {
    return '';
  }

  const queryString = Object.keys(params)
    .sort()
    .map((key) => {
      const value = params[key];
      if (strict_validation === true && typeof value === 'undefined') {
        throw new Error(
          'Failed to sign API request due to undefined parameter',
        );
      }

      if (repeatArrayValuesAsKVPairs && Array.isArray(value)) {
        const values = value.map((subValue) => {
          const encodedValue = encodeValues
            ? encodeURIComponent(subValue)
            : subValue;
          return `${key}=${encodedValue}`;
        });

        return values.join('&');
      }
      const encodedValue = encodeValues ? encodeURIComponent(value) : value;
      return `${key}=${encodedValue}`;
    })
    .join('&');

  // Only prefix if there's a value
  return queryString ? prefixWith + queryString : queryString;
}

export function logInvalidOrderId(
  orderIdProperty: OrderIdProperty,
  expectedOrderIdPrefix: string,
  params: object,
) {
  console.warn(
    `WARNING: '${orderIdProperty}' invalid - it should be prefixed with ${expectedOrderIdPrefix}. Use 'client.generateNewOrderID()' to generate a fresh order ID on demand, or prefix your own suffix with 'client.getOrderIdPrefix()'. Original request: ${JSON.stringify(
      params,
    )}`,
  );
}

export const APIIDMainKey = 'channel_code';
export const APIIDMain = 'AA8568bd0c';

function getWSAPICustomOrderIdProperties(
  operation: WSAPISpotOperation | string,
  wsKey: WsKey,
): OrderIdProperty[] {
  switch (wsKey) {
    case WS_KEY_MAP.spotPublic:
    case WS_KEY_MAP.spotFeed:
    case WS_KEY_MAP.spotPrivateV2:
    case WS_KEY_MAP.linearSwapPublic:
    case WS_KEY_MAP.linearSwapPrivate:
    case WS_KEY_MAP.linearSwapTrade:
    case WS_KEY_MAP.coinDeliveryPublic:
    case WS_KEY_MAP.coinDeliveryPrivate:
    case WS_KEY_MAP.coinDeliveryTrade:
    case WS_KEY_MAP.coinSwapPublic:
    case WS_KEY_MAP.coinSwapPrivate:
    case WS_KEY_MAP.coinSwapTrade:
    case WS_KEY_MAP.derivativesIndex:
    case WS_KEY_MAP.derivativesSystem:
      return [];

    case WS_KEY_MAP.spotTrade: {
      switch (operation) {
        case 'create-order':
        case 'create-batchorder':
        case 'create-margin-order':
          return ['client-order-id'];
      }

      return [];
    }
    default: {
      return [];
    }
  }
}

function isOrderParamRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function getOrderParamRecords(params: unknown): Record<string, unknown>[] {
  if (Array.isArray(params)) {
    return params.filter(isOrderParamRecord);
  }

  if (isOrderParamRecord(params)) {
    return [params];
  }

  return [];
}

export function requiresWSAPINewCustomOID(
  request: HTXWSAPIRequest,
  wsKey: WsKey,
): boolean {
  if (wsKey !== WS_KEY_MAP.spotTrade || !isSpotWSAPIRequest(request)) {
    return false;
  }

  return getWSAPICustomOrderIdProperties(request.ch, wsKey).length > 0;
}

export function validateWSAPICustomOrderID(
  request: HTXWSAPIRequest,
  wsKey: WsKey,
): void {
  if (wsKey !== WS_KEY_MAP.spotTrade) {
    return;
  }

  if (!isSpotWSAPIRequest(request) || typeof request.params === 'undefined') {
    return;
  }

  const newClientOIDProperties = getWSAPICustomOrderIdProperties(
    request.ch,
    wsKey,
  );

  if (!newClientOIDProperties.length) {
    return;
  }

  const orderParamRecords = getOrderParamRecords(request.params);
  const expectedOrderIdPrefix1 = `${getOrderIdPrefix()}`;

  for (const params of orderParamRecords) {
    for (const orderIdProperty of newClientOIDProperties) {
      const orderId = params[orderIdProperty];

      if (!orderId) {
        params[orderIdProperty] = generateNewOrderID();
        continue;
      }

      if (
        typeof orderId !== 'string' ||
        !orderId.startsWith(expectedOrderIdPrefix1)
      ) {
        logInvalidOrderId(orderIdProperty, expectedOrderIdPrefix1, params);
      }
    }
  }
}

function isDerivativesWSAPIOrderPlacementOperation(
  operation: WSAPIDerivativesOperation | string,
): boolean {
  switch (operation) {
    case 'create_order':
    case 'create_cross_order':
    case 'create_batchorder':
    case 'create_cross_batchorder':
    case 'place_order':
    case 'place_batch_orders':
      return true;

    default:
      return false;
  }
}

export function validateWSAPIDerivativesChannelKey(
  request: HTXWSAPIRequest,
  wsKey: WsKey,
): void {
  switch (wsKey) {
    case WS_KEY_MAP.linearSwapTrade:
    case WS_KEY_MAP.coinDeliveryTrade:
    case WS_KEY_MAP.coinSwapTrade:
      break;

    default:
      return;
  }

  if (
    !isDerivativesWSAPIRequest(request) ||
    typeof request.data === 'undefined' ||
    !isDerivativesWSAPIOrderPlacementOperation(request.op)
  ) {
    return;
  }

  for (const params of getOrderParamRecords(request.data)) {
    params[APIIDMainKey] = APIIDMain;
  }
}

export function isEmptyObject(obj: any, acceptStringIfNotEmpty: boolean) {
  if (obj && acceptStringIfNotEmpty && typeof obj === 'string') {
    return false;
  }
  if (!obj || typeof obj !== 'object') {
    return true;
  }
  for (const _i in obj) {
    return false;
  }
  return true;
}

export function getRestBaseUrl(
  restClientOptions: RestClientOptions,
  restClientType: RestClientType,
): string {
  if (restClientOptions.baseUrl) {
    return restClientOptions.baseUrl;
  }

  if (restClientOptions.baseUrlKey) {
    const baseUrl = htxURLMap[restClientOptions.baseUrlKey];
    if (!baseUrl) {
      throw new Error(
        `Invalid baseUrlKey "${restClientOptions.baseUrlKey}". Valid options are: ${Object.keys(
          htxURLMap,
        ).join(', ')}`,
      );
    }
    return baseUrl;
  }

  return htxURLMap[restClientType];
}

/**
 * Iterates to extract pure domain from URL.
 * https://example.com/v1/endpoint -> example.com
 */
export function getBaseDomain(url: string): string {
  if (url.startsWith('https://')) {
    return getBaseDomain(url.replace('https://', ''));
  }

  if (url.indexOf('/') !== -1) {
    const splitUrl = url.split('/');
    return getBaseDomain(splitUrl[0]);
  }

  return url;
}

export function generateNewOrderID(): string {
  const hexChars = '0123456789abcdef';
  let result = APIIDMain;
  for (let i = 0; i < 54; i++) {
    result += hexChars[Math.floor(Math.random() * 16)];
  }
  return result;
}

export function getOrderIdPrefix(): string {
  return APIIDMain;
}
