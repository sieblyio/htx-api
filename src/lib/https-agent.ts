import https from 'node:https';

export interface HttpsRequestOptionsLike {
  httpsAgent?: unknown;
}

export const DEFAULT_REQUEST_HEADERS: Readonly<Record<string, string>> = {
  'User-Agent': '@siebly/htx-api',
  locale: 'en-US',
};

/** Configure Node's HTTPS keep-alive agent while preserving caller options. */
export function configureHttpsKeepAlive(
  requestOptions: HttpsRequestOptionsLike,
  keepAliveMsecs?: number,
): void {
  const existingHttpsAgent = requestOptions.httpsAgent as
    | { options?: Record<string, unknown> }
    | undefined;

  requestOptions.httpsAgent = new https.Agent({
    ...(existingHttpsAgent?.options || {}),
    keepAlive: true,
    keepAliveMsecs,
  });
}
