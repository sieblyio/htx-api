import {
  getPromiseRefForWSAPIRequest,
  getPromiseRefPrefixForWSAPIRequest,
  WS_KEY_MAP,
} from '../../src/lib/websocket/websocket-util';

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
});
