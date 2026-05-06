/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  DefaultLogger,
  LogParams,
  WebsocketClient,
  WS_KEY_MAP,
} from '../../../src/index.js';

// Install from npm in your own project:
// import { WebsocketClient, WS_KEY_MAP } from '@siebly/htx-api';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isMutedTrace(params: LogParams): boolean {
  const [message, details] = params;

  if (message === 'Received PING event') {
    return false;
    // return true;
  }

  if (message === 'onWsMessage().emit(message)') {
    return true;
  }

  if (
    typeof message === 'string' &&
    message.startsWith('getFinalEmittable()->pre()')
  ) {
    return true;
  }

  if (
    message === 'Sending upstream ws message: ' &&
    isRecord(details) &&
    typeof details.wsMessage === 'string'
  ) {
    return false;
    // return details.wsMessage.includes('"pong"');
  }

  return false;
}

const customLogger: DefaultLogger = {
  trace: (...params: LogParams): void => {
    // if (isMutedTrace(params)) {
    //   return;
    // }
    // console.log('trace', params);
  },
  info: (...params: LogParams): void => {
    console.log('info', ...params);
  },
  error: (...params: LogParams): void => {
    console.error('error', ...params);
  },
};

async function start() {
  const client = new WebsocketClient({}, customLogger);

  client
    .on('open', (data) => console.log('open:', data.wsKey))
    .on('message', (data) => console.info('message:', JSON.stringify(data)))
    .on('response', (data) => console.info('response:', JSON.stringify(data)))
    .on('reconnecting', (data) => console.log('reconnecting:', data.wsKey))
    .on('reconnected', (data) => console.log('reconnected:', data.wsKey))
    .on('close', (data) => console.log('close:', data.wsKey))
    .on('exception', (data) => console.error('exception:', data));

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
   * USDT-margined linear swap public websocket:
   * wss://api.hbdm.vn/linear-swap-ws by default.
   */
  client.subscribe(
    [
      'market.BTC-USDT.kline.1min',
      'market.BTC-USDT.detail',
      'market.BTC-USDT.trade.detail',
      'market.BTC-USDT.bbo',
    ],
    WS_KEY_MAP.linearSwapPublic,
  );

  /**
   * Coin-margined delivery futures public websocket:
   * wss://api.hbdm.vn/ws by default.
   */
  client.subscribe(
    [
      'market.BTC_CW.kline.1min',
      'market.BTC_CW.detail',
      'market.BTC_CW.trade.detail',
    ],
    WS_KEY_MAP.coinDeliveryPublic,
  );

  /**
   * Coin-margined perpetual swap public websocket:
   * wss://api.hbdm.vn/swap-ws by default.
   */
  client.subscribe(
    [
      'market.BTC-USD.kline.1min',
      'market.BTC-USD.detail',
      'market.BTC-USD.trade.detail',
    ],
    WS_KEY_MAP.coinSwapPublic,
  );

  /**
   * Derivatives index/mark/premium index websocket:
   * wss://api.hbdm.vn/ws_index by default.
   *
   * https://www.htx.com/en-us/opend/newApiPages/?id=8cb7cc15-77b5-11ed-9966-0242ac110003
   */
  client.subscribe(
    [
      'market.BTC-USDT.index.1min',
      'market.BTC-USDT.mark_price.1min',
      'market.BTC-USDT.premium_index.1min',
    ],
    WS_KEY_MAP.derivativesIndex,
  );

  /**
   * Derivatives system/status websocket:
   * wss://api.hbdm.vn/center-notification by default.
   */
  client.subscribe(
    'public.linear-swap.heartbeat',
    WS_KEY_MAP.derivativesSystem,
  );
}

start();
