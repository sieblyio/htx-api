/* eslint-disable @typescript-eslint/no-explicit-any */
import { SpotClient } from '../../../src/index.js';
import { getTestProxy } from '../proxy.util.js';

function validateKeyPermissionException(e: any) {
  expect(e).toBeDefined();
  expect(e?.body).toBeDefined();
  // Expected with read-only keys or other permission - validates signature is correct
  expect(e?.body['err-msg']).toContain('API key has no permission');
}

describe('REST PRIVATE SPOT WRITE', () => {
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

  describe('private POST without params', () => {
    it('should succeed or fail batchCancelOpenOrders with empty body (validates signature)', async () => {
      try {
        const res = await rest.batchCancelOpenOrders({});
        console.log(`res "${expect.getState().currentTestName}"`, res);

        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        // Success: 0 orders cancelled with empty criteria
      } catch (e: any) {
        // console.log(
        //   `err "${expect.getState().currentTestName}"`,
        //   // (e as { body?: unknown })?.body ?? e,
        //   e.body,
        // );
        // Expecting this to throw, given the read only creds
        validateKeyPermissionException(e);
      }
    });
  });

  describe('private POST with params', () => {
    it('should fail submitOrder with invalid params (validates signature)', async () => {
      try {
        const res = await rest.submitOrder({
          'account-id': '73127479',
          symbol: 'btcusdt',
          type: 'buy-limit',
          amount: '0.0001',
          price: '1',
        });

        console.log(`res "${expect.getState().currentTestName}"`, res);

        // If it succeeds, account exists and order was placed (unlikely with 0.01 price). Expecting this to throw, given the read only creds
        expect(res).toBeUndefined();
        // expect(res.data).toBeDefined();
      } catch (e: any) {
        // console.log(
        //   `err "${expect.getState().currentTestName}"`,
        //   // (e as { body?: unknown })?.body ?? e,
        //   e.body,
        // );

        // Expecting this to throw, given the read only creds
        validateKeyPermissionException(e);
      }
    });

    it('should fail cancelOrderById with non-existent order (validates signature)', async () => {
      try {
        const res = await rest.cancelOrderById({
          orderId: '9999999999999999',
        });

        // Expecting this to throw, given the read only creds
        expect(res).toBeUndefined();
      } catch (e: any) {
        // console.log(
        //   `err "${expect.getState().currentTestName}"`,
        //   // (e as { body?: unknown })?.body ?? e,
        //   e.body,
        // );

        // Expecting this to throw, given the read only creds
        validateKeyPermissionException(e);
      }
    });

    it('should fail cancelOrderByClientId with non-existent client order id (validates signature)', async () => {
      try {
        const res = await rest.cancelOrderByClientId({
          'client-order-id': 'test-nonexistent-' + Date.now(),
        });

        // Expecting this to throw, given the read only creds
        expect(res).toBeUndefined();
      } catch (e: any) {
        // console.log(
        //   `err "${expect.getState().currentTestName}"`,
        //   // (e as { body?: unknown })?.body ?? e,
        //   e.body,
        // );

        // Expecting this to throw, given the read only creds
        validateKeyPermissionException(e);
      }
    });
  });
});
