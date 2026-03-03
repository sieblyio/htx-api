import { SpotClient } from '../../src/index.js';

describe('REST PUBLIC', () => {
  describe('public endpoints - SpotClient', () => {
    const spotClient = new SpotClient();

    describe('GET without params', () => {
      it('should succeed calling getTickers', async () => {
        const res = await spotClient.getTickers();

        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(Array.isArray(res.data)).toBe(true);
        expect(res.data!.length).toBeGreaterThan(0);
      });

      it('should succeed calling getTimestamp', async () => {
        const res = await spotClient.getTimestamp();

        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(typeof res.data).toBe('number');
      });
    });

    describe('GET with params', () => {
      it('should succeed calling getTicker with symbol', async () => {
        const res = await spotClient.getTicker({ symbol: 'btcusdt' });

        expect(res).toBeDefined();
        expect(res.tick).toBeDefined();
        expect(res.tick).toMatchObject({
          close: expect.any(Number),
          open: expect.any(Number),
        });
      });

      it('should succeed calling getKlines with params', async () => {
        const res = await spotClient.getKlines({
          symbol: 'btcusdt',
          period: '1day',
          size: 5,
        });

        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(Array.isArray(res.data)).toBe(true);
      });
    });
  });

  // describe('public endpoints - FuturesClient', () => {
  //   const futuresClient = new FuturesClient();

    describe('GET without params', () => {
      it('should succeed calling getTickers', async () => {
        const res = await futuresClient.getTickers();

        expect(res).toBeDefined();
        expect(res.ticks).toBeDefined();
        expect(Array.isArray(res.ticks)).toBe(true);
      });

      it('should succeed calling getTimestamp', async () => {
        const res = await futuresClient.getTimestamp();

        expect(res).toBeDefined();
        expect(res.ts).toBeDefined();
        expect(typeof res.ts).toBe('number');
      });
    });

    describe('GET with params', () => {
      it('should succeed calling getTradeHistory with params', async () => {
        const res = await futuresClient.getTradeHistory({
          contract_code: 'btc-usdt',
          size: 10,
        });

        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(Array.isArray(res.data)).toBe(true);
      });

      it('should succeed calling getTicker with contract_code', async () => {
        const res = await futuresClient.getTicker({
          contract_code: 'btc-usdt',
        });

        expect(res).toBeDefined();
        expect(res.tick).toBeDefined();
      });
    });
  });
});
