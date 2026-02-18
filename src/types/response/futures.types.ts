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
