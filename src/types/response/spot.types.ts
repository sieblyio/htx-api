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
  components: Array<{
    id: string;
    name: string;
    status: string;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
  }>;
  incidents: Array<{
    id: string;
    name: string;
    status: string;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
  }> | null;
  scheduled_maintenances: Array<{
    id: string;
    name: string;
    status: string;
    created_at: string;
    updated_at: string;
    scheduled_for: string;
    scheduled_until: string;
    [key: string]: unknown;
  }> | null;
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
  p?: Array<{ id?: number; name?: string; weight?: number }>;
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
  minoa?: number | string;
  maxoa?: number | string;
  minov?: number | string;
  lominoa?: number | string;
  lomaxoa?: number | string;
  lomaxba?: number | string;
  lomaxsa?: number | string;
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

/** Currency reference item from /v2/reference/currencies */
export interface SpotV2CurrencyReference {
  currency?: string;
  instStatus?: string;
  chains?: SpotV2ChainReference[];
}

/**
 * Market Data
 */

/** Kline/candlestick item from /market/history/kline */
export interface SpotKlineItem {
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

/** Ticker item from /market/tickers */
export interface SpotTickerItem {
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
export interface SpotDepthTick {
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

/** Trade item (shared by /market/trade and /market/history/trade) */
export interface SpotTradeItem {
  id: number;
  ts: number;
  'trade-id': number;
  amount: number;
  price: number;
  direction: string;
}

/** Trade tick from /market/trade (payload is in "tick" not "data"). */
export interface SpotTradeTick {
  id: number;
  ts: number;
  data: SpotTradeItem[];
}

/** Timestamp group from /market/history/trade. Each element in data array. */
export interface SpotTradeTimestampGroup {
  id: number;
  ts: number;
  data: SpotTradeItem[];
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

/** Balance item from /v1/account/accounts/{account-id}/balance list */
export interface SpotAccountBalanceItem {
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
  list: SpotAccountBalanceItem[];
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
export interface SpotAccountTransferData {
  'transact-id': number;
  'transact-time': number;
}

export interface SpotV2PointAccountGroupIdItem {
  groupId: number;
  expiryDate: number | null;
  remainAmt: string;
}

/** Point balance from GET /v2/point/account */
export interface SpotV2PointAccount {
  accountId: string;
  accountStatus: string;
  acctBalance: string;
  groupIds: SpotV2PointAccountGroupIdItem[];
}

/** Point transfer result from POST /v2/point/transfer */
export interface SpotV2PointTransferData {
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

/** Account history item from GET /v1/account/history */
export interface SpotAccountHistoryItem {
  'account-id': number;
  currency: string;
  'record-id': number;
  'transact-amt': string;
  'transact-type': string;
  'avail-balance': string;
  'acct-balance': string;
  'transact-time': number;
}

/** Ledger item from GET /v2/account/ledger */
export interface SpotV2AccountLedgerItem {
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
