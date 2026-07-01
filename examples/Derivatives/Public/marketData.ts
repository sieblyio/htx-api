/* eslint-disable @typescript-eslint/no-unused-vars */
import { FuturesClient } from '../../../src/index.js';

// This example shows how to call HTX Derivatives API endpoints for PUBLIC MARKET DATA
// (linear swap, no authentication required).

/**
 * import { FuturesClient } from '@siebly/htx-api';
 */

const client = new FuturesClient();
const contractCode = 'BTC-USDT';

async function getTimestamp() {
  try {
    const timestamp = await client.getTimestamp();
    console.log('Server Timestamp: ', timestamp);
  } catch (e) {
    console.error('Get timestamp error: ', e);
  }
}

async function getAllTickers() {
  try {
    const allTickers = await client.getLinearSwapTickers();
    console.log(
      'All Linear Swap Tickers: ',
      JSON.stringify(allTickers, null, 2),
    );
  } catch (e) {
    console.error('Get all tickers error: ', e);
  }
}

async function getTickerByContract() {
  try {
    const ticker = await client.getLinearSwapTicker({
      contract_code: contractCode,
    });
    console.log('Ticker: ', JSON.stringify(ticker, null, 2));
  } catch (e) {
    console.error('Get ticker error: ', e);
  }
}

async function getOrderBook() {
  try {
    const orderBook = await client.getLinearSwapMarketDepth({
      contract_code: contractCode,
      type: 'step0',
    });
    console.log('Order Book: ', JSON.stringify(orderBook, null, 2));
  } catch (e) {
    console.error('Get order book error: ', e);
  }
}

async function getKlines() {
  try {
    const klines = await client.getLinearSwapKlines({
      contract_code: contractCode,
      period: '60min',
      size: 10,
    });
    console.log('Klines: ', JSON.stringify(klines, null, 2));
  } catch (e) {
    console.error('Get klines error: ', e);
  }
}

async function getTradeHistory() {
  try {
    const tradeHistory = await client.getLinearSwapTradeHistory({
      contract_code: contractCode,
      size: 20,
    });
    console.log('Trade History: ', JSON.stringify(tradeHistory, null, 2));
  } catch (e) {
    console.error('Get trade history error: ', e);
  }
}

async function getFundingRate() {
  try {
    const fundingRate = await client.getLinearSwapFundingRate({
      contract_code: contractCode,
    });
    console.log('Funding Rate: ', JSON.stringify(fundingRate, null, 2));
  } catch (e) {
    console.error('Get funding rate error: ', e);
  }
}

async function getContractInfo() {
  try {
    const contractInfo = await client.getLinearSwapContractInfo({
      contract_code: contractCode,
    });
    console.log('Contract Info: ', JSON.stringify(contractInfo, null, 2));
  } catch (e) {
    console.error('Get contract info error: ', e);
  }
}

async function getOpenInterest() {
  try {
    const openInterest = await client.getLinearSwapOpenInterest({
      contract_code: contractCode,
    });
    console.log('Open Interest: ', JSON.stringify(openInterest, null, 2));
  } catch (e) {
    console.error('Get open interest error: ', e);
  }
}

// Uncomment the function you want to test:

// getTimestamp();
// getAllTickers();
// getTickerByContract();
// getOrderBook();
// getKlines();
// getTradeHistory();
// getFundingRate();
// getContractInfo();
// getOpenInterest();
