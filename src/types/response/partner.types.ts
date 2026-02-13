// Partner API response types

/**
 * Create User response
 */
export interface PartnerCreateUserResponse {
  result: {
    user: {
      iiban: string; // Internet International Bank Account Number (IIBAN), 14-42 characters
    };
  };
}

/**
 * Get User response
 */
export interface PartnerGetUserResponse {
  result?: {
    user: string; // Kraken-assigned account id, 14-42 characters
    external_id?: string; // Optional external ID for the user set by the partner
    user_type: 'individual' | 'corporate'; // Type of the user
    status: {
      state: string; // e.g., "ok"
      required_actions?: any[]; // Simplified - array of required action objects
    };
    created_at: string; // ISO 8601 datetime
  };
}

/**
 * Update User response
 */
export interface PartnerUpdateUserResponse {
  result?: 'success';
}

/**
 * Submit Verification response
 */
export interface PartnerSubmitVerificationResponse {
  result?: {
    verification_id: string;
  };
}

/**
 * List Assets response
 */
export interface PartnerListAssetsResponse {
  result: {
    assets: any[]; // Simplified - array of asset objects
    links: any; // Pagination links
    meta: {
      total_items?: number;
      total_pages?: number;
      page_size?: number;
      page_number?: number;
    };
  };
}

/**
 * Get Asset response
 */
export interface PartnerGetAssetResponse {
  result: any; // Simplified - asset details object
}

/**
 * List Asset Rates response
 */
export interface PartnerListAssetRatesResponse {
  result: {
    rates: Array<{
      timestamp: string; // RFC 3339 datetime
      price: string; // decimal128
    }>;
    meta: any; // Simplified - metadata object
  };
}

/**
 * Request Quote response
 */
export interface PartnerRequestQuoteResponse {
  result: {
    quote_id: string;
    type: 'receive' | 'spend';
    status: any; // Simplified - status object
    expires: string; // ISO 8601 datetime
    spend: any; // Simplified - spend details object
    quoted_spend?: any; // Simplified - optional quoted spend object
    receive: any; // Simplified - receive details object
    quoted_receive?: any; // Simplified - optional quoted receive object
    unit_price: any; // Simplified - unit price object
    quoted_unit_price?: any; // Simplified - optional quoted unit price object
  };
}

/**
 * Get Quote response
 */
export interface PartnerGetQuoteResponse {
  result?: {
    quote_id: string;
    transaction_id?: string;
    type: 'receive' | 'spend';
    status: any; // Simplified - status object
    expires: string; // ISO 8601 datetime
    spend: any; // Simplified - spend details object
    quoted_spend?: any; // Simplified - optional quoted spend object
    receive: any; // Simplified - receive details object
    quoted_receive?: any; // Simplified - optional quoted receive object
    unit_price: any; // Simplified - unit price object
    quoted_unit_price?: any; // Simplified - optional quoted unit price object
  };
}

/**
 * Execute Quote response
 */
export interface PartnerExecuteQuoteResponse {
  result?: {
    quote_id: string;
    status: any; // Simplified - status object
    transaction_id?: string;
  };
}

/**
 * Get Portfolio Summary response
 */
export interface PartnerGetPortfolioSummaryResponse {
  result: {
    timestamp: string; // ISO 8601 datetime
    currency: string;
    portfolio_value: string; // decimal128
    withheld_value: string; // decimal128
    open_orders: string; // decimal128
    available_balance: string; // decimal128
    lots_upnl?: string; // decimal128
    cost_basis?: string; // decimal128
    current_day_pnl?: {
      since: string; // ISO 8601 datetime
      pnl: string; // decimal128
    };
  };
}

/**
 * Get Portfolio History response
 */
export interface PartnerGetPortfolioHistoryResponse {
  result: {
    start_date: string; // RFC3339 date
    end_date: string; // RFC3339 date
    next_cursor?: string;
    currency?: string; // AssetName
    total_pnl?: string; // decimal128
    total_pnl_pct?: string; // decimal128
    history: any[]; // Simplified - array of historical data points
  };
}

/**
 * List Portfolio Details response
 */
export interface PartnerListPortfolioDetailsResponse {
  result?: {
    timestamp: string; // ISO 8601 datetime
    currency: string;
    assets: any[]; // Simplified - array of asset detail objects
  };
}

/**
 * List Portfolio Transactions response
 */
export interface PartnerListPortfolioTransactionsResponse {
  result?: {
    transactions: any[]; // Simplified - array of transaction objects
    stats?: {
      transactions_seen?: number;
    };
    next_cursor?: string;
  };
}

/**
 * Get Earn Summary response
 */
export interface PartnerGetEarnSummaryResponse {
  result: {
    auto_earn_eligible: boolean;
    auto_earn_enabled: boolean;
    auto_earn_last_changed?: string; // ISO 8601 datetime
    payout_period: string; // ISO 8601 duration
    total_allocated_converted: string; // decimal128
    total_rewarded_converted_true_rates: string; // decimal128
    total_rewarded_converted_current_rate: string; // decimal128
    num_earning_assets: number; // uint32
    upcoming_rewards: any[]; // Simplified - array of upcoming reward objects
  };
}

/**
 * List Earn Assets response
 */
export interface PartnerListEarnAssetsResponse {
  result: {
    assets: Record<string, any>; // Simplified - object with asset names as keys
  };
}

/**
 * Toggle Auto-Earn response
 */
export interface PartnerToggleAutoEarnResponse {
  result?: any; // Empty/null on success
}

/**
 * Withdraw Funds response
 */
export interface PartnerWithdrawFundsResponse {
  result?: {
    reference_id: string;
  };
}

/**
 * List Funding Transactions response
 */
export interface PartnerListFundingTransactionsResponse {
  result: {
    transactions: Array<{
      type: 'withdrawal' | 'deposit';
      date: string; // ISO 8601 datetime
      asset: string;
      amount: string; // decimal128
      status:
        | 'initial'
        | 'pending'
        | 'settled'
        | 'success'
        | 'partial'
        | 'failure';
      ref_id: string;
    }>;
    next_cursor?: string;
  };
}

/**
 * List Settlement Reports response
 */
export interface PartnerListSettlementReportsResponse {
  result?: {
    reports: Array<{
      id: string;
      date: string; // RFC3339 date
      type: 'trades' | 'transfers' | 'earn_rewards';
      size: number; // int64, bytes
      name: string;
    }>;
    links: {
      self?: string;
      first?: string;
      last?: string;
      prev?: string;
      next?: string;
    };
    meta: {
      total_items?: number;
      total_pages?: number;
      page_size?: number;
      page_number?: number;
    };
  };
}

/**
 * Get Settlement Report response
 */
export interface PartnerGetSettlementReportResponse {
  result?: {
    id: string;
    date: string; // RFC3339 date
    type: 'trades' | 'transfers' | 'earn_rewards';
    size: number; // int64, bytes
    name: string;
    download_url: string;
    expires_at: string; // ISO 8601 datetime
  };
}

/**
 * List Ramp Buy Crypto Assets response
 */
export interface PartnerListRampBuyCryptoAssetsResponse {
  result: {
    assets: any[]; // Simplified - array of crypto asset objects
  };
}

/**
 * List Ramp Fiat Currencies response
 */
export interface PartnerListRampFiatCurrenciesResponse {
  result: {
    currencies: Array<{
      asset: string; // AssetName, 3-16 chars
      asset_class?: 'currency';
    }>;
  };
}

/**
 * List Ramp Payment Methods response
 */
export interface PartnerListRampPaymentMethodsResponse {
  result: {
    methods: Array<{
      funding_type: string;
      external_id?: string;
    }>;
  };
}

/**
 * List Ramp Countries response
 */
export interface PartnerListRampCountriesResponse {
  result: {
    countries: any[]; // Simplified - array of country objects
  };
}

/**
 * Get Ramp Limits response
 */
export interface PartnerGetRampLimitsResponse {
  result: {
    limits: any; // Simplified - complex nested limits object
  };
}

/**
 * Get Ramp Prospective Quote response
 */
export interface PartnerGetRampProspectiveQuoteResponse {
  result: {
    spend: any; // Simplified - asset breakdown object
    receive: any; // Simplified - asset breakdown object
    unit_price: any; // Simplified - unit price object
  };
}

/**
 * Get Ramp Checkout URL response
 */
export interface PartnerGetRampCheckoutUrlResponse {
  result: {
    checkout_url: string; // URI
    request_data: any; // Simplified - original request payload object
  };
}
