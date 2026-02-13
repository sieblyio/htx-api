// Custody API - List Vaults

export type CustodyOrderDirection = 'asc' | 'desc';
export type CustodyCaseMatching = 'insensitive' | 'sensitive';

// Filter types for vault listing
export type CustodyVaultFilterBy =
  | 'id'
  | 'name'
  | 'default_approvals'
  | 'created_at'
  | 'updated_at'
  | 'member';

export type CustodyVaultOrderBy = 'id' | 'name' | 'created_at' | 'updated_at';

// Individual filter types
export interface CustodyVaultFilterIdEquals {
  type: 'equals';
  values: string[];
  by: 'id';
}

export interface CustodyVaultFilterNameEquals {
  type: 'equals';
  values: string[];
  case?: CustodyCaseMatching;
  by: 'name';
}

export interface CustodyVaultFilterNameStartsWith {
  type: 'starts_with';
  values: string[];
  case?: CustodyCaseMatching;
  by: 'name';
}

export interface CustodyVaultFilterNameContains {
  type: 'contains';
  values: string[];
  case?: CustodyCaseMatching;
  by: 'name';
}

export interface CustodyVaultFilterDefaultApprovalsEquals {
  type: 'equals';
  values: number[];
  by: 'default_approvals';
}

export interface CustodyVaultFilterDefaultApprovalsIn {
  type: 'in';
  left?: number;
  right?: number;
  by: 'default_approvals';
}

export interface CustodyVaultFilterCreatedAtEquals {
  type: 'equals';
  values: string[];
  by: 'created_at';
}

export interface CustodyVaultFilterCreatedAtIn {
  type: 'in';
  left?: string;
  right?: string;
  by: 'created_at';
}

export interface CustodyVaultFilterUpdatedAtEquals {
  type: 'equals';
  values: string[];
  by: 'updated_at';
}

export interface CustodyVaultFilterUpdatedAtIn {
  type: 'in';
  left?: string;
  right?: string;
  by: 'updated_at';
}

export interface CustodyVaultFilterMemberEquals {
  type: 'equals';
  values: string[];
  by: 'member';
}

export type CustodyVaultFilterCondition =
  | CustodyVaultFilterIdEquals
  | CustodyVaultFilterNameEquals
  | CustodyVaultFilterNameStartsWith
  | CustodyVaultFilterNameContains
  | CustodyVaultFilterDefaultApprovalsEquals
  | CustodyVaultFilterDefaultApprovalsIn
  | CustodyVaultFilterCreatedAtEquals
  | CustodyVaultFilterCreatedAtIn
  | CustodyVaultFilterUpdatedAtEquals
  | CustodyVaultFilterUpdatedAtIn
  | CustodyVaultFilterMemberEquals;

export interface VaultFilterOr {
  or: CustodyVaultFilterCondition[];
}

export interface VaultFilters {
  and?: VaultFilterOr[];
}

export interface VaultPagination {
  limit: number;
  offset: number;
}

export interface VaultOrdering {
  by: CustodyVaultOrderBy;
  direction?: CustodyOrderDirection;
}

export interface CustodyListVaultsParams {
  nonce?: number;
  resolve_policies?: boolean | null;
  filters?: VaultFilters;
  pagination?: VaultPagination;
  orderings?: VaultOrdering[];
}

// Custody API - Deposit Methods
export type CustodyAssetClass =
  | 'currency'
  | 'forex'
  | 'equity'
  | 'equitypair'
  | 'nft'
  | 'volume';

export interface CustodyDepositMethodsParams {
  'x-vault-id': string;
  nonce?: number;
  asset?: string;
  category: 'custody';
  aclass?: string;
}

// Custody API - Deposit Addresses
export interface CustodyDepositAddressesParams {
  'x-vault-id': string;
  nonce?: number;
  aclass?: CustodyAssetClass;
  asset: string;
  method: string;
  new?: boolean;
}

// Custody API - List Custody Transactions
export type CustodyTransactionTypeReq =
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

export type CustodyRefIdType =
  | 'funding'
  | 'trade'
  | 'adjustment'
  | 'transfer'
  | 'custody_transfer'
  | 'nft_transaction'
  | 'nft_id'
  | 'equity_trade'
  | 'legacy_staking_reward'
  | 'legacy_staking'
  | 'earn_ledger'
  | 'earn_strategy'
  | 'simple_trade'
  | 'simple_order_quote'
  | 'legacy_custody_transaction';

export type CustodyTransactionAssetClassReq =
  | 'currency'
  | 'forex'
  | 'equity'
  | 'equity_pair'
  | 'nft'
  | 'derivatives'
  | 'tokenized_asset'
  | 'futures_contract';

export interface CustodyQuoteAsset {
  asset: string;
  class: CustodyTransactionAssetClassReq;
}

export interface CustodyTransactionAssetFilter {
  asset: string;
  class: CustodyTransactionAssetClassReq;
}

export interface CustodyTransactionRefIdFilter {
  type: CustodyRefIdType;
  ref_id: string;
}

export interface CustodyTransactionSorting {
  order?: 'descending' | 'ascending';
}

export interface CustodyListTransactionsParams {
  id: string;
  nonce?: number;
  page_size?: number;
  quote?: CustodyQuoteAsset;
  preferred_asset_name?: string;
  sorting?: CustodyTransactionSorting;
  cursor?: string;
  types?: CustodyTransactionTypeReq[];
  ids?: string[];
  assets?: CustodyTransactionAssetFilter[];
  ref_ids?: CustodyTransactionRefIdFilter[];
}

// Custody API - Get Transaction by ID
export interface CustodyGetTransactionParams {
  id: string;
  nonce?: number;
  vault_id: string;
  with_long_timeout?: boolean | null;
  quote?: CustodyQuoteAsset;
}

// Custody API - Withdraw Methods
export interface CustodyWithdrawMethodsParams {
  'x-vault-id': string;
  nonce?: number;
  asset?: string | null;
  category: 'custody';
  aclass?: string;
  network?: string | null;
}

// Custody API - Withdraw Addresses
export type CustodyWithdrawAddressAssetClass =
  | 'currency'
  | 'equity'
  | 'equity-pair'
  | 'forex'
  | 'nft'
  | 'volume';

export interface CustodyWithdrawAddressesParams {
  'x-vault-id': string;
  preferred_asset_name?: 'new' | 'alt';
  nonce?: number;
  aclass?: CustodyWithdrawAddressAssetClass;
  asset?: string | null;
  method?: string | null;
  key?: string | null;
  verified?: boolean | null;
}

// Custody API - List Tasks
export type CustodyTaskScope = 'domain' | 'vault';

export type CustodyTaskStateReq =
  | 'pending'
  | 'approved'
  | 'denied'
  | 'canceled'
  | 'expired'
  | 'executed'
  | 'failed';

export type CustodyTaskAction =
  | 'update_withdrawal_addresses'
  | 'request_withdrawal'
  | 'create_vault'
  | 'update_group_users'
  | 'update_role_users'
  | 'update_vault_users'
  | 'update_domain_policies'
  | 'update_vault_policies'
  | 'create_users'
  | 'update_vault'
  | 'update_status_users'
  | 'request_transfer_to_spot'
  | 'create_group'
  | 'update_permission_users'
  | 'create_api_users'
  | 'update_api_users'
  | 'update_vaults_users'
  | 'request_allocation'
  | 'request_deallocation';

export type CustodyTaskUserDecisionReq = 'approved' | 'denied' | 'undecided';

export type CustodyTaskOrderBy =
  | 'id'
  | 'vault_id'
  | 'state'
  | 'created_at'
  | 'updated_at'
  | 'expires_at';

interface TaskFilterIdEquals {
  type: 'equals';
  values: string[];
  by: 'id';
}

interface TaskFilterApprovalIdEquals {
  type: 'equals';
  values: string[];
  by: 'approval_id';
}

interface TaskFilterVaultIdEquals {
  type: 'equals';
  values: string[];
  by: 'vault_id';
}

interface TaskFilterScopeEquals {
  type: 'equals';
  values: CustodyTaskScope[];
  by: 'scope';
}

interface TaskFilterStateEquals {
  type: 'equals';
  values: CustodyTaskStateReq[];
  by: 'state';
}

interface TaskFilterActionEquals {
  type: 'equals';
  values: CustodyTaskAction[];
  by: 'action';
}

interface TaskFilterCreatedAtEquals {
  type: 'equals';
  values: string[];
  by: 'created_at';
}

interface TaskFilterUpdatedAtEquals {
  type: 'equals';
  values: string[];
  by: 'updated_at';
}

interface TaskFilterExpiresAtEquals {
  type: 'equals';
  values: string[];
  by: 'expires_at';
}

interface TaskFilterCurrentUserDecisionEquals {
  type: 'equals';
  values: CustodyTaskUserDecisionReq[];
  by: 'current_user_decision';
}

export type CustodyTaskFilterCondition =
  | TaskFilterIdEquals
  | TaskFilterApprovalIdEquals
  | TaskFilterVaultIdEquals
  | TaskFilterScopeEquals
  | TaskFilterStateEquals
  | TaskFilterActionEquals
  | TaskFilterCreatedAtEquals
  | TaskFilterUpdatedAtEquals
  | TaskFilterExpiresAtEquals
  | TaskFilterCurrentUserDecisionEquals;

export interface CustodyTaskFilterOr {
  or: CustodyTaskFilterCondition[];
}

export interface CustodyTaskFilters {
  and?: CustodyTaskFilterOr[];
}

export interface CustodyTaskOrdering {
  by: CustodyTaskOrderBy;
  direction?: CustodyOrderDirection;
}

export interface CustodyListTasksParams {
  nonce?: number;
  filters?: CustodyTaskFilters;
  pagination?: VaultPagination;
  orderings?: CustodyTaskOrdering[];
}

// Custody API - List Activities
type ActivityActionReq =
  | 'created'
  | 'review_approved'
  | 'review_denied'
  | 'canceled'
  | 'executed'
  | 'failed'
  | 'expired';

type ActivityOrderBy = 'activity_created_at';

interface ActivityFilterIdEquals {
  type: 'equals';
  values: string[];
  by: 'id';
}

interface ActivityFilterScopeEquals {
  type: 'equals';
  values: CustodyTaskScope[];
  by: 'scope';
}

interface ActivityFilterVaultIdEquals {
  type: 'equals';
  values: string[];
  by: 'vault_id';
}

interface ActivityFilterTaskIdEquals {
  type: 'equals';
  values: string[];
  by: 'task_id';
}

interface ActivityFilterApprovalIdEquals {
  type: 'equals';
  values: string[];
  by: 'approval_id';
}

interface ActivityFilterTaskActionEquals {
  type: 'equals';
  values: CustodyTaskAction[];
  by: 'task_action';
}

interface ActivityFilterActivityActionEquals {
  type: 'equals';
  values: ActivityActionReq[];
  by: 'activity_action';
}

interface ActivityFilterCreatedAtEquals {
  type: 'equals';
  values: string[];
  by: 'created_at';
}

interface ActivityFilterUserEquals {
  type: 'equals';
  values: string[];
  by: 'user';
}

type ActivityFilterCondition =
  | ActivityFilterIdEquals
  | ActivityFilterScopeEquals
  | ActivityFilterVaultIdEquals
  | ActivityFilterTaskIdEquals
  | ActivityFilterApprovalIdEquals
  | ActivityFilterTaskActionEquals
  | ActivityFilterActivityActionEquals
  | ActivityFilterCreatedAtEquals
  | ActivityFilterUserEquals;

interface ActivityFilterOr {
  or: ActivityFilterCondition[];
}

interface ActivityFilters {
  and?: ActivityFilterOr[];
}

interface ActivityOrdering {
  by: ActivityOrderBy;
  direction?: CustodyOrderDirection;
}

export interface CustodyListActivitiesParams {
  nonce?: number;
  filters?: ActivityFilters;
  pagination?: VaultPagination;
  orderings?: ActivityOrdering[];
}

// OTC REST API - Quotes
export type OtcQuoteType = 'buy' | 'sell';
export type OtcQuoteStatus = 'accepted' | 'rejected';
export type OtcSettlement = 'automated' | 'flexible';

export interface OTCCreateQuoteRequestParams {
  nonce?: number;
  base: string;
  quote: string;
  amount?: string;
  total?: string;
  type: OtcQuoteType;
}

export interface OTCUpdateQuoteParams {
  nonce?: number;
  quote_id: string;
  status: OtcQuoteStatus;
}
