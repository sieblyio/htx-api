import { SpotClient } from '../../../src/index.js';

// This example shows how to call Kraken API endpoint with either node.js,
// javascript (js) or typescript (ts) with the npm module "@siebly/kraken-api" for Kraken exchange
// for PUBLIC MARKET DATA that requires no authentication

/**
 * import { SpotClient } from '@siebly/kraken-api';
 */

// you can initialise public client without api keys as public calls do not require auth
const client = new SpotClient();

async function publicCalls() {
  try {
    // Get server time
    const serverTime = await client.getServerTime();
    console.log('Server Time: ', serverTime);

    // Get system status
    const systemStatus = await client.getSystemStatus();
    console.log('System Status: ', systemStatus);

    // Get asset info
    const assetInfo = await client.getAssetInfo({
      asset: 'XBT,ETH',
    });
    console.log('Asset Info: ', assetInfo);

    // Get tradable asset pairs
    const assetPairs = await client.getAssetPairs({
      pair: 'XBTUSD,ETHUSD',
    });
    console.log('Asset Pairs: ', assetPairs);

    // Get ticker information
    const ticker = await client.getTicker({
      pair: 'XBTUSD',
    });
    console.log('Ticker: ', ticker);

    // Get order book
    const orderBook = await client.getOrderBook({
      pair: 'XBTUSD',
      count: 10,
    });
    console.log('Order Book: ', orderBook);

    // Get OHLC data (candles)
    const candles = await client.getCandles({
      pair: 'XBTUSD',
      interval: 60, // 1 minute
    });
    console.log('OHLC Candles: ', candles);

    // Get recent trades
    const recentTrades = await client.getRecentTrades({
      pair: 'XBTUSD',
      count: 10,
    });
    console.log('Recent Trades: ', recentTrades);

    // Get recent spreads
    const recentSpreads = await client.getRecentSpreads({
      pair: 'XBTUSD',
    });
    console.log('Recent Spreads: ', recentSpreads);
  } catch (e) {
    console.error('Error: ', e);
  }
}

publicCalls();
