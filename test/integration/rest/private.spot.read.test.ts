import { SpotClient } from '../../../src/index.js';
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

  describe('private GET without params', () => {
    it('should succeed calling getAccounts', async () => {
      try {
        const res = await rest.getAccounts();
        // console.log(`res "${expect.getState().currentTestName}"`, res);

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

    it('should succeed calling getAccountSwitchUserInfo', async () => {
      try {
        const res = await rest.getAccountSwitchUserInfo();

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
    it('should succeed calling getAccountValuation with params', async () => {
      try {
        const res = await rest.getAccountValuation({
          valuationCurrency: 'BTC',
        });

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

    it('should succeed calling getOpenOrders with params', async () => {
      try {
        const res = await rest.getOpenOrders({ symbol: 'btcusdt' });

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

    it('should succeed calling getAccountBalance with accountId', async () => {
      try {
        const accountsRes = await rest.getAccounts();
        const accountId = accountsRes.data?.[0]?.id;
        if (!accountId) {
          expect(accountsRes.data?.length).toBeGreaterThan(0);
          return;
        }

        const res = await rest.getAccountBalance({
          accountId: String(accountId),
        });

        expect(res).toBeDefined();
        expect(res.data).toBeDefined();
        expect(res.data).toHaveProperty('list');
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
