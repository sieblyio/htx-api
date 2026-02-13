// Partner API request types

/**
 * Create User request parameters
 */
export interface PartnerCreateUserParams {
  email: string;
  external_id: string;
  tos_version_accepted: number;
  full_name: {
    first_name: string;
    middle_name?: string;
    last_name: string;
  };
  date_of_birth: string; // format: date (YYYY-MM-DD)
  residence: {
    line1: string;
    line2?: string;
    city: string;
    postal_code: string;
    province?: string;
    country: string; // CountryCode
  };
  phone: string; // E.164 format
  nationalities: string[]; // CountryCode[]
  occupation:
    | 'agriculture'
    | 'business_management'
    | 'computers_and_it'
    | 'construction'
    | 'education'
    | 'finance'
    | 'government'
    | 'healthcare'
    | 'hospitality'
    | 'manufacturing'
    | 'marketing'
    | 'media'
    | 'other'
    | 'science'
    | 'self_employed'
    | 'student'
    | 'transportation'
    | 'unemployed';
  city_of_birth?: string;
  country_of_birth?: string; // CountryCode
  tax_ids?: Array<{
    id: string;
    issuing_country: string; // CountryCode
  }>;
  language?: string; // ISO 639-1 language code
}

/**
 * Update User request parameters
 */
export interface PartnerUpdateUserParams {
  user: string;
  tos_version_accepted?: number;
  full_name?: {
    first_name: string;
    middle_name?: string;
    last_name: string;
  };
  date_of_birth?: string; // format: date (YYYY-MM-DD)
  city_of_birth?: string;
  country_of_birth?: string; // CountryCode
  residence?: {
    line1: string;
    line2?: string;
    city: string;
    postal_code: string;
    province?: string;
    country: string; // CountryCode
  };
  phone?: string; // E.164 format
  nationalities?: string[]; // CountryCode[]
  tax_ids?: Array<{
    id: string;
    issuing_country: string; // CountryCode
  }>;
  occupation?:
    | 'agriculture'
    | 'business_management'
    | 'computers_and_it'
    | 'construction'
    | 'education'
    | 'finance'
    | 'government'
    | 'healthcare'
    | 'hospitality'
    | 'manufacturing'
    | 'marketing'
    | 'media'
    | 'other'
    | 'science'
    | 'self_employed'
    | 'student'
    | 'transportation'
    | 'unemployed';
  language?: string; // ISO 639-1 language code
}

/**
 * Submit Verification request parameters
 */
export interface PartnerSubmitVerificationParams {
  user: string;
  type: 'identity_document';
  metadata: {
    identity: {
      full_name: {
        first_name: string;
        middle_name?: string;
        last_name: string;
      };
      date_of_birth: string; // format: date (YYYY-MM-DD)
    };
    document_type:
      | 'passport'
      | 'drivers_license'
      | 'id_card'
      | 'residence_card'
      | 'special_permanent_residence_card';
    document_number: string;
    issuing_country: string; // CountryCode
    nationality?: string; // CountryCode
  };
  verifier: string; // Name of the verification provider
  verified_at: string; // ISO 8601 datetime
  verifier_response?: any;
  external_verification_id?: string;
  expiration_date?: string; // ISO 8601 date
  front: any; // File binary for front side of document
  back: any; // File binary for back side of document
  verifier_response_file?: any; // File binary for verifier response
}

/**
 * List Assets request parameters
 */
export interface PartnerListAssetsParams {
  'filter[user]'?: string; // IIBAN
  'filter[assets][]'?: string[]; // AssetName[], max 100
  'filter[platform_statuses][]'?: Array<
    | 'enabled'
    | 'deposit_only'
    | 'withdrawal_only'
    | 'funding_temporarily_disabled'
    | 'disabled'
  >;
  'filter[tradable_only]'?: boolean;
  sort?:
    | 'trending'
    | 'market_cap_rank'
    | '-market_cap_rank'
    | 'symbol'
    | '-symbol'
    | 'name'
    | '-name'
    | 'change_percent_1h'
    | '-change_percent_1h'
    | 'change_percent_24h'
    | '-change_percent_24h'
    | 'change_percent_7d'
    | '-change_percent_7d'
    | 'change_percent_30d'
    | '-change_percent_30d'
    | 'change_percent_1y'
    | '-change_percent_1y'
    | 'listing_date'
    | '-listing_date';
  'page[size]'?: number; // 1-100
  'page[number]'?: number; // >= 1
  quote?: string; // AssetName, default USD
  lang?: string; // ISO language code, default en
}

/**
 * Get Asset request parameters
 */
export interface PartnerGetAssetParams {
  asset: string;
  quote?: string; // AssetName, default USD
  lang?: string; // ISO language code, default en
}

/**
 * List Asset Rates request parameters
 */
export interface PartnerListAssetRatesParams {
  asset: string;
  quote?: string; // AssetName, default USD
  start_time?: string; // RFC 3339 datetime
  end_time?: string; // RFC 3339 datetime
  interval?: string; // ISO 8601 duration (PT15M, PT60M, P1D, etc.)
}

/**
 * Request Quote request parameters
 */
export interface PartnerRequestQuoteParams {
  user: string; // IIBAN
  type: 'receive' | 'spend'; // Type of quote
  amount: {
    asset_class?: 'currency';
    asset: string; // AssetName
    amount: string; // decimal128
  };
  quote: {
    asset: string; // AssetName
  };
  fee_bps: string; // Basis points
  spread_bps: string; // Basis points
  quote_currency?: string; // AssetName
}

/**
 * Get Quote request parameters
 */
export interface PartnerGetQuoteParams {
  quote_id: string;
  user: string; // IIBAN
}

/**
 * Execute Quote request parameters
 */
export interface PartnerExecuteQuoteParams {
  quote_id: string;
  user: string; // IIBAN
}

/**
 * Get Portfolio Summary request parameters
 */
export interface PartnerGetPortfolioSummaryParams {
  user: string; // IIBAN
  quote?: string; // AssetName, default USD
  'include[current_day_pnl]'?: any; // Include the current day pnl
}

/**
 * Get Portfolio History request parameters
 */
export interface PartnerGetPortfolioHistoryParams {
  user: string; // IIBAN
  'include[assets][]'?: string[]; // AssetName[]
  'include[total_balance]'?: boolean;
  'include[total_pnl]'?: boolean;
  start_date?: string; // date format
  end_date?: string; // date format
  resolution?: number; // uint32, default 1
  quote?: string; // AssetName, default USD
  cursor?: string; // Pagination cursor
}

/**
 * List Portfolio Details request parameters
 */
export interface PartnerListPortfolioDetailsParams {
  user: string; // IIBAN
  quote?: string; // AssetName, default USD
}

/**
 * List Portfolio Transactions request parameters
 */
export interface PartnerListPortfolioTransactionsParams {
  user: string; // IIBAN
  cursor?: string;
  types?: Array<'simple_order' | 'simple_order_failed' | 'earn_reward'>;
  page_size?: number; // uint64
  assets?: string[]; // AssetName[], max 16 chars each
  from_time?: string; // date-time
  until_time?: string; // date-time
  statuses?: Array<
    'no_status' | 'unspecified' | 'in_progress' | 'successful' | 'failed'
  >;
  ids?: string[];
  sorting?: 'descending' | 'ascending';
  ref_ids?: any[]; // Simplified - array of reference ID filter objects
  quote?: string; // AssetName, max 16 chars
}

/**
 * Get Earn Summary request parameters
 */
export interface PartnerGetEarnSummaryParams {
  user: string; // IIBAN
  currency?: string; // max 16 chars
}

/**
 * List Earn Assets request parameters
 */
export interface PartnerListEarnAssetsParams {
  assets?: string[]; // AssetName[], max 16 chars each
  user?: string; // IIBAN, 14-42 chars
  currency?: string; // max 16 chars, required if user is set
}

/**
 * Toggle Auto-Earn request parameters
 */
export interface PartnerToggleAutoEarnParams {
  user: string; // IIBAN
  want_enabled: boolean;
}

/**
 * Withdraw Funds request parameters
 */
export interface PartnerWithdrawFundsParams {
  asset: string; // AssetName, 3-16 chars
  key: string; // Withdrawal key
  amount: string; // decimal128
}

/**
 * List Funding Transactions request parameters
 */
export interface PartnerListFundingTransactionsParams {
  type: 'withdrawal' | 'deposit';
  cursor?: string;
  page_size?: number; // uint32, 1-500, default 25
}

/**
 * List Settlement Reports request parameters
 */
export interface PartnerListSettlementReportsParams {
  'filter[start_date]'?: string; // RFC 3339 datetime
  'filter[end_date]'?: string; // RFC 3339 datetime
  'filter[report_type][]'?: Array<'trades' | 'transfers' | 'earn_rewards'>;
  'page[size]'?: number; // uint32, 1-100, default 20
  'page[number]'?: number; // uint32, >= 1, default 1
}

/**
 * Get Settlement Report request parameters
 */
export interface PartnerGetSettlementReportParams {
  id: string;
}

/**
 * Get Ramp Limits request parameters
 */
export interface PartnerGetRampLimitsParams {
  in_asset: string; // max 16 chars
  out_asset: string; // max 16 chars
  funding_type: string;
  withdrawal_method: string;
}

/**
 * Get Ramp Prospective Quote request parameters
 */
export interface PartnerGetRampProspectiveQuoteParams {
  in_asset: string; // max 16 chars
  in_amount: string; // decimal128
  out_asset: string; // max 16 chars
  funding_type: string;
  withdrawal_method: string;
}

/**
 * Get Ramp Checkout URL request parameters
 */
export interface PartnerGetRampCheckoutUrlParams {
  in_asset: string; // max 16 chars
  in_amount: string; // decimal128
  out_asset: string; // max 16 chars
  funding_type: string;
  withdrawal_method: string;
  country?: string; // max 2 chars, ISO 3166-1 alpha-2
  redirect_url?: string; // URI
  network?: string;
  external_user_id?: string; // max 36 chars
  external_transaction_id?: string; // max 36 chars
  external_metadata?: string; // max 1000 chars
}
