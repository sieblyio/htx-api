/* eslint-disable @typescript-eslint/no-unused-vars */
// Typed derivatives WS API example using WebsocketAPIClient.

import {
  DefaultLogger,
  LogParams,
  WebsocketAPIClient,
  WS_KEY_MAP,
} from '../../../src/index.js';

// Install from npm in your own project:
// import { WebsocketAPIClient, WS_KEY_MAP } from '@siebly/htx-api';

const customLogger: DefaultLogger = {
  trace: (..._params: LogParams): void => {
    // console.log('trace', ...params);
  },
  info: (...params: LogParams): void => {
    console.log('info', ...params);
  },
  error: (...params: LogParams): void => {
    console.error('error', ...params);
  },
};

async function start() {
  const account = {
    key: process.env.API_FUTURES_KEY || 'keyHere',
    secret: process.env.API_FUTURES_SECRET || 'secretHere',
  };

  const client = new WebsocketAPIClient(
    {
      apiKey: account.key,
      apiSecret: account.secret,
    },
    customLogger,
  );

  /**
   * Optional: authenticate any trade websocket before the first request.
   * The first WS API request will also connect/authenticate automatically.
   */
  // await client.getWSClient().connectWSAPI(WS_KEY_MAP.linearSwapTrade);
  // await client.getWSClient().connectWSAPI(WS_KEY_MAP.coinDeliveryTrade);
  // await client.getWSClient().connectWSAPI(WS_KEY_MAP.coinSwapTrade);

  /**
   * These are live trading commands. Keep this false until the params below
   * have been reviewed for your account, contract, and order intent.
   */
  const runLiveTradingExamples = false;

  if (!runLiveTradingExamples) {
    console.log('Set runLiveTradingExamples=true after reviewing the params.');
    return;
  }

  try {
    const linearOrder = await client.placeLinearSwapOrder({
      contract_code: 'BTC-USDT',
      margin_mode: 'cross',
      position_side: 'long',
      side: 'buy',
      type: 'limit',
      time_in_force: 'gtc',
      price: '20000',
      volume: '1',
      reduce_only: 0,
    });
    console.log('placeLinearSwapOrder:', linearOrder);
  } catch (e) {
    console.error('placeLinearSwapOrder error:', e);
  }

  try {
    const linearLegacyOrder = await client.submitLinearSwapOrder({
      contract_code: 'BTC-USDT',
      direction: 'buy',
      offset: 'open',
      price: '20000',
      lever_rate: 5,
      volume: 1,
      order_price_type: 'limit',
      client_order_id: Date.now(),
    });
    console.log('submitLinearSwapOrder:', linearLegacyOrder);
  } catch (e) {
    console.error('submitLinearSwapOrder error:', e);
  }

  try {
    const deliveryOrder = await client.submitCoinDeliveryOrder({
      contract_code: 'BTC-USD',
      direction: 'buy',
      offset: 'open',
      price: '20000',
      lever_rate: 5,
      volume: 1,
      order_price_type: 'limit',
      client_order_id: Date.now(),
    });
    console.log('submitCoinDeliveryOrder:', deliveryOrder);
  } catch (e) {
    console.error('submitCoinDeliveryOrder error:', e);
  }

  try {
    const coinSwapOrder = await client.submitCoinSwapOrder({
      contract_code: 'BTC-USD',
      direction: 'buy',
      offset: 'open',
      price: '20000',
      lever_rate: 5,
      volume: 1,
      order_price_type: 'limit',
      client_order_id: Date.now(),
    });
    console.log('submitCoinSwapOrder:', coinSwapOrder);
  } catch (e) {
    console.error('submitCoinSwapOrder error:', e);
  }

  try {
    const cancelLinearOrder = await client.cancelLinearSwapOrder({
      contract_code: 'BTC-USDT',
      order_id: '123456789',
    });
    console.log('cancelLinearSwapOrder:', cancelLinearOrder);
  } catch (e) {
    console.error('cancelLinearSwapOrder error:', e);
  }

  try {
    const cancelAllCross = await client.cancelAllLinearSwapCrossOrders({
      contract_code: 'BTC-USDT',
    });
    console.log('cancelAllLinearSwapCrossOrders:', cancelAllCross);
  } catch (e) {
    console.error('cancelAllLinearSwapCrossOrders error:', e);
  }

  console.log('WS API keys:', {
    linear: WS_KEY_MAP.linearSwapTrade,
    delivery: WS_KEY_MAP.coinDeliveryTrade,
    swap: WS_KEY_MAP.coinSwapTrade,
  });
}

start();
