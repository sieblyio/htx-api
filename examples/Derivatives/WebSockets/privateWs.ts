/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  DefaultLogger,
  LogParams,
  WebsocketClient,
  WS_KEY_MAP,
} from '../../../src/index.js';

// Install from npm in your own project:
// import { WebsocketClient, WS_KEY_MAP } from '@siebly/htx-api';

// function isRecord(value: unknown): value is Record<string, unknown> {
//   return typeof value === 'object' && value !== null;
// }

// function isMutedTrace(params: LogParams): boolean {
//   const [message, details] = params;

//   if (message === 'Received PING event') {
//     return true;
//   }

//   if (message === 'onWsMessage().emit(message)') {
//     return true;
//   }

//   if (
//     typeof message === 'string' &&
//     message.startsWith('getFinalEmittable()->pre()')
//   ) {
//     return true;
//   }

//   if (
//     message === 'Sending upstream ws message: ' &&
//     isRecord(details) &&
//     typeof details.wsMessage === 'string'
//   ) {
//     // return false;
//     return !details.wsMessage.includes('"pong"');
//   }

//   return false;
// }

// const customLogger: DefaultLogger = {
//   trace: (...params: LogParams): void => {
//     if (isMutedTrace(params)) {
//       return;
//     }
//     console.log('trace', params);
//   },
//   info: (...params: LogParams): void => {
//     console.log('info', ...params);
//   },
//   error: (...params: LogParams): void => {
//     console.error('error', ...params);
//   },
// };

async function start() {
  const account = {
    key: process.env.API_KEY || 'keyHere',
    secret: process.env.API_SECRET || 'secretHere',
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
    // customLogger,// optional: inject custom logger to control logging behavior (e.g. filter out verbose logs, log to file instead of console, etc.)
  );

  client
    .on('open', (data) => console.log('open:', data.wsKey))
    .on('authenticated', (data) => console.log('authenticated:', data.wsKey))
    .on('message', (data) => console.info('message:', JSON.stringify(data)))
    .on('response', (data) => console.info('response:', JSON.stringify(data)))
    .on('reconnecting', (data) => console.log('reconnecting:', data.wsKey))
    .on('reconnected', (data) => console.log('reconnected:', data.wsKey))
    .on('close', (data) => console.log('close:', data.wsKey))
    .on('exception', (data) => console.error('exception:', data));

  /**
   * USDT-margined linear swap private websocket:
   * wss://api.hbdm.vn/linear-swap-notification by default.
   */
  client.subscribe(
    [
      'orders.btc-usdt',
      'orders_cross.btc-usdt',
      'accounts.btc-usdt',
      'accounts_cross.USDT',
      'positions.btc-usdt',
      'positions_cross.btc-usdt',
      'matchOrders.btc-usdt',
      'matchOrders_cross.btc-usdt',
    ],
    WS_KEY_MAP.linearSwapPrivate,
  );

  /**
   * Coin-margined perpetual swap private websocket:
   * wss://api.hbdm.vn/swap-notification by default.
   */
  client.subscribe(
    ['orders.btc-usd', 'accounts.btc-usd', 'positions.btc-usd'],
    WS_KEY_MAP.coinSwapPrivate,
  );

  /**
   * Coin-margined delivery futures private websocket:
   * wss://api.hbdm.vn/notification by default.
   */
  client.subscribe(
    ['orders.btc-usd', 'accounts.btc-usd', 'positions.btc-usd'],
    WS_KEY_MAP.coinDeliveryPrivate,
  );
}

start();
