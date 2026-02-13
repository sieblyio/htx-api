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

/** HTX spot API response. TData is the payload inside the data field. */
export type SpotAPISuccessResponse<TData> = {
  status: string;
  code?: string;
  ch?: string;
  ts?: number;
  data: TData;
};

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
