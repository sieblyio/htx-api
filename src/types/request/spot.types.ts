/**
 * Market Data
 */

export interface SpotGetAssetPairsParams {
  pair?: string;
  aclass_base?: 'currency' | 'tokenized_asset';
  info?: 'info' | 'leverage' | 'fees' | 'margin';
  country_code?: string;
}

export interface SpotGetOHLCParams {
  pair: string;
  interval?: 1 | 5 | 15 | 30 | 60 | 240 | 1440 | 10080 | 21600;
  since?: number;
  asset_class?: 'tokenized_asset';
}

export interface SpotGetOrderBookParams {
  pair: string;
  count?: number;
  asset_class?: 'tokenized_asset';
}

export interface SpotGetRecentTradesParams {
  pair: string;
  since?: string;
  count?: number;
  asset_class?: 'tokenized_asset';
}

export interface SpotGetRecentSpreadsParams {
  pair: string;
  since?: number;
  asset_class?: 'tokenized_asset';
}

/**
 * Account Data
 */

export interface SpotGetOpenOrdersParams {
  trades?: boolean;
  userref?: number;
  cl_ord_id?: string;
  rebase_multiplier?: 'rebased' | 'base';
}

export interface SpotGetClosedOrdersParams {
  trades?: boolean;
  userref?: number;
  cl_ord_id?: string;
  start?: number;
  end?: number;
  ofs?: number;
  closetime?: 'open' | 'close' | 'both';
  consolidate_taker?: boolean;
  without_count?: boolean;
  rebase_multiplier?: 'rebased' | 'base';
}

export interface SpotQueryOrdersParams {
  trades?: boolean;
  userref?: number;
  txid: string;
  consolidate_taker?: boolean;
  rebase_multiplier?: 'rebased' | 'base';
}

export interface SpotGetTradesHistoryParams {
  type?:
    | 'all'
    | 'any position'
    | 'closed position'
    | 'closing position'
    | 'no position';
  trades?: boolean;
  start?: number;
  end?: number;
  ofs?: number;
  consolidate_taker?: boolean;
  ledgers?: boolean;
  rebase_multiplier?: 'rebased' | 'base';
}

export interface SpotQueryTradesParams {
  txid: string;
  trades?: boolean;
  rebase_multiplier?: 'rebased' | 'base';
}

export interface SpotGetOpenPositionsParams {
  txid?: string;
  docalcs?: boolean;
  consolidation?: 'market';
  rebase_multiplier?: 'rebased' | 'base';
}

export interface SpotGetLedgersInfoParams {
  asset?: string;
  aclass?: string;
  type?:
    | 'all'
    | 'trade'
    | 'deposit'
    | 'withdrawal'
    | 'transfer'
    | 'margin'
    | 'adjustment'
    | 'rollover'
    | 'credit'
    | 'settled'
    | 'staking'
    | 'dividend'
    | 'sale'
    | 'nft_rebate';
  start?: number;
  end?: number;
  ofs?: number;
  without_count?: boolean;
  rebase_multiplier?: 'rebased' | 'base';
}

export interface SpotQueryLedgersParams {
  id: string;
  trades?: boolean;
  rebase_multiplier?: 'rebased' | 'base';
}

export interface SpotRequestExportReportParams {
  report: 'trades' | 'ledgers';
  format?: 'CSV' | 'TSV';
  description: string;
  fields?: string;
  starttm?: number;
  endtm?: number;
}

/**
 * Trading
 */

export interface SpotSubmitOrderParams {
  userref?: number;
  cl_ord_id?: string;
  ordertype:
    | 'market'
    | 'limit'
    | 'iceberg'
    | 'stop-loss'
    | 'take-profit'
    | 'stop-loss-limit'
    | 'take-profit-limit'
    | 'trailing-stop'
    | 'trailing-stop-limit'
    | 'settle-position';
  type: 'buy' | 'sell';
  volume: string;
  displayvol?: string;
  pair: string;
  asset_class?: 'tokenized_asset';
  price?: string;
  price2?: string;
  trigger?: 'index' | 'last';
  leverage?: string;
  reduce_only?: boolean;
  stptype?: 'cancel-newest' | 'cancel-oldest' | 'cancel-both';
  oflags?: string;
  timeinforce?: 'GTC' | 'IOC' | 'GTD';
  starttm?: string;
  expiretm?: string;
  'close[ordertype]'?: string;
  'close[price]'?: string;
  'close[price2]'?: string;
  deadline?: string;
  validate?: boolean;
}

export interface SpotAmendOrderParams {
  txid?: string;
  cl_ord_id?: string;
  order_qty?: string;
  display_qty?: string;
  limit_price?: string;
  trigger_price?: string;
  pair?: string;
  post_only?: boolean;
  deadline?: string;
}

export interface SpotBatchOrderItem {
  userref?: number;
  cl_ord_id?: string;
  ordertype:
    | 'market'
    | 'limit'
    | 'iceberg'
    | 'stop-loss'
    | 'take-profit'
    | 'stop-loss-limit'
    | 'take-profit-limit'
    | 'trailing-stop'
    | 'trailing-stop-limit'
    | 'settle-position';
  type: 'buy' | 'sell';
  volume: string;
  displayvol?: string;
  price?: string;
  price2?: string;
  trigger?: 'index' | 'last';
  leverage?: string;
  reduce_only?: boolean;
  stptype?: 'cancel-newest' | 'cancel-oldest' | 'cancel-both';
  oflags?: string;
  timeinforce?: 'GTC' | 'IOC' | 'GTD';
  starttm?: string;
  expiretm?: string;
  close?: {
    ordertype?: string;
    price?: string;
    price2?: string;
  };
}

export interface SpotSubmitOrderBatchParams {
  orders: SpotBatchOrderItem[];
  pair: string;
  asset_class?: 'tokenized_asset';
  deadline?: string;
  validate?: boolean;
}

/**
 * Funding
 */

export interface SpotGetDepositMethodsParams {
  asset: string;
  aclass?: 'currency' | 'tokenized_asset';
  rebase_multiplier?: 'rebased' | 'base';
}

export interface SpotGetDepositAddressesParams {
  asset: string;
  aclass?: 'currency' | 'tokenized_asset';
  method: string;
  new?: boolean;
  amount?: string | number;
}

export interface SpotGetDepositStatusParams {
  asset?: string;
  aclass?: 'currency' | 'tokenized_asset';
  method?: string;
  start?: string;
  end?: string;
  cursor?: boolean | string;
  limit?: number;
  rebase_multiplier?: 'rebased' | 'base';
}

export interface SpotGetWithdrawalMethodsParams {
  asset?: string;
  aclass?: 'currency' | 'tokenized_asset';
  network?: string;
  rebase_multiplier?: 'rebased' | 'base';
}

export interface SpotGetWithdrawalAddressesParams {
  asset?: string;
  aclass?: 'currency' | 'tokenized_asset';
  method?: string;
  key?: string;
  verified?: boolean;
}

export interface SpotGetWithdrawalInfoParams {
  asset: string;
  key: string;
  amount: string;
}

export interface SpotWithdrawFundsParams {
  asset: string;
  aclass?: 'currency' | 'tokenized_asset';
  key: string;
  address?: string;
  amount: string;
  max_fee?: string;
  rebase_multiplier?: 'rebased' | 'base';
}

export interface SpotGetWithdrawalsStatusParams {
  asset?: string;
  aclass?: 'currency' | 'tokenized_asset';
  method?: string;
  start?: string;
  end?: string;
  cursor?: boolean | string;
  limit?: number;
  rebase_multiplier?: 'rebased' | 'base';
}

export interface SpotWalletTransferParams {
  asset: string;
  from: 'Spot Wallet';
  to: 'Futures Wallet';
  amount: string;
}

/**
 * Subaccounts
 */

export interface SpotAccountTransferParams {
  asset: string;
  asset_class?: 'currency' | 'tokenized_asset';
  amount: string;
  from: string;
  to: string;
}

/**
 * Earn
 */

export interface SpotListEarnStrategiesParams {
  ascending?: boolean;
  asset?: string;
  cursor?: string;
  limit?: number;
  lock_type?: ('flex' | 'bonded' | 'timed' | 'instant')[];
}

export interface SpotListEarnAllocationsParams {
  ascending?: boolean;
  converted_asset?: string;
  hide_zero_allocations?: boolean;
}

/**
 * Transparency
 */

export interface SpotGetPostTradeDataParams {
  symbol?: string;
  from_ts?: string;
  to_ts?: string;
  count?: number;
}

/**
 * OAuth
 */

export interface OauthGetAccessTokenParams {
  grant_type: 'authorization_code' | 'refresh_token';
  code?: string; // Required if grant_type = authorization_code
  redirect_uri?: string; // Required if grant_type = authorization_code
  refresh_token?: string; // Required if grant_type = refresh_token
}

export interface OauthCreateFastApiKeyParams {
  api_key_name: string; // max 32 chars
  ip_allowlist: string[];
  nonce_window?: number;
  permissions: {
    export_data?: boolean;
    funds_add?: boolean;
    funds_earn?: boolean;
    funds_query?: boolean;
    funds_withdraw?: boolean;
    ledger_query?: boolean;
    trades_close?: boolean;
    trades_modify?: boolean;
    trades_query_closed?: boolean;
    trades_query_open?: boolean;
  };
  query_from?: number;
  query_to?: number;
  valid_until?: number;
}

export interface OauthUpdateFastApiKeyParams {
  new_api_key_name?: string; // max 32 chars
  api_key_name: string; // max 32 chars
  ip_allowlist: string[];
  nonce_window?: number;
  permissions: {
    export_data?: boolean;
    funds_add?: boolean;
    funds_earn?: boolean;
    funds_query?: boolean;
    funds_withdraw?: boolean;
    ledger_query?: boolean;
    trades_close?: boolean;
    trades_modify?: boolean;
    trades_query_closed?: boolean;
    trades_query_open?: boolean;
  };
  query_from?: number;
  query_to?: number;
  valid_until?: number;
}
