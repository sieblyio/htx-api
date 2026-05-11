import { AxiosRequestConfig } from 'axios';
import type { ClientRequestArgs } from 'http';
import WebSocket from 'isomorphic-ws';

import { RestClientOptions } from '../../lib/requestUtils.js';
import { HtxWSNetwork } from '../../lib/websocket/websocket-util.js';

/** General configuration for the WebsocketClient */
export interface WSClientConfigurableOptions {
  /** Your API key */
  apiKey?: string;

  /** Your API secret */
  apiSecret?: string;

  /** Define a recv window when preparing a private websocket signature. This is in milliseconds, so 5000 == 5 seconds. */
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
    agent?: ClientRequestArgs['agent'];
  } & Partial<WebSocket.ClientOptions | ClientRequestArgs>;

  wsUrl?: string;

  /**
   * Switch between the AWS and Standard WebSocket domains. The AWS domain has better connectivity from certain regions. If you have trouble maintaining a stable connection, try switching the domain.
   *
   * AWS is used by default. If this field isn't set, but you're setting the baseUrlKey in the embedded restOptions, the WS domain will automatically switch to match the REST domain.
   */
  wsEnvironment?: HtxWSNetwork;

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

  /**
   * Whether to use native WebSocket ping/pong frames for heartbeats.
   */
  useNativeHeartbeats?: boolean;
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

export interface WsSpotAuthParams {
  authType: 'api';
  accessKey: string;
  signatureMethod: 'HmacSHA256' | 'Ed25519';
  signatureVersion: '2.1';
  timestamp: string;
  signature: string;
}

export interface WsDerivativesAuthParams {
  op: 'auth';
  type: 'api';
  AccessKeyId: string;
  SignatureMethod: 'HmacSHA256' | 'Ed25519';
  SignatureVersion: '2';
  Timestamp: string;
  Signature: string;
}

/** Vague structure for JSON-parsed incoming msg */
export type ParsedWsMessage = Record<string, unknown>;
