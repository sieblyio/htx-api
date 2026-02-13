import { AxiosRequestConfig } from 'axios';

import { DerivativesClient } from '../../DerivativesClient.js';
import { SpotClient } from '../../SpotClient.js';
import { RestClientOptions } from '../requestUtils.js';
import { DefaultLogger } from './logger.js';

interface RestClientStore {
  spot: SpotClient;
  derivatives: DerivativesClient;
}

interface WebSocketTokenCache {
  spot?: { token: string; expiresAtMs: number };
  derivatives?: { token: string; expiresAtMs: number };
}

/**
 * Caches REST clients and WebSocket tokens to avoid redundant requests.
 */
export class RestClientCache {
  private logger!: DefaultLogger;

  private WS_LOGGER_CATEGORY!: object;

  private restClients: Partial<RestClientStore> = {};

  private wsTokenCache: WebSocketTokenCache = {};

  public setLogger(logger: DefaultLogger, loggerCategory: object): void {
    this.logger = logger;
    this.WS_LOGGER_CATEGORY = loggerCategory;
  }

  public getSpotRESTClient(
    restOptions: RestClientOptions,
    requestOptions?: AxiosRequestConfig,
  ): SpotClient {
    if (!this.restClients.spot) {
      this.restClients.spot = new SpotClient(restOptions, requestOptions);
    }
    return this.restClients.spot;
  }

  public async fetchSpotWebSocketToken(
    restOptions: RestClientOptions,
    requestOptions?: AxiosRequestConfig,
  ): Promise<{ token: string; expiresAtMs: number; timeLeftMs: number }> {
    if (this.wsTokenCache.spot) {
      const now = Date.now();
      const timeLeftMs = this.wsTokenCache.spot.expiresAtMs - now;
      if (timeLeftMs > 10000) {
        this.logger.trace('Using cached spot WebSocket token', {
          ...this.WS_LOGGER_CATEGORY,
          nowMs: now,
          expiresAtMs: this.wsTokenCache.spot.expiresAtMs,
          remainingMs: +timeLeftMs.toFixed(0),
        });

        // still valid for at least 10s
        return { ...this.wsTokenCache.spot, timeLeftMs };
      }

      this.logger.trace(
        'Spot WebSocket token expired or expiring soon, fetching new token',
        {
          ...this.WS_LOGGER_CATEGORY,
          nowMs: now,
          expiresAtMs: this.wsTokenCache.spot.expiresAtMs,
          remainingMs: +timeLeftMs.toFixed(0),
        },
      );

      delete this.wsTokenCache.spot;
    }

    const client = this.getSpotRESTClient(restOptions, requestOptions);
    const tokenResult = await client.getWebSocketsToken();

    const token = tokenResult?.result?.token;
    if (!token) {
      throw new Error(
        `Failed to fetch spot WebSocket token: ${JSON.stringify(tokenResult)}`,
      );
    }

    const expiresInSec = tokenResult?.result?.expires || 900;
    const expiresInMs = expiresInSec * 1000;
    const expiresAtMs = Date.now() + expiresInMs;

    this.wsTokenCache.spot = { token, expiresAtMs };

    return { ...this.wsTokenCache.spot, timeLeftMs: expiresInMs };
  }

  public getDerivativesRESTClient(
    restOptions: RestClientOptions,
    requestOptions?: AxiosRequestConfig,
  ): DerivativesClient {
    if (!this.restClients.derivatives) {
      this.restClients.derivatives = new DerivativesClient(
        restOptions,
        requestOptions,
      );
    }
    return this.restClients.derivatives;
  }
}
