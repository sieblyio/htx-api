/**
 * Websocket API v2 Spot Response Types
 */

export interface WSAPIAddSpotOrderResult {
  order_id: string;
  cl_ord_id?: string;
  order_userref?: number;
  warnings?: string[];
}

export interface WSAPIAmendSpotOrderResult {
  amend_id: string;
  order_id?: string;
  cl_ord_id?: string;
  warnings?: string[];
}

export interface WSAPICancelSpotOrderResult {
  order_id: string;
  cl_ord_id?: string;
  warnings?: string[];
}

export interface WSAPICancelAllSpotOrdersResult {
  count: number;
  warnings?: string[];
}

export interface WSAPICancelAllSpotOrdersAfterResult {
  currentTime: string;
  triggerTime: string;
  warnings?: string[];
}

export interface WSAPIBatchAddSpotOrdersResult {
  order_id: string;
  cl_ord_id?: string;
  order_userref?: number;
  warnings?: string[];
}

export interface WSAPIBatchCancelSpotOrdersResult {
  count: number;
  warnings?: string[];
}

export interface WSAPIEditSpotOrderResult {
  order_id: string;
  original_order_id: string;
  warnings?: string[];
}
