/* eslint-disable @typescript-eslint/no-unused-vars */
import { SpotClient } from '../../../src/index.js';

// This example shows how to call HTX Spot API endpoints for ORDER MANAGEMENT.

/**
 * import { SpotClient } from '@siebly/htx-api';
 */
const client = new SpotClient({
  apiKey: process.env.API_SPOT_KEY || 'insertApiKeyHere',
  apiSecret: process.env.API_SPOT_SECRET || 'insertApiSecretHere',
});

async function getOpenOrders() {
  try {
    const openOrders = await client.getOpenOrders({ symbol: 'btcusdt' });
    console.log('Open Orders: ', JSON.stringify(openOrders, null, 2));
  } catch (e) {
    console.error('Get open orders error: ', e);
  }
}

async function getOpenOrdersByClientId() {
  try {
    const order = await client.getOrderByClientId({
      clientOrderId: 'your-client-order-id-here',
    });
    console.log('Order by Client ID: ', JSON.stringify(order, null, 2));
  } catch (e) {
    console.error('Get order by client id error: ', e);
  }
}

async function getOrderHistory() {
  try {
    const orderHistory = await client.getOrderHistory({
      symbol: 'btcusdt',
      states: 'filled,canceled,partial-canceled',
      size: 50,
    });
    console.log('Order History: ', JSON.stringify(orderHistory, null, 2));
  } catch (e) {
    console.error('Get order history error: ', e);
  }
}

async function getOrderHistory48h() {
  try {
    const orderHistory = await client.getOrderHistory48h({
      symbol: 'btcusdt',
      size: 50,
    });
    console.log('Order History (48h): ', JSON.stringify(orderHistory, null, 2));
  } catch (e) {
    console.error('Get order history 48h error: ', e);
  }
}

async function getMatchResults() {
  try {
    const matchResults = await client.getMatchResults({
      symbol: 'btcusdt',
      size: 50,
    });
    console.log('Match Results: ', JSON.stringify(matchResults, null, 2));
  } catch (e) {
    console.error('Get match results error: ', e);
  }
}

async function cancelOrderById() {
  try {
    const cancelResult = await client.cancelOrderById({
      orderId: '1620028655831163',
      symbol: 'btcusdt',
    });
    console.log('Cancel Order Result: ', JSON.stringify(cancelResult, null, 2));
  } catch (e) {
    console.error('Cancel order by id error: ', e);
  }
}

async function cancelOrderByClientId() {
  try {
    const cancelResult = await client.cancelOrderByClientId({
      'client-order-id': 'your-client-order-id-here',
    });
    console.log(
      'Cancel by Client ID Result: ',
      JSON.stringify(cancelResult, null, 2),
    );
  } catch (e) {
    console.error('Cancel order by client id error: ', e);
  }
}

async function cancelAllOrders() {
  try {
    const cancelAllResult = await client.cancelAllOrders({ symbol: 'btcusdt' });
    console.log(
      'Cancel All Orders Result: ',
      JSON.stringify(cancelAllResult, null, 2),
    );
  } catch (e) {
    console.error('Cancel all orders error: ', e);
  }
}

async function setCancelAllAfter() {
  try {
    const cancelAfterResult = await client.setCancelAllAfter({ timeout: 120 });
    console.log(
      'Cancel All After Result: ',
      JSON.stringify(cancelAfterResult, null, 2),
    );
  } catch (e) {
    console.error('Set cancel all after error: ', e);
  }
}

// Uncomment the function you want to test:

// getOpenOrders();
// getOpenOrdersByClientId();
// getOrderHistory();
// getOrderHistory48h();
// etMatchResults();
// cancelOrderById();
// cancelOrderByClientId();
// cancelAllOrders();
// setCancelAllAfter();
