/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  DefaultLogger,
  LogParams,
  WebsocketClient,
  WS_KEY_MAP,
  WSTopicRequest,
} from '../../../src/index.js';
import { WSDerivativesTopic } from '../../../src/types/websockets/ws-subscriptions.js';
// normally you should install this module via npm: `npm install @siebly/kraken-api` and import the module:
// import { LogParams, WebsocketClient, WsTopicRequest } from '@siebly/kraken-api';

const customLogger: DefaultLogger = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  trace: (...params: LogParams): void => {
    // console.log(new Date(), '--> trace', ...params);
  },
  info: (...params: LogParams): void => {
    console.log(new Date(), '--> info', ...params);
  },
  error: (...params: LogParams): void => {
    console.error(new Date(), '--> error', ...params);
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
   * Here we create a WebsocketClient instance without API key/secret, since we're only connecting to public topics.
   *
   * In terms of product groups such as Spot, Derivatives, etc., the WebsocketClient understand the product group from the WsKey you provide when subscribing. For example, using `WS_KEY_MAP.spotPrivateV2` indicates that the subscription is for Spot private topics, as shown below.
   *
   * Refer to WS_KEY_MAP in the source code for all available WsKey options.
   */
  const client = new WebsocketClient(
    {
      // apiKey: key,
      // apiSecret: secret,
    },
    customLogger,
  );

  client.on('open', (data) => {
    console.log(new Date(), 'connected ', data?.wsKey);
  });

  // Data received
  client.on('message', (data) => {
    console.info(new Date(), 'data received: ', JSON.stringify(data));
  });

  // Something happened, attempting to reconnect
  client.on('reconnecting', (data) => {
    console.log(new Date(), 'reconnect: ', data?.wsKey);
  });

  // Reconnect successful
  client.on('reconnected', (data) => {
    console.log(new Date(), 'reconnected: ', data?.wsKey);
  });

  // Connection closed. If unexpected, expect reconnect -> reconnected.
  client.on('close', (data) => {
    console.error(new Date(), 'close: ', data);
  });

  // Reply to a request, e.g. "subscribe"/"unsubscribe"/"authenticate"
  client.on('response', (data) => {
    console.info(new Date(), 'server reply: ', JSON.stringify(data), '\n');
  });

  client.on('exception', (data) => {
    console.error(new Date(), 'exception: ', data);
  });

  client.on('authenticated', (data) => {
    console.error(new Date(), 'authenticated: ', data);
  });

  /**
   * The below examples demonstrate how you can subscribe to public topics.
   *
   * Do note that all of these include the "derivativesPublicV1" WsKey reference. This tells the WebsocketClient to use the private "wss://futures.kraken.com/ws/v1" endpoint for these private subscription requests. It will also automatically authenticate the connection when it is established.
   */

  try {
    // Ticker: https://docs.kraken.com/api/docs/futures-api/websocket/ticker
    const publicTickerTopicRequest: WSTopicRequest<WSDerivativesTopic> = {
      topic: 'ticker',
      payload: {
        product_ids: ['PI_XBTUSD', 'PI_ETHUSD'],
      },
    };
    // client.subscribe(publicTickerTopicRequest, WS_KEY_MAP.derivativesPublicV1);

    // Ticker Lite: https://docs.kraken.com/api/docs/futures-api/websocket/ticker
    const publicTickerLiteTopicRequest: WSTopicRequest<WSDerivativesTopic> = {
      topic: 'ticker_lite',
      payload: {
        product_ids: ['PI_XBTUSD', 'PI_ETHUSD'],
      },
    };
    // client.subscribe(
    //   publicTickerLiteTopicRequest,
    //   WS_KEY_MAP.derivativesPublicV1,
    // );

    // Book: https://docs.kraken.com/api/docs/futures-api/websocket/ticker
    const publicBookTopicRequest: WSTopicRequest<WSDerivativesTopic> = {
      topic: 'book',
      payload: {
        product_ids: ['PI_XBTUSD', 'PI_ETHUSD'],
      },
    };
    // client.subscribe(publicBookTopicRequest, WS_KEY_MAP.derivativesPublicV1);

    // Trade: https://docs.kraken.com/api/docs/futures-api/websocket/ticker
    const publicTradeTopicRequest: WSTopicRequest<WSDerivativesTopic> = {
      topic: 'trade',
      payload: {
        product_ids: ['PI_XBTUSD', 'PI_ETHUSD'],
      },
    };
    client.subscribe(publicTradeTopicRequest, WS_KEY_MAP.derivativesPublicV1);
  } catch (e) {
    console.error('Req error: ', e);
  }
}

start();
