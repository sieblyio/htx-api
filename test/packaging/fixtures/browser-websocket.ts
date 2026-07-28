import { SpotClient, WebsocketClient, WS_KEY_MAP } from '@siebly/htx-api';

/** Exercise the package's REST browser adapter in the full SDK fixture. */
export function createPublicRestClient() {
  return new SpotClient();
}

/** Browser-consumer fixture: public market data only, with no socket opened at import time. */
export function createPublicTickerStream(
  onMessage: (message: unknown) => void,
) {
  const client = new WebsocketClient();

  client.on('message', onMessage);
  client.subscribe('market.btcusdt.ticker', WS_KEY_MAP.spotPublic);

  return () => {
    client.off('message', onMessage);
    client.closeAll();
  };
}
