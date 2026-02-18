/**
 * Reference Data
 */

/** Account type data from swap_unified_account_type and swap_switch_account_type. 1: Non-unified; 2: Unified */
export interface FuturesAccountTypeData {
  /** 1: Non-unified account (cross-margin and isolated-margin account); 2: Unified account */
  account_type: 1 | 2;
}

/** Funding rate from swap_funding_rate and swap_batch_funding_rate */
export interface FuturesFundingRateData {
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
export interface FuturesHistoricalFundingRateItem {
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
export interface FuturesHistoricalFundingRatePage {
  total_page: number;
  current_page: number;
  total_size: number;
  data: FuturesHistoricalFundingRateItem[];
}

/** Liquidation order item from swap_liquidation_orders */
export interface FuturesLiquidationOrderItem {
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
export interface FuturesSettlementRecordItem {
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
export interface FuturesSettlementRecordsPage {
  total_page: number;
  current_page: number;
  total_size: number;
  settlement_record: FuturesSettlementRecordItem[];
}

/** Elite ratio list item (account and position) */
export interface FuturesEliteRatioListItem {
  buy_ratio: number;
  sell_ratio: number;
  /** Account ratio only */
  locked_ratio?: number;
  ts: number;
}

/** Elite account/position ratio data from swap_elite_account_ratio and swap_elite_position_ratio */
export interface FuturesEliteRatioData {
  symbol: string;
  contract_code: string;
  pair: string;
  business_type: string;
  list: FuturesEliteRatioListItem[];
}

/** System status item from swap_api_state. 1=available, 0=unavailable */
export interface FuturesApiStateItem {
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
export interface FuturesCrossLadderMarginListItem {
  lever_rate: number;
  ladders: FuturesLadderMarginTier[];
}

/** Cross tiered margin item from swap_cross_ladder_margin. Isolated (swap_ladder_margin) omits business_type, pair, contract_type. */
export interface FuturesCrossLadderMarginItem {
  margin_account: string;
  symbol: string;
  contract_code: string;
  margin_mode: string;
  list: FuturesCrossLadderMarginListItem[];
  business_type?: string;
  pair?: string;
  contract_type?: string;
}

/** Estimated settlement price item from swap_estimated_settlement_price. Empty around settlement/delivery. */
export interface FuturesEstimatedSettlementPriceItem {
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
export interface FuturesAdjustFactorListItem {
  lever_rate: number;
  ladders: FuturesAdjustFactorLadder[];
}

/** Tiered adjustment factor item from swap_adjustfactor and swap_cross_adjustfactor. Cross includes business_type, pair, contract_type. */
export interface FuturesAdjustFactorItem {
  symbol: string;
  contract_code: string;
  margin_mode: string;
  list: FuturesAdjustFactorListItem[];
  business_type?: string;
  pair?: string;
  contract_type?: string;
}

/** Risk reserve balance from /v1/insurance_fund_info */
export interface FuturesInsuranceFundInfoData {
  insurance_fund: string;
  quote_currency?: string;
}

/** Historical risk reserve item from /v1/insurance_fund_history */
export interface FuturesInsuranceFundHistoryItem {
  query_id: number;
  insurance_fund: string;
  date: string;
}

/** Price limit item from swap_price_limit */
export interface FuturesPriceLimitItem {
  symbol: string;
  contract_code: string;
  high_limit: number;
  low_limit: number;
  business_type: string;
  pair: string;
  contract_type: string;
}

/** Open interest item from swap_open_interest */
export interface FuturesOpenInterestItem {
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
export interface FuturesContractInfoItem {
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

/** Index price item from swap_index */
export interface FuturesIndexPriceItem {
  contract_code: string;
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

/** Index constituents data from swap_contract_constituents. data is object, not array. */
export interface FuturesIndexConstituentsData {
  contract_code: string;
  index_price: string;
  ts: number;
  components: FuturesIndexConstituentComponent[];
}

/** Contract elements price tick / value item */
export interface FuturesContractElementsPriceItem {
  business_type: number;
  price: string;
}

/** Contract elements order limit item */
export interface FuturesContractElementsOrderLimitItem {
  instrument_type: number;
  open: string;
  close: string;
  order_type?: number;
  open_after_closing?: string;
}

/** Contract elements contract info item */
export interface FuturesContractElementsContractInfoItem {
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
export interface FuturesContractElementsItem {
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
  price_ticks?: FuturesContractElementsPriceItem[];
  instrument_values?: FuturesContractElementsPriceItem[];
  order_limits?: FuturesContractElementsOrderLimitItem[];
  normal_limits?: Array<{
    instrument_type: number;
    open: string;
    close: string;
  }>;
  open_limits?: Array<{ instrument_type: number; open: string; close: string }>;
  trade_limits?: Array<{
    instrument_type: number;
    open: string;
    close: string;
  }>;
  contract_infos?: FuturesContractElementsContractInfoItem[];
}

/**
 * Market Data
 */

/** Market depth tick from /linear-swap-ex/market/depth. Payload in "tick". */
export interface FuturesMarketDepthTick {
  asks: [number, number][];
  bids: [number, number][];
  ch: string;
  id: number;
  mrid: number;
  ts: number;
  version: number;
}

/** BBO tick from /linear-swap-ex/market/bbo. ask/bid: [price, qty] */
export interface FuturesBboTick {
  contract_code: string;
  business_type: string;
  mrid: number;
  ask: [number, number];
  bid: [number, number];
  ts: number;
}

/** Kline item from /linear-swap-ex/market/history/kline */
export interface FuturesKline {
  id: number;
  vol: number;
  count: number;
  open: number;
  close: number;
  low: number;
  high: number;
  amount: number;
  trade_turnover: number;
}

/** Basis data item from /index/market/history/linear_swap_basis */
export interface FuturesBasisDataItem {
  id: number;
  contract_price: string;
  index_price: string;
  basis: string;
  basis_rate: string;
}

/** Mark price kline item. Also used for premium index and estimated rate kline. Price/vol fields as strings. */
export interface FuturesMarkPriceKlineItem {
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

/** Market overview tick from /linear-swap-ex/market/detail/merged. 24h summary + best bid/ask. Payload in "tick". */
export interface FuturesMarketOverviewTick {
  id: number;
  ts: number;
  amount: string;
  count: number;
  vol: string;
  open: string;
  close: string;
  low: string;
  high: string;
  trade_turnover: string;
  ask: [number, number];
  bid: [number, number];
}

/** Trade item from last trade and history trade */
export interface FuturesTradeItem {
  id: number;
  price: string | number;
  amount: string | number;
  direction: string;
  ts: number;
  quantity: string | number;
  contract_code?: string;
  business_type?: string;
  trade_turnover: string | number;
}

/** Last trade tick from /linear-swap-ex/market/trade. Payload in "tick". */
export interface FuturesLastTradeTick {
  id: number;
  ts: number;
  data: FuturesTradeItem[];
}

/** Trade history group from /linear-swap-ex/market/history/trade. Each group has trades by timestamp. */
export interface FuturesTradeHistoryGroup {
  id: number;
  ts: number;
  data: FuturesTradeItem[];
}

/** Open interest tick item from swap_his_open_interest */
export interface FuturesOpenInterestTickItem {
  volume: number;
  amount_type: number;
  ts: number;
  value: number;
}

/** Open interest data from swap_his_open_interest. data is object with tick array. */
export interface FuturesHistoricalOpenInterestData {
  symbol: string;
  contract_code: string;
  contract_type: string;
  pair: string;
  business_type: string;
  tick: FuturesOpenInterestTickItem[];
}

/** Batch market overview tick from /v2/linear-swap-ex/market/detail/batch_merged */
export interface FuturesMarketOverviewBatchTick {
  contract_code: string;
  business_type: string;
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

/**
 * Account
 */

/** Asset valuation item from swap_balance_valuation */
export interface FuturesBalanceValuationItem {
  valuation_asset: string;
  balance: string;
}

/** Isolated account info item from swap_account_info */
export interface FuturesIsolatedAccountInfoItem {
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
export interface FuturesCrossAccountInfoItem {
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
export interface FuturesPositionInfoItem {
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
export interface FuturesAccountPositionItem {
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
export interface FuturesIsolatedAccountPositionItem {
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
  positions: FuturesAccountPositionItem[];
  adl_risk_percent?: string | number;
}

/** Cross position item (in positions array) from swap_cross_account_position_info */
export interface FuturesCrossAccountPositionItem {
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
export interface FuturesCrossAccountPositionData {
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
  positions: FuturesCrossAccountPositionItem[];
  adl_risk_percent?: string | number;
}

/** Sub auth error from swap_sub_auth and swap_sub_auth_list */
export interface FuturesSubAuthError {
  sub_uid: string;
  err_code: number | string;
  err_msg: string;
}

/** Sub auth response data from swap_sub_auth */
export interface FuturesSubAuthData {
  errors: FuturesSubAuthError[];
  successes: string;
}

/** Sub auth success item from swap_sub_auth_list */
export interface FuturesSubAuthSuccessItem {
  query_id?: number;
  sub_uid: string;
  sub_auth: number | string;
}

/** Sub auth list response data */
export interface FuturesSubAuthListData {
  errors: FuturesSubAuthError[];
  successes: FuturesSubAuthSuccessItem[];
}

/** Isolated sub-account list item from swap_sub_account_list */
export interface FuturesIsolatedSubAccountListItem {
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
  list: FuturesIsolatedSubAccountListItem[];
}

/** Cross sub-account list item from swap_cross_sub_account_list */
export interface FuturesCrossSubAccountListItem {
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
  list: FuturesCrossSubAccountListItem[];
  asset_multi_sub: FuturesCrossSubAccountAssetMultiSub | null;
}

/** Account info item from swap_sub_account_info_list */
export interface FuturesSubAccountInfoAccountItem {
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
export interface FuturesSubAccountInfoSubItem {
  sub_uid: number;
  account_info_list: FuturesSubAccountInfoAccountItem[];
}

/** Data object from swap_sub_account_info_list */
export interface FuturesSubAccountInfoListData {
  total_page: number;
  current_page: number;
  total_size: number;
  sub_list: FuturesSubAccountInfoSubItem[];
}

/** Cross sub-account info list: account_info_list item (no symbol/contract_code) */
export interface FuturesCrossSubAccountInfoListAccountItem {
  margin_mode: string;
  margin_account: string;
  margin_asset: string;
  margin_balance: number;
  risk_rate: number | string | null;
  trade_partition?: string;
}

/** Cross sub-account info list: sub_list item */
export interface FuturesCrossSubAccountInfoListSubItem {
  sub_uid: number;
  account_info_list: FuturesCrossSubAccountInfoListAccountItem[];
}

/** Cross sub-account info list: unite_sub_list item */
export interface FuturesCrossSubAccountInfoListUniteItem {
  sub_uid: number;
  asset_multi_sub: FuturesCrossSubAccountAssetMultiSub;
}

/** Data object from swap_cross_sub_account_info_list */
export interface FuturesCrossSubAccountInfoListData {
  total_page: number;
  current_page: number;
  total_size: number;
  sub_list: FuturesCrossSubAccountInfoListSubItem[];
  unite_sub_list: FuturesCrossSubAccountInfoListUniteItem[];
}

/** Isolated sub-account info item from swap_sub_account_info (single sub, data array element) */
export interface FuturesIsolatedSubAccountInfoItem {
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
export interface FuturesCrossSubAccountInfoItem {
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
export interface FuturesFinancialRecordItem {
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
export interface FuturesAvailableLevelRateItem {
  contract_code: string;
  margin_mode: string;
  available_level_rate: string;
}

/** Available leverage item from swap_cross_available_level_rate */
export interface FuturesCrossAvailableLevelRateItem {
  contract_code: string;
  margin_mode: string;
  available_level_rate: string;
  contract_type: string;
  pair: string;
  business_type: string;
}

/** Order limit list item from swap_order_limit */
export interface FuturesOrderLimitListItem {
  symbol: string;
  contract_code: string;
  open_limit: number;
  close_limit: number;
  contract_type: string;
  pair: string;
  business_type: string;
}

/** Data from swap_order_limit */
export interface FuturesOrderLimitData {
  order_price_type: string;
  list: FuturesOrderLimitListItem[];
}

/** Fee item from swap_fee */
export interface FuturesFeeItem {
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
export interface FuturesTransferLimitItem {
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
export interface FuturesCrossTransferLimitItem {
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
export interface FuturesPositionLimitItem {
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
export interface FuturesCrossPositionLimitItem {
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
export interface FuturesLeverPositionLimitListItem {
  lever_rate: number;
  buy_limit_value: number;
  sell_limit_value: number;
}

/** Lever position limit item from swap_lever_position_limit */
export interface FuturesLeverPositionLimitItem {
  symbol: string;
  contract_code: string;
  margin_mode: string;
  list: FuturesLeverPositionLimitListItem[];
}

/** Lever position limit item from swap_cross_lever_position_limit */
export interface FuturesCrossLeverPositionLimitItem {
  symbol: string;
  contract_code: string;
  margin_mode: string;
  business_type: string;
  contract_type: string;
  pair: string;
  list: FuturesLeverPositionLimitListItem[];
}

/** Master-sub transfer response data from swap_master_sub_transfer */
export interface FuturesMasterSubTransferData {
  order_id: string;
  client_order_id?: number;
}

/** Transfer record item from swap_master_sub_transfer_record */
export interface FuturesMasterSubTransferRecordItem {
  id: number;
  ts: number;
  asset: string;
  margin_account: string;
  from_margin_account: string;
  to_margin_account: string;
  sub_uid: string;
  sub_account_name: string;
  transfer_type: number;
  amount: number | string;
}

/** Data from swap_master_sub_transfer_record */
export interface FuturesMasterSubTransferRecordData {
  total_page: number;
  current_page: number;
  total_size: number;
  transfer_record: FuturesMasterSubTransferRecordItem[];
}
