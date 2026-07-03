import { DefaultLogger } from './lib/websocket/logger.js';
import { WS_KEY_MAP } from './lib/websocket/websocket-util.js';
import {
  WSAPIDerivativesBatchOrderParams,
  WSAPIDerivativesBatchPlaceOrderParams,
  WSAPIDerivativesCancelAllOrdersParams,
  WSAPIDerivativesCancelOrderParams,
  WSAPIDerivativesOrderParams,
  WSAPIDerivativesPlaceOrderParams,
  WSAPIDerivativesV5CancelAllOrdersParams,
  WSAPIDerivativesV5CancelOrderParams,
  WSAPISpotBatchOrderParams,
  WSAPISpotCancelAllOrdersParams,
  WSAPISpotCancelOrdersParams,
  WSAPISpotMarginOrderParams,
  WSAPISpotOrderParams,
} from './types/request/wsapi.types.js';
import {
  WSAPIBaseResponse,
  WSAPIDerivativesOrderResult,
  WSAPIDerivativesV5OrderResult,
  WSAPISpotCancelAllOrdersResult,
  WSAPISpotCancelOrdersResult,
  WSAPISpotOrderResult,
} from './types/response/wsapi.types.js';
import { WSClientConfigurableOptions } from './types/websockets/ws-general.js';
import { WebsocketClient } from './WebsocketClient.js';

export interface WSAPIClientConfigurableOptions {
  /**
   * Default: true
   *
   * Attach default event listeners, which will console log high-level connection events.
   */
  attachEventListeners: boolean;
}

export class WebsocketAPIClient {
  private wsClient: WebsocketClient;

  private options: WSClientConfigurableOptions & WSAPIClientConfigurableOptions;

  constructor(
    options?: WSClientConfigurableOptions &
      Partial<WSAPIClientConfigurableOptions>,
    logger?: DefaultLogger,
  ) {
    this.wsClient = new WebsocketClient(options, logger);

    this.options = {
      attachEventListeners: true,
      ...options,
    };

    this.setupDefaultEventListeners();
  }

  public getWSClient(): WebsocketClient {
    return this.wsClient;
  }

  public setTimeOffsetMs(newOffset: number): void {
    return this.getWSClient().setTimeOffsetMs(newOffset);
  }

  public generateNewOrderID(): string {
    return this.wsClient.generateNewOrderID();
  }

  public getOrderIdPrefix(): string {
    return this.wsClient.getOrderIdPrefix();
  }

  public submitSpotOrder(
    params: WSAPISpotOrderParams,
  ): Promise<WSAPIBaseResponse<string | WSAPISpotOrderResult, 'create-order'>> {
    return this.wsClient.sendWSAPIRequest(
      WS_KEY_MAP.spotTrade,
      'create-order',
      params,
    );
  }

  public submitSpotBatchOrders(
    params: WSAPISpotBatchOrderParams,
  ): Promise<WSAPIBaseResponse<WSAPISpotOrderResult[], 'create-batchorder'>> {
    return this.wsClient.sendWSAPIRequest(
      WS_KEY_MAP.spotTrade,
      'create-batchorder',
      params,
    );
  }

  public submitSpotMarginOrder(
    params: WSAPISpotMarginOrderParams,
  ): Promise<WSAPIBaseResponse<WSAPISpotOrderResult, 'create-margin-order'>> {
    return this.wsClient.sendWSAPIRequest(
      WS_KEY_MAP.spotTrade,
      'create-margin-order',
      params,
    );
  }

  public cancelSpotOrders(
    params: WSAPISpotCancelOrdersParams,
  ): Promise<WSAPIBaseResponse<WSAPISpotCancelOrdersResult, 'cancel'>> {
    return this.wsClient.sendWSAPIRequest(
      WS_KEY_MAP.spotTrade,
      'cancel',
      params,
    );
  }

  public cancelAllSpotOrders(
    params: WSAPISpotCancelAllOrdersParams,
  ): Promise<WSAPIBaseResponse<WSAPISpotCancelAllOrdersResult, 'cancelall'>> {
    return this.wsClient.sendWSAPIRequest(
      WS_KEY_MAP.spotTrade,
      'cancelall',
      params,
    );
  }

  public submitLinearSwapOrder(
    params: WSAPIDerivativesOrderParams,
  ): Promise<WSAPIBaseResponse<WSAPIDerivativesOrderResult, 'create_order'>> {
    return this.wsClient.sendWSAPIRequest(
      WS_KEY_MAP.linearSwapTrade,
      'create_order',
      params,
    );
  }

  public submitLinearSwapCrossOrder(
    params: WSAPIDerivativesOrderParams,
  ): Promise<
    WSAPIBaseResponse<WSAPIDerivativesOrderResult, 'create_cross_order'>
  > {
    return this.wsClient.sendWSAPIRequest(
      WS_KEY_MAP.linearSwapTrade,
      'create_cross_order',
      params,
    );
  }

  public submitLinearSwapBatchOrders(
    params: WSAPIDerivativesBatchOrderParams,
  ): Promise<
    WSAPIBaseResponse<WSAPIDerivativesOrderResult[], 'create_batchorder'>
  > {
    return this.wsClient.sendWSAPIRequest(
      WS_KEY_MAP.linearSwapTrade,
      'create_batchorder',
      params,
    );
  }

  public submitLinearSwapCrossBatchOrders(
    params: WSAPIDerivativesBatchOrderParams,
  ): Promise<
    WSAPIBaseResponse<WSAPIDerivativesOrderResult[], 'create_cross_batchorder'>
  > {
    return this.wsClient.sendWSAPIRequest(
      WS_KEY_MAP.linearSwapTrade,
      'create_cross_batchorder',
      params,
    );
  }

  public cancelLinearSwapOrder(
    params: WSAPIDerivativesCancelOrderParams,
  ): Promise<WSAPIBaseResponse<WSAPIDerivativesOrderResult, 'cancel'>> {
    return this.wsClient.sendWSAPIRequest(
      WS_KEY_MAP.linearSwapTrade,
      'cancel',
      params,
    );
  }

  public cancelLinearSwapCrossOrder(
    params: WSAPIDerivativesCancelOrderParams,
  ): Promise<WSAPIBaseResponse<WSAPIDerivativesOrderResult, 'cross_cancel'>> {
    return this.wsClient.sendWSAPIRequest(
      WS_KEY_MAP.linearSwapTrade,
      'cross_cancel',
      params,
    );
  }

  public cancelAllLinearSwapOrders(
    params: WSAPIDerivativesCancelAllOrdersParams,
  ): Promise<WSAPIBaseResponse<WSAPIDerivativesOrderResult, 'cancelall'>> {
    return this.wsClient.sendWSAPIRequest(
      WS_KEY_MAP.linearSwapTrade,
      'cancelall',
      params,
    );
  }

  public cancelAllLinearSwapCrossOrders(
    params: WSAPIDerivativesCancelAllOrdersParams,
  ): Promise<
    WSAPIBaseResponse<WSAPIDerivativesOrderResult, 'cross_cancelall'>
  > {
    return this.wsClient.sendWSAPIRequest(
      WS_KEY_MAP.linearSwapTrade,
      'cross_cancelall',
      params,
    );
  }

  public placeLinearSwapOrder(
    params: WSAPIDerivativesPlaceOrderParams,
  ): Promise<WSAPIBaseResponse<WSAPIDerivativesV5OrderResult, 'place_order'>> {
    return this.wsClient.sendWSAPIRequest(
      WS_KEY_MAP.linearSwapTrade,
      'place_order',
      params,
    );
  }

  public placeLinearSwapBatchOrders(
    params: WSAPIDerivativesBatchPlaceOrderParams,
  ): Promise<
    WSAPIBaseResponse<WSAPIDerivativesV5OrderResult[], 'place_batch_orders'>
  > {
    return this.wsClient.sendWSAPIRequest(
      WS_KEY_MAP.linearSwapTrade,
      'place_batch_orders',
      params,
    );
  }

  public cancelLinearSwapV5Order(
    params: WSAPIDerivativesV5CancelOrderParams,
  ): Promise<WSAPIBaseResponse<WSAPIDerivativesV5OrderResult, 'cancel_order'>> {
    return this.wsClient.sendWSAPIRequest(
      WS_KEY_MAP.linearSwapTrade,
      'cancel_order',
      params,
    );
  }

  public cancelLinearSwapV5BatchOrders(
    params: WSAPIDerivativesV5CancelOrderParams[],
  ): Promise<
    WSAPIBaseResponse<WSAPIDerivativesV5OrderResult[], 'cancel_batch_orders'>
  > {
    return this.wsClient.sendWSAPIRequest(
      WS_KEY_MAP.linearSwapTrade,
      'cancel_batch_orders',
      params,
    );
  }

  public cancelAllLinearSwapV5Orders(
    params: WSAPIDerivativesV5CancelAllOrdersParams,
  ): Promise<
    WSAPIBaseResponse<WSAPIDerivativesV5OrderResult, 'cancel_all_orders'>
  > {
    return this.wsClient.sendWSAPIRequest(
      WS_KEY_MAP.linearSwapTrade,
      'cancel_all_orders',
      params,
    );
  }

  public submitCoinDeliveryOrder(
    params: WSAPIDerivativesOrderParams,
  ): Promise<WSAPIBaseResponse<WSAPIDerivativesOrderResult, 'create_order'>> {
    return this.wsClient.sendWSAPIRequest(
      WS_KEY_MAP.coinDeliveryTrade,
      'create_order',
      params,
    );
  }

  public submitCoinDeliveryBatchOrders(
    params: WSAPIDerivativesBatchOrderParams,
  ): Promise<
    WSAPIBaseResponse<WSAPIDerivativesOrderResult[], 'create_batchorder'>
  > {
    return this.wsClient.sendWSAPIRequest(
      WS_KEY_MAP.coinDeliveryTrade,
      'create_batchorder',
      params,
    );
  }

  public cancelCoinDeliveryOrder(
    params: WSAPIDerivativesCancelOrderParams,
  ): Promise<WSAPIBaseResponse<WSAPIDerivativesOrderResult, 'cancel'>> {
    return this.wsClient.sendWSAPIRequest(
      WS_KEY_MAP.coinDeliveryTrade,
      'cancel',
      params,
    );
  }

  public cancelAllCoinDeliveryOrders(
    params: WSAPIDerivativesCancelAllOrdersParams,
  ): Promise<WSAPIBaseResponse<WSAPIDerivativesOrderResult, 'cancelall'>> {
    return this.wsClient.sendWSAPIRequest(
      WS_KEY_MAP.coinDeliveryTrade,
      'cancelall',
      params,
    );
  }

  public submitCoinSwapOrder(
    params: WSAPIDerivativesOrderParams,
  ): Promise<WSAPIBaseResponse<WSAPIDerivativesOrderResult, 'create_order'>> {
    return this.wsClient.sendWSAPIRequest(
      WS_KEY_MAP.coinSwapTrade,
      'create_order',
      params,
    );
  }

  public submitCoinSwapBatchOrders(
    params: WSAPIDerivativesBatchOrderParams,
  ): Promise<
    WSAPIBaseResponse<WSAPIDerivativesOrderResult[], 'create_batchorder'>
  > {
    return this.wsClient.sendWSAPIRequest(
      WS_KEY_MAP.coinSwapTrade,
      'create_batchorder',
      params,
    );
  }

  public cancelCoinSwapOrder(
    params: WSAPIDerivativesCancelOrderParams,
  ): Promise<WSAPIBaseResponse<WSAPIDerivativesOrderResult, 'cancel'>> {
    return this.wsClient.sendWSAPIRequest(
      WS_KEY_MAP.coinSwapTrade,
      'cancel',
      params,
    );
  }

  public cancelAllCoinSwapOrders(
    params: WSAPIDerivativesCancelAllOrdersParams,
  ): Promise<WSAPIBaseResponse<WSAPIDerivativesOrderResult, 'cancelall'>> {
    return this.wsClient.sendWSAPIRequest(
      WS_KEY_MAP.coinSwapTrade,
      'cancelall',
      params,
    );
  }

  private setupDefaultEventListeners() {
    if (this.options.attachEventListeners) {
      this.wsClient
        .on('open', (data) => {
          console.log(new Date(), 'ws connected', data.wsKey);
        })
        .on('reconnecting', ({ wsKey }) => {
          console.log(new Date(), 'ws automatically reconnecting.... ', wsKey);
        })
        .on('reconnected', (data) => {
          console.log(new Date(), 'ws has reconnected ', data?.wsKey);
        })
        .on('authenticated', (data) => {
          console.info(new Date(), 'ws has authenticated ', data?.wsKey);
        })
        .on('exception', (data) => {
          console.error(new Date(), 'ws exception: ', data);
        });
    }
  }
}
