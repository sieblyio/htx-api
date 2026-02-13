import { BaseRestClient } from './lib/BaseRestClient.js';
import { REST_CLIENT_TYPE_ENUM, RestClientType } from './lib/requestUtils.js';
import {
  PartnerCreateUserParams,
  PartnerExecuteQuoteParams,
  PartnerGetAssetParams,
  PartnerGetEarnSummaryParams,
  PartnerGetPortfolioHistoryParams,
  PartnerGetPortfolioSummaryParams,
  PartnerGetQuoteParams,
  PartnerGetRampCheckoutUrlParams,
  PartnerGetRampLimitsParams,
  PartnerGetRampProspectiveQuoteParams,
  PartnerGetSettlementReportParams,
  PartnerListAssetRatesParams,
  PartnerListAssetsParams,
  PartnerListEarnAssetsParams,
  PartnerListFundingTransactionsParams,
  PartnerListPortfolioDetailsParams,
  PartnerListPortfolioTransactionsParams,
  PartnerListSettlementReportsParams,
  PartnerRequestQuoteParams,
  PartnerSubmitVerificationParams,
  PartnerToggleAutoEarnParams,
  PartnerUpdateUserParams,
  PartnerWithdrawFundsParams,
} from './types/request/partner.types.js';
import {
  PartnerCreateUserResponse,
  PartnerExecuteQuoteResponse,
  PartnerGetAssetResponse,
  PartnerGetEarnSummaryResponse,
  PartnerGetPortfolioHistoryResponse,
  PartnerGetPortfolioSummaryResponse,
  PartnerGetQuoteResponse,
  PartnerGetRampCheckoutUrlResponse,
  PartnerGetRampLimitsResponse,
  PartnerGetRampProspectiveQuoteResponse,
  PartnerGetSettlementReportResponse,
  PartnerGetUserResponse,
  PartnerListAssetRatesResponse,
  PartnerListAssetsResponse,
  PartnerListEarnAssetsResponse,
  PartnerListFundingTransactionsResponse,
  PartnerListPortfolioDetailsResponse,
  PartnerListPortfolioTransactionsResponse,
  PartnerListRampBuyCryptoAssetsResponse,
  PartnerListRampCountriesResponse,
  PartnerListRampFiatCurrenciesResponse,
  PartnerListRampPaymentMethodsResponse,
  PartnerListSettlementReportsResponse,
  PartnerRequestQuoteResponse,
  PartnerSubmitVerificationResponse,
  PartnerToggleAutoEarnResponse,
  PartnerUpdateUserResponse,
  PartnerWithdrawFundsResponse,
} from './types/response/partner.types.js';

/**
 * The PartnerClient provides integration to the Kraken Partner API.
 *
 * Docs:
 * - https://docs.kraken.com/api/docs/embed-api
 * - https://docs.kraken.com/api/docs/ramp-api
 */
export class PartnerClient extends BaseRestClient {
  getClientType(): RestClientType {
    return REST_CLIENT_TYPE_ENUM.partner;
  }

  /**
   *
   * Partner REST API - Embed API - Users
   *
   */

  /**
   * Create User
   *
   * Create a new user in the Kraken system.
   */
  createEmbedUser(
    params: PartnerCreateUserParams,
  ): Promise<PartnerCreateUserResponse> {
    return this.postPrivate('b2b/users', {
      body: params,
    });
  }

  /**
   * Get User
   *
   * Get a previously created user.
   */
  getEmbedUser(params: { user: string }): Promise<PartnerGetUserResponse> {
    return this.getPrivate(`b2b/users/${params.user}`);
  }

  /**
   * Update User
   *
   * Update an existing user's profile.
   */
  updateEmbedUser(
    params: PartnerUpdateUserParams,
  ): Promise<PartnerUpdateUserResponse> {
    const { user, ...bodyParams } = params;
    return this.patchPrivate(`b2b/users/${user}`, {
      body: bodyParams,
    });
  }

  /**
   *
   * Partner REST API - Embed API - Verifications
   *
   */

  /**
   * Submit Verification
   *
   * Submit a verification for a user with documents and details.
   * A verification is defined as a check that has been performed on a user to verify information provided by the user.
   * Note: This endpoint uses multipart/form-data for file uploads.
   */
  submitEmbedVerification(
    params: PartnerSubmitVerificationParams,
  ): Promise<PartnerSubmitVerificationResponse> {
    const { user, ...bodyParams } = params;
    return this.postPrivate(`b2b/verifications/${user}`, {
      body: bodyParams,
    });
  }

  /**
   *
   * Partner REST API - Embed API - Assets
   *
   */

  /**
   * List Assets
   *
   * List all assets available on the platform.
   * This endpoint returns a list of all assets available on the platform.
   */
  listEmbedAssets(
    params?: PartnerListAssetsParams,
  ): Promise<PartnerListAssetsResponse> {
    return this.getPrivate('b2b/assets', params);
  }

  /**
   * Get Asset
   *
   * Get information about a specific asset.
   */
  getEmbedAsset(
    params: PartnerGetAssetParams,
  ): Promise<PartnerGetAssetResponse> {
    const { asset, ...queryParams } = params;
    return this.getPrivate(`b2b/assets/${asset}`, queryParams);
  }

  /**
   * List Asset Rates
   *
   * Returns historical rates for a given asset.
   * This endpoint returns historical rates for a given asset with timestamp and median price for each period.
   */
  listEmbedAssetRates(
    params: PartnerListAssetRatesParams,
  ): Promise<PartnerListAssetRatesResponse> {
    const { asset, ...queryParams } = params;
    return this.getPrivate(`b2b/assets/${asset}/rates`, queryParams);
  }

  /**
   *
   * Partner REST API - Embed API - Quotes
   *
   */

  /**
   * Request Quote
   *
   * Request a price quote for an asset, that may be used to execute a trade later on.
   */
  requestEmbedQuote(
    params: PartnerRequestQuoteParams,
  ): Promise<PartnerRequestQuoteResponse> {
    const { user, ...bodyParams } = params;
    return this.postPrivate('b2b/quotes', {
      query: { user },
      body: bodyParams,
    });
  }

  /**
   * Get Quote
   *
   * Gets the status of a quote that was previously requested.
   */
  getEmbedQuote(
    params: PartnerGetQuoteParams,
  ): Promise<PartnerGetQuoteResponse> {
    const { quote_id, user } = params;
    return this.getPrivate(`b2b/quotes/${quote_id}`, { user });
  }

  /**
   * Execute Quote
   *
   * Executes a quote that was previously requested.
   */
  executeEmbedQuote(
    params: PartnerExecuteQuoteParams,
  ): Promise<PartnerExecuteQuoteResponse> {
    const { quote_id, ...queryParams } = params;
    return this.putPrivate(`b2b/quotes/${quote_id}`, {
      query: queryParams,
    });
  }

  /**
   *
   * Partner REST API - Embed API - Portfolios
   *
   */

  /**
   * Get Portfolio Summary
   *
   * Get the portfolio summary for a user.
   */
  getEmbedPortfolioSummary(
    params: PartnerGetPortfolioSummaryParams,
  ): Promise<PartnerGetPortfolioSummaryResponse> {
    const { user, ...queryParams } = params;
    return this.getPrivate(`b2b/portfolio/${user}/summary`, queryParams);
  }

  /**
   * Get Portfolio History
   *
   * Gets a portfolio's historical balances and valuations over time.
   * Note: Balance for the last day shows up at UTC + 5h due to processing times.
   */
  getEmbedPortfolioHistory(
    params: PartnerGetPortfolioHistoryParams,
  ): Promise<PartnerGetPortfolioHistoryResponse> {
    const { user, ...queryParams } = params;
    return this.getPrivate(`b2b/portfolio/${user}/history`, queryParams);
  }

  /**
   * List Portfolio Details
   *
   * Lists owned assets in a user's portfolio.
   */
  listEmbedPortfolioDetails(
    params: PartnerListPortfolioDetailsParams,
  ): Promise<PartnerListPortfolioDetailsResponse> {
    const { user, ...queryParams } = params;
    return this.getPrivate(`b2b/portfolio/${user}/details`, queryParams);
  }

  /**
   * List Portfolio Transactions
   *
   * Lists the user's trades and transactions.
   */
  listEmbedPortfolioTransactions(
    params: PartnerListPortfolioTransactionsParams,
  ): Promise<PartnerListPortfolioTransactionsResponse> {
    const { user, ...queryParams } = params;
    return this.getPrivate(`b2b/portfolio/${user}/transactions`, queryParams);
  }

  /**
   *
   * Partner REST API - Embed API - Earn
   *
   */

  /**
   * Get Earn Summary
   *
   * Get Earn summary of a user.
   * Response holds total amounts (all-time). For per-asset granularity, use listEarnAssets().
   */
  getEmbedEarnSummary(
    params: PartnerGetEarnSummaryParams,
  ): Promise<PartnerGetEarnSummaryResponse> {
    const { user, ...queryParams } = params;
    return this.getPrivate(`b2b/earn/${user}`, queryParams);
  }

  /**
   * List Earn Assets
   *
   * List Earn Assets.
   * The user can optionally be passed in the request, which shows active asset allocations of the user in the response.
   */
  listEmbedEarnAssets(
    params?: PartnerListEarnAssetsParams,
  ): Promise<PartnerListEarnAssetsResponse> {
    return this.getPrivate('b2b/earn/assets', params);
  }

  /**
   * Toggle Auto-Earn
   *
   * Toggle Auto-Earn of a user.
   * Toggling Auto-Earn is an async operation. The response is empty on success.
   * To fetch the user's current Auto-Earn status, use getEarnSummary().
   */
  toggleEmbedAutoEarn(
    params: PartnerToggleAutoEarnParams,
  ): Promise<PartnerToggleAutoEarnResponse> {
    const { user, ...queryParams } = params;
    return this.putPrivate(`b2b/earn/${user}/auto`, {
      query: queryParams,
    });
  }

  /**
   *
   * Partner REST API - Embed API - Transfers
   *
   */

  /**
   * Withdraw Funds
   *
   * Withdraw funds.
   * Note: Currently, this is a master-only operation. No User parameter exists.
   */
  withdrawEmbedFunds(
    params: PartnerWithdrawFundsParams,
  ): Promise<PartnerWithdrawFundsResponse> {
    return this.postPrivate('b2b/funds/withdrawals', {
      body: params,
    });
  }

  /**
   * List Funding Transactions
   *
   * List Funding transactions.
   * Funding transactions can be of type withdrawal or deposit.
   * Note: Currently, this is a master-only operation. No User parameter exists.
   */
  listEmbedFundingTransactions(
    params: PartnerListFundingTransactionsParams,
  ): Promise<PartnerListFundingTransactionsResponse> {
    return this.getPrivate('b2b/funds/transactions', params);
  }

  /**
   *
   * Partner REST API - Embed API - Reports
   *
   */

  /**
   * List Settlement Reports
   *
   * Retrieves a paginated list of settlement reports available to the authenticated master user,
   * with optional filters for date range and report type.
   */
  listEmbedSettlementReports(
    params?: PartnerListSettlementReportsParams,
  ): Promise<PartnerListSettlementReportsResponse> {
    return this.getPrivate('b2b/reports/settlement', params);
  }

  /**
   * Get Settlement Report
   *
   * Retrieves a settlement report and provides a secure download URL for the authenticated master user.
   */
  getEmbedSettlementReport(
    params: PartnerGetSettlementReportParams,
  ): Promise<PartnerGetSettlementReportResponse> {
    return this.getPrivate(`b2b/reports/settlement/${params.id}`);
  }

  /**
   *
   * Partner REST API - Ramp API - Supported Options
   *
   */

  /**
   * List Buy Crypto Assets
   *
   * List cryptocurrency assets available for Ramp buy transactions,
   * including the networks, withdrawal methods, and provider-specific identifiers.
   */
  listRampBuyCryptoAssets(): Promise<PartnerListRampBuyCryptoAssetsResponse> {
    return this.getPrivate('b2b/ramp/buy/crypto');
  }

  /**
   * List Fiat Currencies
   *
   * List fiat currencies supported for funding Ramp transactions.
   */
  listRampFiatCurrencies(): Promise<PartnerListRampFiatCurrenciesResponse> {
    return this.getPrivate('b2b/ramp/fiat-currencies');
  }

  /**
   * List Payment Methods
   *
   * List fiat payment methods supported for Ramp deposits,
   * including optional mapping to provider-specific identifiers.
   */
  listRampPaymentMethods(): Promise<PartnerListRampPaymentMethodsResponse> {
    return this.getPrivate('b2b/ramp/payment-methods');
  }

  /**
   * List Countries
   *
   * List countries and regions where Ramp is available.
   * Depending on regulatory rules, availability may be scoped to specific states, provinces, or regions.
   */
  listRampCountries(): Promise<PartnerListRampCountriesResponse> {
    return this.getPrivate('b2b/ramp/countries');
  }

  /**
   *
   * Partner REST API - Ramp API - Quotes
   *
   */

  /**
   * Get Limits
   *
   * Retrieve combined min/max limits for a Ramp transaction configuration.
   */
  getRampLimits(
    params: PartnerGetRampLimitsParams,
  ): Promise<PartnerGetRampLimitsResponse> {
    return this.getPrivate('b2b/ramp/limits', params);
  }

  /**
   * Get Prospective Quote
   *
   * Retrieve a prospective quote for a Ramp transaction without reserving liquidity.
   * Use this to preview spend/receive amounts before creating a checkout URL.
   */
  getRampProspectiveQuote(
    params: PartnerGetRampProspectiveQuoteParams,
  ): Promise<PartnerGetRampProspectiveQuoteResponse> {
    return this.getPrivate('b2b/ramp/quotes/prospective', params);
  }

  /**
   *
   * Partner REST API - Ramp API - Checkout
   *
   */

  /**
   * Get Checkout URL
   *
   * Generate a hosted Ramp checkout URL for the provided transaction configuration.
   * The response echoes the request parameters so the Ramp partner can confirm what was submitted.
   */
  getRampCheckoutUrl(
    params: PartnerGetRampCheckoutUrlParams,
  ): Promise<PartnerGetRampCheckoutUrlResponse> {
    return this.getPrivate('b2b/ramp/checkout', params);
  }
}
