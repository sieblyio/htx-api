/**
 * Reference
 */

/** Paginated response base. Use FuturesPaginatedData or FuturesPaginatedSettlement for specific data keys. */
export interface FuturesPaginatedBase {
  total_page: number;
  current_page: number;
  total_size: number;
}

/** Paginated response with `data` array (e.g. historical funding rate, liquidation orders). */
export type FuturesPaginatedData<T> = FuturesPaginatedBase & { data: T[] };

/** Paginated response with `settlement_record` array. */
export type FuturesPaginatedSettlement<T> = FuturesPaginatedBase & {
  settlement_record: T[];
};

/** Paginated response with `sub_list` array (sub-account info list). */
export type FuturesPaginatedSubList<T> = FuturesPaginatedBase & {
  sub_list: T[];
};

/** Paginated response with `transfer_record` array (master-sub transfers). */
export type FuturesPaginatedTransferRecord<T> = FuturesPaginatedBase & {
  transfer_record: T[];
};

/** Paginated response with `orders` array (open orders, trigger orders, etc.). */
export type FuturesPaginatedOrders<T> = FuturesPaginatedBase & { orders: T[] };

/** Funding rate from swap_funding_rate and swap_batch_funding_rate */
export interface FuturesFundingRate {
  funding_rate: string;
  contract_code: string;
  symbol: string;
  fee_asset: string;
  funding_time: string;
  /** Deprecated, default null */
  estimated_rate?: string | null;
  /** Deprecated, default null */
  next_funding_time?: string | null;
}

/** Historical funding rate item from swap_historical_funding_rate */
export interface FuturesHistoricalFundingRate {
  avg_premium_index: string;
  funding_rate: string;
  funding_time: string;
  /** Deprecated, default null */
  realized_rate?: string | null;
  contract_code: string;
  symbol: string;
  fee_asset: string;
}

/** Paginated wrapper for swap_historical_funding_rate data */
export type FuturesHistoricalFundingRatePage =
  FuturesPaginatedData<FuturesHistoricalFundingRate>;

/** Liquidation order item from swap_liquidation_orders */
export interface FuturesLiquidationOrder {
  query_id: number;
  symbol: string;
  contract_code: string;
  created_at: number;
  direction: string;
  offset: string;
  volume: number;
  amount: number;
  price: number;
  trade_turnover: number;
  pair: string;
  business_type: string;
}

/** Settlement record item from swap_settlement_records */
export interface FuturesSettlementRecord {
  symbol: string;
  contract_code: string;
  settlement_time: number;
  clawback_ratio: number;
  settlement_price: number;
  settlement_type: string;
  business_type: string;
  pair: string;
}

/** Paginated settlement records from swap_settlement_records */
export type FuturesSettlementRecordsPage =
  FuturesPaginatedSettlement<FuturesSettlementRecord>;

/** Elite ratio list item (account and position) */
export interface FuturesEliteRatioList {
  buy_ratio: number;
  sell_ratio: number;
  /** Account ratio only */
  locked_ratio?: number;
  ts: number;
}

/** Elite account/position ratio data from swap_elite_account_ratio and swap_elite_position_ratio */
export interface FuturesEliteRatio {
  symbol: string;
  contract_code: string;
  pair: string;
  business_type: string;
  list: FuturesEliteRatioList[];
}

/** System status item from swap_api_state. 1=available, 0=unavailable */
export interface FuturesApiState {
  symbol: string;
  contract_code: string;
  margin_mode: string;
  margin_account: string;
  open: number;
  close: number;
  cancel: number;
  transfer_in: number;
  transfer_out: number;
  master_transfer_sub: number;
  sub_transfer_master: number;
  master_transfer_sub_inner_in: number;
  master_transfer_sub_inner_out: number;
  sub_transfer_master_inner_in: number;
  sub_transfer_master_inner_out: number;
  transfer_inner_in: number;
  transfer_inner_out: number;
}

/** Cross ladder margin tier from swap_cross_ladder_margin */
export interface FuturesLadderMarginTier {
  min_margin_balance: number | null;
  max_margin_balance: number | null;
  min_margin_available: number | null;
  max_margin_available: number | null;
}

/** Cross ladder margin list item */
export interface FuturesCrossLadderMarginList {
  lever_rate: number;
  ladders: FuturesLadderMarginTier[];
}

/** Cross tiered margin item from swap_cross_ladder_margin. Isolated (swap_ladder_margin) omits business_type, pair, contract_type. */
export interface FuturesCrossLadderMargin {
  margin_account: string;
  symbol: string;
  contract_code: string;
  margin_mode: string;
  list: FuturesCrossLadderMarginList[];
  business_type?: string;
  pair?: string;
  contract_type?: string;
}

/** Estimated settlement price item from swap_estimated_settlement_price. Empty around settlement/delivery. */
export interface FuturesEstimatedSettlementPrice {
  contract_code: string;
  estimated_settlement_price: number | null;
  settlement_type: string;
  contract_type: string;
  pair: string;
  business_type: string;
}

/** Tiered adjustment factor ladder from swap_adjustfactor and swap_cross_adjustfactor */
export interface FuturesAdjustFactorLadder {
  ladder: number;
  min_size: number;
  max_size: number | null;
  adjust_factor: number;
}

/** Adjust factor list item */
export interface FuturesAdjustFactorList {
  lever_rate: number;
  ladders: FuturesAdjustFactorLadder[];
}

/** Tiered adjustment factor item from swap_adjustfactor and swap_cross_adjustfactor. Cross includes business_type, pair, contract_type. */
export interface FuturesAdjustFactor {
  symbol: string;
  contract_code: string;
  margin_mode: string;
  list: FuturesAdjustFactorList[];
  business_type?: string;
  pair?: string;
  contract_type?: string;
}

/** Risk reserve balance from /v1/insurance_fund_info */
export interface FuturesInsuranceFundInfo {
  insurance_fund: string;
  quote_currency?: string;
}

/** Historical risk reserve item from /v1/insurance_fund_history */
export interface FuturesInsuranceFundHistory {
  query_id: number;
  insurance_fund: string;
  date: string;
}

/** Price limit item from swap_price_limit. business_type, pair, contract_type optional for CM products. */
export interface FuturesPriceLimit {
  symbol: string;
  contract_code: string;
  high_limit: number;
  low_limit: number;
  business_type?: string;
  pair?: string;
  contract_type?: string;
}

/** Open interest item from swap_open_interest */
export interface FuturesOpenInterest {
  symbol: string;
  volume: number;
  amount: number;
  contract_code: string;
  value: number;
  trade_amount: number;
  trade_volume: number;
  trade_turnover: number;
  contract_type: string;
  pair: string;
  business_type: string;
}

/** Contract info item from swap_contract_info */
export interface FuturesContractInfo {
  symbol: string;
  contract_code: string;
  contract_size: number;
  price_tick: number;
  settlement_date: string;
  settlement_period: string;
  create_date: string;
  delivery_time: string;
  contract_status: number;
  support_margin_mode?: string;
  contract_type: string;
  pair: string;
  business_type: string;
  delivery_date: string;
  adjust?: unknown[];
  price_estimated?: unknown[];
  open_type?: number;
  trade_partition?: string;
}

/** Index price item from swap_index. symbol optional (CM Delivery uses symbol). */
export interface FuturesIndexPrice {
  contract_code?: string;
  symbol?: string;
  index_price: number;
  index_ts: number;
}

/** Index constituent component from swap_contract_constituents */
export interface FuturesIndexConstituentComponent {
  exchange: string;
  symbol: string;
  symbol_price: string;
  weights: string;
}

/** Index constituents data from swap_contract_constituents. contract_code or symbol per product. */
export interface FuturesIndexConstituents {
  contract_code?: string;
  symbol?: string;
  index_price: string;
  ts: number;
  components: FuturesIndexConstituentComponent[];
}

/** Contract elements price tick / value item */
export interface FuturesContractElementsPrice {
  business_type: number;
  price: string;
}

/** Contract elements order limit item */
export interface FuturesContractElementsOrderLimit {
  instrument_type: number;
  open: string;
  close: string;
  order_type?: number;
  open_after_closing?: string;
}

/** Contract elements contract info item */
export interface FuturesContractElementsContractInfo {
  contract_code: string;
  instrument_type: number;
  settlement_date: string;
  delivery_time: string;
  create_date: string;
  contract_status: number;
  delivery_date: string;
  trigger_protect?: number;
}

/** Timestamp response from /api/v1/timestamp. No data field. */
export interface FuturesTimestamp {
  status: string;
  ts: number;
}

/** Heartbeat data from /heartbeat/ - system availability */
export interface FuturesHeartbeat {
  heartbeat?: number;
  swap_heartbeat?: number;
  estimated_recovery_time?: number | null;
  swap_estimated_recovery_time?: number | null;
  linear_swap_heartbeat?: number;
  linear_swap_estimated_recovery_time?: number | null;
}

/** Contract elements item from swap_query_elements */
export interface FuturesContractElements {
  contract_code: string;
  mode_type: number;
  swap_delivery_type: number;
  instrument_index_code: string;
  real_time_settlement: number;
  transfer_profit_ratio: number;
  cross_transfer_profit_ratio: number;
  instrument_type: number[];
  trade_partition: string;
  min_level: string;
  max_level: string;
  settle_period: number;
  funding_rate_cap: string;
  funding_rate_floor: string;
  trigger_protect?: number;
  long_position_limit?: string;
  offset_order_limit?: string;
  open_order_limit?: string;
  short_position_limit?: string;
  price_tick?: string;
  instrument_value?: string;
  price_ticks?: FuturesContractElementsPrice[];
  instrument_values?: FuturesContractElementsPrice[];
  order_limits?: FuturesContractElementsOrderLimit[];
  normal_limits?: {
    instrument_type: number;
    open: string;
    close: string;
  }[];
  open_limits?: { instrument_type: number; open: string; close: string }[];
  trade_limits?: {
    instrument_type: number;
    open: string;
    close: string;
  }[];
  contract_infos?: FuturesContractElementsContractInfo[];
}

/**
 * Market
 */

/** Market depth tick from market/depth. ch, id, mrid, version optional per product. Payload in "tick". */
export interface FuturesMarketDepthTick {
  asks: [number, number][];
  bids: [number, number][];
  ch?: string;
  id?: number;
  mrid?: number;
  ts: number;
  version?: number;
}

/** BBO tick from market/bbo. contract_code or symbol per product. ask/bid: [price, qty]. */
export interface FuturesBboTick {
  contract_code?: string;
  symbol?: string;
  business_type?: string;
  mrid: number;
  ask: [number, number];
  bid: [number, number];
  ts: number;
}

/** Kline item from market/history/kline. trade_turnover optional per product. */
export interface FuturesKline {
  id: number;
  vol: number;
  count: number;
  open: number;
  close: number;
  low: number;
  high: number;
  amount: number;
  trade_turnover?: number;
}

/** Basis data item from /index/market/history/linear_swap_basis and /index/market/history/basis */
export interface FuturesBasis {
  id: number;
  contract_price: string;
  index_price: string;
  basis: string;
  basis_rate: string;
}

/** Mark price kline item. Also used for premium index and estimated rate kline. trade_turnover optional. */
export interface FuturesMarkPriceKline {
  id: number;
  vol: string;
  count: string;
  open: string;
  close: string;
  low: string;
  high: string;
  amount: string;
  trade_turnover?: string;
}

/** 24h ticker from market detail/merged. contract_code, symbol, business_type optional per product. */
export interface FuturesTicker {
  id: number;
  ts: number;
  amount: string;
  count: number;
  vol: string;
  open: string;
  close: string;
  low: string;
  high: string;
  trade_turnover?: string;
  ask: [number, number];
  bid: [number, number];
  contract_code?: string;
  symbol?: string;
  business_type?: string;
  number_of?: string;
}

/** Trade item from last trade and history trade. symbol, contract_code, business_type, trade_turnover optional per product. */
export interface FuturesTrade {
  id: number;
  price: string | number;
  amount: string | number;
  direction: string;
  ts: number;
  quantity?: string | number;
  contract_code?: string;
  business_type?: string;
  trade_turnover?: string | number;
  symbol?: string;
}

/** Last trade tick from market/trade. Payload in "tick". */
export interface FuturesLastTrade {
  id: number;
  ts: number;
  data: FuturesTrade[];
}

/** Trade history group from market/history/trade. Each group has trades by timestamp. */
export interface FuturesTradeHistory {
  id: number;
  ts: number;
  data: FuturesTrade[];
}

/** Open interest tick item from swap_his_open_interest */
export interface FuturesOpenInterestTick {
  volume: number;
  amount_type: number;
  ts: number;
  value: number;
}

/** Open interest data from swap_his_open_interest. data is object with tick array. */
export interface FuturesHistoricalOpenInterest {
  symbol: string;
  contract_code: string;
  contract_type: string;
  pair: string;
  business_type: string;
  tick: FuturesOpenInterestTick[];
}

/**
 * Account
 */

/** Asset valuation item from swap_balance_valuation */
export interface FuturesBalanceValuation {
  valuation_asset: string;
  balance: string;
}

/** Isolated account info item from swap_account_info */
export interface FuturesIsolatedAccountInfo {
  symbol: string;
  contract_code: string;
  margin_asset: string;
  margin_balance: number;
  margin_position: number;
  margin_frozen: number;
  margin_available: number;
  profit_real?: number;
  profit_unreal: number;
  risk_rate: number | null;
  new_risk_rate?: string | null;
  trade_partition?: string;
  withdraw_available: number;
  liquidation_price: number | null;
  lever_rate: number;
  adjust_factor: number;
  margin_static: number;
  margin_mode: string;
  margin_account: string;
  position_mode: string;
}

/** Cross account contract detail (swap + futures) from swap_cross_account_info */
export interface FuturesCrossAccountContractDetail {
  symbol: string;
  contract_code: string;
  margin_position: number;
  margin_frozen: number;
  margin_available: number;
  profit_unreal: number;
  liquidation_price: number | null;
  lever_rate: number;
  adjust_factor: number;
  contract_type: string;
  cross_max_available?: string;
  trade_partition?: string;
  pair: string;
  business_type: string;
}

/** Cross account info item from swap_cross_account_info */
export interface FuturesCrossAccountInfo {
  margin_mode: string;
  margin_account: string;
  margin_asset: string;
  margin_balance: number;
  margin_static: number;
  margin_position: number;
  margin_frozen: number;
  profit_unreal: number;
  withdraw_available: number;
  risk_rate: number | null;
  money_in?: string;
  money_out?: string;
  new_risk_rate?: string | null;
  position_mode: string;
  contract_detail: FuturesCrossAccountContractDetail[];
  futures_contract_detail: FuturesCrossAccountContractDetail[];
}

/** Position info item from swap_position_info and swap_cross_position_info */
export interface FuturesPositionInfo {
  symbol: string;
  contract_code: string;
  volume: number;
  available: number;
  frozen: number;
  cost_open: number;
  cost_hold: number;
  profit_unreal: number;
  profit_rate: number;
  profit: number;
  margin_asset: string;
  position_margin: number;
  lever_rate: number;
  direction: string;
  last_price: number;
  margin_mode: string;
  margin_account: string;
  position_mode: string;
  withdraw_available?: number;
  risk_rate?: number | null;
  liquidation_price?: number | null;
  adl_risk_percent?: string | number;
  contract_type?: string;
  pair?: string;
  business_type?: string;
}

/** Nested position in swap_account_position_info */
export interface FuturesAccountPosition {
  symbol: string;
  contract_code: string;
  volume: number;
  available: number;
  frozen: number;
  cost_open: number;
  cost_hold: number;
  profit_unreal: number;
  profit_rate: number;
  profit: number;
  margin_asset: string;
  position_margin: number;
  lever_rate: number;
  direction: string;
  last_price: number;
  margin_mode: string;
  margin_account: string;
  position_mode: string;
  adl_risk_percent?: string | number;
  new_risk_rate?: string | null;
  trade_partition?: string;
}

/** Account + positions from swap_account_position_info (Isolated) */
export interface FuturesIsolatedAccountPosition {
  symbol: string;
  contract_code: string;
  margin_asset: string;
  margin_balance: number;
  margin_static: number;
  margin_position: number;
  margin_frozen: number;
  margin_available: number;
  profit_real?: number;
  profit_unreal: number;
  risk_rate: number | null;
  new_risk_rate?: string | null;
  trade_partition?: string;
  liquidation_price: number | null;
  withdraw_available: number;
  lever_rate: number;
  adjust_factor: number;
  margin_mode: string;
  margin_account: string;
  position_mode: string;
  positions: FuturesAccountPosition[];
  adl_risk_percent?: string | number;
}

/** Cross position item (in positions array) from swap_cross_account_position_info */
export interface FuturesCrossAccountPosition {
  symbol: string;
  contract_code: string;
  volume: number;
  available: number;
  frozen: number;
  cost_open: number;
  cost_hold: number;
  profit_unreal: number;
  profit_rate: number;
  profit: number;
  margin_asset: string;
  position_margin: number;
  lever_rate: number;
  direction: string;
  last_price: number;
  margin_mode: string;
  margin_account: string;
  contract_type: string;
  pair: string;
  business_type: string;
  position_mode: string;
  new_risk_rate?: string | null;
  trade_partition?: string;
}

/** Cross account + positions from swap_cross_account_position_info. data is object, not array. */
export interface FuturesCrossAccountPosition {
  margin_mode: string;
  margin_account: string;
  margin_asset: string;
  margin_balance: number;
  margin_static: number;
  margin_position: number;
  margin_frozen: number;
  profit_real?: number;
  profit_unreal: number;
  withdraw_available: number;
  risk_rate: number | null;
  money_in?: string;
  money_out?: string;
  new_risk_rate?: string | null;
  position_mode: string;
  contract_detail: FuturesCrossAccountContractDetail[];
  futures_contract_detail: FuturesCrossAccountContractDetail[];
  positions: FuturesCrossAccountPosition[];
  adl_risk_percent?: string | number;
}

/** Sub auth error from swap_sub_auth and swap_sub_auth_list */
export interface FuturesSubAuthError {
  sub_uid: string;
  err_code: number | string;
  err_msg: string;
}

/** Sub auth response data from swap_sub_auth */
export interface FuturesSubAuth {
  errors: FuturesSubAuthError[];
  successes: string;
}

/** Sub auth success item from swap_sub_auth_list */
export interface FuturesSubAuthSuccess {
  query_id?: number;
  sub_uid: string;
  sub_auth: number | string;
}

/** Sub permissions response from getSubPermissions */
export interface FuturesSubPermissions {
  errors: FuturesSubAuthError[];
  successes: FuturesSubAuthSuccess[];
}

/** Isolated sub-account list item from swap_sub_account_list */
export interface FuturesIsolatedSubAccountList {
  symbol: string;
  contract_code: string;
  margin_asset: string;
  margin_balance: number;
  liquidation_price: number | null;
  risk_rate: number | string | null;
  margin_mode: string;
  margin_account: string;
  /** Used as from_id for next/prev pagination */
  query_id?: number;
}

/** Isolated sub-account entry from swap_sub_account_list (data array element) */
export interface FuturesIsolatedSubAccountListEntry {
  sub_uid: number;
  list: FuturesIsolatedSubAccountList[];
}

/** Cross sub-account list item from swap_cross_sub_account_list */
export interface FuturesCrossSubAccountList {
  margin_mode: string;
  margin_account: string;
  margin_asset: string;
  margin_balance: number;
  risk_rate: number | string | null;
  trade_partition?: string;
}

/** Asset multi-sub object from swap_cross_sub_account_list. Can be null. */
export interface FuturesCrossSubAccountAssetMultiSub {
  state: string;
  equity: string;
  initial_margin: string;
  maintenance_margin: string;
  maintenance_margin_rate: string;
  profit_unreal: string;
  available_margin: string;
  created_time: number | string;
  updated_time: number | string;
  details: unknown[];
}

/** Cross sub-account entry from swap_cross_sub_account_list (data array element) */
export interface FuturesCrossSubAccountListEntry {
  query_id: number;
  sub_uid: number;
  list: FuturesCrossSubAccountList[];
  asset_multi_sub: FuturesCrossSubAccountAssetMultiSub | null;
}

/** Account info item from swap_sub_account_info_list */
export interface FuturesSubAccountInfoAccount {
  symbol: string;
  contract_code: string;
  margin_account: string;
  margin_mode: string;
  margin_asset: string;
  margin_balance: number;
  liquidation_price: number | null;
  risk_rate: number | string | null;
}

/** Sub-account item in swap_sub_account_info_list data.sub_list */
export interface FuturesSubAccountInfoSub {
  sub_uid: number;
  account_info_list: FuturesSubAccountInfoAccount[];
}

/**  object from swap_sub_account_info_list */
export type FuturesSubAccountInfoList =
  FuturesPaginatedSubList<FuturesSubAccountInfoSub>;

/** Cross sub-account info list: account_info_list item (no symbol/contract_code) */
export interface FuturesCrossSubAccountInfoListAccount {
  margin_mode: string;
  margin_account: string;
  margin_asset: string;
  margin_balance: number;
  risk_rate: number | string | null;
  trade_partition?: string;
}

/** Cross sub-account info list: sub_list item */
export interface FuturesCrossSubAccountInfoListSub {
  sub_uid: number;
  account_info_list: FuturesCrossSubAccountInfoListAccount[];
}

/** Cross sub-account info list: unite_sub_list item */
export interface FuturesCrossSubAccountInfoListUnite {
  sub_uid: number;
  asset_multi_sub: FuturesCrossSubAccountAssetMultiSub;
}

/**  object from swap_cross_sub_account_info_list */
export type FuturesCrossSubAccountInfoList =
  FuturesPaginatedSubList<FuturesCrossSubAccountInfoListSub> & {
    unite_sub_list: FuturesCrossSubAccountInfoListUnite[];
  };

/** Isolated sub-account info item from swap_sub_account_info (single sub, data array element) */
export interface FuturesIsolatedSubAccountInfo {
  symbol: string;
  contract_code: string;
  margin_asset: string;
  margin_balance: number;
  margin_position: number;
  margin_frozen: number;
  margin_available: number;
  profit_real?: number;
  profit_unreal: number;
  risk_rate: number | string | null;
  new_risk_rate?: string | null;
  trade_partition?: string;
  liquidation_price: number | null;
  withdraw_available: number;
  lever_rate: number;
  adjust_factor: number;
  margin_static: number;
  margin_mode: string;
  margin_account: string;
  position_mode: string;
}

/** Cross sub-account info item from swap_cross_sub_account_info (single sub, data array element) */
export interface FuturesCrossSubAccountInfo {
  margin_mode: string;
  margin_account: string;
  margin_asset: string;
  margin_balance: number;
  margin_static: number;
  margin_position: number;
  margin_frozen: number;
  profit_real?: number;
  profit_unreal: number;
  withdraw_available: number;
  risk_rate: number | string | null;
  money_in?: string;
  money_out?: string;
  new_risk_rate?: string | null;
  position_mode: string;
  contract_detail: FuturesCrossAccountContractDetail[];
  futures_contract_detail: FuturesCrossAccountContractDetail[];
}

/** Financial record item from swap_financial_record and swap_financial_record_exact */
export interface FuturesFinancialRecord {
  query_id: number;
  id: number;
  ts: number;
  asset: string;
  contract_code: string;
  margin_account: string;
  face_margin_account: string;
  type: number;
  amount: number | string;
}

/** Available leverage item from swap_available_level_rate */
export interface FuturesAvailableLevelRate {
  contract_code: string;
  margin_mode: string;
  available_level_rate: string;
}

/** Available leverage item from swap_cross_available_level_rate */
export interface FuturesCrossAvailableLevelRate {
  contract_code: string;
  margin_mode: string;
  available_level_rate: string;
  contract_type: string;
  pair: string;
  business_type: string;
}

/** Order limit list item from swap_order_limit */
export interface FuturesOrderLimitList {
  symbol: string;
  contract_code: string;
  open_limit: number;
  close_limit: number;
  contract_type: string;
  pair: string;
  business_type: string;
}

/**  from swap_order_limit */
export interface FuturesOrderLimit {
  order_price_type: string;
  list: FuturesOrderLimitList[];
}

/** Fee item from swap_fee */
export interface FuturesFee {
  symbol: string;
  contract_code: string;
  open_maker_fee: string;
  open_taker_fee: string;
  close_maker_fee: string;
  close_taker_fee: string;
  fee_asset: string;
  contract_type: string;
  pair: string;
  business_type: string;
  delivery_fee: string;
}

/** Transfer limit item from swap_transfer_limit */
export interface FuturesTransferLimit {
  symbol: string;
  contract_code: string;
  margin_mode: string;
  margin_account: string;
  transfer_in_max_each: number;
  transfer_in_min_each: number;
  transfer_out_max_each: number;
  transfer_out_min_each: number;
  transfer_in_max_daily: number;
  transfer_out_max_daily: number;
  net_transfer_in_max_daily: number;
  net_transfer_out_max_daily: number;
}

/** Transfer limit item from swap_cross_transfer_limit */
export interface FuturesCrossTransferLimit {
  margin_mode: string;
  margin_account: string;
  transfer_in_max_each: number;
  transfer_in_min_each: number;
  transfer_out_max_each: number;
  transfer_out_min_each: number;
  transfer_in_max_daily: number;
  transfer_out_max_daily: number;
  net_transfer_in_max_daily: number;
  net_transfer_out_max_daily: number;
}

/** Position limit item from swap_position_limit */
export interface FuturesPositionLimit {
  symbol: string;
  contract_code: string;
  margin_mode: string;
  buy_limit: number;
  sell_limit: number;
  lever_rate: number;
  buy_limit_value: number;
  sell_limit_value: number;
  mark_price: number;
}

/** Position limit item from swap_cross_position_limit */
export interface FuturesCrossPositionLimit {
  symbol: string;
  contract_code: string;
  margin_mode: string;
  buy_limit: number;
  sell_limit: number;
  lever_rate: number;
  buy_limit_value: number;
  sell_limit_value: number;
  mark_price: number;
  contract_type: string;
  pair: string;
  business_type: string;
}

/** Lever position limit list item (per leverage) from swap_lever_position_limit */
export interface FuturesLeverPositionLimitList {
  lever_rate: number;
  buy_limit_value: number;
  sell_limit_value: number;
}

/** Lever position limit item from swap_lever_position_limit */
export interface FuturesLeverPositionLimit {
  symbol: string;
  contract_code: string;
  margin_mode: string;
  list: FuturesLeverPositionLimitList[];
}

/** Lever position limit item from swap_cross_lever_position_limit */
export interface FuturesCrossLeverPositionLimit {
  symbol: string;
  contract_code: string;
  margin_mode: string;
  business_type: string;
  contract_type: string;
  pair: string;
  list: FuturesLeverPositionLimitList[];
}

/** Master-sub transfer response from transfer*MasterSub */
export interface FuturesMasterSubTransfer {
  order_id: string;
  client_order_id?: number;
}

/** Transfer record item from master_sub_transfer_record. asset, margin_account, symbol, contract_code optional per product. */
export interface FuturesMasterSubTransferRecordItem {
  id: number;
  ts: number;
  sub_uid: string;
  sub_account_name: string;
  transfer_type: number;
  amount: number | string;
  asset?: string;
  margin_account?: string;
  from_margin_account?: string;
  to_margin_account?: string;
  symbol?: string;
  contract_code?: string;
}

/** Master-sub transfer records from swap_master_sub_transfer_record */
export type FuturesMasterSubTransferRecords =
  FuturesPaginatedTransferRecord<FuturesMasterSubTransferRecordItem>;

/** Cancel-after response data from linear-cancel-after */
export interface FuturesCancelAfter {
  current_time: number;
  trigger_time: number;
}

/** Submit order response data from swap_order and swap_cross_order. order_id may exceed JS safe integer - use order_id_str. */
export interface FuturesSubmitOrder {
  order_id: number | string;
  order_id_str: string;
  client_order_id?: number;
}

/** Batch order error item from swap_batchorder and swap_cross_batchorder */
export interface FuturesBatchOrderError {
  index: number;
  err_code: number;
  err_msg: string;
}

/** Batch order success item from swap_batchorder and swap_cross_batchorder */
export interface FuturesBatchOrderSuccess {
  index: number;
  order_id: number | string;
  order_id_str: string;
  client_order_id?: number;
}

/** Cancel order error item from swap_cancel and swap_cross_cancel */
export interface FuturesCancelOrderError {
  order_id: string;
  err_code: number;
  err_msg: string;
}

/** Cancel order response data from swap_cancel, swap_cross_cancel, swap_cancelall, swap_cross_cancelall */
export interface FuturesCancelOrder {
  errors: FuturesCancelOrderError[];
  /** Comma-separated list of successfully cancelled order_id or client_order_id */
  successes: string;
}

/** Switch leverage response data from swap_switch_lever_rate */
export interface FuturesSwitchLeverRate {
  contract_code: string;
  margin_mode: string;
  lever_rate: number;
}

/** Switch leverage response data from swap_cross_switch_lever_rate */
export interface FuturesCrossSwitchLeverRate {
  contract_code: string;
  margin_mode: string;
  lever_rate: number;
  contract_type: string;
  pair: string;
  business_type: string;
}

/** Batch order response data from swap_batchorder and swap_cross_batchorder */
export interface FuturesBatchOrder {
  errors: FuturesBatchOrderError[];
  success: FuturesBatchOrderSuccess[];
}

/** Position mode item from swap_switch_position_mode and swap_cross_switch_position_mode */
export interface FuturesSwitchPositionMode {
  margin_account: string;
  position_mode: string;
}

/** Order info item from getOrderInfo, getCmOrderInfo, getCmPerpOrderInfo. Product-specific fields optional. */
export interface FuturesOrderInfo {
  symbol: string;
  contract_code: string;
  volume: number;
  price: number;
  order_price_type: string;
  order_type: number;
  direction: string;
  offset: string;
  lever_rate: number;
  order_id: number | string;
  order_id_str: string;
  client_order_id: number | string | null;
  created_at: number;
  canceled_at: number | null;
  trade_volume: number;
  trade_turnover: number;
  fee: number;
  trade_avg_price: number | null;
  margin_frozen: number;
  profit: number;
  status: number;
  order_source: string;
  fee_asset: string;
  liquidation_type: string | null;
  is_tpsl: number;
  real_profit: number;
  update_time?: number;
  /** USDM only */
  margin_asset?: string;
  margin_mode?: string;
  margin_account?: string;
  reduce_only?: number;
  fee_amount?: number;
  fee_quote_amount?: number;
  self_match_prevent_new?: string;
  /** CM Delivery: required; USDM/CM Perp: optional */
  contract_type?: string;
  pair?: string;
  business_type?: string;
  canceled_source?: string;
  self_match_prevent?: number;
}

/** Order detail trade item (trades array) from getOrderDetail, getCmOrderDetail, getCmPerpOrderDetail */
export interface FuturesOrderDetailTrade {
  id: string;
  trade_id: number | string;
  trade_price: number;
  trade_volume: number;
  trade_turnover: number;
  trade_fee: number;
  role: string;
  created_at: number;
  profit: number;
  real_profit: number;
  fee_asse?: string;
  price?: string;
  fee_asset?: string;
  canceled_source?: string;
  self_match_prevent?: string | number;
}

/** Order detail from getOrderDetail, getCmOrderDetail, getCmPerpOrderDetail. Product-specific fields optional. */
export interface FuturesOrderDetail {
  symbol: string;
  contract_code: string;
  lever_rate: number;
  direction: string;
  offset: string;
  volume: number;
  price: number;
  created_at: number;
  canceled_at: number;
  order_source: string;
  order_price_type: string;
  margin_frozen: number;
  profit: number;
  order_id: number | string;
  order_id_str: string;
  client_order_id: number | string | null;
  order_type: number | string;
  status: number;
  trade_volume: number;
  trade_turnover: number;
  trade_avg_price: number;
  total_page: number;
  current_page: number;
  total_size: number;
  instrument_price: number;
  final_interest: number;
  adjust_value: number;
  fee_asset: string;
  fee: number;
  liquidation_type: string;
  is_tpsl: number;
  real_profit: number;
  trades: FuturesOrderDetailTrade[];
  /** USDM only */
  margin_asset?: string;
  margin_mode?: string;
  margin_account?: string;
  reduce_only?: number;
  self_match_prevent_new?: string;
  /** CM Delivery: required; USDM/CM Perp: optional */
  contract_type?: string;
  pair?: string;
  business_type?: string;
  canceled_source?: string;
  self_match_prevent?: number;
}

/** Open order item from swap_openorders and swap_cross_openorders */
export interface FuturesOpenOrder {
  symbol: string;
  contract_code: string;
  volume: number;
  price: number;
  order_price_type: string;
  order_type: number;
  direction: string;
  offset: string;
  lever_rate: number;
  order_id: number | string;
  order_id_str: string;
  client_order_id: number | string | null;
  created_at: number;
  trade_volume: number;
  trade_turnover: number;
  fee: number;
  trade_avg_price: number | null;
  margin_frozen: number;
  margin_asset: string;
  profit: number;
  status: number;
  order_source: string;
  fee_asset: string;
  liquidation_type: string | null;
  canceled_at: number | null;
  margin_mode: string;
  margin_account: string;
  is_tpsl: number;
  real_profit: number;
  update_time: number;
  reduce_only: number;
  /** Cross margin only */
  contract_type?: string;
  pair?: string;
  business_type?: string;
}

/** Open orders response from swap_openorders and swap_cross_openorders */
export type FuturesOpenOrders = FuturesPaginatedOrders<FuturesOpenOrder> & {
  self_match_prevent_new: string;
  self_match_prevent?: number;
  canceled_source?: string;
};

/** History order from getHistoryOrders, getCmHistoryOrders, getCmPerpHistoryOrders. Product-specific optional. */
export interface FuturesHistoryOrder {
  query_id: number;
  order_id: number | string;
  order_id_str: string;
  symbol: string;
  contract_code: string;
  lever_rate: number;
  direction: string;
  offset: string;
  volume: number;
  price: number;
  create_date: number;
  update_time: number;
  order_source: string;
  order_price_type: string | number;
  order_type: number;
  margin_frozen: number;
  profit: number;
  trade_volume: number;
  trade_turnover: number;
  fee: number;
  trade_avg_price: number;
  status: number;
  fee_asset: string;
  liquidation_type: string;
  is_tpsl: number;
  real_profit: number;
  /** USDM only */
  margin_mode?: string;
  margin_account?: string;
  margin_asset?: string;
  reduce_only?: number;
  self_match_prevent_new?: string;
  /** CM Delivery: required; USDM/CM Perp: optional */
  contract_type?: string;
  pair?: string;
  business_type?: string;
  canceled_source?: string;
  self_match_prevent?: number;
}

/** Fill / match result from getFills, getCmFills, getCmPerpFills. Product-specific optional. */
export interface FuturesMatchResult {
  id: string;
  query_id: number;
  match_id: number | string;
  order_id: number | string;
  order_id_str: string;
  symbol: string;
  contract_code: string;
  direction: string;
  offset: string;
  trade_volume: number;
  trade_price: number;
  trade_turnover: number;
  create_date: number;
  offset_profitloss: number;
  trade_fee: number;
  role: string;
  real_profit: number;
  fee_asset: string;
  order_source: string;
  /** USDM only */
  margin_mode?: string;
  margin_account?: string;
  reduce_only?: number;
  /** CM Delivery: required; USDM/CM Perp: optional */
  contract_type?: string;
  pair?: string;
  business_type?: string;
  /** getFillsExact only */
  ht_price?: string;
}

/** Position mode item from swap_position_side and swap_cross_position_side */
export interface FuturesPositionSide {
  margin_account: string;
  position_mode: 'single_side' | 'dual_side';
}

/** Transfer state item from swap_cross_transfer_state */
export interface FuturesCrossTransferState {
  margin_mode: string;
  margin_account: string;
  /** 1: available, 0: unavailable */
  transfer_in: number;
  /** 1: available, 0: unavailable */
  transfer_out: number;
  /** 1: available, 0: unavailable */
  master_transfer_sub: number;
  /** 1: available, 0: unavailable */
  sub_transfer_master: number;
  master_transfer_sub_inner_in: number;
  master_transfer_sub_inner_out: number;
  sub_transfer_master_inner_in: number;
  sub_transfer_master_inner_out: number;
  transfer_inner_in: number;
  transfer_inner_out: number;
}

/** Trade state item from swap_cross_trade_state */
export interface FuturesCrossTradeState {
  symbol: string;
  contract_code: string;
  margin_mode: string;
  margin_account: string;
  contract_type: string;
  pair: string;
  business_type: string;
  /** 1=available, 0=unavailable */
  open: number;
  /** 1=available, 0=unavailable */
  close: number;
  /** 1=available, 0=unavailable */
  cancel: number;
}

/** Trigger order open order item from swap_trigger_openorders and swap_cross_trigger_openorders */
export interface FuturesTriggerOrderOpenOrder {
  symbol: string;
  contract_code: string;
  trigger_type: string;
  volume: number;
  order_type: number;
  direction: string;
  offset: string;
  lever_rate: number;
  order_id: number | string;
  order_id_str: string;
  order_source: string;
  trigger_price: number | string;
  order_price: number | string;
  created_at: number;
  order_price_type: string;
  status: number;
  margin_mode: string;
  margin_account: string;
  reduce_only: number;
  /** Cross margin only */
  contract_type?: string;
  pair?: string;
  business_type?: string;
}

/** Trigger open orders response from swap_trigger_openorders and swap_cross_trigger_openorders */
export type FuturesTriggerOpenOrders =
  FuturesPaginatedOrders<FuturesTriggerOrderOpenOrder>;

/** Trigger order history item from swap_trigger_hisorders and swap_cross_trigger_hisorders */
export interface FuturesTriggerOrderHisOrder {
  symbol: string;
  contract_code: string;
  trigger_type: string;
  volume: number;
  order_type: number;
  direction: string;
  offset: string;
  lever_rate: number;
  order_id: number | string;
  order_id_str: string;
  relation_order_id: string;
  order_price_type: string;
  status: number;
  order_source: string;
  trigger_price: number | string;
  triggered_price: number | string | null;
  order_price: number | string;
  created_at: number;
  triggered_at: number | null;
  order_insert_at: number;
  canceled_at: number | null;
  update_time: number;
  fail_code: number | null;
  fail_reason: string | null;
  margin_mode: string;
  margin_account: string;
  reduce_only?: number;
  /** Cross margin only */
  contract_type?: string;
  pair?: string;
  business_type?: string;
}

/** Trigger history orders response from getTriggerHistoryOrders, getCrossTriggerHistoryOrders */
export type FuturesTriggerHistoryOrders =
  FuturesPaginatedOrders<FuturesTriggerOrderHisOrder>;

/** TP/SL order result; when only TP or only SL is set, the other is empty */
export interface FuturesTpslOrderResult {
  order_id: number | string;
  order_id_str: string;
}

/** TPSL order response data from swap_tpsl_order and swap_cross_tpsl_order. tp_order or sl_order empty when only the other is set */
export interface FuturesTpslOrder {
  tp_order?: FuturesTpslOrderResult;
  sl_order?: FuturesTpslOrderResult;
}

/** TPSL open order item from swap_tpsl_openorders and swap_cross_tpsl_openorders */
export interface FuturesTpslOpenOrder {
  symbol: string;
  contract_code: string;
  margin_mode: string;
  margin_account: string;
  volume: number;
  order_type: number;
  tpsl_order_type: string;
  direction: string;
  order_id: number | string;
  order_id_str: string;
  order_source: string;
  trigger_type: string;
  trigger_price: number | string;
  price_protect?: boolean;
  created_at: number;
  order_price_type: string;
  order_price: number | string;
  status: number;
  source_order_id: string | null;
  relation_tpsl_order_id: string;
  /** Cross margin only */
  contract_type?: string;
  pair?: string;
  business_type?: string;
}

/** TPSL open orders response from swap_tpsl_openorders and swap_cross_tpsl_openorders */
export type FuturesTpslOpenOrders =
  FuturesPaginatedOrders<FuturesTpslOpenOrder>;

/** TPSL history order item from swap_tpsl_hisorders and swap_cross_tpsl_hisorders */
export interface FuturesTpslHisOrder {
  symbol: string;
  contract_code: string;
  margin_mode: string;
  margin_account: string;
  volume: number;
  order_type: number;
  tpsl_order_type: string;
  direction: string;
  order_id: number | string;
  order_id_str: string;
  order_source: string;
  trigger_type: string;
  trigger_price: number | string;
  price_protect?: boolean;
  created_at: number;
  order_price_type: string;
  order_price: number | string;
  status: number;
  source_order_id: string | null;
  relation_tpsl_order_id: string;
  canceled_at: number | null;
  fail_code: number | null;
  fail_reason: string | null;
  triggered_price: number | string | null;
  relation_order_id: string;
  update_time: number;
  /** Cross margin only */
  contract_type?: string;
  pair?: string;
  business_type?: string;
}

/** TPSL history orders response from swap_tpsl_hisorders and swap_cross_tpsl_hisorders */
export type FuturesTpslHisOrders = FuturesPaginatedOrders<FuturesTpslHisOrder>;

/** TPSL order info item within relation_tpsl_order response. getRelationTpslOrder, getCmRelationTpslOrder, getCmPerpRelationTpslOrder. */
export interface FuturesRelationTpslOrderTpslInfo {
  volume: number;
  tpsl_order_type: string;
  direction: string;
  order_id: number | string;
  order_id_str: string;
  trigger_type: string;
  trigger_price: number | string;
  created_at: number;
  order_price: number | string;
  status: number;
  relation_tpsl_order_id: string;
  relation_order_id: string;
  order_price_type?: string;
  price_protect?: boolean;
  canceled_at: number | null;
  fail_code: number | null;
  fail_reason: string | null;
  triggered_price: number | string | null;
}

/** Relation TPSL order from getRelationTpslOrder, getCmRelationTpslOrder, getCmPerpRelationTpslOrder. Product-specific optional. */
export interface FuturesRelationTpslOrder {
  symbol: string;
  contract_code: string;
  volume: number;
  price: number | string;
  order_price_type: string;
  direction: string;
  offset: string;
  lever_rate: number;
  order_id: number | string;
  order_id_str: string;
  client_order_id: number | string | null;
  created_at: number;
  trade_volume: number;
  trade_turnover: number | string;
  fee: number | string;
  trade_avg_price: number | string;
  margin_frozen: number | string;
  profit: number | string;
  status: number;
  order_type: number | null;
  order_source: string;
  fee_asset: string;
  canceled_at: number;
  tpsl_order_info: FuturesRelationTpslOrderTpslInfo[];
  /** USDM only */
  margin_mode?: string;
  margin_account?: string;
  /** CM Delivery: required; USDM/CM Perp: optional */
  contract_type?: string;
  pair?: string;
  business_type?: string;
}

/** Trailing order open order item from swap_track_openorders and swap_cross_track_openorders */
export interface FuturesTrackOpenOrder {
  symbol: string;
  contract_code: string;
  volume: number;
  order_type: number;
  direction: string;
  offset: string;
  lever_rate: number;
  order_id: number | string;
  order_id_str: string;
  order_source: string;
  created_at: number;
  order_price_type: string;
  status: number;
  callback_rate: number | string;
  active_price: number | string;
  is_active: number;
  margin_mode: string;
  margin_account: string;
  reduce_only: number;
  /** Cross margin only */
  contract_type?: string;
  pair?: string;
  business_type?: string;
}

/** Trailing open orders response data from swap_track_openorders and swap_cross_track_openorders */
export type FuturesTrackOpenOrders =
  FuturesPaginatedOrders<FuturesTrackOpenOrder>;

/** Trailing order history item from swap_track_hisorders and swap_cross_track_hisorders */
export interface FuturesTrackHisOrder {
  symbol: string;
  contract_code: string;
  volume: number;
  order_type: number;
  direction: string;
  offset: string;
  lever_rate: number;
  order_id: number | string;
  order_id_str: string;
  order_source: string;
  created_at: number;
  update_time: number;
  order_price_type: string;
  status: number;
  canceled_at: number | null;
  fail_code: number | null;
  fail_reason: string | null;
  callback_rate: number | string;
  active_price: number | string;
  is_active: number;
  market_limit_price: number | string | null;
  formula_price: number | string | null;
  real_volume: number | string;
  triggered_price: number | string | null;
  relation_order_id: string;
  margin_mode: string;
  margin_account: string;
  reduce_only: number;
  /** Cross margin only */
  contract_type?: string;
  pair?: string;
  business_type?: string;
}

/** Trailing history orders response from swap_track_hisorders and swap_cross_track_hisorders */
export type FuturesTrackHisOrders =
  FuturesPaginatedOrders<FuturesTrackHisOrder>;

/** Cross swap item within unified_account_info */
export interface FuturesUnifiedAccountCrossSwap {
  symbol: string;
  contract_code: string;
  margin_mode: string;
  margin_available: number | string;
  cross_max_available?: number | string;
  lever_rate: number | string;
  contract_type: string;
  business_type: string;
}

/** Cross futures item within unified_account_info */
export interface FuturesUnifiedAccountCrossFuture {
  symbol: string;
  contract_code: string;
  margin_mode: string;
  margin_available: number | string;
  cross_max_available?: number | string;
  lever_rate: number | string;
  contract_type: string;
  business_type: string;
}

/** Isolated swap item within unified_account_info */
export interface FuturesUnifiedAccountIsolatedSwap {
  symbol: string;
  contract_code: string;
  margin_mode: string;
  margin_available: number | string;
  withdraw_available?: number | string;
  lever_rate: number | string;
  position_mode?: string;
}

/** Unified account info item from unified_account_info */
export interface FuturesUnifiedAccountInfo {
  margin_balance: number | string;
  margin_static: number | string;
  cross_profit_unreal: number | string;
  cross_margin_static: number | string;
  margin_asset: string;
  margin_frozen: number | string;
  withdraw_available: number | string;
  cross_risk_rate: number | string | null;
  cross_swap: FuturesUnifiedAccountCrossSwap[];
  cross_future: FuturesUnifiedAccountCrossFuture[];
  isolated_swap: FuturesUnifiedAccountIsolatedSwap[];
  userId?: string | null;
}

/** Linear swap overview account info item from linear_swap_overview_account_info */
export interface FuturesLinearSwapOverviewAccountInfo {
  margin_asset: string;
  margin_balance: number | string;
  margin_available: number | string;
}

/** Fix position margin change record item from fix_position_margin_change_record */
export interface FuturesFixPositionMarginChangeRecord {
  query_id: number;
  order_id: string;
  amount: number | string;
  asset: string;
  symbol: string;
  type: number;
  direction: number;
}

/** Fix position margin change response data from fix_position_margin_change */
export interface FuturesFixPositionMarginChange {
  amount: number | string;
  asset: string;
  contract_code: string;
  type: number;
  direction: number;
  order_id: string;
  client_order_id: number | string | null;
}

/**
 * USDT Margined Futures Multi Asset - Account (v5 API)
 */

/** Currency detail from /v5/account/balance */
export interface FuturesV5AccountBalanceDetail {
  currency: string;
  equity: string;
  isolated_equity: string;
  available: string;
  withdraw_available: string;
  profit_unreal: string;
  isolated_profit_unreal: string;
  initial_margin: string;
  maintenance_margin: string;
  maintenance_margin_rate: string;
  initial_margin_rate: string;
  voucher: string;
  voucher_value: string;
  created_time: number;
  updated_time: number;
}

/** Account balance data from /v5/account/balance */
export interface FuturesV5AccountBalance {
  /** "normal" | "liquidating" | "adl" | "open_limit" */
  state: string;
  equity: string;
  initial_margin: string;
  maintenance_margin: string;
  maintenance_margin_rate: string;
  profit_unreal: string;
  available_margin: string;
  voucher_value: string;
  created_time: number;
  updated_time: number;
  details: FuturesV5AccountBalanceDetail[];
}

/** Set asset mode response data from POST /v5/account/asset_mode */
export interface FuturesV5AssetMode {
  /** 0: Single-asset collateral; 1: Multi-assets collateral */
  assets_mode: 0 | 1;
}

/** Get asset mode response data from GET /v5/account/asset_mode */
export interface FuturesV5AssetModeGet {
  /** 0: Single-asset collateral; 1: Multi-assets collateral */
  asset_mode: 0 | 1;
}

/** Fee deduction crypto from /v5/account/fee_deduction_currency */
export interface FuturesV5FeeDeductionCurrency {
  /** 1: Yes; 0: No */
  fee_option: 0 | 1;
  /** Deduction currency (e.g. htx, trx). Not returned when fee_option = 0 */
  deduction_currency?: string;
}

/** Financial record item from /v5/account/bills */
export interface FuturesV5Bill {
  id: string;
  contract_code: string;
  margin_mode: string;
  type: string;
  currency: string;
  amount: string;
  created_time: string;
}

/**
 * USDT Margined Futures Multi Asset - Orders (v5 API)
 */

/** Place order response from POST /v5/trade/order */
export interface FuturesV5PlaceOrderResp {
  order_id: string;
  client_order_id?: string;
}

/** Batch place order item from POST /v5/trade/batch_orders */
export interface FuturesV5PlaceBatchOrderRespItem {
  order_id: string;
  client_order_id?: string;
  code: number;
  message: string;
}

/** Close position response from POST /v5/trade/position */
export interface FuturesV5ClosePositionResp {
  order_id: string | number;
  client_order_id?: string;
}

/** Open order / order info / order history item from v5 trade endpoints */
export interface FuturesV5Order {
  id: string;
  contract_code: string;
  contract_type?: string;
  side: string;
  position_side: string;
  type: string;
  price_match?: string | null;
  order_id: string;
  client_order_id: string;
  margin_mode: string;
  price?: string;
  volume: string;
  lever_rate?: number;
  state: string | number;
  order_source: string;
  reduce_only?: boolean | string;
  time_in_force: string;
  tp_trigger_price?: string;
  tp_order_price?: string;
  tp_type?: string | null;
  tp_trigger_price_type?: string | null;
  sl_trigger_price?: string;
  sl_order_price?: string;
  sl_type?: string | null;
  sl_trigger_price_type?: string | null;
  trade_avg_price?: string;
  trade_volume?: string;
  trade_turnover?: string;
  fee_currency?: string;
  fee?: string;
  profit?: string | null;
  price_protect?: boolean | string;
  cancel_reason?: string | null;
  created_time?: string;
  updated_time?: string;
  self_match_prevent?: string;
}

/** Execution/trade detail from GET /v5/trade/order/details */
export interface FuturesV5OrderExecutionDetail {
  id?: string;
  contract_code?: string;
  order_id?: string;
  trade_id?: string;
  side?: string;
  position_side?: string;
  order_type?: string;
  margin_mode?: string;
  type?: string;
  client_order_id?: string;
  role?: string;
  trade_price?: string;
  trade_volume?: string;
  trade_turnover?: string;
  created_time?: string;
  updated_time?: string;
  order_source?: string;
  fee_currency?: string;
  trade_fee?: string;
  deduction_price?: string;
  profit?: string;
  contract_type?: string;
}

/** Cancel-after response from POST /v5/trade/cancel-after */
export interface FuturesV5CancelAfterResp {
  current_time: string;
  trigger_time?: string;
}

/**
 * USDT Margined Futures Multi Asset - Positions (v5 API)
 */

/** Position from GET /v5/trade/position/opens */
export interface FuturesV5Position {
  contract_code: string;
  position_side: string;
  direction: string;
  margin_mode: string;
  open_avg_price: string;
  volume: string;
  available: string;
  lever_rate: string | number;
  adl_risk_percent?: number | null;
  liquidation_price: string;
  initial_margin: string;
  maintenance_margin: string;
  profit_unreal: string;
  profit_rate: string;
  margin_rate: string;
  margin_currency: string;
  last_price?: string;
  mark_price?: string;
  contract_type: string;
  created_time: string;
  updated_time: string;
}

/** Leverage list entry from GET /v5/position/lever */
export interface FuturesV5LeverListEntry {
  contract_code: string;
  contract_type: string;
  margin_mode: string;
  position_side: string;
  lever_rate: number;
  available_lever: string | string[];
}

/** Set leverage response from POST /v5/position/lever */
export interface FuturesV5SetLeverageResp {
  contract_code: string;
  margin_mode: string;
  position_side?: string;
  lever_rate: number;
}

/** Position mode from GET/POST /v5/position/mode */
export interface FuturesV5PositionModeResp {
  position_mode: 'single_side' | 'dual_side';
}

/** Risk limit entry from GET /v5/position/risk/limit */
export interface FuturesV5RiskLimitEntry {
  contract_code: string;
  contract_type?: string;
  margin_mode: string;
  position_side: string;
  max_lever: string;
  maintenance_margin_rate: string;
  max_volume: string;
  min_volume: string;
  volume_unit: string;
}

/** Risk limit tier entry from GET /v5/position/risk/limit_tier */
export interface FuturesV5RiskLimitTierEntry {
  contract_code: string;
  margin_mode: string;
  tier: number;
  max_lever: string;
  maintenance_margin_rate: string;
  max_volume: string;
  min_volume: string;
  volume_unit: string;
}

/**
 * USDT Margined Futures Multi Asset - Basic Information (v5 API)
 */

/** Risk limit entry from GET /v5/market/risk/limit */
export interface FuturesV5MarketRiskLimitEntry {
  contract_code: string;
  margin_mode: string;
  tier: number;
  max_lever: string;
  maintenance_margin_rate: string;
  max_volume: string;
  min_volume: string;
  volume_unit?: string;
}

/** Assets deduction currency from GET /v5/market/assets_deduction_currency */
export interface FuturesV5AssetsDeductionCurrencyResp {
  currency: string[];
}

/** Multi-assets margin from GET /v5/market/multi_assets_margin */
export interface FuturesV5MultiAssetsMarginResp {
  multi_assets: string[];
}

/**
 * Coin-M Delivery - Reference Data (FuturesCmDelivery)
 */

/** Ladder item from contract_adjustfactor */
export interface FuturesCmDeliveryAdjustFactorLadder {
  ladder: number;
  min_size: number;
  max_size: number | null;
  adjust_factor: number;
}

/** Lever item in adjust factor list */
export interface FuturesCmDeliveryAdjustFactorLeverItem {
  lever_rate: number;
  ladders: FuturesCmDeliveryAdjustFactorLadder[];
}

/** GET /api/v1/contract_adjustfactor */
export interface FuturesCmDeliveryAdjustFactor {
  symbol: string;
  list: FuturesCmDeliveryAdjustFactorLeverItem[];
}

/** Tick from contract_his_open_interest */
export interface FuturesCmDeliveryOpenInterestTick {
  volume: string;
  amount_type: number;
  ts: number;
}

/** GET /api/v1/contract_his_open_interest */
export interface FuturesCmDeliveryOpenInterest {
  symbol: string;
  contract_type: string;
  tick: FuturesCmDeliveryOpenInterestTick[];
}

/** Ladder item from contract_ladder_margin */
export interface FuturesCmDeliveryLadderMarginLadder {
  min_margin_balance: number;
  max_margin_balance: number | null;
  min_margin_available: number;
  max_margin_available: number | null;
}

/** Lever item in ladder margin list */
export interface FuturesCmDeliveryLadderMarginLeverItem {
  lever_rate: number;
  ladders: FuturesCmDeliveryLadderMarginLadder[];
}

/** GET /api/v1/contract_ladder_margin */
export interface FuturesCmDeliveryLadderMargin {
  symbol: string;
  list: FuturesCmDeliveryLadderMarginLeverItem[];
}

/** Ladder from GET /swap-api/v1/swap_adjustfactor */
export interface FuturesCmPerpAdjustFactorLadder {
  ladder: number;
  min_size: number;
  max_size: number | null;
  adjust_factor: number;
}

/** Lever item from swap_adjustfactor list */
export interface FuturesCmPerpAdjustFactorLeverItem {
  lever_rate: number;
  ladders: FuturesCmPerpAdjustFactorLadder[];
}

/** GET /swap-api/v1/swap_adjustfactor */
export interface FuturesCmPerpAdjustFactor {
  symbol: string;
  contract_code: string;
  list: FuturesCmPerpAdjustFactorLeverItem[];
}

/** Tick from GET /swap-api/v1/swap_his_open_interest */
export interface FuturesCmPerpOpenInterestTick {
  volume: number;
  amount_type: number;
  ts: number;
}

/** GET /swap-api/v1/swap_his_open_interest */
export interface FuturesCmPerpOpenInterest {
  symbol: string;
  contract_code: string;
  tick: FuturesCmPerpOpenInterestTick[];
}

/** Ladder from GET /swap-api/v1/swap_ladder_margin */
export interface FuturesCmPerpTieredMarginLadder {
  min_margin_balance: number;
  max_margin_balance: number | null;
  min_margin_available: number;
  max_margin_available: number | null;
}

/** Lever item from swap_ladder_margin list */
export interface FuturesCmPerpTieredMarginLeverItem {
  lever_rate: number;
  ladders: FuturesCmPerpTieredMarginLadder[];
}

/** GET /swap-api/v1/swap_ladder_margin */
export interface FuturesCmPerpTieredMargin {
  symbol: string;
  contract_code: string;
  list: FuturesCmPerpTieredMarginLeverItem[];
}

/** List item from GET /swap-api/v1/swap_elite_account_ratio */
export interface FuturesCmPerpAccountRatioItem {
  buy_ratio: number;
  sell_ratio: number;
  locked_ratio: number;
  ts: number;
}

/** GET /swap-api/v1/swap_elite_account_ratio */
export interface FuturesCmPerpAccountRatio {
  symbol: string;
  contract_code: string;
  list: FuturesCmPerpAccountRatioItem[];
}

/** List item from GET /swap-api/v1/swap_elite_position_ratio */
export interface FuturesCmPerpPositionRatioItem {
  buy_ratio: number;
  sell_ratio: number;
  ts: number;
}

/** GET /swap-api/v1/swap_elite_position_ratio */
export interface FuturesCmPerpPositionRatio {
  symbol: string;
  contract_code: string;
  list: FuturesCmPerpPositionRatioItem[];
}

/** Item from GET /swap-api/v1/swap_estimated_settlement_price data[] */
export interface FuturesCmPerpEstimatedSettlementPrice {
  contract_code: string;
  estimated_settlement_price: number | null;
  settlement_type: 'delivery' | 'settlement';
}

/** GET /swap-api/v1/swap_api_state */
export interface FuturesCmPerpSystemStatus {
  symbol: string;
  contract_code: string;
  open: number;
  close: number;
  cancel: number;
  transfer_in: number;
  transfer_out: number;
  master_transfer_sub: number;
  sub_transfer_master: number;
}

/** GET /swap-api/v1/swap_funding_rate */
export interface FuturesCmPerpFundingRate {
  symbol: string;
  contract_code: string;
  fee_asset: string;
  funding_time: string;
  funding_rate: string;
  estimated_rate: string | null;
  next_funding_time: string | null;
}

/** Item from GET /swap-api/v1/swap_historical_funding_rate data[] */
export interface FuturesCmPerpHistoricalFundingRate {
  symbol: string;
  contract_code: string;
  fee_asset: string;
  funding_time: string;
  funding_rate: string;
  /** Deprecated, default null */
  realized_rate?: string | null;
  avg_premium_index: string;
}

/** Paginated wrapper for GET /swap-api/v1/swap_historical_funding_rate */
export type FuturesCmPerpHistoricalFundingRatePage =
  FuturesPaginatedData<FuturesCmPerpHistoricalFundingRate>;

/** Item from GET /swap-api/v3/swap_liquidation_orders data[] */
export interface FuturesCmPerpLiquidationOrder {
  query_id?: number;
  contract_code: string;
  symbol: string;
  direction: string;
  offset: string;
  volume: number;
  price: number;
  created_at: number;
  amount: number;
}

/** Item from GET /swap-api/v1/swap_settlement_records settlement_record[] */
export interface FuturesCmPerpSettlementRecord {
  symbol: string;
  contract_code: string;
  settlement_time: number;
  clawback_ratio: number;
  settlement_price: number;
  settlement_type: string;
}

/** Paginated wrapper for GET /swap-api/v1/swap_settlement_records */
export type FuturesCmPerpSettlementRecordsPage =
  FuturesPaginatedSettlement<FuturesCmPerpSettlementRecord>;

/** Index constituents from GET /swap-api/market/swap_constituents. data is object. */
export interface FuturesCmPerpIndexConstituents {
  contract_code: string;
  ts: number;
  index_price: string;
  components: FuturesIndexConstituentComponent[];
}

/** Item from GET /swap-api/v1/swap_contract_info data[] */
export interface FuturesCmPerpContractInfo {
  symbol: string;
  contract_code: string;
  contract_size: number;
  price_tick: number;
  settlement_date: string;
  settlement_period: string;
  create_date: string;
  delivery_time: string;
  contract_status: number;
}

/** Item from GET /swap-api/v1/swap_open_interest data[] */
export interface FuturesCmPerpOpenInterestCurrent {
  symbol: string;
  contract_code: string;
  volume: number;
  amount: number;
  trade_amount: number;
  trade_volume: number;
  trade_turnover: number;
}

/** contract_infos[] item from GET /swap-api/v1/swap_query_elements */
export interface FuturesCmPerpContractElementsContractInfo {
  contract_code: string;
  settlement_date: string;
  /** Empty string when no delivery */
  delivery_time: string;
  create_date: string;
  contract_status: number;
  instrument_type?: number;
}

/** Market depth tick from GET /swap-ex/market/depth. Payload in "tick". */
export interface FuturesCmPerpMarketDepth {
  mrid: number;
  id: number;
  asks: [number, number][];
  bids: [number, number][];
  ts: number;
  version: number;
  ch: string;
}

/** BBO tick from GET /swap-ex/market/bbo. ask/bid: [price, qty]. Payload in "ticks". */
export interface FuturesCmPerpMarketBbo {
  contract_code: string;
  mrid: number;
  ask: [number, number];
  bid: [number, number];
  ts: number;
}

/** Kline item from GET /swap-ex/market/history/kline */
export interface FuturesCmPerpKline {
  id: number;
  vol: number;
  count: number;
  open: number;
  close: number;
  low: number;
  high: number;
  amount: number;
}

/** Mark price kline item from GET /index/market/history/swap_mark_price_kline */
export interface FuturesCmPerpMarkPriceKline {
  id: number;
  vol: string;
  count: string;
  open: string;
  close: string;
  low: string;
  high: string;
  amount: string;
  trade_turnover: string;
}

/** 24h ticker from GET /swap-ex/market/detail/merged. Payload in "tick". */
export interface FuturesCmPerp24hTicker {
  id: number;
  ts: number;
  vol: string;
  count: number;
  open: string;
  close: string;
  low: string;
  high: string;
  amount: string;
  ask: [number, number];
  bid: [number, number];
}

/** 24h ticker item from GET /v2/swap-ex/market/detail/batch_merged */
export interface FuturesCmPerp24hTickers {
  contract_code: string;
  id: number;
  ts: number;
  amount: string;
  count: number;
  vol: string;
  number_of: string;
  open: string;
  close: string;
  low: string;
  high: string;
  ask: [number, number];
  bid: [number, number];
}

/** Trade item from GET /swap-ex/market/trade and history/trade */
export interface FuturesCmPerpTrade {
  id: number;
  price: string;
  amount: string;
  direction: string;
  ts: number;
  quantity: string;
  contract_code?: string;
}

/** Last trade tick from GET /swap-ex/market/trade. Payload in "tick". */
export interface FuturesCmPerpLastTrade {
  id: number;
  ts: number;
  data: FuturesCmPerpTrade[];
}

/** Trade history group from GET /swap-ex/market/history/trade. Each group has trades by timestamp. */
export interface FuturesCmPerpTradeHistory {
  id: number;
  ts: number;
  data: FuturesCmPerpTrade[];
}

/** Estimated funding rate kline item from GET /index/market/history/swap_estimated_rate_kline */
export interface FuturesCmPerpFundingRateKline {
  id: number;
  vol: string;
  count: string;
  open: string;
  close: string;
  low: string;
  high: string;
  amount: string;
}

/** Premium index kline item from GET /index/market/history/swap_premium_index_kline */
export interface FuturesCmPerpPremiumIndexKline {
  id: number;
  vol: string;
  count: string;
  open: string;
  close: string;
  low: string;
  high: string;
  amount: string;
}

/** Basis data item from GET /index/market/history/swap_basis */
export interface FuturesCmPerpBasisData {
  id: number;
  contract_price: string;
  index_price: string;
  basis: string;
  basis_rate: string;
}

/** Account info from POST /swap-api/v1/swap_account_info */
export interface FuturesCmPerpAccountInfo {
  symbol: string;
  contract_code: string;
  margin_balance: number;
  margin_position: number;
  margin_frozen: number;
  margin_available: number;
  profit_real?: number;
  profit_unreal: number;
  risk_rate: number | null;
  new_risk_rate?: string | null;
  trade_partition?: string;
  withdraw_available: number;
  liquidation_price: number | null;
  lever_rate: number;
  adjust_factor: number;
  margin_static: number;
}

/** Position info from POST /swap-api/v1/swap_position_info */
export interface FuturesCmPerpPositionInfo {
  symbol: string;
  contract_code: string;
  volume: number;
  available: number;
  frozen: number;
  cost_open: number;
  cost_hold: number;
  profit_unreal: number;
  profit_rate: number;
  profit: number;
  position_margin: number;
  lever_rate: number;
  direction: string;
  last_price: number;
  adl_risk_percent?: string | number;
  liq_px: string;
  new_risk_rate?: string | null;
  trade_partition?: string;
}

/** Position item in getCmPerpAccountFull positions[] */
export interface FuturesCmPerpAccountFullPosition {
  symbol: string;
  contract_code: string;
  volume: number;
  available: number;
  frozen: number;
  cost_open: number;
  cost_hold: number;
  profit_unreal: number;
  profit_rate: number;
  profit: number;
  position_margin: number;
  lever_rate: number;
  direction: string;
  last_price: number;
  adl_risk_percent?: string | number;
}

/** Account + positions from getCmPerpAccountFull */
/** Account + positions from getCmPerpAccountFull */
export interface FuturesCmPerpAccountFull {
  symbol: string;
  contract_code: string;
  margin_balance: number;
  margin_static: number;
  margin_position: number;
  margin_frozen: number;
  margin_available: number;
  profit_real?: number;
  profit_unreal: number;
  risk_rate: number | null;
  withdraw_available: number;
  liquidation_price: number | null;
  lever_rate: number;
  adjust_factor: number;
  new_risk_rate?: string | null;
  trade_partition?: string;
  positions: FuturesCmPerpAccountFullPosition[];
}

/** Sub-auth error from swap_sub_auth and swap_sub_auth_list */
export interface FuturesCmPerpSubPermissionsError {
  sub_uid: string;
  err_code: number | string;
  err_msg: string;
}

/** Sub-auth response from updateCmPerpSubPermissions */
export interface FuturesCmPerpUpdateSubPermissions {
  errors: FuturesCmPerpSubPermissionsError[];
  successes: string;
}

/** Sub-auth success item from swap_sub_auth_list */
export interface FuturesCmPerpSubPermissionsSuccess {
  query_id?: number;
  sub_uid: string;
  sub_auth: number | string;
}

/** Sub-auth list from getCmPerpSubPermissions */
export interface FuturesCmPerpSubPermissions {
  errors: FuturesCmPerpSubPermissionsError[];
  successes: FuturesCmPerpSubPermissionsSuccess[];
}

/** Sub-account list item from getCmPerpSubAccounts list[] */
export interface FuturesCmPerpSubAccountsItem {
  symbol: string;
  contract_code: string;
  margin_balance: number;
  liquidation_price: number | null;
  risk_rate: number | null;
  query_id?: number;
}

/** Sub-account entry from getCmPerpSubAccounts (data array element) */
export interface FuturesCmPerpSubAccounts {
  sub_uid: number;
  list: FuturesCmPerpSubAccountsItem[];
}

/** Account info item from getCmPerpSubAccountsAssets account_info_list[] */
export interface FuturesCmPerpSubAccountsAssetsAccount {
  symbol: string;
  contract_code: string;
  margin_balance: number;
  liquidation_price: number | null;
  risk_rate: number | null;
}

/** Sub-list item from getCmPerpSubAccountsAssets sub_list[] */
export interface FuturesCmPerpSubAccountsAssetsSub {
  sub_uid: number;
  account_info_list: FuturesCmPerpSubAccountsAssetsAccount[];
}

/** Response from getCmPerpSubAccounts */
export type FuturesCmPerpSubAccountsAssets =
  FuturesPaginatedSubList<FuturesCmPerpSubAccountsAssetsSub>;

/** Sub-account account info from getCmPerpSubAccountAssets (data array element) */
export interface FuturesCmPerpSubAccountAssets {
  symbol: string;
  contract_code: string;
  margin_balance: number;
  margin_position: number;
  margin_frozen: number;
  margin_available: number;
  profit_real?: number;
  profit_unreal: number;
  risk_rate: number | null;
  liquidation_price: number | null;
  withdraw_available: number;
  lever_rate: number;
  adjust_factor: number;
  margin_static: number;
  new_risk_rate?: string | null;
  trade_partition?: string;
}

/** Sub-account position from getCmPerpSubPositions (data array element) */
export interface FuturesCmPerpSubPositions {
  symbol: string;
  contract_code: string;
  volume: number;
  available: number;
  frozen: number;
  cost_open: number;
  cost_hold: number;
  profit_unreal: number;
  profit_rate: number;
  profit: number;
  position_margin: number;
  lever_rate: number;
  direction: string;
  last_price: number;
  adl_risk_percent?: string | number;
  liq_px: string;
  new_risk_rate?: string | null;
  trade_partition?: string;
}

/** Financial record from POST /swap-api/v3/swap_financial_record and swap_financial_record_exact */
export interface FuturesCmPerpFinancialRecord {
  query_id: number;
  id: number | string;
  ts: number;
  symbol: string;
  contract_code: string;
  type: number;
  amount: number | string;
}

/** Available leverage from getCmPerpAvailableLeverage */
export interface FuturesCmPerpAvailableLeverage {
  contract_code: string;
  available_level_rate: string;
}

/** Order limit list item from swap_order_limit list[] */
export interface FuturesCmPerpOrderLimitList {
  symbol: string;
  contract_code: string;
  open_limit: number;
  close_limit: number;
}

/** Order limit from POST /swap-api/v1/swap_order_limit */
export interface FuturesCmPerpOrderLimit {
  order_price_type: string;
  list: FuturesCmPerpOrderLimitList[];
}

/** Fee from POST /swap-api/v1/swap_fee */
export interface FuturesCmPerpFee {
  symbol: string;
  contract_code: string;
  open_maker_fee: string;
  open_taker_fee: string;
  close_maker_fee: string;
  close_taker_fee: string;
  fee_asset: string;
  delivery_fee?: string;
}

/** Transfer limit from POST /swap-api/v1/swap_transfer_limit */
export interface FuturesCmPerpTransferLimit {
  symbol: string;
  contract_code: string;
  transfer_in_max_each: number;
  transfer_in_min_each: number;
  transfer_out_max_each: number;
  transfer_out_min_each: number;
  transfer_in_max_daily: number;
  transfer_out_max_daily: number;
  net_transfer_in_max_daily: number;
  net_transfer_out_max_daily: number;
}

/** Position limit from POST /swap-api/v1/swap_position_limit */
export interface FuturesCmPerpPositionLimit {
  symbol: string;
  contract_code: string;
  buy_limit: number;
  sell_limit: number;
}

/** API trading status COR from getCmPerpApiStatus */
export interface FuturesCmPerpApiStatusCor {
  orders_threshold: number;
  orders: number;
  invalid_cancel_orders: number;
  cancel_ratio_threshold: number;
  cancel_ratio: number;
  is_trigger: number;
  is_active: number;
}

/** API trading status TDN from getCmPerpApiStatus */
export interface FuturesCmPerpApiStatusTdn {
  disables_threshold: number;
  disables: number;
  is_trigger: number;
  is_active: number;
}

/** API trading status from getCmPerpApiStatus */
export interface FuturesCmPerpApiStatus {
  is_disable: number;
  order_price_types: string;
  disable_reason: string;
  disable_interval: number;
  recovery_time: number;
  COR: FuturesCmPerpApiStatusCor;
  TDN: FuturesCmPerpApiStatusTdn;
}

/** Cancel-after response from setCmPerpCancelAfter */
export interface FuturesCmPerpCancelAfter {
  current_time: number;
  trigger_time: number;
}

/** Trigger open order item from getCmPerpTriggerOpenOrders */
export interface FuturesCmPerpTriggerOpenOrder {
  symbol: string;
  contract_code: string;
  trigger_type: string;
  volume: number;
  order_type: number;
  direction: string;
  offset: string;
  lever_rate: number;
  order_id: number | string;
  order_id_str: string;
  order_source: string;
  trigger_price: number | string;
  order_price: number | string;
  created_at: number;
  order_price_type: string;
  status: number;
}

/** Trigger open orders response from getCmPerpTriggerOpenOrders */
export type FuturesCmPerpTriggerOpenOrders =
  FuturesPaginatedOrders<FuturesCmPerpTriggerOpenOrder>;

/** Trigger history order item from getCmPerpTriggerHisOrders */
export interface FuturesCmPerpTriggerHisOrder {
  symbol: string;
  contract_code: string;
  trigger_type: string;
  volume: number;
  order_type: number;
  direction: string;
  offset: string;
  lever_rate: number;
  order_id: number | string;
  order_id_str: string;
  relation_order_id: string;
  order_price_type: string;
  status: number;
  order_source: string;
  trigger_price: number | string;
  triggered_price: number | string | null;
  order_price: number | string;
  created_at: number;
  triggered_at: number | null;
  order_insert_at: number;
  canceled_at: number | null;
  update_time: number;
  fail_code: number | null;
  fail_reason: string | null;
}

/** Trigger history orders response from getCmPerpTriggerHistoryOrders */
export type FuturesCmPerpTriggerHistoryOrders =
  FuturesPaginatedOrders<FuturesCmPerpTriggerHisOrder>;

/** TPSL open order item from getCmPerpTpslOpenOrders */
export interface FuturesCmPerpTpslOpenOrder {
  symbol: string;
  contract_code: string;
  volume: number;
  order_type: number;
  tpsl_order_type: string;
  direction: string;
  order_id: number | string;
  order_id_str: string;
  order_source: string;
  trigger_type: string;
  trigger_price: number | string;
  price_protect?: boolean;
  created_at: number;
  order_price_type: string;
  order_price: number | string;
  status: number;
  source_order_id: string | null;
  relation_tpsl_order_id: string;
}

/** TPSL open orders response from getCmPerpTpslOpenOrders */
export type FuturesCmPerpTpslOpenOrders =
  FuturesPaginatedOrders<FuturesCmPerpTpslOpenOrder>;

/** TPSL history order item from getCmPerpTpslHisOrders */
export interface FuturesCmPerpTpslHisOrder {
  symbol: string;
  contract_code: string;
  volume: number;
  order_type: number;
  tpsl_order_type: string;
  direction: string;
  order_id: number | string;
  order_id_str: string;
  order_source: string;
  trigger_type: string;
  trigger_price: number | string;
  price_protect?: boolean;
  created_at: number;
  order_price_type: string;
  order_price: number | string;
  status: number;
  source_order_id: string | null;
  relation_tpsl_order_id: string;
  canceled_at: number | null;
  fail_code: number | null;
  fail_reason: string | null;
  triggered_price: number | string | null;
  relation_order_id: string;
  update_time: number;
}

/** TPSL history orders response from getCmPerpTpslHisOrders */
export type FuturesCmPerpTpslHisOrders =
  FuturesPaginatedOrders<FuturesCmPerpTpslHisOrder>;

/** Trailing open order item from getCmPerpTrailingOpenOrders */
export interface FuturesCmPerpTrailingOpenOrder {
  symbol: string;
  contract_code: string;
  volume: number;
  order_type: number;
  direction: string;
  offset: string;
  lever_rate: number;
  order_id: number | string;
  order_id_str: string;
  order_source: string;
  created_at: number;
  order_price_type: string;
  status: number;
  callback_rate: number | string;
  active_price: number | string;
  is_active: number;
}

/** Trailing open orders response from getCmPerpTrailingOpenOrders */
export type FuturesCmPerpTrailingOpenOrders =
  FuturesPaginatedOrders<FuturesCmPerpTrailingOpenOrder>;

/** Trailing history order item from getCmPerpTrailingHisOrders */
export interface FuturesCmPerpTrailingHisOrder {
  symbol: string;
  contract_code: string;
  volume: number;
  order_type: number;
  direction: string;
  offset: string;
  lever_rate: number;
  order_id: number | string;
  order_id_str: string;
  order_source: string;
  created_at: number;
  update_time: number;
  order_price_type: string;
  status: number;
  canceled_at: number | null;
  fail_code: number | null;
  fail_reason: string | null;
  callback_rate: number | string;
  active_price: number | string;
  is_active: number;
  market_limit_price: number | string | null;
  formula_price: number | string | null;
  real_volume: number | string;
  triggered_price: number | string | null;
  relation_order_id: string;
}

/** Trailing history orders response from getCmPerpTrailingHisOrders */
export type FuturesCmPerpTrailingHisOrders =
  FuturesPaginatedOrders<FuturesCmPerpTrailingHisOrder>;

/** Update leverage response from updateCmPerpLeverage */
export interface FuturesCmPerpUpdateLeverage {
  contract_code: string;
  lever_rate: number;
}

/** Open order item from getCmPerpOpenOrders */
export interface FuturesCmPerpOpenOrder {
  symbol: string;
  contract_code: string;
  volume: number;
  price: number;
  order_price_type: string;
  order_type: number;
  direction: string;
  offset: string;
  lever_rate: number;
  order_id: number | string;
  order_id_str: string;
  client_order_id: number | string | null;
  created_at: number;
  trade_volume: number;
  trade_turnover: number;
  fee: number;
  trade_avg_price: number | null;
  margin_frozen: number;
  profit: number;
  status: number;
  order_source: string;
  fee_asset: string;
  liquidation_type: string | null;
  canceled_at: number | null;
  is_tpsl: number;
  update_time: number;
  real_profit: number;
  canceled_source?: string;
  self_match_prevent?: number;
}

/** Open orders response from getCmPerpOpenOrders */
export type FuturesCmPerpOpenOrders =
  FuturesPaginatedOrders<FuturesCmPerpOpenOrder> & {
    canceled_source?: string;
    self_match_prevent?: number;
  };

/** Item from GET /swap-api/v1/swap_query_elements data[] */
export interface FuturesCmPerpContractElements {
  contract_code: string;
  instrument_index_code: string;
  real_time_settlement: number;
  transfer_profit_ratio: number;
  min_level: string;
  max_level: string;
  open_order_limit: string;
  offset_order_limit: string;
  long_position_limit: string;
  short_position_limit: string;
  price_tick: string;
  instrument_value: string;
  settle_period: number;
  funding_rate_cap: string;
  funding_rate_floor: string;
  trigger_protect?: number;
  hig_normal_limit: string;
  min_normal_limit: string;
  hig_open_limit: string;
  min_open_limit: string;
  hig_trade_limit: string;
  min_trade_limit: string;
  contract_infos: FuturesCmPerpContractElementsContractInfo[];
}

/** List item from contract_elite_account_ratio */
export interface FuturesCmDeliveryEliteAccountRatioItem {
  buy_ratio: number;
  sell_ratio: number;
  locked_ratio: number;
  ts: number;
}

/** GET /api/v1/contract_elite_account_ratio */
export interface FuturesCmDeliveryEliteAccountRatio {
  symbol: string;
  list: FuturesCmDeliveryEliteAccountRatioItem[];
}

/** List item from contract_elite_position_ratio */
export interface FuturesCmDeliveryElitePositionRatioItem {
  buy_ratio: number;
  sell_ratio: number;
  ts: number;
}

/** GET /api/v1/contract_elite_position_ratio */
export interface FuturesCmDeliveryElitePositionRatio {
  symbol: string;
  list: FuturesCmDeliveryElitePositionRatioItem[];
}

/** BBO tick from GET /market/bbo. ask/bid: [price, qty]. Uses symbol (e.g. BTC_CW). */
export interface FuturesCmDeliveryMarketBbo {
  symbol: string;
  mrid: number;
  ask: [number, number];
  bid: [number, number];
  ts: number;
}

/** Kline item from GET /market/history/kline */
export interface FuturesCmDeliveryKline {
  id: number;
  vol: number;
  count: number;
  open: number;
  close: number;
  low: number;
  high: number;
  amount: number;
}

/** Mark price kline item from GET /index/market/history/mark_price_kline */
export interface FuturesCmDeliveryMarkPriceKline {
  id: number;
  vol: string;
  count: string;
  open: string;
  close: string;
  low: string;
  high: string;
  amount: string;
}

/** Ticker from GET /market/detail/merged. 24h summary + best bid/ask. Payload in "tick". Alias: getCmTicker/getCmTickers. */
export interface FuturesCmDeliveryTicker {
  id: number;
  ts: number;
  vol: string;
  count: number;
  open: string;
  close: string;
  low: string;
  high: string;
  amount: string;
  ask: [number, number];
  bid: [number, number];
}

export interface FuturesCmDeliveryTrade {
  id: number;
  price: string;
  amount: string;
  direction: string;
  ts: number;
  quantity: string;
  symbol: string;
}

/** Last trade tick from GET /market/trade. Payload in "tick". */
export interface FuturesCmDeliveryLastTrade {
  id: number;
  ts: number;
  data: FuturesCmDeliveryTrade[];
}

/** Trade item from GET /market/history/trade data array. No symbol in response. */
export interface FuturesCmDeliveryTradeHistoryItem {
  id: number;
  price: string | number;
  amount: string | number;
  direction: string;
  ts: number;
  quantity?: string | number;
}

/** Trade history from GET /market/history/trade. Each group has trades by timestamp. Payload in "data". Alias: getCmTradeHistory. */
export interface FuturesCmDeliveryTradeHistory {
  id: number;
  ts: number;
  data: FuturesCmDeliveryTradeHistoryItem[];
}

/** Index kline item from GET /index/market/history/index. vol/count/amount typically 0. Alias: getCmIndexKlines. */
export interface FuturesCmDeliveryIndexKline {
  id: number;
  vol: number;
  count: number;
  open: number;
  close: number;
  low: number;
  high: number;
  amount: number;
}

/** Account info from POST /api/v1/contract_account_info. Per-symbol margin account. */
export interface FuturesCmDeliveryAccountInfo {
  symbol: string;
  margin_balance: number;
  margin_position: number;
  margin_frozen: number;
  margin_available: number;
  profit_real: number;
  profit_unreal: number;
  risk_rate: number | null;
  new_risk_rate: string;
  trade_partition: string;
  liquidation_price: number | null;
  withdraw_available: number;
  lever_rate: number;
  adjust_factor: number;
  margin_static: number;
}

/** Sub-account list item from POST /api/v1/contract_sub_account_list. Per-symbol margin info. */
export interface FuturesCmDeliverySubAccountListItem {
  symbol: string;
  margin_balance: number;
  liquidation_price: number | null;
  risk_rate: number | string | null;
  query_id: number;
}

/** All sub-account from POST /api/v1/contract_sub_account_list. Alias: getCmAllSubAccounts. */
export interface FuturesCmDeliveryAllSubAccount {
  sub_uid: number;
  list: FuturesCmDeliverySubAccountListItem[];
}

/** Account info item from POST /api/v1/contract_sub_account_info_list sub_list[].account_info_list */
export interface FuturesCmDeliverySubAccountInfoListItem {
  symbol: string;
  margin_balance: number;
  liquidation_price: number | null;
  risk_rate: number | string | null;
}

/** Sub-list item from POST /api/v1/contract_sub_account_info_list */
export interface FuturesCmDeliverySubAccountInfoListSub {
  sub_uid: number;
  account_info_list: FuturesCmDeliverySubAccountInfoListItem[];
}

/** Sub-accounts assets from POST /api/v1/contract_sub_account_info_list. Alias: getCmSubAccounts. */
export type FuturesCmDeliverySubAccountsAssets =
  FuturesPaginatedSubList<FuturesCmDeliverySubAccountInfoListSub>;

/** Sub-account assets from POST /api/v1/contract_sub_account_info. Alias: getCmSubAccountAssets. */
export interface FuturesCmDeliverySubAccountAssets {
  symbol: string;
  margin_balance: number;
  margin_position: number;
  margin_frozen: number;
  margin_available: number;
  profit_real: number;
  profit_unreal: number;
  risk_rate: number | string | null;
  liquidation_price: number | null;
  withdraw_available: number;
  lever_rate: number;
  adjust_factor: number;
  margin_static: number;
  new_risk_rate: string;
  trade_partition: string;
}

/** Position info from POST /api/v1/contract_sub_position_info. Single sub-account positions, data array element. */
export interface FuturesCmDeliverySubPositionInfo {
  symbol: string;
  contract_code: string;
  contract_type: string;
  volume: number;
  available: number;
  frozen: number;
  cost_open: number;
  cost_hold: number;
  profit_unreal: number;
  profit_rate: number;
  profit: number;
  position_margin: number;
  lever_rate: number;
  direction: string;
  last_price: number;
  adl_risk_percent?: string | number;
  liq_px: string;
  new_risk_rate: string;
  trade_partition: string;
}

/** Position info from POST /api/v1/contract_position_info. */
export interface FuturesCmDeliveryPositionInfo {
  symbol: string;
  contract_code: string;
  contract_type: string;
  volume: number;
  available: number;
  frozen: number;
  cost_open: number;
  cost_hold: number;
  profit_unreal: number;
  profit_rate: number;
  profit: number;
  position_margin: number;
  lever_rate: number;
  direction: string;
  last_price: number;
  adl_risk_percent?: string | number;
  liq_px: string;
  new_risk_rate: string;
  trade_partition: string;
}

/** Liquidation order from GET /api/v3/contract_liquidation_orders */
export interface FuturesCmDeliveryLiquidationOrder {
  query_id: number;
  symbol: string;
  contract_code: string;
  direction: string;
  offset: string;
  volume: number;
  amount: number;
  price: number;
  created_at: number;
}

/** Settlement record list item from contract_settlement_records */
export interface FuturesCmDeliverySettlementRecordItem {
  contract_code: string;
  settlement_price: number;
  settlement_type: string;
}

/** Settlement record from GET /api/v1/contract_settlement_records */
export interface FuturesCmDeliverySettlementRecord {
  symbol: string;
  settlement_time: number;
  clawback_ratio: number;
  list: FuturesCmDeliverySettlementRecordItem[];
}

/** GET /api/v1/contract_settlement_records */
export interface FuturesCmDeliverySettlementRecords {
  total_page: number;
  current_page: number;
  total_size: number;
  settlement_record: FuturesCmDeliverySettlementRecord[];
}

/** Financial record from POST /api/v3/contract_financial_record and contract_financial_record_exact */
export interface FuturesCmDeliveryFinancialRecord {
  query_id?: number;
  id: number;
  ts: number;
  symbol: string;
  contract_code: string;
  type: number;
  amount: number | string;
}

/** Position in user settlement record from POST /api/v1/contract_user_settlement_records */
export interface FuturesCmDeliveryUserSettlementRecordPosition {
  symbol: string;
  contract_code: string;
  direction: string;
  volume: number;
  cost_open: number;
  cost_hold_pre: number;
  cost_hold: number;
  settlement_profit_unreal: number;
  settlement_price: number;
  settlement_type: string;
}

/** User settlement record from POST /api/v1/contract_user_settlement_records */
export interface FuturesCmDeliveryUserSettlementRecord {
  symbol: string;
  margin_balance_init: number;
  margin_balance: number;
  settlement_profit_real: number;
  settlement_time: number;
  clawback: number;
  delivery_fee: number;
  offset_profitloss: number;
  fee: number;
  fee_asset: string;
  positions: FuturesCmDeliveryUserSettlementRecordPosition[];
}

/** Response from POST /api/v1/contract_user_settlement_records */
export interface FuturesCmDeliveryUserSettlementRecords {
  total_page: number;
  current_page: number;
  total_size: number;
  settlement_records: FuturesCmDeliveryUserSettlementRecord[];
}

/** Order limit type from POST /api/v1/contract_order_limit list[].types */
export interface FuturesCmDeliveryOrderLimitType {
  contract_type: string;
  open_limit: number;
  close_limit: number;
}

/** Order limit list item from POST /api/v1/contract_order_limit */
export interface FuturesCmDeliveryOrderLimitListItem {
  symbol: string;
  types: FuturesCmDeliveryOrderLimitType[];
}

/** Response from POST /api/v1/contract_order_limit */
export interface FuturesCmDeliveryOrderLimit {
  order_price_type: string;
  list: FuturesCmDeliveryOrderLimitListItem[];
}

/** Response from POST /api/v1/contract_switch_lever_rate */
export interface FuturesCmDeliverySwitchLeverRate {
  symbol: string;
  lever_rate: number;
}

/** Open order item from POST /api/v1/contract_openorders data.orders[] */
export interface FuturesCmDeliveryOpenOrder {
  symbol: string;
  contract_code: string;
  contract_type: string;
  volume: number;
  price: number;
  order_price_type: string;
  order_type: number;
  direction: string;
  offset: string;
  lever_rate: number;
  order_id: number | string;
  order_id_str: string;
  client_order_id: number | string | null;
  created_at: number;
  trade_volume: number;
  trade_turnover: number;
  fee: number;
  trade_avg_price: number | null;
  margin_frozen: number;
  profit: number;
  status: number;
  order_source: string;
  fee_asset: string;
  is_tpsl: number;
  update_time: number;
  real_profit: number;
  liquidation_type?: string | null;
  canceled_at?: number | null;
}

/** Response from POST /api/v1/contract_openorders */
export type FuturesCmDeliveryOpenOrders =
  FuturesPaginatedOrders<FuturesCmDeliveryOpenOrder> & {
    self_match_prevent?: number;
    canceled_source?: string;
  };

/** Trigger open order item from POST /api/v1/contract_trigger_openorders data.orders[] */
export interface FuturesCmDeliveryTriggerOpenOrder {
  symbol: string;
  contract_code: string;
  contract_type: string;
  trigger_type: string;
  volume: number;
  order_type: number;
  direction: string;
  offset: string;
  lever_rate: number;
  order_id: number | string;
  order_id_str: string;
  order_source: string;
  trigger_price: number;
  order_price: number;
  created_at: number;
  order_price_type: string;
  status: number;
}

/** Response from POST /api/v1/contract_trigger_openorders */
export type FuturesCmDeliveryTriggerOpenOrders =
  FuturesPaginatedOrders<FuturesCmDeliveryTriggerOpenOrder>;

/** Trigger history order item from POST /api/v1/contract_trigger_hisorders data.orders[] */
export interface FuturesCmDeliveryTriggerHistoryOrder {
  symbol: string;
  contract_code: string;
  contract_type: string;
  trigger_type: string;
  volume: number;
  order_type: number;
  direction: string;
  offset: string;
  lever_rate: number;
  order_id: number | string;
  order_id_str: string;
  relation_order_id: string;
  order_price_type: string;
  status: number;
  order_source: string;
  trigger_price: number;
  triggered_price: number;
  order_price: number;
  created_at: number;
  triggered_at: number;
  order_insert_at: number;
  canceled_at: number;
  fail_code: number | null;
  fail_reason: string | null;
  update_time?: number;
}

/** Response from POST /api/v1/contract_trigger_hisorders */
export type FuturesCmDeliveryTriggerHistoryOrders =
  FuturesPaginatedOrders<FuturesCmDeliveryTriggerHistoryOrder>;

/** TPSL open order item from POST /api/v1/contract_tpsl_openorders data.orders[] */
export interface FuturesCmDeliveryTpslOpenOrder {
  symbol: string;
  contract_code: string;
  contract_type: string;
  volume: number;
  order_type: number;
  tpsl_order_type: 'tp' | 'sl';
  direction: string;
  order_id: number | string;
  order_id_str: string;
  order_source: string;
  trigger_type: string;
  trigger_price: number;
  order_price: number;
  created_at: number;
  order_price_type: string;
  status: number;
  source_order_id: string | null;
  relation_tpsl_order_id: string;
  price_protect?: boolean;
}

/** Response from POST /api/v1/contract_tpsl_openorders */
export type FuturesCmDeliveryTpslOpenOrders =
  FuturesPaginatedOrders<FuturesCmDeliveryTpslOpenOrder>;

/** TPSL history order item from POST /api/v1/contract_tpsl_hisorders data.orders[] */
export interface FuturesCmDeliveryTpslHistoryOrder {
  symbol: string;
  contract_code: string;
  contract_type: string;
  volume: number;
  order_type: number;
  tpsl_order_type: 'tp' | 'sl';
  direction: string;
  order_id: number | string;
  order_id_str: string;
  order_source: string;
  trigger_type: string;
  trigger_price: number;
  order_price: number;
  created_at: number;
  order_price_type: string;
  status: number;
  source_order_id: string | null;
  relation_tpsl_order_id: string;
  canceled_at: number;
  fail_code: number | null;
  fail_reason: string | null;
  triggered_price: number | null;
  relation_order_id: string;
  update_time: number;
  price_protect?: boolean;
}

/** Response from POST /api/v1/contract_tpsl_hisorders */
export type FuturesCmDeliveryTpslHistoryOrders =
  FuturesPaginatedOrders<FuturesCmDeliveryTpslHistoryOrder>;

/** Trailing open order item from POST /api/v1/contract_track_openorders data.orders[] */
export interface FuturesCmDeliveryTrailingOpenOrder {
  symbol: string;
  contract_code: string;
  contract_type: string;
  volume: number;
  order_type: number;
  direction: string;
  offset: string;
  lever_rate: number;
  order_id: number | string;
  order_id_str: string;
  order_source: string;
  created_at: number;
  order_price_type: string;
  status: number;
  callback_rate: number;
  active_price: number;
  is_active: number;
}

/** Response from POST /api/v1/contract_track_openorders */
export type FuturesCmDeliveryTrailingOpenOrders =
  FuturesPaginatedOrders<FuturesCmDeliveryTrailingOpenOrder>;

/** Trailing history order item from POST /api/v1/contract_track_hisorders data.orders[] */
export interface FuturesCmDeliveryTrailingHistoryOrder {
  symbol: string;
  contract_code: string;
  contract_type: string;
  volume: number;
  order_type: number;
  direction: string;
  offset: string;
  lever_rate: number;
  order_id: number | string;
  order_id_str: string;
  order_source: string;
  created_at: number;
  update_time: number;
  order_price_type: string;
  status: number;
  canceled_at: number;
  fail_code: number | null;
  fail_reason: string | null;
  callback_rate: number;
  active_price: number;
  is_active: number;
  market_limit_price: number | null;
  formula_price: number | null;
  real_volume: number;
  triggered_price: number | null;
  relation_order_id: string;
}

/** Response from POST /api/v1/contract_track_hisorders */
export type FuturesCmDeliveryTrailingHistoryOrders =
  FuturesPaginatedOrders<FuturesCmDeliveryTrailingHistoryOrder>;

/** Fee from POST /api/v1/contract_fee */
export interface FuturesCmDeliveryFee {
  symbol: string;
  open_maker_fee: string;
  open_taker_fee: string;
  close_maker_fee: string;
  close_taker_fee: string;
  delivery_fee: string;
  fee_asset: string;
}

/** Transfer limit from POST /api/v1/contract_transfer_limit */
export interface FuturesCmDeliveryTransferLimit {
  symbol: string;
  transfer_in_max_each: number;
  transfer_in_min_each: number;
  transfer_out_max_each: number;
  transfer_out_min_each: number;
  transfer_in_max_daily: number;
  transfer_out_max_daily: number;
  net_transfer_in_max_daily: number;
  net_transfer_out_max_daily: number;
}

/** Position limit list item from POST /api/v1/contract_position_limit data[].list */
export interface FuturesCmDeliveryPositionLimitListItem {
  contract_type: string;
  buy_limit: number;
  sell_limit: number;
}

/** Position limit from POST /api/v1/contract_position_limit */
export interface FuturesCmDeliveryPositionLimit {
  symbol: string;
  list: FuturesCmDeliveryPositionLimitListItem[];
}

/** Position in asset_position_info from POST /api/v1/contract_account_position_info */
export interface FuturesCmDeliveryAssetPositionInfoPosition {
  symbol: string;
  contract_code: string;
  contract_type: string;
  volume: number;
  available: number;
  frozen: number;
  cost_open: number;
  cost_hold: number;
  profit_unreal: number;
  profit_rate: number;
  profit: number;
  position_margin: number;
  lever_rate: number;
  direction: string;
  last_price: number;
  adl_risk_percent?: string | number;
}

/** Asset + positions from POST /api/v1/contract_account_position_info. Alias: getCmAssetPositionInfo. */
export interface FuturesCmDeliveryAssetPositionInfo {
  symbol: string;
  margin_balance: number;
  margin_position: number;
  margin_frozen: number;
  margin_available: number;
  profit_real: number;
  profit_unreal: number;
  risk_rate: number | string | null;
  withdraw_available: number;
  liquidation_price: number | null;
  lever_rate: number;
  adjust_factor: number;
  margin_static: number;
  new_risk_rate: string;
  trade_partition: string;
  positions: FuturesCmDeliveryAssetPositionInfoPosition[];
}

/** API trading status item from GET /api/v1/contract_api_trading_status */
export interface FuturesCmDeliveryApiTradingStatusCor {
  orders_threshold: number;
  orders: number;
  invalid_cancel_orders: number;
  cancel_ratio_threshold: number;
  cancel_ratio: number;
  is_trigger: number;
  is_active: number;
}

/** API trading status TDN from GET /api/v1/contract_api_trading_status */
export interface FuturesCmDeliveryApiTradingStatusTdn {
  disables_threshold: number;
  disables: number;
  is_trigger: number;
  is_active: number;
}

/** API trading status from GET /api/v1/contract_api_trading_status */
export interface FuturesCmDeliveryApiTradingStatus {
  is_disable: number;
  order_price_types: string;
  disable_reason: string;
  disable_interval: number;
  recovery_time: number;
  COR: FuturesCmDeliveryApiTradingStatusCor;
  TDN: FuturesCmDeliveryApiTradingStatusTdn;
}

/** Leverage rate from POST /api/v1/contract_available_level_rate. Alias: getCmLeverageRate. */
export interface FuturesCmDeliveryLeverageRate {
  symbol: string;
  available_level_rate: string;
}

/** GET /api/v1/contract_open_interest */
export interface FuturesCmDeliveryContractOpenInterest {
  symbol: string;
  contract_type: string;
  contract_code: string;
  volume: number;
  amount: number;
  trade_amount: number;
  trade_volume: number;
  trade_turnover: number;
}

/** Delivery price from GET /api/v1/contract_delivery_price */
export interface FuturesCmDeliveryDeliveryPrice {
  delivery_price: number;
}

/** Estimated settlement price list item */
export interface FuturesCmDeliveryEstimatedSettlementPriceItem {
  contract_type: string;
  contract_code: string;
  estimated_settlement_price: number | null;
  settlement_type: string;
}

/** GET /api/v1/contract_estimated_settlement_price */
export interface FuturesCmDeliveryEstimatedSettlementPrice {
  symbol: string;
  list: FuturesCmDeliveryEstimatedSettlementPriceItem[];
}

/** GET /api/v1/contract_api_state */
export interface FuturesCmDeliveryApiState {
  symbol: string;
  open: number;
  close: number;
  cancel: number;
  transfer_in: number;
  transfer_out: number;
  master_transfer_sub: number;
  sub_transfer_master: number;
}

/** GET /api/v1/contract_contract_info */
export interface FuturesCmDeliveryContractInfo {
  symbol: string;
  contract_code: string;
  contract_type: string;
  contract_size: number;
  price_tick: number;
  delivery_date: string;
  create_date: string;
  settlement_time: string;
  delivery_time: string;
  contract_status: number;
}

/** GET /api/market/contract_constituents */
export interface FuturesCmDeliveryConstituents {
  symbol: string;
  ts: number;
  index_price: string;
  components: FuturesIndexConstituentComponent[];
}

/** Contract info sub-item in query elements */
export interface FuturesCmDeliveryQueryElementsContractInfo {
  contract_code: string;
  instrument_type: number | number[];
  create_date: string;
  contract_status: number;
  delivery_time: string;
  delivery_date: string;
}

/** Order limit in query elements */
export interface FuturesCmDeliveryQueryElementsOrderLimit {
  instrument_type: number;
  open: string;
  close: string;
  trigger_protect?: number;
}

/** GET /api/v1/contract_query_elements */
export interface FuturesCmDeliveryQueryElements {
  contract_code: string;
  instrument_index_code: string;
  real_time_settlement?: number;
  price_tick?: string;
  instrument_value?: string;
  transfer_profit_ratio?: number;
  min_level?: string;
  max_level?: string;
  open_order_limit?: string;
  offset_order_limit?: string;
  long_position_limit?: string;
  short_position_limit?: string;
  week_hig_normal_limit?: number;
  week_min_normal_limit?: number;
  week_hig_open_limit?: number;
  week_min_open_limit?: number;
  week_hig_trade_limit?: number;
  week_min_trade_limit?: number;
  biweek_hig_normal_limit?: number;
  biweek_min_normal_limit?: number;
  biweek_hig_open_limit?: number;
  biweek_min_open_limit?: number;
  biweek_hig_trade_limit?: number;
  biweek_min_trade_limit?: number;
  quarter_hig_normal_limit?: number;
  quarter_min_normal_limit?: number;
  quarter_hig_open_limit?: number;
  quarter_min_open_limit?: number;
  quarter_hig_trade_limit?: number;
  quarter_min_trade_limit?: number;
  biquarter_hig_normal_limit?: number;
  biquarter_min_normal_limit?: number;
  biquarter_hig_open_limit?: number;
  biquarter_min_open_limit?: number;
  biquarter_hig_trade_limit?: number;
  biquarter_min_trade_limit?: number;
  instrument_type?: number[];
  contract_infos?: FuturesCmDeliveryQueryElementsContractInfo[];
  order_limits?: FuturesCmDeliveryQueryElementsOrderLimit[];
}

/**
 * Copy Trading
 */

/** Lead trading instrument from GET /api/v6/copyTrading/trader/instruments */
export interface FuturesCopyTraderInstrument {
  instId: string;
  instType: string;
}

/** Profit detail item in trader statistics */
export interface FuturesCopyTraderProfitDetail {
  pnlRate: string;
  pnl: string;
  ts: string;
}

/** Trader lead trading metrics from GET /api/v6/copyTrading/trader/statistics */
export interface FuturesCopyTraderStatistics {
  instType: string;
  totalFollowerNum: string;
  curFollowerNum: string;
  totalPnl: string;
  followerTotalPnl: string;
  winRate: string;
  winNum: string;
  lossNum: string;
  profitDetails24h?: FuturesCopyTraderProfitDetail[];
  profitDetails90d: FuturesCopyTraderProfitDetail[];
}

/** Profit sharing history item from GET /api/v6/copyTrading/trader/profit-sharing-history */
export interface FuturesCopyTraderProfitSharingHistory {
  id: string;
  instType: string;
  followerName: string;
  ccy: string;
  profitSharingAmt: string;
  ts: string;
}

/** Profit sharing summary from GET /api/v6/copyTrading/trader/profit-sharing-history-summary or unrealized-profit-sharing-summary */
export interface FuturesCopyTraderProfitSharingSummary {
  instType: string;
  ccy: string;
  totalAmt: string;
}

/** Follower info from GET /api/v6/copyTrading/trader/followers */
export interface FuturesCopyTraderFollower {
  id: string;
  instType: string;
  followerAvatarLink: string;
  followerName: string;
  followerUid: string;
  followTime: string;
  followerAssetAmt: string;
  followerProfitSharingAmt: string;
  followerTradeAmt: string;
  totalProfitSharingAmt: string;
}

/** Remove follower result item from POST /api/v6/copyTrading/trader/follower */
export interface FuturesCopyTraderFollowerRemoveResult {
  followerUid: string;
  scode: string;
  smsg: string;
}

/** Lead trading config from GET /api/v6/copyTrading/trader/config or POST follower-settings */
export interface FuturesCopyTraderConfig {
  instType: string;
  enable: boolean;
  profitSharingRatio: string;
  maxFollowers: string;
}

/** Lead trading API key from POST /api/v6/copyTrading/trader/apikey */
export interface FuturesCopyTraderApikey {
  label: string;
  accessKey: string;
  secretKey: string;
  perm: string[];
  ts: string;
}
