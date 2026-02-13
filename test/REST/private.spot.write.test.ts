import { SpotClient } from '../../src/index.js';
import { getTestProxy } from '../proxy.util.js';

describe('REST PRIVATE SPOT WRITE', () => {
  const account = {
    key: process.env.API_SPOT_KEY, // Use READ-ONLY keys to get the permission error
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

  describe('POST write operations', () => {
    it('should fail submitOrder with permission denied (validates signature)', async () => {
      try {
        const res = await rest.submitOrder({
          ordertype: 'limit',
          type: 'buy',
          pair: 'XBTUSD',
          volume: '0.001',
          price: '1',
        });

        console.log(`res "${expect.getState().currentTestName}"`, res);
        // If it succeeds, that's fine too (means we have full permissions)
        expect(res).toMatchObject({
          error: [],
          result: expect.any(Object),
        });
      } catch (e: any) {
        // Expected with read-only API keys - validates signature is correct
        // console.log(`err "${expect.getState().currentTestName}"`, e?.body || e);
        const responseBody = e?.body;
        expect(responseBody).toMatchObject({
          error: expect.arrayContaining([
            expect.stringContaining('Cost minimum'),
          ]),
        });
      }
    });

    it('should fail cancelOrder with permission denied (validates signature)', async () => {
      try {
        const res = await rest.cancelOrder({
          txid: 'NONEXISTENT-ORDER-ID-12345',
        });

        console.log(`res "${expect.getState().currentTestName}"`, res);
        // If it succeeds, that's fine too (means we have full permissions)
        expect(res).toMatchObject({
          error: [],
          result: expect.any(Object),
        });
      } catch (e: any) {
        // Expected with read-only API keys - validates signature is correct
        // console.log(`err "${expect.getState().currentTestName}"`, e?.body || e);
        const responseBody = e?.body;
        expect(responseBody).toMatchObject({
          error: expect.arrayContaining([
            expect.stringContaining('Invalid order'),
          ]),
        });
      }
    });

    it('should fail amendOrder with permission denied (validates signature)', async () => {
      try {
        const res = await rest.amendOrder({
          txid: 'NONEXISTENT-ORDER-ID-12345',
          order_qty: '0.002',
        });

        console.log(`res "${expect.getState().currentTestName}"`, res);
        // If it succeeds, that's fine too (means we have full permissions)
        expect(res).toMatchObject({
          error: [],
          result: expect.any(Object),
        });
      } catch (e: any) {
        // Expected with read-only API keys - validates signature is correct
        // console.log(`err "${expect.getState().currentTestName}"`, e?.body || e);
        const responseBody = e?.body;
        expect(responseBody).toMatchObject({
          error: expect.arrayContaining([
            expect.stringContaining('Invalid order'),
          ]),
        });
      }
    });

    it('should fail cancelAllOrders with permission denied (validates signature)', async () => {
      try {
        const res = await rest.cancelAllOrders();

        // console.log(`res "${expect.getState().currentTestName}"`, res);
        // If it succeeds, that's fine too (means we have full permissions)
        expect(res).toMatchObject({
          error: [],
          result: expect.objectContaining({
            count: expect.any(Number),
          }),
        });
      } catch (e: any) {
        // Expected with read-only API keys - validates signature is correct
        // console.log(`err "${expect.getState().currentTestName}"`, e?.body || e);
        const responseBody = e?.body;
        expect(responseBody).toMatchObject({
          error: expect.arrayContaining([
            expect.stringContaining('Permission denied'),
          ]),
        });
      }
    });
  });

  describe('POST funding operations', () => {
    it('should fail getDepositMethods with permission denied (validates signature)', async () => {
      try {
        const res = await rest.getDepositMethods({ asset: 'XBT' });

        console.log(`res "${expect.getState().currentTestName}"`, res);
        // If it succeeds, that's fine too (means we have full permissions)
        expect(res).toMatchObject({
          error: [],
          result: expect.any(Array),
        });
      } catch (e: any) {
        // Expected with read-only API keys - validates signature is correct
        // console.log(`err "${expect.getState().currentTestName}"`, e?.body || e);
        const responseBody = e?.body;
        expect(responseBody).toMatchObject({
          error: expect.arrayContaining([
            expect.stringContaining('Permission denied'),
          ]),
        });
      }
    });

    it('should fail getWithdrawalMethods with permission denied (validates signature)', async () => {
      try {
        const res = await rest.getWithdrawalMethods();

        console.log(`res "${expect.getState().currentTestName}"`, res);
        // If it succeeds, that's fine too (means we have full permissions)
        expect(res).toMatchObject({
          error: [],
          result: expect.any(Array),
        });
      } catch (e: any) {
        // Expected with read-only API keys - validates signature is correct
        // console.log(`err "${expect.getState().currentTestName}"`, e?.body || e);
        const responseBody = e?.body;
        expect(responseBody).toMatchObject({
          error: expect.arrayContaining([
            expect.stringContaining('Permission denied'),
          ]),
        });
      }
    });
  });

  describe('Error handling', () => {
    it('should handle invalid parameters correctly', async () => {
      try {
        const res = await rest.submitOrder({
          invalidParam: 'test',
        } as any);

        console.log(`res "${expect.getState().currentTestName}"`, res);
        // Should not succeed with invalid params
        expect(res).not.toBeDefined();
      } catch (e: any) {
        // Expected to fail with error
        // console.log(`err "${expect.getState().currentTestName}"`, e?.body || e);
        const responseBody = e?.body;
        expect(responseBody).toMatchObject({
          error: expect.any(Array),
        });
      }
    });
  });
});
