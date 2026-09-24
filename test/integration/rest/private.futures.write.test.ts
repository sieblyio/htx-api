import { FuturesClient } from '../../../src/index.js';
import { getTestProxy } from '../proxy.util.js';

function validateFuturesKeyPermissionException(e: unknown) {
  const err = e as { body?: Record<string, unknown> };
  expect(err).toBeDefined();
  expect(err.body).toBeDefined();
  // Linear-swap now returns HTTP 200 + { status: "error", err_code: 403, err_msg: null }.
  // Signature is valid; the key has no trade permission. Do not require err_msg text.
  expect(err.body?.status).toBe('error');
  expect(err.body?.err_code).toBe(403);
}

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
    // Linear USDT-M openorders (cross + isolated) return HTX 6023 on api.hbdm.vn.
    // Coin-M perp openorders is the same empty-body POST + signature path / response shape.
    it('should succeed or fail getCoinMPerpOpenOrders with empty body (validates signature)', async () => {
      try {
        const res = await rest.getCoinMPerpOpenOrders();

        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data).toHaveProperty('orders');
      } catch (e: unknown) {
        // Expected with read-only keys - validates signature
        const err = e as { body?: unknown; message?: string };
        expect(e).toBe('');

        console.error(`err "${expect.getState().currentTestName}"`, {
          body: err?.body,
          e,
        });
      }
    });
  });

  describe('private POST with params', () => {
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
        // console.log(`err "${expect.getState().currentTestName}"`, { body, e });
        validateFuturesKeyPermissionException(e);
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
        // console.error(`err "${expect.getState().currentTestName}"`, {
        //   body,
        //   e,
        // });
        validateFuturesKeyPermissionException(e);
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
        validateFuturesKeyPermissionException(e);
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
        validateFuturesKeyPermissionException(e);
      }
    });
  });
});
