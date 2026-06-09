import { WS_KEY_MAP } from '../../lib/websocket/websocket-util.js';
import {
  WSAPIDerivativesBatchOrderParams,
  WSAPIDerivativesBatchPlaceOrderParams,
  WSAPIDerivativesCancelAllOrdersParams,
  WSAPIDerivativesCancelOrderParams,
  WSAPIDerivativesOrderParams,
  WSAPIDerivativesPlaceOrderParams,
  WSAPIDerivativesV5CancelAllOrdersParams,
  WSAPIDerivativesV5CancelOrderParams,
  WSAPISpotBatchOrderParams,
  WSAPISpotCancelAllOrdersParams,
  WSAPISpotCancelOrdersParams,
  WSAPISpotMarginOrderParams,
  WSAPISpotOrderParams,
} from '../request/wsapi.types.js';
import {
  WSAPIBaseResponse,
  WSAPIDerivativesOrderResult,
  WSAPIDerivativesV5OrderResult,
  WSAPISpotCancelAllOrdersResult,
  WSAPISpotCancelOrdersResult,
  WSAPISpotOrderResult,
} from '../response/wsapi.types.js';

export type Exact<T> = T extends object ? T & Record<never, never> : T;

export interface WsRequestOperation<TWSTopic extends string = string> {
  op?: string;
  action?: string;
  topic?: TWSTopic;
  ch?: TWSTopic;
  id?: string | number;
  cid?: string;
}

export interface WSAPIAuthenticationConfirmedFromServer {
  action?: 'req';
  op?: 'auth';
  code?: number;
  ch?: 'auth';
  'err-code'?: number;
  data?: Record<string, unknown>;
}

export const WS_API_Operations = [
  'create-order',
  'create-batchorder',
  'create-margin-order',
  'cancelall',
  'cancel',
  'create_order',
  'create_cross_order',
  'create_batchorder',
  'create_cross_batchorder',
  'cross_cancel',
  'cross_cancelall',
  'place_order',
  'place_batch_orders',
  'cancel_order',
  'cancel_batch_orders',
  'cancel_all_orders',
] as const;

export type WSAPIOperation = (typeof WS_API_Operations)[number];

export type WSAPISpotOperation =
  | 'create-order'
  | 'create-batchorder'
  | 'create-margin-order'
  | 'cancelall'
  | 'cancel';

export type WSAPILegacyDerivativesOperation =
  | 'create_order'
  | 'create_cross_order'
  | 'create_batchorder'
  | 'create_cross_batchorder'
  | 'cancel'
  | 'cross_cancel'
  | 'cancelall'
  | 'cross_cancelall';

export type WSAPIDerivativesV5Operation =
  | 'place_order'
  | 'place_batch_orders'
  | 'cancel_order'
  | 'cancel_batch_orders'
  | 'cancel_all_orders';

export type WSAPIDerivativesOperation =
  | WSAPILegacyDerivativesOperation
  | WSAPIDerivativesV5Operation;

export interface WSAPIWsKeyTopicMap {
  [WS_KEY_MAP.spotTrade]: WSAPISpotOperation;
  [WS_KEY_MAP.linearSwapTrade]: WSAPIDerivativesOperation;
  [WS_KEY_MAP.coinDeliveryTrade]: WSAPILegacyDerivativesOperation;
  [WS_KEY_MAP.coinSwapTrade]: WSAPILegacyDerivativesOperation;
}

export type WSAPIWsKey = keyof WSAPIWsKeyTopicMap;

export interface HTXSpotWSAPIRequest<
  TOperation extends WSAPISpotOperation = WSAPISpotOperation,
  TParams = unknown,
> {
  cid: string;
  ch: TOperation;
  params?: TParams;
}

export interface HTXDerivativesWSAPIRequest<
  TOperation extends WSAPIDerivativesOperation = WSAPIDerivativesOperation,
  TParams = unknown,
> {
  op: TOperation;
  cid: string;
  data?: TParams;
}

export type HTXWSAPIRequest = HTXSpotWSAPIRequest | HTXDerivativesWSAPIRequest;

export type WSAPIResponse<
  TData = unknown,
  TOperation extends string = string,
> = WSAPIBaseResponse<TData, TOperation>;

export interface WSAPITopicRequestParamMap {
  'create-order': WSAPISpotOrderParams;
  'create-batchorder': WSAPISpotBatchOrderParams;
  'create-margin-order': WSAPISpotMarginOrderParams;
  cancelall:
    | WSAPISpotCancelAllOrdersParams
    | WSAPIDerivativesCancelAllOrdersParams;
  cancel: WSAPISpotCancelOrdersParams | WSAPIDerivativesCancelOrderParams;

  create_order: WSAPIDerivativesOrderParams;
  create_cross_order: WSAPIDerivativesOrderParams;
  create_batchorder: WSAPIDerivativesBatchOrderParams;
  create_cross_batchorder: WSAPIDerivativesBatchOrderParams;
  cross_cancel: WSAPIDerivativesCancelOrderParams;
  cross_cancelall: WSAPIDerivativesCancelAllOrdersParams;

  place_order: WSAPIDerivativesPlaceOrderParams;
  place_batch_orders: WSAPIDerivativesBatchPlaceOrderParams;
  cancel_order: WSAPIDerivativesV5CancelOrderParams;
  cancel_batch_orders: WSAPIDerivativesV5CancelOrderParams[];
  cancel_all_orders: WSAPIDerivativesV5CancelAllOrdersParams;
}

export interface WSAPITopicResponseMap {
  'create-order': WSAPIResponse<string | WSAPISpotOrderResult, 'create-order'>;
  'create-batchorder': WSAPIResponse<
    WSAPISpotOrderResult[],
    'create-batchorder'
  >;
  'create-margin-order': WSAPIResponse<
    WSAPISpotOrderResult,
    'create-margin-order'
  >;
  cancelall: WSAPIResponse<
    WSAPISpotCancelAllOrdersResult | WSAPIDerivativesOrderResult,
    'cancelall'
  >;
  cancel: WSAPIResponse<
    WSAPISpotCancelOrdersResult | WSAPIDerivativesOrderResult,
    'cancel'
  >;

  create_order: WSAPIResponse<WSAPIDerivativesOrderResult, 'create_order'>;
  create_cross_order: WSAPIResponse<
    WSAPIDerivativesOrderResult,
    'create_cross_order'
  >;
  create_batchorder: WSAPIResponse<
    WSAPIDerivativesOrderResult[],
    'create_batchorder'
  >;
  create_cross_batchorder: WSAPIResponse<
    WSAPIDerivativesOrderResult[],
    'create_cross_batchorder'
  >;
  cross_cancel: WSAPIResponse<WSAPIDerivativesOrderResult, 'cross_cancel'>;
  cross_cancelall: WSAPIResponse<
    WSAPIDerivativesOrderResult,
    'cross_cancelall'
  >;

  place_order: WSAPIResponse<WSAPIDerivativesV5OrderResult, 'place_order'>;
  place_batch_orders: WSAPIResponse<
    WSAPIDerivativesV5OrderResult[],
    'place_batch_orders'
  >;
  cancel_order: WSAPIResponse<WSAPIDerivativesV5OrderResult, 'cancel_order'>;
  cancel_batch_orders: WSAPIResponse<
    WSAPIDerivativesV5OrderResult[],
    'cancel_batch_orders'
  >;
  cancel_all_orders: WSAPIResponse<
    WSAPIDerivativesV5OrderResult,
    'cancel_all_orders'
  >;
}
