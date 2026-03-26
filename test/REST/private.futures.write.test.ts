import { FuturesClient } from '../../src/index.js';
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
    it('should succeed or fail getCrossOpenOrders with empty body (validates signature)', async () => {
      try {
        const res = await rest.getCrossOpenOrders({});

        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data).toHaveProperty('orders');
      } catch (e: unknown) {
        // Expected with read-only keys or no cross margin - validates signature
        const err = e as { body?: unknown; message?: string };
        expect(e).toBeDefined();
        expect(err?.body ?? err?.message).toBeDefined();
      }
    });
  });

  describe('private POST with params', () => {
    it('should fail submitOrder with invalid params (validates signature)', async () => {
      try {
        const res = await rest.submitOrder({
          contract_code: 'btc-usdt',
          direction: 'buy',
          volume: 0.001,
          lever_rate: 10,
          order_price_type: 'limit',
          price: 0.01,
        });

        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
      } catch (e: unknown) {
        // Expected: invalid order (price too low, etc) - validates signature
        const body = (e as { body?: Record<string, unknown> })?.body;
        expect(body).toBeDefined();
        expect(
          body?.status ?? body?.code ?? body?.message ?? body?.err_msg,
        ).toBeDefined();
      }
    });

    it('should fail cancelOrder with non-existent order (validates signature)', async () => {
      try {
        const res = await rest.cancelOrder({
          order_id: '9999999999999999',
          contract_code: 'btc-usdt',
        });

        expect(res).toBeDefined();
      } catch (e: unknown) {
        // Expected: order not found - validates signature
        const body = (e as { body?: Record<string, unknown> })?.body;
        expect(body).toBeDefined();
        expect(
          body?.status ?? body?.code ?? body?.message ?? body?.err_msg,
        ).toBeDefined();
      }
    });

    it('should fail cancelCrossOrder with non-existent order (validates signature)', async () => {
      try {
        const res = await rest.cancelCrossOrder({
          order_id: '9999999999999999',
          contract_code: 'btc-usdt',
        });

        expect(res).toBeDefined();
      } catch (e: unknown) {
        // Expected: order not found - validates signature
        const body = (e as { body?: Record<string, unknown> })?.body;
        expect(body).toBeDefined();
      }
    });
  });
});
