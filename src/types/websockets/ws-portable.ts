/* eslint-disable @typescript-eslint/no-explicit-any */

/** A binary WebSocket payload supported in both Node.js and browsers. */
export type WebSocketBinaryData = ArrayBuffer | ArrayBufferView;

/** Standard WebSocket ready-state values shared by Node.js and browsers. */
export const WebSocketReadyState = {
  CONNECTING: 0,
  OPEN: 1,
  CLOSING: 2,
  CLOSED: 3,
} as const;

/**
 * The portable portion of a WebSocket connection exposed by this SDK.
 *
 * Node.js `ws` instances and browser-native `WebSocket` instances both satisfy
 * this interface. Runtime-specific extensions remain available through
 * `wsOptions`, without making consumers install Node.js or `ws` declarations.
 */
export interface WebSocketLike {
  readonly readyState: number;

  binaryType?: string;
  onopen: ((event: any) => any) | null;
  onmessage: ((event: any) => any) | null;
  onerror: ((event: any) => any) | null;
  onclose: ((event: any) => any) | null;

  /** Runtime implementations accept their own wider binary-data variants. */
  send(data: any): void;
  close(code?: number, reason?: string): void;

  /** Node.js `ws` extension. Undefined for browser-native sockets. */
  ping?: () => void;
  /** Node.js `ws` extension. Undefined for browser-native sockets. */
  terminate?: () => void;
  /** Node.js-style event API. Undefined for browser-native sockets. */
  on?: (event: string, listener: (event: unknown) => void) => unknown;

  /** Internal connection identifier attached by the SDK. */
  wsKey?: string;
}

/** Portable shape for a WebSocket message event. */
export interface MessageEventLike<TData = string> {
  target: unknown;
  type: string;
  data: TData;
}

/**
 * Connection options forwarded to the underlying WebSocket implementation.
 * Known cross-runtime options are documented while the index signature keeps
 * runtime-specific `ws`/agent options available without exposing their types.
 */
export interface WSConnectionOptions {
  protocols?: string | string[] | undefined;
  agent?: unknown;
  headers?: Record<string, number | string | string[] | undefined> | undefined;
  followRedirects?: boolean | undefined;
  handshakeTimeout?: number | undefined;
  maxPayload?: number | undefined;
  origin?: string | undefined;
  perMessageDeflate?: boolean | object | undefined;
  rejectUnauthorized?: boolean | undefined;
  [key: string]: any;
}

export type EventName = string | symbol;
export type EventListener = (...args: any[]) => void;

/** SDK-owned instance surface compatible with Node's EventEmitter. */
export interface EventEmitterLike {
  addListener(eventName: EventName, listener: EventListener): this;
  on(eventName: EventName, listener: EventListener): this;
  once(eventName: EventName, listener: EventListener): this;
  prependListener(eventName: EventName, listener: EventListener): this;
  prependOnceListener(eventName: EventName, listener: EventListener): this;
  off(eventName: EventName, listener: EventListener): this;
  removeListener(eventName: EventName, listener: EventListener): this;
  removeAllListeners(eventName?: EventName): this;
  setMaxListeners(count: number): this;
  getMaxListeners(): number;
  listeners(eventName: EventName): EventListener[];
  rawListeners(eventName: EventName): EventListener[];
  emit(eventName: EventName, ...args: any[]): boolean;
  listenerCount(eventName: EventName, listener?: EventListener): number;
  eventNames(): EventName[];
}

/** Constructor abstraction used to hide runtime-specific emitter declarations. */
export interface EventEmitterConstructor {
  new (options?: { captureRejections?: boolean }): EventEmitterLike;
  readonly prototype: EventEmitterLike;
  defaultMaxListeners: number;
  listenerCount(emitter: EventEmitterLike, eventName: EventName): number;
}
