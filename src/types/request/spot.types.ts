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

/** Params for GET /v2/reference/transact-fee-rate. Max 10 symbols. */
export interface SpotGetTransactFeeRateParams {
  /** Trading symbols comma-separated (e.g. btcusdt, ethusdt). Max 10 */
  symbols: string;
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

/**
 * Trading
 */

/** Order type: direction-type. market=no price; limit=price+amount; limit-maker=maker only; ioc=immediately or cancel; limit-fok=fill or kill; stop-*=trigger price */
export type SpotOrderType =
  | 'buy-market'
  | 'sell-market'
  | 'buy-limit'
  | 'sell-limit'
  | 'buy-ioc'
  | 'sell-ioc'
  | 'buy-limit-maker'
  | 'sell-limit-maker'
  | 'buy-stop-limit'
  | 'sell-stop-limit'
  | 'buy-limit-fok'
  | 'sell-limit-fok'
  | 'buy-stop-limit-fok'
  | 'sell-stop-limit-fok';

/** Order source: spot-api, margin-api, super-margin-api, c2c-margin-api */
export type SpotOrderSource =
  | 'spot-api'
  | 'margin-api'
  | 'super-margin-api'
  | 'c2c-margin-api';

/** Params for POST /v1/order/orders/place */
export interface SpotV1OrderPlaceParams {
  /** Account ID from GET /v1/account/accounts. Required for trading. */
  'account-id': string;
  /** Trading symbol (e.g. ethusdt) */
  symbol: string;
  /** Order type (e.g. buy-limit, sell-market) */
  type: SpotOrderType;
  /** Order size. For buy-market = order value in quote currency. */
  amount: string;
  /** Order price. Not used for market orders. Required for limit types. */
  price?: string;
  /** Order source. Default spot-api */
  source?: SpotOrderSource;
  /** Client order ID. Max 64 chars. Valid 8h for open, 2h for completed. */
  'client-order-id'?: string;
  /** 0=allow self-trade, 1=prevent. Default 0 */
  'self-match-prevent'?: 0 | 1;
  /** Trigger price for stop-limit orders */
  'stop-price'?: string;
  /** Operator for stop price (lte, gte, etc) */
  operator?: string;
}

/** Batch of orders for POST /v1/order/batch-orders. Max 10 orders. */
export type SpotV1OrderBatchPlaceParams = SpotV1OrderPlaceParams[];

/** Margin order with auto borrow/repay for POST /v1/order/auto/place. Sub-accounts not supported. */
export interface SpotV1OrderAutoPlaceParams {
  symbol: string;
  'account-id': string;
  type: SpotOrderType;
  /** 1: automatic loan, 2: automatic repayment */
  'trade-purpose': '1' | '2';
  source: SpotOrderSource;
  /** Order volume. For market buy = order value. Use amount or market-amount, not both. */
  amount?: string;
  /** Market buy = order volume, market sell = order amount. Use amount or market-amount, not both. */
  'market-amount'?: string;
  /** Amount/quantity to borrow when trade-purpose=1. Max 3 decimal precision. */
  'borrow-amount'?: string;
  price?: string;
  'stop-price'?: string;
  operator?: string;
}

/** Params for POST /v1/order/orders/{order-id}/submitcancel. order-id in path. */
export interface SpotV1OrderCancelParams {
  /** Order ID to cancel (path param) */
  orderId: string;
  /** Symbol (e.g. btcusdt). Sent in request body. */
  symbol?: string;
}

/** Params for POST /v1/order/orders/submitCancelClientOrder */
export interface SpotV1OrderCancelByClientOrderIdParams {
  /** Client order ID to cancel */
  'client-order-id': string;
}

/** Params for GET /v1/order/cancelAllOrders */
export interface SpotV1OrderCancelAllParams {
  /** Comma-separated symbols. Omit or empty = cancel all spot orders. */
  symbol?: string;
}

/** Params for POST /v1/order/orders/batchCancelOpenOrders */
export interface SpotV1OrderBatchCancelOpenOrdersParams {
  /** Account ID from GET /v1/account/accounts */
  'account-id'?: string;
  /** Comma-separated symbols (max 10). Default all */
  symbol?: string;
  /** Order types comma-separated */
  types?: string;
  /** Filter: buy, sell */
  side?: 'buy' | 'sell';
  /** Orders to cancel [1-100]. Default 100 */
  size?: number;
}

/** Params for POST /v1/order/orders/batchcancel. Use order-ids or client-order-ids (max 50 each). */
export interface SpotV1OrderBatchCancelParams {
  /** Order IDs to cancel. Prefer over client-order-ids. Max 50 */
  'order-ids'?: string[];
  /** Client order IDs to cancel. Max 50 */
  'client-order-ids'?: string[];
}

/** Params for GET /v1/order/orders/{order-id} */
export interface SpotGetOrderDetailParams {
  /** Order ID (path param) */
  orderId: string;
}

/** Params for GET /v1/order/orders/getClientOrder */
export interface SpotGetOrderByClientOrderIdParams {
  /** Client order ID */
  clientOrderId: string;
}

/** Params for GET /v1/order/orders (search past orders) */
export interface SpotGetOrderHistoryParams {
  /** Trading symbol (required) */
  symbol: string;
  /** Order types comma-separated */
  types?: string;
  /** Start time (unix ms). Max 48h window. */
  'start-time'?: number;
  /** End time (unix ms). Max 48h window, within 180 days. */
  'end-time'?: number;
  /** States: filled, partial-canceled, canceled (comma-separated, required) */
  states: string;
  /** Start order ID for pagination */
  from?: string;
  /** next=desc, prev=asc. Default both */
  direct?: 'next' | 'prev';
  /** Orders to return [1-100]. Default 100 */
  size?: number;
}

/** Params for GET /v1/order/history (48h historical orders) */
export interface SpotGetOrderHistory48hParams {
  /** Trading symbol */
  symbol?: string;
  /** Start time (unix ms). Default 48h ago */
  'start-time'?: number;
  /** End time (unix ms). Default now */
  'end-time'?: number;
  /** prev=asc, next=desc. Default next */
  direct?: 'prev' | 'next';
  /** Items per response [10-1000]. Default 100 */
  size?: number;
}

/** Params for GET /v1/order/matchresults (search match results) */
export interface SpotGetMatchResultsParams {
  /** Trading symbol */
  symbol?: string;
  /** Order types comma-separated */
  types?: string;
  /** Start time (unix ms). 48h window, 120 days range */
  'start-time'?: number;
  /** End time (unix ms). 48h window */
  'end-time'?: number;
  /** Internal id to begin pagination (use last id of prev page) */
  from?: string;
  /** next or prev. Default next */
  direct?: 'next' | 'prev';
  /** Items to return [1-500]. Default 100 */
  size?: number;
}

/** Params for GET /v1/order/openOrders */
export interface SpotGetOpenOrdersParams {
  /** Account ID from GET /v1/account/accounts */
  'account-id'?: string;
  /** Trading symbol (e.g. ethusdt) */
  symbol?: string;
  /** Filter: buy, sell */
  side?: 'buy' | 'sell';
  /** Order types comma-separated */
  types?: string;
  /** Start order ID for pagination */
  from?: string;
  /** prev=asc from start, next=desc from start */
  direct?: 'prev' | 'next';
  /** Orders to return [1-500]. Default 100 */
  size?: number;
}

/** Params for POST /v2/algo-orders/cancel-all-after (Dead man's switch). 0=off, >=5=on with timeout seconds */
export interface SpotV2AlgoOrdersCancelAllAfterParams {
  /** Timeout in seconds. 0=turn off, >=5=turn on. Must ping twice within timeout or all spot orders (max 500) are canceled. */
  timeout: number;
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
