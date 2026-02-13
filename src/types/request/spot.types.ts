/**
 * Reference Data
 */

export interface SpotGetTradingSymbolsParams {
  /** Timestamp for incremental data. Returns updates from ts to now. If no update, data is []. */
  ts?: number;
}

export interface SpotGetCurrenciesParams {
  /** Timestamp for incremental data. Returns updates from ts to now. If no update, data is []. */
  ts?: number;
}

/** Params for /v1/settings/common/currencys. Same as V2 (ts optional). */
export type SpotGetCurrencysSettingsParams = SpotGetCurrenciesParams;

/** Params for /v1/settings/common/symbols. Same as V2 (ts optional). */
export type SpotGetSymbolsSettingsParams = SpotGetTradingSymbolsParams;

/** Params for /v1/settings/common/market-symbols */
export interface SpotGetMarketSymbolsParams {
  /** Symbols. NA = all. Multiple comma-separated. */
  symbols?: string;
  /** Timestamp for incremental data. Returns updates from ts to now. If no update, data is []. */
  ts?: number;
}

/** Params for /v1/settings/common/chains */
export interface SpotGetChainsParams {
  /** Show desc: 0=no, 1=all, 2=suspend deposit/withdrawal and chain exchange */
  'show-desc'?: string;
  /** Currency filter */
  currency?: string;
  /** Timestamp for incremental data. Returns updates from ts to now. If no update, data is []. */
  ts?: number;
}

/** Params for /v2/reference/currencies */
export interface SpotGetReferenceCurrenciesParams {
  /** Currency filter (btc, ltc, usdt, etc) */
  currency?: string;
  /** Authorized user. Default true. */
  authorizedUser?: boolean;
}

/**
 * Market Data
 */

/** Params for /market/history/kline */
export interface SpotGetKlineParams {
  /** Trading symbol (e.g. btcusdt, btc3lusdtnav for ETP NAV) */
  symbol: string;
  /** Candle period. Default 1day. */
  period?: string;
  /** Number of data points [1-2000]. Default 150. */
  size?: number;
}

/** Params for /market/detail/merged */
export interface SpotGetMergedTickerParams {
  /** Trading symbol (e.g. btcusdt, ethusdt) */
  symbol: string;
}

/** Params for /market/depth */
export interface SpotGetDepthParams {
  /** Trading symbol (e.g. btcusdt) */
  symbol: string;
  /** Depth levels per side. 5, 10, 20, 30. Default 20. step0 uses 150 if omitted. */
  depth?: number;
  /** step0=no agg, step1-5=aggregation levels. Default step0. */
  type?: string;
}

/** Params for /market/trade */
export interface SpotGetTradeParams {
  /** Trading symbol (e.g. btcusdt) */
  symbol: string;
}

/** Params for /market/history/trade */
export interface SpotGetHistoryTradeParams {
  /** Trading symbol (e.g. btcusdt) */
  symbol: string;
  /** Number of data points [1-2000]. Default 1. */
  size?: number;
}

/** Params for /market/detail */
export interface SpotGetDetailParams {
  /** Trading symbol (e.g. btcusdt, ethusdt) */
  symbol: string;
}

/** Params for /market/fullMbp */
export interface SpotGetFullOrderbookParams {
  /** Trading symbol (e.g. btcusdt, ethusdt). Up to 5000 levels. */
  symbol: string;
}

/**
 * Account
 */

/** Params for /v1/account/accounts/{account-id}/balance */
export interface SpotGetAccountBalanceParams {
  /** Account ID from GET /v1/account/accounts */
  accountId: string;
}

/** Params for /v2/account/valuation */
export interface SpotGetValuationParams {
  /** Account type. See Account type data dictionary. */
  accountType?: string;
  /** Valuation currency. Default BTC. Must be capitalized. */
  valuationCurrency?: string;
}

/** Params for /v2/account/asset-valuation */
export interface SpotGetAssetValuationParams {
  /** Account type: spot, margin, otc, super-margin. Default spot. */
  accountType?: string;
  /** Valuation currency: BTC, CNY, USD, JPY, etc. Case sensitive. Default BTC. */
  valuationCurrency?: string;
  /** Sub user UID. Omit for API key owner. */
  subUid?: number;
}

/** Params for POST /v2/account/transfer - transfer between spot, linear-swap, otc, futures, swap */
export interface SpotV2AccountTransferParams {
  /** Source: spot, linear-swap, otc, futures, swap */
  from: string;
  /** Destination: spot, linear-swap, otc, futures, swap */
  to: string;
  /** Currency (e.g. usdt). Upper/lowercase supported. */
  currency: string;
  /** Transfer amount */
  amount: string;
  /** Margin account (e.g. btc-usdt, eth-usdt, USDT) */
  'margin-account': string;
}

/** Params for POST /v1/futures/transfer - transfer between spot and future contract account */
export interface SpotV1FuturesTransferParams {
  /** Currency name */
  currency: string;
  /** Amount to transfer */
  amount: string;
  /** futures-to-pro (contract -> spot) or pro-to-futures (spot -> contract) */
  type: 'futures-to-pro' | 'pro-to-futures';
}

/** Params for POST /v1/account/transfer */
export interface SpotAccountTransferParams {
  /** Transfer out user uid */
  'from-user': number;
  /** Transfer out account type: spot, margin */
  'from-account-type': string;
  /** Transfer out account id */
  'from-account': number;
  /** Transfer in user uid */
  'to-user': number;
  /** Transfer in account type: spot, margin */
  'to-account-type': string;
  /** Transfer in account id */
  'to-account': number;
  /** Currency name */
  currency: string;
  /** Amount to transfer */
  amount: string;
}

/** Params for POST /v1/account/fee/switch */
export interface SpotV1AccountFeeSwitchParams {
  /** 0: point card deduction, 1: currency deduction, 2: close deduction */
  switchType: 0 | 1 | 2;
  /** Required when switchType=1. Deduction currency (e.g. HTX, TRX) */
  deductionCurrency?: string;
}

/** Params for GET /v1/account/history */
export interface SpotGetAccountHistoryParams {
  /** Account ID from GET /v1/account/accounts */
  'account-id': string;
  /** Currency filter */
  currency?: string;
  /** Amount change types, comma-separated. Default all. */
  'transact-types'?: string;
  /** Start time (unix ms). Query window max 1 hour. */
  'start-time'?: number;
  /** End time (unix ms). Query window within 30 days. */
  'end-time'?: number;
  /** Sort order: asc, desc. Default asc. */
  sort?: string;
  /** Max items [1-500]. Default 100. */
  size?: number;
  /** First record ID for pagination (next page) */
  'from-id'?: number;
}

/** Params for GET /v2/point/account */
export interface SpotGetPointAccountParams {
  /** Sub user UID (parent querying sub user's point balance) */
  subUid?: string;
}

/** Params for POST /v2/point/transfer */
export interface SpotV2PointTransferParams {
  /** Transferer UID */
  fromUid: string;
  /** Transferee UID */
  toUid: string;
  /** Group ID. 0 = termless points. For terminable points, query sub user balance first. */
  groupId: number;
  /** Transfer amount (max 8 decimal places) */
  amount: string;
}

/** Params for GET /v2/account/ledger */
export interface SpotGetAccountLedgerParams {
  /** Account ID */
  accountId?: string;
  /** Currency. Default all. */
  currency?: string;
  /** Transaction types, comma-separated. Phase 1: transfer only. */
  transactTypes?: string;
  /** Start time (unix ms). Max 10-day window, within 180 days. */
  startTime?: number;
  /** End time (unix ms). */
  endTime?: number;
  /** Sort order: asc, desc. Deprecated. */
  sort?: string;
  /** Max items [1-500]. Default 100. */
  limit?: number;
  /** First record ID for pagination (next page) */
  fromId?: number;
}
