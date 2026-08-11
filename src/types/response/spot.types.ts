/**
 * Reference Data
 */

/** Status page response from status.huobigroup.com */
export interface SpotSystemStatusPage {
  page: {
    id: string;
    name: string;
    url: string;
    time_zone: string;
    updated_at: string;
  };
  components: {
    id: string;
    name: string;
    status: string;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
  }[];
  incidents:
    | {
        id: string;
        name: string;
        status: string;
        created_at: string;
        updated_at: string;
        [key: string]: unknown;
      }[]
    | null;
  scheduled_maintenances:
    | {
        id: string;
        name: string;
        status: string;
        created_at: string;
        updated_at: string;
        scheduled_for: string;
        scheduled_until: string;
        [key: string]: unknown;
      }[]
    | null;
  status: {
    indicator: 'none' | 'minor' | 'major' | 'critical' | 'maintenance';
    description: string;
  };
}

/** Market status: 1=normal, 2=halted, 3=cancel-only */
export type SpotMarketStatus = 1 | 2 | 3;

/** Halt reason: 2=emergency-maintenance, 3=scheduled-maintenance */
export type SpotHaltReason = 2 | 3;

export interface SpotMarketStatusData {
  marketStatus: SpotMarketStatus;
  haltStartTime?: number;
  haltEndTime?: number;
  haltReason?: SpotHaltReason;
  affectedSymbols?: string;
}

export interface SpotMarketStatusResponse {
  code: number;
  message: string;
  data: SpotMarketStatusData;
}

/** Trading symbol from /v2/settings/common/symbols */
export interface SpotTradingSymbol {
  sc: string;
  si?: string;
  scr?: string;
  dn: string;
  bc: string;
  bcdn: string;
  qc: string;
  qcdn: string;
  state: string;
  whe?: boolean;
  cd?: boolean;
  te?: boolean;
  toa?: number;
  sp?: string;
  w?: number;
  ttp?: number;
  tap?: number;
  tpp?: number;
  fp?: number;
  suspend_desc?: string;
  transfer_board_desc?: string;
  tags?: string;
  lr?: number | null;
  smlr?: number | null;
  flr?: string | null;
  wr?: string | null;
  d?: number | null;
  elr?: string | null;
  /** Whether the symbol supports RPI trading */
  enable_rpi?: boolean | number | string;
  p?: { id?: number; name?: string; weight?: number }[];
}

export interface SpotCurrency {
  cc: string;
  dn: string;
  fn: string;
  at?: number;
  wp?: number;
  ft?: string;
  dma?: string;
  wma?: string;
  sp?: string;
  w?: number;
  qc?: boolean;
  state?: string;
  v?: boolean;
  whe?: boolean;
  cd?: boolean;
  de?: boolean;
  wed?: boolean;
  cawt?: boolean;
  fc?: number;
  sc?: number;
  swd?: string | null;
  wd?: string | null;
  sdd?: string | null;
  dd?: string | null;
  svd?: string | null;
  tags?: string;
}

/** Currency settings item from /v1/settings/common/currencys */
export interface SpotV1CurrencySettings {
  name: string;
  dn?: string;
  vat?: number;
  det?: number;
  wet?: number;
  wp?: number;
  ct?: string;
  cp?: string;
  ss?: string[];
  oe?: number;
  dma?: string;
  wma?: string;
  sp?: string;
  w?: number | string;
  qc?: boolean;
  state?: string;
  v?: boolean;
  whe?: boolean;
  cd?: boolean;
  de?: boolean;
  we?: boolean;
  cawt?: boolean;
  cao?: boolean;
  fc?: number;
  sc?: number;
  swd?: string | null;
  wd?: string | null;
  sdd?: string | null;
  dd?: string | null;
  svd?: string | null;
  tags?: string;
  fn?: string;
  bc?: string;
  iqc?: boolean;
}

/** Symbol settings item from /v1/settings/common/symbols */
export interface SpotV1SymbolSettings {
  symbol: string;
  sn?: string;
  bc?: string;
  qc?: string;
  state?: string;
  ve?: boolean;
  we?: boolean;
  dl?: boolean;
  cd?: boolean;
  te?: boolean;
  ce?: boolean;
  tet?: number;
  toa?: number;
  tca?: number;
  voa?: number;
  vca?: number;
  sp?: string;
  tm?: string;
  w?: number | string;
  ttp?: number;
  tap?: number;
  tpp?: number;
  fp?: number;
  tags?: string;
  d?: unknown;
  bcdn?: string;
  qcdn?: string;
  elr?: string | null;
  castate?: string;
  ca1oa?: number;
  ca1ca?: number;
  ca2oa?: number;
  ca2ca?: number;
}

/** Market symbol settings item from /v1/settings/common/market-symbols */
export interface SpotV1MarketSymbolSettings {
  symbol: string;
  bc?: string;
  qc?: string;
  state?: string;
  sp?: string;
  tags?: string;
  lr?: number;
  smlr?: number;
  pp?: number;
  ap?: number;
  vp?: number;
  /** @deprecated No longer valid. */
  minoa?: number | string;
  maxoa?: number | string;
  minov?: number | string;
  /** @deprecated No longer valid. */
  lominoa?: number | string;
  lomaxoa?: number | string;
  lomaxba?: number | string;
  lomaxsa?: number | string;
  /** @deprecated No longer valid. */
  smminoa?: number | string;
  smmaxoa?: number | string;
  bmmaxov?: number | string;
  blmlt?: number | string;
  slmgt?: number | string;
  msormlt?: number | string;
  mbormlt?: number | string;
  at?: string;
  u?: string;
  mfr?: number | string;
  ct?: string;
  rt?: string;
  rthr?: number | string;
  in?: number | string;
  maxov?: number | string;
  flr?: number | string;
  castate?: string;
}

/** Chain info item from /v1/settings/common/chains */
export interface SpotV1ChainInfo {
  chain?: string;
  currency?: string;
  code?: string;
  ct?: string;
  ac?: string;
  default?: number;
  dma?: string;
  wma?: string;
  de?: boolean;
  we?: boolean;
  wp?: number;
  ft?: string;
  dn?: string;
  fn?: string;
  awt?: boolean;
  adt?: boolean;
  ao?: boolean;
  fc?: number;
  sc?: number;
  v?: boolean;
  sda?: string | null;
  swa?: string | null;
  'deposit-desc'?: string;
  'deposit-tips-desc'?: string;
  'withdraw-desc'?: string;
  'suspend-deposit-desc'?: string;
  'suspend-withdraw-desc'?: string;
  'replace-chain-info-desc'?: string;
  'replace-chain-notification-desc'?: string;
  'replace-chain-popup-desc'?: string;
  ca?: string;
  cct?: number;
  'withdraw-tips-desc'?: string;
  'suspend-visible-desc'?: string;
}

/** Chain reference from /v2/reference/currencies */
export interface SpotV2ChainReference {
  chain?: string;
  displayName?: string;
  baseChain?: string;
  baseChainProtocol?: string;
  isDynamic?: boolean;
  numOfConfirmations?: number;
  numOfFastConfirmations?: number;
  minDepositAmt?: string;
  depositStatus?: string;
  minWithdrawAmt?: string;
  maxWithdrawAmt?: string;
  withdrawQuotaPerDay?: string;
  withdrawQuotaPerYear?: string;
  withdrawQuotaTotal?: string;
  withdrawPrecision?: number;
  withdrawFeeType?: string;
  transactFeeWithdraw?: string;
  minTransactFeeWithdraw?: string;
  maxTransactFeeWithdraw?: string;
  transactFeeRateWithdraw?: string;
  withdrawStatus?: string;
}

/** Fee rate from GET /v2/reference/transact-fee-rate */
export interface SpotV2TransactFeeRate {
  symbol: string;
  makerFeeRate: string;
  takerFeeRate: string;
  actualMakerRate: string;
  actualTakerRate: string;
  /** RPI order fee rate */
  rpiFeeRate?: string;
}

/** Currency reference item from /v2/reference/currencies */
export interface SpotV2CurrencyReference {
  currency?: string;
  instStatus?: string;
  chains?: SpotV2ChainReference[];
  /** Whether the currency supports direct transfers to Poloniex */
  externalTransferEnabled?: boolean | string | number;
}

/**
 * Market Data
 */

/** Kline/candlestick item from /market/history/kline */
export interface SpotKline {
  id: number;
  open: number;
  close: number;
  low: number;
  high: number;
  amount: number;
  vol: number;
  count: number;
}

/** Merged ticker from /market/detail/merged (payload is in "tick" not "data"). */
export interface SpotMergedTicker {
  id: number;
  version?: number;
  open: number;
  close: number;
  low: number;
  high: number;
  amount: number;
  vol: number;
  count: number;
  /** [price, size] */
  bid: [number, number];
  /** [price, size] */
  ask: [number, number];
}

/** Ticker from /market/tickers */
export interface SpotTicker {
  symbol: string;
  open: number;
  high: number;
  low: number;
  close: number;
  amount: number;
  vol: number;
  count: number;
  bid: number;
  bidSize: number;
  ask: number;
  askSize: number;
}

/** Depth tick from /market/depth and /market/fullMbp (payload is in "tick" not "data"). */
export interface SpotDepth {
  ts: number;
  version: number;
  bids: [number, number][];
  asks: [number, number][];
}

/** 24h market summary tick from /market/detail (payload is in "tick" not "data"). */
export interface SpotDetailTick {
  id: number;
  low: number;
  high: number;
  open: number;
  close: number;
  vol: number;
  amount: number;
  version: number;
  count: number;
}

/** Trade (shared by /market/trade and /market/history/trade) */
export interface SpotTrade {
  id: number;
  ts: number;
  'trade-id': number;
  amount: number;
  price: number;
  direction: string;
}

/** Trade tick from /market/trade (payload is in "tick" not "data"). */
export interface SpotLastTrade {
  id: number;
  ts: number;
  data: SpotTrade[];
}

/** Timestamp group from /market/history/trade. Each element in data array. */
export interface SpotTradeTimestampGroup {
  id: number;
  ts: number;
  data: SpotTrade[];
}

/**
 * Account
 */

/** Account from /v1/account/accounts */
export interface SpotAccount {
  id: number;
  type: string;
  subtype?: string;
  state: string;
}

/** Balance row from /v1/account/accounts/{account-id}/balance list */
export interface SpotBalance {
  currency: string;
  type: string;
  balance: string;
  debt?: string;
  available?: string;
  'seq-num'?: string;
}

/** Account balance from /v1/account/accounts/{account-id}/balance */
export interface SpotAccountBalance {
  id: number;
  type: string;
  state: string;
  list: SpotBalance[];
}

/** Profit account balance item from /v2/account/valuation */
export interface SpotV2ProfitAccountBalance {
  distributionType: string;
  balance: number;
  success: boolean;
  accountBalance: string;
}

/** Updated info from /v2/account/valuation */
export interface SpotV2ValuationUpdated {
  success: boolean;
  time: number;
}

/** Response from /v2/account/valuation */
export interface SpotV2AccountValuation {
  totalBalance?: string;
  todayProfit?: string;
  todayProfitRate?: string;
  profitAccountBalanceList?: SpotV2ProfitAccountBalance[];
  updated?: SpotV2ValuationUpdated;
}

/** Response from /v2/account/asset-valuation */
export interface SpotV2AssetValuation {
  balance: string;
  timestamp: number;
}

/** Transfer result from POST /v1/account/transfer */
export interface SpotAccountTransferResult {
  'transact-id': number;
  'transact-time': number;
}

export interface SpotV2PointAccountGroupId {
  groupId: number;
  expiryDate: number | null;
  remainAmt: string;
}

/** Point balance from GET /v2/point/account */
export interface SpotV2PointAccount {
  accountId: string;
  accountStatus: string;
  acctBalance: string;
  groupIds: SpotV2PointAccountGroupId[];
}

/** Point transfer result from POST /v2/point/transfer */
export interface SpotV2PointTransfer {
  transactId: string;
  transactTime: number;
}

/** Deduction info from GET /v1/account/switch/user/info */
export interface SpotV1AccountSwitchUserInfo {
  /** 1=point card deduction, 0=no */
  pointSwitch: number;
  /** 1=HTX deduction, 0=no. Choose one of point card and HTX deduction. */
  currencySwitch: number;
  deductionCurrency: string;
  /** 1: limited, 0: unlimited */
  deductionType: number;
  /** Total deductible (USDT). Only when deductionType=1 */
  totalDeductionLimit?: string;
  /** Remaining deductible (USDT). Only when deductionType=1 */
  remainingDeductionLimit?: string;
}

/** Deductible currency info from GET /v1/account/overview/info */
export interface SpotV1AccountOverviewInfo {
  currency: string;
}

/** Account history row from GET /v1/account/history */
export interface SpotAccountHistory {
  'account-id': number;
  currency: string;
  'record-id': number;
  'transact-amt': string;
  'transact-type': string;
  'avail-balance': string;
  'acct-balance': string;
  'transact-time': number;
}

/** Ledger row from GET /v2/account/ledger */
export interface SpotV2AccountLedger {
  accountId: number;
  currency: string;
  transactAmt: number;
  transactType: string;
  transferType?: string;
  transactId: number;
  transactTime: number;
  transferer: number;
  transferee: number;
}

/** Batch order placement result. Success: order-id, client-order-id. Error: err-code, err-msg. */
export interface SpotV1OrderBatchPlaceResult {
  'order-id'?: number;
  'client-order-id'?: string;
  'err-code'?: string;
  'err-msg'?: string;
}

/** Margin order result from POST /v1/order/auto/place */
export interface SpotV1OrderAutoPlaceResult {
  'order-id': number;
}

/** Canceled order id from POST /v1/order/orders/{order-id}/submitcancel */
export type SpotV1OrderCancelResult = string;

/** Order status from POST /v1/order/orders/submitCancelClientOrder. 1:ready, 2:created, 3:submitted, 4:partial-filled, 5:partial-canceled, 6:filled, 7:canceled, 10:canceling */
export type SpotV1OrderCancelByClientOrderIdResult = number;

/** Result from POST /v1/order/orders/batchCancelOpenOrders */
export interface SpotV1OrderBatchCancelOpenOrdersResult {
  'success-count': number;
  'failed-count': number;
  /** Next order id to cancel, -1 = none */
  'next-id': number;
}

/** Failed cancel from POST /v1/order/orders/batchcancel */
export interface SpotV1OrderBatchCancelFailed {
  'order-id'?: string;
  'client-order-id'?: string;
  'err-code'?: string;
  'err-msg'?: string;
  'order-state'?: string;
}

/** Result from POST /v2/algo-orders/cancel-all-after (Dead man's switch) */
export interface SpotV2AlgoOrdersCancelAllAfterResult {
  currentTime: number;
  triggerTime: number;
}

/**
 * Conditional Order
 */

/** Result from POST /v2/algo-orders (Place a conditional order) */
export interface SpotV2AlgoOrdersPlaceResult {
  clientOrderId: string;
}

/** Result from POST /v2/algo-orders/cancellation (Cancel conditional orders before triggering) */
export interface SpotV2AlgoOrdersCancellationResult {
  accepted: string[];
  rejected: string[];
}

/** Conditional order item from GET /v2/algo-orders/opening (orderStatus=created) and /history and /specific */
export interface SpotV2AlgoOrder {
  accountId: number;
  source: string;
  clientOrderId: string;
  symbol?: string;
  orderPrice?: string;
  orderSize?: string;
  orderValue?: string;
  orderSide: string;
  orderType: string;
  timeInForce?: string;
  stopPrice?: string;
  trailingRate?: string;
  orderOrigTime: number;
  lastActTime: number;
  orderStatus: string;
  /** Only for orderStatus=triggered */
  orderId?: string;
  /** Order trigger time. Only for orderStatus=triggered */
  orderCreateTime?: number;
  /** Only for orderStatus=rejected */
  errCode?: number;
  /** Only for orderStatus=rejected */
  errMessage?: string;
}

/**
 * Margin Loan (Cross/Isolated)
 */

/** Repayment result from POST /v2/account/repayment. Check transaction record to confirm status. */
export interface SpotMarginRepaymentResult {
  repayId: string | number;
  repayTime: number;
}

/** Transact ID detail from GET /v2/account/repayment (Repayment Record Reference) */
export interface SpotRepaymentRecordTransactId {
  transactId: number;
  repaidPrincipal?: string;
  repaidInterest?: string;
  paidHt?: string;
  paidPoint?: string;
}

/** Repayment record from GET /v2/account/repayment (Repayment Record Reference) */
export interface SpotRepaymentRecord {
  repayId: string | number;
  repayTime: number;
  accountId: string;
  currency: string;
  repaidAmount: string;
  transactIds?: SpotRepaymentRecordTransactId | SpotRepaymentRecordTransactId[];
}

/** Currency from GET /v1/margin/loan-info */
export interface SpotMarginLoanInfoCurrency {
  currency: string;
  'interest-rate': string;
  'min-loan-amt': string;
  'max-loan-amt': string;
  'loanable-amt': string;
  'actual-rate': string;
}

/** Symbol from GET /v1/margin/loan-info */
export interface SpotMarginLoanInfo {
  symbol: string;
  currencies: SpotMarginLoanInfoCurrency[];
}

/** Loan order item from GET /v1/margin/loan-orders */
export interface SpotMarginLoanOrder {
  id: number;
  'account-id': number;
  'user-id': number;
  symbol: string;
  currency: string;
  'created-at': string;
  'accrued-at'?: string;
  'loan-amount': string;
  'loan-balance': string;
  'interest-rate': string;
  'interest-amount'?: string;
  'interest-balance'?: string;
  state: string;
  'paid-point'?: string;
  'paid-coin'?: string;
  'deduct-rate'?: string;
  'deduct-currency'?: string;
  'deduct-amount'?: string;
  'updated-at'?: number;
  'hour-interest-rate'?: string;
  'day-interest-rate'?: string;
}

/** Balance row from GET /v1/margin/accounts/balance */
export interface SpotMarginBalance {
  currency: string;
  type: string;
  balance: string;
}

/** Account item from GET /v1/margin/accounts/balance */
export interface SpotMarginAccountBalance {
  id: number;
  type: string;
  symbol: string;
  state: string;
  'risk-rate'?: string;
  'fl-type'?: string;
  'fl-price'?: string;
  list: SpotMarginBalance[];
}

/** Account balance from GET /v1/cross-margin/accounts/balance. Single object (unlike isolated which returns array). */
export interface SpotCrossMarginAccountBalance {
  id: number;
  type: string;
  state: string;
  'risk-rate'?: string;
  'acct-balance-sum'?: string;
  'debt-balance-sum'?: string;
  list: SpotMarginBalance[];
}

/** Loan order item from GET /v1/cross-margin/loan-orders */
export interface SpotCrossMarginLoanOrder {
  id: number;
  'account-id': number;
  'user-id': number;
  currency: string;
  'filled-points'?: string;
  'filled-ht'?: string;
  'created-at': string | number;
  'accrued-at'?: string | number;
  'loan-amount': string;
  'loan-balance': string;
  'interest-amount'?: string;
  'interest-balance'?: string;
  state: string;
}

/** Position limit from GET /v2/margin/limit */
export interface SpotMarginLimit {
  currency: string;
  'max-holdings': string;
}

/** Result from POST /v1/order/orders/batchcancel */
export interface SpotV1OrderBatchCancelResult {
  /** Successfully canceled order ids or client-order-ids */
  success: string[];
  /** Failed cancel requests */
  failed: SpotV1OrderBatchCancelFailed[];
}

/** Match result item from GET /v1/order/orders/{order-id}/matchresults */
export interface SpotV1OrderMatchResult {
  id: number;
  symbol: string;
  'order-id': number;
  'match-id': number;
  'trade-id': number;
  price: string;
  'created-at': number;
  type: string;
  'filled-amount': string;
  'filled-fees': string;
  'fee-currency'?: string;
  source?: string;
  role?: string;
  'filled-points'?: string;
  'fee-deduct-currency'?: string;
  'fee-deduct-state'?: string;
}

/** Historical order from GET /v1/order/orders (search past orders) */
export interface SpotV1OrderHistory {
  id: number;
  'client-order-id'?: string;
  'account-id'?: number;
  amount?: string;
  symbol: string;
  price?: string;
  'created-at': number;
  'canceled-at'?: number;
  'finished-at'?: number;
  type?: string;
  'field-amount'?: string;
  'field-cash-amount'?: string;
  'field-fees'?: string;
  source?: string;
  state: string;
  'stop-price'?: string;
  operator?: string;
  role?: string;
  'canceled-source'?: number | string;
  'canceled-source-desc'?: string;
  'market-amount'?: string;
  'ice-amount'?: string;
  'is-ice'?: boolean;
  'updated-at'?: number;
}

/** Historical order from GET /v1/order/history (48h). Includes next-time when more results exist. */
export interface SpotV1OrderHistory48h extends SpotV1OrderHistory {
  /** Next start-time or end-time for pagination. Only when results exceed size. */
  'next-time'?: number;
}

/** Order detail from GET /v1/order/orders/{order-id} and getClientOrder */
export interface SpotV1OrderDetail {
  id: number;
  'client-order-id': string;
  symbol: string;
  'account-id': number;
  amount: string;
  price: string;
  'created-at': number;
  'finished-at': number;
  'canceled-at': number;
  type: string;
  'field-amount': string;
  'field-cash-amount': string;
  'field-fees': string;
  source: string;
  'canceled-source'?: string;
  state: string;
  'stop-price'?: string;
  operator?: string;
}

/** Deposit address item from GET /v2/account/deposit/address */
export interface SpotDepositAddress {
  userId: number;
  currency: string;
  address: string;
  addressTag: string;
  chain: string;
}

/** Withdraw quota chain from GET /v2/account/withdraw/quota */
export interface SpotWithdrawQuotaChain {
  chain: string;
  maxWithdrawAmt: string;
  withdrawQuotaPerDay: string;
  remainWithdrawQuotaPerDay: string;
  withdrawQuotaPerYear: string;
  remainWithdrawQuotaPerYear: string;
  withdrawQuotaTotal: string;
  remainWithdrawQuotaTotal: string;
}

/** Withdraw quota from GET /v2/account/withdraw/quota */
export interface SpotWithdrawQuota {
  currency: string;
  chains: SpotWithdrawQuotaChain[];
}

/** Withdraw address item from GET /v2/account/withdraw/address */
export interface SpotWithdrawAddress {
  currency: string;
  chain: string;
  note: string;
  addressTag?: string;
  address: string;
  status: string;
}

/** Deposit/withdraw record from GET /v1/query/deposit-withdraw or GET /v1/query/withdraw/client-order-id */
export interface SpotDepositWithdrawRecord {
  id: number;
  type: string;
  'sub-type'?: string;
  currency: string;
  /** Chain name. Poloniex rapid transfer defaults to t397342. */
  chain: string;
  'tx-hash': string;
  amount: number;
  'from-addr-tag'?: string;
  /** On-chain address, or UID:XXXX for Poloniex→HTX rapid transfers. */
  address: string;
  'address-tag'?: string;
  fee: number;
  state: string;
  'created-at': number;
  'updated-at': number;
  'error-code'?: string;
  'error-msg'?: string;
}

/** VASP exchange from GET /v1/query/vasp-list */
export interface SpotVaspExchange {
  'vasp-id': string;
  'vasp-name': string;
  'legal-name': string;
}

/** User rebate status from GET /broker/v1/user_rebate_status */
export interface SpotBrokerUserRebateStatus {
  spotRebateStatus: boolean;
  contractRebateStatus: boolean;
  spotIsNewUser: boolean;
  contractIsNewUser?: boolean;
}

/** Sub-user fee rate from GET /broker/v1/sub-user/fee_rate */
export interface SpotBrokerSubUserFeeRate {
  userId: number;
  subUserId: number;
  bizType: number;
  taker: string;
  maker: string;
  type: number;
  addTaker: string;
  addMaker: string;
  updatedAt: number;
  effectAt: number;
}

/** Fee rate add result from POST /broker/v1/sub-user/fee_rate/add */
export interface SpotBrokerFeeRateAddResult {
  subUserIds: number[];
  effectAt: string;
}

/** Account capital snapshot item from POST /broker/v1/account_capital_snapshot_everyday */
export interface SpotBrokerAccountCapitalSnapshot {
  accountId: number;
  accountType: string;
  snapshotTime: string;
  convertBalance: string;
  dataList: unknown[];
}

/** Deduct mode result item from POST /v2/sub-user/deduct-mode */
export interface SpotSubUserDeductModeResult {
  subUid: string;
  deductMode: string | null;
  errCode?: string;
  errMessage?: string;
}

/** API key from getSubUserApiKey */
export interface SpotSubUserApiKey {
  accessKey: string;
  status: string;
  note: string;
  permission: string;
  ipAddresses: string;
  validDays: number;
  createTime: number;
  updateTime: number;
}

/** Sub user creation result item from POST /v2/sub-user/creation */
export interface SpotSubUserCreationResult {
  userName: string;
  note?: string;
  uid?: number;
  /** Spot account id for spot order transactions */
  spotAccountId?: number;
  errCode?: string;
  errMessage?: string;
}

/** Sub user from GET /v2/sub-user/user-list */
export interface SpotSubUserList {
  uid: number;
  userState: string;
  subUserName: string;
  note: string;
}

/** Result from updateSubUserLockStatus */
export interface SpotSubUserLockStatusResult {
  subUid: number;
  userState: string;
}

/** Result from getSubUserStatus */
export interface SpotSubUserStatusResult {
  uid: number;
  userState: string;
}

/** Tradable market result item from POST /v2/sub-user/tradable-market */
export interface SpotSubUserTradableMarketResult {
  subUid: string;
  accountType: string;
  activation: string;
  errCode?: number;
  errMessage?: string;
}

/** Result item from setSubUserTransferPermissions */
export interface SpotSubUserTransferPermissionsResult {
  subUid: number;
  accountType: string;
  transferrable: boolean;
  errCode?: number;
  errMessage?: string;
}

/** Account ID from sub user account list */
export interface SpotSubUserAccountId {
  accountId: number;
  subType?: string;
  accountStatus?: string;
}

/** Account from sub user account list */
export interface SpotSubUserAccount {
  accountType: string;
  activation: string;
  transferrable?: boolean;
  accountIds?: SpotSubUserAccountId[];
}

/** Result from getSubUserAccounts */
export interface SpotSubUserAccountsResult {
  uid: number;
  deductMode: string;
  list: SpotSubUserAccount[];
}

/** Result from createSubUserApiKey */
export interface SpotSubUserApiKeyCreationResult {
  accessKey: string;
  secretKey: string;
  note: string;
  permission: string;
  ipAddresses: string;
}

/** Result from updateSubUserApiKey */
export interface SpotSubUserApiKeyUpdateResult {
  note: string;
  permission: string;
  ipAddresses: string;
}

/** Record from getSubUserDepositHistory */
export interface SpotSubUserDepositHistoryRecord {
  id: number;
  currency: string;
  txHash: string;
  chain: string;
  amount: number;
  address: string;
  addressTag: string;
  state: string;
  createTime: number;
  updateTime: number;
}

/** Balance from getSubUsersAggregatedBalance */
export interface SpotSubUsersAggregatedBalance {
  currency: string;
  type: string;
  balance: string;
}

/** Result from getSubUserBalance */
export interface SpotSubUserBalanceResult {
  id: number;
  type: string;
  state: string;
  list: SpotBalance[];
  symbol?: string;
}

/** Custody sub-account from GET /v2/sub-user/entrust-user-list */
export interface SpotSubUserEntrustUser {
  uid: number;
  subUserName: string;
}

/** Managed transfer record from GET /v2/sub-user/managed-transfer-history */
export interface SpotSubUserManagedTransferRecord {
  currency: string;
  type: string;
  amount: number;
  uid: number;
  subUserName: string;
  query_id?: string;
}

/** Referral rebate detail from GET /v2/invitee/rebate/detail */
export interface SpotReferralRebateDetail {
  invitee_type: string;
  invitee_rebate_rate_spot_m2: string;
  invitee_rebate_rate_contract_m2: string;
  invitee_rebate_rate_partner_spot?: string;
  invitee_rebate_rate_partner_contract?: string;
  join_time_m2: string;
  join_time_partner?: string;
  invitee_total_commission_usdt: string;
  invitee_total_commission_trx: string;
  invitee_total_commission_htx: string;
  partner_total_commission_usdt: string;
  partner_total_commission_trx: string;
  partner_total_commission_htx: string;
}

/** Referral rebate history record from GET /v2/invitee/rebate/history */
export interface SpotReferralRebateHistoryRecord {
  date: number;
  invitee_total_commission_usdt: string;
  invitee_total_commission_trx: string;
  invitee_total_commission_htx: string;
  partner_total_commission_usdt: string;
  partner_total_commission_trx: string;
  partner_total_commission_htx: string;
}

/** Referral rebate detail from all_rebate/detail or batcher_rebate/detail */
export interface SpotReferralAllRebateDetail {
  invitee_uid: number;
  invitee_type: string;
  invitee_rebate_rate_spot_m2: string | null;
  invitee_rebate_rate_contract_m2: string | null;
  invitee_rebate_rate_partner_spot?: string | null;
  invitee_rebate_rate_partner_contract?: string | null;
  join_time_m2: string;
  join_time_partner?: string | null;
  invitee_total_commission_usdt: string;
  invitee_total_commission_trx: string;
  invitee_total_commission_htx: string;
  partner_total_commission_usdt: string;
  partner_total_commission_trx: string;
  partner_total_commission_htx: string;
}

/** P2P order from GET /v1/api/c2c/order/history */
export interface SpotP2POrderHistory {
  orderNo: string;
  role: string;
  side: string;
  counterpartNickName: string;
  fiatCurrency: string;
  asset: string;
  amount: string;
  unitPrice: string;
  totalPrice: string;
  fee: string;
  orderStatus: string;
  createTime: string;
  queryId?: number;
}

/** Tiered rate from Earn project */
export interface SpotEarnTieredRate {
  amountStart: string;
  amountEnd: string;
  rate: string;
}

/** Earn project from GET /v1/earn/project/queryEarnProjectList */
export interface SpotEarnProject {
  projectId: number;
  productId: number;
  calculationType: number;
  type: number;
  viewYearRate: string;
  finishAmount: string;
  projectStatus: number;
  totalAmount: string;
  currency: string;
  startAmount: string;
  apyType: number;
  tieredRates?: SpotEarnTieredRate[];
  marketPerkUpLimit?: string;
  marketTimeApy?: string;
  marketPerkApy?: string;
}

/** Result from POST /v1/earn/order/demand/add */
export interface SpotEarnSubscribeResult {
  currency: string;
  amount: string;
  orderId: number;
  status: number;
}

/** Result from POST /v1/earn/order/demand/redeem-order */
export interface SpotEarnRedeemResult {
  currency: string;
  amount: string;
  orderId: number;
  status: number;
}

/** Earn user asset from GET /v1/earn/order/user/assets/list */
export interface SpotEarnUserAsset {
  projectId: number;
  orderId: number;
  projectType: number;
  currency: string;
  yesterdayIncome: string;
  totalIncomeAmount: string;
  totalAmount: string;
  miningYearRate: string;
  apyType: number;
}

/** Referral invited user from GET /v2/invitee/rebate/referrals */
export interface SpotReferralReferral {
  id: number;
  invitee_uid: number;
  remark: string;
  referral_code: string;
  invitee_type: string;
  invitee_rebate_rate_spot_m2: string;
  invitee_rebate_rate_contract_m2: string;
  invitee_rebate_rate_partner_spot?: string | null;
  invitee_rebate_rate_partner_contract?: string | null;
  join_time_m2: number;
  join_time_partner?: number | null;
  /** Whether advanced KYC was completed */
  completed_kyc?: boolean | number | string;
  /** Invitee email */
  mail?: string | null;
}

/** Open order from GET /v1/order/openOrders */
export interface SpotV1OpenOrder {
  id: number;
  'client-order-id'?: string;
  symbol: string;
  'account-id'?: number;
  price?: string;
  amount?: string;
  'created-at': number;
  type: string;
  'filled-amount': string;
  'filled-cash-amount': string;
  'filled-fees': string;
  source?: string;
  state: string;
  'stop-price'?: string;
  operator?: string;
}

/** Result from POST /v5/account/universal_transfer */
export interface SpotUniversalTransferResult {
  transfer_id: number;
}

/** Record from GET /v5/account/universal_transfer_records */
export interface SpotUniversalTransferRecord {
  id: number;
  transfer_id: number | string;
  amount: string;
  currency?: string;
  status?: string;
  from_account_type: string;
  to_account_type: string;
  from_account_asset?: string;
  to_account_asset?: string;
  from_asset_type?: string;
  to_asset_type?: string;
  transfer_time?: number;
}
