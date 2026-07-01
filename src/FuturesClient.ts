import { BaseRestClient } from './lib/BaseRestClient.js';
import {
  APIIDMain,
  APIIDMainKey,
  REST_CLIENT_TYPE_ENUM,
  RestClientType,
} from './lib/requestUtils.js';
import type {
  FuturesCancelAllCrossTpslOrdersReq,
  FuturesCancelAllCrossTrailingOrdersReq,
  FuturesCancelAllCrossTriggerOrdersReq,
  FuturesCancelAllOrdersReq,
  FuturesCancelAllTrailingOrdersReq,
  FuturesCancelAllTriggerOrdersReq,
  FuturesCancelCrossAllOrdersReq,
  FuturesCancelCrossOrderReq,
  FuturesCancelCrossTpslOrderReq,
  FuturesCancelCrossTrailingOrderReq,
  FuturesCancelCrossTriggerOrderReq,
  FuturesCancelOrderReq,
  FuturesCmDeliveryBasisDataReq,
  FuturesCmDeliveryCancelAllOrdersReq,
  FuturesCmDeliveryCancelAllTpslOrdersReq,
  FuturesCmDeliveryCancelAllTrailingOrdersReq,
  FuturesCmDeliveryCancelAllTriggerOrdersReq,
  FuturesCmDeliveryCancelOrderReq,
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
  FuturesCmDeliverySubmitBatchOrderReq,
  FuturesCmDeliverySubmitFlashCloseOrderReq,
  FuturesCmDeliverySubmitOrderReq,
  FuturesCmDeliverySubmitTpslOrderReq,
  FuturesCmDeliverySubmitTrailingOrderReq,
  FuturesCmDeliverySubmitTriggerOrderReq,
  FuturesCmDeliverySubPermissionsReq,
  FuturesCmDeliveryUserSettlementRecordsReq,
  FuturesCmPerpBasisDataReq,
  FuturesCmPerpCancelAllOrdersReq,
  FuturesCmPerpCancelAllTpslOrdersReq,
  FuturesCmPerpCancelAllTrailingOrdersReq,
  FuturesCmPerpCancelAllTriggerOrdersReq,
  FuturesCmPerpCancelOrderReq,
  FuturesCmPerpCancelTpslOrderReq,
  FuturesCmPerpCancelTrailingOrderReq,
  FuturesCmPerpFillsExactReq,
  FuturesCmPerpFillsReq,
  FuturesCmPerpFinancialRecordExactReq,
  FuturesCmPerpFinancialRecordReq,
  FuturesCmPerpFundingRateKlinesReq,
  FuturesCmPerpGetOpenInterestReq,
  FuturesCmPerpHistoricalFundingRateReq,
  FuturesCmPerpHistoryOrdersExactReq,
  FuturesCmPerpHistoryOrdersReq,
  FuturesCmPerpKlinesReq,
  FuturesCmPerpLightningCloseReq,
  FuturesCmPerpLiquidationOrdersReq,
  FuturesCmPerpMarkPriceKlinesReq,
  FuturesCmPerpMasterSubTransferReq,
  FuturesCmPerpMasterSubTransfersReq,
  FuturesCmPerpOpenOrdersReq,
  FuturesCmPerpOrderDetailReq,
  FuturesCmPerpOrderInfoReq,
  FuturesCmPerpOrderLimitReq,
  FuturesCmPerpPremiumIndexKlinesReq,
  FuturesCmPerpRelationTpslOrderReq,
  FuturesCmPerpRiskReserveHistoryReq,
  FuturesCmPerpSettlementRecordsReq,
  FuturesCmPerpSubAccountsAssetsReq,
  FuturesCmPerpSubAccountsReq,
  FuturesCmPerpSubmitBatchOrderReq,
  FuturesCmPerpSubmitOrderReq,
  FuturesCmPerpSubPermissionsReq,
  FuturesCmPerpTpslHisOrdersReq,
  FuturesCmPerpTpslOpenOrdersReq,
  FuturesCmPerpTpslOrderReq,
  FuturesCmPerpTrailingHisOrdersReq,
  FuturesCmPerpTrailingOpenOrdersReq,
  FuturesCmPerpTrailingOrderReq,
  FuturesCmPerpTriggerHistoryOrdersReq,
  FuturesCmPerpTriggerOpenOrdersReq,
  FuturesCmPerpTriggerOrderReq,
  FuturesCopyTraderApikeyReq,
  FuturesCopyTraderConfigReq,
  FuturesCopyTraderFollowerRemoveReq,
  FuturesCopyTraderFollowerSettingsReq,
  FuturesCopyTraderFollowersReq,
  FuturesCopyTraderInstrumentsReq,
  FuturesCopyTraderProfitSharingHistoryReq,
  FuturesCopyTraderProfitSharingHistorySummaryReq,
  FuturesCopyTraderStatisticsReq,
  FuturesCopyTraderTransferReq,
  FuturesCopyTraderUnrealizedProfitSharingSummaryReq,
  FuturesCrossSubmitOrderReq,
  FuturesGetBasisDataReq,
  FuturesGetContractInfoReq,
  FuturesGetContractPriceLimitReq,
  FuturesGetCrossAdjustFactorReq,
  FuturesGetCrossAvailableLeverageReq,
  FuturesGetCrossFillsExactReq,
  FuturesGetCrossFillsReq,
  FuturesGetCrossHistoryOrdersExactReq,
  FuturesGetCrossHistoryOrdersReq,
  FuturesGetCrossLeverageLimitsReq,
  FuturesGetCrossOpenOrdersReq,
  FuturesGetCrossOrderDetailReq,
  FuturesGetCrossOrderInfoReq,
  FuturesGetCrossPositionLimitReq,
  FuturesGetCrossPositionsReq,
  FuturesGetCrossRelationTpslOrderReq,
  FuturesGetCrossSubAccountsAssetsReq,
  FuturesGetCrossSubAccountsReq,
  FuturesGetCrossSubPositionsReq,
  FuturesGetCrossTieredMarginReq,
  FuturesGetCrossTpslHistoryOrdersReq,
  FuturesGetCrossTpslOpenOrdersReq,
  FuturesGetCrossTradeStateReq,
  FuturesGetCrossTrailingHistoryOrdersReq,
  FuturesGetCrossTrailingOpenOrdersReq,
  FuturesGetCrossTriggerHistoryOrdersReq,
  FuturesGetCrossTriggerOpenOrdersReq,
  FuturesGetEstimatedSettlementPriceReq,
  FuturesGetFeeReq,
  FuturesGetFillsExactReq,
  FuturesGetFillsReq,
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
  FuturesGetOpenInterestReq,
  FuturesGetOpenOrdersReq,
  FuturesGetOrderDetailReq,
  FuturesGetOrderInfoReq,
  FuturesGetOrderLimitReq,
  FuturesGetPremiumIndexKlinesReq,
  FuturesGetRiskReserveHistoryReq,
  FuturesGetSettlementRecordsReq,
  FuturesGetSubAccountsAssetsReq,
  FuturesGetSubPermissionsReq,
  FuturesGetTpslHistoryOrdersReq,
  FuturesGetTpslOpenOrdersReq,
  FuturesGetTrailingHistoryOrdersReq,
  FuturesGetTrailingOpenOrdersReq,
  FuturesGetTriggerHistoryOrdersReq,
  FuturesGetTriggerOpenOrdersReq,
  FuturesGetUnifiedMarginAdjustmentsReq,
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
  FuturesV5OrderDetailsReq,
  FuturesV5OrderHistoryReq,
  FuturesV5OrderInfoReq,
  FuturesV5RiskLimitReq,
  FuturesV5SetLeverageReq,
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
  FuturesCmDeliveryContractInfo,
  FuturesCmDeliveryContractOpenInterest,
  FuturesCmDeliveryDeliveryPrice,
  FuturesCmDeliveryEliteAccountRatio,
  FuturesCmDeliveryElitePositionRatio,
  FuturesCmDeliveryEstimatedSettlementPrice,
  FuturesCmDeliveryFee,
  FuturesCmDeliveryFinancialRecord,
  FuturesCmDeliveryLadderMargin,
  FuturesCmDeliveryLeverageRate,
  FuturesCmDeliveryLiquidationOrder,
  FuturesCmDeliveryOpenInterest,
  FuturesCmDeliveryOpenOrders,
  FuturesCmDeliveryOrderLimit,
  FuturesCmDeliveryPositionInfo,
  FuturesCmDeliveryPositionLimit,
  FuturesCmDeliveryQueryElements,
  FuturesCmDeliverySettlementRecords,
  FuturesCmDeliverySubAccountAssets,
  FuturesCmDeliverySubAccountsAssets,
  FuturesCmDeliverySubPositionInfo,
  FuturesCmDeliverySwitchLeverRate,
  FuturesCmDeliveryTpslHistoryOrders,
  FuturesCmDeliveryTpslOpenOrders,
  FuturesCmDeliveryTrailingHistoryOrders,
  FuturesCmDeliveryTrailingOpenOrders,
  FuturesCmDeliveryTransferLimit,
  FuturesCmDeliveryTriggerHistoryOrders,
  FuturesCmDeliveryTriggerOpenOrders,
  FuturesCmDeliveryUserSettlementRecords,
  FuturesCmPerpAccountFull,
  FuturesCmPerpAccountInfo,
  FuturesCmPerpAccountRatio,
  FuturesCmPerpAdjustFactor,
  FuturesCmPerpApiStatus,
  FuturesCmPerpAvailableLeverage,
  FuturesCmPerpCancelAfter,
  FuturesCmPerpContractElements,
  FuturesCmPerpContractInfo,
  FuturesCmPerpEstimatedSettlementPrice,
  FuturesCmPerpFee,
  FuturesCmPerpFinancialRecord,
  FuturesCmPerpFundingRate,
  FuturesCmPerpHistoricalFundingRatePage,
  FuturesCmPerpLiquidationOrder,
  FuturesCmPerpOpenInterest,
  FuturesCmPerpOpenInterestCurrent,
  FuturesCmPerpOpenOrders,
  FuturesCmPerpOrderLimit,
  FuturesCmPerpPositionInfo,
  FuturesCmPerpPositionLimit,
  FuturesCmPerpPositionRatio,
  FuturesCmPerpSettlementRecordsPage,
  FuturesCmPerpSubAccountAssets,
  FuturesCmPerpSubAccounts,
  FuturesCmPerpSubAccountsAssets,
  FuturesCmPerpSubPositions,
  FuturesCmPerpSystemStatus,
  FuturesCmPerpTieredMargin,
  FuturesCmPerpTpslHisOrders,
  FuturesCmPerpTpslOpenOrders,
  FuturesCmPerpTrailingHisOrders,
  FuturesCmPerpTrailingOpenOrders,
  FuturesCmPerpTransferLimit,
  FuturesCmPerpTriggerHistoryOrders,
  FuturesCmPerpTriggerOpenOrders,
  FuturesCmPerpUpdateLeverage,
  FuturesCmPerpUpdateSubPermissions,
  FuturesContractElements,
  FuturesContractInfo,
  FuturesCopyTraderApikey,
  FuturesCopyTraderConfig,
  FuturesCopyTraderFollower,
  FuturesCopyTraderFollowerRemoveResult,
  FuturesCopyTraderInstrument,
  FuturesCopyTraderProfitSharingHistory,
  FuturesCopyTraderProfitSharingSummary,
  FuturesCopyTraderStatistics,
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
  FuturesLastTrade,
  FuturesLeverPositionLimit,
  FuturesLinearSwapOverviewAccountInfo,
  FuturesLiquidationOrder,
  FuturesMarketDepthTick,
  FuturesMarkPriceKline,
  FuturesMasterSubTransfer,
  FuturesMasterSubTransferRecords,
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
  FuturesSubmitOrder,
  FuturesSubPermissions,
  FuturesSwitchLeverRate,
  FuturesSwitchPositionMode,
  FuturesTicker,
  FuturesTimestamp,
  FuturesTpslHisOrders,
  FuturesTpslOpenOrders,
  FuturesTpslOrder,
  FuturesTrackHisOrders,
  FuturesTrackOpenOrders,
  FuturesTradeHistory,
  FuturesTransferLimit,
  FuturesTriggerHistoryOrders,
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
 * The FuturesClient provides integration to HTX futures and swap REST APIs.
 */
export class FuturesClient extends BaseRestClient {
  getClientType(): RestClientType {
    // Deliberately default to the AWS CDN domain for HTX. The non-AWS domain (Cloudflare CDN) has certificate issues at the root certificate authority. HTX is aware.
    return REST_CLIENT_TYPE_ENUM.futuresAWS;
  }

  /**
   *
   * Misc Utility Methods
   *
   */

  generateNewOrderID(): string {
    // Generate a short UUID format (32 hex characters without dashes)
    // TODO: CHECK ID FOR HTX FUTURES
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
  getLinearSwapAccountType(): Promise<
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
  updateLinearSwapAccountType(params: { account_type: 1 | 2 }): Promise<
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
  getLinearSwapFundingRate(params: {
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
  getLinearSwapFundingRates(params?: {
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
  getLinearSwapHistoricalFundingRate(
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
  getLinearSwapLiquidationOrders(
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
  getLinearSwapSettlementRecords(
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
  getLinearSwapNetAccountRatio(params: {
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
  getLinearSwapNetPositionRatio(params: {
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
  getLinearSwapIsolatedSystemStatus(params?: {
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
  getLinearSwapCrossTieredMargin(
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
  getLinearSwapIsolatedTieredMargin(params?: {
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
  getLinearSwapEstimatedSettlementPrice(
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
  getLinearSwapIsolatedAdjustFactor(params?: {
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
  getLinearSwapCrossAdjustFactor(
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
  getLinearSwapRiskReserveBalance(): Promise<
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
  getLinearSwapRiskReserveHistory(
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
  getLinearSwapContractPriceLimit(
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
  getLinearSwapOpenInterest(
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
  getLinearSwapContractInfo(
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
  getLinearSwapIndexPrice(params?: {
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
  getLinearSwapIndexConstituents(params: {
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
  getLinearSwapContractElements(params?: {
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
  getLinearSwapMarketDepth(params: {
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
  getLinearSwapMarketBbo(params?: {
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
  getLinearSwapKlines(
    params: FuturesGetKlinesReq,
  ): Promise<FuturesAPISuccessResponse<FuturesKline[]>> {
    return this.get('/linear-swap-ex/market/history/kline', params);
  }

  /**
   * Get Mark Klines
   *
   * Mark price candlestick data. No signature. Rate limit: 800/s per IP.
   */
  getLinearSwapMarkKlines(
    params: FuturesGetMarkKlinesReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMarkPriceKline[]>> {
    return this.get(
      '/index/market/history/linear_swap_mark_price_kline',
      params,
    );
  }

  /**
   * Get Ticker
   *
   * 24h ticker + best bid/ask for one contract. No signature. Rate limit: 800/s per IP.
   */
  getLinearSwapTicker(params: {
    contract_code: string;
  }): Promise<FuturesAPISuccessResponse<FuturesTicker, 'tick'>> {
    return this.get('/linear-swap-ex/market/detail/merged', params);
  }

  /**
   * Get Tickers (V2)
   *
   * 24h tickers + best bid/ask for one or all contracts. business_type required for futures. No signature.
   * Rate limit: 800/s per IP. Data updated every 50ms.
   */
  getLinearSwapTickers(params?: {
    contract_code?: string;
    business_type?: 'futures' | 'swap' | 'all';
  }): Promise<FuturesAPISuccessResponse<FuturesTicker[], 'ticks'>> {
    return this.get('/v2/linear-swap-ex/market/detail/batch_merged', params);
  }

  /**
   * Get Last Trade
   *
   * Latest trade for a contract. Omit contract_code for all. business_type required for futures. No signature.
   * Rate limit: 800/s per IP.
   */
  getLinearSwapLastTrade(params?: {
    contract_code?: string;
    business_type?: 'futures' | 'swap' | 'all';
  }): Promise<FuturesAPISuccessResponse<FuturesLastTrade, 'tick'>> {
    return this.get('/linear-swap-ex/market/trade', params);
  }

  /**
   * Get Trade History
   *
   * Batch of recent trades for a contract. No signature. Rate limit: 800/s per IP.
   */
  getLinearSwapTradeHistory(params: {
    contract_code: string;
    size: number;
  }): Promise<FuturesAPISuccessResponse<FuturesTradeHistory[]>> {
    return this.get('/linear-swap-ex/market/history/trade', params);
  }

  /**
   * Query Historical Open Interest
   *
   * Open interest over time. One of (pair+contract_type) or contract_code required. No signature.
   * Rate limit: 800/s per IP.
   */
  getLinearSwapHistoricalOpenInterest(
    params: FuturesGetHistoricalOpenInterestReq,
  ): Promise<FuturesAPISuccessResponse<FuturesHistoricalOpenInterest>> {
    return this.get('/linear-swap-api/v1/swap_his_open_interest', params);
  }

  /**
   * Get Premium Index Kline
   *
   * Premium index candlestick data. No signature. Rate limit: 800/s per IP.
   */
  getLinearSwapPremiumIndexKlines(
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
  getLinearSwapFundingRateKlines(
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
  getLinearSwapBasisData(
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
  getLinearSwapAssetValuation(params?: {
    valuation_asset?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesBalanceValuation[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_balance_valuation', {
      body: params,
    });
  }

  /**
   * Query Account Info (Isolated)
   *
   * User's isolated margin account info. Signature required. Rate limit: 144/3s per UID.
   */
  getLinearSwapIsolatedAccountInfo(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesIsolatedAccountInfo[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_account_info', {
      body: params,
    });
  }

  /**
   * Query Account Info (Cross)
   *
   * User's cross margin account info. Signature required. Rate limit: 144/3s per UID.
   */
  getLinearSwapCrossAccountInfo(params?: {
    margin_account?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCrossAccountInfo[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_account_info', {
      body: params,
    });
  }

  /**
   * Query Position Info (Isolated)
   *
   * User's isolated margin positions. Signature required. Rate limit: 144/3s per UID.
   */
  getLinearSwapIsolatedPositions(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesPositionInfo[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_position_info', {
      body: params,
    });
  }

  /**
   * Query Position Info (Cross)
   *
   * User's cross margin positions. contract_code preferred when all filled. Signature required. Rate limit: 144/3s per UID.
   */
  getLinearSwapCrossPositions(
    params?: FuturesGetCrossPositionsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesPositionInfo[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_position_info', {
      body: params,
    });
  }

  /**
   * Query Assets And Positions (Isolated)
   *
   * Combined account + positions for isolated margin. Signature required. Rate limit: 144/3s per UID.
   */
  getLinearSwapIsolatedAccountFull(params: {
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
  getLinearSwapCrossAccountFull(params: {
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
  updateLinearSwapSubPermissions(params: {
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
  getLinearSwapSubPermissions(
    params?: FuturesGetSubPermissionsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSubPermissions>> {
    return this.getPrivate('/linear-swap-api/v1/swap_sub_auth_list', params);
  }

  /**
   * Query Assets of All Sub-Accounts (Isolated)
   *
   * Assets info of all sub-accounts under master. Isolated margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getLinearSwapIsolatedSubAccounts(
    params?: FuturesGetIsolatedSubAccountsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesIsolatedSubAccountListEntry[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_sub_account_list', {
      body: params,
    });
  }

  /**
   * Query Assets of All Sub-Accounts (Cross)
   *
   * Assets info of all sub-accounts under master. Cross margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getLinearSwapCrossSubAccounts(
    params?: FuturesGetCrossSubAccountsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCrossSubAccountListEntry[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_sub_account_list', {
      body: params,
    });
  }

  /**
   * Query Batch of Sub-Account Assets (Isolated)
   *
   * Batch query sub-account assets with pagination. Isolated margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getLinearSwapIsolatedSubAccountsAssets(
    params?: FuturesGetSubAccountsAssetsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSubAccountInfoList>> {
    return this.postPrivate('/linear-swap-api/v1/swap_sub_account_info_list', {
      body: params,
    });
  }

  /**
   * Query Batch of Sub-Account Assets (Cross)
   *
   * Batch query sub-account assets with pagination. Cross margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getLinearSwapCrossSubAccountsAssets(
    params?: FuturesGetCrossSubAccountsAssetsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCrossSubAccountInfoList>> {
    return this.postPrivate(
      '/linear-swap-api/v1/swap_cross_sub_account_info_list',
      { body: params },
    );
  }

  /**
   * Query Single Sub-Account Assets (Isolated)
   *
   * Assets info for one sub-account. Isolated margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getLinearSwapIsolatedSubAccountAssets(params: {
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
  getLinearSwapCrossSubAccountAssets(params: {
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
  getLinearSwapIsolatedSubPositions(params: {
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
  getLinearSwapCrossSubPositions(
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
  getLinearSwapFinancialRecords(
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
  getLinearSwapFinancialRecordsExact(
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
  getLinearSwapIsolatedAvailableLeverage(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesAvailableLevelRate[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_available_level_rate', {
      body: params,
    });
  }

  /**
   * Query Available Leverage (Cross)
   *
   * User's available leverage per contract. Cross margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getLinearSwapCrossAvailableLeverage(
    params?: FuturesGetCrossAvailableLeverageReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCrossAvailableLevelRate[]>> {
    return this.postPrivate(
      '/linear-swap-api/v1/swap_cross_available_level_rate',
      { body: params },
    );
  }

  /**
   * Query Order Limit
   *
   * Max open/close order limits per contract for given order type. Supports cross and isolated. Signature required. Rate limit: 144/3s per UID.
   */
  getLinearSwapOrderLimit(
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
  getLinearSwapFee(
    params?: FuturesGetFeeReq,
  ): Promise<FuturesAPISuccessResponse<FuturesFee[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_fee', {
      body: params,
    });
  }

  /**
   * Query Transfer Limit (Isolated)
   *
   * Transfer in/out limits per margin account. Isolated margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getLinearSwapIsolatedTransferLimit(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesTransferLimit[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_transfer_limit', {
      body: params,
    });
  }

  /**
   * Query Transfer Limit (Cross)
   *
   * Transfer in/out limits per margin account. Cross margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getLinearSwapCrossTransferLimit(params?: {
    margin_account?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCrossTransferLimit[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_transfer_limit', {
      body: params,
    });
  }

  /**
   * Query Position Limit (Isolated)
   *
   * Max long/short position limits per contract. Isolated margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getLinearSwapIsolatedPositionLimit(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesPositionLimit[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_position_limit', {
      body: params,
    });
  }

  /**
   * Query Position Limit (Cross)
   *
   * Max long/short position limits per contract. Cross margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getLinearSwapCrossPositionLimit(
    params?: FuturesGetCrossPositionLimitReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCrossPositionLimit[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_position_limit', {
      body: params,
    });
  }

  /**
   * Query Position Limit for All Leverages (Isolated)
   *
   * Position limits per leverage per contract. Isolated margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getLinearSwapIsolatedLeverageLimits(params?: {
    contract_code?: string;
    lever_rate?: number;
  }): Promise<FuturesAPISuccessResponse<FuturesLeverPositionLimit[]>> {
    return this.postPrivate('/linear-swap-api/v1/swap_lever_position_limit', {
      body: params,
    });
  }

  /**
   * Query Position Limit for All Leverages (Cross)
   *
   * Position limits per leverage per contract. Cross margin only. Signature required. Rate limit: 144/3s per UID.
   */
  getLinearSwapCrossLeverageLimits(
    params?: FuturesGetCrossLeverageLimitsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCrossLeverPositionLimit[]>> {
    return this.postPrivate(
      '/linear-swap-api/v1/swap_cross_lever_position_limit',
      {
        body: params,
      },
    );
  }

  /**
   * Transfer Between Master and Sub Account
   *
   * Transfer asset between master and sub. Supports cross and isolated. Trade permission. Rate limit: 10/min per sub.
   */
  transferLinearSwapMasterSub(
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
  getLinearSwapMasterSubTransfers(
    params: FuturesGetMasterSubTransfersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMasterSubTransferRecords>> {
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
  transferLinearSwapInner(
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
  setLinearSwapCancelAfter(params: {
    on_off: 0 | 1;
    time_out?: number;
  }): Promise<FuturesAPISuccessResponse<FuturesCancelAfter>> {
    return this.postPrivate('/linear-swap-api/v1/linear-cancel-after', {
      body: params,
    });
  }

  /**
   * Query Trade State (Cross)
   *
   * Open/close/cancel access per contract. Cross margin only. No signature. Rate limit: 144/3s per UID.
   */
  getLinearSwapCrossTradeState(
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
  getLinearSwapCrossTransferState(params?: {
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
  updateLinearSwapIsolatedPositionMode(params: {
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
  updateLinearSwapCrossPositionMode(params: {
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
  submitLinearSwapIsolatedOrder(
    params: FuturesSubmitOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSubmitOrder>> {
    return this.postPrivate('/linear-swap-api/v1/swap_order', {
      body: { ...params, [APIIDMainKey]: APIIDMain },
    });
  }

  /**
   * Place Order (Cross)
   *
   * Place a single order. Cross margin only. One of contract_code or (pair+contract_type) required. Trade permission. Rate limit: 144/3s per UID.
   */
  submitLinearSwapCrossOrder(
    params: FuturesCrossSubmitOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSubmitOrder>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_order', {
      body: { ...params, [APIIDMainKey]: APIIDMain },
    });
  }

  /**
   * Place Batch Orders (Isolated)
   *
   * Place up to 10 orders. Isolated margin only. Trade permission. Rate limit: 144/3s per UID.
   */
  submitLinearSwapIsolatedBatchOrders(
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
  submitLinearSwapCrossBatchOrders(
    params: FuturesSubmitCrossBatchOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesBatchOrder>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_batchorder', {
      body: { ...params, [APIIDMainKey]: APIIDMain },
    });
  }

  /**
   * Cancel Order (Isolated)
   *
   * Cancel order(s) by order_id or client_order_id. Max 25 per request. Isolated margin only. Trade permission. Rate limit: 144/3s per UID.
   */
  cancelLinearSwapIsolatedOrder(
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
  cancelLinearSwapCrossOrder(
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
  cancelLinearSwapIsolatedAllOrders(
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
  cancelLinearSwapCrossAllOrders(
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
  updateLinearSwapIsolatedLeverage(params: {
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
  updateLinearSwapCrossLeverage(
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
  getLinearSwapIsolatedOrderInfo(
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
  getLinearSwapCrossOrderInfo(
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
  getLinearSwapIsolatedOrderDetail(
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
  getLinearSwapCrossOrderDetail(
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
  getLinearSwapIsolatedOpenOrders(
    params?: FuturesGetOpenOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesOpenOrders>> {
    return this.postPrivate('/linear-swap-api/v1/swap_openorders', {
      body: params,
    });
  }

  /**
   * Get Open Orders (Cross)
   *
   * Current unfilled orders. Paginated. Cross margin only. Omit all for all contracts. Read permission. Rate limit: 144/3s per UID.
   */
  getLinearSwapCrossOpenOrders(
    params?: FuturesGetCrossOpenOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesOpenOrders>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_openorders', {
      body: params,
    });
  }

  /**
   * Get History Orders (Isolated)
   *
   * Historical orders. Time-window query, 48h max. Isolated margin only. Read permission. Rate limit: 144/3s per UID.
   */
  getLinearSwapIsolatedHistoryOrders(
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
  getLinearSwapCrossHistoryOrders(
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
  getLinearSwapIsolatedHistoryOrdersExact(
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
  getLinearSwapCrossHistoryOrdersExact(
    params: FuturesGetCrossHistoryOrdersExactReq,
  ): Promise<FuturesAPISuccessResponse<FuturesHistoryOrder[]>> {
    return this.postPrivate('/linear-swap-api/v3/swap_cross_hisorders_exact', {
      body: params,
    });
  }

  /**
   * Acquire History Fills (Isolated)
   *
   * Matched trades history. One of contract or pair required. Isolated margin only. Read permission. Rate limit: 144/3s per UID.
   */
  getLinearSwapIsolatedFills(
    params: FuturesGetFillsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMatchResult[]>> {
    return this.postPrivate('/linear-swap-api/v3/swap_matchresults', {
      body: params,
    });
  }

  /**
   * Get History Fills (Cross)
   *
   * Matched trades history. One of contract or pair required. Cross margin only. Read permission. Rate limit: 144/3s per UID.
   */
  getLinearSwapCrossFills(
    params: FuturesGetCrossFillsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMatchResult[]>> {
    return this.postPrivate('/linear-swap-api/v3/swap_cross_matchresults', {
      body: params,
    });
  }

  /**
   * Get History Fills via Multiple Fields (Isolated)
   *
   * Matched trades history. Isolated margin only. Read permission. Rate limit: 144/3s per UID.
   */
  getLinearSwapIsolatedFillsExact(
    params: FuturesGetFillsExactReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMatchResult[]>> {
    return this.postPrivate('/linear-swap-api/v3/swap_matchresults_exact', {
      body: params,
    });
  }

  /**
   * Get History Fills via Multiple Fields (Cross)
   *
   * Matched trades history. Cross margin only. Read permission. Rate limit: 144/3s per UID.
   */
  getLinearSwapCrossFillsExact(
    params: FuturesGetCrossFillsExactReq,
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
  submitLinearSwapIsolatedLightningCloseOrder(
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
  submitLinearSwapCrossLightningCloseOrder(
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
  getLinearSwapIsolatedPositionMode(params: {
    margin_account: string;
  }): Promise<FuturesAPISuccessResponse<FuturesPositionSide[]>> {
    return this.getPrivate('/linear-swap-api/v1/swap_position_side', params);
  }

  /**
   * Query Position Mode (Cross)
   *
   * Returns position mode (single_side/dual_side) per margin account. Cross. Read permission. Rate limit: 144/3s per UID.
   */
  getLinearSwapCrossPositionMode(params: {
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
  submitLinearSwapIsolatedTriggerOrder(
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
  submitLinearSwapCrossTriggerOrder(
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
  cancelLinearSwapIsolatedTriggerOrder(params: {
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
  cancelLinearSwapCrossTriggerOrder(
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
  cancelLinearSwapIsolatedAllTriggerOrders(
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
  cancelLinearSwapCrossAllTriggerOrders(
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
  getLinearSwapIsolatedTriggerOpenOrders(
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
  getLinearSwapCrossTriggerOpenOrders(
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
  getLinearSwapIsolatedTriggerHistoryOrders(
    params: FuturesGetTriggerHistoryOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTriggerHistoryOrders>> {
    return this.postPrivate('/linear-swap-api/v1/swap_trigger_hisorders', {
      body: params,
    });
  }

  /**
   * [Cross] Query Trigger Order History
   *
   * Cross margin only. One of pair or contract_code required; contract_code preferred when both filled. Read permission.
   */
  getLinearSwapCrossTriggerHistoryOrders(
    params: FuturesGetCrossTriggerHistoryOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTriggerHistoryOrders>> {
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
  submitLinearSwapIsolatedTpslOrder(
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
  submitLinearSwapCrossTpslOrder(
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
  cancelLinearSwapIsolatedTpslOrder(params: {
    contract_code: string;
    order_id: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
    return this.postPrivate('/linear-swap-api/v1/swap_tpsl_cancel', {
      body: params,
    });
  }

  /**
   * [Cross] Cancel a Take-profit and Stop-loss Order
   *
   * Cross margin only. One of (pair+contract_type) or contract_code required; contract_code preferred when all filled. Trade permission. Rate limit: 5/s.
   */
  cancelLinearSwapCrossTpslOrder(
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
  cancelLinearSwapIsolatedAllTpslOrders(params: {
    contract_code: string;
    direction?: 'buy' | 'sell';
  }): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
    return this.postPrivate('/linear-swap-api/v1/swap_tpsl_cancelall', {
      body: params,
    });
  }

  /**
   * [Cross] Cancel all Take-profit and Stop-loss Orders
   *
   * Cross margin only. One of (pair+contract_type) or contract_code required; contract_code preferred when all filled. Trade permission. Rate limit: 5/s.
   */
  cancelLinearSwapCrossAllTpslOrders(
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
  getLinearSwapIsolatedTpslOpenOrders(
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
  getLinearSwapCrossTpslOpenOrders(
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
  getLinearSwapIsolatedTpslHistoryOrders(
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
  getLinearSwapCrossTpslHistoryOrders(
    params: FuturesGetCrossTpslHistoryOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTpslHisOrders>> {
    return this.postPrivate('/linear-swap-api/v1/swap_cross_tpsl_hisorders', {
      body: params,
    });
  }

  /**
   * [Isolated] Query Relation TPSL Order
   *
   * TPSL order info related to position-opening order. Isolated margin only. Read permission.
   */
  getLinearSwapIsolatedRelationTpslOrder(params: {
    contract_code: string;
    order_id: number | string;
  }): Promise<FuturesAPISuccessResponse<FuturesRelationTpslOrder>> {
    return this.postPrivate('/linear-swap-api/v1/swap_relation_tpsl_order', {
      body: params,
    });
  }

  /**
   * [Cross] Query Relation TPSL Order
   *
   * TPSL order info related to position-opening order. Cross margin only. One of pair or contract_code required. Read permission.
   */
  getLinearSwapCrossRelationTpslOrder(
    params: FuturesGetCrossRelationTpslOrderReq,
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
  submitLinearSwapIsolatedTrailingOrder(
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
  submitLinearSwapCrossTrailingOrder(
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
  cancelLinearSwapIsolatedTrailingOrder(params: {
    contract_code: string;
    order_id: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
    return this.postPrivate('/linear-swap-api/v1/swap_track_cancel', {
      body: params,
    });
  }

  /**
   * [Cross] Cancel a Trailing Order
   *
   * Cross margin only. One of (pair+contract_type) or contract_code required; contract_code preferred when all filled. Trade permission. Rate limit: 5/s.
   */
  cancelLinearSwapCrossTrailingOrder(
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
  cancelLinearSwapIsolatedAllTrailingOrders(
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
  cancelLinearSwapCrossAllTrailingOrders(
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
  getLinearSwapIsolatedTrailingOpenOrders(
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
  getLinearSwapCrossTrailingOpenOrders(
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
  getLinearSwapIsolatedTrailingHistoryOrders(
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
  getLinearSwapCrossTrailingHistoryOrders(
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
  getLinearSwapUnifiedAccountInfo(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesUnifiedAccountInfo[]>> {
    return this.getPrivate('/linear-swap-api/v3/unified_account_info', params);
  }

  /**
   * Deductible asset inquiry (linear swap overview account info)
   *
   * Total account assets of U-margin contract unified account. Read permission.
   */
  getLinearSwapUnifiedAssets(params?: {
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
  updateLinearSwapUnifiedFeeMethod(params: {
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
  getLinearSwapUnifiedMarginAdjustments(
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
   * Increase or decrease isolated margin. Query margin_available (increase) and withdraw_available (reduce) via getLinearSwapUnifiedAccountInfo. Trade permission.
   */
  updateLinearSwapUnifiedMargin(
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
      body: params,
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
  getMultiAssetPositions(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesV5Position[]>> {
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
  updateMultiAssetPositionMode(params: {
    position_mode: 'single_side' | 'dual_side';
  }): Promise<FuturesAPISuccessResponse<FuturesV5PositionModeResp>> {
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
  getMultiAssetRiskLimitTiers(params: {
    contract_code: string;
    margin_mode?: 'cross' | 'isolated';
  }): Promise<FuturesAPISuccessResponse<FuturesV5RiskLimitTierEntry[]>> {
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
  getCoinMDeliveryAdjustFactor(params?: {
    symbol?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryAdjustFactor[]>> {
    return this.get('/api/v1/contract_adjustfactor', params);
  }

  /**
   * Query Historical Open Interest (CM)
   *
   * Get historical open interest. No signature. Rate limit: 120/3s per IP.
   */
  getCoinMDeliveryHistoricalOpenInterest(
    params: FuturesCmDeliveryOpenInterestReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryOpenInterest>> {
    return this.get('/api/v1/contract_his_open_interest', params);
  }

  /**
   * Query Tiered Margin (CM)
   *
   * Get tiered margin by leverage. No signature. Rate limit: 120/3s per IP.
   */
  getCoinMDeliveryTieredMargin(params?: {
    symbol?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryLadderMargin[]>> {
    return this.get('/api/v1/contract_ladder_margin', params);
  }

  /**
   * Query Top Trader Sentiment - Account (CM)
   *
   * Net long/short accounts ratio. No signature. Rate limit: 120/3s per IP.
   */
  getCoinMDeliveryAccountRatio(params: {
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
  getCoinMDeliveryPositionRatio(params: {
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
  getCoinMDeliveryLiquidationOrders(
    params: FuturesCmDeliveryLiquidationOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryLiquidationOrder[]>> {
    return this.get('/api/v3/contract_liquidation_orders', params);
  }

  /**
   * Query Settlement Records (CM)
   *
   * Historical settlement records. No signature. Rate limit: 120/3s per IP.
   */
  getCoinMDeliverySettlementRecords(
    params: FuturesCmDeliverySettlementRecordsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliverySettlementRecords>> {
    return this.get('/api/v1/contract_settlement_records', params);
  }

  /**
   * Query Risk Reserve Balance (CM)
   *
   * Total risk funds for all business lines, priced in USDT. No signature.
   */
  getCoinMDeliveryRiskReserveBalance(): Promise<
    FuturesAPISuccessResponse<FuturesInsuranceFundInfo>
  > {
    return this.get('/v1/insurance_fund_info');
  }

  /**
   * Query Historical Risk Reserves (CM)
   *
   * Historical risk fund data by day. No signature.
   */
  getCoinMDeliveryRiskReserveHistory(
    params?: FuturesCmDeliveryRiskReserveHistoryReq,
  ): Promise<FuturesAPISuccessResponse<FuturesInsuranceFundHistory[]>> {
    return this.get('/v1/insurance_fund_history', params);
  }

  /**
   * Get Contract Price Limit (CM)
   *
   * Highest/lowest price limits. No signature. Rate limit: 120/3s per IP.
   */
  getCoinMDeliveryContractLimit(
    params?: FuturesCmDeliveryContractLimitReq,
  ): Promise<FuturesAPISuccessResponse<FuturesPriceLimit[]>> {
    return this.get('/api/v1/contract_price_limit', params);
  }

  /**
   * Get Open Interest (CM)
   *
   * Current open interest and 24h trading volume. No signature. Rate limit: 120/3s per IP.
   */
  getCoinMDeliveryOpenInterest(
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
  getCoinMDeliveryDeliveryPrice(params: {
    symbol: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryDeliveryPrice>> {
    return this.get('/api/v1/contract_delivery_price', params);
  }

  /**
   * Get Estimated Settlement Price (CM)
   *
   * Current-period estimated settlement/delivery price. Updated every 6s within 1h of settlement. No signature. Rate limit: 120/3s per IP.
   */
  getCoinMDeliveryEstimatedSettlementPrice(params?: {
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
  getCoinMDeliverySystemStatus(params?: {
    symbol?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryApiState[]>> {
    return this.get('/api/v1/contract_api_state', params);
  }

  /**
   * Get Contract Info (CM)
   *
   * Contract metadata (size, tick, dates, status). No signature. Rate limit: 120/3s per IP.
   */
  getCoinMDeliveryContractInfo(
    params?: FuturesCmDeliveryContractInfoReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryContractInfo[]>> {
    return this.get('/api/v1/contract_contract_info', params);
  }

  /**
   * Get Index Price (CM)
   *
   * Index price for symbol(s). No signature. Rate limit: 120/3s per IP.
   */
  getCoinMDeliveryIndexPrice(params?: {
    symbol?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesIndexPrice[]>> {
    return this.get('/api/v1/contract_index', params);
  }

  /**
   * Get Index Components (CM)
   *
   * Index constituent/exchange data. No signature.
   */
  getCoinMDeliveryIndexConstituents(params: {
    symbol: string;
  }): Promise<FuturesAPISuccessResponse<FuturesIndexConstituents>> {
    return this.get('/api/market/contract_constituents', params);
  }

  /**
   * Get Contract Elements (CM)
   *
   * Contract elements (limits, face value, etc). No signature.
   */
  getCoinMDeliveryContractElements(params?: {
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
  getCoinMDeliveryMarketDepth(params: {
    symbol: string;
    type: string;
  }): Promise<FuturesAPISuccessResponse<FuturesMarketDepthTick, 'tick'>> {
    return this.get('/market/depth', params);
  }

  /**
   * Get Market BBO (CM)
   *
   * Best bid/offer. Omit symbol for all. No signature. Rate limit: 800/s per IP.
   */
  getCoinMDeliveryMarketBbo(params?: {
    symbol?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesBboTick[], 'ticks'>> {
    return this.get('/market/bbo', params);
  }

  /**
   * Get Kline Data (CM)
   *
   * Candlestick data. Either size or (from+to) required. No signature. Rate limit: 800/s per IP.
   */
  getCoinMDeliveryKlines(
    params: FuturesCmDeliveryKlinesReq,
  ): Promise<FuturesAPISuccessResponse<FuturesKline[]>> {
    return this.get('/market/history/kline', params);
  }

  /**
   * Get Mark Klines (CM)
   *
   * Mark price candlestick data. No signature. Rate limit: 800/s per IP.
   */
  getCoinMDeliveryMarkKlines(
    params: FuturesCmDeliveryMarkPriceKlinesReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMarkPriceKline[]>> {
    return this.get('/index/market/history/mark_price_kline', params);
  }

  /**
   * Get Ticker (CM)
   *
   * 24h ticker + best bid/ask for one contract. symbol required. No signature. Rate limit: 800/s per IP.
   */
  getCoinMDeliveryTicker(params: {
    symbol: string;
  }): Promise<FuturesAPISuccessResponse<FuturesTicker, 'tick'>> {
    return this.get('/market/detail/merged', params);
  }

  /**
   * Get Tickers (CM V2)
   *
   * 24h tickers + best bid/ask for one or all contracts. Omit symbol for all. No signature. Rate limit: 800/s per IP. Data updated every 50ms.
   */
  getCoinMDeliveryTickers(params?: {
    symbol?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesTicker[], 'ticks'>> {
    return this.get('/v2/market/detail/batch_merged', params);
  }

  /**
   * Get Last Trade (CM)
   *
   * Latest trade for a contract. Omit symbol for all. No signature. Rate limit: 800/s per IP.
   */
  getCoinMDeliveryLastTrade(params?: {
    symbol?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesLastTrade, 'tick'>> {
    return this.get('/market/trade', params);
  }

  /**
   * Get Trade History (CM)
   *
   * Batch of recent trades for a contract. symbol and size required. No signature. Rate limit: 800/s per IP.
   */
  getCoinMDeliveryTradeHistory(params: {
    symbol: string;
    size: number;
  }): Promise<FuturesAPISuccessResponse<FuturesTradeHistory[]>> {
    return this.get('/market/history/trade', params);
  }

  /**
   * Get Index Kline Data (CM)
   *
   * Index price candlestick data. vol/count/amount typically 0. No signature. Rate limit: 800/s per IP.
   */
  getCoinMDeliveryIndexKlines(
    params: FuturesCmDeliveryIndexKlinesReq,
  ): Promise<FuturesAPISuccessResponse<FuturesKline[]>> {
    return this.get('/index/market/history/index', params);
  }

  /**
   * Get Basis Data (CM)
   *
   * Basis (contract - index) kline. basis_price_type defaults to open. No signature. Rate limit: 800/s per IP. Max 2000 per request.
   */
  getCoinMDeliveryBasisData(
    params: FuturesCmDeliveryBasisDataReq,
  ): Promise<FuturesAPISuccessResponse<FuturesBasis[]>> {
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
  getCoinMDeliveryAssetValuation(params?: {
    valuation_asset?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesBalanceValuation[]>> {
    return this.postPrivate('/api/v1/contract_balance_valuation', {
      body: params,
    });
  }

  /**
   * Query Account Info (CM)
   *
   * User's account info per symbol. Omit symbol for all. Signature required. Rate limit: 72/3s per UID.
   */
  getCoinMDeliveryAccountInfo(params?: {
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
  getCoinMDeliveryPositionInfo(params?: {
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
  updateCoinMDeliverySubPermissions(params: {
    sub_uid: string;
    sub_auth: 0 | 1;
  }): Promise<FuturesAPISuccessResponse<FuturesSubAuth>> {
    return this.postPrivate('/api/v1/contract_sub_auth', {
      body: params,
    });
  }

  /**
   * Query Sub-Account Trading Permissions (CM)
   *
   * List sub-accounts and their trading permission status. Signature required. Rate limit: 144/3s per UID.
   */
  getCoinMDeliverySubPermissions(
    params?: FuturesCmDeliverySubPermissionsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSubPermissions>> {
    return this.getPrivate('/api/v1/contract_sub_auth_list', params);
  }

  /**
   * Query Assets of All Sub-Accounts (CM)
   *
   * Assets info of all sub-accounts under master. Only returns activated contract sub-accounts. Signature required. Rate limit: 72/3s per UID.
   */
  getCoinMDeliverySubAccounts(
    params?: FuturesCmDeliverySubAccountListReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryAllSubAccount[]>> {
    return this.postPrivate('/api/v1/contract_sub_account_list', {
      body: params,
    });
  }

  /**
   * Query Batch of Sub-Account Assets (CM)
   *
   * Paginated batch of sub-account assets. Only activated sub-accounts. Signature required. Rate limit: 72/3s per UID.
   */
  getCoinMDeliverySubAccountsAssets(
    params?: FuturesCmDeliverySubAccountInfoListReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliverySubAccountsAssets>> {
    return this.postPrivate('/api/v1/contract_sub_account_info_list', {
      body: params,
    });
  }

  /**
   * Query Single Sub-Account Assets (CM)
   *
   * Assets info for one sub-account. sub_uid required. Only activated sub-accounts. Signature required. Rate limit: 72/3s per UID.
   */
  getCoinMDeliverySubAccountAssets(params: {
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
  getCoinMDeliverySubPositionInfo(params: {
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
  getCoinMDeliveryFinancialRecords(
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
  getCoinMDeliveryFinancialRecordsExact(
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
  getCoinMDeliveryUserSettlementRecords(
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
  getCoinMDeliveryOrderLimit(
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
  getCoinMDeliveryFee(params?: {
    symbol?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryFee[]>> {
    return this.postPrivate('/api/v1/contract_fee', {
      body: params,
    });
  }

  /**
   * Query Transfer Limit (CM)
   *
   * Transfer in/out limits per symbol. Omit symbol for all. Signature required. Rate limit: 72/3s per UID.
   */
  getCoinMDeliveryTransferLimit(params?: {
    symbol?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryTransferLimit[]>> {
    return this.postPrivate('/api/v1/contract_transfer_limit', {
      body: params,
    });
  }

  /**
   * Query Position Limit (CM)
   *
   * Max long/short position limits per contract type. Omit symbol for all. Signature required. Rate limit: 72/3s per UID.
   */
  getCoinMDeliveryPositionLimit(params?: {
    symbol?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryPositionLimit[]>> {
    return this.postPrivate('/api/v1/contract_position_limit', {
      body: params,
    });
  }

  /**
   * Query Assets And Positions (CM)
   *
   * Combined account + positions for symbol. symbol required. Signature required. Rate limit: 72/3s per UID.
   */
  getCoinMDeliveryAccountFull(params: {
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
  transferCoinMDeliveryMasterSub(
    params: FuturesCmDeliveryMasterSubTransferReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMasterSubTransfer>> {
    return this.postPrivate('/api/v1/contract_master_sub_transfer', {
      body: params,
    });
  }

  /**
   * Query Master-Sub Transfer Records (CM)
   *
   * Transfer history between master and sub accounts. symbol and create_date required. Signature required. Rate limit: 72/3s per UID.
   */
  getCoinMDeliveryMasterSubTransfers(
    params: FuturesCmDeliveryMasterSubTransferRecordReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMasterSubTransferRecords>> {
    return this.postPrivate('/api/v1/contract_master_sub_transfer_record', {
      body: params,
    });
  }

  /**
   * Query API Trading Status (CM)
   *
   * User's API indicator disable information (COR, TDN). No params. Signature required. Rate limit: 72/3s per UID.
   */
  getCoinMDeliveryApiStatus(): Promise<
    FuturesAPISuccessResponse<FuturesCmDeliveryApiTradingStatus[]>
  > {
    return this.getPrivate('/api/v1/contract_api_trading_status');
  }

  /**
   * Query Available Leverage Rate (CM)
   *
   * Available leverage rates per symbol. Omit symbol for all. Signature required. Rate limit: 72/3s per UID.
   */
  getCoinMDeliveryAvailableLeverage(params?: {
    symbol?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryLeverageRate[]>> {
    return this.postPrivate('/api/v1/contract_available_level_rate', {
      body: params,
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
  setCoinMDeliveryCancelAfter(params: {
    on_off: 0 | 1;
    time_out?: number;
  }): Promise<FuturesAPISuccessResponse<FuturesCancelAfter>> {
    return this.postPrivate('/api/v1/contract-cancel-after', {
      body: params,
    });
  }

  /**
   * Place an Order (Future Trade)
   *
   * Place order for delivery futures (weekly/quarterly). One of contract_code or (symbol+contract_type). Trade permission. Rate limit: 36/3s per UID.
   */
  submitCoinMDeliveryOrder(
    params: FuturesCmDeliverySubmitOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSubmitOrder>> {
    return this.postPrivate('/api/v1/contract_order', {
      body: { ...params, [APIIDMainKey]: APIIDMain },
    });
  }

  /**
   * Place a Batch of Orders (Future Trade)
   *
   * Place up to 25 orders for delivery futures. Trade permission. Rate limit: 36/3s per UID.
   */
  submitCoinMDeliveryBatchOrders(
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
  cancelCoinMDeliveryOrder(
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
  cancelCoinMDeliveryAllOrders(
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
  updateCoinMDeliveryLeverage(params: {
    symbol: string;
    lever_rate: number;
  }): Promise<FuturesAPISuccessResponse<FuturesCmDeliverySwitchLeverRate>> {
    return this.postPrivate('/api/v1/contract_switch_lever_rate', {
      body: params,
    });
  }

  /**
   * Get Information of an Order (Future Trade)
   *
   * Query order(s) by order_id or client_order_id. Max 50 per request. Symbol required. Read permission. Rate limit: 72/3s per UID.
   */
  getCoinMDeliveryOrderInfo(
    params: FuturesCmDeliveryGetOrderInfoReq,
  ): Promise<FuturesAPISuccessResponse<FuturesOrderInfo[]>> {
    return this.postPrivate('/api/v1/contract_order_info', {
      body: params,
    });
  }

  /**
   * Order Details Acquisition (Future Trade)
   *
   * Get order detail with trades. symbol, order_id, created_at, order_type required. Read permission. Rate limit: 72/3s per UID.
   */
  getCoinMDeliveryOrderDetail(
    params: FuturesCmDeliveryGetOrderDetailReq,
  ): Promise<FuturesAPISuccessResponse<FuturesOrderDetail>> {
    return this.postPrivate('/api/v1/contract_order_detail', {
      body: params,
    });
  }

  /**
   * Query Open Orders (Future Trade)
   *
   * Get open orders. Omit symbol for all. Read permission. Rate limit: 72/3s per UID.
   */
  getCoinMDeliveryOpenOrders(
    params?: FuturesCmDeliveryGetOpenOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmDeliveryOpenOrders>> {
    return this.postPrivate('/api/v1/contract_openorders', {
      body: params,
    });
  }

  /**
   * Get History Orders (Future Trade, v3)
   *
   * History orders. symbol, trade_type, type, status required. Window max 48h, within 90 days. Read permission. Rate limit: 72/3s per UID.
   */
  getCoinMDeliveryHistoryOrders(
    params: FuturesCmDeliveryGetHistoryOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesHistoryOrder[]>> {
    return this.postPrivate('/api/v3/contract_hisorders', {
      body: params,
    });
  }

  /**
   * Query History Orders via Multiple Fields (Future Trade, v3)
   *
   * History orders with type filter. symbol, trade_type, type, status required. Window max 48h, within 90 days. Read permission. Rate limit: 72/3s per UID.
   */
  getCoinMDeliveryHistoryOrdersExact(
    params: FuturesCmDeliveryGetHistoryOrdersExactReq,
  ): Promise<FuturesAPISuccessResponse<FuturesHistoryOrder[]>> {
    return this.postPrivate('/api/v3/contract_hisorders_exact', {
      body: params,
    });
  }

  /**
   * Get History Match Results (Future Trade, v3)
   *
   * Match/fill history. symbol, contract, trade_type required. Window max 48h, within 90 days. Read permission. Rate limit: 72/3s per UID.
   */
  getCoinMDeliveryFills(
    params: FuturesCmDeliveryGetFillsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMatchResult[]>> {
    return this.postPrivate('/api/v3/contract_matchresults', {
      body: params,
    });
  }

  /**
   * Query History Match Results via Multiple Fields (Future Trade, v3)
   *
   * Match/fill history with flexible filters. symbol, trade_type required. Within 90 days. Read permission. Rate limit: 72/3s per UID.
   */
  getCoinMDeliveryFillsExact(
    params: FuturesCmDeliveryGetFillsExactReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMatchResult[]>> {
    return this.postPrivate('/api/v3/contract_matchresults_exact', {
      body: params,
    });
  }

  /**
   * Place Lightning Close Order (Future Trade)
   *
   * Lightning close position. One of contract_code or (symbol+contract_type). volume, direction required. Trade permission. Rate limit: 36/3s per UID.
   */
  submitCoinMDeliveryLightningCloseOrder(
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
  submitCoinMDeliveryTriggerOrder(
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
  cancelCoinMDeliveryTriggerOrder(params: {
    symbol: string;
    order_id: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
    return this.postPrivate('/api/v1/contract_trigger_cancel', {
      body: params,
    });
  }

  /**
   * Cancel All Trigger Orders (Future Trade)
   *
   * Cancel all trigger orders. symbol required. Optional contract_code, contract_type, direction, offset. Trade permission. Rate limit: 5/s.
   */
  cancelCoinMDeliveryAllTriggerOrders(
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
  getCoinMDeliveryTriggerOpenOrders(
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
  getCoinMDeliveryTriggerHistoryOrders(
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
  submitCoinMDeliveryTpslOrder(
    params: FuturesCmDeliverySubmitTpslOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTpslOrder>> {
    return this.postPrivate('/api/v1/contract_tpsl_order', {
      body: params,
    });
  }

  /**
   * Cancel Take-profit and Stop-loss Order (Future Trade)
   *
   * Cancel TPSL by order_id. Max 10 per request. Symbol required. Trade permission. Rate limit: 5/s.
   */
  cancelCoinMDeliveryTpslOrder(params: {
    symbol: string;
    order_id: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
    return this.postPrivate('/api/v1/contract_tpsl_cancel', {
      body: params,
    });
  }

  /**
   * Cancel All Take-profit and Stop-loss Orders (Future Trade)
   *
   * Cancel all TPSL. One of: symbol, contract_code, or (symbol+contract_type). Optional direction. Trade permission. Rate limit: 5/s.
   */
  cancelCoinMDeliveryAllTpslOrders(
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
  getCoinMDeliveryTpslOpenOrders(
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
  getCoinMDeliveryTpslHistoryOrders(
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
  getCoinMDeliveryRelationTpslOrder(params: {
    symbol: string;
    order_id: number | string;
  }): Promise<FuturesAPISuccessResponse<FuturesRelationTpslOrder>> {
    return this.postPrivate('/api/v1/contract_relation_tpsl_order', {
      body: params,
    });
  }

  /**
   * Place Trailing Order (Future Trade)
   *
   * Submit trailing order. One of contract_code or (symbol+contract_type). lever_rate required when open. Trade permission. Rate limit: 5/s.
   */
  submitCoinMDeliveryTrailingOrder(
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
  cancelCoinMDeliveryTrailingOrder(params: {
    symbol: string;
    order_id: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
    return this.postPrivate('/api/v1/contract_track_cancel', {
      body: params,
    });
  }

  /**
   * Cancel All Trailing Orders (Future Trade)
   *
   * Cancel all trailing orders. symbol required. Optional contract_code, contract_type, direction, offset. Trade permission. Rate limit: 5/s.
   */
  cancelCoinMDeliveryAllTrailingOrders(
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
  getCoinMDeliveryTrailingOpenOrders(
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
  getCoinMDeliveryTrailingHistoryOrders(
    params: FuturesCmDeliveryGetTrailingHistoryOrdersReq,
  ): Promise<
    FuturesAPISuccessResponse<FuturesCmDeliveryTrailingHistoryOrders>
  > {
    return this.postPrivate('/api/v1/contract_track_hisorders', {
      body: params,
    });
  }

  /**
   *
   * Coin-M Perpetual - Reference Data
   *
   */

  /**
   * Query Tiered Adjustment Factor (CMPerp)
   *
   * Adjustment factor by leverage tier. No signature. Omit contract_code for all.
   */
  getCoinMPerpAdjustFactor(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmPerpAdjustFactor[]>> {
    return this.get('/swap-api/v1/swap_adjustfactor', params);
  }

  /**
   * Query Historical Open Interest (CMPerp)
   *
   * Open interest by period. No signature.
   */
  getCoinMPerpHistoricalOpenInterest(
    params: FuturesCmPerpGetOpenInterestReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmPerpOpenInterest>> {
    return this.get('/swap-api/v1/swap_his_open_interest', params);
  }

  /**
   * Query Tiered Margin (CMPerp)
   *
   * Tiered margin by leverage. No signature. Omit contract_code for all.
   */
  getCoinMPerpTieredMargin(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmPerpTieredMargin[]>> {
    return this.get('/swap-api/v1/swap_ladder_margin', params);
  }

  /**
   * Query Top Trader Sentiment - Account (CMPerp)
   *
   * Net long/short accounts ratio. No signature.
   */
  getCoinMPerpAccountRatio(params: {
    contract_code: string;
    period: '5min' | '15min' | '30min' | '60min' | '4hour' | '1day';
  }): Promise<FuturesAPISuccessResponse<FuturesCmPerpAccountRatio>> {
    return this.get('/swap-api/v1/swap_elite_account_ratio', params);
  }

  /**
   * Query Top Trader Sentiment - Position (CMPerp)
   *
   * Net long/short position ratio. No signature.
   */
  getCoinMPerpPositionRatio(params: {
    contract_code: string;
    period: '5min' | '15min' | '30min' | '60min' | '4hour' | '1day';
  }): Promise<FuturesAPISuccessResponse<FuturesCmPerpPositionRatio>> {
    return this.get('/swap-api/v1/swap_elite_position_ratio', params);
  }

  /**
   * Get Estimated Settlement Price (CMPerp)
   *
   * Current-period estimated settlement/delivery price. No signature. Omit contract_code for all.
   */
  getCoinMPerpEstimatedSettlementPrice(params?: {
    contract_code?: string;
  }): Promise<
    FuturesAPISuccessResponse<FuturesCmPerpEstimatedSettlementPrice[]>
  > {
    return this.get('/swap-api/v1/swap_estimated_settlement_price', params);
  }

  /**
   * Query System Status (CMPerp)
   *
   * Open/close/cancel/transfer access per contract. No signature. Omit contract_code for all.
   */
  getCoinMPerpSystemStatus(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmPerpSystemStatus[]>> {
    return this.get('/swap-api/v1/swap_api_state', params);
  }

  /**
   * Query Funding Rate (CMPerp)
   *
   * Current funding rate for contract. No signature.
   */
  getCoinMPerpFundingRate(params: {
    contract_code: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmPerpFundingRate>> {
    return this.get('/swap-api/v1/swap_funding_rate', params);
  }

  /**
   * Query Batch Funding Rate (CMPerp)
   *
   * Funding rates for multiple contracts. No signature. Omit contract_code for all.
   */
  getCoinMPerpFundingRates(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmPerpFundingRate[]>> {
    return this.get('/swap-api/v1/swap_batch_funding_rate', params);
  }

  /**
   * Query Historical Funding Rate (CMPerp)
   *
   * Paginated historical funding rates. No signature.
   */
  getCoinMPerpHistoricalFundingRate(
    params: FuturesCmPerpHistoricalFundingRateReq,
  ): Promise<
    FuturesAPISuccessResponse<FuturesCmPerpHistoricalFundingRatePage>
  > {
    return this.get('/swap-api/v1/swap_historical_funding_rate', params);
  }

  /**
   * Query Liquidation Orders (CMPerp)
   *
   * GET /swap-api/v3/swap_liquidation_orders. trade_type: 0=fully filled, 5=liquidated close, 6=liquidated open. No signature.
   */
  getCoinMPerpLiquidationOrders(
    params: FuturesCmPerpLiquidationOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmPerpLiquidationOrder[]>> {
    return this.get('/swap-api/v3/swap_liquidation_orders', params);
  }

  /**
   * Query Settlement Records (CMPerp)
   *
   * Historical settlement records for platform. No signature.
   */
  getCoinMPerpSettlementRecords(
    params: FuturesCmPerpSettlementRecordsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmPerpSettlementRecordsPage>> {
    return this.get('/swap-api/v1/swap_settlement_records', params);
  }

  /**
   * Query Swap Info (CMPerp)
   *
   * Contract metadata (size, tick, dates, status). No signature. Omit contract_code for all.
   */
  getCoinMPerpContractInfo(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmPerpContractInfo[]>> {
    return this.get('/swap-api/v1/swap_contract_info', params);
  }

  /**
   * Query Swap Index Price (CMPerp)
   *
   * Index price and timestamp per contract. No signature. Omit contract_code for all.
   */
  getCoinMPerpIndexPrice(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesIndexPrice[]>> {
    return this.get('/swap-api/v1/swap_index', params);
  }

  /**
   * Query Contract Elements (CMPerp)
   *
   * Contract elements (limits, ticks, contract_infos). No signature. Rate limit: 144/3s per UID.
   */
  getCoinMPerpContractElements(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmPerpContractElements[]>> {
    return this.get('/swap-api/v1/swap_query_elements', params);
  }

  /**
   * Get Index Constituents (CMPerp)
   *
   * Index component info (exchange, symbol, weights, prices). No signature. Rate limit: 144/3s per UID.
   */
  getCoinMPerpIndexConstituents(params: {
    contract_code: string;
  }): Promise<FuturesAPISuccessResponse<FuturesIndexConstituents>> {
    return this.get('/swap-api/market/swap_constituents', params);
  }

  /**
   * Query Risk Reserve Balance (CMPerp)
   *
   * Total risk funds for all business lines, priced in USDT. No signature. Rate limit: 144/3s per UID.
   */
  getCoinMPerpRiskReserveBalance(): Promise<
    FuturesAPISuccessResponse<FuturesInsuranceFundInfo>
  > {
    return this.get('/v1/insurance_fund_info');
  }

  /**
   * Query Historical Risk Reserves (CMPerp)
   *
   * Historical risk fund data by day. No signature. Rate limit: 144/3s per UID.
   */
  getCoinMPerpRiskReserveHistory(
    params?: FuturesCmPerpRiskReserveHistoryReq,
  ): Promise<FuturesAPISuccessResponse<FuturesInsuranceFundHistory[]>> {
    return this.get('/v1/insurance_fund_history', params);
  }

  /**
   * Query Price Limitation (CMPerp)
   *
   * Highest buying and lowest selling price per contract. No signature. Omit contract_code for all.
   */
  getCoinMPerpPriceLimit(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesPriceLimit[]>> {
    return this.get('/swap-api/v1/swap_price_limit', params);
  }

  /**
   * Get Open Interest (CMPerp)
   *
   * Current position quantity and 24h trading volume per contract. No signature. Omit contract_code for all.
   */
  getCoinMPerpOpenInterest(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmPerpOpenInterestCurrent[]>> {
    return this.get('/swap-api/v1/swap_open_interest', params);
  }

  /**
   *
   * Coin-M Perpetual - Market Data
   *
   */

  /**
   * Get Market Depth (CMPerp)
   *
   * Order book (asks/bids). type: step0=raw 150 levels; step1-5,14-17=merged 150; step6=raw 20/30; step7-13,18-19=merged 20/30. No signature. Rate limit: 800/s per IP.
   */
  getCoinMPerpMarketDepth(params: {
    contract_code: string;
    type: string;
  }): Promise<FuturesAPISuccessResponse<FuturesMarketDepthTick, 'tick'>> {
    return this.get('/swap-ex/market/depth', params);
  }

  /**
   * Get Market BBO (CMPerp)
   *
   * Best bid/offer. Omit contract_code for all. No signature. Rate limit: 800/s per IP.
   */
  getCoinMPerpMarketBbo(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesBboTick[], 'ticks'>> {
    return this.get('/swap-ex/market/bbo', params);
  }

  /**
   * Get Kline Data (CMPerp)
   *
   * Candlestick data. Either size or (from+to) required. No signature. Rate limit: 800/s per IP.
   */
  getCoinMPerpKlines(
    params: FuturesCmPerpKlinesReq,
  ): Promise<FuturesAPISuccessResponse<FuturesKline[]>> {
    return this.get('/swap-ex/market/history/kline', params);
  }

  /**
   * Get Mark Klines (CMPerp)
   *
   * Mark price candlestick data. No signature. Rate limit: 800/s per IP.
   */
  getCoinMPerpMarkKlines(
    params: FuturesCmPerpMarkPriceKlinesReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMarkPriceKline[]>> {
    return this.get('/index/market/history/swap_mark_price_kline', params);
  }

  /**
   * Get Ticker (CMPerp)
   *
   * 24h ticker + best bid/ask for one contract. No signature. Rate limit: 800/s per IP.
   */
  getCoinMPerpTicker(params: {
    contract_code: string;
  }): Promise<FuturesAPISuccessResponse<FuturesTicker, 'tick'>> {
    return this.get('/swap-ex/market/detail/merged', params);
  }

  /**
   * Get Tickers (CMPerp V2)
   *
   * 24h tickers + best bid/ask for one or all contracts. Omit contract_code for all. No signature. Data updated every 50ms.
   */
  getCoinMPerpTickers(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesTicker[], 'ticks'>> {
    return this.get('/v2/swap-ex/market/detail/batch_merged', params);
  }

  /**
   * Get Last Trade (CMPerp)
   *
   * Latest trade for a contract. Omit contract_code for all. No signature. Rate limit: 800/s per IP.
   */
  getCoinMPerpLastTrade(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesLastTrade, 'tick'>> {
    return this.get('/swap-ex/market/trade', params);
  }

  /**
   * Get Trade History (CMPerp)
   *
   * Batch of trade records for a contract. No signature. Rate limit: 800/s per IP.
   */
  getCoinMPerpTradeHistory(params: {
    contract_code: string;
    size: number;
  }): Promise<FuturesAPISuccessResponse<FuturesTradeHistory[]>> {
    return this.get('/swap-ex/market/history/trade', params);
  }

  /**
   * Get Premium Index Kline (CMPerp)
   *
   * Premium index candlestick data. No signature. Rate limit: 800/s per IP.
   */
  getCoinMPerpPremiumIndexKlines(
    params: FuturesCmPerpPremiumIndexKlinesReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMarkPriceKline[]>> {
    return this.get('/index/market/history/swap_premium_index_kline', params);
  }

  /**
   * Get Estimated Funding Rate Kline (CMPerp)
   *
   * Estimated funding rate candlestick data. No signature. Rate limit: 800/s per IP.
   */
  getCoinMPerpFundingRateKlines(
    params: FuturesCmPerpFundingRateKlinesReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMarkPriceKline[]>> {
    return this.get('/index/market/history/swap_estimated_rate_kline', params);
  }

  /**
   * Get Basis Data (CMPerp)
   *
   * Basis (contract - index) kline data. basis_price_type default: open. No signature. Rate limit: 800/s per IP.
   */
  getCoinMPerpBasisData(
    params: FuturesCmPerpBasisDataReq,
  ): Promise<FuturesAPISuccessResponse<FuturesBasis[]>> {
    return this.get('/index/market/history/swap_basis', params);
  }

  /**
   *
   * Coin-M Perpetual - Account
   *
   */

  /**
   * Query Asset Valuation (CMPerp)
   *
   * Total asset valuation in fiat. valuation_asset optional, defaults to BTC. Signature required. Rate limit: 72/3s per UID.
   */
  getCoinMPerpAssetValuation(params?: {
    valuation_asset?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesBalanceValuation[]>> {
    return this.postPrivate('/swap-api/v1/swap_balance_valuation', {
      body: params,
    });
  }

  /**
   * Query Account Info (CMPerp)
   *
   * User's account info per contract. Omit contract_code for all. Signature required. Rate limit: 72/3s per UID.
   */
  getCoinMPerpAccountInfo(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmPerpAccountInfo[]>> {
    return this.postPrivate('/swap-api/v1/swap_account_info', {
      body: params,
    });
  }

  /**
   * Query Position Info (CMPerp)
   *
   * User's positions. Omit contract_code for all. Signature required. Rate limit: 72/3s per UID. Query with contract_code to avoid 1080 when contracts in settlement.
   */
  getCoinMPerpPositionInfo(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmPerpPositionInfo[]>> {
    return this.postPrivate('/swap-api/v1/swap_position_info', {
      body: params,
    });
  }

  /**
   * Query Assets And Positions (CMPerp)
   *
   * Combined account + positions for contract. Signature required. Rate limit: 144/3s per UID.
   */
  getCoinMPerpAccountFull(params: {
    contract_code: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmPerpAccountFull[]>> {
    return this.postPrivate('/swap-api/v1/swap_account_position_info', {
      body: params,
    });
  }

  /**
   * Query Sub-Account Trading Permissions (CMPerp)
   *
   * List sub-accounts and their trading permission status. Signature required. Rate limit: 144/3s per UID.
   */
  getCoinMPerpSubPermissions(
    params?: FuturesCmPerpSubPermissionsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSubPermissions>> {
    return this.getPrivate('/swap-api/v1/swap_sub_auth_list', params);
  }

  /**
   * Set Sub-Account Trading Permissions (CMPerp)
   *
   * Enable/disable trading for sub-accounts. Max 10 sub UIDs per request. Signature required. Trade permission.
   */
  updateCoinMPerpSubPermissions(params: {
    sub_uid: string;
    sub_auth: 0 | 1;
  }): Promise<FuturesAPISuccessResponse<FuturesCmPerpUpdateSubPermissions>> {
    return this.postPrivate('/swap-api/v1/swap_sub_auth', {
      body: params,
    });
  }

  /**
   * Query Assets of All Sub-Accounts (CMPerp)
   *
   * Assets info of all sub-accounts under master. Signature required. Rate limit: 72/3s per UID.
   */
  getCoinMPerpSubAccounts(
    params?: FuturesCmPerpSubAccountsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmPerpSubAccounts[]>> {
    return this.postPrivate('/swap-api/v1/swap_sub_account_list', {
      body: params,
    });
  }

  /**
   * Query Batch of Sub-Account Assets (CMPerp)
   *
   * Batch query sub-account assets with pagination. Signature required. Rate limit: 72/3s per UID.
   */
  getCoinMPerpSubAccountsAssets(
    params?: FuturesCmPerpSubAccountsAssetsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmPerpSubAccountsAssets>> {
    return this.postPrivate('/swap-api/v1/swap_sub_account_info_list', {
      body: params,
    });
  }

  /**
   * Query Single Sub-Account Assets (CMPerp)
   *
   * Assets info of a single sub-account. Signature required. Rate limit: 72/3s per UID.
   */
  getCoinMPerpSubAccountAssets(params: {
    sub_uid: number;
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmPerpSubAccountAssets[]>> {
    return this.postPrivate('/swap-api/v1/swap_sub_account_info', {
      body: params,
    });
  }

  /**
   * Query Single Sub-Account Positions (CMPerp)
   *
   * Position info of a single sub-account. Signature required. Rate limit: 72/3s per UID.
   */
  getCoinMPerpSubPositions(params: {
    sub_uid: number;
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmPerpSubPositions[]>> {
    return this.postPrivate('/swap-api/v1/swap_sub_position_info', {
      body: params,
    });
  }

  /**
   * Query Financial Records (CMPerp)
   *
   * Account financial records. Window max 48h, within 90 days. Signature required. Rate limit: 144/3s per UID.
   */
  getCoinMPerpFinancialRecords(
    params: FuturesCmPerpFinancialRecordReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmPerpFinancialRecord[]>> {
    return this.postPrivate('/swap-api/v3/swap_financial_record', {
      body: params,
    });
  }

  /**
   * Query Financial Records Exact (CMPerp)
   *
   * Financial records via multiple fields. Same params as getCoinMPerpFinancialRecords. Signature required. Rate limit: 144/3s per UID.
   */
  getCoinMPerpFinancialRecordsExact(
    params: FuturesCmPerpFinancialRecordExactReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmPerpFinancialRecord[]>> {
    return this.postPrivate('/swap-api/v3/swap_financial_record_exact', {
      body: params,
    });
  }

  /**
   * Query Available Leverage (CMPerp)
   *
   * User's available leverage per contract. Omit contract_code for all. Signature required. Rate limit: 72/3s per UID.
   */
  getCoinMPerpAvailableLeverage(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmPerpAvailableLeverage[]>> {
    return this.postPrivate('/swap-api/v1/swap_available_level_rate', {
      body: params,
    });
  }

  /**
   * Query Order Limit (CMPerp)
   *
   * Max open/close order limits per contract for given order type. Signature required. Rate limit: 144/3s per UID.
   */
  getCoinMPerpOrderLimit(
    params: FuturesCmPerpOrderLimitReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmPerpOrderLimit>> {
    return this.postPrivate('/swap-api/v1/swap_order_limit', {
      body: params,
    });
  }

  /**
   * Query Trading Fee (CMPerp)
   *
   * Maker/taker fee rates per contract. Omit contract_code for all. Signature required. Rate limit: 144/3s per UID.
   */
  getCoinMPerpFee(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmPerpFee[]>> {
    return this.postPrivate('/swap-api/v1/swap_fee', {
      body: params,
    });
  }

  /**
   * Query Transfer Limit (CMPerp)
   *
   * Transfer in/out limits per contract. Omit contract_code for all. Signature required. Rate limit: 144/3s per UID.
   */
  getCoinMPerpTransferLimit(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmPerpTransferLimit[]>> {
    return this.postPrivate('/swap-api/v1/swap_transfer_limit', {
      body: params,
    });
  }

  /**
   * Query Position Limit (CMPerp)
   *
   * Max long/short position limits per contract. Omit contract_code for all. Signature required. Rate limit: 144/3s per UID.
   */
  getCoinMPerpPositionLimit(params?: {
    contract_code?: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCmPerpPositionLimit[]>> {
    return this.postPrivate('/swap-api/v1/swap_position_limit', {
      body: params,
    });
  }

  /**
   * Master-Sub Transfer (CMPerp)
   *
   * Transfer between master and sub account. Rate limit 10/min per master-sub pair. Signature required.
   */
  transferCoinMPerpMasterSub(
    params: FuturesCmPerpMasterSubTransferReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMasterSubTransfer>> {
    return this.postPrivate('/swap-api/v1/swap_master_sub_transfer', {
      body: params,
    });
  }

  /**
   * Master-Sub Transfer Records (CMPerp)
   *
   * Query transfer records between master and sub. transfer_type: 34=to sub, 35=from sub. create_date: days (≤90). Signature required.
   */
  getCoinMPerpMasterSubTransfers(
    params: FuturesCmPerpMasterSubTransfersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMasterSubTransferRecords>> {
    return this.postPrivate('/swap-api/v1/swap_master_sub_transfer_record', {
      body: params,
    });
  }

  /**
   * API Trading Status (CMPerp)
   *
   * Query API indicator disable info (COR/TDN). Signature required. Rate limit: 144/3s per UID.
   */
  getCoinMPerpApiStatus(): Promise<
    FuturesAPISuccessResponse<FuturesCmPerpApiStatus[]>
  > {
    return this.getPrivate('/swap-api/v1/swap_api_trading_status');
  }

  /**
   *
   * Coin-M Perpetual - Trade
   *
   */

  /**
   * Cancel-After (CMPerp)
   *
   * Dead Man's Switch: enable/disable auto-cancel of all pending orders after countdown. Refresh before timer ends to keep orders. Trade permission.
   */
  setCoinMPerpCancelAfter(params: {
    on_off: 0 | 1;
    time_out?: number;
  }): Promise<FuturesAPISuccessResponse<FuturesCmPerpCancelAfter>> {
    return this.postPrivate('/swap-api/v1/swap-cancel-after', {
      body: params,
    });
  }

  /**
   * Place Order (CMPerp)
   *
   * Place order for coin-m perpetual. Trade permission. Rate limit: 36/3s per UID.
   */
  submitCoinMPerpOrder(
    params: FuturesCmPerpSubmitOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSubmitOrder>> {
    return this.postPrivate('/swap-api/v1/swap_order', {
      body: { ...params, [APIIDMainKey]: APIIDMain },
    });
  }

  /**
   * Place Batch Orders (CMPerp)
   *
   * Place up to 25 orders. Trade permission. Rate limit: 36/3s per UID.
   */
  submitCoinMPerpBatchOrders(
    params: FuturesCmPerpSubmitBatchOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesBatchOrder>> {
    return this.postPrivate('/swap-api/v1/swap_batchorder', {
      body: params,
    });
  }

  /**
   * Cancel Order (CMPerp)
   *
   * Cancel by order_id or client_order_id. One required, max 10. Trade permission.
   */
  cancelCoinMPerpOrder(
    params: FuturesCmPerpCancelOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
    return this.postPrivate('/swap-api/v1/swap_cancel', {
      body: params,
    });
  }

  /**
   * Cancel All Orders (CMPerp)
   *
   * Cancel all orders for contract. Optional direction/offset filter. Trade permission.
   */
  cancelCoinMPerpAllOrders(
    params: FuturesCmPerpCancelAllOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
    return this.postPrivate('/swap-api/v1/swap_cancelall', {
      body: params,
    });
  }

  /**
   * Switch Leverage (CMPerp)
   *
   * Switch leverage for contract. Rate limit 1/3s. Trade permission.
   */
  updateCoinMPerpLeverage(params: {
    contract_code: string;
    lever_rate: number;
  }): Promise<FuturesAPISuccessResponse<FuturesCmPerpUpdateLeverage>> {
    return this.postPrivate('/swap-api/v1/swap_switch_lever_rate', {
      body: params,
    });
  }

  /**
   * Get Order Info (CMPerp)
   *
   * Query order(s) by order_id or client_order_id. One required, max 50. Cancel info: last 2h. Read permission.
   */
  getCoinMPerpOrderInfo(
    params: FuturesCmPerpOrderInfoReq,
  ): Promise<FuturesAPISuccessResponse<FuturesOrderInfo[]>> {
    return this.postPrivate('/swap-api/v1/swap_order_info', {
      body: params,
    });
  }

  /**
   * Get Order Detail (CMPerp)
   *
   * Order details with trades. With created_at+order_type: last 6h; without: last 2h. Read permission.
   */
  getCoinMPerpOrderDetail(
    params: FuturesCmPerpOrderDetailReq,
  ): Promise<FuturesAPISuccessResponse<FuturesOrderDetail>> {
    return this.postPrivate('/swap-api/v1/swap_order_detail', {
      body: params,
    });
  }

  /**
   * Get Open Orders (CMPerp)
   *
   * Current unfilled orders. Omit contract_code for all. Read permission.
   */
  getCoinMPerpOpenOrders(
    params?: FuturesCmPerpOpenOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmPerpOpenOrders>> {
    return this.postPrivate('/swap-api/v1/swap_openorders', {
      body: params,
    });
  }

  /**
   * Get History Orders (CMPerp)
   *
   * History orders. Window max 48h, within 90d. Cancelled orders: last 2h. Read permission.
   */
  getCoinMPerpHistoryOrders(
    params: FuturesCmPerpHistoryOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesHistoryOrder[]>> {
    return this.postPrivate('/swap-api/v3/swap_hisorders', {
      body: params,
    });
  }

  /**
   * Get History Orders Exact (CMPerp)
   *
   * History orders via multiple fields. Adds price_type filter. Same window rules. Read permission.
   */
  getCoinMPerpHistoryOrdersExact(
    params: FuturesCmPerpHistoryOrdersExactReq,
  ): Promise<FuturesAPISuccessResponse<FuturesHistoryOrder[]>> {
    return this.postPrivate('/swap-api/v3/swap_hisorders_exact', {
      body: params,
    });
  }

  /**
   * Get Match Results (CMPerp)
   *
   * History match/trade results. Window max 48h, within 90d. Read permission.
   */
  getCoinMPerpFills(
    params: FuturesCmPerpFillsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMatchResult[]>> {
    return this.postPrivate('/swap-api/v3/swap_matchresults', {
      body: params,
    });
  }

  /**
   * Get Match Results Exact (CMPerp)
   *
   * History match results via multiple fields. Same params as getCoinMPerpFills. Read permission.
   */
  getCoinMPerpFillsExact(
    params: FuturesCmPerpFillsExactReq,
  ): Promise<FuturesAPISuccessResponse<FuturesMatchResult[]>> {
    return this.postPrivate('/swap-api/v3/swap_matchresults_exact', {
      body: params,
    });
  }

  /**
   * Lightning Close Order (CMPerp)
   *
   * Close position at rival price + optimal 30 levels. Unfilled becomes limit. Default order_price_type: lightning. Trade permission.
   */
  submitCoinMPerpLightningCloseOrder(
    params: FuturesCmPerpLightningCloseReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSubmitOrder>> {
    return this.postPrivate('/swap-api/v1/swap_lightning_close_position', {
      body: params,
    });
  }

  /**
   *
   * Coin-M Perpetual - Strategy Order
   *
   */

  /**
   * Place Trigger Order (CMPerp)
   *
   * ge: trigger when price >= trigger_price; le: <=. order_price needed for limit. Rate limit 5/s. Trade permission.
   */
  submitCoinMPerpTriggerOrder(
    params: FuturesCmPerpTriggerOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSubmitOrder>> {
    return this.postPrivate('/swap-api/v1/swap_trigger_order', {
      body: params,
    });
  }

  /**
   * Cancel Trigger Order (CMPerp)
   *
   * Cancel by order_id. Max 10. Rate limit 5/s. Trade permission.
   */
  cancelCoinMPerpTriggerOrder(params: {
    contract_code: string;
    order_id: string;
  }): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
    return this.postPrivate('/swap-api/v1/swap_trigger_cancel', {
      body: params,
    });
  }

  /**
   * Cancel All Trigger Orders (CMPerp)
   *
   * Cancel all trigger orders for contract. Optional direction/offset filter. Rate limit 5/s. Trade permission.
   */
  cancelCoinMPerpAllTriggerOrders(
    params: FuturesCmPerpCancelAllTriggerOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
    return this.postPrivate('/swap-api/v1/swap_trigger_cancelall', {
      body: params,
    });
  }

  /**
   * Get Trigger Open Orders (CMPerp)
   *
   * Current unfilled trigger orders. Read permission.
   */
  getCoinMPerpTriggerOpenOrders(
    params: FuturesCmPerpTriggerOpenOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmPerpTriggerOpenOrders>> {
    return this.postPrivate('/swap-api/v1/swap_trigger_openorders', {
      body: params,
    });
  }

  /**
   * Get Trigger History Orders (CMPerp)
   *
   * Trigger order history. create_date: days (max 90). Default query completed (status 4,5,6). Read permission.
   */
  getCoinMPerpTriggerHistoryOrders(
    params: FuturesCmPerpTriggerHistoryOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmPerpTriggerHistoryOrders>> {
    return this.postPrivate('/swap-api/v1/swap_trigger_hisorders', {
      body: params,
    });
  }

  /**
   * Set TPSL Order (CMPerp)
   *
   * Take-profit and/or stop-loss for existing position. At least one trigger price required. Rate limit 5/s. Trade permission.
   */
  submitCoinMPerpTpslOrder(
    params: FuturesCmPerpTpslOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesTpslOrder>> {
    return this.postPrivate('/swap-api/v1/swap_tpsl_order', {
      body: params,
    });
  }

  /**
   * Cancel TPSL Order (CMPerp)
   *
   * Cancel by order_id. Max 10. Rate limit 5/s. Trade permission.
   */
  cancelCoinMPerpTpslOrder(
    params: FuturesCmPerpCancelTpslOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
    return this.postPrivate('/swap-api/v1/swap_tpsl_cancel', {
      body: params,
    });
  }

  /**
   * Cancel All TPSL Orders (CMPerp)
   *
   * Cancel all TPSL orders for contract. Optional direction filter. Rate limit 5/s. Trade permission.
   */
  cancelCoinMPerpAllTpslOrders(
    params: FuturesCmPerpCancelAllTpslOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
    return this.postPrivate('/swap-api/v1/swap_tpsl_cancelall', {
      body: params,
    });
  }

  /**
   * Get TPSL Open Orders (CMPerp)
   *
   * Current open take-profit and stop-loss orders. Read permission.
   */
  getCoinMPerpTpslOpenOrders(
    params: FuturesCmPerpTpslOpenOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmPerpTpslOpenOrders>> {
    return this.postPrivate('/swap-api/v1/swap_tpsl_openorders', {
      body: params,
    });
  }

  /**
   * Get TPSL History Orders (CMPerp)
   *
   * TPSL order history. create_date: days (max 90). Read permission.
   */
  getCoinMPerpTpslHistoryOrders(
    params: FuturesCmPerpTpslHisOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmPerpTpslHisOrders>> {
    return this.postPrivate('/swap-api/v1/swap_tpsl_hisorders', {
      body: params,
    });
  }

  /**
   * Get Relation TPSL Order (CMPerp)
   *
   * TPSL order info related to a position-opening order. order_id = open order id. Read permission.
   */
  getCoinMPerpRelationTpslOrder(
    params: FuturesCmPerpRelationTpslOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesRelationTpslOrder>> {
    return this.postPrivate('/swap-api/v1/swap_relation_tpsl_order', {
      body: params,
    });
  }

  /**
   * Place Trailing Order (CMPerp)
   *
   * Trailing order with callback rate. formula_price = market*(1±callback_rate). Rate limit 5/s. Trade permission.
   */
  submitCoinMPerpTrailingOrder(
    params: FuturesCmPerpTrailingOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesSubmitOrder>> {
    return this.postPrivate('/swap-api/v1/swap_track_order', {
      body: params,
    });
  }

  /**
   * Cancel Trailing Order (CMPerp)
   *
   * Cancel by order_id. Max 10. Rate limit 5/s. Trade permission.
   */
  cancelCoinMPerpTrailingOrder(
    params: FuturesCmPerpCancelTrailingOrderReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
    return this.postPrivate('/swap-api/v1/swap_track_cancel', {
      body: params,
    });
  }

  /**
   * Cancel All Trailing Orders (CMPerp)
   *
   * Cancel all trailing orders for contract. Optional direction/offset filter. Rate limit 5/s. Trade permission.
   */
  cancelCoinMPerpAllTrailingOrders(
    params: FuturesCmPerpCancelAllTrailingOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCancelOrder>> {
    return this.postPrivate('/swap-api/v1/swap_track_cancelall', {
      body: params,
    });
  }

  /**
   * Get Trailing Open Orders (CMPerp)
   *
   * Current unfilled trailing orders. Read permission.
   */
  getCoinMPerpTrailingOpenOrders(
    params: FuturesCmPerpTrailingOpenOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmPerpTrailingOpenOrders>> {
    return this.postPrivate('/swap-api/v1/swap_track_openorders', {
      body: params,
    });
  }

  /**
   * Get Trailing History Orders (CMPerp)
   *
   * Trailing order history. create_date: days (max 90). Read permission.
   */
  getCoinMPerpTrailingHistoryOrders(
    params: FuturesCmPerpTrailingHisOrdersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCmPerpTrailingHisOrders>> {
    return this.postPrivate('/swap-api/v1/swap_track_hisorders', {
      body: params,
    });
  }

  /**
   * Futures Copy Trading
   *
   * Main Account ApiKey only. Trader-side endpoints for lead trading.
   */

  /**
   * Trader Query Lead Trading Products
   *
   * Query which products are available for lead trading. Read permission. Rate limit: 5/s per UID.
   */
  getCopyTraderInstruments(
    params?: FuturesCopyTraderInstrumentsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCopyTraderInstrument[]>> {
    return this.getPrivate('/api/v6/copyTrading/trader/instruments', params);
  }

  /**
   * Trader Query Lead Trading Metrics
   *
   * Query own lead trading metric statistics. Read permission. Rate limit: 5/s per UID.
   */
  getCopyTraderStatistics(
    params: FuturesCopyTraderStatisticsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCopyTraderStatistics[]>> {
    return this.getPrivate('/api/v6/copyTrading/trader/statistics', params);
  }

  /**
   * Trader Historical Profit Sharing Details
   *
   * Query historical lead trading profit sharing details. Main Account ApiKey only. Read permission. Rate limit: 5/s per UID.
   */
  getCopyTraderProfitSharingHistory(
    params: FuturesCopyTraderProfitSharingHistoryReq,
  ): Promise<
    FuturesAPISuccessResponse<FuturesCopyTraderProfitSharingHistory[]>
  > {
    return this.getPrivate(
      '/api/v6/copyTrading/trader/profit-sharing-history',
      params,
    );
  }

  /**
   * Trader Historical Profit Sharing Summary
   *
   * Query historical lead trading profit sharing summary. Main Account ApiKey only. Read permission. Rate limit: 5/s per UID.
   */
  getCopyTraderProfitSharingHistorySummary(
    params: FuturesCopyTraderProfitSharingHistorySummaryReq,
  ): Promise<
    FuturesAPISuccessResponse<FuturesCopyTraderProfitSharingSummary[]>
  > {
    return this.getPrivate(
      '/api/v6/copyTrading/trader/profit-sharing-history-summary',
      params,
    );
  }

  /**
   * Trader Query Unrealized Profit Sharing Summary
   *
   * Query unrealized profit sharing information. Main Account ApiKey only. Read permission. Rate limit: 5/s per UID.
   */
  getCopyTraderUPNLSharingSummary(
    params: FuturesCopyTraderUnrealizedProfitSharingSummaryReq,
  ): Promise<
    FuturesAPISuccessResponse<FuturesCopyTraderProfitSharingSummary[]>
  > {
    return this.getPrivate(
      '/api/v6/copyTrading/trader/unrealized-profit-sharing-summary',
      params,
    );
  }

  /**
   * Trader Query Followers
   *
   * Query follower information. Main Account ApiKey only. Read permission. Rate limit: 5/s per UID.
   */
  getCopyTraderFollowers(
    params?: FuturesCopyTraderFollowersReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCopyTraderFollower[]>> {
    return this.getPrivate('/api/v6/copyTrading/trader/followers', params);
  }

  /**
   * Trader Remove Follower
   *
   * Remove specific followers (max 10 at once). Main Account ApiKey only. Trade permission. Rate limit: 5/s per UID.
   */
  removeCopyTraderFollower(
    params: FuturesCopyTraderFollowerRemoveReq,
  ): Promise<
    FuturesAPISuccessResponse<FuturesCopyTraderFollowerRemoveResult[]>
  > {
    return this.postPrivate('/api/v6/copyTrading/trader/follower', {
      body: params,
    });
  }

  /**
   * Trader Account Transfer
   *
   * Transfer copy trading funds (USDT). Main Account ApiKey only. Read permission. Rate limit: 5/s per UID.
   */
  submitCopyTraderTransfer(
    params: FuturesCopyTraderTransferReq,
  ): Promise<FuturesAPISuccessResponse<[]>> {
    return this.postPrivate('/api/v6/copyTrading/trader/transfer', {
      body: params,
    });
  }

  /**
   * Trader Set Lead Trading Configuration
   *
   * Enable/disable copy trading, set profit sharing ratio and max followers. Main Account ApiKey only. Trade permission. Rate limit: 5/s per UID.
   */
  updateCopyTraderFollowerSettings(
    params: FuturesCopyTraderFollowerSettingsReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCopyTraderConfig[]>> {
    return this.postPrivate('/api/v6/copyTrading/trader/follower-settings', {
      body: params,
    });
  }

  /**
   * Trader View Lead Trading Configuration
   *
   * View lead trading configuration. Main Account ApiKey only. Read permission. Rate limit: 5/s per UID.
   */
  getCopyTraderConfig(
    params: FuturesCopyTraderConfigReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCopyTraderConfig[]>> {
    return this.postPrivate('/api/v6/copyTrading/trader/config', {
      body: params,
    });
  }

  /**
   * Trader Create Lead Trading API Key
   *
   * Create API key for lead trading (max 20). Main Account ApiKey only. Trade permission. Rate limit: 5/s per UID.
   */
  createCopyTraderApikey(
    params: FuturesCopyTraderApikeyReq,
  ): Promise<FuturesAPISuccessResponse<FuturesCopyTraderApikey[]>> {
    return this.postPrivate('/api/v6/copyTrading/trader/apikey', {
      body: params,
    });
  }

  /**
   * Futures Copy Trading
   *
   * Main Account ApiKey only. Trader-side endpoints for lead trading.
   */
}
