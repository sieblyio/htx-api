# Node.js & JavaScript SDK for HTX REST APIs & WebSockets

[![Build & Test](https://github.com/sieblyio/htx-api/actions/workflows/e2etest.yml/badge.svg?branch=main)](https://github.com/sieblyio/htx-api/actions/workflows/e2etest.yml)
[![npm version](https://img.shields.io/npm/v/%40siebly%2Fhtx-api)][1]
[![npm size](https://img.shields.io/bundlephobia/min/%40siebly%2Fhtx-api/latest)][1]
[![npm downloads](https://img.shields.io/npm/dt/%40siebly%2Fhtx-api)][1]
[![last commit](https://img.shields.io/github/last-commit/sieblyio/htx-api)][1]
[![Telegram](https://img.shields.io/badge/chat-on%20telegram-blue.svg)](https://t.me/nodetraders)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/sieblyio/htx-api)

<p align="center">
  <a href="https://www.npmjs.com/package/@siebly/htx-api">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/sieblyio/htx-api/blob/main/docs/images/logoDarkMode2.svg?raw=true#gh-dark-mode-only">
      <img alt="SDK Logo" src="https://github.com/sieblyio/htx-api/blob/main/docs/images/logoBrightMode2.svg?raw=true#gh-light-mode-only">
    </picture>
  </a>
</p>

[1]: https://www.npmjs.com/package/@siebly/htx-api

Complete & robust JavaScript & Node.js SDK for the HTX REST APIs and WebSockets:

- Professional, robust & complete HTX SDK for all JavaScript runtimes.
- Complete integration with HTX REST APIs and WebSockets.
  - Dedicated REST clients for Spot and Derivatives (linear swap, coin swap, delivery futures)
  - Unified WebSocket client for all markets
- Complete TypeScript support (with type declarations for most API requests & responses).
  - Strongly typed requests and responses.
  - Automated end-to-end tests ensuring reliability.
- Actively maintained with a modern, promise-driven interface.
- Robust WebSocket integration with configurable connection heartbeats & automatic reconnect then resubscribe workflows.
  - Event driven messaging.
  - Smart WebSocket persistence with automatic reconnection handling.
  - Emit `reconnected` event when dropped connection is restored.
  - Support for both public and private WebSocket streams.
- Portable HMAC signing support for trusted server-side runtimes.
- Automatically supports both ESM and CJS projects.
- Heavy automated end-to-end testing with real API calls.
- Proxy support via axios integration.
- Active community support & collaboration in telegram: [Node.js Algo Traders](https://t.me/nodetraders).

## Table of Contents

- [Installation](#installation)
- [Examples](#examples)
- [Issues & Discussion](#issues--discussion)
- [Related Projects](#related-projects)
- [Documentation](#documentation)
- [Structure](#structure)
- [Usage](#usage)
  - [REST API Clients](#rest-api)
    - [Spot Trading](#spot-trading)
    - [Derivatives (Futures) Trading](#derivatives-futures-trading)
  - [WebSockets](#websockets)
    - [Public WebSocket Streams](#public-websocket-streams)
    - [Private WebSocket Streams](#private-websocket-streams)
    - [WebSocket API (WebsocketAPIClient)](#websocket-api-websocketapiclient)
- [Customise Logging](#customise-logging)
- [Browser/Frontend Usage](#browserfrontend-usage)
  - [React and Vite](#react-and-vite)
  - [Webpack](#webpack)
  - [Browser Requirements](#browser-requirements)
  - [Security and CORS](#security-and-cors)
- [LLMs & AI](#use-with-llms--ai)
- [Used By](#used-by)
- [Contributions & Thanks](#contributions--thanks)

## Installation

`npm install --save @siebly/htx-api`

Node.js usage requires Node 22.13.0 or newer. Browser applications should follow the public-data and credential-safety guidance below.

## Examples

Refer to the [examples](./examples) folder for implementation demos, including:

- **Spot WebSocket Examples**: public and private market/account streams
- **Derivatives WebSocket Examples**: linear swap, coin swap, delivery futures, and index streams

## Issues & Discussion

- Issues? Check the [issues tab](https://github.com/sieblyio/htx-api/issues).
- Discuss & collaborate with other node devs? Join our [Node.js Algo Traders](https://t.me/nodetraders) engineering community on telegram.
- Follow our announcement channel for real-time updates on [X/Twitter](https://x.com/sieblyio)

<!-- template_related_projects -->

## Related Projects

Check out our JavaScript/TypeScript/Node.js SDKs & Projects:

- Visit our website: [https://Siebly.io](https://siebly.io/?ref=gh)
- Try our REST API & WebSocket SDKs published on npmjs:
  - [Bybit Node.js SDK: bybit-api](https://www.npmjs.com/package/bybit-api)
  - [Kraken Node.js SDK: @siebly/kraken-api](https://www.npmjs.com/package/@siebly/kraken-api)
  - [OKX Node.js SDK: okx-api](https://www.npmjs.com/package/okx-api)
  - [Binance Node.js SDK: binance](https://www.npmjs.com/package/binance)
  - [Gate (gate.com) Node.js SDK: gateio-api](https://www.npmjs.com/package/gateio-api)
  - [Bitget Node.js SDK: bitget-api](https://www.npmjs.com/package/bitget-api)
  - [Kucoin Node.js SDK: kucoin-api](https://www.npmjs.com/package/kucoin-api)
  - [Coinbase Node.js SDK: coinbase-api](https://www.npmjs.com/package/coinbase-api)
  - [HTX Node.js SDK: @siebly/htx-api](https://www.npmjs.com/package/@siebly/htx-api)
- Try my misc utilities:
  - [OrderBooks Node.js: orderbooks](https://www.npmjs.com/package/orderbooks)
  - [Crypto Exchange Account State Cache: accountstate](https://www.npmjs.com/package/accountstate)
- Check out my examples:
  - [awesome-crypto-examples Node.js](https://github.com/tiagosiebler/awesome-crypto-examples)
  <!-- template_related_projects_end -->

## Documentation

Most methods accept JS objects. These can be populated using parameters specified by HTX's API documentation, or check the type definition in each class within this repository.

### API Documentation Links

- [HTX API Documentation](https://www.htx.com/en-us/opend/newApiPages/)
  - [Spot Trading API](https://www.htx.com/en-us/opend/newApiPages/)
  - [Derivatives Trading API](https://www.htx.com/en-us/opend/newApiPages/)
- [REST Endpoint Function List](./docs/endpointFunctionList.md)

## Structure

This project uses typescript. Resources are stored in 2 key structures:

- [src](./src) - the whole connector written in typescript
- [examples](./examples) - some implementation examples & demonstrations. Contributions are welcome!

---

# Usage

Create API credentials on HTX's website:

- [HTX API Key Management](https://www.htx.com/apikey/)

## REST API

The SDK provides dedicated REST clients for different trading products:

- **SpotClient** - for spot trading, margin, earn, sub-accounts, and account operations
- **FuturesClient** - for linear swap, coin swap, delivery futures, and copy trading operations

Both clients default to HTX's AWS CDN domains for better connectivity. You can override this via `baseUrlKey` in the client options if needed.

### Spot Trading

To use HTX's Spot APIs, import (or require) the `SpotClient`:

```javascript
import { SpotClient } from '@siebly/htx-api';
// or if you prefer require:
// const { SpotClient } = require('@siebly/htx-api');

// For public endpoints, API credentials are optional
const publicClient = new SpotClient();

// For private endpoints, provide API credentials
const client = new SpotClient({
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret',
});

// Public API Examples

// Get ticker information
const ticker = await publicClient.getTicker({
  symbol: 'btcusdt',
});
console.log('Ticker: ', ticker);

// Get order book
const orderBook = await publicClient.getMarketDepth({
  symbol: 'btcusdt',
  depth: 10,
});
console.log('Order Book: ', orderBook);

// Private API Examples (requires authentication)

// Get accounts and balances
client
  .getAccounts()
  .then(async (accounts) => {
    console.log('Accounts: ', accounts);

    const accountId = accounts.data?.[0]?.id;
    if (accountId) {
      const balance = await client.getAccountBalance({ accountId });
      console.log('Account Balance: ', balance);
    }
  })
  .catch((err) => {
    console.error('Error: ', err);
  });

// Submit a limit order
client
  .submitOrder({
    'account-id': 'your-account-id',
    symbol: 'btcusdt',
    type: 'buy-limit',
    amount: '0.0001',
    price: '10000',
    'client-order-id': client.generateNewOrderID(),
  })
  .then((result) => {
    console.log('Limit Order Result: ', result);
  })
  .catch((err) => {
    console.error('Error: ', err);
  });

// Submit batch of orders (max 10 per batch)
client
  .submitBatchOrders([
    {
      'account-id': 'your-account-id',
      symbol: 'btcusdt',
      type: 'buy-limit',
      amount: '0.0001',
      price: '10000.00',
      'client-order-id': client.generateNewOrderID(),
    },
    {
      'account-id': 'your-account-id',
      symbol: 'btcusdt',
      type: 'sell-limit',
      amount: '0.0001',
      price: '13000.00',
      'client-order-id': client.generateNewOrderID(),
    },
  ])
  .then((result) => {
    console.log('Batch Order Result: ', JSON.stringify(result, null, 2));
  })
  .catch((err) => {
    console.error('Error: ', err);
  });
```

See [SpotClient](./src/SpotClient.ts) for further information.

### Derivatives (Futures) Trading

Use the `FuturesClient` for futures and swap trading operations:

```javascript
import { FuturesClient } from '@siebly/htx-api';
// or if you prefer require:
// const { FuturesClient } = require('@siebly/htx-api');

// For public endpoints, API credentials are optional
const publicClient = new FuturesClient();

// For private endpoints, provide API credentials
const client = new FuturesClient({
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret',
});

// Public API Examples

// Get order book for a specific contract
const orderBook = await publicClient.getLinearSwapMarketDepth({
  contract_code: 'BTC-USDT',
  type: 'step0',
});
console.log('Futures Order Book: ', orderBook);

// Get ticker information
const ticker = await publicClient.getLinearSwapTicker({
  contract_code: 'BTC-USDT',
});
console.log('Futures Ticker: ', ticker);

// Private API Examples (requires authentication)

// Get cross margin account info
client
  .getLinearSwapCrossAccountInfo()
  .then((accounts) => {
    console.log('Cross Account Info: ', accounts);
  })
  .catch((err) => {
    console.error('Error: ', err);
  });

// Submit a cross margin limit order
client
  .submitLinearSwapCrossOrder({
    contract_code: 'BTC-USDT',
    direction: 'buy',
    volume: 1,
    lever_rate: 5,
    order_price_type: 'limit',
    price: 10000,
  })
  .then((result) => {
    console.log('Limit Order Result: ', JSON.stringify(result, null, 2));
  })
  .catch((err) => {
    console.error('Error: ', err);
  });
```

See [FuturesClient](./src/FuturesClient.ts) for further information.

## WebSockets

HTX supports two types of WebSocket connections:

1. **WebSocket Subscriptions** - Real-time market data and account updates via the `WebsocketClient`
2. **WebSocket API** - REST-like request/response trading via `WebsocketAPIClient` or `sendWSAPIRequest()`

### WebSocket Subscriptions (WebsocketClient)

The unified `WebsocketClient` handles all HTX WebSocket streams with automatic connection management and reconnection.

Key WebSocket features:

- Event driven messaging
- Smart WebSocket persistence with automatic reconnection
- Heartbeat mechanisms to detect disconnections
- Automatic resubscription after reconnection
- Support for Spot and Derivatives markets (linear swap, coin swap, delivery)
- Support for both public and private WebSocket streams

Each connection is tracked using a `WsKey` (see [WS_KEY_MAP](./src/lib/websocket/websocket-util.ts)). Pass the appropriate `WsKey` when subscribing so the client routes your request to the correct endpoint.

### Public WebSocket Streams

For public market data, API credentials are not required:

```javascript
import { WebsocketClient, WS_KEY_MAP } from '@siebly/htx-api';
// or if you prefer require:
// const { WebsocketClient, WS_KEY_MAP } = require('@siebly/htx-api');

// Create WebSocket client for public streams
const wsClient = new WebsocketClient();

// Set up event handlers
wsClient.on('open', (data) => {
  console.log('WebSocket connected: ', data?.wsKey);
});

wsClient.on('message', (data) => {
  console.log('Data received: ', JSON.stringify(data, null, 2));
});

wsClient.on('reconnected', (data) => {
  console.log('WebSocket reconnected: ', data);
});

wsClient.on('exception', (data) => {
  console.error('WebSocket error: ', data);
});

// Spot - Subscribe to public data streams
wsClient.subscribe(
  [
    'market.btcusdt.kline.1min',
    'market.btcusdt.ticker',
    'market.btcusdt.depth.step0',
    'market.btcusdt.trade.detail',
  ],
  WS_KEY_MAP.spotPublic,
);

// Spot feed - high-frequency topics such as BBO and MBP
wsClient.subscribe(
  ['market.btcusdt.mbp.5', 'market.btcusdt.trade.detail'],
  WS_KEY_MAP.spotFeed,
);

// Linear swap (USDT-margined) public streams
wsClient.subscribe(
  [
    'market.BTC-USDT.kline.1min',
    'market.BTC-USDT.detail',
    'market.BTC-USDT.trade.detail',
    'market.BTC-USDT.bbo',
  ],
  WS_KEY_MAP.linearSwapPublic,
);

// Derivatives index/mark price streams
wsClient.subscribe(
  ['market.BTC-USDT.index.1min', 'market.BTC-USDT.mark_price.1min'],
  WS_KEY_MAP.derivativesIndex,
);
```

### Private WebSocket Streams

For private account data streams, API credentials are required:

```javascript
import { WebsocketClient, WS_KEY_MAP } from '@siebly/htx-api';

// Create WebSocket client with API credentials for private streams
const wsClient = new WebsocketClient({
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret',
});

// Set up event handlers
wsClient.on('open', (data) => {
  console.log('Private WebSocket connected: ', data?.wsKey);
});

wsClient.on('message', (data) => {
  console.log('Private data received: ', JSON.stringify(data, null, 2));
});

wsClient.on('authenticated', (data) => {
  console.log('WebSocket authenticated: ', data);
});

wsClient.on('response', (data) => {
  console.log('WebSocket response: ', data);
});

wsClient.on('exception', (data) => {
  console.error('WebSocket error: ', data);
});

// Spot - Subscribe to private data streams
// Note: SDK automatically handles authentication before subscribing
wsClient.subscribe(
  ['accounts.update#1', 'orders#btcusdt', 'trade.clearing#btcusdt#0'],
  WS_KEY_MAP.spotPrivateV2,
);

// Linear swap private streams
wsClient.subscribe(
  ['orders.BTC-USDT', 'accounts.BTC-USDT', 'positions.BTC-USDT'],
  WS_KEY_MAP.linearSwapPrivate,
);
```

For more comprehensive examples, including custom logging and error handling, check the [examples](./examples/Spot/WebSockets) and [examples](./examples/Derivatives/WebSockets) folders.

### WebSocket API (WebsocketAPIClient)

Use `WebsocketAPIClient` for typed REST-like trading methods over a persisted WebSocket connection, or call `WebsocketClient.sendWSAPIRequest()` directly for lower-level control.

Trade connections connect and authenticate lazily on the first request. Optional pre-connect: `client.getWSClient().connectWSAPI(WS_KEY_MAP.spotTrade)`.

Trade keys: `spotTrade`, `linearSwapTrade`, `coinDeliveryTrade`, `coinSwapTrade`.

```javascript
import { WebsocketAPIClient, WS_KEY_MAP } from '@siebly/htx-api';

const client = new WebsocketAPIClient({
  apiKey: 'your-api-key',
  apiSecret: 'your-api-secret',
});

// Spot
const order = await client.submitSpotOrder({
  'account-id': 123456,
  symbol: 'btcusdt',
  type: 'buy-limit',
  amount: '0.001',
  price: '20000',
  source: 'spot-api',
});

// Derivatives
const linearOrder = await client.placeLinearSwapOrder({
  contract_code: 'BTC-USDT',
  margin_mode: 'cross',
  position_side: 'long',
  side: 'buy',
  type: 'limit',
  time_in_force: 'gtc',
  price: '20000',
  volume: '1',
  reduce_only: 0,
});
```

See [WebsocketAPIClient](./src/WebsocketAPIClient.ts) for all typed methods. Examples: [Spot](./examples/Spot/WebSockets/wsAPI.ts), [Derivatives](./examples/Derivatives/WebSockets/wsAPI.ts), [raw spot](./examples/Spot/WebSockets/wsAPI.RAW.ts), [raw derivatives](./examples/Derivatives/WebSockets/wsAPI.RAW.ts).

---

## Customise Logging

Pass a custom logger which supports the log methods `trace`, `info` and `error`, or override methods from the default logger as desired.

```javascript
import { WebsocketClient, DefaultLogger } from '@siebly/htx-api';

// E.g. customise logging for only the trace level:
const customLogger = {
  ...DefaultLogger,
  trace: (...params) => {
    // console.log('trace', ...params);
  },
  info: (...params) => {
    console.log('info', ...params);
  },
  error: (...params) => {
    console.error('error', ...params);
  },
};

const ws = new WebsocketClient(
  {
    apiKey: 'apiKeyHere',
    apiSecret: 'apiSecretHere',
  },
  customLogger,
);
```

In rare situations, you may want to see the raw HTTP requests being built as well as the API response. These can be enabled by setting the `HTXTRACE` env var to `true`.

## Browser/Frontend Usage

The package's ESM entry can be imported directly by modern frontend bundlers. Do not build or copy a separate SDK bundle into your application.

Browser applications should use the SDK only for public market data. Keep API keys, API secrets, authenticated REST calls, private WebSocket subscriptions, and WebSocket API trading on a trusted backend.

### React and Vite

Install and import the package normally; no SDK-specific Vite plugin or Node.js polyfill is required:

```bash
npm install @siebly/htx-api
```

```tsx
import { useEffect, useState } from 'react';
import { SpotClient, WebsocketClient, WS_KEY_MAP } from '@siebly/htx-api';

export function BtcTicker() {
  const [ticker, setTicker] = useState<unknown>();

  useEffect(() => {
    const restClient = new SpotClient();
    const wsClient = new WebsocketClient();

    restClient.getTicker({ symbol: 'btcusdt' }).then(setTicker);

    const onMessage = (message: unknown) => setTicker(message);
    wsClient.on('message', onMessage);
    wsClient.subscribe('market.btcusdt.ticker', WS_KEY_MAP.spotPublic);

    return () => {
      wsClient.off('message', onMessage);
      wsClient.closeAll();
    };
  }, []);

  return <pre>{JSON.stringify(ticker, null, 2)}</pre>;
}
```

The cleanup is important during navigation, hot reloads, and React Strict Mode development checks so that an old socket is not left reconnecting in the background.

### Webpack

Webpack 5 can consume the same package entry directly:

```javascript
import { SpotClient, WebsocketClient } from '@siebly/htx-api';
```

Use a normal `target: 'web'` application build. The SDK does not require a checked-in UMD bundle or `resolve.fallback` shims for Node.js core modules.

Direct `<script>`-tag globals are not supported. Use the package through an ESM-aware bundler or application build instead.

### Browser Requirements

Use a modern browser with native `WebSocket`, `TextEncoder`, `TextDecoder`, and `DecompressionStream` support. Secure-context Web Crypto support (`globalThis.crypto.subtle`) is required by signing code, although credentials should not be used in a frontend application.

Browser WebSockets do not expose Node.js-only operations such as custom agents, protocol-level `ping()`, or `terminate()`. The SDK uses browser-safe behavior for these cases. If your Content Security Policy restricts connections, allow the required HTX `https://` and `wss://` origins in `connect-src`.

### Security and CORS

- Never place an API key or secret in browser code, local storage, or frontend environment variables such as `VITE_*` or `REACT_APP_*`; those values are visible to users.
- Send authenticated REST and WebSocket API operations through your own backend. Expose only the narrow application operations the frontend needs.
- HTX controls which REST endpoints and headers are permitted by CORS. A browser cannot bypass a rejected preflight request; use a same-origin backend endpoint instead of disabling browser security.
- Do not expose an unrestricted forwarding proxy. Validate destinations, authentication, request shapes, and rate limits on the backend.
- Browser support does not imply that every HTX endpoint is suitable for direct frontend access. Public REST and public market-data WebSockets are the intended use cases.

## Use with LLMs & AI

This SDK includes a bundled `llms.txt` file in the root of the repository. If you're developing with LLMs, use the included `llms.txt` with your LLM - it will significantly improve the LLMs understanding of how to correctly use this SDK.

This file contains AI optimised structure of all the functions in this package, and their parameters for easier use with any learning models or artificial intelligence.

---

## Used By

[![Repository Users Preview Image](https://dependents.info/sieblyio/htx-api/image)](https://github.com/sieblyio/htx-api/network/dependents)

---

<!-- template_contributions -->

### Contributions & Thanks

Have my projects helped you? Share the love, there are many ways you can show your thanks:

- Star & share my projects.
- Are my projects useful? Sponsor me on Github and support my effort to maintain & improve them: https://github.com/sponsors/tiagosiebler
- Have an interesting project? Get in touch & invite me to it.
- Or buy me all the coffee:
  - ETH(ERC20): `0xA3Bda8BecaB4DCdA539Dc16F9C54a592553Be06C` <!-- metamask -->
- Sign up with my referral links:
  - OKX (receive a 20% fee discount!): https://www.okx.com/join/42013004
  - Binance (receive a 20% fee discount!): https://accounts.binance.com/register?ref=OKFFGIJJ
  - HyperLiquid (receive a 4% fee discount!): https://app.hyperliquid.xyz/join/SDK
  - Gate: https://www.gate.io/signup/NODESDKS?ref_type=103

<!---
old ones:
  - BTC: `1C6GWZL1XW3jrjpPTS863XtZiXL1aTK7Jk`
  - BTC(SegWit): `bc1ql64wr9z3khp2gy7dqlmqw7cp6h0lcusz0zjtls`
  - ETH(ERC20): `0xe0bbbc805e0e83341fadc210d6202f4022e50992`
  - USDT(TRC20): `TA18VUywcNEM9ahh3TTWF3sFpt9rkLnnQa
  - gate: https://www.gate.io/signup/AVNNU1WK?ref_type=103

-->
<!-- template_contributions_end -->

### Contributions & Pull Requests

Contributions are encouraged, I will review any incoming pull requests. See the issues tab for todo items.

<!-- template_star_history -->

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=tiagosiebler/bybit-api,tiagosiebler/okx-api,tiagosiebler/binance,tiagosiebler/bitget-api,tiagosiebler/gateio-api,tiagosiebler/kucoin-api,tiagosiebler/coinbase-api,tiagosiebler/orderbooks,tiagosiebler/accountstate,tiagosiebler/awesome-crypto-examples&type=Date)](https://star-history.com/#tiagosiebler/bybit-api&tiagosiebler/okx-api&tiagosiebler/binance&tiagosiebler/bitget-api&tiagosiebler/gateio-api&tiagosiebler/kucoin-api&tiagosiebler/coinbase-api&tiagosiebler/orderbooks&tiagosiebler/accountstate&tiagosiebler/awesome-crypto-examples&Date)

<!-- template_star_history_end -->
