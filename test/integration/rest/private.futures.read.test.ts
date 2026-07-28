import { FuturesClient } from '../../../src/index.js';
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
    it('should succeed calling getLinearSwapAccountType', async () => {
      try {
        const res = await rest.getLinearSwapAccountType();

        // console.log(`res "${expect.getState().currentTestName}"`, res);

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

    it('should succeed calling getLinearSwapSubPermissions', async () => {
      try {
        const res = await rest.getLinearSwapSubPermissions();

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
    it('should succeed calling getLinearSwapSubPermissions with params', async () => {
      try {
        const res = await rest.getLinearSwapSubPermissions({ sub_uid: '1' });

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

    it('should succeed calling getLinearSwapCrossTradeState with params', async () => {
      try {
        const res = await rest.getLinearSwapCrossTradeState({
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

    it('should succeed calling getLinearSwapCrossTransferState with params', async () => {
      try {
        const res = await rest.getLinearSwapCrossTransferState({
          margin_account: 'USDT',
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
