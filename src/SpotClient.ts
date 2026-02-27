import { BaseRestClient } from './lib/BaseRestClient.js';
import { REST_CLIENT_TYPE_ENUM, RestClientType } from './lib/requestUtils.js';
import type {
  SpotAccountTransferReq,
  SpotBrokerAccountCapitalSnapshotReq,
  SpotBrokerSubUserFeeRateAddReq,
  SpotBrokerSubUserFeeRateReq,
  SpotBrokerUserRebateStatusReq,
  SpotCrossMarginLoanOrdersReq,
  SpotDepositWithdrawQueryReq,
  SpotGetAccountHistoryReq,
  SpotGetAccountLedgerReq,
  SpotGetAssetValuationReq,
  SpotGetChainsReq,
  SpotGetDepthReq,
  SpotGetKlineReq,
  SpotGetMatchResultsReq,
  SpotGetOpenOrdersReq,
  SpotGetOrderHistory48hReq,
  SpotGetOrderHistoryReq,
  SpotMarginLoanOrderReq,
  SpotMarginLoanOrdersReq,
  SpotMarginRepaymentReq,
  SpotMarginTransferInIsolatedReq,
  SpotMarginTransferOutIsolatedReq,
  SpotRepaymentRecordReq,
  SpotSubUserApiKeyCreationReq,
  SpotSubUserApiKeyUpdateReq,
  SpotSubUserCreationReq,
  SpotSubUserDepositHistoryReq,
  SpotSubUserManagedTransferHistoryReq,
  SpotSubUserTradableMarketReq,
  SpotSubUserTransferPermissionsReq,
  SpotSubUserTransferReq,
  SpotV1FuturesTransferReq,
  SpotV1OrderAutoPlaceReq,
  SpotV1OrderBatchCancelOpenOrdersReq,
  SpotV1OrderBatchPlaceReq,
  SpotV1OrderPlaceReq,
  SpotV2AccountTransferReq,
  SpotV2AlgoOrdersHistoryReq,
  SpotV2AlgoOrdersOpeningReq,
  SpotV2AlgoOrdersPlaceReq,
  SpotV2PointTransferReq,
  SpotWithdrawAddressReq,
  SpotWithdrawCreateReq,
} from './types/request/spot.types.js';
import { SpotAPISuccessResponse } from './types/response/shared.types.js';
import {
  SpotAccount,
  SpotAccountBalance,
  SpotAccountHistoryItem,
  SpotAccountTransferData,
  SpotBrokerAccountCapitalSnapshot,
  SpotBrokerFeeRateAddResult,
  SpotBrokerSubUserFeeRate,
  SpotBrokerUserRebateStatus,
  SpotCrossMarginAccountBalance,
  SpotCrossMarginLoanOrder,
  SpotCurrency,
  SpotDepositAddress,
  SpotDepositWithdrawRecord,
  SpotDepth,
  SpotDetailTick,
  SpotKline,
  SpotLastTrade,
  SpotMarginAccountBalance,
  SpotMarginLimitItem,
  SpotMarginLoanInfoCurrency,
  SpotMarginLoanInfoItem,
  SpotMarginLoanOrder,
  SpotMarginRepaymentResp,
  SpotMarketStatusResponse,
  SpotMergedTicker,
  SpotRepaymentRecordItem,
  SpotSubUserAccountsResult,
  SpotSubUserApiKey,
  SpotSubUserApiKeyCreationResult,
  SpotSubUserApiKeyUpdateResult,
  SpotSubUserBalanceResult,
  SpotSubUserCreationResult,
  SpotSubUserDeductModeResult,
  SpotSubUserDepositHistoryRecord,
  SpotSubUserEntrustUserItem,
  SpotSubUserListItem,
  SpotSubUserLockStatusResult,
  SpotSubUserManagedTransferRecord,
  SpotSubUsersAggregatedBalanceItem,
  SpotSubUserStatusResult,
  SpotSubUserTradableMarketResult,
  SpotSubUserTransferPermissionsResult,
  SpotSystemStatusPage,
  SpotTickerItem,
  SpotTradeTimestampGroup,
  SpotTradingSymbol,
  SpotV1AccountOverviewInfo,
  SpotV1AccountSwitchUserInfo,
  SpotV1ChainInfo,
  SpotV1CurrencySettings,
  SpotV1MarketSymbolSettings,
  SpotV1OpenOrder,
  SpotV1OrderAutoPlaceData,
  SpotV1OrderBatchCancelData,
  SpotV1OrderBatchCancelOpenOrdersData,
  SpotV1OrderBatchPlaceItem,
  SpotV1OrderCancelByClientOrderIdData,
  SpotV1OrderCancelData,
  SpotV1OrderDetail,
  SpotV1OrderHistory48hItem,
  SpotV1OrderHistoryItem,
  SpotV1OrderMatchResult,
  SpotV1OrderPlaceData,
  SpotV1SymbolSettings,
  SpotV2AccountLedgerItem,
  SpotV2AccountValuation,
  SpotV2AlgoOrder,
  SpotV2AlgoOrdersCancelAllAfterData,
  SpotV2AlgoOrdersCancellationResp,
  SpotV2AlgoOrdersPlaceResp,
  SpotV2AssetValuation,
  SpotV2CurrencyReference,
  SpotV2PointAccount,
  SpotV2PointTransferData,
  SpotV2TransactFeeRateItem,
  SpotVaspExchange,
  SpotWithdrawAddress,
  SpotWithdrawQuota,
} from './types/response/spot.types.js';

/**
 * The SpotClient provides integration to the HTX Spot API.
 */
export class SpotClient extends BaseRestClient {
  getClientType(): RestClientType {
    // Points to api.huobi.pro
    // TODO: Add AWS URL support
    return REST_CLIENT_TYPE_ENUM.spot;
  }

  /**
   *
   * Misc Utility Methods
   *
   */

  generateNewOrderID(): string {
    // Generate a short UUID format (32 hex characters without dashes)
    // Compatible with Kraken's cl_ord_id parameter
    const hexChars = '0123456789abcdef';
    let result = '';
    for (let i = 0; i < 32; i++) {
      result += hexChars[Math.floor(Math.random() * 16)];
    }
    return result;
  }

  /**
   *
   * Reference Data
   *
   */

  /**
   * Get System Status
   *
   * Get system status, incidents and planned maintenance.
   * Uses status.huobigroup.com (no signature, different base URL).
   */
  getSystemStatus(): Promise<SpotSystemStatusPage> {
    return this.get('https://status.huobigroup.com/api/v2/summary.json');
  }

  /**
   * Get Market Status
   *
   * Returns current market status.
   * 1=normal, 2=halted, 3=cancel-only.
   */
  getMarketStatus(): Promise<SpotMarketStatusResponse> {
    return this.get('/v2/market-status');
  }

  /**
   * Get Current Timestamp (V1)
   *
   * Returns current server time in milliseconds since epoch. No signature required.
   */
  getTimestamp(): Promise<SpotAPISuccessResponse<number>> {
    return this.get('/v1/common/timestamp');
  }

  /**
   * Get all Supported Trading Symbols (V2)
   *
   * Returns all supported trading symbols. Pass ts for incremental updates.
   */
  getTradingSymbols(params?: {
    ts?: number;
  }): Promise<SpotAPISuccessResponse<SpotTradingSymbol[]>> {
    return this.get('/v2/settings/common/symbols', params);
  }

  /**
   * Get all Supported Currencies (V2)
   *
   * Returns all supported currencies. Pass ts for incremental updates.
   */
  getCurrencies(params?: {
    ts?: number;
  }): Promise<SpotAPISuccessResponse<SpotCurrency[]>> {
    return this.get('/v2/settings/common/currencies', params);
  }

  /**
   * Get Currencys Settings (V1)
   *
   * Returns currency settings. No signature required. Pass ts for incremental updates.
   */
  getCurrencysSettings(params?: {
    ts?: number;
  }): Promise<SpotAPISuccessResponse<SpotV1CurrencySettings[]>> {
    return this.get('/v1/settings/common/currencys', params);
  }

  /**
   * Get Symbols Settings (V1)
   *
   * Returns symbol settings. No signature required. Pass ts for incremental updates.
   */
  getSymbolsSettings(params?: {
    ts?: number;
  }): Promise<SpotAPISuccessResponse<SpotV1SymbolSettings[]>> {
    return this.get('/v1/settings/common/symbols', params);
  }

  /**
   * Get Market Symbols Settings (V1)
   *
   * Returns market symbol settings. No signature required. Pass symbols (NA=all) and/or ts for incremental updates.
   */
  getMarketSymbolsSettings(params?: {
    symbols?: string;
    ts?: number;
  }): Promise<SpotAPISuccessResponse<SpotV1MarketSymbolSettings[]>> {
    return this.get('/v1/settings/common/market-symbols', params);
  }

  /**
   * Get Chains Information (V1)
   *
   * Returns chain info per currency. No signature required. Pass show-desc, currency, and/or ts for incremental updates.
   */
  getChainsInfo(
    params?: SpotGetChainsReq,
  ): Promise<SpotAPISuccessResponse<SpotV1ChainInfo[]>> {
    return this.get('/v1/settings/common/chains', params);
  }

  /**
   * Get Reference Currencies & Chains (V2)
   *
   * Returns static reference info for each currency and its chains. No signature required.
   */
  getReferenceCurrencies(params?: {
    currency?: string;
    authorizedUser?: boolean;
  }): Promise<SpotAPISuccessResponse<SpotV2CurrencyReference[]>> {
    return this.get('/v2/reference/currencies', params);
  }

  /**
   *
   * Market Data
   *
   */

  /**
   * Get Klines (Candles)
   *
   * Returns candlestick data for a symbol. No signature required.
   */
  getKlines(
    params: SpotGetKlineReq,
  ): Promise<SpotAPISuccessResponse<SpotKline[]>> {
    return this.get('/market/history/kline', params);
  }

  /**
   * Get Latest Aggregated Ticker
   *
   * Returns latest ticker with 24h aggregated market data. No signature required.
   */
  getTicker(params: {
    symbol: string;
  }): Promise<SpotAPISuccessResponse<SpotMergedTicker, 'tick'>> {
    return this.get('/market/detail/merged', params);
  }

  /**
   * Get Latest Tickers for All Pairs
   *
   * Returns latest tickers for all supported pairs. No signature required.
   */
  getTickers(): Promise<SpotAPISuccessResponse<SpotTickerItem[]>> {
    return this.get('/market/tickers');
  }

  /**
   * Get Market Depth
   *
   * Returns order book for a symbol. No signature required.
   */
  getMarketDepth(
    params: SpotGetDepthReq,
  ): Promise<SpotAPISuccessResponse<SpotDepth, 'tick'>> {
    return this.get('/market/depth', params);
  }

  /**
   * Get the Last Trade
   *
   * Returns latest trade with price, volume, direction. No signature required.
   */
  getLastTrade(params: {
    symbol: string;
  }): Promise<SpotAPISuccessResponse<SpotLastTrade, 'tick'>> {
    return this.get('/market/trade', params);
  }

  /**
   * Get the Most Recent Trades
   *
   * Returns recent trades grouped by timestamp. No signature required.
   */
  getHistoryTrades(params: {
    symbol: string;
    size?: number;
  }): Promise<SpotAPISuccessResponse<SpotTradeTimestampGroup[]>> {
    return this.get('/market/history/trade', params);
  }

  /**
   * Get the Last 24h Market Summary
   *
   * Returns 24h trading summary for a symbol. No signature required.
   */
  get24hMarketSummary(params: {
    symbol: string;
  }): Promise<SpotAPISuccessResponse<SpotDetailTick, 'tick'>> {
    return this.get('/market/detail', params);
  }

  /**
   * Get Full Order Book
   *
   * Returns complete market depth, up to 5000 levels. Updated once per second. No signature required.
   */
  getFullOrderBook(params: {
    symbol: string;
  }): Promise<SpotAPISuccessResponse<SpotDepth, 'tick'>> {
    return this.get('/market/fullMbp', params);
  }

  /**
   *
   * Account
   *
   */

  /**
   * Get all Accounts of the Current User
   *
   * Returns list of accounts owned by this API user. Signature required.
   */
  getAccounts(): Promise<SpotAPISuccessResponse<SpotAccount[]>> {
    return this.getPrivate('/v1/account/accounts');
  }

  /**
   * Get Account Balance of a Specific Account
   *
   * Returns balance for account specified by account id. Signature required. OTC not supported.
   */
  getAccountBalance(params: {
    accountId: string;
  }): Promise<SpotAPISuccessResponse<SpotAccountBalance>> {
    return this.getPrivate(`/v1/account/accounts/${params.accountId}/balance`);
  }

  /**
   * Get The Total Valuation of Platform Assets
   *
   * Returns total asset valuation in BTC or fiat. Signature required.
   */
  getAccountValuation(params?: {
    accountType?: string;
    valuationCurrency?: string;
  }): Promise<SpotAPISuccessResponse<SpotV2AccountValuation>> {
    return this.getPrivate('/v2/account/valuation', params);
  }

  /**
   * Get Asset Valuation
   *
   * Returns valuation of total assets in BTC or fiat. Signature required.
   */
  getAssetValuation(
    params?: SpotGetAssetValuationReq,
  ): Promise<SpotAPISuccessResponse<SpotV2AssetValuation>> {
    return this.getPrivate('/v2/account/asset-valuation', params);
  }

  /**
   * Asset Transfer
   *
   * Transfer asset between accounts (spot, margin, sub-users). Signature required. Trade permission.
   */
  submitTransfer(
    params: SpotAccountTransferReq,
  ): Promise<SpotAPISuccessResponse<SpotAccountTransferData>> {
    return this.postPrivate('/v1/account/transfer', { body: params });
  }

  /**
   * Get Account History
   *
   * Returns amount changes of specified account. Signature required. Max 1h query window, 30 days range.
   */
  getAccountHistory(
    params: SpotGetAccountHistoryReq,
  ): Promise<
    SpotAPISuccessResponse<SpotAccountHistoryItem[]> & { 'next-id'?: number }
  > {
    return this.getPrivate('/v1/account/history', params);
  }

  /**
   * Get Account Ledger
   *
   * Returns amount changes (phase 1: transfer only). Max 10-day window, 180 days range. Signature required.
   */
  getAccountLedger(
    params?: SpotGetAccountLedgerReq,
  ): Promise<
    SpotAPISuccessResponse<SpotV2AccountLedgerItem[]> & { nextId?: number }
  > {
    return this.getPrivate('/v2/account/ledger', params);
  }

  /**
   * V2 Account Transfer
   *
   * Transfer funds between spot, linear-swap, otc, futures, swap. Signature required. Trade permission.
   */
  submitV2AccountTransfer(
    params: SpotV2AccountTransferReq,
  ): Promise<SpotAPISuccessResponse<number>> {
    return this.postPrivate('/v2/account/transfer', { body: params });
  }

  /**
   * Futures Transfer
   *
   * Transfer between spot and future contract account. pro-to-futures = spot -> contract, futures-to-pro = contract -> spot. Signature required. Trade permission.
   */
  submitFuturesTransfer(
    params: SpotV1FuturesTransferReq,
  ): Promise<SpotAPISuccessResponse<number>> {
    return this.postPrivate('/v1/futures/transfer', { body: params });
  }

  /**
   * Get Point Balance
   *
   * Query termless and terminable point balance. Parent can query sub user via subUid. Signature required. Read permission. Rate: 2/s.
   */
  getPointBalance(params?: {
    subUid?: string;
  }): Promise<SpotAPISuccessResponse<SpotV2PointAccount>> {
    return this.getPrivate('/v2/point/account', params);
  }

  /**
   * Point Transfer
   *
   * Transfer points between parent and sub user. groupId=0 for termless; for terminable query sub balance first. Signature required. Trade permission. Rate: 2/s.
   */
  submitPointTransfer(
    params: SpotV2PointTransferReq,
  ): Promise<SpotAPISuccessResponse<SpotV2PointTransferData>> {
    return this.postPrivate('/v2/point/transfer', { body: params });
  }

  /**
   * Get User Deduction Info
   *
   * Query point card vs HTX deduction settings. Signature required. Read permission. Rate: 5/s.
   */
  getAccountSwitchUserInfo(): Promise<
    SpotAPISuccessResponse<SpotV1AccountSwitchUserInfo>
  > {
    return this.getPrivate('/v1/account/switch/user/info');
  }

  /**
   * Get Deductible Currency Overview
   *
   * Query asset that can be used to deduct fees. Signature required. Read permission. Rate: 5/s.
   */
  getAccountOverviewInfo(): Promise<
    SpotAPISuccessResponse<SpotV1AccountOverviewInfo>
  > {
    return this.getPrivate('/v1/account/overview/info');
  }

  /**
   * Set Spot/Margin Fee Deduction Method
   *
   * switchType: 0=point card, 1=currency (pass deductionCurrency), 2=close. Signature required. Read permission. Rate: 2/s.
   */
  updateFeeDeductionMethod(params: {
    switchType: 0 | 1 | 2;
    deductionCurrency?: string;
  }): Promise<SpotAPISuccessResponse<null>> {
    return this.postPrivate('/v1/account/fee/switch', { body: params });
  }

  /**
   *
   * Trading
   *
   */

  /**
   * Place a New Order
   *
   * Places order to be matched. Set account-id and source per account type. Signature required. Trade permission. Rate: 100/2s.
   */
  submitOrder(
    params: SpotV1OrderPlaceReq,
  ): Promise<SpotAPISuccessResponse<SpotV1OrderPlaceData>> {
    return this.postPrivate('/v1/order/orders/place', { body: params });
  }

  /**
   * Place a Batch of Orders
   *
   * Max 10 orders per batch. Each returns order-id or err-code/err-msg. Signature required. Trade permission. Rate: 50/2s.
   */
  submitBatchOrders(
    params: SpotV1OrderBatchPlaceReq,
  ): Promise<SpotAPISuccessResponse<SpotV1OrderBatchPlaceItem[]>> {
    return this.postPrivate('/v1/order/batch-orders', { body: params });
  }

  /**
   * Margin Order (Auto Borrow/Repay)
   *
   * Auto borrow to place or auto repay. Sub-accounts not supported. Use amount or market-amount. Signature required. Trade permission. Rate: 100/2s.
   */
  submitMarginOrder(
    params: SpotV1OrderAutoPlaceReq,
  ): Promise<SpotAPISuccessResponse<SpotV1OrderAutoPlaceData>> {
    return this.postPrivate('/v1/order/auto/place', { body: params });
  }

  /**
   * Cancel Order by Order ID
   *
   * Submits cancel request. Verify via order status or match result. Signature required. Trade permission. Rate: 100/2s.
   */
  cancelOrderById(params: {
    orderId: string;
    symbol?: string;
  }): Promise<SpotAPISuccessResponse<SpotV1OrderCancelData>> {
    const { orderId, ...body } = params;
    return this.postPrivate(`/v1/order/orders/${orderId}/submitcancel`, {
      body: body,
    });
  }

  /**
   * Cancel Order by Client Order ID
   *
   * Prefer cancelOrder (by order-id) when possible. Submits cancel request; verify via order status. Signature required. Trade permission. Rate: 100/2s.
   */
  cancelOrderByClientId(params: {
    'client-order-id': string;
  }): Promise<SpotAPISuccessResponse<SpotV1OrderCancelByClientOrderIdData>> {
    return this.postPrivate('/v1/order/orders/submitCancelClientOrder', {
      body: params,
    });
  }

  /**
   * Cancel All Spot Orders
   *
   * Cancel all open spot orders. Pass symbol for specific pair(s), comma-separated; omit for all. Signature required. Trade permission. Rate: 1/2s.
   */
  cancelAllOrders(params?: {
    symbol?: string;
  }): Promise<SpotAPISuccessResponse<null>> {
    return this.getPrivate('/v1/order/cancelAllOrders', params);
  }

  /**
   * Get All Open Orders
   *
   * Returns unfilled orders. Filter by account-id, symbol, side. Signature required. Read permission. Rate: 50/2s.
   */
  getOpenOrders(
    params?: SpotGetOpenOrdersReq,
  ): Promise<SpotAPISuccessResponse<SpotV1OpenOrder[]>> {
    return this.getPrivate('/v1/order/openOrders', params);
  }

  /**
   * Cancel Multiple Orders by Criteria
   *
   * Cancel up to 100 orders matching account-id, symbol, types, side. Submit only; verify via order status. Signature required. Trade permission. Rate: 50/2s.
   */
  batchCancelOpenOrders(
    params?: SpotV1OrderBatchCancelOpenOrdersReq,
  ): Promise<SpotAPISuccessResponse<SpotV1OrderBatchCancelOpenOrdersData>> {
    return this.postPrivate('/v1/order/orders/batchCancelOpenOrders', {
      body: params,
    });
  }

  /**
   * Cancel Multiple Orders by IDs
   *
   * Cancel by order-ids or client-order-ids (max 50). Prefer order-ids. Signature required. Trade permission. Rate: 50/2s.
   */
  batchCancelOrders(params: {
    'order-ids'?: string[];
    'client-order-ids'?: string[];
  }): Promise<SpotAPISuccessResponse<SpotV1OrderBatchCancelData>> {
    return this.postPrivate('/v1/order/orders/batchcancel', { body: params });
  }

  /**
   * Dead Man's Switch (Cancel All After)
   *
   * Turn on/off. timeout=0 to turn off. timeout>=5 to turn on: must call twice within timeout seconds or all spot orders (max 500) are canceled. Signature required. Trade permission.
   */
  setCancelAllAfter(params: {
    timeout: number;
  }): Promise<SpotAPISuccessResponse<SpotV2AlgoOrdersCancelAllAfterData>> {
    return this.postPrivate('/v2/algo-orders/cancel-all-after', {
      body: params,
    });
  }

  /**
   * Get Order Detail by Order ID
   *
   * Returns order detail. API-created orders not queryable 2h after cancel. Signature required. Read permission. Rate: 50/2s.
   */
  getOrder(params: {
    orderId: string;
  }): Promise<SpotAPISuccessResponse<SpotV1OrderDetail>> {
    return this.getPrivate(`/v1/order/orders/${params.orderId}`);
  }

  /**
   * Get Order Detail by Client Order ID
   *
   * Returns latest status of order with given client order ID. Signature required. Read permission. Rate: 50/2s.
   */
  getOrderByClientId(params: {
    clientOrderId: string;
  }): Promise<SpotAPISuccessResponse<SpotV1OrderDetail>> {
    return this.getPrivate('/v1/order/orders/getClientOrder', params);
  }

  /**
   * Get Match Results of an Order
   *
   * Returns match/trade results for a specific order. Signature required. Read permission. Rate: 50/2s.
   */
  getOrderMatch(params: {
    orderId: string;
  }): Promise<SpotAPISuccessResponse<SpotV1OrderMatchResult[]>> {
    return this.getPrivate(`/v1/order/orders/${params.orderId}/matchresults`);
  }

  /**
   * Search Past Orders
   *
   * Historical orders by symbol, states, time range. Max 48h window, 180 days range. API orders not queryable 2h after cancel. Signature required. Read permission. Rate: 50/2s.
   */
  getOrderHistory(
    params: SpotGetOrderHistoryReq,
  ): Promise<SpotAPISuccessResponse<SpotV1OrderHistoryItem[]>> {
    return this.getPrivate('/v1/order/orders', params);
  }

  /**
   * Search Historical Orders within 48 Hours
   *
   * Orders by time range. Default: last 48h. next-time in last item when more exist. API orders not queryable 2h after cancel. Signature required. Read permission. Rate: 20/2s.
   */
  getOrderHistory48h(
    params?: SpotGetOrderHistory48hReq,
  ): Promise<SpotAPISuccessResponse<SpotV1OrderHistory48hItem[]>> {
    return this.getPrivate('/v1/order/history', params);
  }

  /**
   * Search Match Results
   *
   * Match results of filled/partial orders by symbol, types, time. 48h window, 120 days range. Signature required. Read permission. Rate: 20/2s.
   */
  getMatchResults(
    params?: SpotGetMatchResultsReq,
  ): Promise<SpotAPISuccessResponse<SpotV1OrderMatchResult[]>> {
    return this.getPrivate('/v1/order/matchresults', params);
  }

  /**
   * Get Transact Fee Rate
   *
   * Query fee rates for trading pairs. Max 10 symbols. Signature required. Read permission. Rate: 50/2s.
   */
  getFeeRate(params: {
    symbols: string;
  }): Promise<SpotAPISuccessResponse<SpotV2TransactFeeRateItem[]>> {
    return this.getPrivate('/v2/reference/transact-fee-rate', params);
  }

  /**
   *
   * Conditional Order
   *
   */

  /**
   * Place a Conditional Order
   *
   * Conditional orders only via this endpoint (not Trading section). Signature required. Trade permission. Rate: 20/2s.
   */
  placeConditionalOrder(
    params: SpotV2AlgoOrdersPlaceReq,
  ): Promise<SpotAPISuccessResponse<SpotV2AlgoOrdersPlaceResp>> {
    return this.postPrivate('/v2/algo-orders', { body: params });
  }

  /**
   * Cancel Conditional Orders (before triggering)
   *
   * Only cancels conditional orders that have not triggered yet. Max 50 orders. Signature required. Trade permission. Rate: 20/2s.
   */
  cancelConditionalOrders(params: {
    clientOrderIds: string[];
  }): Promise<SpotAPISuccessResponse<SpotV2AlgoOrdersCancellationResp>> {
    return this.postPrivate('/v2/algo-orders/cancellation', { body: params });
  }

  /**
   * Query Open Conditional Orders (before triggering)
   *
   * Returns conditional orders with orderStatus=created. Signature required. Read permission. Rate: 20/2s.
   */
  getOpenConditionalOrders(
    params?: SpotV2AlgoOrdersOpeningReq,
  ): Promise<SpotAPISuccessResponse<SpotV2AlgoOrder[]> & { nextId?: number }> {
    return this.getPrivate('/v2/algo-orders/opening', params);
  }

  /**
   * Query Conditional Order History
   *
   * Returns canceled/rejected/triggered conditional orders. For triggered, use Trading section for latest status. Signature required. Read permission. Rate: 20/2s.
   */
  getConditionalOrderHistory(
    params?: SpotV2AlgoOrdersHistoryReq,
  ): Promise<SpotAPISuccessResponse<SpotV2AlgoOrder[]> & { nextId?: number }> {
    return this.getPrivate('/v2/algo-orders/history', params);
  }

  /**
   * Query a Specific Conditional Order
   *
   * By clientOrderId. Covers created, triggered, canceled, rejected. Signature required. Read permission. Rate: 20/2s.
   */
  getConditionalOrder(params: {
    clientOrderId: string;
  }): Promise<SpotAPISuccessResponse<SpotV2AlgoOrder>> {
    return this.getPrivate('/v2/algo-orders/specific', params);
  }

  /**
   *
   * Margin Loan (Cross/Isolated)
   *
   */

  /**
   * Repayment Record Reference
   *
   * Query repayment records. Sorted by repayTime. Main and sub-accounts. Signature required. Read permission. Rate: 2/2s.
   */
  getRepaymentRecords(
    params?: SpotRepaymentRecordReq,
  ): Promise<
    SpotAPISuccessResponse<SpotRepaymentRecordItem[]> & { nextId?: number }
  > {
    return this.getPrivate('/v2/account/repayment', params);
  }

  /**
   * Repay Margin Loan (Cross/Isolated)
   *
   * Loan interest paid first if no transactId. Main and sub-accounts. Signature required. Trade permission. Rate: 2/s.
   */
  repayMarginLoan(
    params: SpotMarginRepaymentReq,
  ): Promise<SpotAPISuccessResponse<SpotMarginRepaymentResp[]>> {
    return this.postPrivate('/v2/account/repayment', { body: params });
  }

  /**
   * Transfer Asset from Spot Trading Account to Isolated Margin Account
   *
   * Signature required. Trade permission. Rate: 2/2s.
   */
  transferSpotToIsolatedMargin(
    params: SpotMarginTransferInIsolatedReq,
  ): Promise<SpotAPISuccessResponse<number>> {
    return this.postPrivate('/v1/dw/transfer-in/margin', { body: params });
  }

  /**
   * Transfer Asset from Isolated Margin Account to Spot Trading Account
   *
   * Signature required. Trade permission. Rate: 2/2s.
   */
  transferIsolatedMarginToSpot(
    params: SpotMarginTransferOutIsolatedReq,
  ): Promise<SpotAPISuccessResponse<number>> {
    return this.postPrivate('/v1/dw/transfer-out/margin', { body: params });
  }

  /**
   * Get Loan Interest Rate and Quota (Isolated)
   *
   * Returns loan interest rates and quota per symbol. Signature required. Read permission. Rate: 20/2s.
   */
  getMarginLoanInfo(params?: {
    symbols?: string;
  }): Promise<SpotAPISuccessResponse<SpotMarginLoanInfoItem[]>> {
    return this.getPrivate('/v1/margin/loan-info', params);
  }

  /**
   * Request a Margin Loan (Isolated)
   *
   * Places order to borrow margin. Signature required. Trade permission. Rate: 2/2s.
   */
  requestMarginLoan(
    params: SpotMarginLoanOrderReq,
  ): Promise<SpotAPISuccessResponse<number>> {
    return this.postPrivate('/v1/margin/orders', { body: params });
  }

  /**
   * Repay Margin Loan (Isolated)
   *
   * Repays with asset in margin account. Signature required. Trade permission. Rate: 2/2s.
   */
  repayMarginLoanIsolated(params: {
    orderId: string;
    amount: string;
  }): Promise<SpotAPISuccessResponse<number>> {
    const { orderId, amount } = params;
    return this.postPrivate(`/v1/margin/orders/${orderId}/repay`, {
      body: { amount },
    });
  }

  /**
   * Search Past Margin Orders (Isolated)
   *
   * Returns margin loan orders by criteria. Signature required. Read permission. Rate: 100/2s.
   */
  getMarginLoanOrders(
    params?: SpotMarginLoanOrdersReq,
  ): Promise<SpotAPISuccessResponse<SpotMarginLoanOrder[]>> {
    return this.getPrivate('/v1/margin/loan-orders', params);
  }

  /**
   * Get the Balance of the Margin Loan Account (Isolated)
   *
   * Signature required. Read permission. Rate: 100/2s.
   */
  getMarginAccountBalance(params?: {
    symbol?: string;
    'sub-uid'?: number;
  }): Promise<SpotAPISuccessResponse<SpotMarginAccountBalance[]>> {
    return this.getPrivate('/v1/margin/accounts/balance', params);
  }

  /**
   * Transfer Asset from Spot Trading Account to Cross Margin Account
   *
   * Signature required. Trade permission.
   */
  transferSpotToCrossMargin(params: {
    currency?: string;
    amount?: string;
  }): Promise<SpotAPISuccessResponse<number>> {
    return this.postPrivate('/v1/cross-margin/transfer-in', { body: params });
  }

  /**
   * Transfer Asset from Cross Margin Account to Spot Trading Account
   *
   * Signature required. Trade permission.
   */
  transferCrossMarginToSpot(params: {
    currency?: string;
    amount?: string;
  }): Promise<SpotAPISuccessResponse<number>> {
    return this.postPrivate('/v1/cross-margin/transfer-out', { body: params });
  }

  /**
   * Get Loan Interest Rate and Quota (Cross)
   *
   * Returns loan interest rates and quota per currency. No params. Signature required. Read permission. Rate: 2/2s.
   */
  getCrossMarginLoanInfo(): Promise<
    SpotAPISuccessResponse<SpotMarginLoanInfoCurrency[]>
  > {
    return this.getPrivate('/v1/cross-margin/loan-info');
  }

  /**
   * Request a Margin Loan (Cross)
   *
   * Places order to borrow margin. Signature required. Trade permission. Rate: 2/2s.
   */
  requestCrossMarginLoan(params: {
    currency?: string;
    amount?: string;
  }): Promise<SpotAPISuccessResponse<number>> {
    return this.postPrivate('/v1/cross-margin/orders', { body: params });
  }

  /**
   * Repay Margin Loan (Cross)
   *
   * Repays with asset in cross margin account. Signature required. Trade permission. Rate: 2/2s.
   */
  repayCrossMarginLoan(params: {
    orderId: string;
    amount: string;
  }): Promise<SpotAPISuccessResponse<null>> {
    const { orderId, amount } = params;
    return this.postPrivate(`/v1/cross-margin/orders/${orderId}/repay`, {
      body: { amount },
    });
  }

  /**
   * Search Past Margin Orders (Cross)
   *
   * Returns margin loan orders by criteria. Signature required. Read permission. Rate: 2/2s.
   */
  getCrossMarginLoanOrders(
    params?: SpotCrossMarginLoanOrdersReq,
  ): Promise<SpotAPISuccessResponse<SpotCrossMarginLoanOrder[]>> {
    return this.getPrivate('/v1/cross-margin/loan-orders', params);
  }

  /**
   * Get the Balance of the Margin Loan Account (Cross)
   *
   * Returns single account object. Signature required. Read permission. Rate: 2/2s.
   */
  getCrossMarginBalance(params?: {
    'sub-uid'?: number;
  }): Promise<SpotAPISuccessResponse<SpotCrossMarginAccountBalance>> {
    return this.getPrivate('/v1/cross-margin/accounts/balance', params);
  }

  /**
   * Obtain Leverage Position Limit (Cross)
   *
   * Returns position limit at user level per currency. Signature required. Read permission. Rate: 2/2s.
   */
  getCrossMarginLimit(params?: {
    currency?: string;
  }): Promise<SpotAPISuccessResponse<SpotMarginLimitItem[]>> {
    return this.getPrivate('/v2/margin/limit', params);
  }

  /**
   *
   * Wallet (Deposit/Withdraw)
   *
   */

  /**
   * Query Deposit Address
   *
   * Query deposit address per chain for a currency. Signature required. Read permission. Rate: 20/2s.
   */
  getDepositAddress(params?: {
    currency?: string;
  }): Promise<SpotAPISuccessResponse<SpotDepositAddress[]>> {
    return this.getPrivate('/v2/account/deposit/address', params);
  }

  /**
   * Query Withdraw Quota
   *
   * Query withdrawing quota for currencies. Parent user only. Signature required. Read permission. Rate: 20/2s.
   */
  getWithdrawQuota(params?: {
    currency?: string;
  }): Promise<SpotAPISuccessResponse<SpotWithdrawQuota>> {
    return this.getPrivate('/v2/account/withdraw/quota', params);
  }

  /**
   * Query Withdraw Address
   *
   * Query withdraw addresses available for API key. Parent user only. Signature required. Read permission.
   */
  getWithdrawAddress(
    params?: SpotWithdrawAddressReq,
  ): Promise<
    SpotAPISuccessResponse<SpotWithdrawAddress[]> & { 'next-id'?: number }
  > {
    return this.getPrivate('/v2/account/withdraw/address', params);
  }

  /**
   * Create Withdraw Request
   *
   * Create withdraw to address in your withdraw list. Parent user only. Withdraw permission. Rate: 20/2s.
   */
  submitWithdraw(
    params: SpotWithdrawCreateReq,
  ): Promise<SpotAPISuccessResponse<number>> {
    return this.postPrivate('/v1/dw/withdraw/api/create', { body: params });
  }

  /**
   * Query Withdrawal by Client Order ID
   *
   * Query withdraw order submitted with client-order-id. Signature required. Read permission.
   */
  getWithdrawByClientId(
    clientOrderId: string,
  ): Promise<SpotAPISuccessResponse<SpotDepositWithdrawRecord | null>> {
    return this.getPrivate('/v1/query/withdraw/client-order-id', {
      clientOrderId,
    });
  }

  /**
   * Cancel Withdraw Request
   *
   * Cancel withdraw by transfer id. Parent user only. Withdraw permission. Rate: 20/2s.
   */
  cancelWithdraw(withdrawId: number): Promise<SpotAPISuccessResponse<number>> {
    return this.postPrivate(`/v1/dw/withdraw-virtual/${withdrawId}/cancel`, {});
  }

  /**
   * Search Deposit/Withdraw Records
   *
   * Search existed withdraws and deposits. Signature required. Read permission. Rate: 20/2s.
   */
  getDepositWithdrawHistory(
    params: SpotDepositWithdrawQueryReq,
  ): Promise<SpotAPISuccessResponse<SpotDepositWithdrawRecord[]>> {
    return this.getPrivate('/v1/query/deposit-withdraw', params);
  }

  /**
   * Get Exchange VASP List
   *
   * Exchange list for Korean users (withdraw flow). Public. No signature. Rate: 1/s.
   */
  getVaspList(): Promise<SpotAPISuccessResponse<SpotVaspExchange[]>> {
    return this.get('/v1/query/vasp-list');
  }

  /**
   *
   * Broker API
   *
   */

  /**
   * Check User Rebate Eligibility
   *
   * Check whether user meets rebate conditions. API brokers only. Signature required. Read permission. Rate: 20/2s.
   */
  getBrokerUserRebateStatus(
    params: SpotBrokerUserRebateStatusReq,
  ): Promise<SpotAPISuccessResponse<SpotBrokerUserRebateStatus>> {
    return this.getPrivate('/broker/v1/user_rebate_status', params);
  }

  /**
   * Get Broker Sub-Account Fee Rate
   *
   * Query sub-account commission/fee rate. Signature required. Read permission. Rate: 100/2s.
   */
  getBrokerSubUserFeeRate(
    params: SpotBrokerSubUserFeeRateReq,
  ): Promise<SpotAPISuccessResponse<SpotBrokerSubUserFeeRate>> {
    return this.getPrivate('/broker/v1/sub-user/fee_rate', params);
  }

  /**
   * Set Broker Sub-User Fee Rate
   *
   * Set trading fee rate for sub-accounts. Signature required. Read permission. Rate: 100/2s.
   */
  setBrokerSubUserFeeRate(
    params: SpotBrokerSubUserFeeRateAddReq,
  ): Promise<SpotAPISuccessResponse<SpotBrokerFeeRateAddResult>> {
    return this.postPrivate('/broker/v1/sub-user/fee_rate/add', {
      body: params,
    });
  }

  /**
   * Get Account Capital Snapshot
   *
   * Request account asset snapshot. Signature required. Read permission. Rate: 100/2s.
   */
  getBrokerAccountCapitalSnapshot(
    params: SpotBrokerAccountCapitalSnapshotReq,
  ): Promise<SpotAPISuccessResponse<SpotBrokerAccountCapitalSnapshot[]>> {
    return this.postPrivate('/broker/v1/account_capital_snapshot_everyday', {
      body: params,
    });
  }

  /**
   *
   * SubAccount Management
   *
   */

  /**
   * Set Deduction Mode
   *
   * Set deduction fee (HT or point) for parent and sub user. Signature required. Trade permission.
   */
  updateSubUserDeductMode(params?: {
    subUids?: string;
    deductMode?: 'master' | 'sub';
  }): Promise<SpotAPISuccessResponse<SpotSubUserDeductModeResult[]>> {
    return this.postPrivate('/v2/sub-user/deduct-mode', { body: params });
  }

  /**
   * Query API Key
   *
   * Query own or sub user's API key info. Signature required. Read permission.
   */
  getSubUserApiKey(params?: {
    uid?: number;
    accessKey?: string;
  }): Promise<SpotAPISuccessResponse<SpotSubUserApiKey[]>> {
    return this.getPrivate('/v2/user/api-key', params);
  }

  /**
   * Get UID
   *
   * Get current user's UID. Signature required. Read permission.
   */
  getUserUid(): Promise<SpotAPISuccessResponse<number>> {
    return this.getPrivate('/v2/user/uid');
  }

  /**
   * Create Sub Users
   *
   * Create sub users, max 50 at a time. Signature required. Trade permission.
   */
  createSubUser(
    params: SpotSubUserCreationReq,
  ): Promise<SpotAPISuccessResponse<SpotSubUserCreationResult[]>> {
    return this.postPrivate('/v2/sub-user/creation', { body: params });
  }

  /**
   * Get Sub User List
   *
   * Query full list of sub users with UID and status. Signature required. Read permission.
   */
  getSubUserList(params?: {
    fromId?: number;
  }): Promise<
    SpotAPISuccessResponse<SpotSubUserListItem[]> & { nextId?: number }
  > {
    return this.getPrivate('/v2/sub-user/user-list', params);
  }

  /**
   * Lock/Unlock Sub User
   *
   * Lock or unlock a sub user. Signature required. Trade permission. Rate: 20/2s.
   */
  updateSubUserLockStatus(params: {
    subUid: number;
    action: 'lock' | 'unlock';
  }): Promise<SpotAPISuccessResponse<SpotSubUserLockStatusResult>> {
    return this.postPrivate('/v2/sub-user/management', { body: params });
  }

  /**
   * Get Sub User Status
   *
   * Query sub user status by UID. Signature required. Read permission.
   */
  getSubUserStatus(
    subUid: number,
  ): Promise<SpotAPISuccessResponse<SpotSubUserStatusResult>> {
    return this.getPrivate('/v2/sub-user/user-state', { subUid });
  }

  /**
   * Set Tradable Market for Sub Users
   *
   * Set tradable market (isolated/cross margin) for sub users. Signature required. Trade permission.
   */
  setSubUserTradableMarket(
    params: SpotSubUserTradableMarketReq,
  ): Promise<SpotAPISuccessResponse<SpotSubUserTradableMarketResult[]>> {
    return this.postPrivate('/v2/sub-user/tradable-market', { body: params });
  }

  /**
   * Set Asset Transfer Permission for Sub Users
   *
   * Set asset transfer permission for sub users. Signature required. Trade permission.
   */
  setSubUserTransferPermissions(
    params: SpotSubUserTransferPermissionsReq,
  ): Promise<SpotAPISuccessResponse<SpotSubUserTransferPermissionsResult[]>> {
    return this.postPrivate('/v2/sub-user/transferability', { body: params });
  }

  /**
   * Get Sub User Account List
   *
   * Query account list of sub user by UID. Signature required. Read permission.
   */
  getSubUserAccounts(
    subUid: number,
  ): Promise<SpotAPISuccessResponse<SpotSubUserAccountsResult>> {
    return this.getPrivate('/v2/sub-user/account-list', { subUid });
  }

  /**
   * Create Sub User API Key
   *
   * Create API key for sub user. Signature required. Trade permission.
   */
  createSubUserApiKey(
    params: SpotSubUserApiKeyCreationReq,
  ): Promise<SpotAPISuccessResponse<SpotSubUserApiKeyCreationResult>> {
    return this.postPrivate('/v2/sub-user/api-key-generation', {
      body: params,
    });
  }

  /**
   * Modify Sub User API Key
   *
   * Modify sub user's API key. Signature required. Trade permission.
   */
  updateSubUserApiKey(
    params: SpotSubUserApiKeyUpdateReq,
  ): Promise<SpotAPISuccessResponse<SpotSubUserApiKeyUpdateResult>> {
    return this.postPrivate('/v2/sub-user/api-key-modification', {
      body: params,
    });
  }

  /**
   * Delete Sub User API Key
   *
   * Delete sub user's API key. Signature required. Trade permission.
   */
  deleteSubUserApiKey(params: {
    subUid: number;
    accessKey: string;
  }): Promise<SpotAPISuccessResponse<null>> {
    return this.postPrivate('/v2/sub-user/api-key-deletion', {
      body: params,
    });
  }

  /**
   * Transfer Asset between Parent and Sub Account
   *
   * Transfer asset between parent and sub account. Signature required. Trade permission. Rate: 2/2s.
   */
  submitSubUserTransfer(
    params: SpotSubUserTransferReq,
  ): Promise<SpotAPISuccessResponse<number>> {
    return this.postPrivate('/v1/subuser/transfer', { body: params });
  }

  /**
   * Query Sub User Deposit Address
   *
   * Query sub user's deposit address per chain. Signature required. Read permission.
   */
  getSubUserDepositAddress(params: {
    subUid: number;
    currency?: string;
  }): Promise<SpotAPISuccessResponse<SpotDepositAddress[]>> {
    return this.getPrivate('/v2/sub-user/deposit-address', params);
  }

  /**
   * Query Sub User Deposit History
   *
   * Query sub user's deposit history. Signature required. Read permission.
   */
  getSubUserDepositHistory(params: SpotSubUserDepositHistoryReq): Promise<
    SpotAPISuccessResponse<SpotSubUserDepositHistoryRecord[]> & {
      nextId?: number;
    }
  > {
    return this.getPrivate('/v2/sub-user/query-deposit', params);
  }

  /**
   * Get Aggregated Balance of All Sub Users
   *
   * Returns aggregated balance from all sub-users. Signature required. Read permission. Rate: 2/2s.
   */
  getSubUsersAggregatedBalance(): Promise<
    SpotAPISuccessResponse<SpotSubUsersAggregatedBalanceItem[]>
  > {
    return this.getPrivate('/v1/subuser/aggregate-balance');
  }

  /**
   * Get Account Balance of a Sub-User
   *
   * Returns balance of sub-user by sub-uid. Signature required. Read permission. Rate: 20/2s.
   */
  getSubUserBalance(
    subUid: number,
  ): Promise<SpotAPISuccessResponse<SpotSubUserBalanceResult[]>> {
    return this.getPrivate(`/v1/account/accounts/${subUid}`);
  }

  /**
   * Get Custody Trading Sub-Account List
   *
   * Query list of sub-accounts currently being managed. Read permission.
   */
  getSubUserEntrustUserList(params?: {
    fromId?: number;
    limit?: number;
  }): Promise<
    SpotAPISuccessResponse<{ list: SpotSubUserEntrustUserItem[] }> & {
      nextId?: number;
    }
  > {
    return this.getPrivate('/v2/sub-user/entrust-user-list', params);
  }

  /**
   * Get Managed Sub-Account Transfer History
   *
   * Query transfer records of managed sub-accounts. Read permission.
   */
  getSubUserManagedTransferHistory(
    params?: SpotSubUserManagedTransferHistoryReq,
  ): Promise<SpotAPISuccessResponse<SpotSubUserManagedTransferRecord[]>> {
    return this.getPrivate('/v2/sub-user/managed-transfer-history', params);
  }
}
