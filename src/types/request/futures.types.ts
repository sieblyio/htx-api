/**
 * Reference Data
 */

/** Req for GET /linear-swap-api/v1/swap_historical_funding_rate */
export interface FuturesGetHistoricalFundingRateReq {
  /** Contract code (e.g. BTC-USDT). Case-insensitive */
  contract_code: string;
  /** Page index. Default 1 */
  page_index?: number;
  /** Page size. Default 20, max 50 */
  page_size?: number;
}

/** Req for GET /linear-swap-api/v3/swap_liquidation_orders. One of pair and contract must be filled; contract preferred. */
export interface FuturesGetLiquidationOrdersReq {
  /** Contract code (e.g. BTC-USDT). Case-insensitive */
  contract: string;
  /** 0:All; 1:Open long; 2:Open short; 3:Close short; 4:Close long; 5:Liquidate long; 6:Liquidate short; 17:buy(one-way); 18:sell(one-way) */
  trade_type: number;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** Query start time (ms). Window max 2h, within 90 days */
  start_time?: number;
  /** Query end time (ms). Default now. Within 90 days */
  end_time?: number;
  /** next=chronological, prev=reverse. Default prev */
  direct?: 'next' | 'prev';
  /** Search from query_id for pagination */
  from_id?: number;
}

/** Req for GET /linear-swap-api/v1/swap_settlement_records */
export interface FuturesGetSettlementRecordsReq {
  /** Contract code. swap: BTC-USDT; future: BTC-USDT-210625 */
  contract_code: string;
  /** Start time (ms). Default: now - 90 days. Within 90 days */
  start_time?: number;
  /** End time (ms). Default: now. Must be after start_time */
  end_time?: number;
  /** Page index. Default 1 */
  page_index?: number;
  /** Page size. Default 20, max 50 */
  page_size?: number;
}

/** Req for GET /linear-swap-api/v1/swap_cross_ladder_margin. When all filled, contract_code preferred. business_type required for futures. */
export interface FuturesGetCrossTieredMarginReq {
  /** Contract code. Omit for all. swap: BTC-USDT; future: BTC-USDT-210625 */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
  /** Default swap. futures, swap, all. Required for futures contract query */
  business_type?: 'futures' | 'swap' | 'all';
}

export type FuturesGetEstimatedSettlementPriceReq =
  FuturesGetCrossTieredMarginReq;
export type FuturesGetCrossAdjustFactorReq = FuturesGetCrossTieredMarginReq;
export type FuturesGetContractPriceLimitReq = FuturesGetCrossTieredMarginReq;
export type FuturesGetOpenInterestReq = FuturesGetCrossTieredMarginReq;

/** Req for GET /v1/insurance_fund_history */
export interface FuturesGetRiskReserveHistoryReq {
  /** Query start time (ms) */
  start_time?: number;
  /** Query end time (ms) */
  end_time?: number;
  /** next=chronological, prev=reverse. Default prev */
  direct?: 'next' | 'prev';
  /** Pagination: min/max query_id from last result depending on direct */
  from_id?: number;
  /** Items per page [1-100]. Default 10 */
  limit?: number;
}

/** Req for GET /linear-swap-api/v1/swap_contract_info. When isolated, contract_type/business_type cannot be futures. */
export interface FuturesGetContractInfoReq {
  /** Contract code. Omit for all. swap: BTC-USDT; future: BTC-USDT-210625 */
  contract_code?: string;
  /** cross, isolated, or all. Filter by supported margin mode */
  support_margin_mode?: 'cross' | 'isolated' | 'all';
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
  /** Default swap. futures, swap, all. Required for futures query */
  business_type?: 'futures' | 'swap' | 'all';
}

/**
 * Market Data
 */

/** Req for GET /linear-swap-ex/market/history/kline. Either size or (from+to) required. */
export interface FuturesGetKlinesReq {
  /** Contract code or type. swap: BTC-USDT; future: BTC-USDT-220325 or BTC-USDT-CW/NW/CQ/NQ */
  contract_code: string;
  /** 1min, 5min, 15min, 30min, 60min, 1hour, 4hour, 1day, 1mon */
  period: string;
  /** Items [1-2000]. Default 150. Ignored if from+to provided */
  size?: number;
  /** Start timestamp (seconds) */
  from?: number;
  /** End timestamp (seconds). Required if from provided */
  to?: number;
}

/** Req for GET /linear-swap-api/v1/swap_his_open_interest. One of (pair+contract_type) or contract_code required. */
export interface FuturesGetHistoricalOpenInterestReq {
  /** Contract code. Omit if pair+contract_type provided */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT). Use with contract_type */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
  /** 60min, 4hour, 12hour, 1day */
  period: string;
  /** Items [1-200]. Default 48 */
  size?: number;
  /** 1: cont, 2: cryptocurrency */
  amount_type: 1 | 2;
}

/** Req for GET /index/market/history/linear_swap_mark_price_kline. Also used for premium index and estimated rate kline. */
export interface FuturesGetMarkKlinesReq {
  /** Contract code or type. swap: BTC-USDT; future: BTC-USDT-210625 or BTC-USDT-CW/NW/CQ/NQ */
  contract_code: string;
  /** 1min, 5min, 15min, 30min, 60min, 4hour, 1day, 1week, 1mon */
  period: string;
  /** Items [1-2000] */
  size: number;
}

export type FuturesGetPremiumIndexKlinesReq = FuturesGetMarkKlinesReq;
export type FuturesGetFundingRateKlinesReq = FuturesGetMarkKlinesReq;

/** Req for GET /index/market/history/linear_swap_basis */
export interface FuturesGetBasisDataReq {
  /** Contract code or type */
  contract_code: string;
  /** 1min, 5min, 15min, 30min, 60min, 4hour, 1day, 1mon */
  period: string;
  /** Items [1-2000]. Default 150 */
  size: number;
  /** open, close, high, low, average. Default open */
  basis_price_type?: 'open' | 'close' | 'high' | 'low' | 'average';
}

/**
 * Account
 */

/** Req for POST /linear-swap-api/v1/swap_cross_position_info */
export interface FuturesGetCrossPositionsReq {
  /** Contract code. Omit for all */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
}

/** Req for GET /linear-swap-api/v1/swap_sub_auth_list */
export interface FuturesGetSubAuthListReq {
  /** Sub-account UIDs, comma-separated. Max 10 */
  sub_uid?: string;
  /** Start time of sub-account creation (ms) */
  start_time?: number;
  /** End time of sub-account creation (ms) */
  end_time?: number;
  /** next=chronological, prev=reverse */
  direct?: 'next' | 'prev';
  /** Pagination: min/max query_id from last result */
  from_id?: number;
}

/** Req for POST /linear-swap-api/v1/swap_sub_account_list. Isolated margin only. */
export interface FuturesGetIsolatedSubAccountsReq {
  /** Contract code (e.g. BTC-USDT). Omit for all */
  contract_code?: string;
  /** next=chronological, prev=reverse. Default next */
  direct?: 'next' | 'prev';
  /** Pagination: min/max query_id from last result depending on direct */
  from_id?: number;
}

/** Req for POST /linear-swap-api/v1/swap_cross_sub_account_list. Cross margin only. */
export interface FuturesGetCrossSubAccountsReq {
  /** Margin account (e.g. USDT). Omit for all */
  margin_account?: string;
  /** next=chronological, prev=reverse. Default next */
  direct?: 'next' | 'prev';
  /** Pagination: min/max query_id from last result depending on direct */
  from_id?: number;
}

/** Req for POST /linear-swap-api/v1/swap_sub_account_info_list. Isolated margin only. */
export interface FuturesGetSubAccountsAssetsReq {
  /** Contract code (e.g. BTC-USDT). Omit for all */
  contract_code?: string;
  /** Page index. Default 1 */
  page_index?: number;
  /** Page size. Default 20, max 50 */
  page_size?: number;
}

/** Req for POST /linear-swap-api/v1/swap_cross_sub_account_info_list. Cross margin only. */
export interface FuturesGetCrossSubAccountsAssetsReq {
  /** Margin account (e.g. USDT). Omit for all */
  margin_account?: string;
  /** Page index. Default 1 */
  page_index?: number;
  /** Page size. Default 20, max 50 */
  page_size?: number;
}

/** Req for POST /linear-swap-api/v1/swap_cross_sub_position_info. Cross margin only. */
export interface FuturesGetCrossSubPositionsReq {
  /** Contract code. swap: BTC-USDT, future: BTC-USDT-210625. Omit for all. contract_code preferred when all filled */
  contract_code?: string;
  /** Sub-account UID */
  sub_uid: number;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
}

/** Req for POST /linear-swap-api/v3/swap_financial_record. Supports cross and isolated. */
export interface FuturesGetFinancialRecordsReq {
  /** Margin account. swap: BTC-USDT, future: BTC-USDT-210625. Required */
  mar_acct: string;
  /** Contract code (e.g. BTC-USDT). Omit for all */
  contract?: string;
  /** Comma-separated type codes. Omit for all. e.g. 3,4,5,6 */
  type?: string;
  /** Query start time (ms). Window max 48h, within 90 days */
  start_time?: number;
  /** Query end time (ms). Default now. Within 90 days */
  end_time?: number;
  /** next=chronological, prev=reverse. Default next */
  direct?: 'next' | 'prev';
  /** Pagination: min/max query_id from last result depending on direct */
  from_id?: number;
}

/** Req for POST /linear-swap-api/v3/swap_financial_record_exact. Same params as swap_financial_record; API default direct is prev. */
export type FuturesGetFinancialRecordsExactReq = FuturesGetFinancialRecordsReq;

/** Req for POST /linear-swap-api/v1/swap_cross_available_level_rate. Cross margin only. */
export interface FuturesGetCrossAvailableLeverageReq {
  /** Contract code. swap: BTC-USDT, future: BTC-USDT-210625. Omit for all */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
  /** futures, swap, all. Required for futures. Default swap */
  business_type?: 'futures' | 'swap' | 'all';
}

/** Order price type for swap_order_limit */
export type FuturesGetOrderLimitPriceType =
  | 'limit'
  | 'opponent'
  | 'lightning'
  | 'optimal_5'
  | 'optimal_10'
  | 'optimal_20'
  | 'fok'
  | 'ioc'
  | 'opponent_ioc'
  | 'lightning_ioc'
  | 'optimal_5_ioc'
  | 'optimal_10_ioc'
  | 'optimal_20_ioc'
  | 'opponent_fok'
  | 'lightning_fok'
  | 'optimal_5_fok'
  | 'optimal_10_fok'
  | 'optimal_20_fok';

/** Req for POST /linear-swap-api/v1/swap_order_limit. Supports cross and isolated. */
export interface FuturesGetOrderLimitReq {
  /** Order price type. Required */
  order_price_type: FuturesGetOrderLimitPriceType;
  /** Contract code. swap: BTC-USDT, future: BTC-USDT-210625. Omit for all */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
  /** futures, swap, all. Required for futures. Default swap */
  business_type?: 'futures' | 'swap' | 'all';
}

/** Req for POST /linear-swap-api/v1/swap_fee. Supports cross and isolated. */
export interface FuturesGetFeeReq {
  /** Contract code. swap: BTC-USDT, future: BTC-USDT-210625. Omit for all */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
  /** futures, swap, all. Required for futures. Default swap */
  business_type?: 'futures' | 'swap' | 'all';
}

/** Req for POST /linear-swap-api/v1/swap_cross_position_limit. Cross margin only. */
export interface FuturesGetCrossPositionLimitReq {
  /** Contract code. swap: BTC-USDT, future: BTC-USDT-210625. Omit for all */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
  /** futures, swap, all. Required for futures. Default swap */
  business_type?: 'futures' | 'swap' | 'all';
}

/** Req for POST /linear-swap-api/v1/swap_cross_lever_position_limit. Cross margin only. */
export interface FuturesGetCrossLeverageLimitsReq {
  /** futures, swap, all. Required for futures */
  business_type?: 'futures' | 'swap' | 'all';
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** Contract code. swap: BTC-USDT, future: BTC-USDT-211231. Omit for all */
  contract_code?: string;
  /** Leverage rate. Omit for all */
  lever_rate?: number;
}

/** Req for POST /linear-swap-api/v1/swap_master_sub_transfer. Supports cross and isolated. */
export interface FuturesTransferMasterSubReq {
  /** Sub-account UID */
  sub_uid: number;
  /** Asset (e.g. USDT) */
  asset: string;
  /** From margin account (e.g. USDT, BTC-USDT) */
  from_margin_account: string;
  /** To margin account */
  to_margin_account: string;
  /** Transfer amount */
  amount: number | string;
  /** master_to_sub or sub_to_master */
  type: 'master_to_sub' | 'sub_to_master';
  /** Optional client order ID [1, 9223372036854775807]. Valid 8h per transfer path */
  client_order_id?: number;
}

/** Req for POST /linear-swap-api/v1/swap_master_sub_transfer_record. Supports cross and isolated. */
export interface FuturesGetMasterSubTransfersReq {
  /** Margin account (e.g. BTC-USDT, USDT). Required */
  margin_account: string;
  /** 34: to sub, 35: from sub. Comma-separated for multiple. Omit for all */
  transfer_type?: string;
  /** Days to query. Max 90 */
  create_date: number;
  /** Page index. Default 1 */
  page_index?: number;
  /** Page size. Default 20, max 50 */
  page_size?: number;
}

/** Req for POST /linear-swap-api/v1/swap_transfer_inner. Transfer between margin accounts under same account. */
export interface FuturesTransferInnerReq {
  /** Asset (e.g. USDT) */
  asset: string;
  /** From margin account (e.g. BTC-USDT, USDT) */
  from_margin_account: string;
  /** To margin account */
  to_margin_account: string;
  /** Transfer amount */
  amount: number | string;
  /** Optional client order ID [1, 9223372036854775807]. Valid 8h */
  client_order_id?: number;
}

/** Req for POST /linear-swap-api/v1/linear-cancel-after. Automatic order cancellation (Dead Man's Switch). */
export interface FuturesSetCancelAfterReq {
  /** 1: enable, 0: disable */
  on_off: 0 | 1;
  /** Countdown ms. Min 5000. Default 5000. Cancel all pending orders when timer expires. */
  time_out?: number;
}

/** Order price type for swap_order and swap_cross_order */
export type FuturesSubmitOrderPriceType =
  | 'market'
  | 'limit'
  | 'opponent'
  | 'post_only'
  | 'optimal_5'
  | 'optimal_10'
  | 'optimal_20'
  | 'ioc'
  | 'fok'
  | 'opponent_ioc'
  | 'optimal_5_ioc'
  | 'optimal_10_ioc'
  | 'optimal_20_ioc'
  | 'opponent_fok'
  | 'optimal_5_fok'
  | 'optimal_10_fok'
  | 'optimal_20_fok';

/** Req for POST /linear-swap-api/v1/swap_order. Isolated margin only. */
export interface FuturesSubmitOrderReq {
  /** Contract code (e.g. BTC-USDT). Required */
  contract_code: string;
  /** buy or sell */
  direction: 'buy' | 'sell';
  /** Order quantity */
  volume: number;
  /** Leverage rate */
  lever_rate: number;
  /** Order price type */
  order_price_type: FuturesSubmitOrderPriceType;
  /** open, close, both. Required in hedge mode */
  offset?: 'open' | 'close' | 'both';
  /** Price. Required for limit, post_only, ioc, fok */
  price?: number | string;
  /** 0: no, 1: yes */
  reduce_only?: 0 | 1;
  /** Client order ID [1, 9223372036854775807] */
  client_order_id?: number;
  /** Take-profit trigger price */
  tp_trigger_price?: number | string;
  /** Take-profit order price */
  tp_order_price?: number | string;
  /** Take-profit order type */
  tp_order_price_type?: string;
  /** Stop-loss trigger price */
  sl_trigger_price?: number | string;
  /** Stop-loss order price */
  sl_order_price?: number | string;
  /** Stop-loss order type */
  sl_order_price_type?: string;
  /** Price protection when setting tp/sl */
  price_protect?: boolean;
  /** 0: allow self-trade, 1: prevent (default) */
  self_match_prevent?: 0 | 1;
  /** cancel_taker, cancel_maker, cancel_both */
  self_match_prevent_new?: 'cancel_taker' | 'cancel_maker' | 'cancel_both';
}

/** Req for POST /linear-swap-api/v1/swap_cross_order. Cross margin only. One of contract_code or (pair+contract_type) required. */
export interface FuturesCrossSubmitOrderReq {
  /** Contract code. swap: BTC-USDT, future: BTC-USDT-210625. Omit if pair+contract_type */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT). Use with contract_type */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
  /** buy or sell */
  direction: 'buy' | 'sell';
  /** Order quantity */
  volume: number;
  /** Leverage rate */
  lever_rate: number;
  /** Order price type */
  order_price_type: FuturesSubmitOrderPriceType;
  /** open, close, both. Required in hedge mode */
  offset?: 'open' | 'close' | 'both';
  /** Price. Required for limit, post_only, ioc, fok */
  price?: number | string;
  /** 0: no, 1: yes */
  reduce_only?: 0 | 1;
  /** Client order ID [1, 9223372036854775807] */
  client_order_id?: number;
  /** Take-profit trigger price */
  tp_trigger_price?: number | string;
  /** Take-profit order price */
  tp_order_price?: number | string;
  /** Take-profit order type */
  tp_order_price_type?: string;
  /** Stop-loss trigger price */
  sl_trigger_price?: number | string;
  /** Stop-loss order price */
  sl_order_price?: number | string;
  /** Stop-loss order type */
  sl_order_price_type?: string;
  /** 0: allow self-trade, 1: prevent (default) */
  self_match_prevent?: 0 | 1;
  /** cancel_taker, cancel_maker, cancel_both */
  self_match_prevent_new?: 'cancel_taker' | 'cancel_maker' | 'cancel_both';
}

/** Req for POST /linear-swap-api/v1/swap_batchorder. Isolated. Max 10 orders. */
export interface FuturesSubmitBatchOrderReq {
  orders_data: FuturesSubmitOrderReq[];
}

/** Req for POST /linear-swap-api/v1/swap_cross_batchorder. Cross. Max 25 orders. */
export interface FuturesSubmitCrossBatchOrderReq {
  orders_data: FuturesCrossSubmitOrderReq[];
}

/** Req for POST /linear-swap-api/v1/swap_cancel. Isolated. One of order_id or client_order_id required. Max 25 IDs. */
export interface FuturesCancelOrderReq {
  /** Contract code (e.g. BTC-USDT). Required */
  contract_code: string;
  /** Order IDs, comma-separated. Max 25 */
  order_id?: string;
  /** Client order IDs, comma-separated. Max 25 */
  client_order_id?: string;
}

/** Req for POST /linear-swap-api/v1/swap_cross_cancel. Cross. One of order_id/client_order_id and one of contract_code/(pair+contract_type) required. */
export interface FuturesCancelCrossOrderReq {
  /** Order IDs, comma-separated. Max 25 */
  order_id?: string;
  /** Client order IDs, comma-separated. Max 25 */
  client_order_id?: string;
  /** Contract code. swap: BTC-USDT, future: BTC-USDT-210625 */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
}

/** Req for POST /linear-swap-api/v1/swap_cancelall. Isolated. One of direction or offset optional. */
export interface FuturesCancelAllOrdersReq {
  /** Contract code (e.g. BTC-USDT). Required */
  contract_code: string;
  /** buy or sell. Omit for all */
  direction?: 'buy' | 'sell';
  /** open or close. Omit for all */
  offset?: 'open' | 'close';
}

/** Req for POST /linear-swap-api/v1/swap_cross_cancelall. Cross. One of contract_code or (pair+contract_type) required. */
export interface FuturesCancelCrossAllOrdersReq {
  /** Contract code. swap: BTC-USDT, future: BTC-USDT-210625 */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
  /** buy or sell. Omit for all */
  direction?: 'buy' | 'sell';
  /** open or close. Omit for all */
  offset?: 'open' | 'close';
}

/** Req for POST /linear-swap-api/v1/swap_cross_switch_lever_rate. Cross margin only. One of contract_code or (pair+contract_type) required. */
export interface FuturesUpdateCrossLeverageReq {
  /** Leverage multiple. Required */
  lever_rate: number;
  /** Contract code. swap: BTC-USDT, future: BTC-USDT-210625 */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
}

/** Req for POST /linear-swap-api/v1/swap_order_info. Isolated. One of order_id or client_order_id required. Max 50 IDs. */
export interface FuturesGetOrderInfoReq {
  /** Contract code (e.g. BTC-USDT). Required */
  contract_code: string;
  /** Order IDs, comma-separated. Max 50 */
  order_id?: string;
  /** Client order IDs, comma-separated. Max 50 */
  client_order_id?: string;
}

/** Req for POST /linear-swap-api/v1/swap_cross_order_info. Cross. One of order_id/client_order_id and one of contract_code/pair required. */
export interface FuturesGetCrossOrderInfoReq {
  /** Order IDs, comma-separated. Max 50 */
  order_id?: string;
  /** Client order IDs, comma-separated. Max 50 */
  client_order_id?: string;
  /** Contract code. swap: BTC-USDT, future: BTC-USDT-210625 */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
}

/** Req for POST /linear-swap-api/v1/swap_order_detail. Isolated. Order details with trades. */
export interface FuturesGetOrderDetailReq {
  /** Contract code (e.g. BTC-USDT). Required */
  contract_code: string;
  /** Order ID. Required */
  order_id: number | string;
  /** Created timestamp (ms). Improves query performance. Cannot be 0 */
  created_at?: number;
  /** 1: Quotation, 2: Cancelled, 3: Forced liquidation, 4: Delivery, 22: ADL */
  order_type?: number;
  /** Page index. Default 1 */
  page_index?: number;
  /** Page size. Default 20, max 50 */
  page_size?: number;
}

/** Req for POST /linear-swap-api/v1/swap_cross_order_detail. Cross. One of contract_code or pair required. */
export interface FuturesGetCrossOrderDetailReq {
  /** Order ID. Required */
  order_id: number | string;
  /** Contract code. swap: BTC-USDT, future: BTC-USDT-210625 */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** Created timestamp (ms). Cannot be 0 */
  created_at?: number;
  /** 1: Quotation, 2: Cancelled, 3: Forced liquidation, 4: Delivery, 22: ADL */
  order_type?: number;
  /** Page index. Default 1 */
  page_index?: number;
  /** Page size. Default 20, max 50 */
  page_size?: number;
}

/** Req for POST /linear-swap-api/v1/swap_openorders. Isolated. Current unfilled orders. */
export interface FuturesGetOpenOrdersReq {
  /** Contract code (e.g. BTC-USDT). Omit for all */
  contract_code?: string;
  /** Page index. Default 1 */
  page_index?: number;
  /** Page size. Default 20, max 50 */
  page_size?: number;
  /** created_at or update_time. Default created_at */
  sort_by?: 'created_at' | 'update_time';
  /** 0: all, 1: buy long, 2: sell short, 3: buy short, 4: sell long, 17: buy(one-way), 18: sell(one-way) */
  trade_type?: 0 | 1 | 2 | 3 | 4 | 17 | 18;
}

/** Req for POST /linear-swap-api/v1/swap_cross_openorders. Cross. Omit all for all contracts. */
export interface FuturesGetCrossOpenOrdersReq {
  /** Contract code. swap: BTC-USDT, future: BTC-USDT-210625 */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** Page index. Default 1 */
  page_index?: number;
  /** Page size. Default 20, max 50 */
  page_size?: number;
  /** created_at or update_time */
  sort_by?: 'created_at' | 'update_time';
  /** 0: all, 1: buy long, 2: sell short, 3: buy short, 4: sell long, 17: buy(one-way), 18: sell(one-way) */
  trade_type?: 0 | 1 | 2 | 3 | 4 | 17 | 18;
}

/** Req for POST /linear-swap-api/v3/swap_hisorders. Isolated. History orders. */
export interface FuturesGetHistoryOrdersReq {
  /** Contract code (e.g. BTC-USDT). Required */
  contract: string;
  /** 0: All, 1: Open long, 2: Open short, 3: Close short, 4: Close long, 5: Liquidate long, 6: Liquidate short, 17: buy(one-way), 18: sell(one-way) */
  trade_type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 17 | 18;
  /** 1: All Orders, 2: Order in Finished Status */
  type: 1 | 2;
  /** 0: all, or comma-separated e.g. "3,4,5" */
  status: string;
  /** Start time (ms). Window max 48h, within 90 days */
  start_time?: number;
  /** End time (ms). Default now */
  end_time?: number;
  /** next or prev. Default prev */
  direct?: 'next' | 'prev';
  /** Pagination: min/max query_id from last result */
  from_id?: number;
}

/** Req for POST /linear-swap-api/v3/swap_hisorders_exact. Isolated. History orders via multiple fields; adds price_type filter. */
export interface FuturesGetHistoryOrdersExactReq {
  /** Contract code (e.g. BTC-USDT). Required */
  contract: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** 0: All, 1: Open long, 2: Open short, 3: Close short, 4: Close long, 5: Liquidate long, 6: Liquidate short, 17: buy(one-way), 18: sell(one-way) */
  trade_type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 17 | 18;
  /** 1: All Orders, 2: Order in Finished Status */
  type: 1 | 2;
  /** 0: all, or comma-separated e.g. "3,4,5" */
  status: string;
  /** Order price type filter: limit, opponent, post_only, optimal_5, optimal_10, optimal_20, ioc, fok, opponent_ioc, optimal_5_ioc, optimal_10_ioc, optimal_20_ioc, opponent_fok, optimal_5_fok, optimal_10_fok, optimal_20_fok */
  price_type?: string;
  /** Start time (ms). Window max 48h, within 90 days */
  start_time?: number;
  /** End time (ms). Default now */
  end_time?: number;
  /** next or prev. Default prev */
  direct?: 'next' | 'prev';
  /** Pagination: min/max query_id from last result */
  from_id?: number;
}

/** Req for POST /linear-swap-api/v3/swap_cross_hisorders_exact. Cross. History orders via multiple fields; adds price_type filter. */
export interface FuturesGetCrossHistoryOrdersExactReq {
  /** Contract code. swap: BTC-USDT, future: BTC-USDT-210625. When both pair and contract filled, contract preferred */
  contract: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** 0: All, 1: Open long, 2: Open short, 3: Close short, 4: Close long, 5: Liquidate long, 6: Liquidate short, 17: buy(one-way), 18: sell(one-way) */
  trade_type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 17 | 18;
  /** 1: All Orders, 2: Order in Finished Status */
  type: 1 | 2;
  /** 0: all, or comma-separated e.g. "3,4,5" */
  status: string;
  /** Order price type filter: limit, opponent, post_only, optimal_5, optimal_10, optimal_20, ioc, fok, opponent_ioc, optimal_5_ioc, optimal_10_ioc, optimal_20_ioc, opponent_fok, optimal_5_fok, optimal_10_fok, optimal_20_fok */
  price_type?: string;
  /** Start time (ms). Window max 48h, within 90 days */
  start_time?: number;
  /** End time (ms). Default now */
  end_time?: number;
  /** next or prev. Default prev */
  direct?: 'next' | 'prev';
  /** Pagination: min/max query_id from last result */
  from_id?: number;
}

/** Req for POST /linear-swap-api/v3/swap_cross_hisorders. Cross. One of contract or pair required. */
export interface FuturesGetCrossHistoryOrdersReq {
  /** Contract code. swap: BTC-USDT, future: BTC-USDT-210625 */
  contract?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** 0: All, 1: Open long, 2: Open short, 3: Close short, 4: Close long, 5: Liquidate long, 6: Liquidate short, 17: buy(one-way), 18: sell(one-way) */
  trade_type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 17 | 18;
  /** 1: All Orders, 2: Order in Finished Status */
  type: 1 | 2;
  /** 0: all, or comma-separated e.g. "3,4,5" */
  status: string;
  /** Start time (ms). Window max 48h, within 90 days */
  start_time?: number;
  /** End time (ms). Default now */
  end_time?: number;
  /** next or prev. Default prev */
  direct?: 'next' | 'prev';
  /** Pagination: min/max query_id from last result */
  from_id?: number;
}

/** Req for POST /linear-swap-api/v3/swap_matchresults. Isolated. History match results. One of contract or pair required. */
export interface FuturesGetMatchResultsReq {
  /** Contract code (e.g. BTC-USDT) */
  contract?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** 0: All, 1: Open long, 2: Open short, 3: Close short, 4: Close long, 5: Liquidate long, 6: Liquidate short, 17: buy(one-way), 18: sell(one-way) */
  trade_type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 17 | 18;
  /** Start time (ms). Window max 48h, within 90 days */
  start_time?: number;
  /** End time (ms). Default now */
  end_time?: number;
  /** next or prev. Default prev */
  direct?: 'next' | 'prev';
  /** Pagination: min/max query_id from last result */
  from_id?: number;
}

/** Req for POST /linear-swap-api/v3/swap_cross_matchresults. Cross. One of contract or pair required. */
export interface FuturesGetCrossMatchResultsReq {
  /** Contract code. swap: BTC-USDT, future: BTC-USDT-210625 */
  contract?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** 0: All, 1: Open long, 2: Open short, 3: Close short, 4: Close long, 5: Liquidate long, 6: Liquidate short, 17: buy(one-way), 18: sell(one-way) */
  trade_type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 17 | 18;
  /** Start time (ms). Window max 48h, within 90 days */
  start_time?: number;
  /** End time (ms). Default now */
  end_time?: number;
  /** next or prev. Default prev */
  direct?: 'next' | 'prev';
  /** Pagination: min/max query_id from last result */
  from_id?: number;
}

/** Req for POST /linear-swap-api/v3/swap_matchresults_exact. Isolated. No pair param. */
export interface FuturesGetMatchResultsExactReq {
  /** Contract code (e.g. BTC-USDT). Required */
  contract: string;
  /** 0: All, 1: Open long, 2: Open short, 3: Close short, 4: Close long, 5: Liquidate long, 6: Liquidate short, 17: buy(one-way), 18: sell(one-way) */
  trade_type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 17 | 18;
  /** Start time (ms). Window max 48h, within 90 days */
  start_time?: number;
  /** End time (ms). Default now */
  end_time?: number;
  /** next or prev. Default prev */
  direct?: 'next' | 'prev';
  /** Pagination: min/max query_id from last result */
  from_id?: number;
}

/** Req for POST /linear-swap-api/v3/swap_cross_matchresults_exact. Cross. When both filled, contract preferred. */
export interface FuturesGetCrossMatchResultsExactReq {
  /** Contract code. swap: BTC-USDT, future: BTC-USDT-210625 */
  contract: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** 0: All, 1: Open long, 2: Open short, 3: Close short, 4: Close long, 5: Liquidate long, 6: Liquidate short, 17: buy(one-way), 18: sell(one-way) */
  trade_type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 17 | 18;
  /** Start time (ms). Window max 48h, within 90 days */
  start_time?: number;
  /** End time (ms). Default now */
  end_time?: number;
  /** next or prev. Default prev */
  direct?: 'next' | 'prev';
  /** Pagination: min/max query_id from last result */
  from_id?: number;
}

/** Req for POST /linear-swap-api/v1/swap_lightning_close_position. Isolated. Lightning close order. */
export interface FuturesSubmitLightningCloseOrderReq {
  /** Contract code (e.g. BTC-USDT). Case-insensitive */
  contract_code: string;
  /** buy: open, sell: close */
  direction: 'buy' | 'sell';
  /** Client order ID. Unique per API, user-maintained */
  client_order_id?: number;
  /** market (default), lightning_fok, lightning_ioc */
  order_price_type?: 'market' | 'lightning_fok' | 'lightning_ioc';
}

/** Req for POST /linear-swap-api/v1/swap_cross_lightning_close_position. Cross. One of (pair+contract_type) or contract_code required. */
export interface FuturesSubmitCrossLightningCloseOrderReq {
  /** Contract code. swap: BTC-USDT, future: BTC-USDT-210625. Preferred when all filled */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
  /** buy or sell */
  direction: 'buy' | 'sell';
  /** Client order ID [1, 9223372036854775807] */
  client_order_id?: number;
  /** market (default), lightning_fok, lightning_ioc */
  order_price_type?: 'market' | 'lightning_fok' | 'lightning_ioc';
}

/** Req for GET /linear-swap-api/v1/swap_cross_trade_state. Cross margin only. */
export interface FuturesGetCrossTradeStateReq {
  /** Contract code. swap: BTC-USDT, future: BTC-USDT-210625. Omit for all */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
  /** futures, swap, all. Required for futures. Default swap */
  business_type?: 'futures' | 'swap' | 'all';
}

/**
 * Swap Strategy Order Interface
 */

/** Req for POST /linear-swap-api/v1/swap_trigger_order. [Isolated] Submit Trigger Order. Isolated margin only. Trade. 5/s. */
export interface FuturesSubmitTriggerOrderReq {
  /** Contract type (e.g. BTC-USDT) */
  contract_code: string;
  /** ge: Equal to or Greater than; le: Less than or Equal to */
  trigger_type: 'ge' | 'le';
  /** Trigger price */
  trigger_price: number | string;
  /** Order price (required when order_price_type is limit) */
  order_price?: number | string;
  /** limit (default), optimal_5, optimal_10, optimal_20 */
  order_price_type?: 'limit' | 'optimal_5' | 'optimal_10' | 'optimal_20';
  /** Volume (number of contracts) */
  volume: number;
  /** buy or sell */
  direction: 'buy' | 'sell';
  /** open, close, both. In hedge mode required; in one-way mode optional, must be both when filled */
  offset?: 'open' | 'close' | 'both';
  /** Leverage. Must match current position leverage when holding. High leverage = high risk */
  lever_rate?: number;
  /** 0: no, 1: yes. In hedge mode invalid; one-way: 0 when not filled. reduce_only=1 for open in one-way triggers error 1492 */
  reduce_only?: 0 | 1;
}

/** Req for POST /linear-swap-api/v1/swap_cross_trigger_order. [Cross] Submit Trigger Order. Cross margin only. One of (pair+contract_type) or contract_code required; contract_code preferred when all filled. Trade. 5/s. */
export interface FuturesSubmitCrossTriggerOrderReq {
  /** Contract code. swap: BTC-USDT; future: BTC-USDT-210625. Preferred when all filled */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT). Use with contract_type */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
  /** 0: no, 1: yes. In hedge mode invalid; one-way: 0 when not filled. reduce_only=1 for open in one-way triggers error 1492 */
  reduce_only?: 0 | 1;
  /** ge: Equal to or Greater than; le: Less than or Equal to */
  trigger_type: 'ge' | 'le';
  /** Trigger price */
  trigger_price: number | string;
  /** Order price (required when order_price_type is limit) */
  order_price?: number | string;
  /** limit (default), optimal_5, optimal_10, optimal_20 */
  order_price_type?: 'limit' | 'optimal_5' | 'optimal_10' | 'optimal_20';
  /** Volume (number of contracts) */
  volume: number;
  /** buy or sell */
  direction: 'buy' | 'sell';
  /** open, close, both. In hedge mode required; in one-way mode optional, must be both when filled */
  offset?: 'open' | 'close' | 'both';
  /** Leverage. Long = short leverage. High leverage = high risk */
  lever_rate?: number;
}

/** Req for POST /linear-swap-api/v1/swap_trigger_cancelall. [Isolated] Cancel All Trigger Orders. Isolated margin only. Trade. 5/s. Can fill only one of direction and offset to filter. */
export interface FuturesCancelAllTriggerOrdersReq {
  /** Contract code (e.g. BTC-USDT) */
  contract_code: string;
  /** Transaction direction; omit for all */
  direction?: 'buy' | 'sell';
  /** open, close; omit for all */
  offset?: 'open' | 'close';
}

/** Req for POST /linear-swap-api/v1/swap_cross_trigger_cancelall. [Cross] Cancel All Trigger Orders. Cross margin only. One of (pair+contract_type) or contract_code required; contract_code preferred when all filled. Trade. 5/s. Can fill only one of direction and offset to filter. */
export interface FuturesCancelAllCrossTriggerOrdersReq {
  /** Contract code. swap: BTC-USDT; future: BTC-USDT-210625. Preferred when all filled */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT). Use with contract_type */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
  /** Transaction direction; omit for all */
  direction?: 'buy' | 'sell';
  /** open, close; omit for all */
  offset?: 'open' | 'close';
}

/** Req for POST /linear-swap-api/v1/swap_cross_trigger_cancel. [Cross] Cancel Trigger Order. Cross margin only. One of (pair+contract_type) or contract_code required; contract_code preferred when all filled. Trade. 5/s. */
export interface FuturesCancelCrossTriggerOrderReq {
  /** Contract code. swap: BTC-USDT; future: BTC-USDT-210625. Preferred when all filled */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT). Use with contract_type */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
  /** Order ID(s). Comma-separated, max 10 */
  order_id: string;
}

/** Req for POST /linear-swap-api/v1/swap_trigger_openorders. [Isolated] Query Trigger Order Open Orders. Isolated margin only. Read. 5/s. */
export interface FuturesGetTriggerOpenOrdersReq {
  /** Contract code (e.g. BTC-USDT) */
  contract_code: string;
  /** Page index. Default 1 */
  page_index?: number;
  /** Page size. Default 20, max 50 */
  page_size?: number;
  /** 0: all, 1: buy long, 2: sell short, 3: buy short, 4: sell long, 17: buy(one-way), 18: sell(one-way) */
  trade_type?: 0 | 1 | 2 | 3 | 4 | 17 | 18;
}

/** Req for POST /linear-swap-api/v1/swap_cross_trigger_openorders. [Cross] Query Trigger Order Open Orders. Cross margin only. When both pair and contract_code filled, contract_code preferred; when none, all open orders. Read. */
export interface FuturesGetCrossTriggerOpenOrdersReq {
  /** Contract code. swap: BTC-USDT; future: BTC-USDT-210625 */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** Page index. Default 1 */
  page_index?: number;
  /** Page size. Default 20, max 50 */
  page_size?: number;
  /** 0: all, 1: buy long, 2: sell short, 3: buy short, 4: sell long, 17: buy(one-way), 18: sell(one-way) */
  trade_type?: 0 | 1 | 2 | 3 | 4 | 17 | 18;
}

/** Req for POST /linear-swap-api/v1/swap_trigger_hisorders. [Isolated] Query Trigger Order History. Isolated margin only. Read. Default query completed (status 4,5,6). */
export interface FuturesGetTriggerOrderHistoryReq {
  /** Contract code (e.g. BTC-USDT) */
  contract_code: string;
  /** 0: all, 1: open long, 2: close short, 3: open short, 4: close long, 17: buy(one-way), 18: sell(one-way) */
  trade_type: 0 | 1 | 2 | 3 | 4 | 17 | 18;
  /** Order status: 0: all, 4: submitted, 5: failed, 6: cancelled. Comma-separated allowed */
  status: string;
  /** Days. Positive integer, max 90; beyond 90 returns last 90 days */
  create_date: number;
  /** Page index. Default 1 */
  page_index?: number;
  /** Page size. Default 20, max 50 */
  page_size?: number;
  /** created_at (default) or update_time; descending */
  sort_by?: 'created_at' | 'update_time';
}

/** Req for POST /linear-swap-api/v1/swap_tpsl_order. [Isolated] Set Take-profit and Stop-loss for existing position. Isolated margin only. At least one of tp_trigger_price and sl_trigger_price required. Trade. 5/s. */
export interface FuturesSubmitTpslOrderReq {
  /** Contract code (e.g. BTC-USDT) */
  contract_code: string;
  /** buy or sell */
  direction: 'buy' | 'sell';
  /** Volume (number of contracts) */
  volume: number | string;
  /** Take-profit trigger price */
  tp_trigger_price?: number | string;
  /** Take-profit order price (not required for optimal_5/10/20) */
  tp_order_price?: number | string;
  /** market (default), limit, optimal_5, optimal_10, optimal_20 */
  tp_order_price_type?:
    | 'market'
    | 'limit'
    | 'optimal_5'
    | 'optimal_10'
    | 'optimal_20';
  /** Stop-loss trigger price */
  sl_trigger_price?: number | string;
  /** Stop-loss order price (not required for optimal_5/10/20) */
  sl_order_price?: number | string;
  /** market (default), limit, optimal_5, optimal_10, optimal_20 */
  sl_order_price_type?:
    | 'market'
    | 'limit'
    | 'optimal_5'
    | 'optimal_10'
    | 'optimal_20';
  /** Price protection. Default false. Only when setting tp/sl */
  price_protect?: boolean;
}

/** Req for POST /linear-swap-api/v1/swap_cross_tpsl_order. [Cross] Set Take-profit and Stop-loss for existing position. Cross margin only. One of (pair+contract_type) or contract_code required; contract_code preferred when all filled. At least one of tp_trigger_price and sl_trigger_price required. Trade. 5/s. */
export interface FuturesSubmitCrossTpslOrderReq {
  /** Contract code. swap: BTC-USDT; future: BTC-USDT-210625. Preferred when all filled */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT). Use with contract_type */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
  /** buy or sell */
  direction: 'buy' | 'sell';
  /** Volume (number of contracts) */
  volume: number | string;
  /** Take-profit trigger price */
  tp_trigger_price?: number | string;
  /** Take-profit order price (not required for optimal_5/10/20) */
  tp_order_price?: number | string;
  /** market (default), limit, optimal_5, optimal_10, optimal_20 */
  tp_order_price_type?:
    | 'market'
    | 'limit'
    | 'optimal_5'
    | 'optimal_10'
    | 'optimal_20';
  /** Stop-loss trigger price */
  sl_trigger_price?: number | string;
  /** Stop-loss order price (not required for optimal_5/10/20) */
  sl_order_price?: number | string;
  /** market (default), limit, optimal_5, optimal_10, optimal_20 */
  sl_order_price_type?:
    | 'market'
    | 'limit'
    | 'optimal_5'
    | 'optimal_10'
    | 'optimal_20';
  /** Price protection. Default false. Only when setting tp/sl */
  price_protect?: boolean;
}

/** Req for POST /linear-swap-api/v1/swap_tpsl_cancel. [Isolated] Cancel a Take-profit and Stop-loss Order. Isolated margin only. Trade. 5/s. */
export interface FuturesCancelTpslOrderReq {
  /** Contract code (e.g. BTC-USDT) */
  contract_code: string;
  /** Order ID(s). Comma-separated, max 10 */
  order_id: string;
}

/** Req for POST /linear-swap-api/v1/swap_cross_tpsl_cancel. [Cross] Cancel a Take-profit and Stop-loss Order. Cross margin only. One of (pair+contract_type) or contract_code required; contract_code preferred when all filled. Trade. 5/s. */
export interface FuturesCancelCrossTpslOrderReq {
  /** Contract code. swap: BTC-USDT; future: BTC-USDT-210625. Preferred when all filled */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT). Use with contract_type */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
  /** Order ID(s). Comma-separated, max 10 */
  order_id: string;
}

/** Req for POST /linear-swap-api/v1/swap_tpsl_cancelall. [Isolated] Cancel all Take-profit and Stop-loss Orders. Isolated margin only. Trade. 5/s. */
export interface FuturesCancelAllTpslOrdersReq {
  /** Contract code (e.g. BTC-USDT) */
  contract_code: string;
  /** buy or sell; omit for all */
  direction?: 'buy' | 'sell';
}

/** Req for POST /linear-swap-api/v1/swap_cross_tpsl_cancelall. [Cross] Cancel all Take-profit and Stop-loss Orders. Cross margin only. One of (pair+contract_type) or contract_code required; contract_code preferred when all filled. Trade. 5/s. */
export interface FuturesCancelAllCrossTpslOrdersReq {
  /** Contract code. swap: BTC-USDT; future: BTC-USDT-210625. Preferred when all filled */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT). Use with contract_type */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
  /** buy or sell; omit for all */
  direction?: 'buy' | 'sell';
}

/** Req for POST /linear-swap-api/v1/swap_cross_trigger_hisorders. [Cross] Query Trigger Order History. Cross margin only. One of pair or contract_code required; contract_code preferred when both filled. Read. */
export interface FuturesGetCrossTriggerOrderHistoryReq {
  /** Contract code. swap: BTC-USDT; future: BTC-USDT-210625 */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** 0: all, 1: open long, 2: close short, 3: open short, 4: close long, 17: buy(one-way), 18: sell(one-way) */
  trade_type: 0 | 1 | 2 | 3 | 4 | 17 | 18;
  /** Order status: 0: all, 4: submitted, 5: failed, 6: cancelled. Comma-separated allowed */
  status: string;
  /** Days. Positive integer, max 90 */
  create_date: number;
  /** Page index. Default 1 */
  page_index?: number;
  /** Page size. Default 20, max 50 */
  page_size?: number;
  /** created_at (default) or update_time; descending */
  sort_by?: 'created_at' | 'update_time';
}

/** Req for POST /linear-swap-api/v1/swap_tpsl_openorders. [Isolated] Query Open Take-profit and Stop-loss Orders. Isolated margin only. Read. */
export interface FuturesGetTpslOpenOrdersReq {
  /** Contract code (e.g. BTC-USDT) */
  contract_code: string;
  /** Page index. Default 1 */
  page_index?: number;
  /** Page size. Default 20, max 50 */
  page_size?: number;
  /** 0: all, 3: buy short, 4: sell long */
  trade_type?: 0 | 3 | 4;
}

/** Req for POST /linear-swap-api/v1/swap_cross_tpsl_openorders. [Cross] Query Open Take-profit and Stop-loss Orders. Cross margin only. When both filled, contract_code preferred; when none, all data. Read. */
export interface FuturesGetCrossTpslOpenOrdersReq {
  /** Contract code. swap: BTC-USDT; future: BTC-USDT-210625 */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** Page index. Default 1 */
  page_index?: number;
  /** Page size. Default 20, max 50 */
  page_size?: number;
  /** 0: all, 3: buy short, 4: sell long */
  trade_type?: 0 | 3 | 4;
}

/** Req for POST /linear-swap-api/v1/swap_tpsl_hisorders. [Isolated] Query Take-profit and Stop-loss History Orders. Isolated margin only. Read. */
export interface FuturesGetTpslHistoryOrdersReq {
  /** Contract code (e.g. BTC-USDT) */
  contract_code: string;
  /** Status: 0: all, 4: submitted, 5: failed, 6: cancelled, 11: expired. Comma-separated allowed */
  status: string;
  /** Days. Positive integer, max 90 */
  create_date: number;
  /** Page index. Default 1 */
  page_index?: number;
  /** Page size. Default 20, max 50 */
  page_size?: number;
  /** created_at (default) or update_time; descending */
  sort_by?: 'created_at' | 'update_time';
}

/** Req for POST /linear-swap-api/v1/swap_cross_tpsl_hisorders. [Cross] Query Take-profit and Stop-loss History Orders. Cross margin only. One of pair or contract_code required; contract_code preferred when both filled. Read. */
export interface FuturesGetCrossTpslHistoryOrdersReq {
  /** Contract code. swap: BTC-USDT; future: BTC-USDT-210625 */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** Status: 0: all, 4: submitted, 5: failed, 6: cancelled, 11: expired. Comma-separated allowed */
  status: string;
  /** Days. Positive integer, max 90 */
  create_date: number;
  /** Page index. Default 1 */
  page_index?: number;
  /** Page size. Default 20, max 50 */
  page_size?: number;
  /** created_at (default) or update_time; descending */
  sort_by?: 'created_at' | 'update_time';
}

/** Req for POST /linear-swap-api/v1/swap_cross_relation_tpsl_order. [Cross] Query TPSL orders related to position opening order. Cross margin only. One of pair or contract_code required; contract_code preferred when both filled. Read. */
export interface FuturesGetCrossTpSlOrderInfoReq {
  /** Contract code. swap: BTC-USDT; future: BTC-USDT-210625 */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** Position opening order ID */
  order_id: number | string;
}

/** Req for POST /linear-swap-api/v1/swap_track_order. [Isolated] Submit a Trailing Order. Isolated margin only. Trade. 5/s. */
export interface FuturesSubmitTrailingOrderReq {
  /** Contract code (e.g. BTC-USDT) */
  contract_code: string;
  /** 0: no, 1: yes. In hedge mode invalid; one-way: 0 when not filled. reduce_only=1 for open triggers error 1492 */
  reduce_only?: 0 | 1;
  /** buy or sell */
  direction: 'buy' | 'sell';
  /** open, close, both. Hedge mode required; one-way optional, must be both when filled */
  offset?: 'open' | 'close' | 'both';
  /** Leverage. Required when open, optional when close */
  lever_rate?: number;
  /** Volume (contracts) */
  volume: number | string;
  /** Callback rate (e.g. 0.01 = 1%). Min 0.001 (0.1%) */
  callback_rate: number | string;
  /** Active price */
  active_price: number | string;
  /** optimal_5, optimal_10, optimal_20, formula_price */
  order_price_type: 'optimal_5' | 'optimal_10' | 'optimal_20' | 'formula_price';
}

/** Req for POST /linear-swap-api/v1/swap_cross_track_order. [Cross] Submit a Trailing Order. Cross margin only. One of (pair+contract_type) or contract_code required; contract_code preferred when all filled. Trade. 5/s. */
export interface FuturesSubmitCrossTrailingOrderReq {
  /** Contract code. swap: BTC-USDT; future: BTC-USDT-210625. Preferred when all filled */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT). Use with contract_type */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
  /** 0: no, 1: yes. In hedge mode invalid; one-way: 0 when not filled. reduce_only=1 for open triggers error 1492 */
  reduce_only?: 0 | 1;
  /** buy or sell */
  direction: 'buy' | 'sell';
  /** open, close, both. Hedge mode required; one-way optional, must be both when filled */
  offset?: 'open' | 'close' | 'both';
  /** Leverage. Required when open, optional when close */
  lever_rate?: number;
  /** Volume (contracts) */
  volume: number | string;
  /** Callback rate (e.g. 0.01 = 1%). Min 0.001 (0.1%) */
  callback_rate: number | string;
  /** Active price */
  active_price: number | string;
  /** optimal_5, optimal_10, optimal_20, formula_price */
  order_price_type: 'optimal_5' | 'optimal_10' | 'optimal_20' | 'formula_price';
}

/** Req for POST /linear-swap-api/v1/swap_track_cancel. [Isolated] Cancel a Trailing Order. Isolated margin only. Trade. 5/s. */
export interface FuturesCancelTrailingOrderReq {
  /** Contract code (e.g. BTC-USDT) */
  contract_code: string;
  /** Trailing order ID(s). Comma-separated, max 10 */
  order_id: string;
}

/** Req for POST /linear-swap-api/v1/swap_cross_track_cancel. [Cross] Cancel a Trailing Order. Cross margin only. One of (pair+contract_type) or contract_code required; contract_code preferred when all filled. Trade. 5/s. */
export interface FuturesCancelCrossTrailingOrderReq {
  /** Contract code. swap: BTC-USDT; future: BTC-USDT-210625. Preferred when all filled */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT). Use with contract_type */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
  /** Trailing order ID(s). Comma-separated, max 10 */
  order_id: string;
}

/** Req for POST /linear-swap-api/v1/swap_track_cancelall. [Isolated] Cancel All Trailing Orders. Isolated margin only. Can fill only one of direction and offset to filter. Trade. 5/s. */
export interface FuturesCancelAllTrailingOrdersReq {
  /** Contract code (e.g. BTC-USDT) */
  contract_code: string;
  /** buy or sell; omit for all */
  direction?: 'buy' | 'sell';
  /** open or close; omit for all */
  offset?: 'open' | 'close';
}

/** Req for POST /linear-swap-api/v1/swap_cross_track_cancelall. [Cross] Cancel All Trailing Orders. Cross margin only. One of (pair+contract_type) or contract_code required; contract_code preferred when all filled. Can fill only one of direction and offset to filter. Trade. 5/s. */
export interface FuturesCancelAllCrossTrailingOrdersReq {
  /** Contract code. swap: BTC-USDT; future: BTC-USDT-210625. Preferred when all filled */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT). Use with contract_type */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
  /** buy or sell; omit for all */
  direction?: 'buy' | 'sell';
  /** open or close; omit for all */
  offset?: 'open' | 'close';
}

/** Req for POST /linear-swap-api/v1/swap_track_openorders. [Isolated] Current unfilled trailing orders. Isolated margin only. Read. */
export interface FuturesGetTrailingOpenOrdersReq {
  /** Contract code (e.g. BTC-USDT) */
  contract_code: string;
  /** 0: all, 1: buy long, 2: sell short, 3: buy short, 4: sell long, 17: buy(one-way), 18: sell(one-way) */
  trade_type?: 0 | 1 | 2 | 3 | 4 | 17 | 18;
  /** Page index. Default 1 */
  page_index?: number;
  /** Page size. Default 20, max 50 */
  page_size?: number;
}

/** Req for POST /linear-swap-api/v1/swap_cross_track_openorders. [Cross] Current unfilled trailing orders. Cross margin only. When both filled, contract_code preferred; when none, all open orders. Read. */
export interface FuturesGetCrossTrailingOpenOrdersReq {
  /** Contract code. swap: BTC-USDT; future: BTC-USDT-210625 */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** 0: all, 1: buy long, 2: sell short, 3: buy short, 4: sell long, 17: buy(one-way), 18: sell(one-way) */
  trade_type?: 0 | 1 | 2 | 3 | 4 | 17 | 18;
  /** Page index. Default 1 */
  page_index?: number;
  /** Page size. Default 20, max 50 */
  page_size?: number;
}

/** Req for POST /linear-swap-api/v1/swap_track_hisorders. [Isolated] Get History Trailing Orders. Isolated margin only. Read. */
export interface FuturesGetTrailingHistoryOrdersReq {
  /** Contract code (e.g. BTC-USDT) */
  contract_code: string;
  /** Status: 0: all, 4: submitted success, 5: failed, 6: cancelled. Comma-separated allowed */
  status: string;
  /** 0: all, 1: buy long, 2: sell short, 3: buy short, 4: sell long, 17: buy(one-way), 18: sell(one-way) */
  trade_type: 0 | 1 | 2 | 3 | 4 | 17 | 18;
  /** Days. Positive integer, max 90 */
  create_date: number;
  /** Page index. Default 1 */
  page_index?: number;
  /** Page size. Default 20, max 50 */
  page_size?: number;
  /** create_date or update_time; descending */
  sort_by?: 'create_date' | 'update_time' | 'created_at';
}

/** Req for POST /linear-swap-api/v1/swap_cross_track_hisorders. [Cross] Get History Trailing Orders. Cross margin only. One of pair or contract_code required; contract_code preferred when both filled. Read. */
export interface FuturesGetCrossTrailingHistoryOrdersReq {
  /** Contract code. swap: BTC-USDT; future: BTC-USDT-210625 */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** Status: 0: all, 4: submitted success, 5: failed, 6: cancelled. Comma-separated allowed */
  status: string;
  /** 0: all, 1: buy long, 2: sell short, 3: buy short, 4: sell long, 17: buy(one-way), 18: sell(one-way) */
  trade_type: 0 | 1 | 2 | 3 | 4 | 17 | 18;
  /** Days. Positive integer, max 90 */
  create_date: number;
  /** Page index. Default 1 */
  page_index?: number;
  /** Page size. Default 20, max 50 */
  page_size?: number;
  /** create_date or update_time; descending */
  sort_by?: 'create_date' | 'update_time' | 'created_at';
}

/**
 * Unified Account
 */

/** Req for POST /linear-swap-api/v3/fix_position_margin_change. Adjust margin for isolated positions. Trade. */
export interface FuturesUpdateUnifiedMarginReq {
  /** Adjustment amount */
  amount: number | string;
  /** Currency (e.g. USDT) */
  asset: string;
  /** Contract code (e.g. BTC-USDT, ETH-USDT) */
  contract_code: string;
  /** 1: increase isolated margin; 2: reduce isolated margin */
  type: 1 | 2;
  /** 1: buy; 2: sell */
  direction: 1 | 2;
  /** Client order ID */
  clientOrderId?: number | string;
}

/** Req for GET /linear-swap-api/v3/fix_position_margin_change_record. Query margin adjustment records of isolated positions. Read. */
export interface FuturesGetUnifiedMarginAdjustmentsReq {
  /** Currency (e.g. USDT) */
  asset: string;
  /** Contract code (e.g. BTC-USDT, ETH-USDT) */
  contract_code: string;
  /** Query start time (ms). Window max 48h, within 90 days. [(end_time - 48h), end_time] */
  start_time?: number;
  /** Query end time (ms). [(present-90d), present] */
  end_time?: number;
  /** prev: forward query; next: backward query */
  direct?: 'prev' | 'next';
  /** prev: min query_id from last result; next: max query_id from last result */
  from_id?: number;
}

/** Req for GET /v5/account/bills. Query financial records. */
export interface FuturesV5BillsReq {
  /** Contract code (e.g. BTC-USDT, ETH-USDT) */
  contract_code?: string;
  /** cross: Cross margin; isolated: Isolated margin */
  margin_mode?: 'cross' | 'isolated';
  /** Financial type; comma-separated for multiple. e.g. 3,4,5,6 */
  type?: string;
  /** Start time (ms). Default: now - 48h */
  start_time?: string | number;
  /** End time (ms). Default: now */
  end_time?: string | number;
  /** Query offset, default 0 */
  from?: number;
  /** Page size, default 10, max 100 */
  limit?: number;
  /** prev | next */
  direct?: 'prev' | 'next';
}

/** Req for POST /v5/trade/cancel_order. Cancel a single order. */
export interface FuturesV5CancelOrderReq {
  contract_code: string;
  /** Order ID. One of order_id or client_order_id required */
  order_id?: string;
  /** Client order ID. One of order_id or client_order_id required */
  client_order_id?: string;
}

/** Req for POST /v5/trade/cancel_batch_orders. Max 10 orders per request. */
export interface FuturesV5CancelBatchOrdersReq {
  contract_code: string;
  /** Order IDs. One of order_id or client_order_id required */
  order_id?: string[];
  /** Client order IDs. One of order_id or client_order_id required */
  client_order_id?: string[];
}

/** Req for POST /v5/trade/cancel_all_orders. Cancel all open orders. */
export interface FuturesV5CancelAllOrdersReq {
  contract_code?: string;
  side?: 'buy' | 'sell';
  position_side?: 'long' | 'short' | 'both';
}

/** Req for POST /v5/trade/position. Close all of a symbol at market price. */
export interface FuturesV5ClosePositionReq {
  contract_code: string;
  margin_mode: 'cross' | 'isolated';
  position_side: 'long' | 'short' | 'both';
  client_order_id?: string;
}

/** Req for GET /v5/trade/order/opens. Get unfilled orders. */
export interface FuturesV5OpenOrdersReq {
  contract_code?: string;
  margin_mode?: 'cross' | 'isolated';
  order_id?: string;
  client_order_id?: string;
  from?: number;
  limit?: number;
  direct?: 'prev' | 'next';
}

/** Req for GET /v5/trade/order/details. Execution details (last 3 days). */
export interface FuturesV5OrderDetailsReq {
  contract_code?: string;
  order_id?: string;
  start_time?: string | number;
  end_time?: string | number;
  from?: number;
  limit?: number;
  direct?: 'prev' | 'next';
}

/** Req for GET /v5/trade/order/history. Get order history. */
export interface FuturesV5OrderHistoryReq {
  contract_code: string;
  margin_mode: 'cross' | 'isolated';
  state?: string;
  type?: 'market' | 'limit' | 'post_only';
  price_match?: string;
  start_time?: string | number;
  end_time?: string | number;
  from?: number;
  limit?: number;
  direct?: 'prev' | 'next';
}

/** Req for GET /v5/trade/order. Get single order info. */
export interface FuturesV5OrderInfoReq {
  contract_code: string;
  margin_mode?: 'cross' | 'isolated';
  order_id?: string;
  client_order_id?: string;
}

/** Req for POST /v5/trade/cancel-after. Automatic order cancellation (Dead Man's Switch). */
export interface FuturesV5CancelAfterReq {
  on_off: '0' | '1';
  time_out?: number | string;
}

/** Req for POST /v5/trade/order. Place a single order. */
export interface FuturesV5SubmitOrderReq {
  contract_code: string;
  margin_mode: 'cross' | 'isolated';
  side: 'buy' | 'sell';
  type: 'market' | 'limit' | 'post_only';
  volume: string;
  position_side?: 'long' | 'short' | 'both';
  price_match?: 'opponent' | 'optimal_5' | 'optimal_10' | 'optimal_20';
  client_order_id?: string;
  price?: string | number;
  reduce_only?: 0 | 1;
  time_in_force?: 'fok' | 'ioc' | 'gtc';
  tp_trigger_price?: string;
  tp_order_price?: string;
  tp_type?: 'market' | 'limit' | 'optimal_5' | 'optimal_10' | 'optimal_20';
  tp_trigger_price_type?: 'last' | 'market';
  sl_trigger_price?: string;
  sl_order_price?: string;
  sl_type?: 'market' | 'limit' | 'optimal_5' | 'optimal_10' | 'optimal_20';
  sl_trigger_price_type?: 'last' | 'market';
  price_protect?: boolean;
  self_match_prevent?: 'cancel_taker' | 'cancel_maker' | 'cancel_both';
}

/**
 * USDT Margined Futures Multi Asset - Positions (v5 API)
 */

/** Req for GET /v5/trade/position/opens. Get current positions. */
export interface FuturesV5OpenPositionsReq {
  contract_code?: string;
}

/** Req for GET /v5/position/lever. Get leverage list. */
export interface FuturesV5LeverListReq {
  contract_code?: string;
  margin_mode?: 'cross' | 'isolated';
  position_side?: 'long' | 'short' | 'both';
}

/** Req for POST /v5/position/lever. Set leverage. */
export interface FuturesV5SetLeverageReq {
  contract_code: string;
  margin_mode: 'cross' | 'isolated';
  lever_rate: string | number;
  /** Required when isolated margin in two-way position mode */
  position_side?: 'long' | 'short' | 'both';
}

/** Req for POST /v5/position/mode. Set position mode. */
export interface FuturesV5SetPositionModeReq {
  position_mode: 'single_side' | 'dual_side';
}

/** Req for GET /v5/position/risk/limit. Get current position risk limit. */
export interface FuturesV5RiskLimitReq {
  contract_code?: string;
  margin_mode?: 'cross' | 'isolated';
  position_side?: 'long' | 'short' | 'both';
}

/** Req for GET /v5/position/risk/limit_tier. Query risk limit tiers. */
export interface FuturesV5RiskLimitTierReq {
  contract_code: string;
  margin_mode?: 'cross' | 'isolated';
}

/** Req for POST /v5/position/margin. Adjust margin for isolated positions. */
export interface FuturesV5AdjustMarginReq {
  contract_code: string;
  position_side: 'long' | 'short' | 'both';
  type: 'add' | 'reduce';
  amount: string;
  currency?: string;
}

/**
 * USDT Margined Futures Multi Asset - Basic Information (v5 API)
 */

/** Req for GET /v5/market/risk/limit. Get futures risk limit table. */
export interface FuturesV5MarketRiskLimitReq {
  contract_code?: string;
  margin_mode?: 'cross' | 'isolated';
  tier?: string | number;
}
