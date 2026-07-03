import {
  APIIDMain,
  APIIDMainKey,
  getOrderIdPrefix,
  validateWSAPICustomOrderID,
  validateWSAPIDerivativesChannelKey,
} from '../../src/lib/requestUtils';
import { WS_KEY_MAP } from '../../src/lib/websocket/websocket-util';
import {
  HTXDerivativesWSAPIRequest,
  HTXSpotWSAPIRequest,
} from '../../src/types/websockets/ws-api';

describe('WS API request utilities', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('validateWSAPINewCustomOID()', () => {
    it('should add a prefixed client order ID to spot order placement when missing', () => {
      const request: HTXSpotWSAPIRequest<
        'create-order',
        Record<string, unknown>
      > = {
        cid: '1',
        ch: 'create-order',
        params: {
          symbol: 'btcusdt',
        },
      };

      validateWSAPICustomOrderID(request, WS_KEY_MAP.spotTrade);

      expect(request.params?.['client-order-id']).toEqual(expect.any(String));
      expect(String(request.params?.['client-order-id'])).toMatch(
        new RegExp(`^${getOrderIdPrefix()}`),
      );
    });

    it('should add prefixed client order IDs to every spot batch order when missing', () => {
      const request: HTXSpotWSAPIRequest<
        'create-batchorder',
        Record<string, unknown>[]
      > = {
        cid: '1',
        ch: 'create-batchorder',
        params: [{ symbol: 'btcusdt' }, { symbol: 'ethusdt' }],
      };

      validateWSAPICustomOrderID(request, WS_KEY_MAP.spotTrade);

      for (const order of request.params || []) {
        expect(order['client-order-id']).toEqual(expect.any(String));
        expect(String(order['client-order-id'])).toMatch(
          new RegExp(`^${getOrderIdPrefix()}`),
        );
      }
    });

    it('should add a prefixed client order ID to spot margin order placement when missing', () => {
      const request: HTXSpotWSAPIRequest<
        'create-margin-order',
        Record<string, unknown>
      > = {
        cid: '1',
        ch: 'create-margin-order',
        params: {
          symbol: 'btcusdt',
        },
      };

      validateWSAPICustomOrderID(request, WS_KEY_MAP.spotTrade);

      expect(request.params?.['client-order-id']).toEqual(expect.any(String));
      expect(String(request.params?.['client-order-id'])).toMatch(
        new RegExp(`^${getOrderIdPrefix()}`),
      );
    });

    it('should warn and preserve a user-provided spot client order ID without the prefix', () => {
      const warnSpy = jest.spyOn(console, 'warn').mockImplementation();
      const request: HTXSpotWSAPIRequest<
        'create-order',
        Record<string, unknown>
      > = {
        cid: '1',
        ch: 'create-order',
        params: {
          'client-order-id': 'user-custom-id',
          symbol: 'btcusdt',
        },
      };

      validateWSAPICustomOrderID(request, WS_KEY_MAP.spotTrade);

      expect(request.params?.['client-order-id']).toBe('user-custom-id');
      expect(warnSpy).toHaveBeenCalledWith(
        expect.stringContaining('client.getOrderIdPrefix()'),
      );
    });

    it('should not add a spot client order ID to non-placement operations', () => {
      const request: HTXSpotWSAPIRequest<'cancel', Record<string, unknown>> = {
        cid: '1',
        ch: 'cancel',
        params: {
          'order-ids': ['12345'],
        },
      };

      validateWSAPICustomOrderID(request, WS_KEY_MAP.spotTrade);

      expect(request.params?.['client-order-id']).toBeUndefined();
    });
  });

  describe('setWSAPIDerivativesChannelCode()', () => {
    it.each(['create_order', 'create_cross_order', 'place_order'] as const)(
      'should add channel_code to derivatives %s placement',
      (operation) => {
        const request: HTXDerivativesWSAPIRequest<
          typeof operation,
          Record<string, unknown>
        > = {
          cid: '1',
          op: operation,
          data: {
            contract_code: 'BTC-USDT',
          },
        };

        validateWSAPIDerivativesChannelKey(request, WS_KEY_MAP.linearSwapTrade);

        expect(request.data?.[APIIDMainKey]).toBe(APIIDMain);
      },
    );

    it('should add channel_code to coin-m swap order placement', () => {
      const request: HTXDerivativesWSAPIRequest<
        'create_order',
        Record<string, unknown>
      > = {
        cid: '1',
        op: 'create_order',
        data: {
          contract_code: 'BTC-USD',
        },
      };

      validateWSAPIDerivativesChannelKey(request, WS_KEY_MAP.coinSwapTrade);

      expect(request.data?.[APIIDMainKey]).toBe(APIIDMain);
    });

    it.each([
      'create_batchorder',
      'create_cross_batchorder',
      'place_batch_orders',
    ] as const)(
      'should add channel_code to every derivatives %s item',
      (operation) => {
        const request: HTXDerivativesWSAPIRequest<
          typeof operation,
          Record<string, unknown>[]
        > = {
          cid: '1',
          op: operation,
          data: [{ contract_code: 'BTC-USD' }, { contract_code: 'ETH-USD' }],
        };

        validateWSAPIDerivativesChannelKey(
          request,
          WS_KEY_MAP.coinDeliveryTrade,
        );

        for (const order of request.data || []) {
          expect(order[APIIDMainKey]).toBe(APIIDMain);
        }
      },
    );

    it('should not add channel_code to derivatives cancel operations', () => {
      const request: HTXDerivativesWSAPIRequest<
        'cancel_order',
        Record<string, unknown>
      > = {
        cid: '1',
        op: 'cancel_order',
        data: {
          contract_code: 'BTC-USDT',
        },
      };

      validateWSAPIDerivativesChannelKey(request, WS_KEY_MAP.linearSwapTrade);

      expect(request.data?.[APIIDMainKey]).toBeUndefined();
    });
  });
});
