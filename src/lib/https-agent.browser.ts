import type { HttpsRequestOptionsLike } from './https-agent.js';

/** Browser requests must not force Node-only or preflight-triggering headers. */
export const DEFAULT_REQUEST_HEADERS: Readonly<Record<string, string>> = {};

/** Browsers manage connection pooling; HTTPS agent settings do not apply. */
export function configureHttpsKeepAlive(
  _requestOptions: HttpsRequestOptionsLike,
  _keepAliveMsecs?: number,
): void {
  void _requestOptions;
  void _keepAliveMsecs;
}
