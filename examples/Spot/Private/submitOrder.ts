/* eslint-disable @typescript-eslint/no-unused-vars */
import { SpotClient } from '../../../src/index.js';

// This example shows how to call Kraken API endpoint with either node.js,
// javascript (js) or typescript (ts) with the npm module "@siebly/kraken-api" for Kraken exchange
// for SUBMITTING ORDERS

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
 * API Key Permissions Required: Orders and trades - Create & modify orders
 *
 */
const client = new SpotClient({
  apiKey: process.env.API_SPOT_KEY || 'insertApiKeyHere',
  apiSecret: process.env.API_SPOT_SECRET || 'insertApiSecretHere',
});

async function submitMarketOrder() {
  try {
    // submit market spot order
    const newOrder = await client.submitOrder({
      ordertype: 'market',
      type: 'buy',
      volume: '0.01',
      pair: 'XBTUSD',
      cl_ord_id: client.generateNewOrderID(),
    });
    console.log('Market Order Result: ', newOrder);
  } catch (e) {
    console.error('Send market order error: ', e);
  }
}

async function submitLimitOrder() {
  try {
    // Submit limit spot order
    const limitOrder = await client.submitOrder({
      ordertype: 'limit',
      type: 'buy',
      volume: '0.0001',
      pair: 'XBTUSD',
      price: '10000',
      cl_ord_id: client.generateNewOrderID(),
    });
    console.log('Limit Order Result: ', limitOrder);
  } catch (e) {
    console.error('Submit limit order error: ', e);
  }
}

async function submitLimitOrderWithFlags() {
  try {
    // Submit post-only limit order (maker-only)
    const postOnlyOrder = await client.submitOrder({
      ordertype: 'limit',
      type: 'buy',
      volume: '0.001',
      pair: 'XBTEUR',
      price: '1000.00',
      oflags: 'post', // post-only flag
      timeinforce: 'GTC', // Good-til-cancelled
      cl_ord_id: client.generateNewOrderID(),
    });
    console.log('Post-Only Limit Order Result: ', postOnlyOrder);
  } catch (e) {
    console.error('Submit post-only order error: ', e);
  }
}

async function submitBatchOrders() {
  try {
    // Submit batch of orders (minimum 2, maximum 15)
    // All orders must be for the same pair
    const batchResult = await client.submitBatchOrders({
      pair: 'XBTUSD',
      orders: [
        {
          ordertype: 'limit',
          type: 'buy',
          volume: '0.0001',
          price: '10000.00',
          timeinforce: 'GTC',
          cl_ord_id: client.generateNewOrderID(),
        },
        {
          ordertype: 'limit',
          type: 'buy',
          volume: '0.0001',
          price: '11111.00',
          timeinforce: 'GTC',
          cl_ord_id: client.generateNewOrderID(),
        },
        {
          ordertype: 'limit',
          type: 'sell',
          volume: '0.0001',
          price: '13000.00',
          timeinforce: 'GTC',
          cl_ord_id: client.generateNewOrderID(),
        },
      ],
    });
    console.log('Batch Order Result: ', JSON.stringify(batchResult, null, 2));
  } catch (e) {
    console.error('Submit batch orders error: ', e);
  }
}

async function submitBatchOrdersValidateOnly() {
  try {
    // Validate batch orders without submitting them
    const validationResult = await client.submitBatchOrders({
      pair: 'XBTUSD',
      validate: true, // Only validate, don't submit
      orders: [
        {
          ordertype: 'limit',
          type: 'buy',
          volume: '0.0001',
          price: '45000.00',
          cl_ord_id: client.generateNewOrderID(),
        },
        {
          ordertype: 'limit',
          type: 'sell',
          volume: '0.0001',
          price: '55000.00',
          cl_ord_id: client.generateNewOrderID(),
        },
      ],
    });
    console.log(
      'Validation Result: ',
      JSON.stringify(validationResult, null, 2),
    );
  } catch (e) {
    console.error('Batch validation error: ', e);
  }
}

// Uncomment the function you want to test:

submitMarketOrder();
// submitLimitOrder();
// submitLimitOrderWithFlags();
// submitBatchOrders();
// submitBatchOrdersValidateOnly();
