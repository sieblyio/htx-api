/* eslint-disable @typescript-eslint/no-unused-vars */
import { FuturesClient } from '../../../src/index.js';

// This example shows how to call HTX Derivatives API endpoints for SUBMITTING ORDERS.

/**
 * import { FuturesClient } from '@siebly/htx-api';
 */

const client = new FuturesClient({
  apiKey: process.env.API_FUTURES_KEY || 'insertApiKeyHere',
  apiSecret: process.env.API_FUTURES_SECRET || 'insertApiSecretHere',
});

const contractCode = 'BTC-USDT';
const leverRate = 5;

async function submitCrossLimitOrder() {
  try {
    const limitOrder = await client.submitLinearSwapCrossOrder({
      contract_code: contractCode,
      direction: 'buy',
      offset: 'open',
      volume: 1,
      lever_rate: leverRate,
      order_price_type: 'limit',
      price: 10000,
      client_order_id: Date.now(),
    });
    console.log(
      'Cross Limit Order Result: ',
      JSON.stringify(limitOrder, null, 2),
    );
  } catch (e) {
    console.error('Submit cross limit order error: ', e);
  }
}

async function submitCrossMarketOrder() {
  try {
    const marketOrder = await client.submitLinearSwapCrossOrder({
      contract_code: contractCode,
      direction: 'buy',
      offset: 'open',
      volume: 1,
      lever_rate: leverRate,
      order_price_type: 'opponent',
      client_order_id: Date.now(),
    });
    console.log(
      'Cross Market Order Result: ',
      JSON.stringify(marketOrder, null, 2),
    );
  } catch (e) {
    console.error('Submit cross market order error: ', e);
  }
}

async function submitIsolatedLimitOrder() {
  try {
    const limitOrder = await client.submitLinearSwapIsolatedOrder({
      contract_code: contractCode,
      direction: 'buy',
      offset: 'open',
      volume: 1,
      lever_rate: leverRate,
      order_price_type: 'limit',
      price: 10000,
      client_order_id: Date.now(),
    });
    console.log(
      'Isolated Limit Order Result: ',
      JSON.stringify(limitOrder, null, 2),
    );
  } catch (e) {
    console.error('Submit isolated limit order error: ', e);
  }
}

async function submitCrossBatchOrders() {
  try {
    const batchResult = await client.submitLinearSwapCrossBatchOrders({
      orders_data: [
        {
          contract_code: contractCode,
          direction: 'buy',
          offset: 'open',
          volume: 1,
          lever_rate: leverRate,
          order_price_type: 'limit',
          price: 10000,
          client_order_id: Date.now() * 100 + 1,
        },
        {
          contract_code: contractCode,
          direction: 'sell',
          offset: 'open',
          volume: 1,
          lever_rate: leverRate,
          order_price_type: 'limit',
          price: 130000,
          client_order_id: Date.now() * 100 + 2,
        },
      ],
    });
    console.log('Batch Order Result: ', JSON.stringify(batchResult, null, 2));
  } catch (e) {
    console.error('Submit cross batch orders error: ', e);
  }
}

async function submitMultiAssetOrder() {
  try {
    const multiAssetOrder = await client.submitMultiAssetOrder({
      contract_code: contractCode,
      margin_mode: 'cross',
      side: 'buy',
      type: 'limit',
      volume: '1',
      price: '10000',
      position_side: 'both',
      client_order_id: client.generateNewOrderID(),
    });
    console.log(
      'Multi-Asset Order Result: ',
      JSON.stringify(multiAssetOrder, null, 2),
    );
  } catch (e) {
    console.error('Submit multi-asset order error: ', e);
  }
}

async function submitMultiAssetMarketOrder() {
  try {
    const multiAssetOrder = await client.submitMultiAssetOrder({
      contract_code: contractCode,
      margin_mode: 'cross',
      side: 'buy',
      type: 'market',
      volume: '1',
      position_side: 'both',
      client_order_id: client.generateNewOrderID(),
    });
    console.log(
      'Multi-Asset Market Order Result: ',
      JSON.stringify(multiAssetOrder, null, 2),
    );
  } catch (e) {
    console.error('Submit multi-asset market order error: ', e);
  }
}

// Uncomment the function you want to test:

// submitCrossLimitOrder();
// submitCrossMarketOrder();
// submitIsolatedLimitOrder();
// submitCrossBatchOrders();
// submitMultiAssetOrder();
// submitMultiAssetMarketOrder();
