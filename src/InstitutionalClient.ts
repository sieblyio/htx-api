import { nanoid } from 'nanoid';

import { BaseRestClient } from './lib/BaseRestClient.js';
import { REST_CLIENT_TYPE_ENUM, RestClientType } from './lib/requestUtils.js';
import {
  CustodyDepositAddressesParams,
  CustodyDepositMethodsParams,
  CustodyGetTransactionParams,
  CustodyListActivitiesParams,
  CustodyListTasksParams,
  CustodyListTransactionsParams,
  CustodyListVaultsParams,
  CustodyWithdrawAddressesParams,
  CustodyWithdrawMethodsParams,
  OTCCreateQuoteRequestParams,
  OTCUpdateQuoteParams,
} from './types/request/institutional.types.js';
import {
  CustodyDepositAddressesResponse,
  CustodyDepositMethodsResponse,
  CustodyGetActivityResponse,
  CustodyGetTaskResponse,
  CustodyGetTransactionResponse,
  CustodyGetVaultResponse,
  CustodyListActivitiesResponse,
  CustodyListTasksResponse,
  CustodyListTransactionsResponse,
  CustodyListVaultsResponse,
  CustodyWithdrawAddressesResponse,
  CustodyWithdrawMethodsResponse,
  OTCCheckClientResponse,
  OTCCreateQuoteResponse,
  OTCGetActiveQuotesResponse,
  OTCGetExposuresResponse,
  OTCGetHistoricalQuotesResponse,
  OTCGetPairsResponse,
  OTCUpdateQuoteResponse,
} from './types/response/institutional.types.js';

/**
 * The InstitutionalClient provides integration to the Kraken Institutional API.
 *
 * Docs:
 * - https://docs.kraken.com/api/docs/custody-api
 * - https://docs.kraken.com/api/docs/otc-api
 */
export class InstitutionalClient extends BaseRestClient {
  getClientType(): RestClientType {
    return REST_CLIENT_TYPE_ENUM.institutional;
  }

  /**
   *
   * Misc Utility Methods
   *
   */

  generateNewOrderID(): string {
    return nanoid(32);
  }

  /**
   *
   * Custody REST API - Portfolios
   *
   */

  /**
   * List vaults
   *
   * Retrieve all vaults within the custody domain.
   */
  listCustodyVaults(
    params: CustodyListVaultsParams,
  ): Promise<CustodyListVaultsResponse> {
    return this.postPrivate('0/private/ListCustodyVaults', {
      body: params,
    });
  }

  /**
   * Get vault information by id
   *
   * Retrieve information and balances for a specific vault.
   */
  getCustodyVaultbyId(params: {
    id: string;
    nonce?: number;
  }): Promise<CustodyGetVaultResponse> {
    const { id, ...bodyParams } = params;
    return this.postPrivate('0/private/GetCustodyVault', {
      query: { id: id },
      body: bodyParams,
    });
  }

  /**
   * Get deposit methods
   *
   * Retrieve the available deposit funding methods for depositing a specific asset.
   * The deposit method is required to retrieve deposit addresses using the Get Deposit Addresses API.
   */
  getCustodyDepositMethods(
    params: CustodyDepositMethodsParams,
  ): Promise<CustodyDepositMethodsResponse> {
    const { 'x-vault-id': vaultId, ...bodyParams } = params;
    return this.postPrivate('0/private/DepositMethods', {
      headers: { 'x-vault-id': vaultId },
      body: bodyParams,
    });
  }

  /**
   * Get deposit addresses
   *
   * Retrieve (or generate a new) deposit addresses for a particular asset and funding method.
   * Use the Get Deposit Methods API to identify the appropriate deposit method.
   */
  getCustodyDepositAddresses(
    params: CustodyDepositAddressesParams,
  ): Promise<CustodyDepositAddressesResponse> {
    const { 'x-vault-id': vaultId, ...bodyParams } = params;
    return this.postPrivate('0/private/DepositAddresses', {
      headers: { 'x-vault-id': vaultId },
      body: bodyParams,
    });
  }

  /**
   * List custody transactions
   *
   * Retrieve the transaction history for a specified vault.
   */
  listCustodyTransactions(
    params: CustodyListTransactionsParams,
  ): Promise<CustodyListTransactionsResponse> {
    const { id, ...bodyParams } = params;
    return this.postPrivate('0/private/ListCustodyTransactions', {
      query: { id: id },
      body: bodyParams,
    });
  }

  /**
   * Get transaction by id
   *
   * Get transaction by id
   */
  getCustodyTransactionbyId(
    params: CustodyGetTransactionParams,
  ): Promise<CustodyGetTransactionResponse> {
    const { id, ...bodyParams } = params;
    return this.postPrivate('0/private/GetCustodyTransaction', {
      query: { id: id },
      body: bodyParams,
    });
  }

  /**
   *
   * Custody REST API - Transfers
   *
   */

  /**
   * Get withdraw methods
   *
   * Retrieve a list of withdrawal methods available for a specified vault.
   */
  getCustodyWithdrawMethods(
    params: CustodyWithdrawMethodsParams,
  ): Promise<CustodyWithdrawMethodsResponse> {
    const { 'x-vault-id': vaultId, ...bodyParams } = params;
    return this.postPrivate('0/private/WithdrawMethods', {
      headers: { 'x-vault-id': vaultId },
      body: bodyParams,
    });
  }

  /**
   * Get withdraw addresses
   *
   * Retrieve a list of withdrawal addresses for a specified vault.
   */
  getCustodyWithdrawAddresses(
    params: CustodyWithdrawAddressesParams,
  ): Promise<CustodyWithdrawAddressesResponse> {
    const {
      'x-vault-id': vaultId,
      preferred_asset_name,
      ...bodyParams
    } = params;
    return this.postPrivate('0/private/WithdrawAddresses', {
      query: preferred_asset_name ? { preferred_asset_name } : undefined,
      headers: { 'x-vault-id': vaultId },
      body: bodyParams,
    });
  }

  /**
   *
   * Custody REST API - Tasks
   *
   */

  /**
   * List tasks
   *
   * Retrieve review tasks that match the specified filter criteria.
   */
  listCustodyTasks(
    params: CustodyListTasksParams,
  ): Promise<CustodyListTasksResponse> {
    return this.postPrivate('0/private/ListCustodyTasks', {
      body: params,
    });
  }

  /**
   * Get task by id
   *
   * Retrieve details for a specific task.
   */
  getCustodyTaskbyId(params: {
    id: string;
    nonce?: number;
  }): Promise<CustodyGetTaskResponse> {
    const { id, ...bodyParams } = params;
    return this.postPrivate('0/private/GetCustodyTask', {
      query: { id: id },
      body: bodyParams,
    });
  }

  /**
   * List activities
   *
   * Retrieve all activities that match the specified filter criteria.
   */
  listCustodyActivities(
    params: CustodyListActivitiesParams,
  ): Promise<CustodyListActivitiesResponse> {
    return this.postPrivate('0/private/ListCustodyActivities', {
      body: params,
    });
  }

  /**
   * Get activity by id
   *
   * Retrieve details for a specific task activity.
   */
  getCustodyActivitybyId(params: {
    id: string;
    nonce?: number;
  }): Promise<CustodyGetActivityResponse> {
    const { id, ...bodyParams } = params;
    return this.postPrivate('0/private/GetCustodyActivity', {
      query: { id: id },
      body: bodyParams,
    });
  }

  /**
   *
   * OTC REST API - Quotes
   *
   */

  /**
   * Create OTC Quote
   *
   * Creates a new OTC request for quote.
   * API Key Permissions Required: Orders and trades - Create & modify orders
   */
  createOtcQuoteRequest(
    params: OTCCreateQuoteRequestParams,
  ): Promise<OTCCreateQuoteResponse> {
    return this.postPrivate('0/private/CreateOtcQuoteRequest', {
      body: params,
    });
  }

  /**
   * Update OTC Quote
   *
   * Accepts or rejects an OTC quote.
   * API Key Permissions Required: Orders and trades - Create & modify orders
   */
  updateOtcQuote(
    params: OTCUpdateQuoteParams,
  ): Promise<OTCUpdateQuoteResponse> {
    return this.postPrivate('0/private/UpdateOtcQuote', {
      body: params,
    });
  }

  /**
   * Get OTC Pairs
   *
   * Retrieves the list of OTC trading pairs.
   * API Key Permissions Required: Funds permissions - Query and Funds permissions - Deposit
   */
  getOtcPairs(params?: { nonce?: number }): Promise<OTCGetPairsResponse> {
    return this.postPrivate('0/private/GetOtcPairs', {
      body: params,
    });
  }

  /**
   * Get OTC Active Quotes
   *
   * Retrieves a list of active OTC quotes.
   * API Key Permissions Required: Orders and trades - Query open orders & trades
   */
  getOtcActiveQuotes(params?: {
    nonce?: number;
    vault_id?: string;
  }): Promise<OTCGetActiveQuotesResponse> {
    return this.postPrivate('0/private/GetOtcActiveQuotes', {
      body: params,
    });
  }

  /**
   * Get OTC Historical Quotes
   *
   * Retrieves OTC quotes history.
   * API Key Permissions Required: Orders and trades - Query open orders & trades
   */
  getOtcHistoricalQuotes(params?: {
    nonce?: number;
  }): Promise<OTCGetHistoricalQuotesResponse> {
    return this.postPrivate('0/private/GetOtcHistoricalQuotes', {
      body: params,
    });
  }

  /**
   * Get OTC Exposures
   *
   * Retrieves the max and used OTC exposures.
   * API Key Permissions Required: Orders and trades - Query open orders & trades
   */
  getOtcExposures(params?: {
    nonce?: number;
  }): Promise<OTCGetExposuresResponse> {
    return this.postPrivate('0/private/GetOtcExposures', {
      body: params,
    });
  }

  /**
   * Check OTC Eligibility
   *
   * Retrieves the client permissions for the OTC Portal.
   * API Key Permissions Required: Funds permissions - Query and Funds permissions - Deposit
   */
  checkOtcClient(params?: { nonce?: number }): Promise<OTCCheckClientResponse> {
    return this.postPrivate('0/private/CheckOtcClient', {
      body: params,
    });
  }
}
