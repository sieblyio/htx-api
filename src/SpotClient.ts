import { BaseRestClient } from './lib/BaseRestClient.js';
import { REST_CLIENT_TYPE_ENUM, RestClientType } from './lib/requestUtils.js';
import type {
  SpotGetChainsParams,
  SpotGetCurrenciesParams,
  SpotGetCurrencysSettingsParams,
  SpotGetDepthParams,
  SpotGetDetailParams,
  SpotGetFullOrderbookParams,
  SpotGetHistoryTradeParams,
  SpotGetKlineParams,
  SpotGetMarketSymbolsParams,
  SpotGetMergedTickerParams,
  SpotGetReferenceCurrenciesParams,
  SpotGetSymbolsSettingsParams,
  SpotGetTradeParams,
  SpotGetTradingSymbolsParams,
} from './types/request/spot.types.js';
import { SpotAPISuccessResponse } from './types/response/shared.types.js';
import {
  SpotCurrency,
  SpotDepthTick,
  SpotDetailTick,
  SpotKlineItem,
  SpotMarketStatusResponse,
  SpotMergedTicker,
  SpotSystemStatusPage,
  SpotTickerItem,
  SpotTradeTick,
  SpotTradeTimestampGroup,
  SpotTradingSymbol,
  SpotV1ChainInfo,
  SpotV1CurrencySettings,
  SpotV1MarketSymbolSettings,
  SpotV1SymbolSettings,
  SpotV2CurrencyReference,
} from './types/response/spot.types.js';

/**
 * The SpotClient provides integration to the HTX Spot API.
 */
export class SpotClient extends BaseRestClient {
  getClientType(): RestClientType {
    // Points to api.huobi.pro
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
  getTradingSymbols(
    params?: SpotGetTradingSymbolsParams,
  ): Promise<SpotAPISuccessResponse<SpotTradingSymbol[]>> {
    return this.get('/v2/settings/common/symbols', params);
  }

  /**
   * Get all Supported Currencies (V2)
   *
   * Returns all supported currencies. Pass ts for incremental updates.
   */
  getCurrencies(
    params?: SpotGetCurrenciesParams,
  ): Promise<SpotAPISuccessResponse<SpotCurrency[]>> {
    return this.get('/v2/settings/common/currencies', params);
  }

  /**
   * Get Currencys Settings (V1)
   *
   * Returns currency settings. No signature required. Pass ts for incremental updates.
   */
  getCurrencysSettings(
    params?: SpotGetCurrencysSettingsParams,
  ): Promise<SpotAPISuccessResponse<SpotV1CurrencySettings[]>> {
    return this.get('/v1/settings/common/currencys', params);
  }

  /**
   * Get Symbols Settings (V1)
   *
   * Returns symbol settings. No signature required. Pass ts for incremental updates.
   */
  getSymbolsSettings(
    params?: SpotGetSymbolsSettingsParams,
  ): Promise<SpotAPISuccessResponse<SpotV1SymbolSettings[]>> {
    return this.get('/v1/settings/common/symbols', params);
  }

  /**
   * Get Market Symbols Settings (V1)
   *
   * Returns market symbol settings. No signature required. Pass symbols (NA=all) and/or ts for incremental updates.
   */
  getMarketSymbolsSettings(
    params?: SpotGetMarketSymbolsParams,
  ): Promise<SpotAPISuccessResponse<SpotV1MarketSymbolSettings[]>> {
    return this.get('/v1/settings/common/market-symbols', params);
  }

  /**
   * Get Chains Information (V1)
   *
   * Returns chain info per currency. No signature required. Pass show-desc, currency, and/or ts for incremental updates.
   */
  getChains(
    params?: SpotGetChainsParams,
  ): Promise<SpotAPISuccessResponse<SpotV1ChainInfo[]>> {
    return this.get('/v1/settings/common/chains', params);
  }

  /**
   * Get Reference Currencies & Chains (V2)
   *
   * Returns static reference info for each currency and its chains. No signature required.
   */
  getReferenceCurrencies(
    params?: SpotGetReferenceCurrenciesParams,
  ): Promise<SpotAPISuccessResponse<SpotV2CurrencyReference[]>> {
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
    params: SpotGetKlineParams,
  ): Promise<SpotAPISuccessResponse<SpotKlineItem[]>> {
    return this.get('/market/history/kline', params);
  }

  /**
   * Get Latest Aggregated Ticker
   *
   * Returns latest ticker with 24h aggregated market data. No signature required.
   */
  getMergedTicker(
    params: SpotGetMergedTickerParams,
  ): Promise<SpotAPISuccessResponse<SpotMergedTicker, 'tick'>> {
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
    params: SpotGetDepthParams,
  ): Promise<SpotAPISuccessResponse<SpotDepthTick, 'tick'>> {
    return this.get('/market/depth', params);
  }

  /**
   * Get the Last Trade
   *
   * Returns latest trade with price, volume, direction. No signature required.
   */
  getTrade(
    params: SpotGetTradeParams,
  ): Promise<SpotAPISuccessResponse<SpotTradeTick, 'tick'>> {
    return this.get('/market/trade', params);
  }

  /**
   * Get the Most Recent Trades
   *
   * Returns recent trades grouped by timestamp. No signature required.
   */
  getHistoryTrade(
    params: SpotGetHistoryTradeParams,
  ): Promise<SpotAPISuccessResponse<SpotTradeTimestampGroup[]>> {
    return this.get('/market/history/trade', params);
  }

  /**
   * Get the Last 24h Market Summary
   *
   * Returns 24h trading summary for a symbol. No signature required.
   */
  getMarketDetail(
    params: SpotGetDetailParams,
  ): Promise<SpotAPISuccessResponse<SpotDetailTick, 'tick'>> {
    return this.get('/market/detail', params);
  }

  /**
   * Get Full Order Book
   *
   * Returns complete market depth, up to 5000 levels. Updated once per second. No signature required.
   */
  getFullOrderBook(
    params: SpotGetFullOrderbookParams,
  ): Promise<SpotAPISuccessResponse<SpotDepthTick, 'tick'>> {
    return this.get('/market/fullMbp', params);
  }
}
