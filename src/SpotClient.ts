import { BaseRestClient } from './lib/BaseRestClient.js';
import { REST_CLIENT_TYPE_ENUM, RestClientType } from './lib/requestUtils.js';
import { SpotAPISuccessResponse } from './types/response/shared.types.js';
import { SpotSystemStatus } from './types/response/spot.types.js';

/**
 * The SpotClient provides integration to the Kraken Spot API.
 *
 * Docs:
 * - https://docs.kraken.com/api/docs/guides/spot-rest-intro/
 * - https://docs.kraken.com/api/docs/rest-api/get-server-time
 */
export class SpotClient extends BaseRestClient {
  getClientType(): RestClientType {
    // Points to api.kraken.com
    return REST_CLIENT_TYPE_ENUM.main;
  }

  /**
   *
   * Misc Utility Methods
   *
   */

  generateNewOrderID(): string {
    // Generate a short UUID format (32 hex characters without dashes)
    // Compatible with Kraken's cl_ord_id parameter
    const hexChars = '0123456789abcdef';
    let result = '';
    for (let i = 0; i < 32; i++) {
      result += hexChars[Math.floor(Math.random() * 16)];
    }
    return result;
  }

  /**
   *
   * Spot REST API - Market Data
   *
   */

  /**
   * Get Server Time
   *
   * Get the server's time.
   */
  getServerTime(): Promise<
    SpotAPISuccessResponse<{
      unixtime: number;
      rfc1123: string;
    }>
  > {
    return this.get('0/public/Time');
  }

  /**
   * Get System Status
   *
   * Get the current system status or trading mode.
   */
  getSystemStatus(): Promise<SpotAPISuccessResponse<SpotSystemStatus>> {
    return this.get('0/public/SystemStatus');
  }
}
