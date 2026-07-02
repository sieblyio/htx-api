import {
  DefaultLogger,
  LogParams,
  WebsocketClient,
  WS_KEY_MAP,
} from '../../../src/index.js';

// Install from npm in your own project:
// import { WebsocketClient, WS_KEY_MAP } from '@siebly/htx-api';

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
  const client = new WebsocketClient(
    {
      apiKey: account.key,
      apiSecret: account.secret,
    },
    customLogger,
  );

  client
    .on('open', (data) => console.log('open:', data.wsKey))
    .on('authenticated', (data) => console.log('authenticated:', data.wsKey))
    .on('response', (data) => console.info('response:', JSON.stringify(data)))
    .on('exception', (data) => console.error('exception:', data));

  /**
   * Optional: connect/authenticate before the first request.
   */
  // await client.connectWSAPI(WS_KEY_MAP.spotTrade);

  const runLiveTradingExamples = false;

  if (!runLiveTradingExamples) {
    console.log('Set runLiveTradingExamples=true after reviewing the params.');
    return;
  }

  const submitOrderResponse = await client.sendWSAPIRequest(
    WS_KEY_MAP.spotTrade,
    'create-order',
    {
      'account-id': 123456,
      symbol: 'btcusdt',
      type: 'buy-limit',
      amount: '0.001',
      price: '20000',
      source: 'spot-api',
      'client-order-id': `htx-api-${Date.now()}`,
    },
  );
  console.log('create-order:', submitOrderResponse);

  const cancelResponse = await client.sendWSAPIRequest(
    WS_KEY_MAP.spotTrade,
    'cancel',
    {
      'order-ids': ['123456789'],
    },
  );
  console.log('cancel:', cancelResponse);
}

start();
