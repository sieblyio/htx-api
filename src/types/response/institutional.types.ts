// Custody API - Response Types

export type CustodyVaultStatus = 'pending' | 'created' | 'failed' | 'disabled';

export interface CustodyVault {
  id: string;
  created_at: string;
  updated_at: string;
  count_assets: number;
  status: CustodyVaultStatus;
  iiban: string;
  deposit_lock_rekeying_only?: boolean | null;
  name: string;
  description?: string | null;
  balance_fiat?: string | null;
  balance_diff?: string | null;
  available_balance_fiat?: string | null;
  otc_enabled?: boolean;
}

export interface CustodyApiError {
  severity: 'E' | 'W';
  errorClass: string;
  type: string;
  errorMessage?: string | null;
}

export interface CustodyListVaultsResponse {
  result?: CustodyVault[] | null;
  errors?: CustodyApiError[];
  start?: number;
  total?: number;
}

// Custody API - Get Vault Information by ID
export interface CustodyAssetBalance {
  current_usd_value?: string | null;
  quantity: string;
}

export interface CustodyVaultAssetDetail {
  asset: string;
  current_usd_price?: string | null;
  available_balance: CustodyAssetBalance;
  total_balance: CustodyAssetBalance;
}

export interface CustodyVaultWithAssets extends CustodyVault {
  asset_details: CustodyVaultAssetDetail[];
}

export interface CustodyGetVaultResponse {
  result?: CustodyVaultWithAssets | null;
  errors: CustodyApiError[];
}

// Custody API - Deposit Methods
export interface CustodyDepositMethod {
  method?: string;
  limit?: string | boolean;
  fee?: string;
  'fee-percentage'?: string | null;
  'address-setup-fee'?: string | null;
  'gen-address'?: boolean | null;
  minimum?: string | null;
}

export interface CustodyDepositMethodsResponse {
  result?: CustodyDepositMethod[] | null;
  error: CustodyApiError[];
}

// Custody API - Deposit Addresses
export interface CustodyDepositAddress {
  address: string;
  expiretm?: string;
  memo?: string | null;
  new?: boolean | null;
  tag?: string | null;
}

export interface CustodyDepositAddressesResponse {
  error: CustodyApiError[];
  result?: CustodyDepositAddress[] | null;
}

// Custody API - Transaction Types (Shared)
export type CustodyTransactionType =
  | 'unspecified'
  | 'deposit'
  | 'withdrawal'
  | 'trade'
  | 'margin'
  | 'adjustment'
  | 'rollover'
  | 'interest'
  | 'credit'
  | 'transfer'
  | 'transfer_peer_to_peer'
  | 'settle'
  | 'dividend'
  | 'nft_trade'
  | 'reward'
  | 'nft_creator_fee'
  | 'nft_rebate'
  | 'nft_airdrop'
  | 'simple_order'
  | 'simple_order_with_deposit'
  | 'simple_order_failed'
  | 'custom_simple_order'
  | 'custom_simple_order_with_deposit'
  | 'custom_simple_order_failed'
  | 'recurring_simple_order'
  | 'recurring_simple_order_with_deposit'
  | 'recurring_simple_order_failed'
  | 'simple_order_opposite_side'
  | 'reserved_fee'
  | 'fee_sweep'
  | 'ic_settlement'
  | 'fee_sweep_dlt'
  | 'reward_sweep'
  | 'reward_sweep_old'
  | 'interest_sweep'
  | 'conversion'
  | 'dust_sweep'
  | 'futures_transfer'
  | 'custody_transfer'
  | 'deposit_action'
  | 'withdrawal_action'
  | 'legacy_staking_allocation'
  | 'legacy_staking_deallocation'
  | 'legacy_staking_reward'
  | 'earn_legacy_migration'
  | 'block_trade'
  | 'equity_trade'
  | 'equity_acats'
  | 'earn_staking_allocation'
  | 'earn_staking_deallocation'
  | 'earn_staking_reward'
  | 'earn_staking_auto_allocation'
  | 'earn_oir_allocation'
  | 'earn_oir_deallocation'
  | 'earn_oir_reward'
  | 'earn_oir_auto_allocation'
  | 'earn_base_reward'
  | 'earn_base_auto_allocation'
  | 'earn_base_auto_deallocation'
  | 'custody_staking'
  | 'custody_unstaking'
  | 'custody_staking_reward'
  | 'custody_staking_reward_aggregated'
  | 'credit_rollover'
  | 'airdrop'
  | 'earn_oir_auto_deallocation'
  | 'earn_staking_auto_deallocation'
  | 'bridge_deposit'
  | 'bridge_simple_order'
  | 'simple_order_deposit_action'
  | 'otc_buy'
  | 'otc_sell'
  | 'bundle_trade'
  | 'equity_fee'
  | 'equity_journal'
  | 'corporate_action'
  | 'user_account_transfer'
  | 'earn_restaking'
  | 'subscription'
  | 'custody_otc_loan_pledge'
  | 'custody_otc_collateral_liquidation'
  | 'paytag_transfer'
  | 'paylink_transfer'
  | 'paytag_request_transfer'
  | 'paylink_request_transfer'
  | 'kard_transfer'
  | 'krak_card'
  | 'custody_otc_loan_release'
  | 'fpsl_reward'
  | 'fcm_trade'
  | 'boost'
  | 'fcm_misc';

export type CustodyTransactionCategory =
  | 'unspecified'
  | 'deposit'
  | 'withdrawal'
  | 'transfer'
  | 'krak_card'
  | 'trade'
  | 'margin_trade'
  | 'margin_rollover'
  | 'margin_settle'
  | 'earn'
  | 'earn_rewards'
  | 'simple_trading'
  | 'nft'
  | 'block_trade'
  | 'credit'
  | 'equity_trade'
  | 'equity_acats'
  | 'equity_dividend'
  | 'reward_bonus'
  | 'conversion'
  | 'reward'
  | 'custody'
  | 'legacy_staking'
  | 'legacy_staking_rewards'
  | 'equity_fee'
  | 'equity_journal'
  | 'corporate_action'
  | 'fpsl_reward'
  | 'subscription'
  | 'other';

export type CustodyTransactionArea =
  | 'unspecified'
  | 'funding'
  | 'transfer'
  | 'krak_card'
  | 'spot_margin'
  | 'equity'
  | 'earn'
  | 'simple_trading'
  | 'custody'
  | 'staking'
  | 'nft'
  | 'other';

export type CustodyTransactionStatus =
  | 'unspecified'
  | 'in_progress'
  | 'successful'
  | 'failed';

export type CustodyTransactionAssetClass =
  | 'currency'
  | 'forex'
  | 'equity'
  | 'equity_pair'
  | 'nft'
  | 'derivatives'
  | 'tokenized_asset'
  | 'futures_contract';

export interface CustodyTransactionAmount {
  amount: string;
  asset: string;
  class: CustodyTransactionAssetClass;
}

export interface CustodyTransactionSide {
  ledger_id?: string | null;
  time?: string | null;
  subtype?: string | null;
  amount: CustodyTransactionAmount;
  quoted_amount?: CustodyTransactionAmount | null;
  fee?: CustodyTransactionAmount | null;
  quoted_fee?: CustodyTransactionAmount | null;
  total?: CustodyTransactionAmount | null;
  quoted_total?: CustodyTransactionAmount | null;
  balance?: CustodyTransactionAmount | null;
  wallet?: Record<string, any> | null;
}

export interface CustodyTransaction {
  id: string;
  time: string;
  type: CustodyTransactionType;
  category: CustodyTransactionCategory;
  area: CustodyTransactionArea;
  status?: CustodyTransactionStatus | null;
  ref_id: string;
  ref_id2?: string | null;
  spend?: CustodyTransactionSide | null;
  receive?: CustodyTransactionSide | null;
  details?: Record<string, any> | null;
}

export interface CustodyTransactionStats {
  transactions_seen?: number;
}

export interface CustodyListTransactionsResponse {
  result?: {
    transactions: CustodyTransaction[];
    stats?: CustodyTransactionStats | null;
    next_cursor?: string | null;
  } | null;
  errors: CustodyApiError[];
}

// Custody API - Get Transaction by ID
export type CustodyTransactionResultType =
  | 'complete'
  | 'incomplete_requires_long_timeout'
  | 'incomplete';

export interface CustodyGetTransactionResponse {
  error: CustodyApiError[];
  result?: {
    transaction: CustodyTransaction;
    result_type: CustodyTransactionResultType;
  } | null;
}

// Custody API - Withdraw Methods
export interface CustodyWithdrawMethodLimit {
  remaining: string | number;
  maximum: string | number;
}

export interface CustodyWithdrawMethodLimitInfo {
  limit_type: string;
  description?: string | null;
  limits: Record<string, CustodyWithdrawMethodLimit>;
}

export interface CustodyWithdrawMethodFee {
  aclass: string;
  asset: string;
  fee: string;
  fee_percentage?: string | null;
}

export interface CustodyWithdrawMethod {
  asset: string;
  method_id?: string | null;
  method?: string | null;
  network_id?: string | null;
  network?: string | null;
  minimum?: string | null;
  limits?: CustodyWithdrawMethodLimitInfo[] | null;
  fee?: CustodyWithdrawMethodFee | null;
}

export interface CustodyWithdrawMethodsResponse {
  error: CustodyApiError[];
  result?: CustodyWithdrawMethod[] | null;
}

// Custody API - Withdraw Addresses
export interface CustodyWithdrawAddress {
  address?: string | null;
  asset?: string | null;
  method?: string | null;
  key?: string | null;
  verified: boolean;
  memo?: string | null;
  tag?: string | null;
  networks?: string[] | null;
}

export interface CustodyWithdrawAddressesResponse {
  error: CustodyApiError[];
  result?: CustodyWithdrawAddress[] | null;
}

// Custody API - Tasks
export type CustodyUserRole = 'admin' | 'initiator' | 'reviewer' | 'auditor';

export interface CustodyTaskUser {
  full_name?: string | null;
  role?: CustodyUserRole | null;
  ip_address?: string | null;
  iiban?: string | null;
}

export interface CustodyTaskReviewerStatistics {
  current_count: number;
  approved: number;
  denied: number;
  undecided: number;
}

export type CustodyTaskState =
  | 'pending'
  | 'approved'
  | 'denied'
  | 'canceled'
  | 'expired'
  | 'executed'
  | 'failed';

export type CustodyTaskUserDecision = 'approved' | 'denied' | 'undecided';

export interface CustodyTask {
  can_review: boolean;
  reviewer_statistics: CustodyTaskReviewerStatistics;
  current_user_decision: CustodyTaskUserDecision;
  id: string;
  approval_id: string;
  created_at: string;
  updated_at: string;
  expires_at: string;
  initiator: CustodyTaskUser;
}

export interface CustodyListTasksResponse {
  result?: CustodyTask[] | null;
  errors: CustodyApiError[];
  start: number;
  total: number;
}

// Custody API - Get Task by ID
export interface CustodyTaskDetails {
  state: CustodyTaskState;
  [key: string]: any; // Task details vary based on action type
}

export interface CustodyGetTaskResponse {
  result?: CustodyTaskDetails | null;
  errors: CustodyApiError[];
}

// Custody API - Activities
export type CustodyActivityAction =
  | 'created'
  | 'review_approved'
  | 'review_denied'
  | 'canceled'
  | 'executed'
  | 'failed'
  | 'expired';

export interface CustodyActivity {
  task: CustodyTaskDetails;
  id: string;
  created_at: string;
}

export interface CustodyListActivitiesResponse {
  result?: CustodyActivity[] | null;
  errors: CustodyApiError[];
  start: number;
  total: number;
}

// Custody API - Get Activity by ID
export interface CustodyActivityDetails {
  type: CustodyActivityAction;
  comment?: string | null;
  user: CustodyTaskUser;
  [key: string]: any; // Activity details vary based on type
}

export interface CustodyGetActivityResponse {
  result?: CustodyActivityDetails | null;
  errors: CustodyApiError[];
}

// OTC REST API - Quotes
export interface OtcQuote {
  [key: string]: any; // Quote details vary
}

export interface OTCCreateQuoteResponse {
  result?: {
    quote: OtcQuote;
  };
  error: string[];
}

export interface OTCUpdateQuoteResponse {
  result?: {
    quote_id?: string;
  };
  error: string[];
}

export interface OtcPair {
  base: string;
  quote: string;
  pair_name: string;
  pair_decimals: number;
  lot_decimals: number;
  cost_decimals: number;
  max_base_amount: string;
  max_notional?: string;
  min_base_amount?: string;
  min_notional?: string;
}

export interface OTCGetPairsResponse {
  result: {
    spot_pairs: OtcPair[];
  };
  error: string[];
}

export interface OtcActiveQuote {
  expires: {
    time: number;
  };
  quote_id: string;
  client_order_id?: string | null;
  base: string;
  quote: string;
  type: string;
  price?: string;
  amount: string;
  total?: string;
  settlement: string;
}

export interface OTCGetActiveQuotesResponse {
  result?: OtcActiveQuote[];
  error: string[];
}

export interface OtcHistoricalQuote {
  trade_id?: string | null;
  status?: string | null;
  acceptance: {
    status: string;
    time: number;
  };
  settlement_status: string;
  quote_id: string;
  client_order_id?: string | null;
  base: string;
  quote: string;
  type: string;
  price: string;
  amount: string;
  total: string;
  settlement: string;
}

export interface OTCGetHistoricalQuotesResponse {
  result?: OtcHistoricalQuote[];
  error: string[];
}

export interface OtcExposures {
  max_otc: string;
  max_rfq: string;
  used_otc: string;
  used_rfq: string;
}

export interface OTCGetExposuresResponse {
  result?: OtcExposures;
  error: string[];
}

export interface OTCCheckClientResponse {
  result?: {
    permissions: string[];
  };
  error: string[];
}
