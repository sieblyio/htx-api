import { FuturesClient } from '../../src/index.js';
import { getTestProxy } from '../proxy.util.js';

describe('REST PRIVATE FUTURES READ', () => {
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

  describe('private GET without params', () => {
    it('should succeed calling getAccountType', async () => {
      try {
        const res = await rest.getAccountType();

        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data).toHaveProperty('account_type');
      } catch (e: unknown) {
        console.log(
          `err "${expect.getState().currentTestName}"`,
          (e as { body?: unknown })?.body ?? e,
        );
        expect(e).not.toBeDefined();
      }
    });

    it('should succeed calling getSubPermissions', async () => {
      try {
        const res = await rest.getSubPermissions();

        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
      } catch (e: unknown) {
        console.log(
          `err "${expect.getState().currentTestName}"`,
          (e as { body?: unknown })?.body ?? e,
        );
        expect(e).not.toBeDefined();
      }
    });
  });

  describe('private GET with params', () => {
    it('should succeed calling getSubPermissions with params', async () => {
      try {
        const res = await rest.getSubPermissions({ sub_uid: '1' });

        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
      } catch (e: unknown) {
        console.log(
          `err "${expect.getState().currentTestName}"`,
          (e as { body?: unknown })?.body ?? e,
        );
        expect(e).not.toBeDefined();
      }
    });

    it('should succeed calling getCrossTradeState with params', async () => {
      try {
        const res = await rest.getCrossTradeState({
          contract_code: 'btc-usdt',
          business_type: 'swap',
        });

        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(Array.isArray(res.data)).toBe(true);
      } catch (e: unknown) {
        console.log(
          `err "${expect.getState().currentTestName}"`,
          (e as { body?: unknown })?.body ?? e,
        );
        expect(e).not.toBeDefined();
      }
    });

    it('should succeed calling getCrossTransferState with params', async () => {
      try {
        const res = await rest.getCrossTransferState({
          margin_account: 'btc-usdt',
        });

        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(Array.isArray(res.data)).toBe(true);
      } catch (e: unknown) {
        console.log(
          `err "${expect.getState().currentTestName}"`,
          (e as { body?: unknown })?.body ?? e,
        );
        expect(e).not.toBeDefined();
      }
    });
  });
});
