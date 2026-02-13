import { DerivativesClient, SpotClient } from '../../src/index.js';

describe('REST PUBLIC', () => {
  describe('public endpoints - SpotClient', () => {
    const spotClient = new SpotClient();

    it('should succeed making a GET request to getTicker', async () => {
      const res = await spotClient.getTicker({ pair: 'XBTUSD' });

      expect(res.result).toBeDefined();
      expect(Object.keys(res.result).length).toBeGreaterThan(0);
    });
  });

  describe('public endpoints - DerivativesClient', () => {
    const derivativesClient = new DerivativesClient();

    it('should succeed making a GET request to getTradeHistory', async () => {
      const res = await derivativesClient.getTradeHistory({
        symbol: 'PF_XBTUSD',
      });

      expect(res).toBeDefined();
      expect(res.history).toMatchObject(expect.any(Array));
    });
  });
});
