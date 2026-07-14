import { SpotClient } from '@siebly/htx-api';
// or, if require is preferred:
// const { SpotClient } = require('@siebly/htx-api');

// This example shows how to call this HTX API endpoint with either node.js, javascript (js) or typescript (ts) with the npm module "@siebly/htx-api" for HTX exchange
// This HTX API SDK is available on npm via "npm install @siebly/htx-api"
// ENDPOINT: /broker/v1/account_capital_snapshot_everyday
// METHOD: POST
// PUBLIC: NO

const client = new SpotClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.getBrokerAccountCapitalSnapshot(params)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
