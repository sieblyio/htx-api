/**
 * Reference Data
 */

/** Req for GET /linear-swap-api/v1/swap_historical_funding_rate */
export interface FuturesHistoricalFundingRateReq {
  /** Contract code (e.g. BTC-USDT). Case-insensitive */
  contract_code: string;
  /** Page index. Default 1 */
  page_index?: number;
  /** Page size. Default 20, max 50 */
  page_size?: number;
}

/** Req for GET /linear-swap-api/v3/swap_liquidation_orders. One of pair and contract must be filled; contract preferred. */
export interface FuturesLiquidationOrdersReq {
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
export interface FuturesSettlementRecordsReq {
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
export interface FuturesCrossLadderMarginReq {
  /** Contract code. Omit for all. swap: BTC-USDT; future: BTC-USDT-210625 */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
  /** Default swap. futures, swap, all. Required for futures contract query */
  business_type?: 'futures' | 'swap' | 'all';
}

/** Req for GET /v1/insurance_fund_history */
export interface FuturesInsuranceFundHistoryReq {
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
export interface FuturesContractInfoReq {
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
export interface FuturesKlineReq {
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
export interface FuturesHistoricalOpenInterestReq {
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
export interface FuturesMarkPriceKlineReq {
  /** Contract code or type. swap: BTC-USDT; future: BTC-USDT-210625 or BTC-USDT-CW/NW/CQ/NQ */
  contract_code: string;
  /** 1min, 5min, 15min, 30min, 60min, 4hour, 1day, 1week, 1mon */
  period: string;
  /** Items [1-2000] */
  size: number;
}

/** Req for GET /index/market/history/linear_swap_basis */
export interface FuturesBasisReq {
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
export interface FuturesCrossPositionInfoReq {
  /** Contract code. Omit for all */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
}

/** Req for GET /linear-swap-api/v1/swap_sub_auth_list */
export interface FuturesSubAuthListReq {
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
export interface FuturesIsolatedSubAccountListReq {
  /** Contract code (e.g. BTC-USDT). Omit for all */
  contract_code?: string;
  /** next=chronological, prev=reverse. Default next */
  direct?: 'next' | 'prev';
  /** Pagination: min/max query_id from last result depending on direct */
  from_id?: number;
}

/** Req for POST /linear-swap-api/v1/swap_cross_sub_account_list. Cross margin only. */
export interface FuturesCrossSubAccountListReq {
  /** Margin account (e.g. USDT). Omit for all */
  margin_account?: string;
  /** next=chronological, prev=reverse. Default next */
  direct?: 'next' | 'prev';
  /** Pagination: min/max query_id from last result depending on direct */
  from_id?: number;
}

/** Req for POST /linear-swap-api/v1/swap_sub_account_info_list. Isolated margin only. */
export interface FuturesSubAccountInfoListReq {
  /** Contract code (e.g. BTC-USDT). Omit for all */
  contract_code?: string;
  /** Page index. Default 1 */
  page_index?: number;
  /** Page size. Default 20, max 50 */
  page_size?: number;
}

/** Req for POST /linear-swap-api/v1/swap_cross_sub_account_info_list. Cross margin only. */
export interface FuturesCrossSubAccountInfoListReq {
  /** Margin account (e.g. USDT). Omit for all */
  margin_account?: string;
  /** Page index. Default 1 */
  page_index?: number;
  /** Page size. Default 20, max 50 */
  page_size?: number;
}

/** Req for POST /linear-swap-api/v1/swap_sub_account_info. Isolated margin only. */
export interface FuturesIsolatedSubAccountInfoReq {
  /** Contract code (e.g. BTC-USDT). Omit for all */
  contract_code?: string;
  /** Sub-account UID */
  sub_uid: number;
}

/** Req for POST /linear-swap-api/v1/swap_cross_sub_account_info. Cross margin only. */
export interface FuturesCrossSubAccountInfoReq {
  /** Sub-account UID */
  sub_uid: number;
  /** Margin account (e.g. USDT). Omit for all */
  margin_account?: string;
}

/** Req for POST /linear-swap-api/v1/swap_sub_position_info. Isolated margin only. */
export interface FuturesIsolatedSubPositionInfoReq {
  /** Contract code (e.g. BTC-USDT). Omit for all */
  contract_code?: string;
  /** Sub-account UID */
  sub_uid: number;
}

/** Req for POST /linear-swap-api/v1/swap_cross_sub_position_info. Cross margin only. */
export interface FuturesCrossSubPositionInfoReq {
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
export interface FuturesFinancialRecordReq {
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
export type FuturesFinancialRecordExactReq = FuturesFinancialRecordReq;

/** Req for POST /linear-swap-api/v1/swap_available_level_rate. Isolated margin only. */
export interface FuturesAvailableLevelRateReq {
  /** Contract code (e.g. BTC-USDT). Omit for all */
  contract_code?: string;
}

/** Req for POST /linear-swap-api/v1/swap_cross_available_level_rate. Cross margin only. */
export interface FuturesCrossAvailableLevelRateReq {
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
export type FuturesOrderPriceType =
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
export interface FuturesOrderLimitReq {
  /** Order price type. Required */
  order_price_type: FuturesOrderPriceType;
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
export interface FuturesFeeReq {
  /** Contract code. swap: BTC-USDT, future: BTC-USDT-210625. Omit for all */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
  /** futures, swap, all. Required for futures. Default swap */
  business_type?: 'futures' | 'swap' | 'all';
}

/** Req for POST /linear-swap-api/v1/swap_transfer_limit. Isolated margin only. */
export interface FuturesTransferLimitReq {
  /** Contract code (e.g. BTC-USDT). Omit for all */
  contract_code?: string;
}

/** Req for POST /linear-swap-api/v1/swap_cross_transfer_limit. Cross margin only. */
export interface FuturesCrossTransferLimitReq {
  /** Margin account (e.g. USDT). Omit for all */
  margin_account?: string;
}

/** Req for POST /linear-swap-api/v1/swap_position_limit. Isolated margin only. */
export interface FuturesPositionLimitReq {
  /** Contract code (e.g. BTC-USDT). Omit for all */
  contract_code?: string;
}

/** Req for POST /linear-swap-api/v1/swap_cross_position_limit. Cross margin only. */
export interface FuturesCrossPositionLimitReq {
  /** Contract code. swap: BTC-USDT, future: BTC-USDT-210625. Omit for all */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
  /** futures, swap, all. Required for futures. Default swap */
  business_type?: 'futures' | 'swap' | 'all';
}

/** Req for POST /linear-swap-api/v1/swap_lever_position_limit. Isolated margin only. */
export interface FuturesLeverPositionLimitReq {
  /** Contract code (e.g. BTC-USDT). Omit for all */
  contract_code?: string;
  /** Leverage rate. Omit for all */
  lever_rate?: number;
}

/** Req for POST /linear-swap-api/v1/swap_cross_lever_position_limit. Cross margin only. */
export interface FuturesCrossLeverPositionLimitReq {
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
export interface FuturesMasterSubTransferReq {
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
export interface FuturesMasterSubTransferRecordReq {
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
export interface FuturesCancelAfterReq {
  /** 1: enable, 0: disable */
  on_off: 0 | 1;
  /** Countdown ms. Min 5000. Default 5000. Cancel all pending orders when timer expires. */
  time_out?: number;
}

/** Req for POST /linear-swap-api/v1/swap_switch_position_mode and swap_cross_switch_position_mode. */
export interface FuturesSwitchPositionModeReq {
  /** Margin account. Isolated: BTC-USDT. Cross: USDT */
  margin_account: string;
  /** single_side or dual_side */
  position_mode: 'single_side' | 'dual_side';
}

/** Order price type for swap_order and swap_cross_order */
export type FuturesPlaceOrderPriceType =
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
export interface FuturesPlaceOrderReq {
  /** Contract code (e.g. BTC-USDT). Required */
  contract_code: string;
  /** buy or sell */
  direction: 'buy' | 'sell';
  /** Order quantity */
  volume: number;
  /** Leverage rate */
  lever_rate: number;
  /** Order price type */
  order_price_type: FuturesPlaceOrderPriceType;
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
export interface FuturesCrossPlaceOrderReq {
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
  order_price_type: FuturesPlaceOrderPriceType;
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
export interface FuturesBatchOrderReq {
  orders_data: FuturesPlaceOrderReq[];
}

/** Req for POST /linear-swap-api/v1/swap_cross_batchorder. Cross. Max 25 orders. */
export interface FuturesCrossBatchOrderReq {
  orders_data: FuturesCrossPlaceOrderReq[];
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
export interface FuturesCrossCancelOrderReq {
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
export interface FuturesCancelAllOrderReq {
  /** Contract code (e.g. BTC-USDT). Required */
  contract_code: string;
  /** buy or sell. Omit for all */
  direction?: 'buy' | 'sell';
  /** open or close. Omit for all */
  offset?: 'open' | 'close';
}

/** Req for POST /linear-swap-api/v1/swap_cross_cancelall. Cross. One of contract_code or (pair+contract_type) required. */
export interface FuturesCrossCancelAllOrderReq {
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

/** Req for POST /linear-swap-api/v1/swap_switch_lever_rate. Isolated margin only. */
export interface FuturesSwitchLeverRateReq {
  /** Contract code (e.g. BTC-USDT). Required */
  contract_code: string;
  /** Leverage multiple */
  lever_rate: number;
}

/** Req for POST /linear-swap-api/v1/swap_cross_switch_lever_rate. Cross margin only. One of contract_code or (pair+contract_type) required. */
export interface FuturesCrossSwitchLeverRateReq {
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
export interface FuturesOrderInfoReq {
  /** Contract code (e.g. BTC-USDT). Required */
  contract_code: string;
  /** Order IDs, comma-separated. Max 50 */
  order_id?: string;
  /** Client order IDs, comma-separated. Max 50 */
  client_order_id?: string;
}

/** Req for POST /linear-swap-api/v1/swap_cross_order_info. Cross. One of order_id/client_order_id and one of contract_code/pair required. */
export interface FuturesCrossOrderInfoReq {
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
export interface FuturesOrderDetailReq {
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
export interface FuturesCrossOrderDetailReq {
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
export interface FuturesOpenOrdersReq {
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
export interface FuturesCrossOpenOrdersReq {
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
export interface FuturesHistoryOrdersReq {
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
export interface FuturesHistoryOrdersExactReq {
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
export interface FuturesCrossHistoryOrdersExactReq {
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
export interface FuturesCrossHistoryOrdersReq {
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
export interface FuturesMatchResultsReq {
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
export interface FuturesCrossMatchResultsReq {
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
export interface FuturesMatchResultsExactReq {
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
export interface FuturesCrossMatchResultsExactReq {
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
export interface FuturesLightningClosePositionReq {
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
export interface FuturesCrossLightningClosePositionReq {
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

/** Req for GET /linear-swap-api/v1/swap_position_side. Isolated. Query position mode. */
export interface FuturesPositionSideReq {
  /** Margin account (e.g. USDT, BTC-USDT) */
  margin_account: string;
}

/** Req for GET /linear-swap-api/v1/swap_cross_position_side. Cross. Query position mode. */
export interface FuturesCrossPositionSideReq {
  /** Margin account (e.g. USDT) */
  margin_account: string;
}

/** Req for GET /linear-swap-api/v1/swap_cross_trade_state. Cross margin only. */
export interface FuturesCrossTradeStateReq {
  /** Contract code. swap: BTC-USDT, future: BTC-USDT-210625. Omit for all */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
  /** futures, swap, all. Required for futures. Default swap */
  business_type?: 'futures' | 'swap' | 'all';
}
