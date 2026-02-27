import { SpotClient } from '../../src/index.js';

describe('REST PUBLIC', () => {
  describe('public endpoints - SpotClient', () => {
    const spotClient = new SpotClient();

    it('should succeed making a GET request, no params', async () => {
      const res = await spotClient.getTickers();

      // console.log('tickers res', res);

      expect(res.data).toBeDefined();
      // expect(Array.isArray(res.data)).toStrictEqual(true);
      expect(res.data.length).toBeGreaterThan(0);
    });
  });

  // describe('public endpoints - FuturesClient', () => {
  //   const futuresClient = new FuturesClient();

  //   it('should succeed making a GET request to getTradeHistory', async () => {
  //     const res = await futuresClient.getTradeHistory({
  //       contract_code: 'XBTUSD',
  //     });

  //     expect(res).toBeDefined();
  //     expect(res.history).toMatchObject(expect.any(Array));
  //   });
  // });
});
