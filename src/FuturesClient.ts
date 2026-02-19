import { BaseRestClient } from './lib/BaseRestClient.js';
import { REST_CLIENT_TYPE_ENUM, RestClientType } from './lib/requestUtils.js';
import type {
  FuturesAvailableLevelRateReq,
  FuturesBasisReq,
  FuturesBatchOrderReq,
  FuturesCancelAfterReq,
  FuturesCancelAllOrderReq,
  FuturesCancelAllTpslOrderReq,
  FuturesCancelAllTrackOrderReq,
  FuturesCancelAllTriggerOrderReq,
  FuturesCancelOrderReq,
  FuturesCancelTpslOrderReq,
  FuturesCancelTrackOrderReq,
  FuturesCancelTriggerOrderReq,
  FuturesContractInfoReq,
  FuturesCrossAvailableLevelRateReq,
  FuturesCrossBatchOrderReq,
  FuturesCrossCancelAllOrderReq,
  FuturesCrossCancelAllTpslOrderReq,
  FuturesCrossCancelAllTrackOrderReq,
  FuturesCrossCancelAllTriggerOrderReq,
  FuturesCrossCancelOrderReq,
  FuturesCrossCancelTpslOrderReq,
  FuturesCrossCancelTrackOrderReq,
  FuturesCrossCancelTriggerOrderReq,
  FuturesCrossHistoryOrdersExactReq,
  FuturesCrossHistoryOrdersReq,
  FuturesCrossLadderMarginReq,
  FuturesCrossLeverPositionLimitReq,
  FuturesCrossLightningClosePositionReq,
  FuturesCrossMatchResultsExactReq,
  FuturesCrossMatchResultsReq,
  FuturesCrossOpenOrdersReq,
  FuturesCrossOrderDetailReq,
  FuturesCrossOrderInfoReq,
  FuturesCrossPlaceOrderReq,
  FuturesCrossPlaceTrackOrderReq,
  FuturesCrossPlaceTriggerOrderReq,
  FuturesCrossPositionInfoReq,
  FuturesCrossPositionLimitReq,
  FuturesCrossPositionSideReq,
  FuturesCrossRelationTpslOrderReq,
  FuturesCrossSubAccountInfoListReq,
  FuturesCrossSubAccountInfoReq,
  FuturesCrossSubAccountListReq,
  FuturesCrossSubPositionInfoReq,
  FuturesCrossSwitchLeverRateReq,
  FuturesCrossTpslHisOrdersReq,
  FuturesCrossTpslOpenOrdersReq,
  FuturesCrossTpslOrderReq,
  FuturesCrossTrackHisOrdersReq,
  FuturesCrossTrackOpenOrdersReq,
  FuturesCrossTradeStateReq,
  FuturesCrossTransferLimitReq,
  FuturesCrossTransferStateReq,
  FuturesCrossTriggerHisOrdersReq,
  FuturesCrossTriggerOpenOrdersReq,
  FuturesFeeReq,
  FuturesFinancialRecordExactReq,
  FuturesFinancialRecordReq,
  FuturesHistoricalFundingRateReq,
  FuturesHistoricalOpenInterestReq,
  FuturesHistoryOrdersExactReq,
  FuturesHistoryOrdersReq,
  FuturesInsuranceFundHistoryReq,
  FuturesIsolatedSubAccountInfoReq,
  FuturesIsolatedSubAccountListReq,
  FuturesIsolatedSubPositionInfoReq,
  FuturesKlineReq,
  FuturesLeverPositionLimitReq,
  FuturesLightningClosePositionReq,
  FuturesLiquidationOrdersReq,
  FuturesMarkPriceKlineReq,
  FuturesMasterSubTransferRecordReq,
  FuturesMasterSubTransferReq,
  FuturesMatchResultsExactReq,
  FuturesMatchResultsReq,
  FuturesOpenOrdersReq,
  FuturesOrderDetailReq,
  FuturesOrderInfoReq,
  FuturesOrderLimitReq,
  FuturesPlaceOrderReq,
  FuturesPlaceTrackOrderReq,
  FuturesPlaceTriggerOrderReq,
  FuturesPositionLimitReq,
  FuturesPositionSideReq,
  FuturesRelationTpslOrderReq,
  FuturesSettlementRecordsReq,
  FuturesSubAccountInfoListReq,
  FuturesSubAuthListReq,
  FuturesSwitchLeverRateReq,
  FuturesSwitchPositionModeReq,
  FuturesTpslHisOrdersReq,
  FuturesTpslOpenOrdersReq,
  FuturesTpslOrderReq,
  FuturesTrackHisOrdersReq,
  FuturesTrackOpenOrdersReq,
  FuturesTransferInnerReq,
  FuturesTransferLimitReq,
  FuturesTriggerHisOrdersReq,
  FuturesTriggerOpenOrdersReq,
} from './types/request/futures.types.js';
import type {
  FuturesAccountTypeData,
  FuturesAdjustFactorItem,
  FuturesApiStateItem,
  FuturesAvailableLevelRateItem,
  FuturesBalanceValuationItem,
  FuturesBasisDataItem,
  FuturesBatchOrderData,
  FuturesBboTick,
  FuturesCancelAfterData,
  FuturesCancelOrderData,
  FuturesContractElementsItem,
  FuturesContractInfoItem,
  FuturesCrossAccountInfoItem,
  FuturesCrossAccountPositionData,
  FuturesCrossAvailableLevelRateItem,
  FuturesCrossLadderMarginItem,
  FuturesCrossLeverPositionLimitItem,
  FuturesCrossPositionLimitItem,
  FuturesCrossSubAccountInfoItem,
  FuturesCrossSubAccountInfoListData,
  FuturesCrossSubAccountListEntry,
  FuturesCrossSwitchLeverRateData,
  FuturesCrossTradeStateItem,
  FuturesCrossTransferLimitItem,
  FuturesCrossTransferStateItem,
  FuturesEliteRatioData,
  FuturesEstimatedSettlementPriceItem,
  FuturesFeeItem,
  FuturesFinancialRecordItem,
  FuturesFundingRateData,
  FuturesHeartbeat,
  FuturesHistoricalFundingRatePage,
  FuturesHistoricalOpenInterestData,
  FuturesHistoryOrderItem,
  FuturesIndexConstituentsData,
  FuturesIndexPriceItem,
  FuturesInsuranceFundHistoryItem,
  FuturesInsuranceFundInfoData,
  FuturesIsolatedAccountInfoItem,
  FuturesIsolatedAccountPositionItem,
  FuturesIsolatedSubAccountInfoItem,
  FuturesIsolatedSubAccountListEntry,
  FuturesKline,
  FuturesLastTradeTick,
  FuturesLeverPositionLimitItem,
  FuturesLiquidationOrderItem,
  FuturesMarketDepthTick,
  FuturesMarketOverviewBatchTick,
  FuturesMarketOverviewTick,
  FuturesMarkPriceKlineItem,
  FuturesMasterSubTransferData,
  FuturesMasterSubTransferRecordData,
  FuturesMatchResultItem,
  FuturesOpenInterestItem,
  FuturesOpenOrdersData,
  FuturesOrderDetailData,
  FuturesOrderInfoItem,
  FuturesOrderLimitData,
  FuturesPlaceOrderData,
  FuturesPositionInfoItem,
  FuturesPositionLimitItem,
  FuturesPositionSideItem,
  FuturesPriceLimitItem,
  FuturesRelationTpslOrderData,
  FuturesSettlementRecordsPage,
  FuturesSubAccountInfoListData,
  FuturesSubAuthData,
  FuturesSubAuthListData,
  FuturesSwitchLeverRateData,
  FuturesSwitchPositionModeItem,
  FuturesTimestamp,
  FuturesTpslHisOrdersData,
  FuturesTpslOpenOrdersData,
  FuturesTpslOrderData,
  FuturesTrackHisOrdersData,
  FuturesTrackOpenOrdersData,
  FuturesTradeHistoryGroup,
  FuturesTransferLimitItem,
  FuturesTriggerHisOrdersData,
  FuturesTriggerOpenOrdersData,
} from './types/response/futures.types.js';
import { FuturesAPISuccessResponse } from './types/response/shared.types.js';

/**
 * The FuturesClient provides integration to the HTX Linear-Swap (U-margined) API.
 */
export class FuturesClient extends BaseRestClient {
  getClientType(): RestClientType {
    // Points to api.hbdm.com
    // TODO: Add AWS URL support
    return REST_CLIENT_TYPE_ENUM.futures;
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
   * Get Current System Timestamp
   *
   * Returns server time in milliseconds. No signature.
   * Rate limit: 240/3s per IP.
   */
  getTimestamp(): Promise<FuturesTimestamp> {
    return this.get('/api/v1/timestamp');
  }

  /**
   * Query System Availability
   *
   * Heartbeat for futures, swap, linear-swap. 1=available, 0=maintenance. No signature.
   * Rate limit: 240/3s per IP. During maintenance, most endpoints return {status:"maintain"}.
   */
  getHeartbeat(): Promise<FuturesAPISuccessResponse<FuturesHeartbeat>> {
    return this.get('/heartbeat/');
  }

  /**
   *
   * Reference Data
   *
   */

  /**
   * Account Type Query
   *
   * Query the current account type (unified vs non-unified). 1: non-unified (cross+isolated); 2: unified.
   * Signature required. Read permission.
   */
  getUnifiedAccountType(): Promise<
    FuturesAPISuccessResponse<FuturesAccountTypeData>
  > {
    return this.getPrivate('/linear-swap-api/v3/swap_unified_account_type');
  }

  /**
   * Account Type Change
   *
   * Switch between unified and non-unified account. No positions and pending orders allowed.
   * When switching to unified, transfer assets from isolated to cross-margin first.
   * Signature required. Trade permission.
   */
  switchAccountType(params: {
    /** 1: Non-unified account (cross-margin and isolated-margin account); 2: Unified account */
    account_type: 1 | 2;
  }): Promise<FuturesAPISuccessResponse<FuturesAccountTypeData>> {
    return this.postPrivate('/linear-swap-api/v3/swap_switch_account_type', {
      body: params,
    });
  }

  /**
   * Query Funding Rate
   *
   * Get current funding rate for a contract. Supports cross and isolated margin. No signature.
   * Rate limit: 240/3s per IP (shared with other public index/price endpoints).
   */
  getFundingRate(params: {
    /** Contract code (e.g. BTC-USDT). Case-insensitive */
    contract_code: string;
  }): Promise<FuturesAPISuccessResponse<FuturesFundingRateData>> {
    return this.get('/linear-swap-api/v1/swap_funding_rate', params);
  }

  /**
   * Query Batch Funding Rate
   *
   * Get funding rates for one or all contracts. Omit contract_code for all. No signature.
   * Rate limit: 240/3s per IP (shared with other public index/price endpoints).
   */
  getBatchFundingRate(params?: {
    /** Contract code (e.g. BTC-USDT). Omit for all contracts. */
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesFundingRateData[]>> {
    return this.get('/linear-swap-api/v1/swap_batch_funding_rate', params);
  }

  /**
   * Query Historical Funding Rate
   *
   * Get historical funding rates for a contract. Supports cross and isolated margin. No signature.
   * Rate limit: 240/3s per IP (shared with other public index/price endpoints).
   */
  getHistoricalFundingRate(
    params: FuturesHistoricalFundingRateReq,
  ): Promise<FuturesAPISuccessResponse<FuturesHistoricalFundingRatePage>> {
    return this.get('/linear-swap-api/v1/swap_historical_funding_rate', params);
  }

  /**
   * Query Liquidation Orders
   *
   * Get liquidation orders. One of pair and contract required; contract preferred. No signature.
   * Rate limit: 240/3s per IP (shared with other public index/price endpoints).
   */
  getLiquidationOrders(
    params: FuturesLiquidationOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesLiquidationOrderItem[]>> {
    return this.get('/linear-swap-api/v3/swap_liquidation_orders', params);
  }

  /**
   * Query Historical Settlement Records
   *
   * Get platform settlement records for a contract. Supports swap and future formats. No signature.
   * Rate limit: 240/3s per IP (shared with other public index/price endpoints).
   */
  getSettlementRecords(
    params: FuturesSettlementRecordsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSettlementRecordsPage>> {
    return this.get('/linear-swap-api/v1/swap_settlement_records', params);
  }

  /**
   * Query Top Trader Sentiment (Account Ratio)
   *
   * Net long/short accounts ratio. Supports cross and isolated margin. No signature.
   * Rate limit: 240/3s per IP (shared with other public index/price endpoints).
   */
  getEliteAccountRatio(params: {
    /** Contract code (e.g. BTC-USDT). Supports swap and future formats */
    contract_code: string;
    /** 5min, 15min, 30min, 60min, 4hour, 1day */
    period: string;
  }): Promise<FuturesAPISuccessResponse<FuturesEliteRatioData>> {
    return this.get('/linear-swap-api/v1/swap_elite_account_ratio', params);
  }

  /**
   * Query Top Trader Sentiment (Position Ratio)
   *
   * Net long/short position ratio. Supports cross and isolated margin. No signature.
   * Rate limit: 240/3s per IP (shared with other public index/price endpoints).
   */
  getElitePositionRatio(params: {
    /** Contract code (e.g. BTC-USDT). Supports swap and future formats */
    contract_code: string;
    /** 5min, 15min, 30min, 60min, 4hour, 1day */
    period: string;
  }): Promise<FuturesAPISuccessResponse<FuturesEliteRatioData>> {
    return this.get('/linear-swap-api/v1/swap_elite_position_ratio', params);
  }

  /**
   * Query System Status (Isolated)
   *
   * Get open/close/cancel/transfer access per margin account. Isolated margin only. No signature.
   * Rate limit: 240/3s per IP (shared with other public index/price endpoints).
   */
  getApiState(params?: {
    /** Contract code (e.g. BTC-USDT). Omit for all. Case-insensitive */
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesApiStateItem[]>> {
    return this.get('/linear-swap-api/v1/swap_api_state', params);
  }

  /**
   * Query Tiered Margin (Cross)
   *
   * Get cross-margin tiered margin info. Cross margin only. No signature.
   * When querying futures contract, business_type must be futures or all.
   * Rate limit: 240/3s per IP (shared with other public index/price endpoints).
   */
  getCrossLadderMargin(
    params?: FuturesCrossLadderMarginReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCrossLadderMarginItem[]>> {
    return this.get('/linear-swap-api/v1/swap_cross_ladder_margin', params);
  }

  /**
   * Query Tiered Margin (Isolated)
   *
   * Get isolated-margin tiered margin info. Isolated margin only. No signature.
   * Rate limit: 240/3s per IP (shared with other public index/price endpoints).
   */
  getLadderMargin(params?: {
    /** Contract code (e.g. BTC-USDT). Omit for all */
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCrossLadderMarginItem[]>> {
    return this.get('/linear-swap-api/v1/swap_ladder_margin', params);
  }

  /**
   * Get Estimated Settlement Price
   *
   * Current-period estimated settlement/delivery price. Supports cross and isolated margin. No signature.
   * Empty around settlement/delivery; updated every 6s within 10min of settlement. business_type required for futures.
   * Rate limit: 240/3s per IP (shared with other public index/price endpoints).
   */
  getEstimatedSettlementPrice(
    params?: FuturesCrossLadderMarginReq,
  ): Promise<FuturesAPISuccessResponse<FuturesEstimatedSettlementPriceItem[]>> {
    return this.get(
      '/linear-swap-api/v1/swap_estimated_settlement_price',
      params,
    );
  }

  /**
   * Query Tiered Adjustment Factor (Isolated)
   *
   * Get isolated-margin tiered adjustment factors. Isolated margin only. No signature.
   * Rate limit: 240/3s per IP (shared with other public index/price endpoints).
   */
  getAdjustFactor(params?: {
    /** Contract code (e.g. BTC-USDT). Omit for all. Case-insensitive */
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesAdjustFactorItem[]>> {
    return this.get('/linear-swap-api/v1/swap_adjustfactor', params);
  }

  /**
   * Query Tiered Adjustment Factor (Cross)
   *
   * Get cross-margin tiered adjustment factors. Cross margin only. No signature.
   * business_type required for futures contract query.
   * Rate limit: 240/3s per IP (shared with other public index/price endpoints).
   */
  getCrossAdjustFactor(
    params?: FuturesCrossLadderMarginReq,
  ): Promise<FuturesAPISuccessResponse<FuturesAdjustFactorItem[]>> {
    return this.get('/linear-swap-api/v1/swap_cross_adjustfactor', params);
  }

  /**
   * Query Risk Reserve Balance
   *
   * Total risk funds for all business lines, priced in USDT. No signature.
   * Rate limit: 144/3s per UID (shared with other read interfaces).
   */
  getInsuranceFundInfo(): Promise<
    FuturesAPISuccessResponse<FuturesInsuranceFundInfoData>
  > {
    return this.get('/v1/insurance_fund_info');
  }

  /**
   * Query Historical Risk Reserves
   *
   * Historical risk fund data by day. No signature.
   * Rate limit: 144/3s per UID (shared with other read interfaces).
   */
  getInsuranceFundHistory(
    params?: FuturesInsuranceFundHistoryReq,
  ): Promise<FuturesAPISuccessResponse<FuturesInsuranceFundHistoryItem[]>> {
    return this.get('/v1/insurance_fund_history', params);
  }

  /**
   * Query Price Limitation
   *
   * Get highest buying and lowest selling price per contract. Supports cross and isolated margin. No signature.
   * business_type required for futures. Rate limit: 240/3s per IP.
   */
  getPriceLimit(
    params?: FuturesCrossLadderMarginReq,
  ): Promise<FuturesAPISuccessResponse<FuturesPriceLimitItem[]>> {
    return this.get('/linear-swap-api/v1/swap_price_limit', params);
  }

  /**
   * Get Open Interest
   *
   * Position quantity and 24h trading volume per contract. Supports cross and isolated margin. No signature.
   * business_type required for futures. Rate limit: 240/3s per IP.
   */
  getOpenInterest(
    params?: FuturesCrossLadderMarginReq,
  ): Promise<FuturesAPISuccessResponse<FuturesOpenInterestItem[]>> {
    return this.get('/linear-swap-api/v1/swap_open_interest', params);
  }

  /**
   * Query Contract Info
   *
   * Contract metadata (size, tick, dates, status). support_margin_mode filters by cross/isolated/all. No signature.
   * When isolated, contract_type/business_type cannot be futures. Rate limit: 240/3s per IP.
   */
  getContractInfo(
    params?: FuturesContractInfoReq,
  ): Promise<FuturesAPISuccessResponse<FuturesContractInfoItem[]>> {
    return this.get('/linear-swap-api/v1/swap_contract_info', params);
  }

  /**
   * Query Index Price
   *
   * Get index price and timestamp per contract. Supports cross and isolated margin. No signature.
   * Rate limit: 240/3s per IP.
   */
  getIndexPrice(params?: {
    /** Contract code (e.g. BTC-USDT). Omit for all. Case-insensitive */
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesIndexPriceItem[]>> {
    return this.get('/linear-swap-api/v1/swap_index', params);
  }

  /**
   * Get Index Constituents
   *
   * Index component info (exchange weights, symbol prices). No signature.
   * Rate limit: 144/3s per UID.
   */
  getIndexConstituents(params: {
    /** Contract code (e.g. ETH-USDT) */
    contract_code: string;
  }): Promise<FuturesAPISuccessResponse<FuturesIndexConstituentsData>> {
    return this.get(
      '/linear-swap-api/market/swap_contract_constituents',
      params,
    );
  }

  /**
   * Query Contract Elements
   *
   * Contract elements (limits, ticks, contract_infos). No signature.
   * Rate limit: 20/2s.
   */
  getContractElements(params?: {
    /** Contract code. Omit for all */
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesContractElementsItem[]>> {
    return this.get('/linear-swap-api/v1/swap_query_elements', params);
  }

  /**
   *
   * Market Data
   *
   */

  /**
   * Get Market Depth
   *
   * Order book (asks/bids). step0=raw; step1-5,14-17=merged (150 levels); step6-13,18-19=merged (20 levels). No signature.
   * Rate limit: 800/s per IP.
   */
  getMarketDepth(params: {
    /** Contract code or type. swap: BTC-USDT; future: BTC-USDT-220325 or BTC-USDT-CW/NW/CQ/NQ */
    contract_code: string;
    /** step0-step5, step14-17 (150 levels); step6-13, step18-19 (20 levels). step16-19 SHIB-USDT only */
    type: string;
  }): Promise<FuturesAPISuccessResponse<FuturesMarketDepthTick, 'tick'>> {
    return this.get('/linear-swap-ex/market/depth', params);
  }

  /**
   * Get Market BBO
   *
   * Best bid/offer per contract. Omit contract_code for all. business_type required for futures. No signature.
   * Rate limit: 800/s per IP.
   */
  getMarketBbo(params?: {
    /** Contract code or type. Omit for all */
    contract_code?: string;
    /** Default swap. futures, swap, all. Required for futures */
    business_type?: 'futures' | 'swap' | 'all';
  }): Promise<FuturesAPISuccessResponse<FuturesBboTick[], 'ticks'>> {
    return this.get('/linear-swap-ex/market/bbo', params);
  }

  /**
   * Get Kline Data
   *
   * Candlestick data. Either size or (from+to) required. No signature.
   * Rate limit: 800/s per IP.
   */
  getKlines(
    params: FuturesKlineReq,
  ): Promise<FuturesAPISuccessResponse<FuturesKline[]>> {
    return this.get('/linear-swap-ex/market/history/kline', params);
  }

  /**
   * Get Mark Price Kline
   *
   * Mark price candlestick data. No signature. Rate limit: 800/s per IP.
   */
  getMarkPriceKlines(
    params: FuturesMarkPriceKlineReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMarkPriceKlineItem[]>> {
    return this.get(
      '/index/market/history/linear_swap_mark_price_kline',
      params,
    );
  }

  /**
   * Get Market Data Overview
   *
   * 24h ticker + best bid/ask for one contract. No signature. Rate limit: 800/s per IP.
   */
  getMarketOverview(params: {
    /** Contract code or type */
    contract_code: string;
  }): Promise<FuturesAPISuccessResponse<FuturesMarketOverviewTick, 'tick'>> {
    return this.get('/linear-swap-ex/market/detail/merged', params);
  }

  /**
   * Get Batch Market Data Overview (V2)
   *
   * 24h tickers + best bid/ask for one or all contracts. business_type required for futures. No signature.
   * Rate limit: 800/s per IP. Data updated every 50ms.
   */
  getMarketOverviewBatch(params?: {
    /** Contract code or type. Omit for all */
    contract_code?: string;
    /** Default swap. futures, swap, all. Required for futures */
    business_type?: 'futures' | 'swap' | 'all';
  }): Promise<
    FuturesAPISuccessResponse<FuturesMarketOverviewBatchTick[], 'ticks'>
  > {
    return this.get('/v2/linear-swap-ex/market/detail/batch_merged', params);
  }

  /**
   * Get Last Trade
   *
   * Latest trade for a contract. Omit contract_code for all. business_type required for futures. No signature.
   * Rate limit: 800/s per IP.
   */
  getLastTrade(params?: {
    /** Contract code or type. Omit for all */
    contract_code?: string;
    /** Default swap. futures, swap, all. Required for futures */
    business_type?: 'futures' | 'swap' | 'all';
  }): Promise<FuturesAPISuccessResponse<FuturesLastTradeTick, 'tick'>> {
    return this.get('/linear-swap-ex/market/trade', params);
  }

  /**
   * Get Trade History
   *
   * Batch of recent trades for a contract. No signature. Rate limit: 800/s per IP.
   */
  getTradeHistory(params: {
    /** Contract code or type */
    contract_code: string;
    /** Items [1-2000] */
    size: number;
  }): Promise<FuturesAPISuccessResponse<FuturesTradeHistoryGroup[]>> {
    return this.get('/linear-swap-ex/market/history/trade', params);
  }

  /**
   * Query Historical Open Interest
   *
   * Open interest over time. One of (pair+contract_type) or contract_code required. No signature.
   * Rate limit: 800/s per IP.
   */
  getHistoricalOpenInterest(
    params: FuturesHistoricalOpenInterestReq,
  ): Promise<FuturesAPISuccessResponse<FuturesHistoricalOpenInterestData>> {
    return this.get('/linear-swap-api/v1/swap_his_open_interest', params);
  }

  /**
   * Get Premium Index Kline
   *
   * Premium index candlestick data. No signature. Rate limit: 800/s per IP.
   */
  getPremiumIndexKlines(
    params: FuturesMarkPriceKlineReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMarkPriceKlineItem[]>> {
    return this.get(
      '/index/market/history/linear_swap_premium_index_kline',
      params,
    );
  }

  /**
   * Get Estimated Funding Rate Kline
   *
   * Estimated funding rate candlestick data. No signature. Rate limit: 800/s per IP.
   */
  getEstimatedRateKlines(
    params: FuturesMarkPriceKlineReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMarkPriceKlineItem[]>> {
    return this.get(
      '/index/market/history/linear_swap_estimated_rate_kline',
      params,
    );
  }

  /**
   * Get Basis Data
   *
   * Basis (contract - index) kline. basis_price_type defaults to open. No signature. Rate limit: 800/s per IP.
   */
  getBasisData(
    params: FuturesBasisReq,
  ): Promise<FuturesAPISuccessResponse<FuturesBasisDataItem[]>> {
    return this.get('/index/market/history/linear_swap_basis', params);
  }

  /**
   *
   * Account
   *
   */

  /**
   * Query Asset Valuation
   *
   * Total asset valuation in fiat. Supports cross and isolated margin. Signature required.
   * Rate limit: 144/3s per UID.
   */
  getBalanceValuation(params?: {
    /** Valuation currency. Default BTC */
    valuation_asset?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesBalanceValuationItem[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_balance_valuation', {
      body: params ?? {},
    });
  }

  /**
   * Query Account Info (Isolated)
   *
   * User's isolated margin account info. Signature required. Rate limit: 144/3s per UID.
   */
  getIsolatedAccountInfo(params?: {
    /** Contract code (e.g. BTC-USDT). Omit for all */
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesIsolatedAccountInfoItem[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_account_info', {
      body: params ?? {},
    });
  }

  /**
   * Query Account Info (Cross)
   *
   * User's cross margin account info. Signature required. Rate limit: 144/3s per UID.
   */
  getCrossAccountInfo(params?: {
    /** Margin account (e.g. USDT). Omit for all */
    margin_account?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCrossAccountInfoItem[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_account_info', {
      body: params ?? {},
    });
  }

  /**
   * Query Position Info (Isolated)
   *
   * User's isolated margin positions. Signature required. Rate limit: 144/3s per UID.
   */
  getIsolatedPositionInfo(params?: {
    /** Contract code (e.g. BTC-USDT). Omit for all */
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesPositionInfoItem[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_position_info', {
      body: params ?? {},
    });
  }

  /**
   * Query Position Info (Cross)
   *
   * User's cross margin positions. contract_code preferred when all filled. Signature required. Rate limit: 144/3s per UID.
   */
  getCrossPositionInfo(
    params?: FuturesCrossPositionInfoReq,
  ): Promise<FuturesAPISuccessResponse<FuturesPositionInfoItem[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_position_info', {
      body: params ?? {},
    });
  }

  /**
   * Query Assets And Positions (Isolated)
   *
   * Combined account + positions for isolated margin. Signature required. Rate limit: 144/3s per UID.
   */
  getIsolatedAccountPositionInfo(params: {
    /** Contract code (e.g. BTC-USDT) */
    contract_code: string;
  }): Promise<FuturesAPISuccessResponse<FuturesIsolatedAccountPositionItem[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_account_position_info', {
      body: params,
    });
  }

  /**
   * Query Assets And Positions (Cross)
   *
   * Combined account + positions for cross margin. Signature required. Rate limit: 144/3s per UID.
   */
  getCrossAccountPositionInfo(params: {
    /** Margin account (e.g. USDT) */
    margin_account: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCrossAccountPositionData>> {
    return this.postPrivate(
      '/linear-swap-api/v1/swap_cross_account_position_info',
      { body: params },
    );
  }

  /**
   * Set Sub-Account Trading Permissions
   *
   * Enable/disable trading for sub-accounts. Max 10 sub UIDs per request. Signature required. Trade permission.
   */
  setSubAuth(params: {
    /** Sub-account UIDs, comma-separated. Max 10 */
    sub_uid: string;
    /** 1: enable, 0: disable */
    sub_auth: 0 | 1;
  }): Promise<FuturesAPISuccessResponse<FuturesSubAuthData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_sub_auth', {
      body: params,
    });
  }

  /**
   * Query Sub-Account Trading Permissions
   *
   * List sub-accounts and their trading permission status. Signature required. Rate limit: 144/3s per UID.
   */
  getSubAuthList(
    params?: FuturesSubAuthListReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSubAuthListData>> {
    return this.getPrivate('/linear-swap-api/v1/swap_sub_auth_list', params);
  }

  /**
   * Query Assets of All Sub-Accounts (Isolated)
   *
   * Assets info of all sub-accounts under master. Isolated margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getIsolatedSubAccountList(
    params?: FuturesIsolatedSubAccountListReq,
  ): Promise<FuturesAPISuccessResponse<FuturesIsolatedSubAccountListEntry[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_sub_account_list', {
      body: params ?? {},
    });
  }

  /**
   * Query Assets of All Sub-Accounts (Cross)
   *
   * Assets info of all sub-accounts under master. Cross margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getCrossSubAccountList(
    params?: FuturesCrossSubAccountListReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCrossSubAccountListEntry[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_sub_account_list', {
      body: params ?? {},
    });
  }

  /**
   * Query Batch of Sub-Account Assets (Isolated)
   *
   * Batch query sub-account assets with pagination. Isolated margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getSubAccountInfoList(
    params?: FuturesSubAccountInfoListReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSubAccountInfoListData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_sub_account_info_list', {
      body: params ?? {},
    });
  }

  /**
   * Query Batch of Sub-Account Assets (Cross)
   *
   * Batch query sub-account assets with pagination. Cross margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getCrossSubAccountInfoList(
    params?: FuturesCrossSubAccountInfoListReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCrossSubAccountInfoListData>> {
    return this.postPrivate(
      '/linear-swap-api/v1/swap_cross_sub_account_info_list',
      { body: params ?? {} },
    );
  }

  /**
   * Query Single Sub-Account Assets (Isolated)
   *
   * Assets info for one sub-account. Isolated margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getIsolatedSubAccountInfo(
    params: FuturesIsolatedSubAccountInfoReq,
  ): Promise<FuturesAPISuccessResponse<FuturesIsolatedSubAccountInfoItem[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_sub_account_info', {
      body: params,
    });
  }

  /**
   * Query Single Sub-Account Assets (Cross)
   *
   * Assets info for one sub-account. Cross margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getCrossSubAccountInfo(
    params: FuturesCrossSubAccountInfoReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCrossSubAccountInfoItem[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_sub_account_info', {
      body: params,
    });
  }

  /**
   * Query Single Sub-Account Positions (Isolated)
   *
   * Position info for one sub-account. Isolated margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getIsolatedSubPositionInfo(
    params: FuturesIsolatedSubPositionInfoReq,
  ): Promise<FuturesAPISuccessResponse<FuturesPositionInfoItem[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_sub_position_info', {
      body: params,
    });
  }

  /**
   * Query Single Sub-Account Positions (Cross)
   *
   * Position info for one sub-account. Cross margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getCrossSubPositionInfo(
    params: FuturesCrossSubPositionInfoReq,
  ): Promise<FuturesAPISuccessResponse<FuturesPositionInfoItem[]>> {
    return this.postPrivate(
      '/linear-swap-api/v1/swap_cross_sub_position_info',
      { body: params },
    );
  }

  /**
   * Query Account Financial Records
   *
   * Financial records (transfers, fees, funding, etc.). Supports cross and isolated. Signature required. Rate limit: 144/3s per UID.
   */
  getFinancialRecords(
    params: FuturesFinancialRecordReq,
  ): Promise<FuturesAPISuccessResponse<FuturesFinancialRecordItem[]>> {
    return this.postPrivate('/linear-swap-api/v3/swap_financial_record', {
      body: params,
    });
  }

  /**
   * Query Account Financial Records (Exact)
   *
   * Financial records via multiple fields. Same params as swap_financial_record; API default direct is prev. Signature required. Rate limit: 144/3s per UID.
   */
  getFinancialRecordsExact(
    params: FuturesFinancialRecordExactReq,
  ): Promise<FuturesAPISuccessResponse<FuturesFinancialRecordItem[]>> {
    return this.postPrivate('/linear-swap-api/v3/swap_financial_record_exact', {
      body: params,
    });
  }

  /**
   * Query Available Leverage (Isolated)
   *
   * User's available leverage per contract. Isolated margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getAvailableLevelRate(
    params?: FuturesAvailableLevelRateReq,
  ): Promise<FuturesAPISuccessResponse<FuturesAvailableLevelRateItem[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_available_level_rate', {
      body: params ?? {},
    });
  }

  /**
   * Query Available Leverage (Cross)
   *
   * User's available leverage per contract. Cross margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getCrossAvailableLevelRate(
    params?: FuturesCrossAvailableLevelRateReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCrossAvailableLevelRateItem[]>> {
    return this.postPrivate(
      '/linear-swap-api/v1/swap_cross_available_level_rate',
      { body: params ?? {} },
    );
  }

  /**
   * Query Order Limit
   *
   * Max open/close order limits per contract for given order type. Supports cross and isolated. Signature required. Rate limit: 144/3s per UID.
   */
  getOrderLimit(
    params: FuturesOrderLimitReq,
  ): Promise<FuturesAPISuccessResponse<FuturesOrderLimitData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_order_limit', {
      body: params,
    });
  }

  /**
   * Query Trading Fee
   *
   * Maker/taker fee rates per contract. Supports cross and isolated. Signature required. Rate limit: 144/3s per UID.
   */
  getFee(
    params?: FuturesFeeReq,
  ): Promise<FuturesAPISuccessResponse<FuturesFeeItem[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_fee', {
      body: params ?? {},
    });
  }

  /**
   * Query Transfer Limit (Isolated)
   *
   * Transfer in/out limits per margin account. Isolated margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getTransferLimit(
    params?: FuturesTransferLimitReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTransferLimitItem[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_transfer_limit', {
      body: params ?? {},
    });
  }

  /**
   * Query Transfer Limit (Cross)
   *
   * Transfer in/out limits per margin account. Cross margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getCrossTransferLimit(
    params?: FuturesCrossTransferLimitReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCrossTransferLimitItem[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_transfer_limit', {
      body: params ?? {},
    });
  }

  /**
   * Query Position Limit (Isolated)
   *
   * Max long/short position limits per contract. Isolated margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getPositionLimit(
    params?: FuturesPositionLimitReq,
  ): Promise<FuturesAPISuccessResponse<FuturesPositionLimitItem[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_position_limit', {
      body: params ?? {},
    });
  }

  /**
   * Query Position Limit (Cross)
   *
   * Max long/short position limits per contract. Cross margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getCrossPositionLimit(
    params?: FuturesCrossPositionLimitReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCrossPositionLimitItem[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_position_limit', {
      body: params ?? {},
    });
  }

  /**
   * Query Position Limit for All Leverages (Isolated)
   *
   * Position limits per leverage per contract. Isolated margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getLeverPositionLimit(
    params?: FuturesLeverPositionLimitReq,
  ): Promise<FuturesAPISuccessResponse<FuturesLeverPositionLimitItem[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_lever_position_limit', {
      body: params ?? {},
    });
  }

  /**
   * Query Position Limit for All Leverages (Cross)
   *
   * Position limits per leverage per contract. Cross margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getCrossLeverPositionLimit(
    params?: FuturesCrossLeverPositionLimitReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCrossLeverPositionLimitItem[]>> {
    return this.postPrivate(
      '/linear-swap-api/v1/swap_cross_lever_position_limit',
      {
        body: params ?? {},
      },
    );
  }

  /**
   * Transfer Between Master and Sub Account
   *
   * Transfer asset between master and sub. Supports cross and isolated. Trade permission. Rate limit: 10/min per sub.
   */
  masterSubTransfer(
    params: FuturesMasterSubTransferReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMasterSubTransferData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_master_sub_transfer', {
      body: params,
    });
  }

  /**
   * Query Master-Sub Transfer Records
   *
   * Transfer history between master and sub accounts. Supports cross and isolated. Signature required. Rate limit: 144/3s per UID.
   */
  getMasterSubTransferRecord(
    params: FuturesMasterSubTransferRecordReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMasterSubTransferRecordData>> {
    return this.postPrivate(
      '/linear-swap-api/v1/swap_master_sub_transfer_record',
      {
        body: params,
      },
    );
  }

  /**
   * Transfer Between Margin Accounts
   *
   * Transfer between margin accounts under same account. Supports cross and isolated. Trade permission. Rate limit: 10/min.
   */
  transferInner(
    params: FuturesTransferInnerReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMasterSubTransferData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_transfer_inner', {
      body: params,
    });
  }

  /**
   *
   * Trade
   *
   */

  /**
   * Automatic Order Cancellation (Dead Man's Switch)
   *
   * Enable/disable auto-cancel of all pending orders after countdown. If not refreshed before timer ends, all pending orders are cancelled. Trade permission.
   */
  setCancelAfter(
    params: FuturesCancelAfterReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelAfterData>> {
    return this.postPrivate('/linear-swap-api/v1/linear-cancel-after', {
      body: params,
    });
  }

  /**
   * Query Trade State (Cross)
   *
   * Open/close/cancel access per contract. Cross margin only. No signature. Rate limit: 144/3s per UID.
   */
  getCrossTradeState(
    params?: FuturesCrossTradeStateReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCrossTradeStateItem[]>> {
    return this.getPrivate(
      '/linear-swap-api/v1/swap_cross_trade_state',
      params,
    );
  }

  /**
   * [Cross] Query Information On Transfer State
   *
   * Transfer in/out and master-sub transfer access per margin account. Cross margin only. No signature. Read permission.
   */
  getCrossTransferState(
    params?: FuturesCrossTransferStateReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCrossTransferStateItem[]>> {
    return this.getPrivate(
      '/linear-swap-api/v1/swap_cross_transfer_state',
      params,
    );
  }

  /**
   * Switch Position Mode (Isolated)
   *
   * Set single_side or dual_side for isolated margin account. Trade permission. Rate limit: 144/3s per UID.
   */
  switchPositionMode(
    params: FuturesSwitchPositionModeReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSwitchPositionModeItem[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_switch_position_mode', {
      body: params,
    });
  }

  /**
   * Switch Position Mode (Cross)
   *
   * Set single_side or dual_side for cross margin account. Trade permission. Rate limit: 144/3s per UID.
   */
  switchCrossPositionMode(
    params: FuturesSwitchPositionModeReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSwitchPositionModeItem[]>> {
    return this.postPrivate(
      '/linear-swap-api/v1/swap_cross_switch_position_mode',
      {
        body: params,
      },
    );
  }

  /**
   * Place Order (Isolated)
   *
   * Place a single order. Isolated margin only. Trade permission. Rate limit: 144/3s per UID.
   */
  placeOrder(
    params: FuturesPlaceOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesPlaceOrderData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_order', {
      body: params,
    });
  }

  /**
   * Place Order (Cross)
   *
   * Place a single order. Cross margin only. One of contract_code or (pair+contract_type) required. Trade permission. Rate limit: 144/3s per UID.
   */
  placeCrossOrder(
    params: FuturesCrossPlaceOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesPlaceOrderData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_order', {
      body: params,
    });
  }

  /**
   * Place Batch Orders (Isolated)
   *
   * Place up to 10 orders. Isolated margin only. Trade permission. Rate limit: 144/3s per UID.
   */
  placeBatchOrder(
    params: FuturesBatchOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesBatchOrderData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_batchorder', {
      body: params,
    });
  }

  /**
   * Place Batch Orders (Cross)
   *
   * Place up to 25 orders. Cross margin only. Trade permission. Rate limit: 144/3s per UID.
   */
  placeCrossBatchOrder(
    params: FuturesCrossBatchOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesBatchOrderData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_batchorder', {
      body: params,
    });
  }

  /**
   * Cancel Order (Isolated)
   *
   * Cancel order(s) by order_id or client_order_id. Max 25 per request. Isolated margin only. Trade permission. Rate limit: 144/3s per UID.
   */
  cancelOrder(
    params: FuturesCancelOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrderData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cancel', {
      body: params,
    });
  }

  /**
   * Cancel Order (Cross)
   *
   * Cancel order(s) by order_id or client_order_id. Max 25 per request. Cross margin only. Trade permission. Rate limit: 144/3s per UID.
   */
  cancelCrossOrder(
    params: FuturesCrossCancelOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrderData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_cancel', {
      body: params,
    });
  }

  /**
   * Cancel All Orders (Isolated)
   *
   * Cancel all orders for contract. Optional direction/offset filter. Isolated margin only. Trade permission. Rate limit: 144/3s per UID.
   */
  cancelAllOrders(
    params: FuturesCancelAllOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrderData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cancelall', {
      body: params,
    });
  }

  /**
   * Cancel All Orders (Cross)
   *
   * Cancel all orders for contract. Optional direction/offset filter. Cross margin only. Trade permission. Rate limit: 144/3s per UID.
   */
  cancelCrossAllOrders(
    params: FuturesCrossCancelAllOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrderData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_cancelall', {
      body: params,
    });
  }

  /**
   * Switch Leverage (Isolated)
   *
   * Set leverage for isolated margin contract. Requires no open orders. Trade permission. Rate limit: 1 per 3s.
   */
  switchLeverRate(
    params: FuturesSwitchLeverRateReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSwitchLeverRateData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_switch_lever_rate', {
      body: params,
    });
  }

  /**
   * Switch Leverage (Cross)
   *
   * Set leverage for cross margin contract. Requires no open orders. Trade permission. Rate limit: 1 per 3s.
   */
  switchCrossLeverRate(
    params: FuturesCrossSwitchLeverRateReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCrossSwitchLeverRateData>> {
    return this.postPrivate(
      '/linear-swap-api/v1/swap_cross_switch_lever_rate',
      {
        body: params,
      },
    );
  }

  /**
   * Get Order Information (Isolated)
   *
   * Query order(s) by order_id or client_order_id. Max 50 per request. Isolated margin only. Read permission. Rate limit: 144/3s per UID.
   */
  getOrderInfo(
    params: FuturesOrderInfoReq,
  ): Promise<FuturesAPISuccessResponse<FuturesOrderInfoItem[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_order_info', {
      body: params,
    });
  }

  /**
   * Get Order Information (Cross)
   *
   * Query order(s) by order_id or client_order_id. Max 50 per request. Cross margin only. One of contract_code or pair required. Read permission. Rate limit: 144/3s per UID.
   */
  getCrossOrderInfo(
    params: FuturesCrossOrderInfoReq,
  ): Promise<FuturesAPISuccessResponse<FuturesOrderInfoItem[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_order_info', {
      body: params,
    });
  }

  /**
   * Get Order Detail (Isolated)
   *
   * Order details with trade breakdown. Paginated. Isolated margin only. Read permission. Rate limit: 144/3s per UID.
   */
  getOrderDetail(
    params: FuturesOrderDetailReq,
  ): Promise<FuturesAPISuccessResponse<FuturesOrderDetailData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_order_detail', {
      body: params,
    });
  }

  /**
   * Get Order Detail (Cross)
   *
   * Order details with trade breakdown. Paginated. Cross margin only. One of contract_code or pair required. Read permission. Rate limit: 144/3s per UID.
   */
  getCrossOrderDetail(
    params: FuturesCrossOrderDetailReq,
  ): Promise<FuturesAPISuccessResponse<FuturesOrderDetailData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_order_detail', {
      body: params,
    });
  }

  /**
   * Get Open Orders (Isolated)
   *
   * Current unfilled orders. Paginated. Isolated margin only. Read permission. Rate limit: 144/3s per UID.
   */
  getOpenOrders(
    params?: FuturesOpenOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesOpenOrdersData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_openorders', {
      body: params ?? {},
    });
  }

  /**
   * Get Open Orders (Cross)
   *
   * Current unfilled orders. Paginated. Cross margin only. Omit all for all contracts. Read permission. Rate limit: 144/3s per UID.
   */
  getCrossOpenOrders(
    params?: FuturesCrossOpenOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesOpenOrdersData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_openorders', {
      body: params ?? {},
    });
  }

  /**
   * Get History Orders (Isolated)
   *
   * Historical orders. Time-window query, 48h max. Isolated margin only. Read permission. Rate limit: 144/3s per UID.
   */
  getHistoryOrders(
    params: FuturesHistoryOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesHistoryOrderItem[]>> {
    return this.postPrivate('/linear-swap-api/v3/swap_hisorders', {
      body: params,
    });
  }

  /**
   * Get History Orders (Cross)
   *
   * Historical orders. Time-window query, 48h max. Cross margin only. One of contract or pair required. Read permission. Rate limit: 144/3s per UID.
   */
  getCrossHistoryOrders(
    params: FuturesCrossHistoryOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesHistoryOrderItem[]>> {
    return this.postPrivate('/linear-swap-api/v3/swap_cross_hisorders', {
      body: params,
    });
  }

  /**
   * Get History Orders via Multiple Fields (Isolated)
   *
   * History orders with price_type filter. Isolated margin only. Read permission. Rate limit: 144/3s per UID.
   */
  getHistoryOrdersExact(
    params: FuturesHistoryOrdersExactReq,
  ): Promise<FuturesAPISuccessResponse<FuturesHistoryOrderItem[]>> {
    return this.postPrivate('/linear-swap-api/v3/swap_hisorders_exact', {
      body: params,
    });
  }

  /**
   * Get History Orders via Multiple Fields (Cross)
   *
   * History orders with price_type filter. Cross margin only. Read permission. Rate limit: 144/3s per UID.
   */
  getCrossHistoryOrdersExact(
    params: FuturesCrossHistoryOrdersExactReq,
  ): Promise<FuturesAPISuccessResponse<FuturesHistoryOrderItem[]>> {
    return this.postPrivate('/linear-swap-api/v3/swap_cross_hisorders_exact', {
      body: params,
    });
  }

  /**
   * Acquire History Match Results (Isolated)
   *
   * Matched trades history. One of contract or pair required. Isolated margin only. Read permission. Rate limit: 144/3s per UID.
   */
  getMatchResults(
    params: FuturesMatchResultsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMatchResultItem[]>> {
    return this.postPrivate('/linear-swap-api/v3/swap_matchresults', {
      body: params,
    });
  }

  /**
   * Get History Match Results (Cross)
   *
   * Matched trades history. One of contract or pair required. Cross margin only. Read permission. Rate limit: 144/3s per UID.
   */
  getCrossMatchResults(
    params: FuturesCrossMatchResultsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMatchResultItem[]>> {
    return this.postPrivate('/linear-swap-api/v3/swap_cross_matchresults', {
      body: params,
    });
  }

  /**
   * Get History Match Results via Multiple Fields (Isolated)
   *
   * Matched trades history. Isolated margin only. Read permission. Rate limit: 144/3s per UID.
   */
  getMatchResultsExact(
    params: FuturesMatchResultsExactReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMatchResultItem[]>> {
    return this.postPrivate('/linear-swap-api/v3/swap_matchresults_exact', {
      body: params,
    });
  }

  /**
   * Get History Match Results via Multiple Fields (Cross)
   *
   * Matched trades history. Cross margin only. Read permission. Rate limit: 144/3s per UID.
   */
  getCrossMatchResultsExact(
    params: FuturesCrossMatchResultsExactReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMatchResultItem[]>> {
    return this.postPrivate(
      '/linear-swap-api/v3/swap_cross_matchresults_exact',
      {
        body: params,
      },
    );
  }

  /**
   * Place Lightning Close Order (Isolated)
   *
   * Closes position using optimal 30-grade rival price; unfilled converts to limit. Isolated only. Trade permission. Rate limit: 144/3s per UID.
   */
  placeLightningClosePosition(
    params: FuturesLightningClosePositionReq,
  ): Promise<FuturesAPISuccessResponse<FuturesPlaceOrderData>> {
    return this.postPrivate(
      '/linear-swap-api/v1/swap_lightning_close_position',
      {
        body: params,
      },
    );
  }

  /**
   * Place Lightning Close Position (Cross)
   *
   * Closes position using optimal 30-grade rival price. One of (pair+contract_type) or contract_code required. Cross only. Trade permission. Rate limit: 144/3s per UID.
   */
  placeCrossLightningClosePosition(
    params: FuturesCrossLightningClosePositionReq,
  ): Promise<FuturesAPISuccessResponse<FuturesPlaceOrderData>> {
    return this.postPrivate(
      '/linear-swap-api/v1/swap_cross_lightning_close_position',
      { body: params },
    );
  }

  /**
   * Query Position Mode (Isolated)
   *
   * Returns position mode (single_side/dual_side) per margin account. Isolated. Read permission. Rate limit: 144/3s per UID.
   */
  getPositionSide(
    params: FuturesPositionSideReq,
  ): Promise<FuturesAPISuccessResponse<FuturesPositionSideItem[]>> {
    return this.getPrivate('/linear-swap-api/v1/swap_position_side', params);
  }

  /**
   * Query Position Mode (Cross)
   *
   * Returns position mode (single_side/dual_side) per margin account. Cross. Read permission. Rate limit: 144/3s per UID.
   */
  getCrossPositionSide(
    params: FuturesCrossPositionSideReq,
  ): Promise<FuturesAPISuccessResponse<FuturesPositionSideItem[]>> {
    return this.getPrivate(
      '/linear-swap-api/v1/swap_cross_position_side',
      params,
    );
  }

  /**
   *
   * Strategy Order
   *
   */

  /**
   * [Isolated] Place Trigger Order
   *
   * Isolated margin only. Trade permission. Rate limit: 5/s.
   */
  placeTriggerOrder(
    params: FuturesPlaceTriggerOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesPlaceOrderData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_trigger_order', {
      body: params,
    });
  }

  /**
   * [Cross] Place Trigger Order
   *
   * Cross margin only. One of (pair+contract_type) or contract_code required; contract_code preferred when all filled. Trade permission. Rate limit: 5/s.
   */
  placeCrossTriggerOrder(
    params: FuturesCrossPlaceTriggerOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesPlaceOrderData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_trigger_order', {
      body: params,
    });
  }

  /**
   * [Isolated] Cancel Trigger Order
   *
   * Isolated margin only. Trade permission. Rate limit: 5/s.
   */
  cancelTriggerOrder(
    params: FuturesCancelTriggerOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrderData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_trigger_cancel', {
      body: params,
    });
  }

  /**
   * [Cross] Cancel Trigger Order
   *
   * Cross margin only. One of (pair+contract_type) or contract_code required; contract_code preferred when all filled. Trade permission. Rate limit: 5/s.
   */
  cancelCrossTriggerOrder(
    params: FuturesCrossCancelTriggerOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrderData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_trigger_cancel', {
      body: params,
    });
  }

  /**
   * [Isolated] Cancel All Trigger Orders
   *
   * Isolated margin only. Trade permission. Rate limit: 5/s. Can fill only one of direction and offset to filter.
   */
  cancelAllTriggerOrders(
    params: FuturesCancelAllTriggerOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrderData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_trigger_cancelall', {
      body: params,
    });
  }

  /**
   * [Cross] Cancel All Trigger Orders
   *
   * Cross margin only. One of (pair+contract_type) or contract_code required; contract_code preferred when all filled. Trade permission. Rate limit: 5/s. Can fill only one of direction and offset to filter.
   */
  cancelAllCrossTriggerOrders(
    params: FuturesCrossCancelAllTriggerOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrderData>> {
    return this.postPrivate(
      '/linear-swap-api/v1/swap_cross_trigger_cancelall',
      {
        body: params,
      },
    );
  }

  /**
   * [Isolated] Query Trigger Order Open Orders
   *
   * Isolated margin only. Read permission. Rate limit: 5/s.
   */
  getTriggerOpenOrders(
    params: FuturesTriggerOpenOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTriggerOpenOrdersData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_trigger_openorders', {
      body: params,
    });
  }

  /**
   * [Cross] Query Trigger Order Open Orders
   *
   * Cross margin only. When both pair and contract_code filled, contract_code preferred; when none, all open orders. Read permission.
   */
  getCrossTriggerOpenOrders(
    params: FuturesCrossTriggerOpenOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTriggerOpenOrdersData>> {
    return this.postPrivate(
      '/linear-swap-api/v1/swap_cross_trigger_openorders',
      { body: params },
    );
  }

  /**
   * [Isolated] Query Trigger Order History
   *
   * Isolated margin only. Read permission. Default query completed orders (status 4, 5, 6).
   */
  getTriggerHisOrders(
    params: FuturesTriggerHisOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTriggerHisOrdersData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_trigger_hisorders', {
      body: params,
    });
  }

  /**
   * [Cross] Query Trigger Order History
   *
   * Cross margin only. One of pair or contract_code required; contract_code preferred when both filled. Read permission.
   */
  getCrossTriggerHisOrders(
    params: FuturesCrossTriggerHisOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTriggerHisOrdersData>> {
    return this.postPrivate(
      '/linear-swap-api/v1/swap_cross_trigger_hisorders',
      { body: params },
    );
  }

  /**
   * [Isolated] Set Take-profit and Stop-loss Order for an Existing Position
   *
   * Isolated margin only. At least one of tp_trigger_price and sl_trigger_price required. Trade permission. Rate limit: 5/s.
   */
  placeTpslOrder(
    params: FuturesTpslOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTpslOrderData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_tpsl_order', {
      body: params,
    });
  }

  /**
   * [Cross] Set Take-profit and Stop-loss Order for an Existing Position
   *
   * Cross margin only. One of (pair+contract_type) or contract_code required; contract_code preferred when all filled. At least one of tp_trigger_price and sl_trigger_price required. Trade permission. Rate limit: 5/s.
   */
  placeCrossTpslOrder(
    params: FuturesCrossTpslOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTpslOrderData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_tpsl_order', {
      body: params,
    });
  }

  /**
   * [Isolated] Cancel a Take-profit and Stop-loss Order
   *
   * Isolated margin only. Trade permission. Rate limit: 5/s.
   */
  cancelTpslOrder(
    params: FuturesCancelTpslOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrderData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_tpsl_cancel', {
      body: params,
    });
  }

  /**
   * [Cross] Cancel a Take-profit and Stop-loss Order
   *
   * Cross margin only. One of (pair+contract_type) or contract_code required; contract_code preferred when all filled. Trade permission. Rate limit: 5/s.
   */
  cancelCrossTpslOrder(
    params: FuturesCrossCancelTpslOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrderData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_tpsl_cancel', {
      body: params,
    });
  }

  /**
   * [Isolated] Cancel all Take-profit and Stop-loss Orders
   *
   * Isolated margin only. Trade permission. Rate limit: 5/s.
   */
  cancelAllTpslOrders(
    params: FuturesCancelAllTpslOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrderData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_tpsl_cancelall', {
      body: params,
    });
  }

  /**
   * [Cross] Cancel all Take-profit and Stop-loss Orders
   *
   * Cross margin only. One of (pair+contract_type) or contract_code required; contract_code preferred when all filled. Trade permission. Rate limit: 5/s.
   */
  cancelAllCrossTpslOrders(
    params: FuturesCrossCancelAllTpslOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrderData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_tpsl_cancelall', {
      body: params,
    });
  }

  /**
   * [Isolated] Query Open Take-profit and Stop-loss Orders
   *
   * Isolated margin only. Read permission.
   */
  getTpslOpenOrders(
    params: FuturesTpslOpenOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTpslOpenOrdersData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_tpsl_openorders', {
      body: params,
    });
  }

  /**
   * [Cross] Query Open Take-profit and Stop-loss Orders
   *
   * Cross margin only. When both filled, contract_code preferred; when none, all data. Read permission.
   */
  getCrossTpslOpenOrders(
    params: FuturesCrossTpslOpenOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTpslOpenOrdersData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_tpsl_openorders', {
      body: params,
    });
  }

  /**
   * [Isolated] Query Take-profit and Stop-loss History Orders
   *
   * Isolated margin only. Read permission.
   */
  getTpslHisOrders(
    params: FuturesTpslHisOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTpslHisOrdersData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_tpsl_hisorders', {
      body: params,
    });
  }

  /**
   * [Cross] Query Take-profit and Stop-loss History Orders
   *
   * Cross margin only. One of pair or contract_code required; contract_code preferred when both filled. Read permission.
   */
  getCrossTpslHisOrders(
    params: FuturesCrossTpslHisOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTpslHisOrdersData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_tpsl_hisorders', {
      body: params,
    });
  }

  /**
   * [Isolated] Query Info Of Take-profit and Stop-loss Order That Related To Position Opening Order
   *
   * Isolated margin only. Read permission.
   */
  getRelationTpslOrder(
    params: FuturesRelationTpslOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesRelationTpslOrderData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_relation_tpsl_order', {
      body: params,
    });
  }

  /**
   * [Cross] Query Info Of Take-profit and Stop-loss Order That Related To Position Opening Order
   *
   * Cross margin only. One of pair or contract_code required; contract_code preferred when both filled. Read permission.
   */
  getCrossRelationTpslOrder(
    params: FuturesCrossRelationTpslOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesRelationTpslOrderData>> {
    return this.postPrivate(
      '/linear-swap-api/v1/swap_cross_relation_tpsl_order',
      {
        body: params,
      },
    );
  }

  /**
   * [Isolated] Place a Trailing Order
   *
   * Isolated margin only. Trade permission. Rate limit: 5/s.
   */
  placeTrackOrder(
    params: FuturesPlaceTrackOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesPlaceOrderData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_track_order', {
      body: params,
    });
  }

  /**
   * [Cross] Place a Trailing Order
   *
   * Cross margin only. One of (pair+contract_type) or contract_code required; contract_code preferred when all filled. Trade permission. Rate limit: 5/s.
   */
  placeCrossTrackOrder(
    params: FuturesCrossPlaceTrackOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesPlaceOrderData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_track_order', {
      body: params,
    });
  }

  /**
   * [Isolated] Cancel a Trailing Order
   *
   * Isolated margin only. Trade permission. Rate limit: 5/s.
   */
  cancelTrackOrder(
    params: FuturesCancelTrackOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrderData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_track_cancel', {
      body: params,
    });
  }

  /**
   * [Cross] Cancel a Trailing Order
   *
   * Cross margin only. One of (pair+contract_type) or contract_code required; contract_code preferred when all filled. Trade permission. Rate limit: 5/s.
   */
  cancelCrossTrackOrder(
    params: FuturesCrossCancelTrackOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrderData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_track_cancel', {
      body: params,
    });
  }

  /**
   * [Isolated] Cancel All Trailing Orders
   *
   * Isolated margin only. Can fill only one of direction and offset to filter. Trade permission. Rate limit: 5/s.
   */
  cancelAllTrackOrders(
    params: FuturesCancelAllTrackOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrderData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_track_cancelall', {
      body: params,
    });
  }

  /**
   * [Cross] Cancel All Trailing Orders
   *
   * Cross margin only. One of (pair+contract_type) or contract_code required; contract_code preferred when all filled. Can fill only one of direction and offset to filter. Trade permission. Rate limit: 5/s.
   */
  cancelAllCrossTrackOrders(
    params: FuturesCrossCancelAllTrackOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrderData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_track_cancelall', {
      body: params,
    });
  }

  /**
   * [Isolated] Current unfilled trailing order acquisition
   *
   * Isolated margin only. Read permission.
   */
  getTrackOpenOrders(
    params: FuturesTrackOpenOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTrackOpenOrdersData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_track_openorders', {
      body: params,
    });
  }

  /**
   * [Cross] Current unfilled trailing order acquisition
   *
   * Cross margin only. When both filled, contract_code preferred; when none, all open orders. Read permission.
   */
  getCrossTrackOpenOrders(
    params: FuturesCrossTrackOpenOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTrackOpenOrdersData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_track_openorders', {
      body: params,
    });
  }

  /**
   * [Isolated] Get History Trailing Orders
   *
   * Isolated margin only. Read permission.
   */
  getTrackHisOrders(
    params: FuturesTrackHisOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTrackHisOrdersData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_track_hisorders', {
      body: params,
    });
  }

  /**
   * [Cross] Get History Trailing Orders
   *
   * Cross margin only. One of pair or contract_code required; contract_code preferred when both filled. Read permission.
   */
  getCrossTrackHisOrders(
    params: FuturesCrossTrackHisOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTrackHisOrdersData>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_track_hisorders', {
      body: params,
    });
  }

  /**
   *
   * Unified
   *
   */

  
}
