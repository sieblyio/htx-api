export interface WSAPIRateLimit {
  limit?: string;
  interval?: string;
  remaining?: string;
  reset?: string;
}

export interface WSAPIBaseResponse<TData = unknown, TOperation = string> {
  wsKey?: string;
  cid?: string;
  ch?: TOperation;
  op?: TOperation;
  status?: 'ok' | 'error' | string;
  code?: number;
  message?: string | null;
  success?: boolean;
  data?: TData;
  ts?: number;
  'err-code'?: number;
  'err-msg'?: string;
  rate_limit?: WSAPIRateLimit;
  request?: unknown;
}

export interface WSAPISpotOrderResult {
  'order-id'?: number | string;
  'client-order-id'?: string;
  orderId?: number | string;
}

export interface WSAPISpotCancelOrdersResult {
  success?: string[];
  failed?: {
    'order-id'?: string;
    'client-order-id'?: string;
    'err-code'?: string;
    'err-msg'?: string;
  }[];
}

export interface WSAPISpotCancelAllOrdersResult {
  'success-count': number;
  'failed-count': number;
  'next-id'?: number | string;
}

export interface WSAPIDerivativesOrderResult {
  order_id?: number | string;
  order_id_str?: string;
  client_order_id?: number | string;
}

export interface WSAPIDerivativesV5OrderResult {
  order_id?: string;
  client_order_id?: string;
}
