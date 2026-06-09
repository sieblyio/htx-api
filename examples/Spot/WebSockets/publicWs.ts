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
   * Spot market websocket: wss://api-aws.huobi.pro/ws by default.
   */

  client.subscribe(
    [
      'market.btcusdt.kline.1min',
      'market.btcusdt.kline.5min',
      'market.btcusdt.ticker',
      'market.btcusdt.depth.step0',
      'market.btcusdt.trade.detail',
      'market.btcusdt.bbo',
    ],
    WS_KEY_MAP.spotPublic,
  );

  /**
   * Spot feed websocket: wss://api-aws.huobi.pro/feed by default.
   * Use this for feed-specific/high-frequency topics such as BBO and MBP.
   *
   * E.g. https://www.htx.com/en-us/opend/newApiPages/?id=7ec5362b-7773-11ed-9966-0242ac110003
   */
  client.subscribe(
    ['market.btcusdt.mbp.5', 'market.btcusdt.trade.detail'],
    WS_KEY_MAP.spotFeed,
  );
}

start();
