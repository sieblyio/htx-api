import { RestClientOptions } from '../../lib/requestUtils.js';

export type DerivativesAPISuccessResponse<TData> = {
  result: 'success';
  serverTime: string;
} & TData;

export interface DerivativesAPIErrorResponse {
  result: 'error';
  error: string;
  serverTime: string;
}

export type DerivativesAPIResponse<TData> =
  | DerivativesAPISuccessResponse<TData>
  | DerivativesAPIErrorResponse;

/** HTX spot API success response. TData is the payload. TPayloadKey defaults to "data" but can be overridden (e.g. "tick"). */
export type SpotAPISuccessResponse<
  TData,
  TPayloadKey extends string = 'data',
> = {
  status: string;
  success?: boolean;
  ok?: boolean;
  code?: string;
  ch?: string;
  ts?: number;
} & Record<TPayloadKey, TData>;

export interface SpotAPIErrorResponse {
  message?: string;
  'err-code'?: string;
  'err-msg'?: string;
}

export type SpotAPIResponse<TData> =
  | SpotAPISuccessResponse<TData>
  | SpotAPIErrorResponse;

export interface GenericAPIError<TBody = any> {
  code: number;
  message: string;
  body: TBody;
  headers: Record<string, string>;
  requestOptions: RestClientOptions;
  requestParams: Record<string, any>;
}

/** HTX linear-swap (futures) API success response. TPayloadKey: data (default), tick, ticks. */
export type FuturesAPISuccessResponse<
  TData,
  TPayloadKey extends string = 'data',
> = {
  code?: number;
  msg?: string;
  status?: string;
  ch?: string;
  ts?: number;
} & Record<TPayloadKey, TData>;
