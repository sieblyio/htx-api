import {
  FuturesFundingRate,
  FuturesSubmitOrderReq,
  SpotClient,
} from '@siebly/htx-api';

export type FuturesTypeExportContract = {
  fundingRate: FuturesFundingRate;
  order: FuturesSubmitOrderReq;
};

/** Browser-consumer fixture: public REST only, with no request made at import time. */
export async function getPublicTicker() {
  const client = new SpotClient();
  return client.getTicker({ symbol: 'btcusdt' });
}
