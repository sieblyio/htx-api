/* eslint-disable @typescript-eslint/no-unused-vars */
import { DerivativesClient } from '../../../src/index.js';

// This example shows how to call Kraken API endpoint with either node.js,
// javascript (js) or typescript (ts) with the npm module "@siebly/kraken-api" for Kraken exchange
// for FUTURES ORDER MANAGEMENT

/**
 * import { DerivativesClient } from '@siebly/kraken-api';
 */

// initialise the client
/**
 *
 * Kraken Futures API uses API Key and API Secret
 *
 * Example:
 * {
 *   apiKey: 'your-api-key',
 *   apiSecret: 'your-api-secret',
 * }
 *
 * API Key Permissions Required: Orders and trades - Create & modify orders
 *
 */
const client = new DerivativesClient({
  apiKey: process.env.API_FUTURES_KEY || 'insertApiKeyHere',
  apiSecret: process.env.API_FUTURES_SECRET || 'insertApiSecretHere',
});

async function submitLimitOrder() {
  try {
    // Submit limit order for Futures
    const limitOrder = await client.submitOrder({
      orderType: 'lmt',
      symbol: 'PF_ETHUSD', // Perpetual ETH/USD
      side: 'buy',
      size: 0.01, // Contract size
      limitPrice: 1000,
      cliOrdId: client.generateNewOrderID(),
    });
    console.log('Limit Order Result: ', JSON.stringify(limitOrder, null, 2));

    // Response includes:
    // - status: placed, partiallyFilled, filled, or rejection reason
    // - order_id: Unique order identifier
    // - orderEvents: Array of order events (PLACE, EXECUTE, etc.)
  } catch (e) {
    console.error('Submit limit order error: ', e);
  }
}

async function submitMarketOrder() {
  try {
    // Submit market order (IOC with 1% price protection)
    const marketOrder = await client.submitOrder({
      orderType: 'mkt',
      symbol: 'PF_ETHUSD',
      side: 'sell', // or "buy"
      size: 0.01,
    });
    console.log('Market Order Result: ', JSON.stringify(marketOrder, null, 2));
  } catch (e) {
    console.error('Submit market order error: ', e);
  }
}

async function submitPostOnlyOrder() {
  try {
    // Submit post-only order (maker-only)
    const postOrder = await client.submitOrder({
      orderType: 'post',
      symbol: 'PF_ETHUSD',
      side: 'buy',
      size: 0.01,
      limitPrice: 1000,
      cliOrdId: client.generateNewOrderID(),
    });
    console.log('Post-Only Order Result: ', JSON.stringify(postOrder, null, 2));
  } catch (e) {
    console.error('Submit post-only order error: ', e);
  }
}

async function submitReduceOnlyOrder() {
  try {
    // Submit reduce-only order (only closes position, won't open new)
    const reduceOnlyOrder = await client.submitOrder({
      orderType: 'lmt',
      symbol: 'PF_ETHUSD',
      side: 'sell',
      size: 1,
      limitPrice: 1000,
      reduceOnly: true, // Only reduce existing position
    });
    console.log(
      'Reduce-Only Order Result: ',
      JSON.stringify(reduceOnlyOrder, null, 2),
    );
  } catch (e) {
    console.error('Submit reduce-only order error: ', e);
  }
}

async function batchOrderSubmit() {
  try {
    // Send, edit, and cancel orders in a single batch request
    const batchResult = await client.batchOrderManagement({
      json: {
        batchOrder: [
          // Send new order
          {
            order: 'send',
            order_tag: 'order-1', // Tag to map responses
            orderType: 'lmt',
            symbol: 'PF_ETHUSD',
            side: 'buy',
            size: 0.01,
            limitPrice: 1000,
            cliOrdId: client.generateNewOrderID(),
          },
          // Send another order
          {
            order: 'send',
            order_tag: 'order-2',
            orderType: 'lmt',
            symbol: 'PF_ETHUSD',
            side: 'buy',
            size: 0.01,
            limitPrice: 1100,
          },
        ],
      },
    });
    console.log('Batch Order Result: ', JSON.stringify(batchResult, null, 2));

    // Response includes batchStatus array with results for each order
    // - status: placed, edited, cancelled, or rejection reason
    // - order_tag: Maps back to your request
  } catch (e) {
    console.error('Batch order management error: ', e);
  }
}

// Uncomment the function you want to test:

// submitLimitOrder();
// submitMarketOrder();
// submitPostOnlyOrder();
// submitReduceOnlyOrder();
//batchOrderSubmit();
