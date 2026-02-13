import { SpotClient } from '../../src/index.js';
import { getTestProxy } from '../proxy.util.js';

describe('REST PRIVATE SPOT READ', () => {
  const account = {
    key: process.env.API_SPOT_KEY,
    secret: process.env.API_SPOT_SECRET,
  };

  const rest = new SpotClient(
    {
      apiKey: account.key,
      apiSecret: account.secret,
    },
    getTestProxy(),
  );

  it('should have credentials to test with', () => {
    expect(account.key).toBeDefined();
    expect(account.secret).toBeDefined();
  });

  describe('public endpoints (with keys provided)', () => {
    it('should succeed making a GET request to getTicker', async () => {
      try {
        const res = await rest.getTicker({ pair: 'XBTUSD' });

        // console.log(`ticker: "${expect.getState().currentTestName}"`, res);

        expect(res).toMatchObject({
          error: [],
          result: expect.any(Object),
        });
        expect(Object.keys(res.result).length).toBeGreaterThan(0);
      } catch (e: any) {
        console.log(`err "${expect.getState().currentTestName}"`, e?.body || e);
        expect(e).not.toBeDefined();
      }
    });
  });

  describe('private read endpoints', () => {
    describe('without params', () => {
      it('should succeed calling getAccountBalance', async () => {
        try {
          const res = await rest.getAccountBalance();

          // console.log(`res "${expect.getState().currentTestName}"`, res);
          expect(res).toMatchObject({
            error: [],
            result: expect.any(Object),
          });
        } catch (e: any) {
          console.log(
            `err "${expect.getState().currentTestName}"`,
            e?.body || e,
          );
          expect(e).not.toBeDefined();
        }
      });

      it('should succeed calling getOpenOrders', async () => {
        try {
          const res = await rest.getOpenOrders();

          // console.log(`res "${expect.getState().currentTestName}"`, res);
          expect(res).toMatchObject({
            error: [],
            result: expect.objectContaining({ open: expect.any(Object) }),
          });
        } catch (e: any) {
          console.log(
            `err "${expect.getState().currentTestName}"`,
            e?.body || e,
          );
          expect(e).not.toBeDefined();
        }
      });
    });

    describe('with params', () => {
      it('should succeed calling getOpenOrders with params', async () => {
        try {
          const res = await rest.getOpenOrders({
            trades: true,
          });

          // console.log(`res "${expect.getState().currentTestName}"`, res);
          expect(res).toMatchObject({
            error: [],
            result: expect.objectContaining({ open: expect.any(Object) }),
          });
        } catch (e: any) {
          console.log(
            `err "${expect.getState().currentTestName}"`,
            e?.body || e,
          );
          expect(e).not.toBeDefined();
        }
      });

      it('should succeed calling getTradingVolume with params', async () => {
        try {
          const res = await rest.getTradingVolume({ pair: 'XBTUSD' });

          // console.log(`res "${expect.getState().currentTestName}"`, res);
          expect(res).toMatchObject({
            error: [],
            result: expect.any(Object),
          });
        } catch (e: any) {
          console.log(
            `err "${expect.getState().currentTestName}"`,
            e?.body || e,
          );
          expect(e).not.toBeDefined();
        }
      });
    });
  });
});
