import { BaseRestClient } from './lib/BaseRestClient.js';
import { REST_CLIENT_TYPE_ENUM, RestClientType } from './lib/requestUtils.js';
import type {
  FuturesBasisReq,
  FuturesContractInfoReq,
  FuturesCrossLadderMarginReq,
  FuturesHistoricalFundingRateReq,
  FuturesHistoricalOpenInterestReq,
  FuturesInsuranceFundHistoryReq,
  FuturesKlineReq,
  FuturesLiquidationOrdersReq,
  FuturesMarkPriceKlineReq,
  FuturesSettlementRecordsReq,
} from './types/request/futures.types.js';
import type {
  FuturesAccountTypeData,
  FuturesAdjustFactorItem,
  FuturesApiStateItem,
  FuturesBasisDataItem,
  FuturesBboTick,
  FuturesContractElementsItem,
  FuturesContractInfoItem,
  FuturesCrossLadderMarginItem,
  FuturesEliteRatioData,
  FuturesEstimatedSettlementPriceItem,
  FuturesFundingRateData,
  FuturesHeartbeat,
  FuturesHistoricalFundingRatePage,
  FuturesHistoricalOpenInterestData,
  FuturesIndexConstituentsData,
  FuturesIndexPriceItem,
  FuturesInsuranceFundHistoryItem,
  FuturesInsuranceFundInfoData,
  FuturesKline,
  FuturesLastTradeTick,
  FuturesLiquidationOrderItem,
  FuturesMarketDepthTick,
  FuturesMarketOverviewBatchTick,
  FuturesMarketOverviewTick,
  FuturesMarkPriceKlineItem,
  FuturesOpenInterestItem,
  FuturesPriceLimitItem,
  FuturesSettlementRecordsPage,
  FuturesTimestamp,
  FuturesTradeHistoryGroup,
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
}
