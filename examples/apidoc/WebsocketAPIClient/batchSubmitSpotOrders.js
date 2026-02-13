const { WebsocketAPIClient } = require('@siebly/kraken-api');

// This example shows how to call this Kraken WebSocket API endpoint with either node.js, javascript (js) or typescript (ts) with the npm module "@siebly/kraken-api" for Kraken exchange
// This Kraken API SDK is available on npm via "npm install @siebly/kraken-api"
// WS API ENDPOINT: batch_add
// METHOD: WebSocket API
// PUBLIC: NO

// Create a WebSocket API client instance
const client = new WebsocketAPIClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

// The WebSocket connection is established automatically when needed
// You can use the client to make requests immediately

// Example use of the batchSubmitSpotOrders method
client.batchSubmitSpotOrders(params)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

