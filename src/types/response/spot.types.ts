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
  [key: string]: unknown;
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
  [key: string]: unknown;
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
  [key: string]: unknown;
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
  [key: string]: unknown;
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
  [key: string]: unknown;
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
  [key: string]: unknown;
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
  [key: string]: unknown;
}

/** Currency reference item from /v2/reference/currencies */
export interface SpotV2CurrencyReference {
  currency?: string;
  instStatus?: string;
  chains?: SpotV2ChainReference[];
  [key: string]: unknown;
}

/**
 * Market Data
 */
