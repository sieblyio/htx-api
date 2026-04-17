/* eslint-disable @typescript-eslint/no-explicit-any */

import { OrderIdProperty } from '../types/response/shared.types';

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
   * Set to `true` to connect to testnet (Kraken's demo environment). The live environment is used by default.
   *
   * Note: as of November 2025, only the DerivativesClient supports testnet connections. Kraken refer to this as the "Demo" environment, but it is effectively a testnet.
   * This is a place to test your API integration. It is not a good place to test strategy performance, as the liquidity and orderbook dynamics are very different to the live environment.
   *
   * Refer to the following for more information:
   * https://github.com/tiagosiebler/awesome-crypto-examples/wiki/CEX-Testnets
   */
  testnet?: boolean;

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
    `WARNING: '${orderIdProperty}' invalid - it should be prefixed with ${expectedOrderIdPrefix}. Use the 'client.generateNewOrderID()' REST client utility method to generate a fresh order ID on demand. Original request: ${JSON.stringify(
      params,
    )}`,
  );
}

export const APIIDMainKey = 'channel_code';
export const APIIDMain = 'AA8568bd0c';

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
