import { RestClientOptions } from '../../lib/requestUtils.js';

export interface GenericAPIError<TBody = unknown> {
  code: number;
  message: string;
  body: TBody;
  headers: Record<string, string>;
  requestOptions: RestClientOptions;
  requestParams: Record<string, unknown>;
}

// HTX TYPES

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

/** HTX spot API error response. */
export interface SpotAPIErrorResponse {
  message?: string;
  'err-code'?: string;
  'err-msg'?: string;
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

export type SpotAPIResponse<TData> =
  | SpotAPISuccessResponse<TData>
  | SpotAPIErrorResponse;

export type OrderIdProperty = 'client-order-id';
