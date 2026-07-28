/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';

import {
  configureHttpsKeepAlive,
  DEFAULT_REQUEST_HEADERS,
} from './https-agent.js';
import { neverGuard } from './misc-util.js';
import {
  APIIDMain,
  APIIDMainKey,
  GenericAPIResponse,
  getBaseDomain,
  getRestBaseUrl,
  isEmptyObject,
  REST_CLIENT_TYPE_ENUM,
  RestClientOptions,
  RestClientType,
  serializeParams,
} from './requestUtils.js';
import {
  checkWebCryptoAPISupported,
  getSignKeyType,
  SignAlgorithm,
  SignEncodeMethod,
  signMessage,
  SignMessageOptions,
} from './webCryptoAPI.js';

const MISSING_API_KEYS_ERROR =
  'API Key & Secret are BOTH required to use the authenticated REST client';

interface SignedRequest<
  T extends object | undefined = object,
  TReqData = object,
  TReqQuery = object,
> {
  originalParams: T;
  paramsWithSign?: T & { sign: string };
  // all request params intended for request body (e.g. POST)
  requestData?: TReqData;
  // all params intended for request query string (e.g. GET)
  requestQuery?: TReqQuery;
  serializedParams: string;
  sign: string;
  queryParamsWithSign: string;
  timestamp: number;
  recvWindow: number;
}

interface UnsignedRequest<T extends object | undefined = object> {
  originalParams: T;
  paramsWithSign: T;
  queryParamsWithSign: undefined;
}

type SignMethod = 'htx';

/**
 * Some requests require some params to be in the query string and some in the body. Some even support passing params via headers.
 * This type anticipates these are possible in any combination.
 *
 * The request builder will automatically handle where parameters should go.
 */
type ParamsInQueryBodyOrHeader = {
  query?: object;
  body?: object;
  headers?: object;
};

const ENABLE_HTTP_TRACE =
  typeof process === 'object' &&
  typeof process.env === 'object' &&
  process.env.HTXTRACE;

if (ENABLE_HTTP_TRACE) {
  axios.interceptors.request.use((request) => {
    console.log(
      new Date(),
      'Starting Request',
      JSON.stringify(
        {
          url: request.url,
          method: request.method,
          params: request.params,
          data: request.data,
        },
        null,
        2,
      ),
    );
    return request;
  });
  axios.interceptors.response.use((response) => {
    console.log(new Date(), 'Response:', {
      // request: {
      //   url: response.config.url,
      //   method: response.config.method,
      //   data: response.config.data,
      //   headers: response.config.headers,
      // },
      response: {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
        data: JSON.stringify(response.data, null, 2),
      },
    });
    return response;
  });
}

/**
 * Impure, mutates params to remove any values that have a key but are undefined.
 */
function deleteUndefinedValues(params?: any): void {
  if (!params) {
    return;
  }

  for (const key in params) {
    const value = params[key];
    if (typeof value === 'undefined') {
      delete params[key];
    }
  }
}

export abstract class BaseRestClient {
  private options: RestClientOptions;

  private baseUrl: string;

  private baseDomain: string;

  private globalRequestOptions: AxiosRequestConfig;

  private apiKey: string | undefined;

  private apiSecret: string | undefined;

  private apiAccessToken: string | undefined;

  // A unique incrementing nonce
  private apiRequestNonce: number = Date.now();

  /** Defines the client type (affecting how requests & signatures behave) */
  abstract getClientType(): RestClientType;

  /**
   * Create an instance of the REST client. Pass API credentials in the object in the first parameter.
   * @param {RestClientOptions} [restClientOptions={}] options to configure REST API connectivity
   * @param {AxiosRequestConfig} [networkOptions={}] HTTP networking options for axios
   */
  constructor(
    restClientOptions: RestClientOptions = {},
    networkOptions: AxiosRequestConfig = {},
  ) {
    this.options = {
      /** Throw errors if any request params are empty */
      strictParamValidation: false,
      ...restClientOptions,
    };

    this.globalRequestOptions = {
      /** in ms == 5 minutes by default */
      timeout: 1000 * 60 * 5,
      /** inject custom request options based on axios specs - see axios docs for more guidance on AxiosRequestConfig: https://github.com/axios/axios#request-config */
      ...networkOptions,
      headers: {
        ...DEFAULT_REQUEST_HEADERS,
        ...networkOptions.headers,
      },
    };

    if (this.options.keepAlive) {
      configureHttpsKeepAlive(
        this.globalRequestOptions,
        this.options.keepAliveMsecs,
      );
    }

    this.baseUrl = getRestBaseUrl(restClientOptions, this.getClientType());
    this.baseDomain = getBaseDomain(this.baseUrl);

    this.apiKey = this.options.apiKey;
    this.apiSecret = this.options.apiSecret;
    this.apiAccessToken = this.options.apiAccessToken;

    // Check Web Crypto API support when credentials are provided
    if (this.apiKey && this.apiSecret) {
      checkWebCryptoAPISupported();
    }

    // Throw if one of the 3 values is missing, but at least one of them is set
    const credentials = [this.apiKey, this.apiSecret];
    if (
      credentials.includes(undefined) &&
      credentials.some((v) => typeof v === 'string')
    ) {
      throw new Error(MISSING_API_KEYS_ERROR);
    }
  }

  /**
   * Generates a timestamp for signing API requests.
   *
   * This method can be overridden or customized using `customTimestampFn`
   * to implement a custom timestamp synchronization mechanism.
   * If no custom function is provided, it defaults to the current system time.
   */
  private getSignTimestampMs(): number {
    if (typeof this.options.customTimestampFn === 'function') {
      return this.options.customTimestampFn();
    }
    return Date.now();
  }

  private getNextRequestNonce(): string {
    const newNonce = Date.now();
    if (newNonce <= this.apiRequestNonce) {
      this.apiRequestNonce = ++this.apiRequestNonce;
    } else {
      this.apiRequestNonce = newNonce;
    }

    return String(this.apiRequestNonce);
  }

  private hasValidCredentials() {
    const hasAllAPICredentials = this.apiKey && this.apiSecret;

    return this.hasAccessToken() || hasAllAPICredentials;
  }

  setAccessToken(newAccessToken: string) {
    this.apiAccessToken = newAccessToken;
  }

  hasAccessToken(): boolean {
    return !!this.apiAccessToken;
  }

  protected get(endpoint: string, params?: object) {
    const isPublicAPI = true;
    // GET only supports params in the query string
    return this._call('GET', endpoint, { query: params }, isPublicAPI);
  }

  protected post(endpoint: string, params?: ParamsInQueryBodyOrHeader) {
    const isPublicAPI = true;
    return this._call('POST', endpoint, params, isPublicAPI);
  }

  protected getPrivate(endpoint: string, params?: object) {
    const isPublicAPI = false;
    // GET only supports params in the query string
    return this._call('GET', endpoint, { query: params }, isPublicAPI);
  }

  protected postPrivate(endpoint: string, params?: ParamsInQueryBodyOrHeader) {
    const isPublicAPI = false;
    return this._call('POST', endpoint, params, isPublicAPI);
  }

  protected deletePrivate(
    endpoint: string,
    params?: ParamsInQueryBodyOrHeader,
  ) {
    const isPublicAPI = false;
    return this._call('DELETE', endpoint, params, isPublicAPI);
  }

  protected putPrivate(endpoint: string, params?: ParamsInQueryBodyOrHeader) {
    const isPublicAPI = false;
    return this._call('PUT', endpoint, params, isPublicAPI);
  }

  // protected patchPrivate(endpoint: string, params?: any) {
  protected patchPrivate(endpoint: string, params?: ParamsInQueryBodyOrHeader) {
    const isPublicAPI = false;
    return this._call('PATCH', endpoint, params, isPublicAPI);
  }

  /**
   * @private Make a HTTP request to a specific endpoint. Private endpoint API calls are automatically signed.
   */
  private async _call(
    method: Method,
    endpoint: string,
    params?: ParamsInQueryBodyOrHeader,
    isPublicApi?: boolean,
  ): GenericAPIResponse {
    const isFullUrl =
      endpoint.startsWith('http://') || endpoint.startsWith('https://');

    const path = isFullUrl
      ? endpoint
      : endpoint.startsWith('/')
        ? endpoint
        : '/' + endpoint;

    // Sanity check to make sure it's only ever prefixed by one forward slash
    const requestUrl = isFullUrl ? endpoint : this.baseUrl + path;

    // Build a request and handle signature process
    const options = await this.buildRequest(
      method,
      path,
      this.baseDomain,
      requestUrl,
      params,
      isPublicApi,
    );

    if (ENABLE_HTTP_TRACE) {
      console.log(
        new Date(),
        'full request: ',
        JSON.stringify(options, null, 2),
      );
    }

    // Dispatch request
    return axios(options)
      .then((response) => {
        const throwable = {
          method,
          endpoint,
          params,
          response,
        };

        if (response.status == 200) {
          /**
           * Throw if response contains error (SPOT), e.g:
           * {
           *    status: 'error',
           *    'err-code': 'api-signature-not-valid',
           *    'err-msg': 'Signature not valid: API key has no permission [API Key没有权限]',
           *    data: null
           * }
           */
          if (
            typeof response.data?.status === 'string' &&
            response.data?.status === 'error'
          ) {
            throw throwable;
          }

          if (response.data && response.data['err-code']) {
            throw throwable;
          }

          const clientType = this.getClientType();
          switch (clientType) {
            case REST_CLIENT_TYPE_ENUM.spot:
            case REST_CLIENT_TYPE_ENUM.spotAWS:
            case REST_CLIENT_TYPE_ENUM.futures:
            case REST_CLIENT_TYPE_ENUM.futuresAlt1:
            case REST_CLIENT_TYPE_ENUM.futuresAWS: {
              // const res = {
              //   result: 'error',
              //   error: 'authenticationError',
              //   serverTime: '2025-10-29T15:02:39.341Z',
              // };

              if (response?.data?.result === 'error') {
                throw throwable;
              }

              // futures exceptions, e.g.
              // data: {
              //   code: 403,
              //   msg: 'Incorrect signature method [错误的签名方法]',
              //   data: null,
              //   ts: 1775823398810
              // }
              // 6001, The Single-Asset Collateral mode is temporarily unavailable.
              if (response.data && response.data['code'] >= 403) {
                throw throwable;
              }

              // TODO: catch this error:
              // submitLinearSwapIsolatedBatchOrders
              // submitLinearSwapCrossBatchOrders
              // submitCoinMDeliveryBatchOrders
              // submitCoinMPerpBatchOrders; tracking volume 22 undefined
              // res submitCoinMPerpBatchOrders {
              //   status: 'ok',
              //   data: { errors: [ [Object] ], success: [] },
              //   ts: 1776594235749
              // }

              break;
            }

            default: {
              neverGuard(
                clientType,
                `Unhandled client type in response parsing: ${this.getClientType()}`,
              );
            }
          }

          return response.data;
        }

        throw throwable;
      })
      .catch((e) =>
        this.parseException(e, {
          method,
          endpoint,
          path,
          requestUrl,
          params,
          options: {
            ...options,
            headers: {
              ...options.headers,
              APIKey: 'omittedFromError',
            },
          },
        }),
      );
  }

  /**
   * @private generic handler to parse request exceptions
   */
  parseException(e: any, requestParams: any): unknown {
    if (this.options.parseExceptions === false) {
      throw e;
    }

    // Something happened in setting up the request that triggered an error
    if (!e.response) {
      if (!e.request) {
        throw e.message;
      }

      // request made but no response received
      throw e;
    }

    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const response: AxiosResponse = e.response;
    // console.error('err: ', response?.data);

    throw {
      code: response.status,
      message: response.statusText,
      body: response.data,
      headers: response.headers,
      requestOptions: {
        ...this.options,
        // Prevent credentials from leaking into error messages
        apiKey: 'omittedFromError',
        apiSecret: 'omittedFromError',
        apiPassphrase: 'omittedFromError',
      },
      requestParams,
    };
  }

  private async signMessage(
    paramsStr: string,
    secret: string,
    method: SignEncodeMethod,
    algorithm: SignAlgorithm,
    options?: SignMessageOptions,
  ): Promise<string> {
    if (typeof this.options.customSignMessageFn === 'function') {
      return this.options.customSignMessageFn(paramsStr, secret);
    }
    return await signMessage(paramsStr, secret, method, algorithm, options);
  }

  /**
   * @private sign request and set recv window
   */
  private async signRequest<
    T extends ParamsInQueryBodyOrHeader | undefined = object,
  >(
    domain: string,
    data: T,
    endpoint: string,
    method: Method,
    signMethod: SignMethod,
  ): Promise<SignedRequest<T>> {
    const timestamp = this.getSignTimestampMs();

    const res: SignedRequest<T, any> = {
      originalParams: { ...data },
      requestData: data?.body || {},
      requestQuery: data?.query || {},
      sign: '',
      timestamp,
      recvWindow: 0,
      serializedParams: '',
      queryParamsWithSign: '',
    };

    if (!this.hasValidCredentials()) {
      throw new Error(MISSING_API_KEYS_ERROR);
    }

    const strictParamValidation = this.options.strictParamValidation;
    const encodeQueryStringValues = true;

    if (signMethod === 'htx') {
      // Don't prefix with ? as part of sign. Prefix after sign
      const prefixWith = '';
      // Array values are repeated into key value pairs
      // E.g. orderIds:[1,2] becomes orderIds=1&orderIds=2
      const repeatArrayValuesAsKVPairs = true;

      const clientType = this.getClientType();

      // const isFuturesRequest =
      //   clientType === REST_CLIENT_TYPE_ENUM.futures ||
      //   clientType === REST_CLIENT_TYPE_ENUM.futuresAWS ||
      //   clientType === REST_CLIENT_TYPE_ENUM.futuresAlt1;

      // const isSpotRequest =
      //   clientType === REST_CLIENT_TYPE_ENUM.spot ||
      //   clientType === REST_CLIENT_TYPE_ENUM.spotAWS;

      switch (clientType) {
        case REST_CLIENT_TYPE_ENUM.spot:
        case REST_CLIENT_TYPE_ENUM.spotAWS:
        case REST_CLIENT_TYPE_ENUM.futures:
        case REST_CLIENT_TYPE_ENUM.futuresAWS:
        case REST_CLIENT_TYPE_ENUM.futuresAlt1: {
          // The 'timestamp' should be formated as 'YYYY-MM-DDThh:mm:ss' // and URL encoded.
          const timestamp = new Date(this.getSignTimestampMs())
            .toISOString()
            .split('.')[0]; // Remove milliseconds from ISO string

          const signType = getSignKeyType(this.options.apiSecret!);

          // HTX spot signs auth params plus GET query params. POST body stays unsigned.
          const requestParamsToSign = method === 'GET' ? res.requestQuery : {};

          if (method === 'POST' && !isEmptyObject(res.requestData, false)) {
            if (Array.isArray(res.requestData)) {
              for (const element of res.requestData) {
                if (typeof element === 'object' && element !== null) {
                  element[APIIDMainKey] = APIIDMain;
                }
              }
            } else {
              res.requestData[APIIDMainKey] = APIIDMain;
            }
          }

          const baseParams = {
            AccessKeyId: this.options.apiKey!,
            SignatureMethod: signType === 'HMAC' ? 'HmacSHA256' : 'Ed25519',
            SignatureVersion: '2',
            Timestamp: timestamp,
            ...requestParamsToSign,
          };

          const serialisedSignParams = serializeParams(
            baseParams,
            strictParamValidation,
            encodeQueryStringValues,
            prefixWith,
            repeatArrayValuesAsKVPairs,
          );

          const signPrefix =
            [method, domain.toLowerCase(), endpoint].join('\n') + '\n';
          const signInput = signPrefix + serialisedSignParams;

          const sign = await this.signMessage(
            signInput,
            this.apiSecret!,
            'base64',
            'SHA-256',
          );

          res.sign = sign;
          res.queryParamsWithSign =
            serialisedSignParams + '&Signature=' + encodeURIComponent(sign);

          // // Only sign when no access token is provided
          // if (!this.hasAccessToken()) {
          //   try {
          //     const signMessageInput =
          //       endpoint + (await hashMessage(signInput, 'binary', 'SHA-256'));

          //     // node:crypto equivalent
          //     // const sign = createHmac(
          //     //   'sha512',
          //     //   Buffer.from(this.apiSecret!, 'base64'),
          //     // )
          //     //   .update(signMessage, 'binary')
          //     //   .digest('base64');

          //     const sign = await this.signMessage(
          //       signMessageInput,
          //       this.apiSecret!,
          //       'base64',
          //       'SHA-512',
          //       {
          //         isSecretB64Encoded: true,
          //         isInputBinaryString: true,
          //       },
          //     );

          //     res.sign = sign;
          //   } catch (error) {
          //     // Check if this is a base64 decoding error (invalid API credentials)
          //     if (
          //       error instanceof Error &&
          //       (error.name === 'InvalidCharacterError' ||
          //         error.message?.includes('Invalid character'))
          //     ) {
          //       const credentialError = new Error(
          //         'Failed to sign request: Invalid API credentials detected.\n\n' +
          //           '⚠️  PLEASE CHECK YOUR API KEY AND SECRET:\n' +
          //           '   - Ensure your API Secret is a valid base64-encoded string\n' +
          //           '   - HTX provides API secrets in base64 format\n\n' +
          //           `Original error: ${error.message}\n` +
          //           `Stack trace: ${error.stack}`,
          //       );
          //       credentialError.name = 'InvalidCredentialsError';
          //       throw credentialError;
          //     }
          //     // Re-throw other errors as-is
          //     throw error;
          //   }
          // }

          break;
        }
        default: {
          neverGuard(
            clientType,
            `Unhandled client type in signRequest: ${this.getClientType()}`,
          );
        }
      }
      return res;
    }

    console.error(
      new Date(),
      neverGuard(signMethod, `Unhandled sign method: "${signMethod}"`),
    );

    return res;
  }

  private async prepareSignParams<TParams extends object | undefined>(
    domain: string,
    method: Method,
    endpoint: string,
    signMethod: SignMethod,
    params?: TParams,
    isPublicApi?: true,
  ): Promise<UnsignedRequest<TParams>>;

  private async prepareSignParams<TParams extends object | undefined>(
    domain: string,
    method: Method,
    endpoint: string,
    signMethod: SignMethod,
    params?: TParams,
    isPublicApi?: false | undefined,
  ): Promise<SignedRequest<TParams>>;

  private async prepareSignParams<TParams extends object | undefined>(
    domain: string,
    method: Method,
    endpoint: string,
    signMethod: SignMethod,
    params?: TParams,
    isPublicApi?: boolean,
  ) {
    if (isPublicApi) {
      return {
        originalParams: params,
        paramsWithSign: params,
      };
    }

    if (!this.hasValidCredentials()) {
      throw new Error(MISSING_API_KEYS_ERROR);
    }

    return this.signRequest(domain, params, endpoint, method, signMethod);
  }

  /** Returns an axios request object. Handles signing process automatically if this is a private API call */
  private async buildRequest(
    method: Method,
    endpoint: string,
    domain: string,
    url: string,
    params?: ParamsInQueryBodyOrHeader,
    isPublicApi?: boolean,
  ): Promise<AxiosRequestConfig> {
    const options: AxiosRequestConfig = {
      ...this.globalRequestOptions,
      url: url,
      method: method,
      headers: {
        ...params?.headers,
        ...this.globalRequestOptions.headers,
      },
    };

    deleteUndefinedValues(params);
    deleteUndefinedValues(params?.body);
    deleteUndefinedValues(params?.query);
    deleteUndefinedValues(params?.headers);

    if (isPublicApi) {
      return {
        ...options,
        params: params?.query || params?.body || params,
      };
    }

    if (!this.hasValidCredentials()) {
      throw new Error(MISSING_API_KEYS_ERROR);
    }

    // console.log('signResult->pre', {
    //   url,
    //   method,
    //   endpoint,
    //   params,
    //   isPublicApi,
    // });

    const signResult = await this.prepareSignParams(
      domain,
      method,
      endpoint,
      'htx',
      params,
      isPublicApi,
    );

    // console.log('signResult', signResult);

    let signHeaders: Record<string, string> = {};

    const clientType = this.getClientType();
    switch (clientType) {
      case REST_CLIENT_TYPE_ENUM.spot:
      case REST_CLIENT_TYPE_ENUM.spotAWS: {
        // spot: https://www.htx.com/en-us/opend/newApiPages/?id=419
        /**
         * All params go in query string. E.g. these params:
         * AccessKeyId=e2xxxxxx-99xxxxxx-84xxxxxx-7xxxx
         * order-id=1234567890
         * SignatureMethod=Ed25519
         * SignatureVersion=2
         * Timestamp=2017-05-11T15%3A19%3A30
         *
         * Become:
         * https://api.huobi.pro/v1/order/orders?AccessKeyId=e2xxxxxx-99xxxxxx-84xxxxxx-7xxxx&order-id=1234567890&SignatureMethod=Ed25519&SignatureVersion=2&Timestamp=2017-05-11T15%3A19%3A30&Signature=4F65x5A2bLyMWVQj3Aqp%2BB4w%2BivaA7n5Oi2SuYtCJ9o%3D
         *
         * Ed25519 or HmacSHA256
         *
         * - GET request: All parameters are included in URL, and do not carry body(content-length>0), in otherwise will return 403 error code.
         * - POST request: All parameters are formatted as JSON and put int the request body
         *
         * Rate limit headers, TODO: It is suggested to read HTTP Header X-HB-RateLimit-Requests-Remain and X-HB-RateLimit-Requests-Expire to get the remaining count of request and the expire time for current rate limit time window, then you can adjust the API access rate dynamically.
         * The new version rate limit is applied on UID basis, which means, the overall access rate, from all API keys under same UID, to single endpoint, shouldn’t exceed the rate limit applied on that endpoint.
         */

        signHeaders = {
          // 'API-Key': this.apiKey,
          // 'API-Sign': signResult.sign,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        };

        if (method === 'GET') {
          signHeaders = {
            ...signHeaders,
            // GET With signature: https://github.com/HuobiRDCenter/huobi_Python/blob/master/huobi/connection/restapi_sync_client.py#L57
            'Content-Type': 'application/x-www-form-urlencoded',
          };
          // console.log('signParams for GET WITH SIGN: ', signResult);
          break;
        }

        if (method === 'POST') {
          signHeaders = {
            ...signHeaders,
            // GET, No signature: https://github.com/HuobiRDCenter/huobi_Python/blob/master/huobi/connection/restapi_sync_client.py#L44
            'Content-Type': 'application/json',
          };
        }
        break;
      }

      case REST_CLIENT_TYPE_ENUM.futures:
      case REST_CLIENT_TYPE_ENUM.futuresAWS:
      case REST_CLIENT_TYPE_ENUM.futuresAlt1: {
        // spot: https://www.htx.com/en-us/opend/newApiPages/?id=419
        /**
         * All params go in query string. E.g. these params:
         * AccessKeyId=e2xxxxxx-99xxxxxx-84xxxxxx-7xxxx
         * order-id=1234567890
         * SignatureMethod=Ed25519
         * SignatureVersion=2
         * Timestamp=2017-05-11T15%3A19%3A30
         *
         * Become:
         * https://api.huobi.pro/v1/order/orders?AccessKeyId=e2xxxxxx-99xxxxxx-84xxxxxx-7xxxx&order-id=1234567890&SignatureMethod=Ed25519&SignatureVersion=2&Timestamp=2017-05-11T15%3A19%3A30&Signature=4F65x5A2bLyMWVQj3Aqp%2BB4w%2BivaA7n5Oi2SuYtCJ9o%3D
         *
         * Ed25519 or HmacSHA256
         *
         * - GET request: All parameters are included in URL, and do not carry body(content-length>0), in otherwise will return 403 error code.
         * - POST request: All parameters are formatted as JSON and put int the request body
         *
         * Rate limit headers, TODO: It is suggested to read HTTP Header X-HB-RateLimit-Requests-Remain and X-HB-RateLimit-Requests-Expire to get the remaining count of request and the expire time for current rate limit time window, then you can adjust the API access rate dynamically.
         * The new version rate limit is applied on UID basis, which means, the overall access rate, from all API keys under same UID, to single endpoint, shouldn’t exceed the rate limit applied on that endpoint.
         */

        signHeaders = {
          // 'API-Key': this.apiKey,
          // 'API-Sign': signResult.sign,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        };

        // if (method === 'GET') {
        //   signHeaders = {
        //     ...signHeaders,
        //     // GET With signature: https://github.com/HuobiRDCenter/huobi_Python/blob/master/huobi/connection/restapi_sync_client.py#L57
        //     'Content-Type': 'application/x-www-form-urlencoded',
        //   };
        //   // console.log('signParams for GET WITH SIGN: ', signResult);
        //   break;
        // }

        // if (method === 'POST') {
        //   signHeaders = {
        //     ...signHeaders,
        //     // GET, No signature: https://github.com/HuobiRDCenter/huobi_Python/blob/master/huobi/connection/restapi_sync_client.py#L44
        //     'Content-Type': 'application/json',
        //   };
        // }
        break;
      }
      default: {
        neverGuard(clientType, `Unhandled client type: "${clientType}"`);
      }
    }

    const queryParams = signResult.queryParamsWithSign
      ? '?' + signResult.queryParamsWithSign
      : '';

    const urlWithQueryParams = options.url + queryParams;

    if (method !== 'GET') {
      return {
        ...options,
        headers: {
          ...signHeaders,
          ...params?.headers,
          ...options.headers,
        },
        url: urlWithQueryParams,
        data: isEmptyObject(signResult.requestData, true)
          ? undefined
          : signResult.requestData,
      };
    }

    return {
      ...options,
      headers: {
        ...signHeaders,
        ...params?.headers,
        ...options.headers,
      },
      url: urlWithQueryParams,
    };
  }
}
