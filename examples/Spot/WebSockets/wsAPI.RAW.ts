// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  DefaultLogger,
  LogParams,
  WebsocketClient,
  WS_KEY_MAP,
} from '../../../src/index.js';
// normally you should install this module via npm: `npm install @siebly/kraken-api` and import the module:
// import { DefaultLogger, LogParams, WebsocketClient, WS_KEY_MAP } from '@siebly/kraken-api';

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

  /**
   * The below examples demonstrate how you can subscribe to private topics.
   *
   * Note: while the documentation specifies "token" as a required parameter, the SDK will automatically:
   * - fetch the token using your API key/secret,
   * - manage token caching/refreshing,
   * - include the token in the request for you.
   *
   * So you do NOT need to manually fetch or provide the token when subscribing to private topics.
   *
   * Do note that all of these include the "spotPrivateV2" WsKey reference. This tells the WebsocketClient to use the private "wss://ws-auth.kraken.com/v2" endpoint for these private subscription requests.
   */

  try {
    const addOrderResponse = await client.sendWSAPIRequest(
      WS_KEY_MAP.spotPrivateV2,
      'add_order',
      {
        order_type: 'limit',
        side: 'buy',
        limit_price: 26500.4,
        order_userref: 100054,
        order_qty: 1.2,
        symbol: 'BTC/USD',
      },
    );
    console.log('addOrderResponse: ', addOrderResponse);

    const addOrderConditionalResponse = await client.sendWSAPIRequest(
      WS_KEY_MAP.spotPrivateV2,
      'add_order',
      {
        order_type: 'limit',
        side: 'buy',
        order_qty: 1.2,
        symbol: 'BTC/USD',
        limit_price: 28440,
        conditional: {
          order_type: 'stop-loss-limit',
          trigger_price: 28410,
          limit_price: 28400,
        },
      },
    );
    console.log('addOrderConditionalResponse: ', addOrderConditionalResponse);

    const addOrderTriggersResponse = await client.sendWSAPIRequest(
      WS_KEY_MAP.spotPrivateV2,
      'add_order',
      {
        order_type: 'stop-loss',
        side: 'sell',
        order_qty: 100,
        symbol: 'MATIC/USD',
        triggers: {
          reference: 'last',
          price: 10.0,
          price_type: 'pct',
        },
      },
    );
    console.log('addOrderTriggersResponse: ', addOrderTriggersResponse);

    const amendOrderResponse = await client.sendWSAPIRequest(
      WS_KEY_MAP.spotPrivateV2,
      'amend_order',
      {
        cl_ord_id: '2c6be801-1f53-4f79-a0bb-4ea1c95dfae9',
        limit_price: 10000,
        order_qty: 1.2,
      },
    );
    console.log('amendOrderResponse: ', amendOrderResponse);

    const amendOrderPostOnlyResponse = await client.sendWSAPIRequest(
      WS_KEY_MAP.spotPrivateV2,
      'amend_order',
      {
        order_id: 'OAIYAU-LGI3M-PFM5VW',
        order_qty: 1.2,
        limit_price: 1100.3,
        deadline: '2025-11-19T09:53:59.050Z',
        post_only: true,
      },
    );
    console.log('amendOrderPostOnlyResponse: ', amendOrderPostOnlyResponse);

    const cancelOrderResponse = await client.sendWSAPIRequest(
      WS_KEY_MAP.spotPrivateV2,
      'cancel_order',
      {
        order_id: ['OM5CRX-N2HAL-GFGWE9', 'OLUMT4-UTEGU-ZYM7E9'],
      },
    );
    console.log('cancelOrderResponse: ', cancelOrderResponse);

    const cancelAllResponse = await client.sendWSAPIRequest(
      WS_KEY_MAP.spotPrivateV2,
      'cancel_all',
    );
    console.log('cancelAllResponse: ', cancelAllResponse);

    const cancelAllOrdersAfterResponse = await client.sendWSAPIRequest(
      WS_KEY_MAP.spotPrivateV2,
      'cancel_all_orders_after',
      {
        timeout: 100,
      },
    );
    console.log('cancelAllOrdersAfterResponse: ', cancelAllOrdersAfterResponse);

    const batchAddResponse = await client.sendWSAPIRequest(
      WS_KEY_MAP.spotPrivateV2,
      'batch_add',
      {
        deadline: '2025-11-19T09:53:59.050Z',
        orders: [
          {
            limit_price: 1010.1,
            order_qty: 1.2,
            order_type: 'limit',
            order_userref: 1,
            side: 'buy',
          },
          {
            limit_price: 1100.3,
            order_qty: 1.2,
            order_type: 'limit',
            order_userref: 2,
            side: 'sell',
            stp_type: 'cancel_both',
          },
        ],
        symbol: 'BTC/USD',
        validate: false,
      },
    );
    console.log('batchAddResponse: ', batchAddResponse);

    const batchCancelResponse = await client.sendWSAPIRequest(
      WS_KEY_MAP.spotPrivateV2,
      'batch_cancel',
      {
        orders: ['OM5CRX-N2HAL-GFGWE9', 'OLUMT4-UTEGU-ZYM7E9'],
      },
    );
    console.log('batchCancelResponse: ', batchCancelResponse);
  } catch (e) {
    console.error('Req error: ', e);
  }
}

start();
