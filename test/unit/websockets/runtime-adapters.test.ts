import { EventEmitter as NodeEventEmitter } from 'node:events';

import { SpotClient } from '../../../src/SpotClient';
import { WebsocketClient } from '../../../src/WebsocketClient';
import { EventEmitter as BrowserEventEmitter } from '../../../src/lib/event-emitter.browser';
import { EventEmitter as RuntimeEventEmitter } from '../../../src/lib/event-emitter';
import {
  configureHttpsKeepAlive,
  DEFAULT_REQUEST_HEADERS,
} from '../../../src/lib/https-agent';
import { WS_KEY_MAP, WsKey } from '../../../src/lib/websocket/websocket-util';
import { DefaultLogger } from '../../../src/lib/websocket/logger';
import {
  WebSocketLike,
  WebSocketReadyState,
} from '../../../src/types/websockets/ws-portable';

const silentLogger: DefaultLogger = {
  trace: jest.fn(),
  info: jest.fn(),
  error: jest.fn(),
};

function createWebSocket(
  send: (data: string | ArrayBuffer | ArrayBufferView) => void,
): WebSocketLike {
  return {
    readyState: WebSocketReadyState.OPEN,
    onopen: null,
    onmessage: null,
    onerror: null,
    onclose: null,
    send,
    close: jest.fn(),
  };
}

describe('runtime adapters', () => {
  it('uses Node EventEmitter in the Node adapter', () => {
    expect(new RuntimeEventEmitter()).toBeInstanceOf(NodeEventEmitter);
  });

  it('supports listener-specific counts in the browser adapter', () => {
    const emitter = new BrowserEventEmitter();
    const eventName = Symbol('message');
    const listener = jest.fn();
    const otherListener = jest.fn();

    emitter.on(eventName, listener);
    emitter.on(eventName, listener);
    emitter.on(eventName, otherListener);

    expect(emitter.listenerCount(eventName)).toBe(3);
    expect(emitter.listenerCount(eventName, listener)).toBe(2);

    emitter.off(eventName, listener);
    expect(emitter.listenerCount(eventName, listener)).toBe(1);
  });

  it('preserves existing HTTPS agent options and uses Node-only headers', () => {
    const requestOptions: { httpsAgent?: unknown } = {
      httpsAgent: { options: { maxSockets: 7 } },
    };

    configureHttpsKeepAlive(requestOptions, 2500);

    const agent = requestOptions.httpsAgent as {
      destroy(): void;
      options: Record<string, unknown>;
    };
    expect(agent.options).toMatchObject({
      keepAlive: true,
      keepAliveMsecs: 2500,
      maxSockets: 7,
    });
    expect(DEFAULT_REQUEST_HEADERS).toEqual({
      'User-Agent': '@siebly/htx-api',
      locale: 'en-US',
    });
    agent.destroy();
  });

  it('merges caller headers over Node defaults', () => {
    const client = new SpotClient(
      {},
      {
        headers: {
          locale: 'fr-FR',
          'X-Test': 'caller',
        },
      },
    );
    const requestOptions = (
      client as unknown as {
        globalRequestOptions: { headers: Record<string, unknown> };
      }
    ).globalRequestOptions;

    expect(requestOptions.headers).toMatchObject({
      'User-Agent': '@siebly/htx-api',
      locale: 'fr-FR',
      'X-Test': 'caller',
    });
  });

  it('constructs REST clients with browser defaults and caller options intact', () => {
    try {
      jest.isolateModules(() => {
        jest.doMock('../../../src/lib/https-agent', () =>
          jest.requireActual('../../../src/lib/https-agent.browser'),
        );
        const { SpotClient: BrowserSpotClient } =
          require('../../../src/SpotClient') as typeof import('../../../src/SpotClient');
        const httpsAgent = { browserMarker: true };
        const client = new BrowserSpotClient(
          {},
          {
            headers: { 'X-Browser-Test': 'caller' },
            httpsAgent,
          },
        );
        const requestOptions = (
          client as unknown as {
            globalRequestOptions: {
              headers: Record<string, unknown>;
              httpsAgent: unknown;
            };
          }
        ).globalRequestOptions;

        expect(requestOptions.headers).toEqual({
          'X-Browser-Test': 'caller',
        });
        expect(requestOptions.httpsAgent).toBe(httpsAgent);
      });
    } finally {
      jest.dontMock('../../../src/lib/https-agent');
    }
  });

  it('handles browser subscriptions, messages, and reconnect resubscriptions', async () => {
    jest.useFakeTimers();
    const originalDescriptor = Object.getOwnPropertyDescriptor(
      globalThis,
      'WebSocket',
    );
    const sockets: BrowserWebSocket[] = [];

    class BrowserWebSocket {
      binaryType = 'blob';

      readyState: number = WebSocketReadyState.OPEN;

      onopen: ((event: unknown) => unknown) | null = null;

      onmessage: ((event: unknown) => unknown) | null = null;

      onerror: ((event: unknown) => unknown) | null = null;

      onclose: ((event: unknown) => unknown) | null = null;

      sent: string[] = [];

      constructor() {
        sockets.push(this);
      }

      send(data: string) {
        this.sent.push(data);
      }

      close() {
        this.readyState = WebSocketReadyState.CLOSED;
      }
    }

    Object.defineProperty(globalThis, 'WebSocket', {
      configurable: true,
      value: BrowserWebSocket,
    });

    let client: WebsocketClient | undefined;

    try {
      jest.isolateModules(() => {
        jest.doMock('isomorphic-ws', () => BrowserWebSocket);
        const { WebsocketClient: IsolatedWebsocketClient } =
          require('../../../src/WebsocketClient') as typeof import('../../../src/WebsocketClient');
        client = new IsolatedWebsocketClient(
          {
            pingInterval: 60_000,
            reconnectTimeout: 5,
            wsUrl: 'wss://example.test',
          },
          silentLogger,
        );
      });

      const messages: Record<string, unknown>[] = [];
      client!.on('message', (message) => {
        messages.push(message as Record<string, unknown>);
      });
      client!.subscribe('market.btcusdt.ticker', WS_KEY_MAP.spotPublic);

      for (let i = 0; i < 5 && sockets.length === 0; i += 1) {
        await Promise.resolve();
      }

      const firstSocket = sockets[0];
      expect(firstSocket).toBeDefined();
      expect(firstSocket.binaryType).toBe('arraybuffer');
      await firstSocket.onopen?.({ type: 'open' });
      expect(firstSocket.sent).toHaveLength(1);
      expect(JSON.parse(firstSocket.sent[0])).toMatchObject({
        sub: 'market.btcusdt.ticker',
      });

      const textPayload = JSON.stringify({
        ch: 'market.btcusdt.ticker',
        tick: { close: 1 },
      });
      await firstSocket.onmessage?.({
        data: textPayload,
        target: firstSocket,
        type: 'message',
      });

      expect(messages).toEqual([
        expect.objectContaining({ tick: { close: 1 } }),
      ]);

      firstSocket.readyState = WebSocketReadyState.CLOSED;
      await firstSocket.onclose?.({ type: 'close' });
      await jest.advanceTimersByTimeAsync(5);

      for (let i = 0; i < 5 && sockets.length < 2; i += 1) {
        await Promise.resolve();
      }

      const reconnectedSocket = sockets[1];
      expect(reconnectedSocket).toBeDefined();
      await reconnectedSocket.onopen?.({ type: 'open' });
      expect(reconnectedSocket.sent).toHaveLength(1);
      expect(JSON.parse(reconnectedSocket.sent[0])).toMatchObject({
        sub: 'market.btcusdt.ticker',
      });
    } finally {
      client?.closeAll();
      jest.clearAllTimers();
      jest.useRealTimers();
      jest.dontMock('isomorphic-ws');
      if (originalDescriptor) {
        Object.defineProperty(globalThis, 'WebSocket', originalDescriptor);
      } else {
        Reflect.deleteProperty(globalThis, 'WebSocket');
      }
    }
  });

  it('does not arm a pong timeout when native browser ping is unavailable', () => {
    const client = new WebsocketClient(undefined, silentLogger);
    const wsKey = WS_KEY_MAP.derivativesIndex;
    const send = jest.fn();
    const ws = createWebSocket(send);
    const wsStore = client.getWsStore();
    wsStore.setWs(wsKey, ws);

    const pingClient = client as unknown as { ping(key: WsKey): void };
    pingClient.ping(wsKey);

    expect(send).not.toHaveBeenCalled();
    expect(wsStore.get(wsKey, true).activePongTimer).toBeUndefined();
  });

  it('starts a pong timeout only when a ping reaches the socket API', () => {
    const client = new WebsocketClient(undefined, silentLogger);
    const wsKey = WS_KEY_MAP.spotPublic;
    let shouldThrow = true;
    const send = jest.fn(() => {
      if (shouldThrow) {
        throw new Error('send failed');
      }
    });
    const ws = createWebSocket(send);
    const wsStore = client.getWsStore();
    wsStore.setWs(wsKey, ws);

    const pingClient = client as unknown as { ping(key: WsKey): void };
    pingClient.ping(wsKey);
    expect(wsStore.get(wsKey, true).activePongTimer).toBeUndefined();

    shouldThrow = false;
    pingClient.ping(wsKey);
    const pongTimer = wsStore.get(wsKey, true).activePongTimer;
    expect(pongTimer).toBeDefined();

    clearTimeout(pongTimer);
    wsStore.get(wsKey, true).activePongTimer = undefined;
  });
});
