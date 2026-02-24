import { BaseRestClient } from './lib/BaseRestClient.js';
import { REST_CLIENT_TYPE_ENUM, RestClientType } from './lib/requestUtils.js';
import type {
  FuturesCancelAllCrossTpslOrdersReq,
  FuturesCancelAllCrossTrailingOrdersReq,
  FuturesCancelAllCrossTriggerOrdersReq,
  FuturesCancelAllOrdersReq,
  FuturesCancelAllTpslOrdersReq,
  FuturesCancelAllTrailingOrdersReq,
  FuturesCancelAllTriggerOrdersReq,
  FuturesCancelCrossAllOrdersReq,
  FuturesCancelCrossOrderReq,
  FuturesCancelCrossTpslOrderReq,
  FuturesCancelCrossTrailingOrderReq,
  FuturesCancelCrossTriggerOrderReq,
  FuturesCancelOrderReq,
  FuturesCancelTpslOrderReq,
  FuturesCancelTrailingOrderReq,
  FuturesCmDeliveryBasisDataReq,
  FuturesCmDeliveryCancelAllOrdersReq,
  FuturesCmDeliveryCancelAllTpslOrdersReq,
  FuturesCmDeliveryCancelAllTrailingOrdersReq,
  FuturesCmDeliveryCancelAllTriggerOrdersReq,
  FuturesCmDeliveryCancelOrderReq,
  FuturesCmDeliveryCancelTpslOrderReq,
  FuturesCmDeliveryCancelTrailingOrderReq,
  FuturesCmDeliveryCancelTriggerOrderReq,
  FuturesCmDeliveryContractInfoReq,
  FuturesCmDeliveryContractLimitReq,
  FuturesCmDeliveryContractOpenInterestReq,
  FuturesCmDeliveryFinancialRecordExactReq,
  FuturesCmDeliveryFinancialRecordReq,
  FuturesCmDeliveryGetFillsExactReq,
  FuturesCmDeliveryGetFillsReq,
  FuturesCmDeliveryGetHistoryOrdersExactReq,
  FuturesCmDeliveryGetHistoryOrdersReq,
  FuturesCmDeliveryGetOpenOrdersReq,
  FuturesCmDeliveryGetOrderDetailReq,
  FuturesCmDeliveryGetOrderInfoReq,
  FuturesCmDeliveryGetRelationTpslOrderReq,
  FuturesCmDeliveryGetTpslHistoryOrdersReq,
  FuturesCmDeliveryGetTpslOpenOrdersReq,
  FuturesCmDeliveryGetTrailingHistoryOrdersReq,
  FuturesCmDeliveryGetTrailingOpenOrdersReq,
  FuturesCmDeliveryGetTriggerHistoryOrdersReq,
  FuturesCmDeliveryGetTriggerOpenOrdersReq,
  FuturesCmDeliveryIndexKlinesReq,
  FuturesCmDeliveryKlinesReq,
  FuturesCmDeliveryLiquidationOrdersReq,
  FuturesCmDeliveryMarkPriceKlinesReq,
  FuturesCmDeliveryMasterSubTransferRecordReq,
  FuturesCmDeliveryMasterSubTransferReq,
  FuturesCmDeliveryOpenInterestReq,
  FuturesCmDeliveryOrderLimitReq,
  FuturesCmDeliveryRiskReserveHistoryReq,
  FuturesCmDeliverySettlementRecordsReq,
  FuturesCmDeliverySubAccountInfoListReq,
  FuturesCmDeliverySubAccountListReq,
  FuturesCmDeliverySubAuthListReq,
  FuturesCmDeliverySubmitBatchOrderReq,
  FuturesCmDeliverySubmitFlashCloseOrderReq,
  FuturesCmDeliverySubmitOrderReq,
  FuturesCmDeliverySubmitTpslOrderReq,
  FuturesCmDeliverySubmitTrailingOrderReq,
  FuturesCmDeliverySubmitTriggerOrderReq,
  FuturesCmDeliveryUpdateLeverageReq,
  FuturesCmDeliveryUserSettlementRecordsReq,
  FuturesCrossSubmitOrderReq,
  FuturesGetBasisDataReq,
  FuturesGetContractInfoReq,
  FuturesGetContractPriceLimitReq,
  FuturesGetCrossAdjustFactorReq,
  FuturesGetCrossAvailableLeverageReq,
  FuturesGetCrossHistoryOrdersExactReq,
  FuturesGetCrossHistoryOrdersReq,
  FuturesGetCrossLeverageLimitsReq,
  FuturesGetCrossMatchResultsExactReq,
  FuturesGetCrossMatchResultsReq,
  FuturesGetCrossOpenOrdersReq,
  FuturesGetCrossOrderDetailReq,
  FuturesGetCrossOrderInfoReq,
  FuturesGetCrossPositionLimitReq,
  FuturesGetCrossPositionsReq,
  FuturesGetCrossSubAccountsAssetsReq,
  FuturesGetCrossSubAccountsReq,
  FuturesGetCrossSubPositionsReq,
  FuturesGetCrossTieredMarginReq,
  FuturesGetCrossTpslHistoryOrdersReq,
  FuturesGetCrossTpslOpenOrdersReq,
  FuturesGetCrossTpSlOrderInfoReq,
  FuturesGetCrossTradeStateReq,
  FuturesGetCrossTrailingHistoryOrdersReq,
  FuturesGetCrossTrailingOpenOrdersReq,
  FuturesGetCrossTriggerOpenOrdersReq,
  FuturesGetCrossTriggerOrderHistoryReq,
  FuturesGetEstimatedSettlementPriceReq,
  FuturesGetFeeReq,
  FuturesGetFinancialRecordsExactReq,
  FuturesGetFinancialRecordsReq,
  FuturesGetFundingRateKlinesReq,
  FuturesGetHistoricalFundingRateReq,
  FuturesGetHistoricalOpenInterestReq,
  FuturesGetHistoryOrdersExactReq,
  FuturesGetHistoryOrdersReq,
  FuturesGetIsolatedSubAccountsReq,
  FuturesGetKlinesReq,
  FuturesGetLiquidationOrdersReq,
  FuturesGetMarkKlinesReq,
  FuturesGetMasterSubTransfersReq,
  FuturesGetMatchResultsExactReq,
  FuturesGetMatchResultsReq,
  FuturesGetOpenInterestReq,
  FuturesGetOpenOrdersReq,
  FuturesGetOrderDetailReq,
  FuturesGetOrderInfoReq,
  FuturesGetOrderLimitReq,
  FuturesGetPremiumIndexKlinesReq,
  FuturesGetRiskReserveHistoryReq,
  FuturesGetSettlementRecordsReq,
  FuturesGetSubAccountsAssetsReq,
  FuturesGetSubAuthListReq,
  FuturesGetTpslHistoryOrdersReq,
  FuturesGetTpslOpenOrdersReq,
  FuturesGetTrailingHistoryOrdersReq,
  FuturesGetTrailingOpenOrdersReq,
  FuturesGetTriggerOpenOrdersReq,
  FuturesGetTriggerOrderHistoryReq,
  FuturesGetUnifiedMarginAdjustmentsReq,
  FuturesSetCancelAfterReq,
  FuturesSubmitBatchOrderReq,
  FuturesSubmitCrossBatchOrderReq,
  FuturesSubmitCrossLightningCloseOrderReq,
  FuturesSubmitCrossTpslOrderReq,
  FuturesSubmitCrossTrailingOrderReq,
  FuturesSubmitCrossTriggerOrderReq,
  FuturesSubmitLightningCloseOrderReq,
  FuturesSubmitOrderReq,
  FuturesSubmitTpslOrderReq,
  FuturesSubmitTrailingOrderReq,
  FuturesSubmitTriggerOrderReq,
  FuturesTransferInnerReq,
  FuturesTransferMasterSubReq,
  FuturesUpdateCrossLeverageReq,
  FuturesUpdateUnifiedMarginReq,
  FuturesV5AdjustMarginReq,
  FuturesV5BillsReq,
  FuturesV5CancelAfterReq,
  FuturesV5CancelAllOrdersReq,
  FuturesV5CancelBatchOrdersReq,
  FuturesV5CancelOrderReq,
  FuturesV5ClosePositionReq,
  FuturesV5LeverListReq,
  FuturesV5MarketRiskLimitReq,
  FuturesV5OpenOrdersReq,
  FuturesV5OpenPositionsReq,
  FuturesV5OrderDetailsReq,
  FuturesV5OrderHistoryReq,
  FuturesV5OrderInfoReq,
  FuturesV5RiskLimitReq,
  FuturesV5RiskLimitTierReq,
  FuturesV5SetLeverageReq,
  FuturesV5SetPositionModeReq,
  FuturesV5SubmitOrderReq,
} from './types/request/futures.types.js';
import type {
  FuturesAdjustFactor,
  FuturesApiState,
  FuturesAvailableLevelRate,
  FuturesBalanceValuation,
  FuturesBasis,
  FuturesBatchOrder,
  FuturesBboTick,
  FuturesCancelAfter,
  FuturesCancelOrder,
  FuturesCmDeliveryAccountInfo,
  FuturesCmDeliveryAdjustFactor,
  FuturesCmDeliveryAllSubAccount,
  FuturesCmDeliveryApiState,
  FuturesCmDeliveryApiTradingStatus,
  FuturesCmDeliveryAssetPositionInfo,
  FuturesCmDeliveryAssetValuation,
  FuturesCmDeliveryBasisData,
  FuturesCmDeliveryConstituents,
  FuturesCmDeliveryContractInfo,
  FuturesCmDeliveryContractOpenInterest,
  FuturesCmDeliveryDeliveryPrice,
  FuturesCmDeliveryEliteAccountRatio,
  FuturesCmDeliveryElitePositionRatio,
  FuturesCmDeliveryEstimatedSettlementPrice,
  FuturesCmDeliveryFee,
  FuturesCmDeliveryFinancialRecord,
  FuturesCmDeliveryHistoryOrder,
  FuturesCmDeliveryIndex,
  FuturesCmDeliveryIndexKline,
  FuturesCmDeliveryInsuranceFund,
  FuturesCmDeliveryInsuranceFundHistory,
  FuturesCmDeliveryKline,
  FuturesCmDeliveryLadderMargin,
  FuturesCmDeliveryLastTrade,
  FuturesCmDeliveryLeverageRate,
  FuturesCmDeliveryLiquidationOrder,
  FuturesCmDeliveryMarketBbo,
  FuturesCmDeliveryMarketDepth,
  FuturesCmDeliveryMarkPriceKline,
  FuturesCmDeliveryMasterSubTransfer,
  FuturesCmDeliveryMasterSubTransfers,
  FuturesCmDeliveryMatchResult,
  FuturesCmDeliveryOpenInterest,
  FuturesCmDeliveryOpenOrder,
  FuturesCmDeliveryOpenOrders,
  FuturesCmDeliveryOrderDetail,
  FuturesCmDeliveryOrderInfo,
  FuturesCmDeliveryOrderLimit,
  FuturesCmDeliveryPositionInfo,
  FuturesCmDeliveryPositionLimit,
  FuturesCmDeliveryPriceLimit,
  FuturesCmDeliveryQueryElements,
  FuturesCmDeliveryRelationTpslOrder,
  FuturesCmDeliverySettlementRecords,
  FuturesCmDeliverySubAccountAssets,
  FuturesCmDeliverySubAccountsAssets,
  FuturesCmDeliverySubAuth,
  FuturesCmDeliverySubPermissions,
  FuturesCmDeliverySubPositionInfo,
  FuturesCmDeliverySwitchLeverRate,
  FuturesCmDeliveryTicker,
  FuturesCmDeliveryTpslHistoryOrder,
  FuturesCmDeliveryTpslHistoryOrders,
  FuturesCmDeliveryTpslOpenOrder,
  FuturesCmDeliveryTpslOpenOrders,
  FuturesCmDeliveryTpslOrder,
  FuturesCmDeliveryTradeHistory,
  FuturesCmDeliveryTrailingHistoryOrder,
  FuturesCmDeliveryTrailingHistoryOrders,
  FuturesCmDeliveryTrailingOpenOrder,
  FuturesCmDeliveryTrailingOpenOrders,
  FuturesCmDeliveryTransferLimit,
  FuturesCmDeliveryTriggerHistoryOrder,
  FuturesCmDeliveryTriggerHistoryOrders,
  FuturesCmDeliveryTriggerOpenOrder,
  FuturesCmDeliveryTriggerOpenOrders,
  FuturesCmDeliveryUserSettlementRecords,
  FuturesContractElements,
  FuturesContractInfo,
  FuturesCrossAccountInfo,
  FuturesCrossAccountPosition,
  FuturesCrossAvailableLevelRate,
  FuturesCrossLadderMargin,
  FuturesCrossLeverPositionLimit,
  FuturesCrossPositionLimit,
  FuturesCrossSubAccountInfo,
  FuturesCrossSubAccountInfoList,
  FuturesCrossSubAccountListEntry,
  FuturesCrossSwitchLeverRate,
  FuturesCrossTradeState,
  FuturesCrossTransferLimit,
  FuturesCrossTransferState,
  FuturesEliteRatio,
  FuturesEstimatedSettlementPrice,
  FuturesFee,
  FuturesFinancialRecord,
  FuturesFixPositionMarginChange,
  FuturesFixPositionMarginChangeRecord,
  FuturesFundingRate,
  FuturesHeartbeat,
  FuturesHistoricalFundingRatePage,
  FuturesHistoricalOpenInterest,
  FuturesHistoryOrder,
  FuturesIndexConstituents,
  FuturesIndexPrice,
  FuturesInsuranceFundHistory,
  FuturesInsuranceFundInfo,
  FuturesIsolatedAccountInfo,
  FuturesIsolatedAccountPosition,
  FuturesIsolatedSubAccountInfo,
  FuturesIsolatedSubAccountListEntry,
  FuturesKline,
  FuturesLastTradeTick,
  FuturesLeverPositionLimit,
  FuturesLinearSwapOverviewAccountInfo,
  FuturesLiquidationOrder,
  FuturesMarketDepthTick,
  FuturesMarketOverviewBatchTick,
  FuturesMarketOverviewTick,
  FuturesMarkPriceKline,
  FuturesMasterSubTransfer,
  FuturesMasterSubTransferRecord,
  FuturesMatchResult,
  FuturesOpenInterest,
  FuturesOpenOrders,
  FuturesOrderDetail,
  FuturesOrderInfo,
  FuturesOrderLimit,
  FuturesPositionInfo,
  FuturesPositionLimit,
  FuturesPositionSide,
  FuturesPriceLimit,
  FuturesRelationTpslOrder,
  FuturesSettlementRecordsPage,
  FuturesSubAccountInfoList,
  FuturesSubAuth,
  FuturesSubAuthList,
  FuturesSubmitOrder,
  FuturesSwitchLeverRate,
  FuturesSwitchPositionMode,
  FuturesTimestamp,
  FuturesTpslHisOrders,
  FuturesTpslOpenOrders,
  FuturesTpslOrder,
  FuturesTrackHisOrders,
  FuturesTrackOpenOrders,
  FuturesTradeHistoryGroup,
  FuturesTransferLimit,
  FuturesTriggerHisOrders,
  FuturesTriggerOpenOrders,
  FuturesUnifiedAccountInfo,
  FuturesV5AccountBalance,
  FuturesV5AssetMode,
  FuturesV5AssetModeGet,
  FuturesV5AssetsDeductionCurrencyResp,
  FuturesV5Bill,
  FuturesV5CancelAfterResp,
  FuturesV5ClosePositionResp,
  FuturesV5FeeDeductionCurrency,
  FuturesV5LeverListEntry,
  FuturesV5MarketRiskLimitEntry,
  FuturesV5MultiAssetsMarginResp,
  FuturesV5Order,
  FuturesV5OrderExecutionDetail,
  FuturesV5PlaceBatchOrderRespItem,
  FuturesV5PlaceOrderResp,
  FuturesV5Position,
  FuturesV5PositionModeResp,
  FuturesV5RiskLimitEntry,
  FuturesV5RiskLimitTierEntry,
  FuturesV5SetLeverageResp,
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
   * Reference
   *
   */

  /**
   * Account Type Query
   *
   * Query the current account type (unified vs non-unified). 1: non-unified (cross+isolated); 2: unified.
   * Signature required. Read permission.
   */
  getAccountType(): Promise<
    FuturesAPISuccessResponse<{
      /** 1: Non-unified account (cross-margin and isolated-margin account); 2: Unified account */
      account_type: 1 | 2;
    }>
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
  updateAccountType(params: { account_type: 1 | 2 }): Promise<
    FuturesAPISuccessResponse<{
      account_type: 1 | 2;
    }>
  > {
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
    contract_code: string;
  }): Promise<FuturesAPISuccessResponse<FuturesFundingRate>> {
    return this.get('/linear-swap-api/v1/swap_funding_rate', params);
  }

  /**
   * Query Batch Funding Rate
   *
   * Get funding rates for one or all contracts. Omit contract_code for all. No signature.
   * Rate limit: 240/3s per IP (shared with other public index/price endpoints).
   */
  getFundingRates(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesFundingRate[]>> {
    return this.get('/linear-swap-api/v1/swap_batch_funding_rate', params);
  }

  /**
   * Query Historical Funding Rate
   *
   * Get historical funding rates for a contract. Supports cross and isolated margin. No signature.
   * Rate limit: 240/3s per IP (shared with other public index/price endpoints).
   */
  getHistoricalFundingRate(
    params: FuturesGetHistoricalFundingRateReq,
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
    params: FuturesGetLiquidationOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesLiquidationOrder[]>> {
    return this.get('/linear-swap-api/v3/swap_liquidation_orders', params);
  }

  /**
   * Query Historical Settlement Records
   *
   * Get platform settlement records for a contract. Supports swap and future formats. No signature.
   * Rate limit: 240/3s per IP (shared with other public index/price endpoints).
   */
  getSettlementRecords(
    params: FuturesGetSettlementRecordsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSettlementRecordsPage>> {
    return this.get('/linear-swap-api/v1/swap_settlement_records', params);
  }

  /**
   * Query Top Trader Sentiment (Account Ratio)
   *
   * Net long/short accounts ratio. Supports cross and isolated margin. No signature.
   * Rate limit: 240/3s per IP (shared with other public index/price endpoints).
   */
  getNetAccountRatio(params: {
    contract_code: string;
    period: string;
  }): Promise<FuturesAPISuccessResponse<FuturesEliteRatio>> {
    return this.get('/linear-swap-api/v1/swap_elite_account_ratio', params);
  }

  /**
   * Query Top Trader Sentiment (Position Ratio)
   *
   * Net long/short position ratio. Supports cross and isolated margin. No signature.
   * Rate limit: 240/3s per IP (shared with other public index/price endpoints).
   */
  getNetPositionRatio(params: {
    contract_code: string;
    period: string;
  }): Promise<FuturesAPISuccessResponse<FuturesEliteRatio>> {
    return this.get('/linear-swap-api/v1/swap_elite_position_ratio', params);
  }

  /**
   * Query System Status (Isolated)
   *
   * Get open/close/cancel/transfer access per margin account. Isolated margin only. No signature.
   * Rate limit: 240/3s per IP (shared with other public index/price endpoints).
   */
  getSystemStatus(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesApiState[]>> {
    return this.get('/linear-swap-api/v1/swap_api_state', params);
  }

  /**
   * Query Tiered Margin (Cross)
   *
   * Get cross-margin tiered margin info. Cross margin only. No signature.
   * When querying futures contract, business_type must be futures or all.
   * Rate limit: 240/3s per IP (shared with other public index/price endpoints).
   */
  getCrossTieredMargin(
    params?: FuturesGetCrossTieredMarginReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCrossLadderMargin[]>> {
    return this.get('/linear-swap-api/v1/swap_cross_ladder_margin', params);
  }

  /**
   * Query Tiered Margin (Isolated)
   *
   * Get isolated-margin tiered margin info. Isolated margin only. No signature.
   * Rate limit: 240/3s per IP (shared with other public index/price endpoints).
   */
  getTieredMargin(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCrossLadderMargin[]>> {
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
    params?: FuturesGetEstimatedSettlementPriceReq,
  ): Promise<FuturesAPISuccessResponse<FuturesEstimatedSettlementPrice[]>> {
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
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesAdjustFactor[]>> {
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
    params?: FuturesGetCrossAdjustFactorReq,
  ): Promise<FuturesAPISuccessResponse<FuturesAdjustFactor[]>> {
    return this.get('/linear-swap-api/v1/swap_cross_adjustfactor', params);
  }

  /**
   * Query Risk Reserve Balance
   *
   * Total risk funds for all business lines, priced in USDT. No signature.
   * Rate limit: 144/3s per UID (shared with other read interfaces).
   */
  getRiskReserveBalance(): Promise<
    FuturesAPISuccessResponse<FuturesInsuranceFundInfo>
  > {
    return this.get('/v1/insurance_fund_info');
  }

  /**
   * Query Historical Risk Reserves
   *
   * Historical risk fund data by day. No signature.
   * Rate limit: 144/3s per UID (shared with other read interfaces).
   */
  getRiskReserveHistory(
    params?: FuturesGetRiskReserveHistoryReq,
  ): Promise<FuturesAPISuccessResponse<FuturesInsuranceFundHistory[]>> {
    return this.get('/v1/insurance_fund_history', params);
  }

  /**
   * Query Price Limitation
   *
   * Get highest buying and lowest selling price per contract. Supports cross and isolated margin. No signature.
   * business_type required for futures. Rate limit: 240/3s per IP.
   */
  getContractPriceLimit(
    params?: FuturesGetContractPriceLimitReq,
  ): Promise<FuturesAPISuccessResponse<FuturesPriceLimit[]>> {
    return this.get('/linear-swap-api/v1/swap_price_limit', params);
  }

  /**
   * Get Open Interest
   *
   * Position quantity and 24h trading volume per contract. Supports cross and isolated margin. No signature.
   * business_type required for futures. Rate limit: 240/3s per IP.
   */
  getOpenInterest(
    params?: FuturesGetOpenInterestReq,
  ): Promise<FuturesAPISuccessResponse<FuturesOpenInterest[]>> {
    return this.get('/linear-swap-api/v1/swap_open_interest', params);
  }

  /**
   * Query Contract Info
   *
   * Contract metadata (size, tick, dates, status). support_margin_mode filters by cross/isolated/all. No signature.
   * When isolated, contract_type/business_type cannot be futures. Rate limit: 240/3s per IP.
   */
  getContractInfo(
    params?: FuturesGetContractInfoReq,
  ): Promise<FuturesAPISuccessResponse<FuturesContractInfo[]>> {
    return this.get('/linear-swap-api/v1/swap_contract_info', params);
  }

  /**
   * Query Index Price
   *
   * Get index price and timestamp per contract. Supports cross and isolated margin. No signature.
   * Rate limit: 240/3s per IP.
   */
  getIndexPrice(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesIndexPrice[]>> {
    return this.get('/linear-swap-api/v1/swap_index', params);
  }

  /**
   * Get Index Constituents
   *
   * Index component info (exchange weights, symbol prices). No signature.
   * Rate limit: 144/3s per UID.
   */
  getIndexConstituents(params: {
    contract_code: string;
  }): Promise<FuturesAPISuccessResponse<FuturesIndexConstituents>> {
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
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesContractElements[]>> {
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
    contract_code: string;
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
    contract_code?: string;
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
    params: FuturesGetKlinesReq,
  ): Promise<FuturesAPISuccessResponse<FuturesKline[]>> {
    return this.get('/linear-swap-ex/market/history/kline', params);
  }

  /**
   * Get Mark Price Kline
   *
   * Mark price candlestick data. No signature. Rate limit: 800/s per IP.
   */
  getMarkKlines(
    params: FuturesGetMarkKlinesReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMarkPriceKline[]>> {
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
    contract_code?: string;
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
    contract_code?: string;
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
    contract_code: string;
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
    params: FuturesGetHistoricalOpenInterestReq,
  ): Promise<FuturesAPISuccessResponse<FuturesHistoricalOpenInterest>> {
    return this.get('/linear-swap-api/v1/swap_his_open_interest', params);
  }

  /**
   * Get Premium Index Kline
   *
   * Premium index candlestick data. No signature. Rate limit: 800/s per IP.
   */
  getPremiumIndexKlines(
    params: FuturesGetPremiumIndexKlinesReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMarkPriceKline[]>> {
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
  getFundingRateKlines(
    params: FuturesGetFundingRateKlinesReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMarkPriceKline[]>> {
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
    params: FuturesGetBasisDataReq,
  ): Promise<FuturesAPISuccessResponse<FuturesBasis[]>> {
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
  getAssetValuation(params?: {
    valuation_asset?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesBalanceValuation[]>> {
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
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesIsolatedAccountInfo[]>> {
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
    margin_account?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCrossAccountInfo[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_account_info', {
      body: params ?? {},
    });
  }

  /**
   * Query Position Info (Isolated)
   *
   * User's isolated margin positions. Signature required. Rate limit: 144/3s per UID.
   */
  getIsolatedPositions(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesPositionInfo[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_position_info', {
      body: params ?? {},
    });
  }

  /**
   * Query Position Info (Cross)
   *
   * User's cross margin positions. contract_code preferred when all filled. Signature required. Rate limit: 144/3s per UID.
   */
  getCrossPositions(
    params?: FuturesGetCrossPositionsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesPositionInfo[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_position_info', {
      body: params ?? {},
    });
  }

  /**
   * Query Assets And Positions (Isolated)
   *
   * Combined account + positions for isolated margin. Signature required. Rate limit: 144/3s per UID.
   */
  getIsolatedAccountFull(params: {
    contract_code: string;
  }): Promise<FuturesAPISuccessResponse<FuturesIsolatedAccountPosition[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_account_position_info', {
      body: params,
    });
  }

  /**
   * Query Assets And Positions (Cross)
   *
   * Combined account + positions for cross margin. Signature required. Rate limit: 144/3s per UID.
   */
  getCrossAccountFull(params: {
    margin_account: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCrossAccountPosition>> {
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
  updateSubAuth(params: {
    sub_uid: string;
    sub_auth: 0 | 1;
  }): Promise<FuturesAPISuccessResponse<FuturesSubAuth>> {
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
    params?: FuturesGetSubAuthListReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSubAuthList>> {
    return this.getPrivate('/linear-swap-api/v1/swap_sub_auth_list', params);
  }

  /**
   * Query Assets of All Sub-Accounts (Isolated)
   *
   * Assets info of all sub-accounts under master. Isolated margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getIsolatedSubAccounts(
    params?: FuturesGetIsolatedSubAccountsReq,
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
  getCrossSubAccounts(
    params?: FuturesGetCrossSubAccountsReq,
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
  getSubAccountsAssets(
    params?: FuturesGetSubAccountsAssetsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSubAccountInfoList>> {
    return this.postPrivate('/linear-swap-api/v1/swap_sub_account_info_list', {
      body: params ?? {},
    });
  }

  /**
   * Query Batch of Sub-Account Assets (Cross)
   *
   * Batch query sub-account assets with pagination. Cross margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getCrossSubAccountsAssets(
    params?: FuturesGetCrossSubAccountsAssetsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCrossSubAccountInfoList>> {
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
  getIsolatedSubAccountAssets(params: {
    contract_code?: string;
    sub_uid: number;
  }): Promise<FuturesAPISuccessResponse<FuturesIsolatedSubAccountInfo[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_sub_account_info', {
      body: params,
    });
  }

  /**
   * Query Single Sub-Account Assets (Cross)
   *
   * Assets info for one sub-account. Cross margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getCrossSubAccountAssets(params: {
    sub_uid: number;
    margin_account?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCrossSubAccountInfo[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_sub_account_info', {
      body: params,
    });
  }

  /**
   * Query Single Sub-Account Positions (Isolated)
   *
   * Position info for one sub-account. Isolated margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getIsolatedSubPositions(params: {
    contract_code?: string;
    sub_uid: number;
  }): Promise<FuturesAPISuccessResponse<FuturesPositionInfo[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_sub_position_info', {
      body: params,
    });
  }

  /**
   * Query Single Sub-Account Positions (Cross)
   *
   * Position info for one sub-account. Cross margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getCrossSubPositions(
    params: FuturesGetCrossSubPositionsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesPositionInfo[]>> {
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
    params: FuturesGetFinancialRecordsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesFinancialRecord[]>> {
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
    params: FuturesGetFinancialRecordsExactReq,
  ): Promise<FuturesAPISuccessResponse<FuturesFinancialRecord[]>> {
    return this.postPrivate('/linear-swap-api/v3/swap_financial_record_exact', {
      body: params,
    });
  }

  /**
   * Query Available Leverage (Isolated)
   *
   * User's available leverage per contract. Isolated margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getAvailableLeverage(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesAvailableLevelRate[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_available_level_rate', {
      body: params ?? {},
    });
  }

  /**
   * Query Available Leverage (Cross)
   *
   * User's available leverage per contract. Cross margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getCrossAvailableLeverage(
    params?: FuturesGetCrossAvailableLeverageReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCrossAvailableLevelRate[]>> {
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
    params: FuturesGetOrderLimitReq,
  ): Promise<FuturesAPISuccessResponse<FuturesOrderLimit>> {
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
    params?: FuturesGetFeeReq,
  ): Promise<FuturesAPISuccessResponse<FuturesFee[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_fee', {
      body: params ?? {},
    });
  }

  /**
   * Query Transfer Limit (Isolated)
   *
   * Transfer in/out limits per margin account. Isolated margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getTransferLimit(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesTransferLimit[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_transfer_limit', {
      body: params ?? {},
    });
  }

  /**
   * Query Transfer Limit (Cross)
   *
   * Transfer in/out limits per margin account. Cross margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getCrossTransferLimit(params?: {
    margin_account?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCrossTransferLimit[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_transfer_limit', {
      body: params ?? {},
    });
  }

  /**
   * Query Position Limit (Isolated)
   *
   * Max long/short position limits per contract. Isolated margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getPositionLimit(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesPositionLimit[]>> {
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
    params?: FuturesGetCrossPositionLimitReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCrossPositionLimit[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_position_limit', {
      body: params ?? {},
    });
  }

  /**
   * Query Position Limit for All Leverages (Isolated)
   *
   * Position limits per leverage per contract. Isolated margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getLeverageLimits(params?: {
    contract_code?: string;
    lever_rate?: number;
  }): Promise<FuturesAPISuccessResponse<FuturesLeverPositionLimit[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_lever_position_limit', {
      body: params ?? {},
    });
  }

  /**
   * Query Position Limit for All Leverages (Cross)
   *
   * Position limits per leverage per contract. Cross margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getCrossLeverageLimits(
    params?: FuturesGetCrossLeverageLimitsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCrossLeverPositionLimit[]>> {
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
  transferMasterSub(
    params: FuturesTransferMasterSubReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMasterSubTransfer>> {
    return this.postPrivate('/linear-swap-api/v1/swap_master_sub_transfer', {
      body: params,
    });
  }

  /**
   * Query Master-Sub Transfer Records
   *
   * Transfer history between master and sub accounts. Supports cross and isolated. Signature required. Rate limit: 144/3s per UID.
   */
  getMasterSubTransfers(
    params: FuturesGetMasterSubTransfersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMasterSubTransferRecord>> {
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
  ): Promise<FuturesAPISuccessResponse<FuturesMasterSubTransfer>> {
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
    params: FuturesSetCancelAfterReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelAfter>> {
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
    params?: FuturesGetCrossTradeStateReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCrossTradeState[]>> {
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
  getCrossTransferState(params?: {
    margin_account?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCrossTransferState[]>> {
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
  updatePositionMode(params: {
    margin_account: string;
    position_mode: 'single_side' | 'dual_side';
  }): Promise<FuturesAPISuccessResponse<FuturesSwitchPositionMode[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_switch_position_mode', {
      body: params,
    });
  }

  /**
   * Switch Position Mode (Cross)
   *
   * Set single_side or dual_side for cross margin account. Trade permission. Rate limit: 144/3s per UID.
   */
  updateCrossPositionMode(params: {
    margin_account: string;
    position_mode: 'single_side' | 'dual_side';
  }): Promise<FuturesAPISuccessResponse<FuturesSwitchPositionMode[]>> {
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
  submitOrder(
    params: FuturesSubmitOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSubmitOrder>> {
    return this.postPrivate('/linear-swap-api/v1/swap_order', {
      body: params,
    });
  }

  /**
   * Place Order (Cross)
   *
   * Place a single order. Cross margin only. One of contract_code or (pair+contract_type) required. Trade permission. Rate limit: 144/3s per UID.
   */
  submitCrossOrder(
    params: FuturesCrossSubmitOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSubmitOrder>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_order', {
      body: params,
    });
  }

  /**
   * Place Batch Orders (Isolated)
   *
   * Place up to 10 orders. Isolated margin only. Trade permission. Rate limit: 144/3s per UID.
   */
  submitBatchOrder(
    params: FuturesSubmitBatchOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesBatchOrder>> {
    return this.postPrivate('/linear-swap-api/v1/swap_batchorder', {
      body: params,
    });
  }

  /**
   * Place Batch Orders (Cross)
   *
   * Place up to 25 orders. Cross margin only. Trade permission. Rate limit: 144/3s per UID.
   */
  submitCrossBatchOrder(
    params: FuturesSubmitCrossBatchOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesBatchOrder>> {
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
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
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
    params: FuturesCancelCrossOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
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
    params: FuturesCancelAllOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
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
    params: FuturesCancelCrossAllOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_cancelall', {
      body: params,
    });
  }

  /**
   * Switch Leverage (Isolated)
   *
   * Set leverage for isolated margin contract. Requires no open orders. Trade permission. Rate limit: 1 per 3s.
   */
  updateLeverage(params: {
    contract_code: string;
    lever_rate: number;
  }): Promise<FuturesAPISuccessResponse<FuturesSwitchLeverRate>> {
    return this.postPrivate('/linear-swap-api/v1/swap_switch_lever_rate', {
      body: params,
    });
  }

  /**
   * Switch Leverage (Cross)
   *
   * Set leverage for cross margin contract. Requires no open orders. Trade permission. Rate limit: 1 per 3s.
   */
  updateCrossLeverage(
    params: FuturesUpdateCrossLeverageReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCrossSwitchLeverRate>> {
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
    params: FuturesGetOrderInfoReq,
  ): Promise<FuturesAPISuccessResponse<FuturesOrderInfo[]>> {
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
    params: FuturesGetCrossOrderInfoReq,
  ): Promise<FuturesAPISuccessResponse<FuturesOrderInfo[]>> {
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
    params: FuturesGetOrderDetailReq,
  ): Promise<FuturesAPISuccessResponse<FuturesOrderDetail>> {
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
    params: FuturesGetCrossOrderDetailReq,
  ): Promise<FuturesAPISuccessResponse<FuturesOrderDetail>> {
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
    params?: FuturesGetOpenOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesOpenOrders>> {
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
    params?: FuturesGetCrossOpenOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesOpenOrders>> {
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
    params: FuturesGetHistoryOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesHistoryOrder[]>> {
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
    params: FuturesGetCrossHistoryOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesHistoryOrder[]>> {
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
    params: FuturesGetHistoryOrdersExactReq,
  ): Promise<FuturesAPISuccessResponse<FuturesHistoryOrder[]>> {
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
    params: FuturesGetCrossHistoryOrdersExactReq,
  ): Promise<FuturesAPISuccessResponse<FuturesHistoryOrder[]>> {
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
    params: FuturesGetMatchResultsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMatchResult[]>> {
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
    params: FuturesGetCrossMatchResultsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMatchResult[]>> {
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
    params: FuturesGetMatchResultsExactReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMatchResult[]>> {
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
    params: FuturesGetCrossMatchResultsExactReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMatchResult[]>> {
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
  submitLightningCloseOrder(
    params: FuturesSubmitLightningCloseOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSubmitOrder>> {
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
  submitCrossLightningCloseOrder(
    params: FuturesSubmitCrossLightningCloseOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSubmitOrder>> {
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
  getPositionMode(params: {
    margin_account: string;
  }): Promise<FuturesAPISuccessResponse<FuturesPositionSide[]>> {
    return this.getPrivate('/linear-swap-api/v1/swap_position_side', params);
  }

  /**
   * Query Position Mode (Cross)
   *
   * Returns position mode (single_side/dual_side) per margin account. Cross. Read permission. Rate limit: 144/3s per UID.
   */
  getCrossPositionMode(params: {
    margin_account: string;
  }): Promise<FuturesAPISuccessResponse<FuturesPositionSide[]>> {
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
  submitTriggerOrder(
    params: FuturesSubmitTriggerOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSubmitOrder>> {
    return this.postPrivate('/linear-swap-api/v1/swap_trigger_order', {
      body: params,
    });
  }

  /**
   * [Cross] Place Trigger Order
   *
   * Cross margin only. One of (pair+contract_type) or contract_code required; contract_code preferred when all filled. Trade permission. Rate limit: 5/s.
   */
  submitCrossTriggerOrder(
    params: FuturesSubmitCrossTriggerOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSubmitOrder>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_trigger_order', {
      body: params,
    });
  }

  /**
   * [Isolated] Cancel Trigger Order
   *
   * Isolated margin only. Trade permission. Rate limit: 5/s.
   */
  cancelTriggerOrder(params: {
    contract_code: string;
    order_id: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
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
    params: FuturesCancelCrossTriggerOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
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
    params: FuturesCancelAllTriggerOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
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
    params: FuturesCancelAllCrossTriggerOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
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
    params: FuturesGetTriggerOpenOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTriggerOpenOrders>> {
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
    params: FuturesGetCrossTriggerOpenOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTriggerOpenOrders>> {
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
  getTriggerOrderHistory(
    params: FuturesGetTriggerOrderHistoryReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTriggerHisOrders>> {
    return this.postPrivate('/linear-swap-api/v1/swap_trigger_hisorders', {
      body: params,
    });
  }

  /**
   * [Cross] Query Trigger Order History
   *
   * Cross margin only. One of pair or contract_code required; contract_code preferred when both filled. Read permission.
   */
  getCrossTriggerOrderHistory(
    params: FuturesGetCrossTriggerOrderHistoryReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTriggerHisOrders>> {
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
  submitTpslOrder(
    params: FuturesSubmitTpslOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTpslOrder>> {
    return this.postPrivate('/linear-swap-api/v1/swap_tpsl_order', {
      body: params,
    });
  }

  /**
   * [Cross] Set Take-profit and Stop-loss Order for an Existing Position
   *
   * Cross margin only. One of (pair+contract_type) or contract_code required; contract_code preferred when all filled. At least one of tp_trigger_price and sl_trigger_price required. Trade permission. Rate limit: 5/s.
   */
  submitCrossTpslOrder(
    params: FuturesSubmitCrossTpslOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTpslOrder>> {
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
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
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
    params: FuturesCancelCrossTpslOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
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
    params: FuturesCancelAllTpslOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
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
    params: FuturesCancelAllCrossTpslOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
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
    params: FuturesGetTpslOpenOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTpslOpenOrders>> {
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
    params: FuturesGetCrossTpslOpenOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTpslOpenOrders>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_tpsl_openorders', {
      body: params,
    });
  }

  /**
   * [Isolated] Query Take-profit and Stop-loss History Orders
   *
   * Isolated margin only. Read permission.
   */
  getTpslHistoryOrders(
    params: FuturesGetTpslHistoryOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTpslHisOrders>> {
    return this.postPrivate('/linear-swap-api/v1/swap_tpsl_hisorders', {
      body: params,
    });
  }

  /**
   * [Cross] Query Take-profit and Stop-loss History Orders
   *
   * Cross margin only. One of pair or contract_code required; contract_code preferred when both filled. Read permission.
   */
  getCrossTpslHistoryOrders(
    params: FuturesGetCrossTpslHistoryOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTpslHisOrders>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_tpsl_hisorders', {
      body: params,
    });
  }

  /**
   * [Isolated] Query Info Of Take-profit and Stop-loss Order That Related To Position Opening Order
   *
   * Isolated margin only. Read permission.
   */
  getTpSlOrderInfo(params: {
    contract_code: string;
    order_id: number | string;
  }): Promise<FuturesAPISuccessResponse<FuturesRelationTpslOrder>> {
    return this.postPrivate('/linear-swap-api/v1/swap_relation_tpsl_order', {
      body: params,
    });
  }

  /**
   * [Cross] Query Info Of Take-profit and Stop-loss Order That Related To Position Opening Order
   *
   * Cross margin only. One of pair or contract_code required; contract_code preferred when both filled. Read permission.
   */
  getCrossTpSlOrderInfo(
    params: FuturesGetCrossTpSlOrderInfoReq,
  ): Promise<FuturesAPISuccessResponse<FuturesRelationTpslOrder>> {
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
  submitTrailingOrder(
    params: FuturesSubmitTrailingOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSubmitOrder>> {
    return this.postPrivate('/linear-swap-api/v1/swap_track_order', {
      body: params,
    });
  }

  /**
   * [Cross] Place a Trailing Order
   *
   * Cross margin only. One of (pair+contract_type) or contract_code required; contract_code preferred when all filled. Trade permission. Rate limit: 5/s.
   */
  submitCrossTrailingOrder(
    params: FuturesSubmitCrossTrailingOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSubmitOrder>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_track_order', {
      body: params,
    });
  }

  /**
   * [Isolated] Cancel a Trailing Order
   *
   * Isolated margin only. Trade permission. Rate limit: 5/s.
   */
  cancelTrailingOrder(
    params: FuturesCancelTrailingOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
    return this.postPrivate('/linear-swap-api/v1/swap_track_cancel', {
      body: params,
    });
  }

  /**
   * [Cross] Cancel a Trailing Order
   *
   * Cross margin only. One of (pair+contract_type) or contract_code required; contract_code preferred when all filled. Trade permission. Rate limit: 5/s.
   */
  cancelCrossTrailingOrder(
    params: FuturesCancelCrossTrailingOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_track_cancel', {
      body: params,
    });
  }

  /**
   * [Isolated] Cancel All Trailing Orders
   *
   * Isolated margin only. Can fill only one of direction and offset to filter. Trade permission. Rate limit: 5/s.
   */
  cancelAllTrailingOrders(
    params: FuturesCancelAllTrailingOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
    return this.postPrivate('/linear-swap-api/v1/swap_track_cancelall', {
      body: params,
    });
  }

  /**
   * [Cross] Cancel All Trailing Orders
   *
   * Cross margin only. One of (pair+contract_type) or contract_code required; contract_code preferred when all filled. Can fill only one of direction and offset to filter. Trade permission. Rate limit: 5/s.
   */
  cancelAllCrossTrailingOrders(
    params: FuturesCancelAllCrossTrailingOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_track_cancelall', {
      body: params,
    });
  }

  /**
   * [Isolated] Current unfilled trailing order acquisition
   *
   * Isolated margin only. Read permission.
   */
  getTrailingOpenOrders(
    params: FuturesGetTrailingOpenOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTrackOpenOrders>> {
    return this.postPrivate('/linear-swap-api/v1/swap_track_openorders', {
      body: params,
    });
  }

  /**
   * [Cross] Current unfilled trailing order acquisition
   *
   * Cross margin only. When both filled, contract_code preferred; when none, all open orders. Read permission.
   */
  getCrossTrailingOpenOrders(
    params: FuturesGetCrossTrailingOpenOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTrackOpenOrders>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_track_openorders', {
      body: params,
    });
  }

  /**
   * [Isolated] Get History Trailing Orders
   *
   * Isolated margin only. Read permission.
   */
  getTrailingHistoryOrders(
    params: FuturesGetTrailingHistoryOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTrackHisOrders>> {
    return this.postPrivate('/linear-swap-api/v1/swap_track_hisorders', {
      body: params,
    });
  }

  /**
   * [Cross] Get History Trailing Orders
   *
   * Cross margin only. One of pair or contract_code required; contract_code preferred when both filled. Read permission.
   */
  getCrossTrailingHistoryOrders(
    params: FuturesGetCrossTrailingHistoryOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTrackHisOrders>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_track_hisorders', {
      body: params,
    });
  }

  /**
   * Unified Account
   */

  /**
   * Query unified account assets
   *
   * Total assets of USDT-M unified account. Non-unified accounts still use cross/isolated separately. Read permission.
   */
  getUnifiedAccountInfo(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesUnifiedAccountInfo[]>> {
    return this.getPrivate('/linear-swap-api/v3/unified_account_info', params);
  }

  /**
   * Deductible asset inquiry (linear swap overview account info)
   *
   * Total account assets of U-margin contract unified account. Read permission.
   */
  getUnifiedLinearAssets(params?: {
    trade_partition?: string;
  }): Promise<
    FuturesAPISuccessResponse<FuturesLinearSwapOverviewAccountInfo[]>
  > {
    return this.getPrivate(
      '/linear-swap-api/v3/linear_swap_overview_account_info',
      params,
    );
  }

  /**
   * Set the U-standard contract fee deduction method
   *
   * When set currency balance is insufficient, other currencies (e.g. USDT) offset. Only one currency in deduction_currency. Trade permission.
   */
  updateUnifiedFeeMethod(params: {
    fee_option: 0 | 1;
    deduction_currency: string;
  }): Promise<FuturesAPISuccessResponse<Record<string, never>>> {
    return this.postPrivate('/linear-swap-api/v3/linear_swap_fee_switch', {
      body: params,
    });
  }

  /**
   * Query the margin adjustment records of isolated positions
   *
   * Margin increase/decrease records. Read permission.
   */
  getUnifiedMarginAdjustments(
    params: FuturesGetUnifiedMarginAdjustmentsReq,
  ): Promise<
    FuturesAPISuccessResponse<FuturesFixPositionMarginChangeRecord[]>
  > {
    return this.getPrivate(
      '/linear-swap-api/v3/fix_position_margin_change_record',
      params,
    );
  }

  /**
   * Adjust margin for isolated positions
   *
   * Increase or decrease isolated margin. Query margin_available (increase) and withdraw_available (reduce) via getUnifiedAccountInfo. Trade permission.
   */
  updateUnifiedMargin(
    params: FuturesUpdateUnifiedMarginReq,
  ): Promise<FuturesAPISuccessResponse<FuturesFixPositionMarginChange>> {
    return this.postPrivate('/linear-swap-api/v3/fix_position_margin_change', {
      body: params,
    });
  }

  /**
   *
   * USDT Margined Futures Multi Asset - Account (v5 API)
   *
   */

  /**
   * Get Account Balance
   *
   * Get information about your Futures account. Applicable to multi-assets collateral mode.
   * Signature required. Read permission. Rate limit: 144/3s per UID (shared by all altcoins contracts).
   */
  getMultiAssetAccountBalance(): Promise<
    FuturesAPISuccessResponse<FuturesV5AccountBalance>
  > {
    return this.getPrivate('/v5/account/balance');
  }

  /**
   * Get Asset Mode
   *
   * Query the current asset mode (single vs multi-assets collateral).
   * Signature required. Read permission. Rate limit: 144/3s per UID.
   */
  getMultiAssetMode(): Promise<
    FuturesAPISuccessResponse<FuturesV5AssetModeGet>
  > {
    return this.getPrivate('/v5/account/asset_mode');
  }

  /**
   * Set Asset Mode
   *
   * Set the current asset mode (single vs multi-assets collateral).
   * Signature required. Trade permission. Rate limit: 1 req/10s per UID.
   */
  updateMultiAssetMode(params: {
    assets_mode: 0 | 1;
  }): Promise<FuturesAPISuccessResponse<FuturesV5AssetMode>> {
    return this.postPrivate('/v5/account/asset_mode', { body: params });
  }

  /**
   * Set Fee Deduction Crypto
   *
   * Set the cryptocurrency for deducting trading fees (e.g. HTX, TRX).
   * Signature required. Trade permission. Rate limit: 144/3s per UID.
   */
  updateMultiAssetFeeCurrency(params: {
    fee_option: 0 | 1;
    deduction_currency: string;
  }): Promise<FuturesAPISuccessResponse<FuturesV5FeeDeductionCurrency>> {
    return this.postPrivate('/v5/account/fee_deduction_currency', {
      body: params,
    });
  }

  /**
   * Get Fee Deduction Crypto
   *
   * Query whether fee deduction is enabled and the deduction currency.
   * Signature required. Read permission. Rate limit: 144/3s per UID.
   */
  getMultiAssetFeeCurrency(): Promise<
    FuturesAPISuccessResponse<FuturesV5FeeDeductionCurrency>
  > {
    return this.getPrivate('/v5/account/fee_deduction_currency');
  }

  /**
   * Query Financial Records
   *
   * Query financial records (bills) with optional filters.
   * Signature required. Read permission. Rate limit: 144/3s per UID.
   */
  getMultiAssetBills(
    params?: FuturesV5BillsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesV5Bill[]>> {
    return this.getPrivate('/v5/account/bills', params);
  }

  /**
   *
   * USDT Margined Futures Multi Asset - Orders (v5 API)
   *
   */

  /**
   * Place Order
   *
   * Place an order in futures trading.
   * Signature required. Trade permission. Rate limit: 144/3s per UID.
   */
  submitMultiAssetOrder(
    params: FuturesV5SubmitOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesV5PlaceOrderResp>> {
    return this.postPrivate('/v5/trade/order', { body: params });
  }

  /**
   * Place Multiple Orders
   *
   * Place bulk orders in futures trading.
   * Signature required. Trade permission. Rate limit: 144/3s per UID.
   */
  submitMultiAssetBatchOrders(
    orders: FuturesV5SubmitOrderReq[],
  ): Promise<FuturesAPISuccessResponse<FuturesV5PlaceBatchOrderRespItem[]>> {
    return this.postPrivate('/v5/trade/batch_orders', { body: orders });
  }

  /**
   * Cancel Order
   *
   * Cancel an order in futures trading.
   * Signature required. Trade permission. Rate limit: 144/3s per UID.
   */
  cancelMultiAssetOrder(
    params: FuturesV5CancelOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesV5PlaceOrderResp>> {
    return this.postPrivate('/v5/trade/cancel_order', { body: params });
  }

  /**
   * Cancel Multiple Orders
   *
   * Cancel orders in a batch. Max 10 orders per request.
   * Signature required. Trade permission. Rate limit: 144/3s per UID.
   */
  cancelMultiAssetBatchOrders(
    params: FuturesV5CancelBatchOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesV5PlaceBatchOrderRespItem[]>> {
    return this.postPrivate('/v5/trade/cancel_batch_orders', { body: params });
  }

  /**
   * Cancel All Orders
   *
   * Cancel all open orders. Optional filters by contract, side, position_side.
   * Signature required. Trade permission. Rate limit: 144/3s per UID.
   */
  cancelMultiAssetAllOrders(
    params?: FuturesV5CancelAllOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesV5PlaceBatchOrderRespItem[]>> {
    return this.postPrivate('/v5/trade/cancel_all_orders', {
      body: params ?? {},
    });
  }

  /**
   * Close All of a Symbol at Market Price
   *
   * Sell designated positions at market price.
   * Signature required. Trade permission. Rate limit: 144/3s per UID.
   */
  closeMultiAssetPosition(
    params: FuturesV5ClosePositionReq,
  ): Promise<FuturesAPISuccessResponse<FuturesV5ClosePositionResp>> {
    return this.postPrivate('/v5/trade/position', { body: params });
  }

  /**
   * Close All at Market Price
   *
   * Sell all positions at market price.
   * Signature required. Trade permission. Rate limit: 144/3s per UID.
   */
  closeMultiAssetAllPositions(): Promise<
    FuturesAPISuccessResponse<FuturesV5PlaceBatchOrderRespItem[]>
  > {
    return this.postPrivate('/v5/trade/position_all', { body: {} });
  }

  /**
   * Get Current Orders
   *
   * Get unfilled futures orders. Omit params for all open orders.
   * Signature required. Read permission. Rate limit: 144/3s per UID.
   */
  getMultiAssetOpenOrders(
    params?: FuturesV5OpenOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesV5Order[]>> {
    return this.getPrivate('/v5/trade/order/opens', params);
  }

  /**
   * Get Execution Details (last 3 days)
   *
   * Get detailed info about executed orders in the last 3 days.
   * Either order_id or client_order_id recommended. Signature required. Read permission.
   */
  getMultiAssetFills(
    params?: FuturesV5OrderDetailsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesV5OrderExecutionDetail[]>> {
    return this.getPrivate('/v5/trade/order/details', params);
  }

  /**
   * Get Order History
   *
   * Get previous futures orders. contract_code and margin_mode required.
   * Signature required. Read permission. Rate limit: 144/3s per UID.
   */
  getMultiAssetOrderHistory(
    params: FuturesV5OrderHistoryReq,
  ): Promise<FuturesAPISuccessResponse<FuturesV5Order[]>> {
    return this.getPrivate('/v5/trade/order/history', params);
  }

  /**
   * Get Order Info
   *
   * Get information about a specific order. contract_code required; one of order_id or client_order_id required.
   * Signature required. Read permission. Rate limit: 144/3s per UID.
   */
  getMultiAssetOrderInfo(
    params: FuturesV5OrderInfoReq,
  ): Promise<FuturesAPISuccessResponse<FuturesV5Order>> {
    return this.getPrivate('/v5/trade/order', params);
  }

  /**
   * Automatic Order Cancellation (Dead Man's Switch)
   *
   * Enable/disable auto-cancel of all pending orders when heartbeat stops.
   * time_out >= 5000 ms; default 5000. Signature required. Trade permission.
   */
  setMultiAssetCancelAfter(
    params: FuturesV5CancelAfterReq,
  ): Promise<FuturesAPISuccessResponse<FuturesV5CancelAfterResp>> {
    return this.postPrivate('/v5/trade/cancel-after', { body: params });
  }

  /**
   *
   * USDT Margined Futures Multi Asset - Positions (v5 API)
   *
   */

  /**
   * Get Current Position
   *
   * Get information about your current positions.
   * Signature required. Read permission. Rate limit: 144/3s per UID.
   */
  getMultiAssetPositions(
    params?: FuturesV5OpenPositionsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesV5Position[]>> {
    return this.getPrivate('/v5/trade/position/opens', params);
  }

  /**
   * Get Leverage List
   *
   * Get the list of available leverage for a contract.
   * Signature required. Read permission. Rate limit: 144/3s per UID.
   */
  getMultiAssetLeverage(
    params?: FuturesV5LeverListReq,
  ): Promise<FuturesAPISuccessResponse<FuturesV5LeverListEntry[]>> {
    return this.getPrivate('/v5/position/lever', params);
  }

  /**
   * Set Leverage
   *
   * Set leverage for a contract. position_side required when isolated in two-way mode.
   * Signature required. Trade permission. Rate limit: 144/3s per UID.
   */
  updateMultiAssetLeverage(
    params: FuturesV5SetLeverageReq,
  ): Promise<FuturesAPISuccessResponse<FuturesV5SetLeverageResp>> {
    return this.postPrivate('/v5/position/lever', { body: params });
  }

  /**
   * Get Position Mode
   *
   * Get the current position mode (one-way vs hedge).
   * Signature required. Read permission. Rate limit: 144/3s per UID.
   */
  getMultiAssetPositionMode(): Promise<
    FuturesAPISuccessResponse<FuturesV5PositionModeResp>
  > {
    return this.getPrivate('/v5/position/mode');
  }

  /**
   * Set Position Mode
   *
   * Switch between one-way (single_side) and hedge (dual_side) mode.
   * Signature required. Trade permission. Rate limit: 144/3s per UID.
   */
  updateMultiAssetPositionMode(
    params: FuturesV5SetPositionModeReq,
  ): Promise<FuturesAPISuccessResponse<FuturesV5PositionModeResp>> {
    return this.postPrivate('/v5/position/mode', { body: params });
  }

  /**
   * Get Futures Risk Limit
   *
   * Get risk limit info of your current futures position.
   * Signature required. Read permission. Rate limit: 144/3s per UID.
   */
  getMultiAssetRiskLimit(
    params?: FuturesV5RiskLimitReq,
  ): Promise<FuturesAPISuccessResponse<FuturesV5RiskLimitEntry[]>> {
    return this.getPrivate('/v5/position/risk/limit', params);
  }

  /**
   * Query Position Risk Limit Tiers
   *
   * Get all risk limit tiers for a contract.
   * Signature required. Read permission. Rate limit: 144/3s per UID.
   */
  getMultiAssetRiskLimitTiers(
    params: FuturesV5RiskLimitTierReq,
  ): Promise<FuturesAPISuccessResponse<FuturesV5RiskLimitTierEntry[]>> {
    return this.getPrivate('/v5/position/risk/limit_tier', params);
  }

  /**
   * Adjust Margin for Isolated Positions
   *
   * Increase or decrease margin of isolated positions. Query margin_available (add) and withdraw_available (reduce) via unified account info.
   * Signature required. Trade permission. Rate limit: 144/3s per UID.
   */
  adjustMultiAssetMargin(
    params: FuturesV5AdjustMarginReq,
  ): Promise<FuturesAPISuccessResponse<Record<string, never>>> {
    return this.postPrivate('/v5/position/margin', { body: params });
  }

  /**
   *
   * USDT Margined Futures Multi Asset - Basic Information (v5 API)
   *
   */

  /**
   * Get Futures Risk Limit (Market)
   *
   * Get futures risk limit table info. Signature required. Read permission. Rate limit: 240/3s per IP.
   */
  getMultiAssetMarketRiskLimit(
    params?: FuturesV5MarketRiskLimitReq,
  ): Promise<FuturesAPISuccessResponse<FuturesV5MarketRiskLimitEntry[]>> {
    return this.getPrivate('/v5/market/risk/limit', params);
  }

  /**
   * Assets Available for Trading Fee Deduction
   *
   * Get list of assets that can be used to deduct trading fees.
   * Signature required. Read permission. Rate limit: 240/3s per IP.
   */
  getMultiAssetFeeCurrencies(): Promise<
    FuturesAPISuccessResponse<FuturesV5AssetsDeductionCurrencyResp>
  > {
    return this.getPrivate('/v5/market/assets_deduction_currency');
  }

  /**
   * Assets Available for Multi-Assets Collateral Mode
   *
   * Get assets available for multi-assets collateral mode.
   * Signature required. Read permission. Rate limit: 240/3s per IP.
   */
  getMultiAssetCollateralAssets(): Promise<
    FuturesAPISuccessResponse<FuturesV5MultiAssetsMarginResp>
  > {
    return this.getPrivate('/v5/market/multi_assets_margin');
  }

  /**
   *
   * Coin-M Delivery - Reference Data
   *
   */

  /**
   * Query Tiered Adjustment Factor (CM)
   *
   * Get adjustment factor by leverage tier. No signature. Rate limit: 120/3s per IP.
   */
  getCmAdjustFactor(params?: {
    symbol?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryAdjustFactor[]>> {
    return this.get('/api/v1/contract_adjustfactor', params);
  }

  /**
   * Query Open Interest (CM)
   *
   * Get historical open interest. No signature. Rate limit: 120/3s per IP.
   */
  getCmOpenInterest(
    params: FuturesCmDeliveryOpenInterestReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryOpenInterest>> {
    return this.get('/api/v1/contract_his_open_interest', params);
  }

  /**
   * Query Tiered Margin (CM)
   *
   * Get tiered margin by leverage. No signature. Rate limit: 120/3s per IP.
   */
  getCmLadderMargin(params?: {
    symbol?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryLadderMargin[]>> {
    return this.get('/api/v1/contract_ladder_margin', params);
  }

  /**
   * Query Top Trader Sentiment - Account (CM)
   *
   * Net long/short accounts ratio. No signature. Rate limit: 120/3s per IP.
   */
  getCmAccountSentiment(params: {
    symbol: string;
    period: '5min' | '15min' | '30min' | '60min' | '4hour' | '1day';
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryEliteAccountRatio>> {
    return this.get('/api/v1/contract_elite_account_ratio', params);
  }

  /**
   * Query Top Trader Sentiment - Position (CM)
   *
   * Net long/short position ratio. No signature. Rate limit: 120/3s per IP.
   */
  getCmPositionSentiment(params: {
    symbol: string;
    period: '5min' | '15min' | '30min' | '60min' | '4hour' | '1day';
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryElitePositionRatio>> {
    return this.get('/api/v1/contract_elite_position_ratio', params);
  }

  /**
   * Query Liquidation Orders (CM)
   *
   * Get liquidation order info. trade_type: 0=fully filled, 5=liquidated close, 6=liquidated open. No signature. Rate limit: 120/3s per IP.
   */
  getCmLiquidationOrders(
    params: FuturesCmDeliveryLiquidationOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryLiquidationOrder[]>> {
    return this.get('/api/v3/contract_liquidation_orders', params);
  }

  /**
   * Query Settlement Records (CM)
   *
   * Historical settlement records. No signature. Rate limit: 120/3s per IP.
   */
  getCmSettlementRecords(
    params: FuturesCmDeliverySettlementRecordsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliverySettlementRecords>> {
    return this.get('/api/v1/contract_settlement_records', params);
  }

  /**
   * Query Risk Reserve Balance (CM)
   *
   * Total risk funds for all business lines, priced in USDT. No signature.
   */
  getCmRiskReserveBalance(): Promise<
    FuturesAPISuccessResponse<FuturesCmDeliveryInsuranceFund>
  > {
    return this.get('/v1/insurance_fund_info');
  }

  /**
   * Query Historical Risk Reserves (CM)
   *
   * Historical risk fund data by day. No signature.
   */
  getCmRiskReserveHistory(
    params?: FuturesCmDeliveryRiskReserveHistoryReq,
  ): Promise<
    FuturesAPISuccessResponse<FuturesCmDeliveryInsuranceFundHistory[]>
  > {
    return this.get('/v1/insurance_fund_history', params);
  }

  /**
   * Get Contract Price Limit (CM)
   *
   * Highest/lowest price limits. No signature. Rate limit: 120/3s per IP.
   */
  getCmContractLimit(
    params?: FuturesCmDeliveryContractLimitReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryPriceLimit[]>> {
    return this.get('/api/v1/contract_price_limit', params);
  }

  /**
   * Get Contract Open Interest (CM)
   *
   * Current open interest and 24h trading volume. No signature. Rate limit: 120/3s per IP.
   */
  getCmContractOpenInterest(
    params?: FuturesCmDeliveryContractOpenInterestReq,
  ): Promise<
    FuturesAPISuccessResponse<FuturesCmDeliveryContractOpenInterest[]>
  > {
    return this.get('/api/v1/contract_open_interest', params);
  }

  /**
   * Get Estimated Delivery Price (CM)
   *
   * Estimated delivery price for a symbol. No signature. Rate limit: 120/3s per IP.
   */
  getCmDeliveryPrice(params: {
    symbol: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryDeliveryPrice>> {
    return this.get('/api/v1/contract_delivery_price', params);
  }

  /**
   * Get Estimated Settlement Price (CM)
   *
   * Current-period estimated settlement/delivery price. Updated every 6s within 1h of settlement. No signature. Rate limit: 120/3s per IP.
   */
  getCmEstimatedSettlementPrice(params?: {
    symbol?: string;
  }): Promise<
    FuturesAPISuccessResponse<FuturesCmDeliveryEstimatedSettlementPrice[]>
  > {
    return this.get('/api/v1/contract_estimated_settlement_price', params);
  }

  /**
   * Query System Status (CM)
   *
   * Open/close/cancel/transfer access per symbol. No signature. Rate limit: 120/3s per IP.
   */
  getCmSystemStatus(params?: {
    symbol?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryApiState[]>> {
    return this.get('/api/v1/contract_api_state', params);
  }

  /**
   * Get Contract Info (CM)
   *
   * Contract metadata (size, tick, dates, status). No signature. Rate limit: 120/3s per IP.
   */
  getCmContractInfo(
    params?: FuturesCmDeliveryContractInfoReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryContractInfo[]>> {
    return this.get('/api/v1/contract_contract_info', params);
  }

  /**
   * Get Contract Index Price (CM)
   *
   * Index price for symbol(s). No signature. Rate limit: 120/3s per IP.
   */
  getCmIndex(params?: {
    symbol?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryIndex[]>> {
    return this.get('/api/v1/contract_index', params);
  }

  /**
   * Get Index Components (CM)
   *
   * Index constituent/exchange data. No signature.
   */
  getCmIndexConstituents(params: {
    symbol: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryConstituents>> {
    return this.get('/api/market/contract_constituents', params);
  }

  /**
   * Get Contract Elements (CM)
   *
   * Contract elements (limits, face value, etc). No signature.
   */
  getCmContractElements(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryQueryElements[]>> {
    return this.get('/api/v1/contract_query_elements', params);
  }

  /**
   *
   * Coin-M Delivery - Market Data
   *
   */

  /**
   * Get Market Depth (CM)
   *
   * Order book (asks/bids). type: step0=raw 150 levels; step1–5,14–15=merged 150; step6=raw 30; step7–13=merged 30. No signature. Rate limit: 800/s per IP.
   */
  getCmMarketDepth(params: {
    symbol: string;
    type: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryMarketDepth, 'tick'>> {
    return this.get('/market/depth', params);
  }

  /**
   * Get Market BBO (CM)
   *
   * Best bid/offer. Omit symbol for all. No signature. Rate limit: 800/s per IP.
   */
  getCmMarketBbo(params?: {
    symbol?: string;
  }): Promise<
    FuturesAPISuccessResponse<FuturesCmDeliveryMarketBbo[], 'ticks'>
  > {
    return this.get('/market/bbo', params);
  }

  /**
   * Get Kline Data (CM)
   *
   * Candlestick data. Either size or (from+to) required. No signature. Rate limit: 800/s per IP.
   */
  getCmKlines(
    params: FuturesCmDeliveryKlinesReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryKline[]>> {
    return this.get('/market/history/kline', params);
  }

  /**
   * Get Mark Price Kline (CM)
   *
   * Mark price candlestick data. No signature. Rate limit: 800/s per IP.
   */
  getCmMarkPriceKlines(
    params: FuturesCmDeliveryMarkPriceKlinesReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryMarkPriceKline[]>> {
    return this.get('/index/market/history/mark_price_kline', params);
  }

  /**
   * Get Market Data Overview (CM)
   *
   * 24h ticker + best bid/ask for one contract. symbol required. No signature. Rate limit: 800/s per IP.
   */
  getCmTicker(params: {
    symbol: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryTicker, 'tick'>> {
    return this.get('/market/detail/merged', params);
  }

  /**
   * Get Batch Market Data Overview (CM V2)
   *
   * 24h tickers + best bid/ask for one or all contracts. Omit symbol for all. No signature. Rate limit: 800/s per IP. Data updated every 50ms.
   */
  getCmTickers(params?: {
    symbol?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryTicker[], 'ticks'>> {
    return this.get('/v2/market/detail/batch_merged', params);
  }

  /**
   * Get Last Trade (CM)
   *
   * Latest trade for a contract. Omit symbol for all. No signature. Rate limit: 800/s per IP.
   */
  getCmLastrade(params?: {
    symbol?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryLastTrade, 'tick'>> {
    return this.get('/market/trade', params);
  }

  /**
   * Get Trade History (CM)
   *
   * Batch of recent trades for a contract. symbol and size required. No signature. Rate limit: 800/s per IP.
   */
  getCmTradeHistory(params: {
    symbol: string;
    size: number;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryTradeHistory[]>> {
    return this.get('/market/history/trade', params);
  }

  /**
   * Get Index Kline Data (CM)
   *
   * Index price candlestick data. vol/count/amount typically 0. No signature. Rate limit: 800/s per IP.
   */
  getCmIndexKlines(
    params: FuturesCmDeliveryIndexKlinesReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryIndexKline[]>> {
    return this.get('/index/market/history/index', params);
  }

  /**
   * Get Basis Data (CM)
   *
   * Basis (contract - index) kline. basis_price_type defaults to open. No signature. Rate limit: 800/s per IP. Max 2000 per request.
   */
  getCmBasisData(
    params: FuturesCmDeliveryBasisDataReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryBasisData[]>> {
    return this.get('/index/market/history/basis', params);
  }

  /**
   *
   * Coin-M Delivery - Account
   *
   */

  /**
   * Query Asset Valuation (CM)
   *
   * Total asset valuation in fiat. valuation_asset optional, defaults to BTC. Signature required. Rate limit: 72/3s per UID.
   */
  getCmAssetValuation(params?: {
    valuation_asset?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryAssetValuation[]>> {
    return this.postPrivate('/api/v1/contract_balance_valuation', {
      body: params,
    });
  }

  /**
   * Query Account Info (CM)
   *
   * User's account info per symbol. Omit symbol for all. Signature required. Rate limit: 72/3s per UID.
   */
  getCmAccountInfo(params?: {
    symbol?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryAccountInfo[]>> {
    return this.postPrivate('/api/v1/contract_account_info', {
      body: params,
    });
  }

  /**
   * Query Position Info (CM)
   *
   * User's positions. Omit symbol for all. Signature required. Rate limit: 72/3s per UID. Query with symbol to avoid 1080 when contracts in settlement.
   */
  getCmPositionInfo(params?: {
    symbol?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryPositionInfo[]>> {
    return this.postPrivate('/api/v1/contract_position_info', {
      body: params,
    });
  }

  /**
   * Set Sub-Account Trading Permissions (CM)
   *
   * Enable/disable trading for sub-accounts. sub_uid comma-separated, max 10. Signature required. Trade permission. Rate limit: 72/3s per UID.
   */
  updateCmSubPermissions(params: {
    sub_uid: string;
    sub_auth: 0 | 1;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliverySubAuth>> {
    return this.postPrivate('/api/v1/contract_sub_auth', {
      body: params,
    });
  }

  /**
   * Query Sub-Account Trading Permissions (CM)
   *
   * List sub-accounts and their trading permission status. Signature required. Rate limit: 144/3s per UID.
   */
  getCmSubPermissions(
    params?: FuturesCmDeliverySubAuthListReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliverySubPermissions>> {
    return this.getPrivate('/api/v1/contract_sub_auth_list', params);
  }

  /**
   * Query Assets of All Sub-Accounts (CM)
   *
   * Assets info of all sub-accounts under master. Only returns activated contract sub-accounts. Signature required. Rate limit: 72/3s per UID.
   */
  getCmAllSubAccounts(
    params?: FuturesCmDeliverySubAccountListReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryAllSubAccount[]>> {
    return this.postPrivate('/api/v1/contract_sub_account_list', {
      body: params ?? {},
    });
  }

  /**
   * Query Batch of Sub-Account Assets (CM)
   *
   * Paginated batch of sub-account assets. Only activated sub-accounts. Signature required. Rate limit: 72/3s per UID.
   */
  getCmSubAccountsAssets(
    params?: FuturesCmDeliverySubAccountInfoListReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliverySubAccountsAssets>> {
    return this.postPrivate('/api/v1/contract_sub_account_info_list', {
      body: params ?? {},
    });
  }

  /**
   * Query Single Sub-Account Assets (CM)
   *
   * Assets info for one sub-account. sub_uid required. Only activated sub-accounts. Signature required. Rate limit: 72/3s per UID.
   */
  getCmSubAccountAssets(params: {
    sub_uid: number;
    symbol?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliverySubAccountAssets[]>> {
    return this.postPrivate('/api/v1/contract_sub_account_info', {
      body: params,
    });
  }

  /**
   * Query Single Sub-Account Positions (CM)
   *
   * Position info for one sub-account. sub_uid required. Only activated sub-accounts. Signature required. Rate limit: 72/3s per UID.
   */
  getCmSubPositionInfo(params: {
    sub_uid: number;
    symbol?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliverySubPositionInfo[]>> {
    return this.postPrivate('/api/v1/contract_sub_position_info', {
      body: params,
    });
  }

  /**
   * Query Account Financial Records (CM)
   *
   * Financial records (transfers, fees, funding, etc.). symbol required, type optional (comma-separated). Window max 48h, within 90 days. Signature required. Rate limit: 72/3s per UID.
   */
  getCmFinancialRecords(
    params: FuturesCmDeliveryFinancialRecordReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryFinancialRecord[]>> {
    return this.postPrivate('/api/v3/contract_financial_record', {
      body: params,
    });
  }

  /**
   * Query Account Financial Records Exact (CM)
   *
   * Financial records via multiple fields. from_id for pagination. Same params as contract_financial_record. Signature required. Rate limit: 72/3s per UID.
   */
  getCmFinancialRecordsExact(
    params: FuturesCmDeliveryFinancialRecordExactReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryFinancialRecord[]>> {
    return this.postPrivate('/api/v3/contract_financial_record_exact', {
      body: params,
    });
  }

  /**
   * Query User Settlement Records (CM)
   *
   * User's settlement records. symbol required. Within 90 days. Signature required. Rate limit: 72/3s per UID.
   */
  getCmUserSettlementRecords(
    params: FuturesCmDeliveryUserSettlementRecordsReq,
  ): Promise<
    FuturesAPISuccessResponse<FuturesCmDeliveryUserSettlementRecords>
  > {
    return this.postPrivate('/api/v1/contract_user_settlement_records', {
      body: params,
    });
  }

  /**
   * Query Order Limit (CM)
   *
   * Max open/close order limits per contract for given order type. order_price_type required. Signature required. Rate limit: 72/3s per UID.
   */
  getCmOrderLimit(
    params: FuturesCmDeliveryOrderLimitReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryOrderLimit>> {
    return this.postPrivate('/api/v1/contract_order_limit', {
      body: params,
    });
  }

  /**
   * Query Trading Fee (CM)
   *
   * Maker/taker fee rates per contract. Omit symbol for all. Signature required. Rate limit: 72/3s per UID.
   */
  getCmFee(params?: {
    symbol?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryFee[]>> {
    return this.postPrivate('/api/v1/contract_fee', {
      body: params ?? {},
    });
  }

  /**
   * Query Transfer Limit (CM)
   *
   * Transfer in/out limits per symbol. Omit symbol for all. Signature required. Rate limit: 72/3s per UID.
   */
  getCmTransferLimit(params?: {
    symbol?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryTransferLimit[]>> {
    return this.postPrivate('/api/v1/contract_transfer_limit', {
      body: params ?? {},
    });
  }

  /**
   * Query Position Limit (CM)
   *
   * Max long/short position limits per contract type. Omit symbol for all. Signature required. Rate limit: 72/3s per UID.
   */
  getCmPositionLimit(params?: {
    symbol?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryPositionLimit[]>> {
    return this.postPrivate('/api/v1/contract_position_limit', {
      body: params ?? {},
    });
  }

  /**
   * Query Assets And Positions (CM)
   *
   * Combined account + positions for symbol. symbol required. Signature required. Rate limit: 72/3s per UID.
   */
  getCmAssetPositionInfo(params: {
    symbol: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryAssetPositionInfo[]>> {
    return this.postPrivate('/api/v1/contract_account_position_info', {
      body: params,
    });
  }

  /**
   * Transfer Between Master And Sub Account (CM)
   *
   * Master-sub or sub-master transfer. type: master_to_sub or sub_to_master. Rate limit 10/min per sub. Signature required. Trade permission. Rate limit: 72/3s per UID.
   */
  transferCmMasterSub(
    params: FuturesCmDeliveryMasterSubTransferReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryMasterSubTransfer>> {
    return this.postPrivate('/api/v1/contract_master_sub_transfer', {
      body: params,
    });
  }

  /**
   * Query Master-Sub Transfer Records (CM)
   *
   * Transfer history between master and sub accounts. symbol and create_date required. Signature required. Rate limit: 72/3s per UID.
   */
  getCmMasterSubTransfers(
    params: FuturesCmDeliveryMasterSubTransferRecordReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryMasterSubTransfers>> {
    return this.postPrivate('/api/v1/contract_master_sub_transfer_record', {
      body: params,
    });
  }

  /**
   * Query API Trading Status (CM)
   *
   * User's API indicator disable information (COR, TDN). No params. Signature required. Rate limit: 72/3s per UID.
   */
  getCmApiTradingStatus(): Promise<
    FuturesAPISuccessResponse<FuturesCmDeliveryApiTradingStatus[]>
  > {
    return this.getPrivate('/api/v1/contract_api_trading_status');
  }

  /**
   * Query Available Leverage Rate (CM)
   *
   * Available leverage rates per symbol. Omit symbol for all. Signature required. Rate limit: 72/3s per UID.
   */
  getCmLeverageRate(params?: {
    symbol?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryLeverageRate[]>> {
    return this.postPrivate('/api/v1/contract_available_level_rate', {
      body: params ?? {},
    });
  }

  /**
   *
   * Coin-M Delivery - Future Trade Interface
   *
   */

  /**
   * Automatic Order Cancellation (Future Trade)
   *
   * Dead Man's Switch for delivery futures. Enable/disable auto-cancel of all pending orders after countdown. If not refreshed before timer ends, all pending orders cancelled. Trade permission.
   */
  setCmCancelAfter(
    params: FuturesSetCancelAfterReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelAfter>> {
    return this.postPrivate('/api/v1/contract-cancel-after', {
      body: params,
    });
  }

  /**
   * Place an Order (Future Trade)
   *
   * Place order for delivery futures (weekly/quarterly). One of contract_code or (symbol+contract_type). Trade permission. Rate limit: 36/3s per UID.
   */
  submitCmOrder(
    params: FuturesCmDeliverySubmitOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSubmitOrder>> {
    return this.postPrivate('/api/v1/contract_order', {
      body: params,
    });
  }

  /**
   * Place a Batch of Orders (Future Trade)
   *
   * Place up to 25 orders for delivery futures. Trade permission. Rate limit: 36/3s per UID.
   */
  submitCmBatchOrder(
    params: FuturesCmDeliverySubmitBatchOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesBatchOrder>> {
    return this.postPrivate('/api/v1/contract_batchorder', {
      body: params,
    });
  }

  /**
   * Cancel an Order (Future Trade)
   *
   * Cancel by order_id or client_order_id. Max 10 per request. Symbol required. Trade permission. Rate limit: 36/3s per UID.
   */
  cancelCmOrder(
    params: FuturesCmDeliveryCancelOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
    return this.postPrivate('/api/v1/contract_cancel', {
      body: params,
    });
  }

  /**
   * Cancel All Orders (Future Trade)
   *
   * Cancel all orders. One of: symbol, contract_code, or (symbol+contract_type). Optional direction/offset filter. Trade permission. Rate limit: 36/3s per UID.
   */
  cancelCmAllOrders(
    params: FuturesCmDeliveryCancelAllOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
    return this.postPrivate('/api/v1/contract_cancelall', {
      body: params,
    });
  }

  /**
   * Switch Leverage (Future Trade)
   *
   * Set leverage for symbol. Trade permission. Rate limit: 36/3s per UID.
   */
  updateCmLeverage(
    params: FuturesCmDeliveryUpdateLeverageReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliverySwitchLeverRate>> {
    return this.postPrivate('/api/v1/contract_switch_lever_rate', {
      body: params,
    });
  }

  /**
   * Get Information of an Order (Future Trade)
   *
   * Query order(s) by order_id or client_order_id. Max 50 per request. Symbol required. Read permission. Rate limit: 72/3s per UID.
   */
  getCmOrderInfo(
    params: FuturesCmDeliveryGetOrderInfoReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryOrderInfo[]>> {
    return this.postPrivate('/api/v1/contract_order_info', {
      body: params,
    });
  }

  /**
   * Order Details Acquisition (Future Trade)
   *
   * Get order detail with trades. symbol, order_id, created_at, order_type required. Read permission. Rate limit: 72/3s per UID.
   */
  getCmOrderDetail(
    params: FuturesCmDeliveryGetOrderDetailReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryOrderDetail>> {
    return this.postPrivate('/api/v1/contract_order_detail', {
      body: params,
    });
  }

  /**
   * Query Open Orders (Future Trade)
   *
   * Get open orders. Omit symbol for all. Read permission. Rate limit: 72/3s per UID.
   */
  getCmOpenOrders(
    params?: FuturesCmDeliveryGetOpenOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryOpenOrders>> {
    return this.postPrivate('/api/v1/contract_openorders', {
      body: params ?? {},
    });
  }

  /**
   * Get History Orders (Future Trade, v3)
   *
   * History orders. symbol, trade_type, type, status required. Window max 48h, within 90 days. Read permission. Rate limit: 72/3s per UID.
   */
  getCmHistoryOrders(
    params: FuturesCmDeliveryGetHistoryOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryHistoryOrder[]>> {
    return this.postPrivate('/api/v3/contract_hisorders', {
      body: params,
    });
  }

  /**
   * Query History Orders via Multiple Fields (Future Trade, v3)
   *
   * History orders with type filter. symbol, trade_type, type, status required. Window max 48h, within 90 days. Read permission. Rate limit: 72/3s per UID.
   */
  getCmHistoryOrdersExact(
    params: FuturesCmDeliveryGetHistoryOrdersExactReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryHistoryOrder[]>> {
    return this.postPrivate('/api/v3/contract_hisorders_exact', {
      body: params,
    });
  }

  /**
   * Get History Match Results (Future Trade, v3)
   *
   * Match/fill history. symbol, contract, trade_type required. Window max 48h, within 90 days. Read permission. Rate limit: 72/3s per UID.
   */
  getCmFills(
    params: FuturesCmDeliveryGetFillsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryMatchResult[]>> {
    return this.postPrivate('/api/v3/contract_matchresults', {
      body: params,
    });
  }

  /**
   * Query History Match Results via Multiple Fields (Future Trade, v3)
   *
   * Match/fill history with flexible filters. symbol, trade_type required. Within 90 days. Read permission. Rate limit: 72/3s per UID.
   */
  getCmFillsExact(
    params: FuturesCmDeliveryGetFillsExactReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryMatchResult[]>> {
    return this.postPrivate('/api/v3/contract_matchresults_exact', {
      body: params,
    });
  }

  /**
   * Place Flash Close Order (Future Trade)
   *
   * Lightning close position. One of contract_code or (symbol+contract_type). volume, direction required. Trade permission. Rate limit: 36/3s per UID.
   */
  submitCmFlashCloseOrder(
    params: FuturesCmDeliverySubmitFlashCloseOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSubmitOrder>> {
    return this.postPrivate('/api/v1/lightning_close_position', {
      body: params,
    });
  }

  /**
   *
   * Coin-M Delivery - Strategy Order (Trigger order)
   *
   */

  /**
   * Place Trigger Order (Future Trade)
   *
   * Submit trigger order. One of contract_code or (symbol+contract_type). Trade permission. Rate limit: 5/s.
   */
  submitCmTriggerOrder(
    params: FuturesCmDeliverySubmitTriggerOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSubmitOrder>> {
    return this.postPrivate('/api/v1/contract_trigger_order', {
      body: params,
    });
  }

  /**
   * Cancel Trigger Order (Future Trade)
   *
   * Cancel by order_id. Max 10 per request. Symbol required. Trade permission. Rate limit: 5/s.
   */
  cancelCmTriggerOrder(
    params: FuturesCmDeliveryCancelTriggerOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
    return this.postPrivate('/api/v1/contract_trigger_cancel', {
      body: params,
    });
  }

  /**
   * Cancel All Trigger Orders (Future Trade)
   *
   * Cancel all trigger orders. symbol required. Optional contract_code, contract_type, direction, offset. Trade permission. Rate limit: 5/s.
   */
  cancelCmAllTriggerOrders(
    params: FuturesCmDeliveryCancelAllTriggerOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
    return this.postPrivate('/api/v1/contract_trigger_cancelall', {
      body: params,
    });
  }

  /**
   * Query Trigger Order Open Orders (Future Trade)
   *
   * Get open trigger orders. Symbol required. Read permission. Rate limit: 72/3s per UID.
   */
  getCmTriggerOpenOrders(
    params: FuturesCmDeliveryGetTriggerOpenOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryTriggerOpenOrders>> {
    return this.postPrivate('/api/v1/contract_trigger_openorders', {
      body: params,
    });
  }

  /**
   * Query Trigger Order History (Future Trade)
   *
   * Get trigger order history. symbol, trade_type, status, create_date required. Within 90 days. Read permission. Rate limit: 72/3s per UID.
   */
  getCmTriggerHistoryOrders(
    params: FuturesCmDeliveryGetTriggerHistoryOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryTriggerHistoryOrders>> {
    return this.postPrivate('/api/v1/contract_trigger_hisorders', {
      body: params,
    });
  }

  /**
   * Set Take-profit and Stop-loss Order (Future Trade)
   *
   * TPSL for existing position. One of contract_code or (symbol+contract_type). At least one of tp or sl. Rate limit: 5/s.
   */
  submitCmTpslOrder(
    params: FuturesCmDeliverySubmitTpslOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryTpslOrder>> {
    return this.postPrivate('/api/v1/contract_tpsl_order', {
      body: params,
    });
  }

  /**
   * Cancel Take-profit and Stop-loss Order (Future Trade)
   *
   * Cancel TPSL by order_id. Max 10 per request. Symbol required. Trade permission. Rate limit: 5/s.
   */
  cancelCmTpslOrder(
    params: FuturesCmDeliveryCancelTpslOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
    return this.postPrivate('/api/v1/contract_tpsl_cancel', {
      body: params,
    });
  }

  /**
   * Cancel All Take-profit and Stop-loss Orders (Future Trade)
   *
   * Cancel all TPSL. One of: symbol, contract_code, or (symbol+contract_type). Optional direction. Trade permission. Rate limit: 5/s.
   */
  cancelCmAllTpslOrders(
    params: FuturesCmDeliveryCancelAllTpslOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
    return this.postPrivate('/api/v1/contract_tpsl_cancelall', {
      body: params,
    });
  }

  /**
   * Query Open Take-profit and Stop-loss Orders (Future Trade)
   *
   * Get open TPSL orders. Symbol required. Read permission. Rate limit: 72/3s per UID.
   */
  getCmTpslOpenOrders(
    params: FuturesCmDeliveryGetTpslOpenOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryTpslOpenOrders>> {
    return this.postPrivate('/api/v1/contract_tpsl_openorders', {
      body: params,
    });
  }

  /**
   * Query Take-profit and Stop-loss History Orders (Future Trade)
   *
   * TPSL order history. symbol, contract_code, status, create_date required. Within 90 days. Read permission. Rate limit: 72/3s per UID.
   */
  getCmTpslHistoryOrders(
    params: FuturesCmDeliveryGetTpslHistoryOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryTpslHistoryOrders>> {
    return this.postPrivate('/api/v1/contract_tpsl_hisorders', {
      body: params,
    });
  }

  /**
   * Query TPSL Orders Related to Position-opening Order (Future Trade)
   *
   * Get TPSL orders linked to a limit order. symbol, order_id required. Read permission. Rate limit: 72/3s per UID.
   */
  getCmRelationTpslOrder(
    params: FuturesCmDeliveryGetRelationTpslOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryRelationTpslOrder>> {
    return this.postPrivate('/api/v1/contract_relation_tpsl_order', {
      body: params,
    });
  }

  /**
   * Place Trailing Order (Future Trade)
   *
   * Submit trailing order. One of contract_code or (symbol+contract_type). lever_rate required when open. Trade permission. Rate limit: 5/s.
   */
  submitCmTrailingOrder(
    params: FuturesCmDeliverySubmitTrailingOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSubmitOrder>> {
    return this.postPrivate('/api/v1/contract_track_order', {
      body: params,
    });
  }

  /**
   * Cancel Trailing Order (Future Trade)
   *
   * Cancel by order_id. Max 10 per request. Symbol required. Trade permission. Rate limit: 5/s.
   */
  cancelCmTrailingOrder(
    params: FuturesCmDeliveryCancelTrailingOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
    return this.postPrivate('/api/v1/contract_track_cancel', {
      body: params,
    });
  }

  /**
   * Cancel All Trailing Orders (Future Trade)
   *
   * Cancel all trailing orders. symbol required. Optional contract_code, contract_type, direction, offset. Trade permission. Rate limit: 5/s.
   */
  cancelCmAllTrailingOrders(
    params: FuturesCmDeliveryCancelAllTrailingOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
    return this.postPrivate('/api/v1/contract_track_cancelall', {
      body: params,
    });
  }

  /**
   * Query Open Trailing Orders (Future Trade)
   *
   * Get unfilled trailing orders. Symbol required. Read permission. Rate limit: 72/3s per UID.
   */
  getCmTrailingOpenOrders(
    params: FuturesCmDeliveryGetTrailingOpenOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryTrailingOpenOrders>> {
    return this.postPrivate('/api/v1/contract_track_openorders', {
      body: params,
    });
  }

  /**
   * Get History Trailing Orders (Future Trade)
   *
   * Trailing order history. symbol, status, trade_type, create_date required. Within 90 days. Read permission. Rate limit: 72/3s per UID.
   */
  getCmTrailingHistoryOrders(
    params: FuturesCmDeliveryGetTrailingHistoryOrdersReq,
  ): Promise<
    FuturesAPISuccessResponse<FuturesCmDeliveryTrailingHistoryOrders>
  > {
    return this.postPrivate('/api/v1/contract_track_hisorders', {
      body: params,
    });
  }
}
