import { SpotClient } from '../../../src/index.js';

// This example shows how to call HTX Spot API endpoints with Node.js or TypeScript
// using the npm module "@siebly/htx-api" for PUBLIC MARKET DATA (no authentication).

/**
 * import { SpotClient } from '@siebly/htx-api';
 */

// Public calls do not require API keys
const client = new SpotClient();

async function publicCalls() {
  try {
    const timestamp = await client.getTimestamp();
    console.log('Server Timestamp: ', timestamp);

    const marketStatus = await client.getMarketStatus();
    console.log('Market Status: ', marketStatus);

    const symbols = await client.getTradingSymbols();
    console.log('Trading Symbols: ', symbols);

    const ticker = await client.getTicker({ symbol: 'btcusdt' });
    console.log('Ticker (btcusdt): ', ticker);

    const tickers = await client.getTickers();
    console.log('All Tickers: ', tickers);

    const orderBook = await client.getMarketDepth({
      symbol: 'btcusdt',
      depth: 10,
      type: 'step0',
    });
    console.log('Order Book: ', orderBook);

    const klines = await client.getKlines({
      symbol: 'btcusdt',
      period: '1min',
      size: 10,
    });
    console.log('Klines: ', klines);

    const lastTrade = await client.getLastTrade({ symbol: 'btcusdt' });
    console.log('Last Trade: ', lastTrade);

    const historyTrades = await client.getHistoryTrades({
      symbol: 'btcusdt',
      size: 10,
    });
    console.log('History Trades: ', historyTrades);
  } catch (e) {
    console.error('Error: ', e);
  }
}

publicCalls();
