/**
 * Websocket API v2 Spot Request Types
 */

export interface WSAPIAddSpotOrderParams {
  order_type:
    | 'limit'
    | 'market'
    | 'iceberg'
    | 'stop-loss'
    | 'stop-loss-limit'
    | 'take-profit'
    | 'take-profit-limit'
    | 'trailing-stop'
    | 'trailing-stop-limit'
    | 'settle-position';
  side: 'buy' | 'sell';
  order_qty: number;
  symbol: string;
  limit_price?: number;
  limit_price_type?: 'static' | 'pct' | 'quote';
  triggers?: {
    reference?: 'index' | 'last';
    price: number;
    price_type?: 'static' | 'pct' | 'quote';
  };
  time_in_force?: 'gtc' | 'gtd' | 'ioc';
  margin?: boolean;
  post_only?: boolean;
  reduce_only?: boolean;
  effective_time?: string;
  expire_time?: string;
  deadline?: string;
  cl_ord_id?: string;
  order_userref?: number;
  conditional?: {
    order_type:
      | 'limit'
      | 'stop-loss'
      | 'stop-loss-limit'
      | 'take-profit'
      | 'take-profit-limit'
      | 'trailing-stop'
      | 'trailing-stop-limit';
    limit_price?: number;
    limit_price_type?: 'static' | 'pct' | 'quote';
    trigger_price?: number;
    trigger_price_type?: 'static' | 'pct' | 'quote';
    stop_price?: number;
  };
  display_qty?: number;
  fee_preference?: 'base' | 'quote';
  no_mpp?: boolean;
  stp_type?: 'cancel_newest' | 'cancel_oldest' | 'cancel_both';
  cash_order_qty?: number;
  validate?: boolean;
  sender_sub_id?: string;
}

export interface WSAPIAmendSpotOrderParams {
  order_id?: string;
  cl_ord_id?: string;
  order_qty: number;
  display_qty?: number;
  limit_price?: number;
  limit_price_type?: 'static' | 'pct' | 'quote';
  post_only?: boolean;
  trigger_price?: number;
  trigger_price_type?: 'static' | 'pct' | 'quote';
  deadline?: string;
  symbol?: string;
}

export interface WSAPICancelSpotOrderParams {
  order_id?: string[];
  cl_ord_id?: string[];
  order_userref?: number[];
}

export interface WSAPICancelAllSpotOrdersAfterParams {
  timeout: number;
}

export interface WSAPIBatchAddSpotOrdersParams {
  deadline?: string;
  symbol: string;
  validate?: boolean;
  orders: Omit<WSAPIAddSpotOrderParams, 'symbol'>[];
}

export interface WSAPIBatchCancelSpotOrdersParams {
  orders: string[];
  cl_ord_id?: string[];
}

export interface WSAPIEditSpotOrderParams {
  order_id: string;
  symbol: string;
  order_qty?: number;
  limit_price?: number;
  display_qty?: number;
  triggers?: {
    reference?: 'index' | 'last';
    price: number;
    price_type?: 'static' | 'pct' | 'quote';
  };
  post_only?: boolean;
  reduce_only?: boolean;
  fee_preference?: 'base' | 'quote';
  no_mpp?: boolean;
  order_userref?: number;
  deadline?: string;
  validate?: boolean;
}
