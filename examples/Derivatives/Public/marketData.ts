/* eslint-disable @typescript-eslint/no-unused-vars */
import { DerivativesClient } from '../../../src/index.js';

// This example shows how to call Kraken API endpoint with either node.js,
// javascript (js) or typescript (ts) with the npm module "@siebly/kraken-api" for Kraken exchange
// for FUTURES PUBLIC MARKET DATA that requires no authentication

/**
 * import { DerivativesClient } from '@siebly/kraken-api';
 */

// you can initialise public client without api keys as public calls do not require auth
const client = new DerivativesClient();

async function getAllTickers() {
  try {
    // Get all tickers (all Futures contracts and indices)
    const allTickers = await client.getTickers();
    console.log('All Tickers: ', JSON.stringify(allTickers, null, 2));

    // Response includes for each ticker:
    // - symbol: Market symbol (e.g., PF_BTCUSD)
    // - last: Last fill price
    // - markPrice: Current mark price for margining
    // - bid/ask: Best bid/ask prices
    // - vol24h: 24h volume
    // - openInterest: Current open interest
    // - fundingRate: Current funding rate (perpetuals only)
  } catch (e) {
    console.error('Get all tickers error: ', e);
  }
}

async function getTickerBySymbol() {
  try {
    // Get ticker for specific Futures symbol
    const ticker = await client.getTicker({
      symbol: 'PF_ETHUSD', // Perpetual BTC/USD
    });
    console.log('Ticker: ', JSON.stringify(ticker, null, 2));
  } catch (e) {
    console.error('Get ticker by symbol error: ', e);
  }
}

async function getOrderBook() {
  try {
    // Get order book for specific Futures contract
    const orderBook = await client.getOrderbook({
      symbol: 'PF_ETHUSD',
    });
    console.log('Order Book: ', JSON.stringify(orderBook, null, 2));

    // Response includes:
    // - bids: Array of [price, size] sorted descending by price
    // - asks: Array of [price, size] sorted ascending by price
  } catch (e) {
    console.error('Get order book error: ', e);
  }
}

async function getTradeHistory() {
  try {
    // Get recent trade history (last 100 trades)
    const tradeHistory = await client.getPublicExecutionEvents({
      tradeable: 'PF_ETHUSD',
    });
    console.log('Trade History: ', JSON.stringify(tradeHistory, null, 2));

    // Response includes:
    // - price: Fill price
    // - side: Taker side (buy/sell)
    // - size: Fill size
    // - time: Trade timestamp
    // - type: Trade type (fill, liquidation, assignment, etc.)
  } catch (e) {
    console.error('Get trade history error: ', e);
  }
}

async function getTradeHistoryWithTime() {
  try {
    // Get trades before specific time (last 100 trades before specified time)
    const tradeHistoryTime = await client.getPublicExecutionEvents({
      tradeable: 'PF_ETHUSD',
      before: Date.now() - 3600000, // 1 hour ago
    });
    console.log(
      'Trade History (1h ago): ',
      JSON.stringify(tradeHistoryTime, null, 2),
    );

    // Returns up to 100 trades prior to before time (max 7 days back)
  } catch (e) {
    console.error('Get trade history with time error: ', e);
  }
}

async function getInstruments() {
  try {
    // Get all available Futures instruments
    const instruments = await client.getInstruments();
    console.log('Instruments: ', JSON.stringify(instruments, null, 2));

    // Response includes for each instrument:
    // - symbol: Market symbol
    // - type: Instrument type (flexible_futures, futures_inverse, etc.)
    // - underlying: Underlying asset
    // - tickSize: Minimum price increment
    // - contractSize: Contract size
    // - tradeable: Whether instrument is tradeable
  } catch (e) {
    console.error('Get instruments error: ', e);
  }
}

async function getFeeSchedules() {
  try {
    // Get fee schedules for Futures trading
    const feeSchedules = await client.getFeeSchedules();
    console.log('Fee Schedules: ', JSON.stringify(feeSchedules, null, 2));

    // Response includes maker and taker fees by tier
  } catch (e) {
    console.error('Get fee schedules error: ', e);
  }
}

async function getPublicExecutionEvents() {
  try {
    const publicExecutionEvents = await client.getPublicExecutionEvents({
      tradeable: 'PF_ETHUSD',
    });
    console.log(
      'Public Execution Events: ',
      JSON.stringify(publicExecutionEvents, null, 2),
    );
  } catch (e) {
    console.error('Get public execution events error: ', e);
  }
}

async function getPublicOrderEvents() {
  try {
    const publicOrderEvents = await client.getPublicOrderEvents({
      tradeable: 'PF_ETHUSD',
    });
    console.log(
      'Public Order Events: ',
      JSON.stringify(publicOrderEvents, null, 2),
    );
  } catch (e) {
    console.error('Get public order events error: ', e);
  }
}

async function getPublicMarkPriceEvents() {
  try {
    const publicMarkPriceEvents = await client.getPublicMarkPriceEvents({
      tradeable: 'PF_ETHUSD',
    });
    console.log(
      'Public Mark Price Events: ',
      JSON.stringify(publicMarkPriceEvents, null, 2),
    );
  } catch (e) {
    console.error('Get public mark price events error: ', e);
  }
}

async function getCandles() {
  try {
    // Get OHLC candles for Futures
    const candles = await client.getCandles({
      tickType: 'trade', // spot, mark, or trade
      symbol: 'PF_ETHUSD',
      resolution: '1h', // 1m, 5m, 15m, 30m, 1h, 4h, 12h, 1d, 1w
    });
    console.log('Candles: ', JSON.stringify(candles, null, 2));

    // Response includes:
    // - candles: Array of OHLC candles
    //   - time: Timestamp in ms
    //   - open, high, low, close: Prices
    //   - volume: Volume
    // - more_candles: True if more candles available
  } catch (e) {
    console.error('Get candles error: ', e);
  }
}

async function getCandlesWithTimeRange() {
  try {
    // Get candles for specific time range
    const candlesTimeRange = await client.getCandles({
      tickType: 'trade',
      symbol: 'PF_ETHUSD',
      resolution: '1h',
      from: Math.floor((Date.now() - 86400000 * 7) / 1000), // 7 days ago (epoch seconds)
      to: Math.floor(Date.now() / 1000), // now (epoch seconds)
    });
    console.log(
      'Candles (7 days): ',
      JSON.stringify(candlesTimeRange, null, 2),
    );
  } catch (e) {
    console.error('Get candles with time range error: ', e);
  }
}

async function getCandlesWithCount() {
  try {
    // Get specific number of most recent candles
    const candlesCount = await client.getCandles({
      tickType: 'mark', // Use mark price candles
      symbol: 'PF_ETHUSD',
      resolution: '5m',
    });
    console.log('Candles (last 100): ', JSON.stringify(candlesCount, null, 2));

    // Tick types:
    // - trade: Trade price candles
    // - mark: Mark price candles
    // - spot: Spot price candles
  } catch (e) {
    console.error('Get candles with count error: ', e);
  }
}

// Uncomment the function you want to test:

// getAllTickers();
// getTickerBySymbol();
// getOrderBook();
// getTradeHistory();
// getTradeHistoryWithTime();
// getInstruments();
// getFeeSchedules();
// getPublicExecutionEvents();
// getPublicOrderEvents();
// getPublicMarkPriceEvents();
// getCandles();
// getCandlesWithTimeRange();
// getCandlesWithCount();
