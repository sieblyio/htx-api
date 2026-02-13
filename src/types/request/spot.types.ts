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
