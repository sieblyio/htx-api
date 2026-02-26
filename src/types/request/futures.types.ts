/**
 * Union Types (Request)
 */

/** Pagination direction */
export type FuturesDirect = 'next' | 'prev';

/** Buy or sell */
export type FuturesDirection = 'buy' | 'sell';

/** Open or close position */
export type FuturesOffset = 'open' | 'close';

/** Open, close, or both (hedge mode) */
export type FuturesOffsetBoth = 'open' | 'close' | 'both';

/** Position side (long, short, both) */
export type FuturesPositionSide = 'long' | 'short' | 'both';

/** Margin mode */
export type FuturesMarginMode = 'cross' | 'isolated';

/** Margin mode including all */
export type FuturesMarginModeAll = 'cross' | 'isolated' | 'all';

/** Business type filter */
export type FuturesBusinessType = 'futures' | 'swap' | 'all';

/** Contract type (delivery) */
export type FuturesContractType =
  | 'this_week'
  | 'next_week'
  | 'quarter'
  | 'next_quarter';

/** Kline period */
export type FuturesKlinePeriod =
  | '1min'
  | '5min'
  | '15min'
  | '30min'
  | '60min'
  | '1hour'
  | '4hour'
  | '12hour'
  | '1day'
  | '1week'
  | '1mon';

/** Open interest / funding period */
export type FuturesOpenInterestPeriod = '60min' | '4hour' | '12hour' | '1day';

/** Sort field */
export type FuturesSortBy = 'created_at' | 'update_time';

/** Sort field (extended) */
export type FuturesSortByExtended =
  | 'create_date'
  | 'update_time'
  | 'created_at';

/** Sort field (CmPerp) */
export type FuturesSortByCmPerp = 'create_date' | 'update_time';

/** Trigger condition */
export type FuturesTriggerType = 'ge' | 'le';

/** Basis price type */
export type FuturesBasisPriceType =
  | 'open'
  | 'close'
  | 'high'
  | 'low'
  | 'average';

/** Transfer type */
export type FuturesTransferType = 'master_to_sub' | 'sub_to_master';

/** Margin adjust type */
export type FuturesMarginAdjustType = 'add' | 'reduce';

/** Self-match prevention */
export type FuturesSelfMatchPrevent =
  | 'cancel_taker'
  | 'cancel_maker'
  | 'cancel_both';

/** Lightning order price type */
export type FuturesLightningOrderPriceType =
  | 'market'
  | 'lightning_fok'
  | 'lightning_ioc';

/** Lightning order price type (CmDelivery) */
export type FuturesLightningOrderPriceTypeCm =
  | 'lightning'
  | 'lightning_fok'
  | 'lightning_ioc';

/** Trigger order price type */
export type FuturesTriggerOrderPriceType =
  | 'limit'
  | 'optimal_5'
  | 'optimal_10'
  | 'optimal_20';

/** Trailing order price type */
export type FuturesTrailingOrderPriceType =
  | 'optimal_5'
  | 'optimal_10'
  | 'optimal_20'
  | 'formula_price';

/** V5 order type */
export type FuturesV5OrderType = 'market' | 'limit' | 'post_only';

/** Time in force */
export type FuturesTimeInForce = 'fok' | 'ioc' | 'gtc';

/** Trigger price type */
export type FuturesTriggerPriceType = 'last' | 'market';

/** Price match type */
export type FuturesPriceMatch =
  | 'opponent'
  | 'optimal_5'
  | 'optimal_10'
  | 'optimal_20';

/** Base order price types: limit, opponent, optimal_*, ioc, fok, *_ioc, *_fok */
export type FuturesOrderPriceTypeBase =
  | 'limit'
  | 'opponent'
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

/** Order price type for swap_order and swap_cross_order. Base + market + post_only */
export type FuturesSubmitOrderPriceType =
  | FuturesOrderPriceTypeBase
  | 'market'
  | 'post_only';

/** Order price type for swap_order_limit and contract_order_limit. Base + lightning variants */
export type FuturesGetOrderLimitPriceType =
  | FuturesOrderPriceTypeBase
  | 'lightning'
  | 'lightning_ioc'
  | 'lightning_fok';

/** Order price type for contract_order_limit (alias) */
export type FuturesCmDeliveryOrderLimitPriceType =
  FuturesGetOrderLimitPriceType;

/** Order price type for contract_order and swap_order (Delivery/CMPerp). Base + post_only */
export type FuturesCmDeliverySubmitOrderPriceType =
  | FuturesOrderPriceTypeBase
  | 'post_only';

/** Order price type for swap_order and swap_batchorder (CMPerp) (alias) */
export type FuturesCmPerpSubmitOrderPriceType =
  FuturesCmDeliverySubmitOrderPriceType;

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
  direct?: FuturesDirect;
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
  business_type?: FuturesBusinessType;
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
  direct?: FuturesDirect;
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
  support_margin_mode?: FuturesMarginModeAll;
  /** Pair (e.g. BTC-USDT) */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
  /** Default swap. futures, swap, all. Required for futures query */
  business_type?: FuturesBusinessType;
}

/**
 * Market Data
 */

/** Req for GET /linear-swap-ex/market/history/kline. Either size or (from+to) required. */
export interface FuturesGetKlinesReq {
  /** Contract code or type. swap: BTC-USDT; future: BTC-USDT-220325 or BTC-USDT-CW/NW/CQ/NQ */
  contract_code: string;
  /** 1min, 5min, 15min, 30min, 60min, 1hour, 4hour, 1day, 1mon */
  period: FuturesKlinePeriod;
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
  period: FuturesOpenInterestPeriod;
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
  period: FuturesKlinePeriod;
  /** Items [1-2000]. Default 150 */
  size: number;
  /** open, close, high, low, average. Default open */
  basis_price_type?: FuturesBasisPriceType;
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

/** Req for GET /linear-swap-api/v1/swap_sub_auth_list. getSubPermissions. */
export interface FuturesGetSubPermissionsReq {
  /** Sub-account UIDs, comma-separated. Max 10 */
  sub_uid?: string;
  /** Start time of sub-account creation (ms) */
  start_time?: number;
  /** End time of sub-account creation (ms) */
  end_time?: number;
  /** next=chronological, prev=reverse */
  direct?: FuturesDirect;
  /** Pagination: min/max query_id from last result */
  from_id?: number;
}

/** Req for POST /linear-swap-api/v1/swap_sub_account_list. Isolated margin only. */
export interface FuturesGetIsolatedSubAccountsReq {
  /** Contract code (e.g. BTC-USDT). Omit for all */
  contract_code?: string;
  /** next=chronological, prev=reverse. Default next */
  direct?: FuturesDirect;
  /** Pagination: min/max query_id from last result depending on direct */
  from_id?: number;
}

/** Req for POST /linear-swap-api/v1/swap_cross_sub_account_list. Cross margin only. */
export interface FuturesGetCrossSubAccountsReq {
  /** Margin account (e.g. USDT). Omit for all */
  margin_account?: string;
  /** next=chronological, prev=reverse. Default next */
  direct?: FuturesDirect;
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
  direct?: FuturesDirect;
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
  business_type?: FuturesBusinessType;
}

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
  business_type?: FuturesBusinessType;
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
  business_type?: FuturesBusinessType;
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
  business_type?: FuturesBusinessType;
}

/** Req for POST /linear-swap-api/v1/swap_cross_lever_position_limit. Cross margin only. */
export interface FuturesGetCrossLeverageLimitsReq {
  /** futures, swap, all. Required for futures */
  business_type?: FuturesBusinessType;
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
  type: FuturesTransferType;
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

/** Req for POST /linear-swap-api/v1/swap_order. Isolated margin only. */
export interface FuturesSubmitOrderReq {
  /** Contract code (e.g. BTC-USDT). Required */
  contract_code: string;
  /** buy or sell */
  direction: FuturesDirection;
  /** Order quantity */
  volume: number;
  /** Leverage rate */
  lever_rate: number;
  /** Order price type */
  order_price_type: FuturesSubmitOrderPriceType;
  /** open, close, both. Required in hedge mode */
  offset?: FuturesOffsetBoth;
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
  self_match_prevent_new?: FuturesSelfMatchPrevent;
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
  direction: FuturesDirection;
  /** Order quantity */
  volume: number;
  /** Leverage rate */
  lever_rate: number;
  /** Order price type */
  order_price_type: FuturesSubmitOrderPriceType;
  /** open, close, both. Required in hedge mode */
  offset?: FuturesOffsetBoth;
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
  self_match_prevent_new?: FuturesSelfMatchPrevent;
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
  direction?: FuturesDirection;
  /** open or close. Omit for all */
  offset?: FuturesOffset;
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
  direction?: FuturesDirection;
  /** open or close. Omit for all */
  offset?: FuturesOffset;
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
  sort_by?: FuturesSortBy;
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
  sort_by?: FuturesSortBy;
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
  direct?: FuturesDirect;
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
  direct?: FuturesDirect;
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
  direct?: FuturesDirect;
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
  direct?: FuturesDirect;
  /** Pagination: min/max query_id from last result */
  from_id?: number;
}

/** Req for POST /linear-swap-api/v3/swap_matchresults. getFills. Isolated. One of contract or pair required. */
export interface FuturesGetFillsReq {
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
  direct?: FuturesDirect;
  /** Pagination: min/max query_id from last result */
  from_id?: number;
}

/** Req for POST /linear-swap-api/v3/swap_cross_matchresults. getCrossFills. Cross. One of contract or pair required. */
export interface FuturesGetCrossFillsReq {
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
  direct?: FuturesDirect;
  /** Pagination: min/max query_id from last result */
  from_id?: number;
}

/** Req for POST /linear-swap-api/v3/swap_matchresults_exact. getFillsExact. Isolated. No pair param. */
export interface FuturesGetFillsExactReq {
  /** Contract code (e.g. BTC-USDT). Required */
  contract: string;
  /** 0: All, 1: Open long, 2: Open short, 3: Close short, 4: Close long, 5: Liquidate long, 6: Liquidate short, 17: buy(one-way), 18: sell(one-way) */
  trade_type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 17 | 18;
  /** Start time (ms). Window max 48h, within 90 days */
  start_time?: number;
  /** End time (ms). Default now */
  end_time?: number;
  /** next or prev. Default prev */
  direct?: FuturesDirect;
  /** Pagination: min/max query_id from last result */
  from_id?: number;
}

/** Req for POST /linear-swap-api/v3/swap_cross_matchresults_exact. getCrossFillsExact. Cross. When both filled, contract preferred. */
export interface FuturesGetCrossFillsExactReq {
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
  direct?: FuturesDirect;
  /** Pagination: min/max query_id from last result */
  from_id?: number;
}

/** Req for POST /linear-swap-api/v1/swap_lightning_close_position. Isolated. Lightning close order. */
export interface FuturesSubmitLightningCloseOrderReq {
  /** Contract code (e.g. BTC-USDT). Case-insensitive */
  contract_code: string;
  /** buy: open, sell: close */
  direction: FuturesDirection;
  /** Client order ID. Unique per API, user-maintained */
  client_order_id?: number;
  /** market (default), lightning_fok, lightning_ioc */
  order_price_type?: FuturesLightningOrderPriceType;
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
  direction: FuturesDirection;
  /** Client order ID [1, 9223372036854775807] */
  client_order_id?: number;
  /** market (default), lightning_fok, lightning_ioc */
  order_price_type?: FuturesLightningOrderPriceType;
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
  business_type?: FuturesBusinessType;
}

/**
 * Swap Strategy Order Interface
 */

/** Req for POST /linear-swap-api/v1/swap_trigger_order. [Isolated] Submit Trigger Order. Isolated margin only. Trade. 5/s. */
export interface FuturesSubmitTriggerOrderReq {
  /** Contract type (e.g. BTC-USDT) */
  contract_code: string;
  /** ge: Equal to or Greater than; le: Less than or Equal to */
  trigger_type: FuturesTriggerType;
  /** Trigger price */
  trigger_price: number | string;
  /** Order price (required when order_price_type is limit) */
  order_price?: number | string;
  /** limit (default), optimal_5, optimal_10, optimal_20 */
  order_price_type?: FuturesTriggerOrderPriceType;
  /** Volume (number of contracts) */
  volume: number;
  /** buy or sell */
  direction: FuturesDirection;
  /** open, close, both. In hedge mode required; in one-way mode optional, must be both when filled */
  offset?: FuturesOffsetBoth;
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
  trigger_type: FuturesTriggerType;
  /** Trigger price */
  trigger_price: number | string;
  /** Order price (required when order_price_type is limit) */
  order_price?: number | string;
  /** limit (default), optimal_5, optimal_10, optimal_20 */
  order_price_type?: FuturesTriggerOrderPriceType;
  /** Volume (number of contracts) */
  volume: number;
  /** buy or sell */
  direction: FuturesDirection;
  /** open, close, both. In hedge mode required; in one-way mode optional, must be both when filled */
  offset?: FuturesOffsetBoth;
  /** Leverage. Long = short leverage. High leverage = high risk */
  lever_rate?: number;
}

/** Req for POST /linear-swap-api/v1/swap_trigger_cancelall. [Isolated] Cancel All Trigger Orders. Isolated margin only. Trade. 5/s. Can fill only one of direction and offset to filter. */
export interface FuturesCancelAllTriggerOrdersReq {
  /** Contract code (e.g. BTC-USDT) */
  contract_code: string;
  /** Transaction direction; omit for all */
  direction?: FuturesDirection;
  /** open, close; omit for all */
  offset?: FuturesOffset;
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
  direction?: FuturesDirection;
  /** open, close; omit for all */
  offset?: FuturesOffset;
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

/** Req for POST /linear-swap-api/v1/swap_trigger_hisorders. getTriggerHistoryOrders. Isolated. Read. Default query completed (status 4,5,6). */
export interface FuturesGetTriggerHistoryOrdersReq {
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
  sort_by?: FuturesSortBy;
}

/** Req for POST /linear-swap-api/v1/swap_tpsl_order. [Isolated] Set Take-profit and Stop-loss for existing position. Isolated margin only. At least one of tp_trigger_price and sl_trigger_price required. Trade. 5/s. */
export interface FuturesSubmitTpslOrderReq {
  /** Contract code (e.g. BTC-USDT) */
  contract_code: string;
  /** buy or sell */
  direction: FuturesDirection;
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
  direction: FuturesDirection;
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

/** Req for POST /linear-swap-api/v1/swap_tpsl_cancel. [Isolated] Cancel a Take-profit and Stop-loss Order. Isolated margin only. Trade. 5/s. Inlined in cancelTpslOrder - params: { contract_code, order_id } */

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

/** Req for POST /linear-swap-api/v1/swap_tpsl_cancelall. [Isolated] Cancel all Take-profit and Stop-loss Orders. Isolated margin only. Trade. 5/s. Inlined in cancelAllTpslOrders - params: { contract_code, direction? } */

/** Req for POST /linear-swap-api/v1/swap_cross_tpsl_cancelall. [Cross] Cancel all Take-profit and Stop-loss Orders. Cross margin only. One of (pair+contract_type) or contract_code required; contract_code preferred when all filled. Trade. 5/s. */
export interface FuturesCancelAllCrossTpslOrdersReq {
  /** Contract code. swap: BTC-USDT; future: BTC-USDT-210625. Preferred when all filled */
  contract_code?: string;
  /** Pair (e.g. BTC-USDT). Use with contract_type */
  pair?: string;
  /** swap, this_week, next_week, quarter, next_quarter */
  contract_type?: string;
  /** buy or sell; omit for all */
  direction?: FuturesDirection;
}

/** Req for POST /linear-swap-api/v1/swap_cross_trigger_hisorders. getCrossTriggerHistoryOrders. Cross. One of pair or contract_code required. Read. */
export interface FuturesGetCrossTriggerHistoryOrdersReq {
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
  sort_by?: FuturesSortBy;
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
  sort_by?: FuturesSortBy;
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
  sort_by?: FuturesSortBy;
}

/** Req for POST /linear-swap-api/v1/swap_cross_relation_tpsl_order. getCrossRelationTpslOrder. Cross. One of pair or contract_code required. Read. */
export interface FuturesGetCrossRelationTpslOrderReq {
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
  direction: FuturesDirection;
  /** open, close, both. Hedge mode required; one-way optional, must be both when filled */
  offset?: FuturesOffsetBoth;
  /** Leverage. Required when open, optional when close */
  lever_rate?: number;
  /** Volume (contracts) */
  volume: number | string;
  /** Callback rate (e.g. 0.01 = 1%). Min 0.001 (0.1%) */
  callback_rate: number | string;
  /** Active price */
  active_price: number | string;
  /** optimal_5, optimal_10, optimal_20, formula_price */
  order_price_type: FuturesTrailingOrderPriceType;
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
  direction: FuturesDirection;
  /** open, close, both. Hedge mode required; one-way optional, must be both when filled */
  offset?: FuturesOffsetBoth;
  /** Leverage. Required when open, optional when close */
  lever_rate?: number;
  /** Volume (contracts) */
  volume: number | string;
  /** Callback rate (e.g. 0.01 = 1%). Min 0.001 (0.1%) */
  callback_rate: number | string;
  /** Active price */
  active_price: number | string;
  /** optimal_5, optimal_10, optimal_20, formula_price */
  order_price_type: FuturesTrailingOrderPriceType;
}

/** Req for POST /linear-swap-api/v1/swap_track_cancel. [Isolated] Cancel a Trailing Order. Isolated margin only. Trade. 5/s. Inlined in cancelTrailingOrder - params: { contract_code, order_id } */

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
  direction?: FuturesDirection;
  /** open or close; omit for all */
  offset?: FuturesOffset;
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
  direction?: FuturesDirection;
  /** open or close; omit for all */
  offset?: FuturesOffset;
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
  sort_by?: FuturesSortByExtended;
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
  sort_by?: FuturesSortByExtended;
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
  direct?: FuturesDirect;
  /** prev: min query_id from last result; next: max query_id from last result */
  from_id?: number;
}

/** Req for GET /v5/account/bills. Query financial records. */
export interface FuturesV5BillsReq {
  /** Contract code (e.g. BTC-USDT, ETH-USDT) */
  contract_code?: string;
  /** cross: Cross margin; isolated: Isolated margin */
  margin_mode?: FuturesMarginMode;
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
  direct?: FuturesDirect;
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
  side?: FuturesDirection;
  position_side?: FuturesPositionSide;
}

/** Req for POST /v5/trade/position. Close all of a symbol at market price. */
export interface FuturesV5ClosePositionReq {
  contract_code: string;
  margin_mode: FuturesMarginMode;
  position_side: FuturesPositionSide;
  client_order_id?: string;
}

/** Req for GET /v5/trade/order/opens. Get unfilled orders. */
export interface FuturesV5OpenOrdersReq {
  contract_code?: string;
  margin_mode?: FuturesMarginMode;
  order_id?: string;
  client_order_id?: string;
  from?: number;
  limit?: number;
  direct?: FuturesDirect;
}

/** Req for GET /v5/trade/order/details. Execution details (last 3 days). */
export interface FuturesV5OrderDetailsReq {
  contract_code?: string;
  order_id?: string;
  start_time?: string | number;
  end_time?: string | number;
  from?: number;
  limit?: number;
  direct?: FuturesDirect;
}

/** Req for GET /v5/trade/order/history. Get order history. */
export interface FuturesV5OrderHistoryReq {
  contract_code: string;
  margin_mode: FuturesMarginMode;
  state?: string;
  type?: FuturesV5OrderType;
  price_match?: string;
  start_time?: string | number;
  end_time?: string | number;
  from?: number;
  limit?: number;
  direct?: FuturesDirect;
}

/** Req for GET /v5/trade/order. Get single order info. */
export interface FuturesV5OrderInfoReq {
  contract_code: string;
  margin_mode?: FuturesMarginMode;
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
  margin_mode: FuturesMarginMode;
  side: FuturesDirection;
  type: FuturesV5OrderType;
  volume: string;
  position_side?: FuturesPositionSide;
  price_match?: FuturesPriceMatch;
  client_order_id?: string;
  price?: string | number;
  reduce_only?: 0 | 1;
  time_in_force?: FuturesTimeInForce;
  tp_trigger_price?: string;
  tp_order_price?: string;
  tp_type?: FuturesTriggerOrderPriceType | 'market';
  tp_trigger_price_type?: FuturesTriggerPriceType;
  sl_trigger_price?: string;
  sl_order_price?: string;
  sl_type?: FuturesTriggerOrderPriceType | 'market';
  sl_trigger_price_type?: FuturesTriggerPriceType;
  price_protect?: boolean;
  self_match_prevent?: FuturesSelfMatchPrevent;
}

/**
 * USDT Margined Futures Multi Asset - Positions (v5 API)
 */

/** Req for GET /v5/trade/position/opens. Get current positions. Inlined in getMultiAssetPositions - params?: { contract_code? } */

/** Req for GET /v5/position/lever. Get leverage list. */
export interface FuturesV5LeverListReq {
  contract_code?: string;
  margin_mode?: FuturesMarginMode;
  position_side?: FuturesPositionSide;
}

/** Req for POST /v5/position/lever. Set leverage. */
export interface FuturesV5SetLeverageReq {
  contract_code: string;
  margin_mode: FuturesMarginMode;
  lever_rate: string | number;
  /** Required when isolated margin in two-way position mode */
  position_side?: FuturesPositionSide;
}

/** Req for POST /v5/position/mode. Set position mode. Inlined in updateMultiAssetPositionMode - params: { position_mode } */

/** Req for GET /v5/position/risk/limit. Get current position risk limit. */
export interface FuturesV5RiskLimitReq {
  contract_code?: string;
  margin_mode?: FuturesMarginMode;
  position_side?: FuturesPositionSide;
}

/** Req for GET /v5/position/risk/limit_tier. Query risk limit tiers. Inlined in getMultiAssetRiskLimitTiers - params: { contract_code, margin_mode? } */

/** Req for POST /v5/position/margin. Adjust margin for isolated positions. */
export interface FuturesV5AdjustMarginReq {
  contract_code: string;
  position_side: FuturesPositionSide;
  type: FuturesMarginAdjustType;
  amount: string;
  currency?: string;
}

/**
 * USDT Margined Futures Multi Asset - Basic Information (v5 API)
 */

/** Req for GET /v5/market/risk/limit. Get futures risk limit table. */
export interface FuturesV5MarketRiskLimitReq {
  contract_code?: string;
  margin_mode?: FuturesMarginMode;
  tier?: string | number;
}

/**
 * Coin-M Delivery - Reference Data (FuturesCmDelivery)
 */

/** Req for GET /api/v1/contract_adjustfactor. Tiered adjustment factor. Inlined in getCmAdjustFactor - params?: { symbol?: string } */
/** Req for GET /api/v1/contract_ladder_margin. Tiered margin. Inlined in getCmTieredMargin - params?: { symbol?: string } */

/** Req for GET /api/v1/contract_his_open_interest. Historical open interest. */
export interface FuturesCmDeliveryOpenInterestReq {
  symbol: string;
  contract_type: FuturesContractType;
  period: FuturesOpenInterestPeriod;
  amount_type: 1 | 2;
  size?: number;
}

/** Req for GET /api/v1/contract_elite_account_ratio. Top trader sentiment - account. Inlined in getCmAccountRatio - params: { symbol, period } */
/** Req for GET /api/v1/contract_elite_position_ratio. Top trader sentiment - position. Inlined in getCmPositionRatio - params: { symbol, period } */

/** Req for GET /api/v3/contract_liquidation_orders. Liquidation orders. */
export interface FuturesCmDeliveryLiquidationOrdersReq {
  symbol: string;
  trade_type: 0 | 5 | 6;
  start_time?: number;
  end_time?: number;
  direct?: FuturesDirect;
  from_id?: number;
}

/** Req for GET /api/v1/contract_settlement_records. Historical settlement records. */
export interface FuturesCmDeliverySettlementRecordsReq {
  symbol: string;
  start_time?: number;
  end_time?: number;
  page_index?: number;
  page_size?: number;
}

/** Req for GET /v1/insurance_fund_history. Historical risk reserves. Aligned with getCmRiskReserveHistory. */
export interface FuturesCmDeliveryRiskReserveHistoryReq {
  start_time?: number;
  end_time?: number;
  direct?: FuturesDirect;
  from_id?: number;
  limit?: number;
}

/** Req for GET /api/v1/contract_price_limit. Contract price limits. Aligned with getCmContractLimit. */
export interface FuturesCmDeliveryContractLimitReq {
  symbol?: string;
  contract_type?: FuturesContractType;
  contract_code?: string;
}

/** Req for GET /api/v1/contract_open_interest. Current open interest. */
export interface FuturesCmDeliveryContractOpenInterestReq {
  symbol?: string;
  contract_type?: FuturesContractType;
  contract_code?: string;
}

/** Req for GET /api/v1/contract_delivery_price. Estimated delivery price. Inlined in getCmDeliveryPrice - params: { symbol: string } */
/** Req for GET /api/v1/contract_estimated_settlement_price. Estimated settlement price. Inlined in getCmEstimatedSettlementPrice - params?: { symbol?: string } */
/** Req for GET /api/v1/contract_api_state. System status. Inlined in getCmSystemStatus - params?: { symbol?: string } */

/** Req for GET /api/v1/contract_contract_info. Contract info. */
export interface FuturesCmDeliveryContractInfoReq {
  symbol?: string;
  contract_type?: FuturesContractType;
  contract_code?: string;
}

/** Req for GET /market/depth. Inlined in getCmMarketDepth - params: { symbol, type } (type: step0–15) */
/** Req for GET /market/bbo. Inlined in getCmMarketBbo - params?: { symbol?: string } */

/** Req for GET /market/history/kline. Either size or (from+to) required. Aligned with getCmKlines. */
export interface FuturesCmDeliveryKlinesReq {
  symbol: string;
  period: FuturesKlinePeriod;
  size?: number;
  from?: number;
  to?: number;
}

/** Req for GET /index/market/history/mark_price_kline. Aligned with getCmMarkKlines. */
export interface FuturesCmDeliveryMarkPriceKlinesReq {
  symbol: string;
  period: FuturesKlinePeriod;
  size: number;
}

/** Req for GET /api/v1/contract_index. Index price. Inlined in getCmIndexPrice - params?: { symbol?: string } */
/** Req for GET /api/market/contract_constituents. Index constituents. Inlined in getCmIndexConstituents - params: { symbol: string } */
/** Req for GET /api/v1/contract_query_elements. Contract elements. Inlined in getCmContractElements - params?: { contract_code?: string } */

/** Req for GET /index/market/history/index. Index kline data. */
export interface FuturesCmDeliveryIndexKlinesReq {
  symbol: string;
  period: FuturesKlinePeriod;
  size: number;
}

/** Req for GET /api/v1/contract_sub_auth_list. getCmSubPermissions. */
export interface FuturesCmDeliverySubPermissionsReq {
  sub_uid?: string;
  start_time?: number;
  end_time?: number;
  direct?: FuturesDirect;
  from_id?: number;
}

/** Req for POST /api/v3/contract_financial_record. Account financial records. */
export interface FuturesCmDeliveryFinancialRecordReq {
  symbol: string;
  type?: string;
  start_time?: number;
  end_time?: number;
  direct?: FuturesDirect;
  from_id?: number;
}

/** Req for POST /api/v3/contract_financial_record_exact. Same as contract_financial_record; from_id for pagination. */
export type FuturesCmDeliveryFinancialRecordExactReq =
  FuturesCmDeliveryFinancialRecordReq;

/** Req for POST /api/v1/contract_user_settlement_records. User settlement records. */
export interface FuturesCmDeliveryUserSettlementRecordsReq {
  symbol: string;
  start_time?: number;
  end_time?: number;
  page_index?: number;
  page_size?: number;
}

/** Req for POST /api/v1/contract_order_limit */
export interface FuturesCmDeliveryOrderLimitReq {
  order_price_type: FuturesCmDeliveryOrderLimitPriceType;
  symbol?: string;
}

/** Req for POST /api/v1/contract_order. Place order. Delivery futures. One of contract_code or (symbol+contract_type). */
export interface FuturesCmDeliverySubmitOrderReq {
  /** Contract code (e.g. bch210326). Use if known. */
  contract_code?: string;
  /** Symbol (e.g. BTC, ETH). Case-insensitive. Use with contract_type. */
  symbol?: string;
  /** this_week, next_week, quarter, next_quarter. Use with symbol. */
  contract_type?: FuturesContractType;
  /** Client order ID [1, 9223372036854775807] */
  client_order_id?: number;
  /** Price. Required for limit, post_only, ioc, fok */
  price?: number | string;
  /** Order quantity. Required */
  volume: number;
  /** buy or sell. Required */
  direction: FuturesDirection;
  /** open or close. Required */
  offset: FuturesOffset;
  /** Leverage rate. Required */
  lever_rate: number;
  /** Order price type. Required */
  order_price_type: FuturesCmDeliverySubmitOrderPriceType;
  /** Take-profit trigger price */
  tp_trigger_price?: number | string;
  /** Take-profit order price */
  tp_order_price?: number | string;
  /** Take-profit order type: limit, optimal_5, optimal_10, optimal_20 */
  tp_order_price_type?: string;
  /** Stop-loss trigger price */
  sl_trigger_price?: number | string;
  /** Stop-loss order price */
  sl_order_price?: number | string;
  /** Stop-loss order type: limit, optimal_5, optimal_10, optimal_20 */
  sl_order_price_type?: string;
  /** Price protection when setting tp/sl. Default false. */
  price_protect?: boolean;
  /** 0: allow self-trade, 1: prevent. Default 1 */
  self_match_prevent?: 0 | 1;
}

/** Req for POST /api/v1/contract_batchorder. Max 25 orders. */
export interface FuturesCmDeliverySubmitBatchOrderReq {
  orders_data: FuturesCmDeliverySubmitOrderReq[];
}

/** Req for POST /api/v1/contract_cancel. One of order_id or client_order_id. Max 10 IDs. Symbol required. */
export interface FuturesCmDeliveryCancelOrderReq {
  symbol: string;
  /** Order IDs, comma-separated. Max 10 */
  order_id?: string;
  /** Client order IDs, comma-separated. Max 10 */
  client_order_id?: string;
}

/** Req for POST /api/v1/contract_switch_lever_rate. Inlined in updateCmLeverage - params: { symbol, lever_rate } */

/** Req for POST /api/v1/contract_order_info. One of order_id or client_order_id. Max 50 IDs. Symbol required. */
export interface FuturesCmDeliveryGetOrderInfoReq {
  symbol: string;
  /** Order IDs, comma-separated. Max 50 */
  order_id?: string;
  /** Client order IDs, comma-separated. Max 50 */
  client_order_id?: string;
}

/** Req for POST /api/v1/contract_order_detail. created_at cannot be 0. */
export interface FuturesCmDeliveryGetOrderDetailReq {
  symbol: string;
  order_id: number | string;
  created_at: number;
  order_type: number;
  page_index?: number;
  page_size?: number;
}

/** Req for POST /api/v1/contract_openorders. Omit symbol to query all. */
export interface FuturesCmDeliveryGetOpenOrdersReq {
  symbol?: string;
  page_index?: number;
  page_size?: number;
  sort_by?: FuturesSortBy;
  /** 0: all, 1: buy long, 2: sell short, 3: buy short, 4: sell long */
  trade_type?: 0 | 1 | 2 | 3 | 4;
}

/** Req for POST /api/v3/contract_hisorders. Window max 48h, within 90 days. */
export interface FuturesCmDeliveryGetHistoryOrdersReq {
  symbol: string;
  /** 0:all, 1: buy long, 2: sell short, 3: buy short, 4: sell long, 5: sell liq, 6: buy liq, 7: delivery long, 8: delivery short, 11: reduce close long, 12: reduce close short */
  trade_type: number;
  /** 1: All Orders, 2: Order in Finished Status */
  type: 1 | 2;
  /** 0: all, or comma-separated: 3,4,5,6,7 */
  status: string;
  contract_code?: string;
  order_type?: string;
  start_time?: number;
  end_time?: number;
  direct?: FuturesDirect;
  from_id?: number;
  limit?: number;
}

/** Req for POST /api/v3/contract_hisorders_exact. type filters by trade type. Window max 48h, within 90 days. */
export interface FuturesCmDeliveryGetHistoryOrdersExactReq {
  symbol: string;
  /** Same as trade_type */
  trade_type: number;
  /** Same values as trade_type (0-12) */
  type: number;
  /** 0: all, or comma-separated: 3,4,5,6,7 */
  status: string;
  contract_code?: string;
  order_type?: string;
  start_time?: number;
  end_time?: number;
  direct?: FuturesDirect;
  from_id?: number;
}

/** Req for POST /api/v3/contract_matchresults. Window max 48h, within 90 days. */
export interface FuturesCmDeliveryGetFillsReq {
  symbol: string;
  /** Contract code (e.g. BTC-USD) */
  contract: string;
  /** 0: all, 1: open long, 2: open short, 3: close short, 4: close long, 5: liq long, 6: liq short */
  trade_type: number;
  start_time?: number;
  end_time?: number;
  direct?: FuturesDirect;
  from_id?: number;
}

/** Req for POST /api/v3/contract_matchresults_exact. Within 90 days. */
export interface FuturesCmDeliveryGetFillsExactReq {
  symbol: string;
  /** 0: all, 1: open long, 2: open short, 3: close short, 4: close long, 5: liq long, 6: liq short */
  trade_type: number;
  contract_code?: string;
  start_time?: number;
  end_time?: number;
  from_id?: number;
  /** Default 20, max 50 */
  size?: number;
  direct?: FuturesDirect;
}

/** Req for POST /api/v1/lightning_close_position. One of contract_code or (symbol+contract_type). */
export interface FuturesCmDeliverySubmitFlashCloseOrderReq {
  volume: number;
  direction: FuturesDirection;
  contract_code?: string;
  symbol?: string;
  contract_type?: FuturesContractType;
  client_order_id?: number;
  /** lightning (default), lightning_fok, lightning_ioc */
  order_price_type?: FuturesLightningOrderPriceTypeCm;
}

/** Req for POST /api/v1/contract_trigger_order. One of contract_code or (symbol+contract_type). */
export interface FuturesCmDeliverySubmitTriggerOrderReq {
  trigger_type: FuturesTriggerType;
  trigger_price: number | string;
  volume: number;
  direction: FuturesDirection;
  offset: FuturesOffset;
  lever_rate: number;
  contract_code?: string;
  symbol?: string;
  contract_type?: FuturesContractType;
  order_price?: number | string;
  /** limit (default), optimal_5, optimal_10, optimal_20 */
  order_price_type?: FuturesTriggerOrderPriceType;
}

/** Req for POST /api/v1/contract_trigger_cancel. Max 10 order_ids. Inlined in cancelCmTriggerOrder - params: { symbol, order_id } */

/** Req for POST /api/v1/contract_trigger_cancelall. symbol required. */
export interface FuturesCmDeliveryCancelAllTriggerOrdersReq {
  symbol: string;
  contract_code?: string;
  contract_type?: FuturesContractType;
  direction?: FuturesDirection;
  offset?: FuturesOffset;
}

/** Req for POST /api/v1/contract_trigger_openorders. Symbol required. */
export interface FuturesCmDeliveryGetTriggerOpenOrdersReq {
  symbol: string;
  contract_code?: string;
  page_index?: number;
  page_size?: number;
  /** 0: all, 1: buy long, 2: sell short, 3: buy short, 4: sell long */
  trade_type?: 0 | 1 | 2 | 3 | 4;
}

/** Req for POST /api/v1/contract_trigger_hisorders. Days within 90. */
export interface FuturesCmDeliveryGetTriggerHistoryOrdersReq {
  symbol: string;
  /** 0: all, 1: open long, 2: close short, 3: open short, 4: close long */
  trade_type: 0 | 1 | 2 | 3 | 4;
  /** 0: all, 4: submitted, 5: failed, 6: cancelled. Comma-separated for multiple */
  status: string;
  /** Days to query. Within 90. */
  create_date: number;
  contract_code?: string;
  page_index?: number;
  page_size?: number;
  sort_by?: FuturesSortBy;
}

/** Req for POST /api/v1/contract_tpsl_cancel. Max 10 order_ids. Inlined in cancelCmTpslOrder - params: { symbol, order_id } */

/** Req for POST /api/v1/contract_tpsl_cancelall. One of: symbol, contract_code, or (symbol+contract_type). */
export interface FuturesCmDeliveryCancelAllTpslOrdersReq {
  symbol?: string;
  contract_code?: string;
  contract_type?: FuturesContractType;
  direction?: FuturesDirection;
}

/** Req for POST /api/v1/contract_tpsl_openorders. Symbol required. */
export interface FuturesCmDeliveryGetTpslOpenOrdersReq {
  symbol: string;
  contract_code?: string;
  page_index?: number;
  page_size?: number;
  /** 0: all, 3: buy short, 4: sell long */
  trade_type?: 0 | 3 | 4;
}

/** Req for POST /api/v1/contract_tpsl_hisorders. Days within 90. */
export interface FuturesCmDeliveryGetTpslHistoryOrdersReq {
  symbol: string;
  contract_code: string;
  /** 0: all, 4: submitted, 5: failed, 6: cancelled, 11: expired. Comma-separated for multiple */
  status: string;
  /** Days to query. Within 90. */
  create_date: number;
  page_index?: number;
  page_size?: number;
  sort_by?: FuturesSortBy;
}

/** Req for POST /api/v1/contract_relation_tpsl_order. TPSL orders related to position-opening order. Inlined in getCmRelationTpslOrder - params: { symbol, order_id } */

/** Req for POST /api/v1/contract_track_cancel. Max 10 order_ids. Inlined in cancelCmTrailingOrder - params: { symbol, order_id } */

/** Req for POST /api/v1/contract_track_cancelall. symbol required. */
export interface FuturesCmDeliveryCancelAllTrailingOrdersReq {
  symbol: string;
  contract_code?: string;
  contract_type?: FuturesContractType;
  direction?: FuturesDirection;
  offset?: FuturesOffset;
}

/** Req for POST /api/v1/contract_track_openorders. Symbol required. */
export interface FuturesCmDeliveryGetTrailingOpenOrdersReq {
  symbol: string;
  contract_code?: string;
  /** 0: all, 1: buy long, 2: sell short, 3: buy short, 4: sell long */
  trade_type?: 0 | 1 | 2 | 3 | 4;
  page_index?: number;
  page_size?: number;
}

/** Req for POST /api/v1/contract_track_hisorders. Days within 90. */
export interface FuturesCmDeliveryGetTrailingHistoryOrdersReq {
  symbol: string;
  /** 0: all, 4: success, 5: failed, 6: cancelled. Comma-separated for multiple */
  status: string;
  /** 0: all, 1: buy long, 2: sell short, 3: buy short, 4: sell long */
  trade_type: 0 | 1 | 2 | 3 | 4;
  /** Days to query. Within 90. */
  create_date: number;
  contract_code?: string;
  page_index?: number;
  page_size?: number;
  sort_by?: FuturesSortBy;
}

/** Req for POST /api/v1/contract_track_order. One of contract_code or (symbol+contract_type). lever_rate required when offset=open. */
export interface FuturesCmDeliverySubmitTrailingOrderReq {
  direction: FuturesDirection;
  offset: FuturesOffset;
  volume: number;
  callback_rate: number;
  active_price: number | string;
  /** optimal_5, optimal_10, optimal_20, formula_price */
  order_price_type: FuturesTrailingOrderPriceType;
  contract_code?: string;
  symbol?: string;
  contract_type?: FuturesContractType;
  lever_rate?: number;
}

/** Req for POST /api/v1/contract_tpsl_order. One of contract_code or (symbol+contract_type). At least one of tp or sl required. */
export interface FuturesCmDeliverySubmitTpslOrderReq {
  direction: FuturesDirection;
  volume: number;
  contract_code?: string;
  symbol?: string;
  contract_type?: FuturesContractType;
  tp_trigger_price?: number | string;
  tp_order_price?: number | string;
  tp_order_price_type?: FuturesTriggerOrderPriceType;
  sl_trigger_price?: number | string;
  sl_order_price?: number | string;
  sl_order_price_type?: FuturesTriggerOrderPriceType;
  price_protect?: boolean;
}

/** Req for POST /api/v1/contract_cancelall. One of: symbol, contract_code, or (symbol+contract_type). */
export interface FuturesCmDeliveryCancelAllOrdersReq {
  /** Symbol (e.g. BTC). Cancel all contracts of this symbol. */
  symbol?: string;
  /** Contract code (e.g. btc200925). Cancel orders for this contract. */
  contract_code?: string;
  /** this_week, next_week, quarter, next_quarter. Use with symbol. */
  contract_type?: FuturesContractType;
  /** buy or sell. Omit for all */
  direction?: FuturesDirection;
  /** open or close. Omit for all */
  offset?: FuturesOffset;
}

/** Req for POST /api/v1/contract_master_sub_transfer_record */
export interface FuturesCmDeliveryMasterSubTransferRecordReq {
  symbol: string;
  transfer_type?: string;
  create_date: number;
  page_index?: number;
  page_size?: number;
}

/** Req for POST /api/v1/contract_master_sub_transfer */
export interface FuturesCmDeliveryMasterSubTransferReq {
  sub_uid: number;
  symbol: string;
  amount: number | string;
  type: FuturesTransferType;
  client_order_id?: number;
}

/** Req for POST /api/v1/contract_sub_account_info_list. Batch of sub-account assets with pagination. */
export interface FuturesCmDeliverySubAccountInfoListReq {
  symbol?: string;
  page_index?: number;
  page_size?: number;
}

/** Req for POST /api/v1/contract_sub_account_list. Sub-account assets. */
export interface FuturesCmDeliverySubAccountListReq {
  symbol?: string;
  direct?: FuturesDirect;
  from_id?: number;
}

/** Req for GET /index/market/history/basis. Basis (contract - index) data. */
export interface FuturesCmDeliveryBasisDataReq {
  symbol: string;
  period: FuturesKlinePeriod;
  size: number;
  basis_price_type?: FuturesBasisPriceType;
}

/** Req for GET /v1/insurance_fund_history (CMPerp). Historical risk reserves. */
export interface FuturesCmPerpRiskReserveHistoryReq {
  start_time?: number;
  end_time?: number;
  direct?: FuturesDirect;
  from_id?: number;
  limit?: number;
}

/** Req for POST /swap-api/v1/swap_sub_account_list */
export interface FuturesCmPerpSubAccountsReq {
  contract_code?: string;
  direct?: FuturesDirect;
  from_id?: number;
}

/** Req for POST /swap-api/v1/swap_sub_account_info_list */
export interface FuturesCmPerpSubAccountsAssetsReq {
  contract_code?: string;
  page_index?: number;
  page_size?: number;
}

/** Req for POST /swap-api/v1/swap_order_limit */
export interface FuturesCmPerpOrderLimitReq {
  contract_code?: string;
  order_price_type: string;
}

/** Req for POST /swap-api/v1/swap_cancel_after. Dead Man's Switch: auto-cancel pending orders if not refreshed. Inlined in setCmPerpCancelAfter - params: { on_off: 0|1, time_out? } */

/** Req for POST /swap-api/v1/swap_order. Place order (CMPerp). */
export interface FuturesCmPerpSubmitOrderReq {
  contract_code: string;
  direction: FuturesDirection;
  offset: FuturesOffset;
  volume: number;
  lever_rate: number;
  order_price_type: FuturesCmPerpSubmitOrderPriceType;
  price?: number | string;
  client_order_id?: number;
  tp_trigger_price?: number | string;
  tp_order_price?: number | string;
  tp_order_price_type?: string;
  sl_trigger_price?: number | string;
  sl_order_price?: number | string;
  sl_order_price_type?: string;
  price_protect?: boolean;
  self_match_prevent?: 0 | 1;
}

/** Req for POST /swap-api/v1/swap_batchorder. Max 25 orders (CMPerp). */
export interface FuturesCmPerpSubmitBatchOrderReq {
  orders_data: FuturesCmPerpSubmitOrderReq[];
}

/** Req for cancelCmPerpOrder. One of order_id or client_order_id required. Max 10. */
export interface FuturesCmPerpCancelOrderReq {
  contract_code: string;
  order_id?: string;
  client_order_id?: string;
}

/** Req for cancelCmPerpAllOrders. Optional direction/offset filter. */
export interface FuturesCmPerpCancelAllOrdersReq {
  contract_code: string;
  direction?: FuturesDirection;
  offset?: FuturesOffset;
}

/** Req for updateCmPerpLeverage. Rate limit 1/3s. Inlined in updateCmPerpLeverage - params: { contract_code, lever_rate } */

/** Req for getCmPerpOrderInfo. One of order_id or client_order_id required. Max 50. */
export interface FuturesCmPerpOrderInfoReq {
  contract_code: string;
  order_id?: string;
  client_order_id?: string;
}

/** Req for getCmPerpOrderDetail. created_at improves query performance, cannot be 0. */
export interface FuturesCmPerpOrderDetailReq {
  contract_code: string;
  order_id: number | string;
  created_at?: number;
  order_type?: number;
  page_index?: number;
  page_size?: number;
}

/** Req for getCmPerpOpenOrders. Omit contract_code for all. */
export interface FuturesCmPerpOpenOrdersReq {
  contract_code?: string;
  page_index?: number;
  page_size?: number;
  sort_by?: FuturesSortBy;
  trade_type?: 0 | 1 | 2 | 3 | 4;
}

/** Req for getCmPerpHistoryOrders. contract required. Window max 48h, within 90d. Cancel info: last 2h. */
export interface FuturesCmPerpHistoryOrdersReq {
  contract: string;
  /** 0:all, 1:buy long, 2:sell short, 3:buy short, 4:sell long, 5:sell liq, 6:buy liq, 7:Delivery long, 8:Delivery short, 11:reduce close long, 12:reduce close short */
  trade_type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 11 | 12;
  /** 1:All Orders, 2:Order in Finished Status */
  type: 1 | 2;
  /** 0:all, or comma-separated e.g. "3,4,5" */
  status: string;
  start_time?: number;
  end_time?: number;
  direct?: FuturesDirect;
  from_id?: number;
}

/** Req for getCmPerpHistoryOrdersExact. Same as HistoryOrdersReq + price_type filter. */
export interface FuturesCmPerpHistoryOrdersExactReq {
  contract: string;
  trade_type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 11 | 12;
  type: 1 | 2;
  status: string;
  price_type?: string;
  start_time?: number;
  end_time?: number;
  direct?: FuturesDirect;
  from_id?: number;
}

/** Req for getCmPerpFills. Window max 48h, within 90d. */
export interface FuturesCmPerpFillsReq {
  contract: string;
  /** 0:All, 1:Open long, 2:Open short, 3:Close short, 4:Close long, 5:Liquidate long, 6:Liquidate short */
  trade_type: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  start_time?: number;
  end_time?: number;
  direct?: FuturesDirect;
  from_id?: number;
}

/** Req for getCmPerpFillsExact. Same params as FillsReq. */
export type FuturesCmPerpFillsExactReq = FuturesCmPerpFillsReq;

/** Req for submitCmPerpLightningClose. Lightning close = rival price + optimal 30 levels; unfilled becomes limit. */
export interface FuturesCmPerpLightningCloseReq {
  contract_code: string;
  volume: number;
  direction: FuturesDirection;
  client_order_id?: number;
  order_price_type?: FuturesLightningOrderPriceTypeCm;
}

/** Req for submitCmPerpTriggerOrder. Rate limit 5/s. */
export interface FuturesCmPerpTriggerOrderReq {
  contract_code: string;
  trigger_type: FuturesTriggerType;
  trigger_price: number | string;
  order_price?: number | string;
  order_price_type?: FuturesTriggerOrderPriceType;
  volume: number;
  direction: FuturesDirection;
  offset: FuturesOffset;
  lever_rate?: number;
}

/** Req for cancelCmPerpTriggerOrder. Max 10 order_ids. Rate limit 5/s. Inlined in cancelCmPerpTriggerOrder - params: { contract_code, order_id } */

/** Req for cancelCmPerpAllTriggerOrders. Optional direction/offset filter. Rate limit 5/s. */
export interface FuturesCmPerpCancelAllTriggerOrdersReq {
  contract_code: string;
  direction?: FuturesDirection;
  offset?: FuturesOffset;
}

/** Req for getCmPerpTriggerOpenOrders. */
export interface FuturesCmPerpTriggerOpenOrdersReq {
  contract_code: string;
  page_index?: number;
  page_size?: number;
  trade_type?: 0 | 1 | 2 | 3 | 4;
}

/** Req for getCmPerpTriggerHistoryOrders. create_date: days, max 90. Default query completed (status 4,5,6). */
export interface FuturesCmPerpTriggerHistoryOrdersReq {
  contract_code: string;
  /** 0:All, 1:Open Long, 2:Close Short, 3:Open Short, 4:Close Long */
  trade_type: 0 | 1 | 2 | 3 | 4;
  /** 0:all, 4:submitted, 5:failed, 6:cancelled. Comma-separated allowed */
  status: string;
  create_date: number;
  page_index?: number;
  page_size?: number;
  sort_by?: FuturesSortBy;
}

/** Req for submitCmPerpTpslOrder. At least one of tp_trigger_price or sl_trigger_price required. Rate limit 5/s. */
export interface FuturesCmPerpTpslOrderReq {
  contract_code: string;
  direction: FuturesDirection;
  volume: number | string;
  tp_trigger_price?: number | string;
  tp_order_price?: number | string;
  tp_order_price_type?: FuturesTriggerOrderPriceType;
  sl_trigger_price?: number | string;
  sl_order_price?: number | string;
  sl_order_price_type?: FuturesTriggerOrderPriceType;
  price_protect?: boolean;
}

/** Req for cancelCmPerpTpslOrder. Max 10 order_ids. Rate limit 5/s. */
export interface FuturesCmPerpCancelTpslOrderReq {
  contract_code: string;
  order_id: string;
}

/** Req for cancelCmPerpAllTpslOrders. Optional direction filter. Rate limit 5/s. */
export interface FuturesCmPerpCancelAllTpslOrdersReq {
  contract_code: string;
  direction?: FuturesDirection;
}

/** Req for getCmPerpTpslOpenOrders. */
export interface FuturesCmPerpTpslOpenOrdersReq {
  contract_code: string;
  page_index?: number;
  page_size?: number;
  trade_type?: 0 | 3 | 4;
}

/** Req for getCmPerpTpslHisOrders. create_date: days, max 90. */
export interface FuturesCmPerpTpslHisOrdersReq {
  contract_code: string;
  /** 0:all, 4:submitted, 5:failed, 6:cancelled, 11:expired. Comma-separated allowed */
  status: string;
  create_date: number;
  page_index?: number;
  page_size?: number;
  sort_by?: FuturesSortBy;
}

/** Req for getCmPerpRelationTpslOrder. order_id = open order id. */
export interface FuturesCmPerpRelationTpslOrderReq {
  contract_code: string;
  order_id: number | string;
}

/** Req for submitCmPerpTrailingOrder. callback_rate min 0.001 (0.1%). Rate limit 5/s. */
export interface FuturesCmPerpTrailingOrderReq {
  contract_code: string;
  direction: FuturesDirection;
  offset: FuturesOffset;
  volume: number | string;
  callback_rate: number | string;
  active_price: number | string;
  order_price_type: FuturesTrailingOrderPriceType;
  lever_rate?: number;
}

/** Req for cancelCmPerpTrailingOrder. Max 10 order_ids. Rate limit 5/s. */
export interface FuturesCmPerpCancelTrailingOrderReq {
  contract_code: string;
  order_id: string;
}

/** Req for cancelCmPerpAllTrailingOrders. Optional direction/offset filter. Rate limit 5/s. */
export interface FuturesCmPerpCancelAllTrailingOrdersReq {
  contract_code: string;
  direction?: FuturesDirection;
  offset?: FuturesOffset;
}

/** Req for getCmPerpTrailingOpenOrders. */
export interface FuturesCmPerpTrailingOpenOrdersReq {
  contract_code: string;
  trade_type?: 0 | 1 | 2 | 3 | 4;
  page_index?: number;
  page_size?: number;
}

/** Req for getCmPerpTrailingHisOrders. create_date: days, max 90. */
export interface FuturesCmPerpTrailingHisOrdersReq {
  contract_code: string;
  /** 0:all, 4:success, 5:failed, 6:cancelled. Comma-separated allowed */
  status: string;
  /** 0:all, 1:buy long, 2:sell short, 3:buy short, 4:sell long */
  trade_type: 0 | 1 | 2 | 3 | 4;
  create_date: number;
  page_index?: number;
  page_size?: number;
  sort_by?: FuturesSortByCmPerp;
}

/** Req for POST /swap-api/v1/swap_master_sub_transfer */
export interface FuturesCmPerpMasterSubTransferReq {
  sub_uid: number;
  contract_code: string;
  amount: number | string;
  type: FuturesTransferType;
  client_order_id?: number;
}

/** Req for getCmPerpMasterSubTransfers */
export interface FuturesCmPerpMasterSubTransfersReq {
  contract_code: string;
  transfer_type?: string;
  create_date: number;
  page_index?: number;
  page_size?: number;
}

/** Req for POST /swap-api/v3/swap_financial_record */
export interface FuturesCmPerpFinancialRecordReq {
  contract: string;
  type?: string;
  start_time?: number;
  end_time?: number;
  direct?: FuturesDirect;
  from_id?: number;
}

/** Req for POST /swap-api/v3/swap_financial_record_exact. Same params as swap_financial_record. */
export type FuturesCmPerpFinancialRecordExactReq =
  FuturesCmPerpFinancialRecordReq;

/** Req for GET /swap-api/v1/swap_sub_auth_list */
export interface FuturesCmPerpSubPermissionsReq {
  sub_uid?: string;
  start_time?: number;
  end_time?: number;
  direct?: FuturesDirect;
  from_id?: number;
}

/** Req for GET /index/market/history/swap_estimated_rate_kline */
export interface FuturesCmPerpFundingRateKlinesReq {
  contract_code: string;
  period: FuturesKlinePeriod;
  size: number;
}

/** Req for GET /index/market/history/swap_basis */
export interface FuturesCmPerpBasisDataReq {
  contract_code: string;
  period: FuturesKlinePeriod;
  size: number;
  basis_price_type?: FuturesBasisPriceType;
}

/** Req for GET /index/market/history/swap_premium_index_kline */
export interface FuturesCmPerpPremiumIndexKlinesReq {
  contract_code: string;
  period: FuturesKlinePeriod;
  size: number;
}

/** Req for GET /index/market/history/swap_mark_price_kline */
export interface FuturesCmPerpMarkPriceKlinesReq {
  contract_code: string;
  period: FuturesKlinePeriod;
  size: number;
}

/** Req for GET /swap-ex/market/history/kline. Either size or (from+to) required. */
export interface FuturesCmPerpKlinesReq {
  contract_code: string;
  period: FuturesKlinePeriod;
  size?: number;
  from?: number;
  to?: number;
}

/** Req for GET /swap-api/v1/swap_historical_funding_rate */
export interface FuturesCmPerpHistoricalFundingRateReq {
  contract_code: string;
  page_index?: number;
  page_size?: number;
}

/** Req for GET /swap-api/v1/swap_his_open_interest */
export interface FuturesCmPerpGetOpenInterestReq {
  contract_code: string;
  /** 60min, 4hour, 12hour, 1day */
  period: FuturesOpenInterestPeriod;
  /** 1: cont, 2: cryptocurrency */
  amount_type: 1 | 2;
  /** Default 48, [1, 200] */
  size?: number;
}

/** Req for GET /swap-api/v3/swap_liquidation_orders. 0=fully filled, 5=liquidated close, 6=liquidated open. */
export interface FuturesCmPerpLiquidationOrdersReq {
  /** Contract code. Case-insensitive */
  contract: string;
  /** 0: fully filled liquidated; 5: liquidated close; 6: liquidated open */
  trade_type: 0 | 5 | 6;
  /** Start time (ms). Window max 2h, within 90 days */
  start_time?: number;
  /** End time (ms). Default now. Within 90 days */
  end_time?: number;
  /** next=chronological, prev=reverse. Default prev */
  direct?: FuturesDirect;
  /** Pagination: min/max query_id from last result depending on direct */
  from_id?: number;
}

/** Req for GET /swap-api/v1/swap_settlement_records */
export interface FuturesCmPerpSettlementRecordsReq {
  contract_code: string;
  /** Start time (ms). Default: now - 90 days */
  start_time?: number;
  /** End time (ms). Default: now */
  end_time?: number;
  page_index?: number;
  page_size?: number;
}
