/* eslint-disable @typescript-eslint/no-unused-vars */
import { SpotClient } from '../../../src/index.js';

// This example shows how to call Kraken API endpoint with either node.js,
// javascript (js) or typescript (ts) with the npm module "@siebly/kraken-api" for Kraken exchange
// for ORDER MANAGEMENT

/**
 * import { SpotClient } from '@siebly/kraken-api';
 */

// initialise the client
/**
 *
 * Kraken API uses API Key and Private Key (base64 encoded)
 *
 * Example:
 * {
 *   apiKey: 'your-api-key',
 *   apiSecret: 'your-base64-encoded-private-key',
 * }
 *
 * API Key Permissions Required:
 * - Funds permissions - Query (for balance)
 * - Orders and trades - Query open orders & trades
 * - Orders and trades - Query closed orders & trades
 *
 */
const client = new SpotClient({
  apiKey: process.env.API_SPOT_KEY || 'insertApiKeyHere',
  apiSecret: process.env.API_SPOT_SECRET || 'insertApiSecretHere',
});

async function getTradeBalance() {
  try {
    // Get trade balance summary
    const tradeBalance = await client.getTradeBalance();
    console.log('Trade Balance: ', JSON.stringify(tradeBalance, null, 2));
  } catch (e) {
    console.error('Get trade balance error: ', e);
  }
}

async function getOpenOrders() {
  try {
    // Get all open orders
    const openOrders = await client.getOpenOrders();
    console.log('Open Orders: ', JSON.stringify(openOrders, null, 2));
  } catch (e) {
    console.error('Get open orders error: ', e);
  }
}

async function getOpenOrdersWithTrades() {
  try {
    // Get open orders with related trades
    const openOrdersWithTrades = await client.getOpenOrders({
      trades: true, // Include trades related to orders
    });
    console.log(
      'Open Orders with Trades: ',
      JSON.stringify(openOrdersWithTrades, null, 2),
    );
  } catch (e) {
    console.error('Get open orders with trades error: ', e);
  }
}

async function getOpenOrdersByClientId() {
  try {
    // Get open orders filtered by client order ID
    const ordersByClId = await client.getOpenOrders({
      cl_ord_id: '9cc788d8-9c00-4b25-94d3-26d93603948d',
    });
    console.log(
      'Open Orders by Client ID: ',
      JSON.stringify(ordersByClId, null, 2),
    );
  } catch (e) {
    console.error('Get open orders by client ID error: ', e);
  }
}

async function getClosedOrders() {
  try {
    // Get closed orders (last 50)
    const closedOrders = await client.getClosedOrders();
    console.log('Closed Orders: ', JSON.stringify(closedOrders, null, 2));
  } catch (e) {
    console.error('Get closed orders error: ', e);
  }
}

async function getClosedOrdersWithFilters() {
  try {
    // Get closed orders with filters
    const closedOrdersFiltered = await client.getClosedOrders({
      trades: true, // Include related trades
      start: Math.floor(Date.now() / 1000) - 86400 * 7, // Last 7 days
      closetime: 'close', // Filter by close time
    });
    console.log(
      'Closed Orders (Last 7 days): ',
      JSON.stringify(closedOrdersFiltered, null, 2),
    );
  } catch (e) {
    console.error('Get closed orders with filters error: ', e);
  }
}

async function getClosedOrdersByClientId() {
  try {
    // Get closed orders by client order ID
    const closedByClId = await client.getClosedOrders({
      cl_ord_id: '9cc788d8-9c00-4b25-94d3-26d93603948d',
      trades: true,
    });
    console.log(
      'Closed Orders by Client ID: ',
      JSON.stringify(closedByClId, null, 2),
    );
  } catch (e) {
    console.error('Get closed orders by client ID error: ', e);
  }
}

async function getOrdersByTxId() {
  try {
    // Query specific orders by transaction ID
    const ordersByTxId = await client.getOrders({
      txid: 'OQCLML-BW3P3-BUCMWZ,OZNOZE-2DOVH-Q4DOQT',
      trades: true,
    });
    console.log('Orders by TxID: ', JSON.stringify(ordersByTxId, null, 2));
  } catch (e) {
    console.error('Get orders by TxID error: ', e);
  }
}

// Uncomment the function you want to test:

// getTradeBalance();
// getOpenOrders();
// getOpenOrdersWithTrades();
// getOpenOrdersByClientId();
// getClosedOrders();
// getClosedOrdersWithFilters();
// getClosedOrdersByClientId();
// getOrdersByTxId();
