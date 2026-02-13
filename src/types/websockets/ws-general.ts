import { AxiosRequestConfig } from 'axios';
import type { ClientRequestArgs } from 'http';
import WebSocket from 'isomorphic-ws';

import { RestClientOptions } from '../../lib/requestUtils.js';

/** General configuration for the WebsocketClient */
export interface WSClientConfigurableOptions {
  /** Your API key */
  apiKey?: string;

  /** Your API secret */
  apiSecret?: string;

  /**
   * Set to `true` to connect to testnet (Kraken's demo environment). The live environment is used by default.
   *
   * Note: as of November 2025, only the derivatives environment supports testnet connections. Kraken refer to this as the "Demo" environment, but it is effectively a testnet.
   * This is a place to test your API integration. It is not a good place to test strategy performance, as the liquidity and orderbook dynamics are very different to the live environment.
   *
   * Refer to the following for more information:
   * https://github.com/tiagosiebler/awesome-crypto-examples/wiki/CEX-Testnets
   */
  testnet?: boolean;

  /** Define a recv window when preparing a private websocket signature. This is in milliseconds, so 5000 == 5 seconds */
  recvWindow?: number;

  /** How often to check if the connection is alive */
  pingInterval?: number;

  /** How long to wait for a pong (heartbeat reply) before assuming the connection is dead */
  pongTimeout?: number;

  /** Delay in milliseconds before respawning the connection */
  reconnectTimeout?: number;

  restOptions?: RestClientOptions;
  requestOptions?: AxiosRequestConfig;

  wsOptions?: {
    protocols?: string[];
    agent?: any;
  } & Partial<WebSocket.ClientOptions | ClientRequestArgs>;

  wsUrl?: string;

  /**
   * Allows you to provide a custom "signMessage" function, e.g. to use node's much faster createHmac method
   *
   * Look in the examples folder for a demonstration on using node's createHmac instead.
   */
  customSignMessageFn?: (message: string, secret: string) => Promise<string>;

  /**
   * If you authenticated the WS API before, automatically try to re-authenticate the WS API if you're disconnected/reconnected for any reason.
   */
  reauthWSAPIOnReconnect?: boolean;
}

/**
 * WS configuration that's always defined, regardless of user configuration
 * (usually comes from defaults if there's no user-provided values)
 */
export interface WebsocketClientOptions extends WSClientConfigurableOptions {
  pingInterval: number;
  pongTimeout: number;
  reconnectTimeout: number;
  recvWindow: number;

  /**
   * If true, require a "receipt" that the connection is ready for use (e.g. a specific event type)
   */
  requireConnectionReadyConfirmation: boolean;
  authPrivateConnectionsOnConnect: boolean;
  authPrivateRequests: boolean;
  reauthWSAPIOnReconnect: boolean;

  /**
   * Whether to use native WebSocket ping/pong frames for heartbeats
   */
  useNativeHeartbeats: boolean;
}

export type WsMarket = 'spot' | 'futures';

export type WsEventInternalSrc = 'event' | 'function' | 'frame';
