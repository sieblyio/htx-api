/* eslint-disable @typescript-eslint/no-unused-vars */
import { FuturesClient } from '../../../src/index.js';

// This example shows how to call HTX Derivatives API endpoints for ORDER MANAGEMENT.

/**
 * import { FuturesClient } from '@siebly/htx-api';
 */

const client = new FuturesClient({
  apiKey: process.env.API_FUTURES_KEY || '',
  apiSecret: process.env.API_FUTURES_SECRET || '',
});

const contractCode = 'BTC-USDT';

async function getCrossOpenOrders() {
  try {
    const openOrders = await client.getLinearSwapCrossOpenOrders({
      contract_code: contractCode,
    });
    console.log('Cross Open Orders: ', JSON.stringify(openOrders, null, 2));
  } catch (e) {
    console.error('Get cross open orders error: ', e);
  }
}

async function getCrossOrderInfo() {
  try {
    const orderInfo = await client.getLinearSwapCrossOrderInfo({
      contract_code: contractCode,
      order_id: '1234567890123456',
    });
    console.log('Cross Order Info: ', JSON.stringify(orderInfo, null, 2));
  } catch (e) {
    console.error('Get cross order info error: ', e);
  }
}

async function getCrossHistoryOrders() {
  try {
    const historyOrders = await client.getLinearSwapCrossHistoryOrders({
      contract: contractCode,
      trade_type: 0,
      type: 1,
      status: '3,4,5,6',
    });
    console.log(
      'Cross History Orders: ',
      JSON.stringify(historyOrders, null, 2),
    );
  } catch (e) {
    console.error('Get cross history orders error: ', e);
  }
}

async function cancelCrossOrder() {
  try {
    const cancelResult = await client.cancelLinearSwapCrossOrder({
      contract_code: contractCode,
      order_id: '1234567890123456',
    });
    console.log('Cancel Order Result: ', JSON.stringify(cancelResult, null, 2));
  } catch (e) {
    console.error('Cancel cross order error: ', e);
  }
}

async function cancelAllCrossOrders() {
  try {
    const cancelAllResult = await client.cancelLinearSwapCrossAllOrders({
      contract_code: contractCode,
    });
    console.log(
      'Cancel All Orders Result: ',
      JSON.stringify(cancelAllResult, null, 2),
    );
  } catch (e) {
    console.error('Cancel all cross orders error: ', e);
  }
}

async function setCancelAllAfter() {
  try {
    const cancelAfterResult = await client.setLinearSwapCancelAfter({
      on_off: 1,
      time_out: 120,
    });
    console.log(
      'Cancel All After Result: ',
      JSON.stringify(cancelAfterResult, null, 2),
    );
  } catch (e) {
    console.error('Set cancel all after error: ', e);
  }
}

async function cancelMultiAssetOrder() {
  try {
    const cancelResult = await client.cancelMultiAssetOrder({
      contract_code: contractCode,
      order_id: '1234567890123456',
    });
    console.log(
      'Cancel Multi-Asset Order Result: ',
      JSON.stringify(cancelResult, null, 2),
    );
  } catch (e) {
    console.error('Cancel multi-asset order error: ', e);
  }
}

async function getMultiAssetOpenOrders() {
  try {
    const openOrders = await client.getMultiAssetOpenOrders({
      contract_code: contractCode,
    });
    console.log(
      'Multi-Asset Open Orders: ',
      JSON.stringify(openOrders, null, 2),
    );
  } catch (e) {
    console.error('Get multi-asset open orders error: ', e);
  }
}

// Uncomment the function you want to test:

//getCrossOpenOrders();
// getCrossOrderInfo();
// getCrossHistoryOrders();
// cancelCrossOrder();
// cancelAllCrossOrders();
// setCancelAllAfter();
cancelMultiAssetOrder();
// getMultiAssetOpenOrders();
