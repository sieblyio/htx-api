export type HTXSpotOrderType =
  | 'buy-market'
  | 'sell-market'
  | 'buy-limit'
  | 'sell-limit'
  | 'buy-ioc'
  | 'sell-ioc'
  | 'buy-limit-maker'
  | 'sell-limit-maker'
  | 'buy-stop-limit'
  | 'sell-stop-limit'
  | 'buy-limit-fok'
  | 'sell-limit-fok'
  | string;

export interface WSAPISpotOrderParams {
  'account-id': number | string;
  symbol: string;
  type: HTXSpotOrderType;
  amount?: string | number;
  price?: string | number;
  'market-amount'?: string | number;
  source?: string;
  'client-order-id'?: string;
  'self-match-prevent'?: number;
  self_match_prevent?: number;
  self_match_prevent_new?:
    | 'cancel_taker'
    | 'cancel_maker'
    | 'cancel_both'
    | string;
  'stop-price'?: string | number;
  operator?: 'gte' | 'lte' | string;
  'coupon-id'?: string;
  [key: string]: unknown;
}

export type WSAPISpotBatchOrderParams = WSAPISpotOrderParams[];

export interface WSAPISpotMarginOrderParams extends WSAPISpotOrderParams {
  'repay-amount'?: string | number;
  'trade-purpose'?: number;
}

export interface WSAPISpotCancelOrdersParams {
  'order-ids'?: string[];
  'client-order-ids'?: string[];
}

export interface WSAPISpotCancelAllOrdersParams {
  'account-id': number | string;
  symbol?: string;
  types?: string;
  side?: 'buy' | 'sell' | string;
  size?: number;
}

export type HTXDerivativesDirection = 'buy' | 'sell' | string;
export type HTXDerivativesOffset = 'open' | 'close' | 'both' | string;

export interface WSAPIDerivativesOrderParams {
  contract_code?: string;
  direction?: HTXDerivativesDirection;
  offset?: HTXDerivativesOffset;
  price?: string | number;
  lever_rate?: number;
  volume?: string | number;
  order_price_type?: string;
  client_order_id?: string | number;
  reduce_only?: number;
  tp_trigger_price?: string | number;
  tp_order_price?: string | number;
  tp_order_price_type?: string;
  sl_trigger_price?: string | number;
  sl_order_price?: string | number;
  sl_order_price_type?: string;
  self_match_prevent?: string | number;
  self_match_prevent_new?: string;
  [key: string]: unknown;
}

export type WSAPIDerivativesBatchOrderParams = WSAPIDerivativesOrderParams[];

export interface WSAPIDerivativesCancelOrderParams {
  order_id?: string | number;
  order_id_str?: string;
  client_order_id?: string | number;
  contract_code?: string;
  [key: string]: unknown;
}

export interface WSAPIDerivativesCancelAllOrdersParams {
  contract_code?: string;
  direction?: HTXDerivativesDirection;
  offset?: HTXDerivativesOffset;
  [key: string]: unknown;
}

export interface WSAPIDerivativesPlaceOrderParams {
  contract_code: string;
  margin_mode: 'cross' | 'isolated' | string;
  position_side?: 'long' | 'short' | 'both' | string;
  side: HTXDerivativesDirection;
  type: 'market' | 'limit' | 'post_only' | string;
  price_match?: string | null;
  time_in_force?: 'gtc' | 'ioc' | 'fok' | string;
  client_order_id?: string;
  price?: string;
  volume: string;
  reduce_only?: number;
  tp_trigger_price?: string;
  tp_order_price?: string;
  tp_type?: string;
  tp_trigger_price_type?: 'last' | 'mark' | string;
  sl_trigger_price?: string;
  sl_order_price?: string;
  sl_type?: string;
  sl_trigger_price_type?: 'last' | 'mark' | string;
  price_protect?: boolean | string;
  self_match_prevent?: string;
  [key: string]: unknown;
}

export type WSAPIDerivativesBatchPlaceOrderParams =
  WSAPIDerivativesPlaceOrderParams[];

export interface WSAPIDerivativesV5CancelOrderParams {
  contract_code: string;
  order_id?: string;
  client_order_id?: string;
  [key: string]: unknown;
}

export interface WSAPIDerivativesV5CancelAllOrdersParams {
  contract_code?: string;
  margin_mode?: 'cross' | 'isolated' | string;
  [key: string]: unknown;
}
