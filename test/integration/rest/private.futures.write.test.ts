import { FuturesClient } from '../../../src/index.js';
import { getTestProxy } from '../proxy.util.js';

describe('REST PRIVATE FUTURES WRITE', () => {
  const account = {
    key: process.env.API_FUTURES_KEY,
    secret: process.env.API_FUTURES_SECRET,
  };

  const rest = new FuturesClient(
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

  describe('private POST without params', () => {
    it('should succeed or fail getLinearSwapCrossOpenOrders with empty body (validates signature)', async () => {
      try {
        const res = await rest.getLinearSwapCrossOpenOrders();

        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data).toHaveProperty('orders');
      } catch (e: unknown) {
        // Expected with read-only keys or no cross margin - validates signature
        const err = e as { body?: unknown; message?: string };
        expect(e).toBe('');

        console.error(`err "${expect.getState().currentTestName}"`, {
          body: err?.body,
          e,
        });
      }
    });
  });

  describe.only('private POST with params', () => {
    it('should fail submitLinearSwapIsolatedOrder with invalid params (validates signature)', async () => {
      try {
        const res = await rest.submitLinearSwapIsolatedOrder({
          contract_code: 'btc-usdt',
          direction: 'buy',
          volume: 1,
          lever_rate: 10,
          order_price_type: 'limit',
          price: 0.01,
        });
        console.log(`res "${expect.getState().currentTestName}"`, { res });

        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
      } catch (e: unknown) {
        // Expected: invalid key permission error
        const body = (e as { body?: Record<string, unknown> })?.body;

        // console.log(`err "${expect.getState().currentTestName}"`, { body, e });
        expect(body).toBeDefined();

        const errorMsg = body?.err_msg;
        expect(errorMsg).toMatch(/no permission/i);
      }
    });

    it('should fail submitLinearSwapIsolatedBatchOrders with invalid params (validates signature)', async () => {
      try {
        const res = await rest.submitLinearSwapIsolatedBatchOrders({
          orders_data: [
            {
              contract_code: 'btc-usdt',
              direction: 'buy',
              volume: 1,
              lever_rate: 10,
              order_price_type: 'limit',
              price: 0.011,
            },
            {
              contract_code: 'btc-usdt',
              direction: 'buy',
              volume: 1,
              lever_rate: 10,
              order_price_type: 'limit',
              price: 0.012,
            },
          ],
        });
        console.log(`res "${expect.getState().currentTestName}"`, { res });

        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
      } catch (e: unknown) {
        // Expected: invalid key permission error
        const body = (e as { body?: Record<string, unknown> })?.body;

        // console.error(`err "${expect.getState().currentTestName}"`, {
        //   body,
        //   e,
        // });
        expect(body).toBeDefined();

        const errorMsg = body?.err_msg;
        expect(errorMsg).toMatch(/no permission/i);
      }
    });

    it('should fail cancelLinearSwapIsolatedOrder with key permission error (validates signature)', async () => {
      try {
        const res = await rest.cancelLinearSwapIsolatedOrder({
          order_id: '9999999999999999',
          contract_code: 'btc-usdt',
        });

        expect(res).toBeDefined();
      } catch (e: unknown) {
        // Expected: order not found - validates signature
        const body = (e as { body?: Record<string, unknown> })?.body;
        expect(body).toBeDefined();

        const errorMsg = body?.err_msg;
        expect(errorMsg).toMatch(/no permission/i);
      }
    });

    it('should fail cancelLinearSwapCrossOrder with key permission error (validates signature)', async () => {
      try {
        const res = await rest.cancelLinearSwapCrossOrder({
          order_id: '9999999999999999',
          contract_code: 'btc-usdt',
        });

        expect(res).toBeDefined();
      } catch (e: unknown) {
        // Expected: order not found - validates signature
        const body = (e as { body?: Record<string, unknown> })?.body;
        expect(body).toBeDefined();

        const errorMsg = body?.err_msg;
        expect(errorMsg).toMatch(/no permission/i);
      }
    });
  });
});
