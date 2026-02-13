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
