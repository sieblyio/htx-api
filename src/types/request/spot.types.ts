/**
 * Reference Data
 */

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

export interface SpotGetDepthParams {
  /** Trading symbol (e.g. btcusdt) */
  symbol: string;
  /** Depth levels per side. 5, 10, 20, 30. Default 20. step0 uses 150 if omitted. */
  depth?: number;
  /** step0=no agg, step1-5=aggregation levels. Default step0. */
  type?: string;
}

/**
 * Account
 */ export interface SpotGetAssetValuationParams {
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

/**
 * Conditional Order
 */

/** Params for POST /v2/algo-orders (Place a conditional order). Conditional orders only via this endpoint, not Trading section. */
export interface SpotV2AlgoOrdersPlaceReq {
  /** Account ID. Spot, margin, super-margin. C2C margin not supported. */
  accountId?: number;
  /** Trading symbol */
  symbol?: string;
  /** Order price (invalid for market order) */
  orderPrice?: string;
  /** Order side: buy, sell */
  orderSide?: 'buy' | 'sell';
  /** Order size (invalid for market buy order) */
  orderSize?: string;
  /** Order value (only valid for market buy order) */
  orderValue?: string;
  /** Time in force: gtc, boc, ioc, fok. gtc=good till cancel, boc=book or cancel, ioc=immediate or cancel, fok=fill or kill. gtc for limit; ioc for market. */
  timeInForce?: 'gtc' | 'boc' | 'ioc' | 'fok';
  /** Order type: limit, market */
  orderType?: 'limit' | 'market';
  /** Client order ID (max 64 chars). Must be unique within 24h for same user. */
  clientOrderId?: string;
  /** Stop price */
  stopPrice?: string;
  /** Trailing rate [0.001-0.050]. Only valid for trailing stop order */
  trailingRate?: string;
}

export interface SpotV2AlgoOrdersOpeningReq {
  /** Account ID */
  accountId?: number;
  /** Trading symbol */
  symbol?: string;
  /** Order side: buy, sell */
  orderSide?: 'buy' | 'sell';
  /** Order type: limit, market */
  orderType?: 'limit' | 'market';
  /** Sort: asc, desc. Default desc */
  sort?: 'asc' | 'desc';
  /** Max items [1-500]. Default 100 */
  limit?: number;
  /** First record ID for next-page pagination */
  fromId?: number;
}

/** Params for GET /v2/algo-orders/history (Query conditional order history). orderStatus: canceled, rejected, triggered. */
export interface SpotV2AlgoOrdersHistoryReq {
  /** Account ID */
  accountId?: number;
  /** Trading symbol */
  symbol?: string;
  /** Order side: buy, sell */
  orderSide?: 'buy' | 'sell';
  /** Order type: limit, market */
  orderType?: 'limit' | 'market';
  /** Order status: canceled, rejected, triggered */
  orderStatus?: 'canceled' | 'rejected' | 'triggered';
  /** Start time (unix ms) */
  startTime?: number;
  /** End time (unix ms) */
  endTime?: number;
  /** Sort: asc, desc */
  sort?: 'asc' | 'desc';
  /** Max items [1-500] */
  limit?: number;
  /** First record ID for next-page pagination */
  fromId?: number;
}

/**
 * Margin Loan (Cross/Isolated)
 */

/** Params for GET /v2/account/repayment (Repayment Record Reference). Sorted by repayTime. */
export interface SpotRepaymentRecordReq {
  /** Repayment transaction ID */
  repayId?: string;
  /** Account ID. Default all accounts */
  accountId?: string;
  /** Borrowing/lending currency. Default all currencies */
  currency?: string;
  /** Start time (unix ms). Range: [(endTime – x D), endTime] */
  startTime?: number;
  /** End time (unix ms). Range: [(now – y D), now]. Default now */
  endTime?: number;
  /** Sort: asc, desc. Default desc */
  sort?: 'asc' | 'desc';
  /** Max items [1-100]. Default 50 */
  limit?: number;
  /** Search ID for next-page pagination */
  fromId?: number;
}

/** Params for POST /v2/account/repayment (Repay Margin Loan). Loan interest paid first if no transactId. */
export interface SpotMarginRepaymentReq {
  /** Repayment account ID */
  accountId?: string;
  /** Repayment currency */
  currency?: string;
  /** Repayment amount */
  amount?: string;
  /** Loan transaction ID. When specified, repay that loan; otherwise interest paid first. */
  transactId?: string;
}

/** Params for POST /v1/dw/transfer-in/margin (Transfer Spot -> Isolated Margin). */
export interface SpotMarginTransferInIsolatedReq {
  /** Trading symbol (e.g. btcusdt, ethusdt) */
  symbol?: string;
  /** Currency to transfer */
  currency?: string;
  /** Amount to transfer */
  amount?: string;
}

/** Params for POST /v1/dw/transfer-out/margin (Transfer Isolated Margin -> Spot). */
export interface SpotMarginTransferOutIsolatedReq {
  /** Trading symbol (e.g. btcusdt, ethusdt) */
  symbol?: string;
  /** Currency to transfer */
  currency?: string;
  /** Amount to transfer */
  amount?: string;
}

/** Params for GET /v1/margin/loan-info (Get Loan Interest Rate and Quota, Isolated) */
export interface SpotMarginLoanInfoReq {
  /** Trading symbols comma-separated (e.g. btcusdt,ethusdt). Use "all" for all. */
  symbols?: string;
}

/** Params for POST /v1/margin/orders (Request a Margin Loan, Isolated) */
export interface SpotMarginLoanOrderReq {
  /** Trading symbol to borrow margin (e.g. btcusdt, ethusdt) */
  symbol?: string;
  /** Currency to borrow */
  currency?: string;
  /** Amount to borrow (max 3 decimal places) */
  amount?: string;
}

/** Params for GET /v1/margin/loan-orders (Search Past Margin Orders, Isolated) */
export interface SpotMarginLoanOrdersReq {
  /** Trading symbol (e.g. btcusdt) */
  symbol?: string;
  /** Order states comma-separated: created, accrual, cleared, invalid, failed */
  states?: string;
  /** Start date yyyy-mm-dd. Default -61d */
  'start-date'?: string;
  /** End date yyyy-mm-dd. Default today */
  'end-date'?: string;
  /** Search order id to begin with */
  from?: string;
  /** Search direction when from is used: next, prev */
  direct?: 'next' | 'prev';
  /** Orders to return [1-100]. Default 100 */
  size?: number;
  /** Sub user ID (required when parent queries sub user's orders) */
  'sub-uid'?: number;
}

/** Params for GET /v1/cross-margin/loan-orders (Search Past Margin Orders, Cross) */
export interface SpotCrossMarginLoanOrdersReq {
  /** Start date yyyy-mm-dd. Default -61d */
  'start-date'?: string;
  /** End date yyyy-mm-dd. Default today */
  'end-date'?: string;
  /** Currency filter */
  currency?: string;
  /** Order state: created, accrual, cleared, invalid. Default all */
  state?: string;
  /** Search order id to begin with. Default 0 */
  from?: string;
  /** Search direction when from is used: next, prev. Default next */
  direct?: 'next' | 'prev';
  /** Orders to return [10-100]. Default 10 */
  size?: number;
  /** Sub user UID */
  'sub-uid'?: number;
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
