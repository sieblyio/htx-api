// TODO: HTX WebSocket API support is not implemented yet (WebsocketAPIClient wrapper + HTX-specific examples still to do).
// Low-level sendWSAPIRequest() exists on WebsocketClient, but user-facing examples are still to do.

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
    key: process.env.API_FUTURES_KEY || 'keyHere',
    secret: process.env.API_FUTURES_SECRET || 'secretHere',
  };

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

  const runLiveTradingExamples = false;

  if (!runLiveTradingExamples) {
    console.log('Set runLiveTradingExamples=true after reviewing the params.');
    return;
  }

  const linearPlaceOrder = await client.sendWSAPIRequest(
    WS_KEY_MAP.linearSwapTrade,
    'place_order',
    {
      contract_code: 'BTC-USDT',
      margin_mode: 'cross',
      position_side: 'long',
      side: 'buy',
      type: 'limit',
      time_in_force: 'gtc',
      price: '20000',
      volume: '1',
      reduce_only: 0,
    },
  );
  console.log('linear place_order:', linearPlaceOrder);

  const deliveryCreateOrder = await client.sendWSAPIRequest(
    WS_KEY_MAP.coinDeliveryTrade,
    'create_order',
    {
      contract_code: 'BTC-USD',
      direction: 'buy',
      offset: 'open',
      price: '20000',
      lever_rate: 5,
      volume: 1,
      order_price_type: 'limit',
    },
  );
  console.log('delivery create_order:', deliveryCreateOrder);

  const coinSwapCreateOrder = await client.sendWSAPIRequest(
    WS_KEY_MAP.coinSwapTrade,
    'create_order',
    {
      contract_code: 'BTC-USD',
      direction: 'buy',
      offset: 'open',
      price: '20000',
      lever_rate: 5,
      volume: 1,
      order_price_type: 'limit',
    },
  );
  console.log('coin swap create_order:', coinSwapCreateOrder);
}

start();
