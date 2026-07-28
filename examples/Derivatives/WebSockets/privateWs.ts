import { WebsocketClient, WS_KEY_MAP } from '../../../src/index.js';

// Install from npm in your own project:
// import { WebsocketClient, WS_KEY_MAP } from '@siebly/htx-api';

const linearSwapContractCode = 'BTC-USDT';
const coinMPerpContractCode = 'btc-usd';

async function start() {
  const client = new WebsocketClient(
    {
      apiKey: process.env.API_FUTURES_KEY || 'keyHere',
      apiSecret: process.env.API_FUTURES_SECRET || 'secretHere',
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
   * V5 unified private websocket (use this if your account was upgraded to V5):
   * wss://api.hbdm.vn/ws/v5/notification
   *
   * account needs no extra params.
   * trade and positions require contract_code (use '*' for all contracts).
   */
  client.subscribe(
    [
      'account',
      {
        topic: 'trade',
        payload: { contract_code: linearSwapContractCode },
      },
      {
        topic: 'positions',
        payload: { contract_code: linearSwapContractCode },
      },
    ],
    WS_KEY_MAP.derivativesPrivateV5,
  );

  /**
   * Legacy USDT-margined linear swap private websocket:
   * wss://api.hbdm.vn/linear-swap-notification
   *
   * Only works for accounts that have NOT migrated to V5 yet.
   */
  // client.subscribe(
  //   [
  //     'orders.btc-usdt',
  //     'orders_cross.btc-usdt',
  //     'accounts.btc-usdt',
  //     'accounts_cross.USDT',
  //     'positions.btc-usdt',
  //     'positions_cross.btc-usdt',
  //     'matchOrders.btc-usdt',
  //     'matchOrders_cross.btc-usdt',
  //   ],
  //   WS_KEY_MAP.linearSwapPrivate,
  // );

  /**
   * Coin-margined perpetual swap private websocket:
   * wss://api.hbdm.vn/swap-notification by default.
   */
  client.subscribe(
    [
      `orders.${coinMPerpContractCode}`,
      `accounts.${coinMPerpContractCode}`,
      `positions.${coinMPerpContractCode}`,
    ],
    WS_KEY_MAP.coinSwapPrivate,
  );
}

start();
