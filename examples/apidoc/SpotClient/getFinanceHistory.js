import { SpotClient } from '@siebly/htx-api';

const client = new SpotClient({
  apiKey: process.env.API_KEY_BROKER,
  apiSecret: process.env.API_SECRET_BROKER,
});

// HTX displays each of these financial record types as "Broker bonus".
const types = [
  'api-brokerage-auto-brokerage-to-spot',
  'api-brokerage-futures-auto-brokerage-to-spot',
  'api-brokerage-brokerage-to-spot',
  'api-brokerage-futures-brokerage-to-spot',
  'api-matching-fee-brokerage',
].join(',');

const pageSize = 10;
const params = {
  types,
  'start-time': Date.UTC(2026, 3, 1),
  'end-time': Date.now(),
  direction: 'next',
  size: pageSize + 1,
};

let from;
for (;;) {
  const { data } = await client.getFinanceHistory({ ...params, from });
  for (const row of data.slice(0, pageSize)) {
    console.log(
      new Date(row['created-at']).toISOString(),
      row.currency,
      row.amount,
    );
  }

  // HTX includes the cursor row in the next response.
  if (data.length <= pageSize) break;
  const next = data[pageSize].id;
  if (next === from)
    throw new Error('HTX returned the same finance history cursor');
  from = next;
}
