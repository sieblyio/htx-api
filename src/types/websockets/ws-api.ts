import { WS_KEY_MAP, WSOperation } from '../../lib/websocket/websocket-util.js';
import {
  WSAPIAddSpotOrderParams,
  WSAPIAmendSpotOrderParams,
  WSAPIBatchAddSpotOrdersParams,
  WSAPIBatchCancelSpotOrdersParams,
  WSAPICancelAllSpotOrdersAfterParams,
  WSAPICancelSpotOrderParams,
  WSAPIEditSpotOrderParams,
} from '../request/wsapi.types.js';
import {
  WSAPIAddSpotOrderResult,
  WSAPIAmendSpotOrderResult,
  WSAPIBatchAddSpotOrdersResult,
  WSAPIBatchCancelSpotOrdersResult,
  WSAPICancelAllSpotOrdersAfterResult,
  WSAPICancelAllSpotOrdersResult,
  WSAPICancelSpotOrderResult,
  WSAPIEditSpotOrderResult,
} from '../response/wsapi.types.js';

export type Exact<T> = {
  // This part says: if there's any key that's not in T, it's an error
  // This conflicts sometimes for some reason...
  // [K: string]: never;
} & {
  [K in keyof T]: T[K];
};

export interface WsRequestOperation<TWSTopic extends string> {
  id: number;
  type: WSOperation;
  topic: TWSTopic;
  privateChannel: boolean;
  response: boolean;
}

export interface WSAPIAuthenticationRequestFromServer {
  timestamp: number;
  sessionId: string;
}

export interface WSAPIAuthenticationConfirmedFromServer {
  pingInterval: number;
  sessionId: string;
  pingTimeout: number;
  data: 'welcome';
}

/**
 * WS API commands (for sending requests via WS)
 */
export const WS_API_Operations = [
  'add_order',
  'amend_order',
  'cancel_order',
  'cancel_all',
  'cancel_all_orders_after',
  'batch_add',
  'batch_cancel',
  'edit_order',
] as const;

export type WSAPIOperation = (typeof WS_API_Operations)[number];

export interface WSAPIRequestOperationKrakenSpot<
  TWSOperation extends WSAPIOperation = WSAPIOperation,
  TWSParams extends object = any,
> {
  method: TWSOperation;
  params?: TWSParams;
  req_id: number;
}

export interface WSAPIWsKeyTopicMap {
  [WS_KEY_MAP.spotPrivateV2]: WSAPIOperation;
  [WS_KEY_MAP.spotBetaPrivateV2]: WSAPIOperation;
}

export type WSAPIWsKey = keyof WSAPIWsKeyTopicMap;

export interface WSAPISpotResponse<
  TResponseData extends object = object,
  TWSAPIOperation = WSAPIOperation,
> {
  wsKey: WSAPIWsKey;
  error?: string;
  method: TWSAPIOperation;
  req_id: number;
  success: boolean;
  time_in: string;
  time_out: string;
  result: TResponseData;
  request: any;
}

export interface WSAPITopicRequestParamMap {
  [key: string]: unknown;

  add_order: WSAPIAddSpotOrderParams;
  amend_order: WSAPIAmendSpotOrderParams;
  cancel_order: WSAPICancelSpotOrderParams;
  cancel_all: never;
  cancel_all_orders_after: WSAPICancelAllSpotOrdersAfterParams;
  batch_add: WSAPIBatchAddSpotOrdersParams;
  batch_cancel: WSAPIBatchCancelSpotOrdersParams;
  edit_order: WSAPIEditSpotOrderParams;
}

export interface WSAPITopicResponseMap {
  [k: string]: unknown;

  add_order: WSAPISpotResponse<WSAPIAddSpotOrderResult, 'add_order'>;
  amend_order: WSAPISpotResponse<WSAPIAmendSpotOrderResult, 'amend_order'>;
  cancel_order: WSAPISpotResponse<WSAPICancelSpotOrderResult, 'cancel_order'>;
  cancel_all: WSAPISpotResponse<WSAPICancelAllSpotOrdersResult, 'cancel_all'>;
  cancel_all_orders_after: WSAPISpotResponse<
    WSAPICancelAllSpotOrdersAfterResult,
    'cancel_all_orders_after'
  >;
  batch_add: WSAPISpotResponse<WSAPIBatchAddSpotOrdersResult[], 'batch_add'>;
  batch_cancel: WSAPISpotResponse<
    WSAPIBatchCancelSpotOrdersResult,
    'batch_cancel'
  >;
  edit_order: WSAPISpotResponse<WSAPIEditSpotOrderResult, 'edit_order'>;
}
