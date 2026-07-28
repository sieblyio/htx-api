import { gzipSync } from 'node:zlib';

import {
  binaryDataToUint8Array,
  decompressMessageEvent,
  getPromiseRefForWSAPIRequest,
  getPromiseRefPrefixForWSAPIRequest,
  isBinaryLike,
  WS_KEY_MAP,
} from '../../../src/lib/websocket/websocket-util';
import { WebSocketLike } from '../../../src/types/websockets/ws-portable';

describe('websocket-util', () => {
  describe('getPromiseRefForWSAPIRequest()', () => {
    it('should correlate WS API requests by cid instead of operation', () => {
      const request = {
        cid: 'abc-123',
        ch: 'create-order',
        params: {
          symbol: 'btcusdt',
        },
      };

      expect(getPromiseRefForWSAPIRequest(WS_KEY_MAP.spotTrade, request)).toBe(
        `${getPromiseRefPrefixForWSAPIRequest(WS_KEY_MAP.spotTrade)}abc-123`,
      );
    });
  });

  describe('portable binary messages', () => {
    it('normalises ArrayBuffer views without requiring Node Buffer types', () => {
      const source = new Uint8Array([1, 2, 3]);

      expect(isBinaryLike(source)).toBe(true);
      expect([...binaryDataToUint8Array(source)]).toEqual([1, 2, 3]);
    });

    it('decompresses gzip ArrayBuffer payloads', async () => {
      const payload = JSON.stringify({ ch: 'market.btcusdt.ticker', tick: 1 });
      const compressed = Uint8Array.from(gzipSync(payload));

      await expect(
        decompressMessageEvent({
          data: compressed.buffer,
          target: {} as WebSocketLike,
          type: 'message',
        }),
      ).resolves.toMatchObject({ data: payload, type: 'message' });
    });

    it('reports missing DecompressionStream support clearly', async () => {
      const descriptor = Object.getOwnPropertyDescriptor(
        globalThis,
        'DecompressionStream',
      );
      Object.defineProperty(globalThis, 'DecompressionStream', {
        configurable: true,
        value: undefined,
      });

      try {
        await expect(
          decompressMessageEvent({
            data: new Uint8Array([0x1f, 0x8b]),
            target: {} as WebSocketLike,
            type: 'message',
          }),
        ).rejects.toThrow('require DecompressionStream support');
      } finally {
        if (descriptor) {
          Object.defineProperty(globalThis, 'DecompressionStream', descriptor);
        } else {
          Reflect.deleteProperty(globalThis, 'DecompressionStream');
        }
      }
    });
  });
});
