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

export type SpotAPISuccessResponse<TData> = {
  error: string[];
  result: TData;
};

export interface SpotAPIErrorResponse {
  // e.g.{ error: [ 'EGeneral:Invalid arguments:ordertype' ] },
  error: string[];
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
