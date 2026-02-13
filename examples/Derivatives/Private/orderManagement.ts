/* eslint-disable @typescript-eslint/no-unused-vars */
// This example shows how to call Kraken API endpoint with either node.js,
// javascript (js) or typescript (ts) with the npm module "@siebly/kraken-api" for Kraken exchange
// for ORDER MANAGEMENT

import { DerivativesClient } from '../../../src/index.js';

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
 */
const client = new DerivativesClient({
  apiKey: process.env.API_FUTURES_KEY || 'insertApiKeyHere',
  apiSecret: process.env.API_FUTURES_SECRET || 'insertApiSecretHere',
});
async function editOrder() {
  try {
    // Edit an existing order
    const editResult = await client.editOrder({
      orderId: 'a04d0f84-36d4-4499-8382-96fcfc3ce7aa', // Or use cliOrdId instead
      limitPrice: 1100, // New limit price
      // or add some other parameters you want to edit
    });
    console.log('Edit Order Result: ', JSON.stringify(editResult, null, 2));

    // Response includes:
    // - status: edited, invalidSize, invalidPrice, etc.
    // - orderEvents: Array of order events
  } catch (e) {
    console.error('Edit order error: ', e);
  }
}

async function cancelOrder() {
  try {
    // Cancel a single order
    const cancelResult = await client.cancelOrder({
      order_id: 'a04d0f84-36d4-4499-8382-96fcfc3ce7aa', // Or use cliOrdId
    });
    console.log('Cancel Order Result: ', JSON.stringify(cancelResult, null, 2));

    // Response status:
    // - cancelled: Successfully cancelled
    // - filled: Order was already filled
    // - notFound: Order not found
  } catch (e) {
    console.error('Cancel order error: ', e);
  }
}

async function cancelAllOrders() {
  try {
    // Cancel all open orders
    const cancelAllResult = await client.cancelAllOrders();
    console.log(
      'Cancel All Orders Result: ',
      JSON.stringify(cancelAllResult, null, 2),
    );

    // Response includes:
    // - status: cancelled or noOrdersToCancel
    // - cancelledOrders: Array of cancelled order IDs
  } catch (e) {
    console.error('Cancel all orders error: ', e);
  }
}

async function cancelAllOrdersBySymbol() {
  try {
    // Cancel all orders for specific symbol
    const cancelBySymbol = await client.cancelAllOrders({
      symbol: 'PF_ETHUSD',
    });
    console.log(
      'Cancel Orders by Symbol Result: ',
      JSON.stringify(cancelBySymbol, null, 2),
    );
  } catch (e) {
    console.error('Cancel orders by symbol error: ', e);
  }
}

async function batchOrderManagement() {
  try {
    // Send, edit, and cancel orders in a single batch request
    const batchResult = await client.batchOrderManagement({
      json: {
        batchOrder: [
          // Edit existing order
          {
            order: 'edit',
            order_id: 'a04d1143-757a-4dba-a0a7-687303b9c62d',
            limitPrice: 900,
          },
          // Cancel existing order
          {
            order: 'cancel',
            order_id: 'a04d116e-fb9c-4bcf-9eaf-ea90254439b3',
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

// editOrder();
// cancelOrder();
// cancelAllOrders();
// cancelAllOrdersBySymbol();
// batchOrderManagement();
