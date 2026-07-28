import { SpotClient } from '@siebly/htx-api';

/** Browser-consumer fixture: public REST only, with no request made at import time. */
export async function getPublicTicker() {
  const client = new SpotClient();
  return client.getTicker({ symbol: 'btcusdt' });
}
