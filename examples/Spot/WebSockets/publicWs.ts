/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  DefaultLogger,
  LogParams,
  WebsocketClient,
  WS_KEY_MAP,
  WSTopicRequest,
} from '../../../src/index.js';
// normally you should install this module via npm: `npm install @siebly/kraken-api` and import the module:
// import { LogParams, WebsocketClient, WSTopicRequest } from '@siebly/kraken-api';

const customLogger: DefaultLogger = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  trace: (...params: LogParams): void => {
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
   * In terms of product groups such as Spot, Derivatives, etc., the WebsocketClient understand the product group from the WsKey you provide when subscribing. For example, using `WS_KEY_MAP.spotPublicV2` indicates that the subscription is for Spot private topics, as shown below.
   *
   * Refer to WS_KEY_MAP in the source code for all available WsKey options.
   */
  const client = new WebsocketClient({}, customLogger);

  // Optional, inject a custom logger
  // const client = new WebsocketClient({}, customLogger);

  client.on('open', (data) => {
    console.log('connected ', data?.wsKey);
  });

  // Data received
  client.on('message', (data) => {
    console.info('data received: ', JSON.stringify(data));
  });

  // Something happened, attempting to reconnect
  client.on('reconnecting', (data) => {
    console.log('reconnect: ', data);
  });

  // Reconnect successful
  client.on('reconnected', (data) => {
    console.log('reconnected: ', data);
  });

  // Connection closed. If unexpected, expect reconnect -> reconnected.
  client.on('close', (data) => {
    console.error('close: ', data);
  });

  // Reply to a request, e.g. "subscribe"/"unsubscribe"/"authenticate"
  client.on('response', (data) => {
    console.info('server reply: ', JSON.stringify(data), '\n');
  });

  client.on('exception', (data) => {
    console.error('exception: ', data);
  });

  client.on('authenticated', (data) => {
    console.error('authenticated: ', data);
  });

  try {
    // Spot ticker level 1: https://docs.kraken.com/api/docs/websocket-v2/ticker
    const tickersRequestWithParams: WSTopicRequest = {
      topic: 'ticker',
      payload: {
        symbol: ['ALGO/USD', 'BTC/USD'],
        // below params are optional:
        // event_trigger: 'bbo', // bbo: on a change in the best-bid-offer price levels.
        // event_trigger: 'trades', // trades: on every trade.
        // snapshot: true, // default: true
      },
    };

    // client.subscribe(tickersRequestWithParams, WS_KEY_MAP.spotPublicV2);

    // Book level 2: https://docs.kraken.com/api/docs/websocket-v2/book
    const bookRequestWithParams: WSTopicRequest = {
      topic: 'book',
      payload: {
        symbol: ['BTC/USD', 'BTC/GBP'],
        // below params are optional:
        // depth: 10, // default: 10, Possible values: [10, 25, 100, 500, 1000]
        // snapshot: true, // default: true
      },
    };

    // client.subscribe(bookRequestWithParams, WS_KEY_MAP.spotPublicV2);

    // Candles (OHLC): https://docs.kraken.com/api/docs/websocket-v2/ohlc
    const candleOhlcRequestWithParams: WSTopicRequest = {
      topic: 'ohlc',
      payload: {
        symbol: ['BTC/USD', 'BTC/GBP'],
        interval: 1, // Possible values: [1, 5, 15, 30, 60, 240, 1440, 10080, 21600]

        // below params are optional:
        // snapshot: true, // default: true
      },
    };

    // client.subscribe(candleOhlcRequestWithParams, WS_KEY_MAP.spotPublicV2);

    // Trades: https://docs.kraken.com/api/docs/websocket-v2/trade
    const tradesRequestWithParams: WSTopicRequest = {
      topic: 'trade',
      payload: {
        symbol: ['BTC/USD', 'BTC/GBP'],
        // below params are optional:
        // snapshot: true, // default: true
      },
    };

    // client.subscribe(tradesRequestWithParams, WS_KEY_MAP.spotPublicV2);

    // Instruments: https://docs.kraken.com/api/docs/websocket-v2/instrument
    const instrumentsRequestWithParams: WSTopicRequest = {
      topic: 'instrument',
      payload: {
        symbol: ['BTC/USD', 'BTC/GBP'],
        // below params are optional:
        // If true, include xStocks in the response, otherwise include crypto spot pairs only:
        include_tokenized_assets: true, // default: false
        // snapshot: true, // default: true
      },
    };

    client.subscribe(instrumentsRequestWithParams, WS_KEY_MAP.spotPublicV2);

    /**
     * Either send one topic (with optional params) at a time (as shown above in the commented-out lines)
     */
    client.subscribe(tickersRequestWithParams, WS_KEY_MAP.spotPublicV2);

    /**
     * Or send multiple topics in a batch (grouped by ws connection (WsKey))
     */
    client.subscribe(
      [
        tickersRequestWithParams,
        tradesRequestWithParams,
        instrumentsRequestWithParams,
      ],
      WS_KEY_MAP.spotPublicV2,
    );
  } catch (e) {
    console.error('Req error: ', e);
  }
}

start();
