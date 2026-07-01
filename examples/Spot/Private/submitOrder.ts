/* eslint-disable @typescript-eslint/no-unused-vars */
import { SpotClient } from '../../../src/index.js';

// This example shows how to call HTX Spot API endpoints for SUBMITTING ORDERS.

/**
 * import { SpotClient } from '@siebly/htx-api';
 */

/**
 * HTX API uses API Key and API Secret.
 *
 * API Key Permissions Required: Trade permission (create orders)
 */
/* const client = new SpotClient({
  apiKey: process.env.API_SPOT_KEY || 'insertApiKeyHere',
  apiSecret: process.env.API_SPOT_SECRET || 'insertApiSecretHere',
}); */

const client = new SpotClient({
  apiKey: process.env.API_SPOT_KEY || 'insertApiKeyHere',
  apiSecret: process.env.API_SPOT_SECRET || 'insertApiSecretHere',
});

async function getSpotAccountId(): Promise<string | number | undefined> {
  const accounts = await client.getAccounts();
  return accounts.data?.find((account) => account.type === 'spot')?.id;
}

async function submitMarketOrder() {
  try {
    const accountId = await getSpotAccountId();
    if (!accountId) {
      console.error('No spot account id found');
      return;
    }

    const newOrder = await client.submitOrder({
      'account-id': accountId,
      symbol: 'btcusdt',
      type: 'buy-market',
      amount: '1', // buy-market amount is quote currency value (USDT)
      'client-order-id': client.generateNewOrderID(),
    });
    console.log('Market Order Result: ', newOrder);
  } catch (e) {
    console.error('Submit market order error: ', e);
  }
}

async function submitLimitOrder() {
  try {
    const accountId = await getSpotAccountId();
    if (!accountId) {
      console.error('No spot account id found');
      return;
    }

    const limitOrder = await client.submitOrder({
      'account-id': accountId,
      symbol: 'btcusdt',
      type: 'buy-limit',
      amount: '0.0001',
      price: '10000',
      'client-order-id': client.generateNewOrderID(),
    });
    console.log('Limit Order Result: ', limitOrder);
  } catch (e) {
    console.error('Submit limit order error: ', e);
  }
}

async function submitLimitMakerOrder() {
  try {
    const accountId = await getSpotAccountId();
    if (!accountId) {
      console.error('No spot account id found');
      return;
    }

    const postOnlyOrder = await client.submitOrder({
      'account-id': accountId,
      symbol: 'btcusdt',
      type: 'buy-limit-maker',
      amount: '0.0001',
      price: '10000',
      'client-order-id': client.generateNewOrderID(),
    });
    console.log('Limit Maker Order Result: ', postOnlyOrder);
  } catch (e) {
    console.error('Submit limit maker order error: ', e);
  }
}

async function submitBatchOrders() {
  try {
    const accountId = await getSpotAccountId();
    if (!accountId) {
      console.error('No spot account id found');
      return;
    }

    const batchResult = await client.submitBatchOrders([
      {
        'account-id': accountId,
        symbol: 'btcusdt',
        type: 'buy-limit',
        amount: '0.0001',
        price: '10000',
        'client-order-id': client.generateNewOrderID(),
      },
      {
        'account-id': accountId,
        symbol: 'btcusdt',
        type: 'buy-limit',
        amount: '0.0001',
        price: '10000',
        'client-order-id': client.generateNewOrderID(),
      },
    ]);
    console.log('Batch Order Result: ', JSON.stringify(batchResult, null, 2));
  } catch (e) {
    console.error('Submit batch orders error: ', e);
  }
}

// Uncomment the function you want to test:

// submitMarketOrder();
// submitLimitOrder();
// submitLimitMakerOrder();
// submitBatchOrders();
