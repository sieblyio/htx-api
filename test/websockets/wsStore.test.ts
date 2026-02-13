import { isDeepObjectMatch } from '../../src/lib/websocket/WsStore';

describe('WsStore', () => {
  describe('isDeepObjectMatch()', () => {
    it('should match two equal strings', () => {
      expect(isDeepObjectMatch('ticker', 'ticker')).toBeTruthy();
      expect(isDeepObjectMatch('ticker', 'book')).toBeFalsy();
    });

    it('should match simple topic objects', () => {
      const topic1 = {
        topic: 'ticker',
      };
      const topic2 = {
        topic: 'ticker',
      };

      expect(isDeepObjectMatch(topic1, topic2)).toBeTruthy();
    });

    it('should match topic objects with payload, even if keys are differently ordered', () => {
      const topic1 = {
        topic: 'ticker',
        payload: { symbol: ['BTC/USD', 'ETH/USD'] },
      };
      const topic2 = {
        payload: { symbol: ['BTC/USD', 'ETH/USD'] },
        topic: 'ticker',
      };

      expect(isDeepObjectMatch(topic1, topic2)).toBeTruthy();
    });

    it('should match nested payload objects', () => {
      const topic1 = {
        topic: 'book',
        payload: {
          symbol: ['BTC/USD'],
          depth: 10,
        },
      };
      const topic2 = {
        topic: 'book',
        payload: {
          symbol: ['BTC/USD'],
          depth: 10,
        },
      };

      expect(isDeepObjectMatch(topic1, topic2)).toBeTruthy();
    });

    it('should NOT match topics with different payload values', () => {
      const topic1 = {
        topic: 'ticker',
        payload: { symbol: ['BTC/USD', 'ETH/USD'] },
      };
      const topic2 = {
        topic: 'ticker',
        payload: { symbol: ['XRP/USD'] },
      };

      expect(isDeepObjectMatch(topic1, topic2)).toBeFalsy();
    });

    it('should NOT match topics with nested payload differences', () => {
      const topic1 = {
        topic: 'book',
        payload: {
          symbol: ['BTC/USD'],
          depth: 10,
        },
      };
      const topic2 = {
        topic: 'book',
        payload: {
          symbol: ['BTC/USD'],
          depth: 25,
        },
      };

      expect(isDeepObjectMatch(topic1, topic2)).toBeFalsy();
    });

    it('should NOT match asymmetric objects (missing payload property)', () => {
      const topic1 = {
        topic: 'ticker',
        payload: { symbol: ['BTC/USD', 'ETH/USD'] },
      };
      const topic2 = {
        topic: 'ticker',
      };

      expect(isDeepObjectMatch(topic1, topic2)).toBeFalsy();
    });

    it('should NOT match asymmetric objects (missing nested property)', () => {
      const topic1 = {
        topic: 'book',
        payload: {
          symbol: ['BTC/USD'],
          depth: 10,
        },
      };
      const topic2 = {
        topic: 'book',
        payload: {
          symbol: ['BTC/USD'],
        },
      };

      expect(isDeepObjectMatch(topic1, topic2)).toBeFalsy();
    });

    it('should NOT match string to object', () => {
      expect(
        isDeepObjectMatch('ticker', { topic: 'ticker' }),
      ).toBeFalsy();
    });
  });
});
