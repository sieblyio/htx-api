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
   * WebsocketClient can send low-level WS API request/response commands with
   * sendWSAPIRequest(). Use WebsocketAPIClient if you prefer typed wrapper
   * methods for the same trading commands.
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
      'client-order-id': client.generateNewOrderID(),
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
