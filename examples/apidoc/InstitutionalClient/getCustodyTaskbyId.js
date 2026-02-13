const { InstitutionalClient } = require('@siebly/kraken-api');

// This example shows how to call this Kraken API endpoint with either node.js, javascript (js) or typescript (ts) with the npm module "@siebly/kraken-api" for Kraken exchange
// This Kraken API SDK is available on npm via "npm install @siebly/kraken-api"
// ENDPOINT: 0/private/GetCustodyTask
// METHOD: POST
// PUBLIC: NO

const client = new InstitutionalClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

client.getCustodyTaskbyId(params)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
