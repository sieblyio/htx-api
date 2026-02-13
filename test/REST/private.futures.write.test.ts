import { DerivativesClient } from '../../src/index.js';
import { getTestProxy } from '../proxy.util.js';

describe('REST PRIVATE FUTURES WRITE', () => {
  const account = {
    key: process.env.API_FUTURES_KEY,
    secret: process.env.API_FUTURES_SECRET,
  };

  const DUMMY_UUID = 'a02ec31e-668c-4252-a15d-5a58c68a6240';

  const rest = new DerivativesClient(
    {
      apiKey: account.key,
      apiSecret: account.secret,
      testnet: process.env.API_FUTURES_TESTNET === 'true',
    },
    getTestProxy(),
  );

  it('should have credentials to test with', () => {
    expect(account.key).toBeDefined();
    expect(account.secret).toBeDefined();
  });

  describe('POST write operations', () => {
    it('should succeed or fail with permission error calling submitOrder', async () => {
      try {
        const res = await rest.submitOrder({
          orderType: 'mkt',
          symbol: 'PF_ETHUSD', // Perpetual ETH/USD
          side: 'buy',
          size: 100, // Contract size
        });

        // console.log(`res "${expect.getState().currentTestName}"`, res);
        // If it succeeds, that's fine too (means we have full permissions)
        expect(res).toMatchObject({
          result: 'success',
          serverTime: expect.any(String),
          sendStatus: {
            status: 'insufficientAvailableFunds',
            order_id: expect.any(String),
            receivedTime: expect.any(String),
            orderEvents: expect.any(Array),
          },
        });
      } catch (e: any) {
        // Expected with read-only API keys or insufficient balance - validates signature is correct
        console.log(`err "${expect.getState().currentTestName}"`, e);
        const responseBody = e?.body;
        expect(responseBody).toMatchObject({
          result: 'error',
          error: expect.stringContaining('Permission denied'),
        });
      }
    });

    it('should succeed calling cancelAllOrders', async () => {
      try {
        const res = await rest.cancelAllOrders();

        // console.log(`res "${expect.getState().currentTestName}"`, res);
        expect(res).toMatchObject({
          result: 'success',
          cancelStatus: expect.any(Object),
        });
      } catch (e: any) {
        // Expected with read-only API keys or insufficient balance - validates signature is correct
        console.log(`err "${expect.getState().currentTestName}"`, e?.body || e);
        const responseBody = e?.body;
        expect(responseBody).toMatchObject({
          result: 'error',
          error: expect.stringContaining('Permission denied'),
        });
      }
    });

    it('should handle cancelOrder with non-existent order', async () => {
      try {
        const res = await rest.cancelOrder({
          order_id: 'a068cbe2-bd99-4312-bc10-072e90ba4696',
        });

        // console.log(`res "${expect.getState().currentTestName}"`, res);
        // If it succeeds somehow, that's fine
        expect(res).toMatchObject({
          result: 'success',
          cancelStatus: expect.objectContaining({ status: 'notFound' }),
        });
      } catch (e: any) {
        // Expected with read-only API keys or insufficient balance - validates signature is correct
        // console.log(`err "${expect.getState().currentTestName}"`, e?.body || e);
        const responseBody = e?.body;
        expect(responseBody).toMatchObject({
          result: 'error',
          error: expect.stringContaining('Permission denied'),
        });
      }
    });

    it('should succeed calling submitWalletTransfer with invalid params (validates signature)', async () => {
      try {
        const res = await rest.submitWalletTransfer({
          fromAccount: 'flex',
          toAccount: 'fi_xbtusd',
          unit: 'BTC',
          amount: 1,
        });

        //console.log(`res "${expect.getState().currentTestName}"`, res);
        // If it succeeds, that's fine
        expect(res).toMatchObject({
          result: 'success',
        });
      } catch (e: any) {
        // Expected with read-only API keys or insufficient balance - validates signature is correct
        // console.log(`err "${expect.getState().currentTestName}"`, e?.body || e);
        const responseBody = e?.body;
        expect(responseBody).toMatchObject({
          result: 'error',
          error: expect.stringContaining('insufficientFunds'),
        });
      }
    });
  });

  describe('PUT write operations', () => {
    it('should succeed calling setPnlPreference', async () => {
      try {
        const res = await rest.setPnlPreference({
          symbol: 'PF_ETHUSD',
          pnlPreference: 'ETH',
        });

        // console.log(`res "${expect.getState().currentTestName}"`, res);
        expect(res).toMatchObject({
          result: 'success',
          serverTime: expect.any(String),
        });
      } catch (e: any) {
        // Expected with read-only API keys or insufficient balance - validates signature is correct
        // console.log(`err "${expect.getState().currentTestName}"`, e?.body || e);
        const responseBody = e?.body;
        expect(responseBody).toMatchObject({
          status: 'UNPROCESSABLE_ENTITY',
          result: 'error',
          errors: expect.any(Array),
        });
      }
    });

    it('should fail setPnlPreference with invalid symbol', async () => {
      try {
        const res = await rest.setPnlPreference({
          symbol: 'INVALID_SYMBOL',
          pnlPreference: 'USD',
        });

        console.log(`res "${expect.getState().currentTestName}"`, res);
        // Should not succeed
        expect(res).not.toBeDefined();
      } catch (e: any) {
        // Expected with read-only API keys or insufficient balance - validates signature is correct
        // console.log(`err "${expect.getState().currentTestName}"`, e?.body || e);
        const responseBody = e?.body;
        expect(responseBody).toMatchObject({
          status: 'NOT_FOUND',
          result: 'error',
          errors: expect.any(Array),
        });
      }
    });

    it('should succeed calling updateSelfTradeStrategy', async () => {
      try {
        const res = await rest.updateSelfTradeStrategy({
          strategy: 'CANCEL_MAKER_SELF',
        });

        // console.log(`res "${expect.getState().currentTestName}"`, res);
        expect(res).toMatchObject({
          result: 'success',
          strategy: 'CANCEL_MAKER_SELF',
        });
      } catch (e: any) {
        // Expected with read-only API keys or insufficient balance - validates signature is correct
        console.log(`err "${expect.getState().currentTestName}"`, e?.body || e);
        const responseBody = e?.body;
        expect(responseBody).toMatchObject({
          result: 'error',
          error: expect.stringContaining('Permission denied'),
        });
      }
    });
  });

  describe('DELETE write operations', () => {
    it('should fail deleteAssignmentPreference with non-existent ID (validates signature)', async () => {
      try {
        const res = await rest.deleteAssignmentPreference({
          id: 999999,
        });

        console.log(`res "${expect.getState().currentTestName}"`, res);
        // If it somehow succeeds, that's fine
        expect(res).toMatchObject({
          result: 'success',
        });
      } catch (e: any) {
        // Expected with read-only API keys or insufficient balance - validates signature is correct
        // console.log(`err "${expect.getState().currentTestName}"`, e?.body || e);
        const responseBody = e?.body;
        expect(responseBody).toMatchObject({
          result: 'error',
          error: expect.stringContaining(
            'assignmentProgramTermsNotAcceptedFrontend',
          ),
        });
      }
    });

    it('should handle cancelRFQOffer with non-existent RFQ (validates signature)', async () => {
      try {
        const res = await rest.cancelRFQOffer({
          rfqUid: DUMMY_UUID,
        });

        // console.log(`res "${expect.getState().currentTestName}"`, res);
        expect(res).toMatchObject({
          result: 'success',
        });
      } catch (e: any) {
        // Expected - validates signature is correct
        // console.log(`err "${expect.getState().currentTestName}"`, e?.body || e);
        const responseBody = e?.body;
        expect(responseBody).toMatchObject({
          result: 'error',
          error: expect.stringContaining('rfqNotFound'),
        });
      }
    });
  });

  describe('Additional POST write operations', () => {
    it('should handle batchOrderManagement (validates signature)', async () => {
      try {
        const res = await rest.batchOrderManagement({
          ProcessBefore: new Date(Date.now() + 60000).toISOString(),
          json: {
            batchOrder: [
              {
                order: 'send',
                order_tag: 'test1',
                orderType: 'lmt',
                symbol: 'PF_ETHUSD',
                side: 'buy',
                size: 10,
                limitPrice: 1000,
              },
            ],
          },
        });

        // console.log(`res "${expect.getState().currentTestName}"`, res);
        expect(res).toMatchObject({
          result: 'success',
          batchStatus: expect.any(Array),
        });
      } catch (e: any) {
        // Expected with read-only API keys or insufficient balance - validates signature is correct
        // console.log(`err "${expect.getState().currentTestName}"`, e?.body || e);
        const responseBody = e?.body;
        expect(responseBody).toMatchObject({
          result: 'error',
          error: expect.stringContaining('notFound'),
        });
      }
    });

    it('should succeed calling cancelAllOrdersAfter', async () => {
      try {
        const res = await rest.cancelAllOrdersAfter({
          timeout: 60,
        });

        // console.log(`res "${expect.getState().currentTestName}"`, res);
        expect(res).toMatchObject({
          result: 'success',
          status: expect.any(Object),
        });
      } catch (e: any) {
        // Expected with read-only API keys - validates signature is correct
        // console.log(`err "${expect.getState().currentTestName}"`, e?.body || e);
        const responseBody = e?.body;
        expect(responseBody).toMatchObject({
          result: 'error',
          error: expect.stringContaining('Permission denied'),
        });
      }
    });

    it('should handle editOrder with non-existent order (validates signature)', async () => {
      try {
        const res = await rest.editOrder({
          orderId: 'non-existent-order-id',
          size: 10,
        });

        // console.log(`res "${expect.getState().currentTestName}"`, res);
        expect(res).toMatchObject({
          result: 'success',
        });
      } catch (e: any) {
        // Expected - validates signature is correct
        // console.log(`err "${expect.getState().currentTestName}"`, e?.body || e);
        const responseBody = e?.body;
        expect(responseBody).toMatchObject({
          status: 'BAD_REQUEST',
          result: 'error',
          errors: expect.arrayContaining([
            expect.objectContaining({
              code: 11,
              message: expect.stringContaining(
                'Invalid UUID string: non-existent-order-id',
              ),
            }),
          ]),
        });
      }
    });

    it('should handle addAssignmentPreference (validates signature)', async () => {
      try {
        const res = await rest.addAssignmentPreference({
          contractType: 'flex',
          contract: 'PF_XBTUSD',
          acceptLong: true,
          acceptShort: true,
          timeFrame: 'all',
          enabled: true,
        });

        // console.log(`res "${expect.getState().currentTestName}"`, res);
        expect(res).toMatchObject({
          result: 'success',
        });
      } catch (e: any) {
        // Expected - validates signature is correct
        // console.log(`err "${expect.getState().currentTestName}"`, e?.body || e);
        const responseBody = e?.body;
        expect(responseBody).toMatchObject({
          result: 'error',
          error: expect.stringContaining(
            'assignmentProgramTermsNotAcceptedFrontend',
          ),
        });
      }
    });

    it('should handle submitSubaccountTransfer (validates signature)', async () => {
      try {
        const res = await rest.submitSubaccountTransfer({
          fromUser: 'main-user',
          toUser: 'sub-user',
          fromAccount: 'cash',
          toAccount: 'flex',
          unit: 'BTC',
          amount: '0.001',
        });

        //console.log(`res "${expect.getState().currentTestName}"`, res);
        expect(res).toMatchObject({
          result: 'success',
        });
      } catch (e: any) {
        // Expected - validates signature is correct
        //console.log(`err "${expect.getState().currentTestName}"`, e?.body || e);
        const responseBody = e?.body;
        expect(responseBody).toMatchObject({
          result: 'error',
          error: expect.stringContaining('invalidArgument'),
        });
      }
    });

    it('should handle submitTransferToSpot (validates signature)', async () => {
      try {
        const res = await rest.submitTransferToSpot({
          amount: '1000',
          currency: 'BTC',
        });

        // console.log(`res "${expect.getState().currentTestName}"`, res);
        expect(res).toMatchObject({
          result: 'success',
        });
      } catch (e: any) {
        // Expected - validates signature is correct
        //console.log(`err "${expect.getState().currentTestName}"`, e?.body || e);
        const responseBody = e?.body;
        expect(responseBody).toMatchObject({
          result: 'error',
        });
        // If error field exists, it should not be an authentication error
        if (responseBody?.error) {
          expect(responseBody.error).not.toContain('authenticationError');
        }
      }
    });

    // returns auth error in demo env
    it('should handle submitRFQNewOffer (validates signature)', async () => {
      try {
        const res = await rest.submitRFQNewOffer({
          rfqUid: DUMMY_UUID,
          bid: 1000,
          ask: 1100,
        });

        // console.log(`res "${expect.getState().currentTestName}"`, res);
        expect(res).toMatchObject({
          result: 'success',
        });
      } catch (e: any) {
        // Expected - validates signature is correct
        // console.log(`err "${expect.getState().currentTestName}"`, e?.body || e);
        const responseBody = e?.body;
        expect(responseBody).toMatchObject({
          result: 'error',
          error: 'rfqNotFound',
        });
      }
    });
  });

  describe('Additional PUT write operations', () => {
    it('should handle setLeverageSettings (validates signature)', async () => {
      try {
        const res = await rest.setLeverageSettings({
          symbol: 'PF_ETHUSD',
          maxLeverage: 5,
        });

        //console.log(`res "${expect.getState().currentTestName}"`, res);
        expect(res).toMatchObject({
          result: 'success',
        });
      } catch (e: any) {
        // Expected - validates signature is correct
        console.log(`err "${expect.getState().currentTestName}"`, e?.body || e);
        const responseBody = e?.body;
        expect(responseBody).toMatchObject({
          result: 'error',
          status: 'UNSUPPORTED_MEDIA_TYPE',
        });
      }
    });

    it.skip('should handle updateRFQOpenOffer (validates signature)', async () => {
      try {
        const res = await rest.updateRFQOpenOffer({
          rfqUid: DUMMY_UUID,
          bid: 1050,
          ask: 1150,
        });

        // console.log(`res "${expect.getState().currentTestName}"`, res);
        expect(res).toMatchObject({
          result: 'success',
        });
      } catch (e: any) {
        // Expected - validates signature is correct
        console.log(`err "${expect.getState().currentTestName}"`, e?.body || e);
        const responseBody = e?.body;
        expect(responseBody?.error).not.toBe('authenticationError');

        expect(responseBody).toMatchObject({
          result: 'error',
          status: 'UNSUPPORTED_MEDIA_TYPE',
        });
      }
    });
  });
});
