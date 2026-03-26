/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Used to switch how authentication/requests work under the hood
 */
export const REST_CLIENT_TYPE_ENUM = {
  /** Spot */
  spot: 'spot',
  /** Spot AWS */
  spotAWS: 'spotAWS',
  /** Futures */
  futures: 'futures',
  /** Futures AWS */
  futuresAWS: 'futuresAWS',
} as const;

export type RestClientType =
  (typeof REST_CLIENT_TYPE_ENUM)[keyof typeof REST_CLIENT_TYPE_ENUM];

const htxURLMap = {
  [REST_CLIENT_TYPE_ENUM.spot]: 'https://api.huobi.pro',
  [REST_CLIENT_TYPE_ENUM.spotAWS]: 'https://api-aws.huobi.pro',
  [REST_CLIENT_TYPE_ENUM.futures]: 'https://api.hbdm.com',
  [REST_CLIENT_TYPE_ENUM.futuresAWS]: 'https://api.hbdm.vn',
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

  /** Use AWS region endpoint (api-aws.huobi.pro for spot, api.hbdm.vn for futures). Default false. */
  useAWS?: boolean;

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

export const APIIDMainKey = 'broker';
export const APIIDMain = 'AA56 N84G TOOP ELJQ';

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
  return htxURLMap[restClientType];
}
