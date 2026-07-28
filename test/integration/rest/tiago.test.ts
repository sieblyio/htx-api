import { SpotClient } from '../../../src/index.js';

describe('REST PUBLIC', () => {
  describe('public endpoints - SpotClient', () => {
    const spotClient = new SpotClient();

    it('should succeed making a GET request to getTicker', async () => {
      const res = await spotClient.getTicker({ symbol: 'XBTUSD' });

      expect(res.tick).toBeDefined();
    });
  });
});
