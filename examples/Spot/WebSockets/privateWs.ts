/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  DefaultLogger,
  LogParams,
  WebsocketClient,
  WS_KEY_MAP,
} from '../../../src/index.js';

// Install from npm in your own project:
// import { WebsocketClient, WS_KEY_MAP, WSTopicRequest } from '@siebly/htx-api';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isMutedTrace(params: LogParams): boolean {
  const [message, details] = params;

  if (message === 'Received PING event') {
    return true;
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
    // return false;
    return !details.wsMessage.includes('"pong"');
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
  const account = {
    key: process.env.API_KEY || 'keyHere',
    secret: process.env.API_SECRET || 'secretHere',
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
    .on('message', (data) => console.info('message:', JSON.stringify(data)))
    .on('response', (data) => console.info('response:', JSON.stringify(data)))
    .on('reconnecting', (data) => console.log('reconnecting:', data.wsKey))
    .on('reconnected', (data) => console.log('reconnected:', data.wsKey))
    .on('close', (data) => console.log('close:', data.wsKey))
    .on('exception', (data) => console.error('exception:', data));

  /**
   * Spot private websocket: wss://api-aws.huobi.pro/ws/v2 by default.
   *
   * The SDK signs and sends the auth request automatically before subscribing.
   */

  client.subscribe(
    [
      // not specifying "mode", Only update when account balance changed;
      'accounts.update',
      // Specify "mode" as 0, Only update when account balance changed;
      'accounts.update#0',
      // Specify "mode" as 1, Update when either account balance changed or available balance changed.
      'accounts.update#1',
      // Specify "mode" as 2, Whenever account balance or available balance changed, it will be updated together.
      'accounts.update#2',
      // Subscribe to order updates for all symbols (wildcard allowed)
      'orders#*',
      // Subscribe to order updates for btcusdt only
      'orders#btcusdt',
      // Subscribe to trade clearing for all symbols (wildcard allowed) (mode is optional)
      'trade.clearing#*',
      // Subscribe to trade clearing for btcusdt only (mode is optional)
      'trade.clearing#btcusdt',
      // Subscribe to trade clearing for all symbols, mode 0 (trade event only (default))
      'trade.clearing#*#0',
      // Subscribe to trade clearing for all symbols, mode 1 (trade & cancellation events)
      'trade.clearing#*#1',
    ],
    WS_KEY_MAP.spotPrivateV2,
  );
}

start();
