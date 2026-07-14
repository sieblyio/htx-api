import { WebsocketAPIClient } from '@siebly/htx-api';
// or, if require is preferred:
// const { WebsocketAPIClient } = require('@siebly/htx-api');

// This example shows how to call this HTX WebSocket API endpoint with either node.js, javascript (js) or typescript (ts) with the npm module "@siebly/htx-api" for HTX exchange
// This HTX API SDK is available on npm via "npm install @siebly/htx-api"
// WS API ENDPOINT: create_cross_order
// METHOD: WebSocket API
// PUBLIC: NO

// Create a WebSocket API client instance
const client = new WebsocketAPIClient({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
});

// The WebSocket connection is established automatically when needed
// You can use the client to make requests immediately

// Example use of the submitLinearSwapCrossOrder method
client.submitLinearSwapCrossOrder(params)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

