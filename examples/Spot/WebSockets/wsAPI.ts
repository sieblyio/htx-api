/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  DefaultLogger,
  LogParams,
  WebsocketAPIClient,
} from '../../../src/index.js';

// Install from npm in your own project:
// import { WebsocketAPIClient } from '@siebly/htx-api';

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
    key: process.env.API_SPOT_KEY || 'keyHere',
    secret: process.env.API_SPOT_SECRET || 'secretHere',
  };

  /**
   * The WebsocketAPIClient is a typed REST-like wrapper for WS API
   * request/response trading methods. It uses an embedded WebsocketClient for
   * connection management and authentication.
   */
  const client = new WebsocketAPIClient(
    {
      apiKey: account.key,
      apiSecret: account.secret,
    },
    customLogger,
  );

  /**
   * Optional: authenticate the spot trade websocket before the first request.
   * The first WS API request will also connect/authenticate automatically.
   */
  // await client.getWSClient().connectWSAPI(WS_KEY_MAP.spotTrade);

  /**
   * These are live trading commands. Keep this false until the params below
   * have been reviewed for your account, symbol, and order intent.
   */
  const runLiveTradingExamples = false;

  if (!runLiveTradingExamples) {
    console.log('Set runLiveTradingExamples=true after reviewing the params.');
    return;
  }

  try {
    const order = await client.submitSpotOrder({
      'account-id': 123456,
      symbol: 'btcusdt',
      type: 'buy-limit',
      amount: '0.001',
      price: '20000',
      source: 'spot-api',
      //
      // Example of a custom order ID:
      // to make your own, always include the prefix:
      // 'client-order-id': `${client.getOrderIdPrefix()}${Date.now()}`,
      //
      // or to generate a new unique order ID:
      // 'client-order-id': client.generateNewOrderID(),
      //
      // Note: if you do use the client-order-id, it must be prefixed with `client.getOrderIdPrefix()` and unique. `client.generateNewOrderID()` is the recommended way to generate a unique order ID.
      // Do not store state in custom order IDs. They are best used as look-up keys for a local state cache.
      // For more guidance refer to the best practices on Siebly.io:
      // https://siebly.io/reference/glossary#custom-order-id
    });
    console.log('submitSpotOrder:', order);
  } catch (e) {
    console.error('submitSpotOrder error:', e);
  }

  try {
    const batchOrder = await client.submitSpotBatchOrders([
      {
        'account-id': 123456,
        symbol: 'btcusdt',
        type: 'buy-limit',
        amount: '0.001',
        price: '19000',
        source: 'spot-api',
      },
      {
        'account-id': 123456,
        symbol: 'ethusdt',
        type: 'buy-limit',
        amount: '0.01',
        price: '1000',
        source: 'spot-api',
      },
    ]);
    console.log('submitSpotBatchOrders:', batchOrder);
  } catch (e) {
    console.error('submitSpotBatchOrders error:', e);
  }

  try {
    const marginOrder = await client.submitSpotMarginOrder({
      'account-id': 123456,
      symbol: 'btcusdt',
      type: 'sell-limit',
      amount: '0.001',
      price: '40000',
      source: 'super-margin-api',
      'trade-purpose': 2,
    });
    console.log('submitSpotMarginOrder:', marginOrder);
  } catch (e) {
    console.error('submitSpotMarginOrder error:', e);
  }

  try {
    const cancelOrders = await client.cancelSpotOrders({
      'order-ids': ['123456789'],
    });
    console.log('cancelSpotOrders:', cancelOrders);
  } catch (e) {
    console.error('cancelSpotOrders error:', e);
  }

  try {
    const cancelAll = await client.cancelAllSpotOrders({
      'account-id': 123456,
      symbol: 'btcusdt',
      size: 100,
    });
    console.log('cancelAllSpotOrders:', cancelAll);
  } catch (e) {
    console.error('cancelAllSpotOrders error:', e);
  }
}

start();
