/**
 * Used to switch how authentication/requests work under the hood
 */
export const REST_CLIENT_TYPE_ENUM = {
  /** Spot */
  main: 'main',
  /** Futures */
  derivatives: 'derivatives',
  /** Futures Demo */
  derivativesDemo: 'derivativesDemo',
  /** Institutional */
  institutional: 'institutional',
  /** Partner */
  partner: 'partner',
} as const;

export type RestClientType =
  (typeof REST_CLIENT_TYPE_ENUM)[keyof typeof REST_CLIENT_TYPE_ENUM];

const krakenURLMap = {
  [REST_CLIENT_TYPE_ENUM.main]: 'https://api.kraken.com',
  [REST_CLIENT_TYPE_ENUM.derivatives]: 'https://futures.kraken.com',
  [REST_CLIENT_TYPE_ENUM.derivativesDemo]: 'https://demo-futures.kraken.com',
  [REST_CLIENT_TYPE_ENUM.institutional]: 'https://api.kraken.com',
  [REST_CLIENT_TYPE_ENUM.partner]: 'https://embed.kraken.com',
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
   * e.g baseUrl: 'https://api.kraken.com'
   **/
  baseUrl?: string;

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

export function serializeParams<T extends Record<string, any> | undefined = {}>(
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

  if (restClientOptions.testnet) {
    if (restClientType === REST_CLIENT_TYPE_ENUM.derivatives) {
      return krakenURLMap[REST_CLIENT_TYPE_ENUM.derivativesDemo];
    }

    throw new Error(
      `Testnet is not supported for this environment: ${restClientType}. Refer to Kraken's API documentation for more information. If you believe this is incorrect, please open an issue on GitHub.`,
    );
  }

  return krakenURLMap[restClientType];
}
