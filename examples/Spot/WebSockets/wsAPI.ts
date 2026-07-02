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
   * The WebsocketClient is the core class to manage WebSocket subscriptions. Give it the topics you want to subscribe to, and it will handle the rest:
   * - Connection management (connect, disconnect, reconnect)
   * - Authentication for private topics
   * - Subscription management (subscribe, unsubscribe, resubscribe on reconnect)
   * - Message handling (dispatch messages to appropriate handlers)
   *
   * All you need to do is provide the topics you want to subscribe to when calling `subscribe()`, and the client will take care of the rest.
   *
   * Here we create a WebsocketClient instance with API key/secret for private topic subscriptions.
   *
   * In terms of product groups such as Spot, Derivatives, etc., the WebsocketClient understand the product group from the WsKey you provide when subscribing. For example, using `WS_KEY_MAP.spotPrivateV2` indicates that the subscription is for Spot private topics, as shown below.
   *
   * Refer to WS_KEY_MAP in the source code for all available WsKey options.
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

  const order = await client.submitSpotOrder({
    'account-id': 123456,
    symbol: 'btcusdt',
    type: 'buy-limit',
    amount: '0.001',
    price: '20000',
    source: 'spot-api',
    'client-order-id': `htx-api-${Date.now()}`,
  });
  console.log('submitSpotOrder:', order);

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

  const cancelOrders = await client.cancelSpotOrders({
    'order-ids': ['123456789'],
  });
  console.log('cancelSpotOrders:', cancelOrders);

  const cancelAll = await client.cancelAllSpotOrders({
    'account-id': 123456,
    symbol: 'btcusdt',
    size: 100,
  });
  console.log('cancelAllSpotOrders:', cancelAll);
}

start();
