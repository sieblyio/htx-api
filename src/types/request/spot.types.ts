/**
 * Reference Data
 */

export interface SpotGetChainsReq {
  /** Show desc: 0=no, 1=all, 2=suspend deposit/withdrawal and chain exchange */
  'show-desc'?: string;
  /** Currency filter */
  currency?: string;
  /** Timestamp for incremental data. Returns updates from ts to now. If no update, data is []. */
  ts?: number;
}

/** Req for /v2/reference/currencies */
export interface SpotGetReferenceCurrenciesReq {
  /** Currency filter (btc, ltc, usdt, etc) */
  currency?: string;
  /** Authorized user. Default true. */
  authorizedUser?: boolean;
}

/**
 * Market Data
 */

/** Req for /market/history/kline */
export interface SpotGetKlineReq {
  /** Trading symbol (e.g. btcusdt, btc3lusdtnav for ETP NAV) */
  symbol: string;
  /** Candle period. Default 1day. */
  period?: string;
  /** Number of data points [1-2000]. Default 150. */
  size?: number;
}

export interface SpotGetDepthReq {
  /** Trading symbol (e.g. btcusdt) */
  symbol: string;
  /** Depth levels per side. 5, 10, 20, 30. Default 20. step0 uses 150 if omitted. */
  depth?: number;
  /** step0=no agg, step1-5=aggregation levels. Default step0. */
  type?: string;
}

/**
 * Account
 */ export interface SpotGetAssetValuationReq {
  /** Account type: spot, margin, otc, super-margin. Default spot. */
  accountType?: string;
  /** Valuation currency: BTC, CNY, USD, JPY, etc. Case sensitive. Default BTC. */
  valuationCurrency?: string;
  /** Sub user UID. Omit for API key owner. */
  subUid?: number;
}

/** Req for POST /v2/account/transfer - transfer between spot, linear-swap, otc, futures, swap */
export interface SpotV2AccountTransferReq {
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

/** Req for POST /v1/futures/transfer - transfer between spot and future contract account */
export interface SpotV1FuturesTransferReq {
  /** Currency name */
  currency: string;
  /** Amount to transfer */
  amount: string;
  /** futures-to-pro (contract -> spot) or pro-to-futures (spot -> contract) */
  type: 'futures-to-pro' | 'pro-to-futures';
}

/** Req for POST /v1/account/transfer */
export interface SpotAccountTransferReq {
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

/** Req for GET /v1/account/history */
export interface SpotGetAccountHistoryReq {
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

export interface SpotV2PointTransferReq {
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

/** Req for POST /v1/order/orders/place */
export interface SpotV1OrderPlaceReq {
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
export type SpotV1OrderBatchPlaceReq = SpotV1OrderPlaceReq[];

/** Margin order with auto borrow/repay for POST /v1/order/auto/place. Sub-accounts not supported. */
export interface SpotV1OrderAutoPlaceReq {
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

/** Req for POST /v1/order/orders/batchCancelOpenOrders */
export interface SpotV1OrderBatchCancelOpenOrdersReq {
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
/** Req for GET /v1/order/orders (search past orders) */
export interface SpotGetOrderHistoryReq {
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

/** Req for GET /v1/order/history (48h historical orders) */
export interface SpotGetOrderHistory48hReq {
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

/** Req for GET /v1/order/matchresults (search match results) */
export interface SpotGetMatchResultsReq {
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

/** Req for GET /v1/order/openOrders */
export interface SpotGetOpenOrdersReq {
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

/** Req for POST /v2/algo-orders (Place a conditional order). Conditional orders only via this endpoint, not Trading section. */
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

/** Req for GET /v2/algo-orders/history (Query conditional order history). orderStatus: canceled, rejected, triggered. */
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

/** Req for GET /v2/account/repayment (Repayment Record Reference). Sorted by repayTime. */
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

/** Req for POST /v2/account/repayment (Repay Margin Loan). Loan interest paid first if no transactId. */
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

/** Req for POST /v1/dw/transfer-in/margin (Transfer Spot -> Isolated Margin). */
export interface SpotMarginTransferInIsolatedReq {
  /** Trading symbol (e.g. btcusdt, ethusdt) */
  symbol?: string;
  /** Currency to transfer */
  currency?: string;
  /** Amount to transfer */
  amount?: string;
}

/** Req for POST /v1/dw/transfer-out/margin (Transfer Isolated Margin -> Spot). */
export interface SpotMarginTransferOutIsolatedReq {
  /** Trading symbol (e.g. btcusdt, ethusdt) */
  symbol?: string;
  /** Currency to transfer */
  currency?: string;
  /** Amount to transfer */
  amount?: string;
}

/** Req for GET /v1/margin/loan-info (Get Loan Interest Rate and Quota, Isolated) */
export interface SpotMarginLoanInfoReq {
  /** Trading symbols comma-separated (e.g. btcusdt,ethusdt). Use "all" for all. */
  symbols?: string;
}

/** Req for POST /v1/margin/orders (Request a Margin Loan, Isolated) */
export interface SpotMarginLoanOrderReq {
  /** Trading symbol to borrow margin (e.g. btcusdt, ethusdt) */
  symbol?: string;
  /** Currency to borrow */
  currency?: string;
  /** Amount to borrow (max 3 decimal places) */
  amount?: string;
}

/** Req for GET /v1/margin/loan-orders (Search Past Margin Orders, Isolated) */
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

/** Req for GET /v1/cross-margin/loan-orders (Search Past Margin Orders, Cross) */
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

/** Req for GET /v2/account/deposit/address. Query deposit address. */
export interface SpotDepositAddressReq {
  /** Crypto currency. Omit for all. */
  currency?: string;
}

/** Req for GET /v2/account/withdraw/quota. Query withdraw quota. */
export interface SpotWithdrawQuotaReq {
  /** Crypto currency. Omit for all. */
  currency?: string;
}

/** Req for POST /v1/dw/withdraw/api/create. Create withdraw request. */
export interface SpotWithdrawCreateReq {
  /** Destination address. Or UID:1234567, PHONE:xxx, MAIL:xxx for internal. */
  address: string;
  /** Crypto currency */
  currency: string;
  /** Amount to withdraw */
  amount: string;
  /** Fee. Use 0 for UID withdraw. */
  fee?: number;
  /** Chain. Required for UID. Required for multi-chain coins. */
  chain?: string;
  /** Address tag. For UID withdraw, use recipient UID. */
  'addr-tag'?: string;
  /** Client order id for idempotency (max 32 char) */
  'client-order-id'?: string;
  /** Exchange VASP id from /v1/query/vasp-list */
  'exchange-vasp'?: string;
  /** Recipient name for Korean/English: "SURNAME##FIRSTNAME" */
  'user-name-vasp'?: string;
}

/** Req for GET /v1/query/withdraw/client-order-id. Query withdraw by client order id. */
export interface SpotWithdrawByClientOrderIdReq {
  /** Client order id (max 32 char) */
  clientOrderId: string;
}

/** Req for GET /v1/query/deposit-withdraw. Search deposit/withdraw records. */
export interface SpotDepositWithdrawQueryReq {
  /** Crypto currency. Omit for all. */
  currency?: string;
  /** deposit or withdraw */
  type: 'deposit' | 'withdraw';
  /** Transfer id to begin search */
  from?: string;
  /** Items to return [1-50]. Default 50. */
  size?: string;
  /** prev (asc) or next (desc). Default next. */
  direct?: 'prev' | 'next';
}

/** Req for GET /v2/account/withdraw/address. Query withdraw address. */
export interface SpotWithdrawAddressReq {
  /** Crypto currency. Use "t247117" for universal address. */
  currency?: string;
  /** Block chain name. Omit for all chains. */
  chain?: string;
  /** Note of withdraw address. Omit for all. */
  note?: string;
  /** Items to return [1-500]. Default 100. */
  limit?: number;
  /** First record ID for next page. */
  fromId?: number;
}

/** Req for GET /broker/v1/user_rebate_status. Check user rebate eligibility. */
export interface SpotBrokerUserRebateStatusReq {
  /** User UID to check */
  queryUid: string;
}

/** Req for GET /broker/v1/sub-user/fee_rate. Broker sub-account commission. */
export interface SpotBrokerSubUserFeeRateReq {
  /** Sub-account id (user_id, UID minus last digit) */
  subUId: string;
  /** 1 Spot, 2 U-standard linear, 3 Coin-Margined swap */
  bizType: string;
}

/** Req for POST /broker/v1/sub-user/fee_rate/add. Set sub-user trading fee rate. */
export interface SpotBrokerSubUserFeeRateAddReq {
  /** Sub-account ids, max 10 */
  subUids: number[];
  /** 0 all, 1 Spot, 2 U-standard linear, 3 Coin-Margined swap */
  bizType: number;
  /** Type: 1 fixed (0.001-0.5), 2 percent (1-1000) */
  type: number;
  /** Additional taker fee. Either taker or maker required. */
  taker?: string;
  /** Additional maker fee. Either taker or maker required. */
  maker?: string;
  /** YYYYMMDD effect date. Omit for T+1. */
  effectAt?: string;
}

/** Req for POST /broker/v1/account_capital_snapshot_everyday. Account asset snapshot. */
export interface SpotBrokerAccountCapitalSnapshotReq {
  /** Account type: spot, margin-api, super-margin-api, delivery, swap, linear */
  account_type: string;
  /** Start time (ms). Omit with end_time for last 7 days. */
  start_time?: number;
  /** End time (ms). Max 30 days from start. */
  end_time?: number;
}

/** Req for POST /v2/sub-user/tradable-market. Set tradable market for sub users. */
export interface SpotSubUserTradableMarketReq {
  /** Sub user UIDs, comma-separated, max 50 */
  subUids: string;
  /** isolated-margin or cross-margin */
  accountType: 'isolated-margin' | 'cross-margin';
  /** activated or deactivated */
  activation: 'activated' | 'deactivated';
}

/** Req for setSubUserTransferPermissions. Set asset transfer permission. */
export interface SpotSubUserTransferPermissionsReq {
  /** Sub user UIDs, comma-separated, max 50 */
  subUids: string;
  /** true or false */
  transferrable: boolean;
  /** Account type. Default spot. */
  accountType?: 'spot';
}

/** Req for POST /v1/subuser/transfer. Transfer asset between parent and sub account. */
export interface SpotSubUserTransferReq {
  /** Sub account UID */
  'sub-uid': number;
  /** Currency e.g. btc, usdt */
  currency: string;
  /** Amount to transfer */
  amount: string;
  /** master-transfer-in, master-transfer-out, master-point-transfer-in, master-point-transfer-out */
  type:
    | 'master-transfer-in'
    | 'master-transfer-out'
    | 'master-point-transfer-in'
    | 'master-point-transfer-out';
  /** Client order id for idempotency */
  'client-order-id'?: string;
}

/** Req for getSubUserDepositHistory. Query sub user deposit history. */
export interface SpotSubUserDepositHistoryReq {
  /** Sub user UID */
  subUid: number;
  /** Crypto currency. Omit for all. */
  currency?: string;
  /** Start time (ms). Default endTime - 30 days. */
  startTime?: number;
  /** End time (ms). Default now. */
  endTime?: number;
  /** asc or desc */
  sort?: 'asc' | 'desc';
  /** Items per page [1-500]. Default 100. */
  limit?: number;
  /** First record ID for next page. */
  fromId?: number;
}

/** Req for GET /v2/sub-user/managed-transfer-history. Managed sub-account transfer history. */
export interface SpotSubUserManagedTransferHistoryReq {
  /** Sub user UID. Omit for all managed sub-accounts. */
  uid?: number;
  /** Currency filter */
  currency?: string;
  /** 0: master to sub, 1: sub to master */
  type?: string;
  /** Start time (ms). Max 48h window, within 120 days. */
  startTime?: number;
  /** End time (ms). */
  endTime?: number;
  /** Search id to begin with. */
  from?: string;
  /** next or prev. Default next. */
  direct?: 'next' | 'prev';
  /** Items to return [1-100]. Default 100. */
  size?: string;
}

/** Req for createSubUserApiKey. Create sub user API key. */
export interface SpotSubUserApiKeyCreationReq {
  /** Sub user UID */
  subUid: number;
  /** Google OTP (6 digits) if parent has 2FA */
  otpToken?: string;
  /** API key note, max 255 chars */
  note?: string;
  /** readOnly, trade. readOnly required. Comma-separated. */
  permission?: string;
  /** IP addresses, comma-separated, max 20 */
  ipAddresses?: string;
}

/** Req for updateSubUserApiKey. Modify sub user API key. */
export interface SpotSubUserApiKeyUpdateReq {
  /** Sub user UID */
  subUid: number;
  /** Access key to modify */
  accessKey: string;
  /** API key note, max 255 chars */
  note?: string;
  /** readOnly, trade. Comma-separated. */
  permission?: string;
  /** IP addresses, comma-separated, max 20 */
  ipAddresses?: string;
}

/** Req for POST /v2/sub-user/creation. Create sub users. */
export interface SpotSubUserCreationReq {
  /** Sub users to create, max 50 */
  userList: Array<{ userName: string; note?: string }>;
  /** GENERAL (default), CONTACT, GRID, FIRE-BLOCK */
  subAccountType?: string;
}

/** Req for GET /v2/account/ledger */
export interface SpotGetAccountLedgerReq {
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
