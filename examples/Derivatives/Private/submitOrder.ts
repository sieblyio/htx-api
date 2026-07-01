/* eslint-disable @typescript-eslint/no-unused-vars */
import { FuturesClient } from '../../../src/index.js';

// This example shows how to call HTX Derivatives API endpoints for SUBMITTING ORDERS.

/**
 * import { FuturesClient } from '@siebly/htx-api';
 */
const client = new FuturesClient({
  apiKey: process.env.API_FUTURES_KEY || '',
  apiSecret: process.env.API_FUTURES_SECRET || '',
});

const linearSwapContractCode = 'BTC-USDT';
const coinMDeliverySymbol = 'BTC';
const coinMDeliveryContractType = 'quarter' as const;
const coinMPerpContractCode = 'BTC-USD';
const leverRate = 1;

async function submitLinearSwapIsolatedOrder() {
  try {
    const res = await client.submitLinearSwapIsolatedOrder({
      contract_code: linearSwapContractCode,
      direction: 'buy',
      offset: 'open',
      volume: 1,
      lever_rate: leverRate,
      order_price_type: 'market',
      client_order_id: client.generateNewOrderID(),
    });
    console.log('Linear Swap Isolated Order: ', res);
  } catch (e) {
    console.error('Submit linear swap isolated order error: ', e);
  }
}

async function submitLinearSwapCrossOrder() {
  try {
    const res = await client.submitLinearSwapCrossOrder({
      contract_code: linearSwapContractCode,
      direction: 'buy',
      offset: 'open',
      volume: 2,
      lever_rate: leverRate,
      order_price_type: 'market',
      client_order_id: client.generateNewOrderID(),
    });
    console.log('Linear Swap Cross Order: ', res);
  } catch (e) {
    console.error('Submit linear swap cross order error: ', e);
  }
}

async function submitLinearSwapIsolatedBatchOrders() {
  try {
    const res = await client.submitLinearSwapIsolatedBatchOrders({
      orders_data: [
        {
          contract_code: linearSwapContractCode,
          direction: 'buy',
          offset: 'open',
          volume: 3,
          lever_rate: leverRate,
          order_price_type: 'market',
          client_order_id: client.generateNewOrderID(),
        },
      ],
    });
    console.log(
      'Linear Swap Isolated Batch Orders: ',
      JSON.stringify(res, null, 2),
    );
  } catch (e) {
    console.error('Submit linear swap isolated batch orders error: ', e);
  }
}

async function submitLinearSwapCrossBatchOrders() {
  try {
    const res = await client.submitLinearSwapCrossBatchOrders({
      orders_data: [
        {
          contract_code: linearSwapContractCode,
          direction: 'buy',
          offset: 'open',
          volume: 4,
          lever_rate: leverRate,
          order_price_type: 'market',
          client_order_id: client.generateNewOrderID(),
        },
      ],
    });
    console.log(
      'Linear Swap Cross Batch Orders: ',
      JSON.stringify(res, null, 2),
    );
  } catch (e) {
    console.error('Submit linear swap cross batch orders error: ', e);
  }
}

async function submitMultiAssetOrder() {
  try {
    const res = await client.submitMultiAssetOrder({
      contract_code: linearSwapContractCode,
      margin_mode: 'cross',
      side: 'buy',
      type: 'market',
      volume: '5',
      position_side: 'long',
      client_order_id: String(client.generateNewOrderID()),
    });
    console.log('Multi-Asset Order: ', res);
  } catch (e) {
    console.error('Submit multi-asset order error: ', e);
  }
}

async function submitMultiAssetBatchOrders() {
  try {
    const res = await client.submitMultiAssetBatchOrders([
      {
        contract_code: linearSwapContractCode,
        margin_mode: 'cross',
        side: 'buy',
        type: 'market',
        volume: '6',
        position_side: 'long',
        client_order_id: String(client.generateNewOrderID()),
      },
    ]);
    console.log('Multi-Asset Batch Orders: ', res);
  } catch (e) {
    console.error('Submit multi-asset batch orders error: ', e);
  }
}

async function submitCoinMDeliveryOrder() {
  try {
    const res = await client.submitCoinMDeliveryOrder({
      symbol: coinMDeliverySymbol,
      contract_type: coinMDeliveryContractType,
      direction: 'buy',
      offset: 'open',
      volume: 7,
      lever_rate: leverRate,
      order_price_type: 'opponent',
      client_order_id: client.generateNewOrderID(),
    });
    console.log('Coin-M Delivery Order: ', res);
  } catch (e) {
    console.error('Submit coin-M delivery order error: ', e);
  }
}

async function submitCoinMDeliveryBatchOrders() {
  try {
    const res = await client.submitCoinMDeliveryBatchOrders({
      orders_data: [
        {
          symbol: coinMDeliverySymbol,
          contract_type: coinMDeliveryContractType,
          direction: 'buy',
          offset: 'open',
          volume: 8,
          lever_rate: leverRate,
          order_price_type: 'opponent',
          client_order_id: client.generateNewOrderID(),
        },
      ],
    });
    console.log('Coin-M Delivery Batch Orders: ', JSON.stringify(res, null, 2));
  } catch (e) {
    console.error('Submit coin-M delivery batch orders error: ', e);
  }
}

async function submitCoinMPerpOrder() {
  try {
    const res = await client.submitCoinMPerpOrder({
      contract_code: coinMPerpContractCode,
      direction: 'buy',
      offset: 'open',
      volume: 9,
      lever_rate: leverRate,
      order_price_type: 'opponent',
      client_order_id: client.generateNewOrderID(),
    });
    console.log('Coin-M Perp Order: ', res);
  } catch (e) {
    console.error('Submit coin-M perp order error: ', e);
  }
}

async function submitCoinMPerpBatchOrders() {
  try {
    const res = await client.submitCoinMPerpBatchOrders({
      orders_data: [
        {
          contract_code: coinMPerpContractCode,
          direction: 'buy',
          offset: 'open',
          volume: 10,
          lever_rate: leverRate,
          order_price_type: 'opponent',
          client_order_id: client.generateNewOrderID(),
        },
      ],
    });
    console.log('Coin-M Perp Batch Orders: ', JSON.stringify(res, null, 2));
  } catch (e) {
    console.error('Submit coin-M perp batch orders error: ', e);
  }
}

async function submitCoinMPerpLightningCloseOrder() {
  try {
    const res = await client.submitCoinMPerpLightningCloseOrder({
      contract_code: coinMPerpContractCode,
      volume: 11,
      direction: 'sell',
      order_price_type: 'lightning',
      client_order_id: client.generateNewOrderID(),
    });
    console.log('Coin-M Perp Lightning Close Order: ', res);
  } catch (e) {
    console.error('Submit coin-M perp lightning close order error: ', e);
  }
}

// Uncomment the function you want to test:

// submitLinearSwapIsolatedOrder();
// submitLinearSwapCrossOrder();
// submitLinearSwapIsolatedBatchOrders();
// submitLinearSwapCrossBatchOrders();
//submitMultiAssetOrder();
// submitMultiAssetBatchOrders();
// submitCoinMDeliveryOrder();
// submitCoinMDeliveryBatchOrders();
// submitCoinMPerpOrder();
// submitCoinMPerpBatchOrders();
// submitCoinMPerpLightningCloseOrder();
