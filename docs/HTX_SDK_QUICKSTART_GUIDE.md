<!-- siebly:metadata
siebly:
  version: 1
  hero:
    headline: HTX API JavaScript Tutorial for Node.js
    badges:
      - HTX API
      - Spot
      - USDT-M Futures
      - Coin-M Futures
      - Public WebSockets
      - Private WebSockets
      - WebSocket API
      - Proxies
    summary: Build HTX integrations with Spot and Futures REST API calls, public and private WebSocket streams, production order workflows, WebSocket API commands, API host routing, proxies, and reconnect recovery.
    codeFilename: first-htx-api-call.js
    codeStatus: public REST API
    startSectionId: start-building-first-calls
  software:
    description: Node.js and JavaScript SDK for the HTX Spot and Futures REST APIs, public and private WebSocket streams, WebSocket API commands, host routing, proxy support, and reconnect recovery.
    topics:
      - HTX REST API
      - Spot API
      - USDT-M Futures API
      - Coin-M Futures API
      - Public and private WebSockets
      - WebSocket API
      - Production order workflows
      - API host routing
      - HTTP and SOCKS proxies
      - Reconnect recovery
  machineCatalog:
    label: HTX API JavaScript Tutorial
    topics:
      - REST API response shapes
      - Spot accounts and orders
      - V5 USDT-M Futures
      - public WebSocket streams
      - private WebSocket streams
      - WebSocket API commands
      - API host routing
      - HTTP and SOCKS proxies
      - reconnect recovery
  sdkPagePromo:
    descriptionBeforePackage: 'A practical JavaScript guide to using '
    descriptionAfterPackage: ' across HTX Spot and Futures REST API calls, public and private streams, production order workflows, WebSocket API commands, API hosts, proxies, and reconnect recovery.'
    highlights:
      - Spot and V5 Futures REST API calls
      - Public and private WebSocket streams
      - Spot and USDT-M Futures order workflows
      - REST API and WebSocket proxy examples
    exampleHref: /examples/HTX
    exampleLabel: HTX SDK examples
    architectureClientSummary: SpotClient, FuturesClient, WebsocketClient, WebsocketAPIClient
    architectureApiTitle: HTX APIs
    architectureApiSummary: Spot, USDT-M Futures, Coin-M Futures, WebSocket streams, and WebSocket API commands
  surfaceMap:
    heading: Choose the HTX client for the job
    summary: Use the client that matches the product and transport your application needs.
    appLabel: Bot, dashboard, worker, tool
    appSummary: Any Node.js or JavaScript-compatible service that needs HTX market data, account state, orders, or reconciliation.
    apiLabel: HTX APIs
    apiItems:
      - Spot REST API calls
      - USDT-M and Coin-M Futures REST API calls
      - Public and private WebSocket streams
      - WebSocket API order commands
    packageNodes:
      - label: SpotClient
        summary: Spot market data, accounts, orders, margin, transfers, Earn, subaccounts, and wallet operations
      - label: FuturesClient
        summary: USDT-M and Coin-M Futures market data, accounts, positions, orders, risk, and copy trading
      - label: WebsocketClient
        summary: Public and private Spot and Futures subscriptions
      - label: WebsocketAPIClient
        summary: Awaitable Spot and Futures order commands over WebSocket
  routing:
    id: htx-request-routing
    eyebrow: Request routing
    heading: Product, symbol, account, connection, and host are separate choices
    summary: Keep these values explicit so each request reaches the intended HTX product and account.
    rows:
      - eyebrow: Spot symbol
        code: "symbol: 'btcusdt'"
        summary: Select a Spot market using HTX's lowercase symbol format.
      - eyebrow: Futures contract
        code: "contract_code: 'BTC-USDT'"
        summary: Select a USDT-margined linear Futures contract.
      - eyebrow: Spot account
        code: "'account-id': spotAccountId"
        summary: Route Spot orders to the account returned by getAccounts.
      - eyebrow: Futures mode
        code: "margin_mode: 'cross'"
        summary: Select cross or isolated margin for a V5 Futures request.
      - eyebrow: WebSocket connection
        code: "WS_KEY_MAP.derivativesPrivateV5"
        summary: Route topics to the correct Spot or Futures connection.
      - eyebrow: API host
        code: "baseUrlKey or wsEnvironment"
        summary: Select the standard or AWS API network.
  coverage:
    heading: What to get right in an HTX integration
    summary: Start with public data, then add credentials, account routing, private state, orders, network configuration, and recovery.
    cards:
      - heading: Spot and Futures REST API calls
        summary: Use the client for the intended product and read each endpoint's response fields.
      - heading: Public and private streams
        summary: Select the correct connection with WS_KEY_MAP and process acknowledgements separately from topic messages.
      - heading: Order workflows
        summary: Derive current price and size values, submit the order, then query and cancel it.
      - heading: Hosts, proxies, and recovery
        summary: Select the intended HTX network route and rebuild private state after a connection gap.
  snippets:
    heading: First REST API calls, streams, orders, recovery, and proxies
    summary: Run one focused JavaScript example at a time, then apply the same clients to the rest of the HTX API.
    labels:
      public-rest: Public Spot REST API
      private-rest: Private Spot REST API
      futures-rest: Futures REST API
      public-websocket: Public WebSocket
      private-websocket: Private WebSocket
      spot-order: Spot REST API order
      futures-order: Futures REST API order
      spot-websocket-api: Spot WebSocket API
      futures-websocket-api: Futures WebSocket API
      reconnect-recovery: Reconnect recovery
      api-host-routing: API host routing
      http-proxy: HTTP or HTTPS proxy
      socks-proxy: SOCKS5 proxy
  workflows:
    heading: REST API, WebSocket stream, and order-command workflows
    summary: REST API responses, subscription acknowledgements, topic messages, and WebSocket API replies carry different information.
    diagrams:
      - heading: REST API request flow
        summary: Choose the product client and request fields, then let the SDK route and sign the call.
        steps:
          - label: Choose product and method
            owner: app
          - label: Call the SDK client
            owner: app
          - label: Route and sign if private
            owner: sdk
          - label: Receive endpoint response
            owner: exchange
          - label: Read the response fields
            owner: app
      - heading: WebSocket subscription flow
        summary: Choose a topic and WebSocket key, receive the acknowledgement, then process topic messages.
        steps:
          - label: Choose topic and WebSocket key
            owner: app
          - label: Call subscribe
            owner: app
          - label: Connect and authenticate
            owner: sdk
          - label: Receive response event
            owner: event
          - label: Process message events
            owner: app
      - heading: Order workflow
        summary: Read current rules and prices, submit the order, then query and cancel it.
        steps:
          - label: Read account and product rules
            owner: app
          - label: Build the order
            owner: app
          - label: Submit the order
            owner: app
          - label: Query order state
            owner: exchange
          - label: Cancel and confirm
            owner: app
  production:
    heading: Before an HTX integration trades unattended
    summary: Credentials, product rules, account modes, response handling, stream continuity, and network routing must all be predictable.
    items:
      - Keep API credentials server-side and grant each process only the access it needs.
      - Read current symbol and contract metadata before constructing orders.
      - Keep account IDs, margin modes, position modes, WebSocket keys, and API hosts explicit.
      - Generate client order IDs and query by them before retrying uncertain writes.
      - Treat command replies as request results, then confirm final order state.
      - Reload balances, positions, open orders, and fills after a private stream gap.
      - Keep the system clock synchronized and respect current HTX rate limits.
      - Monitor proxy reachability, latency, and egress IP when a proxy is enabled.
  journeys:
    eyebrow: Choose your path
    heading: Jump to the HTX workflow you are building
    actionLabel: Open section
    cards:
      - heading: Start with REST API calls
        summary: Read Spot and Futures market data, then add account and order state.
        href: "#start-building-first-calls"
      - heading: Stream live data
        summary: Subscribe to public and private Spot and Futures topics.
        href: "#websocket-streams"
      - heading: Send WebSocket commands
        summary: Use WebsocketAPIClient for Spot and V5 Futures order commands.
        href: "#websocket-api"
      - heading: Configure networking
        summary: Select an API host and configure a proxy agent when required.
        href: "#api-hosts"
  article:
    heading: Build around HTX products and account state
    summary: "This tutorial covers the HTX API pieces developers usually need first: Spot and Futures REST API calls, public and private streams, order workflows, WebSocket API commands, API hosts, proxies, and reconnect recovery."
  related:
    cards:
      - heading: HTX SDK page
        summary: Return to installation, examples, endpoint maps, and package links.
        href: /sdk/htx/javascript
      - heading: HTX examples
        summary: Browse runnable REST API and WebSocket examples.
        href: /examples/HTX
      - heading: Endpoint map
        summary: Find the SDK method for each supported HTX endpoint.
        href: https://github.com/sieblyio/htx-api/blob/main/docs/endpointFunctionList.md
      - heading: Source repository
        summary: Browse source, releases, issues, and endpoint coverage on GitHub.
        href: https://github.com/sieblyio/htx-api
-->

# HTX API JavaScript Tutorial for Node.js

<!-- siebly:website-omit:start -->

> [!TIP]
> Read this guide in tutorial format on the Siebly website: [HTX JavaScript REST API and WebSocket Tutorial](https://siebly.io/sdk/htx/javascript/tutorial)

<!-- siebly:website-omit:end -->

This tutorial uses [`@siebly/htx-api`](https://www.npmjs.com/package/@siebly/htx-api), Siebly's Node.js and JavaScript SDK for HTX. It covers Spot and Futures REST API calls, public and private WebSocket streams, production order workflows, WebSocket API commands, API hosts, and proxies.

The SDK handles REST API request signing, private WebSocket authentication, compressed HTX messages, heartbeats, reconnects, resubscriptions, and WebSocket API response matching. TypeScript declarations are included for projects that use them.

**Key links**

- HTX JavaScript SDK by Siebly: [`@siebly/htx-api`](https://siebly.io/sdk/htx/javascript)
- npm package: [`@siebly/htx-api`](https://www.npmjs.com/package/@siebly/htx-api)
- GitHub repository: [`sieblyio/htx-api`](https://github.com/sieblyio/htx-api)
- SDK examples: [HTX SDK examples](https://siebly.io/examples/HTX)
- SDK endpoint map: [HTX JavaScript endpoint reference](./endpointFunctionList.md)
- HTX API documentation: [HTX API docs](https://www.htx.com/en-us/opend/newApiPages/)
- Trading-system terms: [Siebly glossary](https://siebly.io/reference/glossary)
- More JavaScript and TypeScript SDKs: [Siebly.io](https://siebly.io)

## Why use `@siebly/htx-api`?

HTX has separate Spot and Futures REST API hosts, several WebSocket paths, and different topic formats across product groups. Private requests also need timestamps and signatures.

`@siebly/htx-api` handles those mechanics through four clients:

| Client               | Use it for                                                               |
| -------------------- | ------------------------------------------------------------------------ |
| `SpotClient`         | Spot market data, accounts, orders, margin, transfers, Earn, and wallets |
| `FuturesClient`      | USDT-M and Coin-M Futures market data, accounts, positions, and orders   |
| `WebsocketClient`    | Public and private Spot and Futures subscriptions                        |
| `WebsocketAPIClient` | Promise-based Spot and Futures trading commands over WebSocket           |

`WebsocketClient` also handles HTX's compressed frames, ping and pong messages, reconnects, cached subscriptions, and resubscription. `WebsocketAPIClient` adds authentication, correlation IDs, response matching, and promise resolution.

## Install the SDK

```bash
npm install @siebly/htx-api
```

Every example below is plain JavaScript using ESM imports.

## Create HTX API keys

Public market data does not require credentials. Private REST API calls, private streams, and WebSocket API commands use an Access Key and Secret Key.

Create and manage credentials from [HTX API Key Management](https://www.htx.com/apikey/). Configure the key for the work performed by the process:

- Start with read access while building account views and recovery logic.
- Add trading access for order workflows.
- Bind the key to stable outbound IP addresses when available.
- Keep credentials in a server-side environment or secret manager.
- Allow for key and permission changes to propagate before testing them.
- Review HTX's current inactivity rules for keys with sensitive permissions and no bound IP.

Set these values in your shell, deployment environment, or secret manager:

- `HTX_API_KEY`
- `HTX_API_SECRET`

The examples read these variables directly. Do not log them or include them in browser code.

## HTX products and request vocabulary

HTX uses different symbol and request conventions across product groups:

| Field or value    | Example                             | Meaning                                                                                 |
| ----------------- | ----------------------------------- | --------------------------------------------------------------------------------------- |
| Spot symbol       | `btcusdt`                           | A lowercase Spot market without a separator                                             |
| Linear contract   | `BTC-USDT`                          | A USDT-margined perpetual Futures contract                                              |
| Coin-M perpetual  | `BTC-USD`                           | A coin-margined perpetual Futures contract                                              |
| Delivery alias    | `BTC_CW`                            | A current-week coin-margined delivery contract used by market streams                   |
| `account-id`      | `1234567`                           | The Spot account returned by `getAccounts()`                                            |
| `client-order-id` | Generated by `generateNewOrderID()` | Your [custom order ID](https://siebly.io/reference/glossary#custom-order-id)            |
| `margin_mode`     | `cross` or `isolated`               | The margin mode for a V5 USDT-M Futures request                                         |
| `position_side`   | `both`, `long`, or `short`          | The position leg affected by a Futures request                                          |
| `wsKey`           | `WS_KEY_MAP.derivativesPrivateV5`   | The [WebSocket key](https://siebly.io/reference/glossary#ws-key) selecting a connection |

Spot balances and orders are scoped to an account ID. Fetch accounts first, then select the active account with `type === 'spot'`.

USDT-M Futures order `volume` is a contract count. The contract's `contract_size` describes the underlying value represented by one contract. Apply the returned `price_tick` when choosing an order price.

REST API response bodies are endpoint-specific. Common fields include:

- `status`, `code`, or `success` for request status
- `data` for account records, symbols, candles, or order results
- `tick` for a ticker or order-book snapshot
- `ts` for a response timestamp

Read the method's response shape rather than assuming every result uses the same field.

<!-- siebly:section id="start-building-first-calls" -->

## Start building: first calls and streams

Run each example on its own. Start with public Spot data, then add private Spot state, Futures data, and live streams.

### 1. Make public Spot REST API calls

Public calls need no API key.

<!-- siebly:snippet id="public-rest" -->

```javascript
import { SpotClient } from '@siebly/htx-api';

const client = new SpotClient();

async function main() {
  try {
    const time = await client.getTimestamp();
    console.log('Server time:', time.data);
  } catch (error) {
    console.error('Server time request failed:', error);
  }

  try {
    const symbols = await client.getTradingSymbols();
    const btcUsdt = symbols.data.find((symbol) => symbol.sc === 'btcusdt');
    console.log('BTC/USDT symbol:', btcUsdt);
  } catch (error) {
    console.error('Symbol request failed:', error);
  }

  try {
    const ticker = await client.getTicker({
      symbol: 'btcusdt',
    });
    console.log('BTC/USDT ticker:', ticker.tick);
  } catch (error) {
    console.error('Ticker request failed:', error);
  }

  try {
    const orderBook = await client.getMarketDepth({
      symbol: 'btcusdt',
      depth: 5,
      type: 'step0',
    });
    console.log('Best bid:', orderBook.tick.bids[0]);
    console.log('Best ask:', orderBook.tick.asks[0]);
  } catch (error) {
    console.error('Order-book request failed:', error);
  }

  try {
    const candles = await client.getKlines({
      symbol: 'btcusdt',
      period: '1min',
      size: 10,
    });
    console.log('Latest one-minute candle:', candles.data[0]);
  } catch (error) {
    console.error('Candle request failed:', error);
  }
}

main();
```

`getMarketDepth()` returns price levels as `[price, quantity]` tuples under `tick.bids` and `tick.asks`. `getKlines()` returns candle objects under `data`, with fields such as `id`, `open`, `close`, `low`, `high`, `amount`, `vol`, and `count`.

### 2. Read private Spot account state

The SDK signs private REST API calls when credentials are supplied. Start by retrieving the Spot account ID because balance and order calls use it for routing.

<!-- siebly:snippet id="private-rest" -->

```javascript
import { SpotClient } from '@siebly/htx-api';

const client = new SpotClient({
  apiKey: process.env.HTX_API_KEY,
  apiSecret: process.env.HTX_API_SECRET,
});

async function main() {
  let spotAccountId;

  try {
    const accounts = await client.getAccounts();
    const spotAccount = accounts.data.find(
      (account) => account.type === 'spot' && account.state === 'working',
    );
    spotAccountId = spotAccount?.id;
    console.log('Spot account:', spotAccount);
  } catch (error) {
    console.error('Account request failed:', error);
    return;
  }

  if (!spotAccountId) {
    console.error('No active Spot account was returned.');
    return;
  }

  try {
    const balances = await client.getAccountBalance({
      accountId: spotAccountId,
    });
    const nonZeroBalances = balances.data.list.filter(
      (balance) => Number(balance.balance) !== 0,
    );
    console.log('Non-zero Spot balances:', nonZeroBalances);
  } catch (error) {
    console.error('Balance request failed:', error);
  }

  try {
    const openOrders = await client.getOpenOrders({
      'account-id': String(spotAccountId),
      symbol: 'btcusdt',
    });
    console.log('Open BTC/USDT orders:', openOrders.data);
  } catch (error) {
    console.error('Open-order request failed:', error);
  }

  try {
    const recentOrders = await client.getOrderHistory48h({
      symbol: 'btcusdt',
      size: 20,
    });
    console.log('Recent BTC/USDT orders:', recentOrders.data);
  } catch (error) {
    console.error('Order-history request failed:', error);
  }

  try {
    const matches = await client.getMatchResults({
      symbol: 'btcusdt',
      size: 20,
    });
    console.log('Recent BTC/USDT matches:', matches.data);
  } catch (error) {
    console.error('Match request failed:', error);
  }
}

main();
```

Balance rows identify a currency and balance type. A `trade` balance is available for trading, while a `frozen` balance is reserved by an open order or another account operation.

Private request failures are rejected as JavaScript errors. The SDK includes the parsed HTX error body and request context while redacting credentials.

### 3. Work with the USDT-M Futures REST API

Public USDT-M market data uses the linear-swap methods on `FuturesClient`. Current private account, position, and order state uses HTX's V5 methods. See HTX's [USDT-M API upgrade guidance](https://www.htx.com/support/95034086350701) for the current interface requirements.

<!-- siebly:snippet id="futures-rest" -->

```javascript
import { FuturesClient } from '@siebly/htx-api';

const client = new FuturesClient({
  apiKey: process.env.HTX_API_KEY,
  apiSecret: process.env.HTX_API_SECRET,
});

async function main() {
  try {
    const time = await client.getTimestamp();
    console.log('Futures server time:', time.ts);
  } catch (error) {
    console.error('Futures time request failed:', error);
  }

  try {
    const contracts = await client.getLinearSwapContractInfo({
      contract_code: 'BTC-USDT',
    });
    console.log('BTC-USDT contract:', contracts.data[0]);
  } catch (error) {
    console.error('Contract request failed:', error);
  }

  try {
    const ticker = await client.getLinearSwapTicker({
      contract_code: 'BTC-USDT',
    });
    console.log('BTC-USDT ticker:', ticker.tick);
  } catch (error) {
    console.error('Futures ticker request failed:', error);
  }

  try {
    const orderBook = await client.getLinearSwapMarketDepth({
      contract_code: 'BTC-USDT',
      type: 'step0',
    });
    console.log('BTC-USDT best bid:', orderBook.tick.bids[0]);
    console.log('BTC-USDT best ask:', orderBook.tick.asks[0]);
  } catch (error) {
    console.error('Futures order-book request failed:', error);
  }

  try {
    const funding = await client.getLinearSwapFundingRate({
      contract_code: 'BTC-USDT',
    });
    console.log('BTC-USDT funding:', funding.data);
  } catch (error) {
    console.error('Funding-rate request failed:', error);
  }

  try {
    const assetMode = await client.getMultiAssetMode();
    console.log('Futures asset mode:', assetMode.data);
  } catch (error) {
    console.error('Asset-mode request failed:', error);
  }

  try {
    const account = await client.getMultiAssetAccountBalance();
    console.log('Futures account balance:', account.data);
  } catch (error) {
    console.error('Futures balance request failed:', error);
  }

  try {
    const positionMode = await client.getMultiAssetPositionMode();
    console.log('Futures position mode:', positionMode.data);
  } catch (error) {
    console.error('Position-mode request failed:', error);
  }

  try {
    const positions = await client.getMultiAssetPositions({
      contract_code: 'BTC-USDT',
    });
    console.log('BTC-USDT positions:', positions.data);
  } catch (error) {
    console.error('Position request failed:', error);
  }

  try {
    const openOrders = await client.getMultiAssetOpenOrders({
      contract_code: 'BTC-USDT',
      limit: 20,
    });
    console.log('BTC-USDT open orders:', openOrders.data);
  } catch (error) {
    console.error('Futures open-order request failed:', error);
  }
}

main();
```

The public contract response supplies the rules needed for order construction:

- `contract_size` is the underlying value represented by one contract.
- `price_tick` is the allowed price step.
- `contract_status` identifies the current contract state.
- `support_margin_mode` describes the available margin modes.

The V5 account calls return the configured asset and position modes. In `single_side` mode, orders use `position_side: 'both'`. In `dual_side` mode, use `long` or `short` to select the intended position leg.

<!-- siebly:section id="websocket-streams" -->

## Build with HTX WebSocket streams

HTX separates Spot, feed, linear Futures, coin-margined Futures, private data, and order commands across different WebSocket paths. The SDK's [WebSocket keys](https://siebly.io/reference/glossary#ws-key) select the correct connection.

### 4. Subscribe to public WebSocket streams

The same `WebsocketClient` can manage several HTX connections at once.

<!-- siebly:snippet id="public-websocket" -->

```javascript
import { WebsocketClient, WS_KEY_MAP } from '@siebly/htx-api';

const client = new WebsocketClient();

function main() {
  client
    .on('open', (event) => {
      console.log('WebSocket opened:', event.wsKey);
    })
    .on('response', (event) => {
      console.log('WebSocket response:', event);
    })
    .on('message', (event) => {
      console.log('WebSocket message:', event);
    })
    .on('reconnecting', (event) => {
      console.log('WebSocket reconnecting:', event.wsKey);
    })
    .on('reconnected', (event) => {
      console.log('WebSocket reconnected:', event.wsKey);
    })
    .on('close', (event) => {
      console.log('WebSocket closed:', event.wsKey);
    })
    .on('exception', (event) => {
      console.error('WebSocket exception:', event);
    });

  client.subscribe('market.btcusdt.ticker', WS_KEY_MAP.spotPublic);

  client.subscribe('market.btcusdt.mbp.5', WS_KEY_MAP.spotFeed);

  client.subscribe('market.BTC-USDT.detail', WS_KEY_MAP.linearSwapPublic);
}

main();
```

The `response` event carries [subscription acknowledgements](https://siebly.io/reference/glossary#subscription-acknowledgement). Market data arrives through `message`. Every event includes `wsKey`, which lets one handler identify the connection that emitted it.

The SDK decompresses HTX messages and answers application-level ping messages. Your handlers receive parsed objects.

### 5. Subscribe to private WebSocket streams

This example supplies one API key pair to both private connections. The key needs the corresponding Spot and Futures access. The SDK authenticates each connection before sending its subscriptions.

<!-- siebly:snippet id="private-websocket" -->

```javascript
import { WebsocketClient, WS_KEY_MAP } from '@siebly/htx-api';

const client = new WebsocketClient({
  apiKey: process.env.HTX_API_KEY,
  apiSecret: process.env.HTX_API_SECRET,
});

function main() {
  client
    .on('open', (event) => {
      console.log('WebSocket opened:', event.wsKey);
    })
    .on('authenticated', (event) => {
      console.log('WebSocket authenticated:', event.wsKey);
    })
    .on('response', (event) => {
      console.log('WebSocket response:', event);
    })
    .on('message', (event) => {
      console.log('Private update:', event);
    })
    .on('reconnecting', (event) => {
      console.log('WebSocket reconnecting:', event.wsKey);
    })
    .on('reconnected', (event) => {
      console.log('WebSocket reconnected:', event.wsKey);
    })
    .on('close', (event) => {
      console.log('WebSocket closed:', event.wsKey);
    })
    .on('exception', (event) => {
      console.error('WebSocket exception:', event);
    });

  client.subscribe(
    ['accounts.update#1', 'orders#btcusdt', 'trade.clearing#btcusdt#1'],
    WS_KEY_MAP.spotPrivateV2,
  );

  client.subscribe(
    [
      'account',
      {
        topic: 'trade',
        payload: {
          contract_code: 'BTC-USDT',
        },
      },
      {
        topic: 'positions',
        payload: {
          contract_code: 'BTC-USDT',
        },
      },
    ],
    WS_KEY_MAP.derivativesPrivateV5,
  );
}

main();
```

`accounts.update#1` reports changes to both total and available Spot balances. `orders#btcusdt` reports order changes for the selected market. `trade.clearing#btcusdt#1` includes trade and cancellation events.

The V5 Futures connection uses `account` for account updates and object-form subscriptions for contract-scoped trade and position data. These private messages provide [private stream confirmation](https://siebly.io/reference/glossary#private-stream-confirmation) after an account or order changes.

Subscriptions are cached and restored after a reconnect. Call `client.closeAll()` when your application explicitly needs to close its active WebSocket connections.

<!-- siebly:section id="order-management" -->

## Place and manage orders

Order code should begin with current market metadata. That keeps price precision, amount precision, minimum order value, contract size, and price steps aligned with the exchange.

An order submission response confirms that HTX accepted the request. Query the order or use a private stream to follow its state. A cancellation response also needs a later state check because the order may change while the cancellation is being processed. This is the [pending confirmation](https://siebly.io/reference/glossary#pending-confirmation) period.

### 6. Run a Spot REST API order lifecycle

This example creates a post-only BTC/USDT buy order, queries it, cancels it, and queries it again. It derives the price and amount from current HTX data.

<!-- siebly:snippet id="spot-order" -->

```javascript
import { SpotClient } from '@siebly/htx-api';

const client = new SpotClient({
  apiKey: process.env.HTX_API_KEY,
  apiSecret: process.env.HTX_API_SECRET,
});

async function main() {
  let marketStatus;
  let symbolRules;
  let bestBid;
  let spotAccountId;

  try {
    const statusResponse = await client.getMarketStatus();
    marketStatus = statusResponse.data.marketStatus;
    console.log('Spot market status:', statusResponse.data);
  } catch (error) {
    console.error('Market-status request failed:', error);
    return;
  }

  if (marketStatus !== 1) {
    console.error('HTX Spot is not in normal trading status.');
    return;
  }

  try {
    const rulesResponse = await client.getMarketSymbolsSettings({
      symbols: 'btcusdt',
    });
    symbolRules = rulesResponse.data.find(
      (rules) => rules.symbol === 'btcusdt',
    );
    console.log('BTC/USDT order rules:', symbolRules);
  } catch (error) {
    console.error('Symbol-rule request failed:', error);
    return;
  }

  if (!symbolRules || symbolRules.state !== 'online') {
    console.error('BTC/USDT is not available for trading.');
    return;
  }

  try {
    const orderBook = await client.getMarketDepth({
      symbol: 'btcusdt',
      depth: 5,
      type: 'step0',
    });
    bestBid = Number(orderBook.tick.bids[0][0]);
    console.log('Current best bid:', bestBid);
  } catch (error) {
    console.error('Order-book request failed:', error);
    return;
  }

  try {
    const accounts = await client.getAccounts();
    const spotAccount = accounts.data.find(
      (account) => account.type === 'spot' && account.state === 'working',
    );
    spotAccountId = spotAccount?.id;
    console.log('Spot account:', spotAccount);
  } catch (error) {
    console.error('Account request failed:', error);
    return;
  }

  if (!spotAccountId) {
    console.error('No active Spot account was returned.');
    return;
  }

  const pricePrecision = Number(symbolRules.pp);
  const amountPrecision = Number(symbolRules.ap);
  const minimumAmount = Number(symbolRules.minoa);
  const minimumOrderValue = Number(symbolRules.minov);
  const priceScale = 10 ** pricePrecision;
  const amountScale = 10 ** amountPrecision;
  const orderPriceNumber = Math.floor(bestBid * 0.9 * priceScale) / priceScale;
  const requiredAmount = Math.max(
    minimumAmount,
    minimumOrderValue / orderPriceNumber,
  );
  const orderAmountNumber =
    Math.ceil(requiredAmount * 1.05 * amountScale) / amountScale;
  const orderPrice = orderPriceNumber.toFixed(pricePrecision);
  const orderAmount = orderAmountNumber.toFixed(amountPrecision);
  const clientOrderId = client.generateNewOrderID();

  console.log('Order request:', {
    symbol: 'btcusdt',
    type: 'buy-limit-maker',
    price: orderPrice,
    amount: orderAmount,
    clientOrderId,
  });

  let orderId;

  try {
    const submitted = await client.submitOrder({
      'account-id': spotAccountId,
      symbol: 'btcusdt',
      type: 'buy-limit-maker',
      amount: orderAmount,
      price: orderPrice,
      source: 'spot-api',
      'client-order-id': clientOrderId,
    });
    orderId = submitted.data;
    console.log('Submitted Spot order:', submitted);
  } catch (error) {
    console.error('Spot order submission failed:', error);
    return;
  }

  try {
    const order = await client.getOrder({
      orderId: String(orderId),
    });
    console.log('Spot order after submission:', order.data);
  } catch (error) {
    console.error('Spot order query failed:', error);
  }

  try {
    const cancellation = await client.cancelOrderById({
      orderId: String(orderId),
      symbol: 'btcusdt',
    });
    console.log('Spot cancellation response:', cancellation);
  } catch (error) {
    console.error('Spot cancellation failed:', error);
  }

  try {
    const orderAfterCancel = await client.getOrder({
      orderId: String(orderId),
    });
    console.log(
      'Spot order after cancellation attempt:',
      orderAfterCancel.data,
    );
  } catch (error) {
    console.error('Post-cancel Spot order query failed:', error);
  }
}

main();
```

`pp` and `ap` are the price and amount decimal places. `minoa` is the minimum order amount, and `minov` is the minimum order value. The example places its post-only price below the current best bid, rounds the price down, and rounds the amount up.

`generateNewOrderID()` produces an HTX-compatible client order ID with the SDK's channel prefix. Keep that identifier with your local order record. If the submission result is uncertain, call `getOrderByClientId()` before sending the request again.

### 7. Run a USDT-M Futures REST API order lifecycle

This example creates a one-contract V5 post-only order on `BTC-USDT`, queries it, cancels it, and queries it again. It uses the account's current position mode to choose `position_side`.

<!-- siebly:snippet id="futures-order" -->

```javascript
import { FuturesClient } from '@siebly/htx-api';

const client = new FuturesClient({
  apiKey: process.env.HTX_API_KEY,
  apiSecret: process.env.HTX_API_SECRET,
});

async function main() {
  let contract;
  let bestBid;
  let positionMode;

  try {
    const contracts = await client.getLinearSwapContractInfo({
      contract_code: 'BTC-USDT',
    });
    contract = contracts.data.find((item) => item.contract_code === 'BTC-USDT');
    console.log('BTC-USDT contract:', contract);
  } catch (error) {
    console.error('Contract request failed:', error);
    return;
  }

  if (!contract) {
    console.error('BTC-USDT contract metadata was not returned.');
    return;
  }

  if (contract.contract_status !== 1) {
    console.error('BTC-USDT is not available for trading.');
    return;
  }

  try {
    const orderBook = await client.getLinearSwapMarketDepth({
      contract_code: 'BTC-USDT',
      type: 'step0',
    });
    bestBid = Number(orderBook.tick.bids[0][0]);
    console.log('Current BTC-USDT best bid:', bestBid);
  } catch (error) {
    console.error('Futures order-book request failed:', error);
    return;
  }

  try {
    const assetMode = await client.getMultiAssetMode();
    console.log('Futures asset mode:', assetMode.data);
  } catch (error) {
    console.error('Asset-mode request failed:', error);
    return;
  }

  try {
    const balance = await client.getMultiAssetAccountBalance();
    console.log('Futures account balance:', balance.data);
  } catch (error) {
    console.error('Futures balance request failed:', error);
    return;
  }

  try {
    const modeResponse = await client.getMultiAssetPositionMode();
    positionMode = modeResponse.data.position_mode;
    console.log('Futures position mode:', positionMode);
  } catch (error) {
    console.error('Position-mode request failed:', error);
    return;
  }

  const priceTick = Number(contract.price_tick);
  const tickText = String(contract.price_tick);
  const priceDecimals = tickText.includes('.')
    ? tickText.split('.')[1].length
    : 0;
  const orderPriceNumber = Math.floor((bestBid * 0.9) / priceTick) * priceTick;
  const orderPrice = orderPriceNumber.toFixed(priceDecimals);
  const marginMode =
    contract.support_margin_mode === 'isolated' ? 'isolated' : 'cross';
  const positionSide = positionMode === 'dual_side' ? 'long' : 'both';
  const clientOrderId = client.generateNewOrderID();

  console.log('Futures order request:', {
    contract_code: 'BTC-USDT',
    margin_mode: marginMode,
    position_side: positionSide,
    side: 'buy',
    type: 'post_only',
    price: orderPrice,
    volume: '1',
    client_order_id: clientOrderId,
  });

  let orderId;

  try {
    const submitted = await client.submitMultiAssetOrder({
      contract_code: 'BTC-USDT',
      margin_mode: marginMode,
      position_side: positionSide,
      side: 'buy',
      type: 'post_only',
      time_in_force: 'gtc',
      price: orderPrice,
      volume: '1',
      reduce_only: 0,
      client_order_id: clientOrderId,
    });
    orderId = submitted.data.order_id;
    console.log('Submitted Futures order:', submitted);
  } catch (error) {
    console.error('Futures order submission failed:', error);
    return;
  }

  try {
    const order = await client.getMultiAssetOrderInfo({
      contract_code: 'BTC-USDT',
      margin_mode: marginMode,
      order_id: orderId,
    });
    console.log('Futures order after submission:', order.data);
  } catch (error) {
    console.error('Futures order query failed:', error);
  }

  try {
    const cancellation = await client.cancelMultiAssetOrder({
      contract_code: 'BTC-USDT',
      order_id: orderId,
    });
    console.log('Futures cancellation response:', cancellation);
  } catch (error) {
    console.error('Futures cancellation failed:', error);
  }

  try {
    const orderAfterCancel = await client.getMultiAssetOrderInfo({
      contract_code: 'BTC-USDT',
      margin_mode: marginMode,
      order_id: orderId,
    });
    console.log(
      'Futures order after cancellation attempt:',
      orderAfterCancel.data,
    );
  } catch (error) {
    console.error('Post-cancel Futures order query failed:', error);
  }
}

main();
```

The order's `volume: '1'` means one contract. Use `contract_size` to translate that into underlying exposure. The V5 order uses the account's configured leverage; query `getMultiAssetLeverage()` and update it separately when the strategy needs a specific setting.

When `support_margin_mode` is `all`, the example uses cross margin. If a contract reports isolated margin only, it uses isolated margin. In single-side mode, `position_side: 'both'` addresses the net position. In dual-side mode, `long` and `short` are separate position legs. Set `reduce_only: 1` when an order must only reduce an existing position.

<!-- siebly:section id="websocket-api" -->

## Send orders with the WebSocket API

`WebsocketAPIClient` exposes promise-based wrappers around HTX trading commands. The first command opens and authenticates the required trade connection. The SDK adds a correlation ID, matches the response, and resolves the promise with that response.

A successful command reply identifies the accepted order request. Confirm the order's current state with a private stream or a REST API query.

### 8. Run a Spot WebSocket API order lifecycle

The Spot WebSocket API example uses the same live metadata as the REST API workflow, then submits and cancels the order over `WS_KEY_MAP.spotTrade`.

<!-- siebly:snippet id="spot-websocket-api" -->

```javascript
import { SpotClient, WebsocketAPIClient } from '@siebly/htx-api';

const restClient = new SpotClient({
  apiKey: process.env.HTX_API_KEY,
  apiSecret: process.env.HTX_API_SECRET,
});

const wsApiClient = new WebsocketAPIClient({
  apiKey: process.env.HTX_API_KEY,
  apiSecret: process.env.HTX_API_SECRET,
});

async function main() {
  let symbolRules;
  let bestBid;
  let spotAccountId;

  try {
    const rulesResponse = await restClient.getMarketSymbolsSettings({
      symbols: 'btcusdt',
    });
    symbolRules = rulesResponse.data.find(
      (rules) => rules.symbol === 'btcusdt',
    );
    console.log('BTC/USDT order rules:', symbolRules);
  } catch (error) {
    console.error('Symbol-rule request failed:', error);
    return;
  }

  if (!symbolRules || symbolRules.state !== 'online') {
    console.error('BTC/USDT is not available for trading.');
    return;
  }

  try {
    const orderBook = await restClient.getMarketDepth({
      symbol: 'btcusdt',
      depth: 5,
      type: 'step0',
    });
    bestBid = Number(orderBook.tick.bids[0][0]);
    console.log('Current best bid:', bestBid);
  } catch (error) {
    console.error('Order-book request failed:', error);
    return;
  }

  try {
    const accounts = await restClient.getAccounts();
    const spotAccount = accounts.data.find(
      (account) => account.type === 'spot' && account.state === 'working',
    );
    spotAccountId = spotAccount?.id;
    console.log('Spot account:', spotAccount);
  } catch (error) {
    console.error('Account request failed:', error);
    return;
  }

  if (!spotAccountId) {
    console.error('No active Spot account was returned.');
    return;
  }

  const pricePrecision = Number(symbolRules.pp);
  const amountPrecision = Number(symbolRules.ap);
  const minimumAmount = Number(symbolRules.minoa);
  const minimumOrderValue = Number(symbolRules.minov);
  const priceScale = 10 ** pricePrecision;
  const amountScale = 10 ** amountPrecision;
  const orderPriceNumber = Math.floor(bestBid * 0.9 * priceScale) / priceScale;
  const requiredAmount = Math.max(
    minimumAmount,
    minimumOrderValue / orderPriceNumber,
  );
  const orderAmountNumber =
    Math.ceil(requiredAmount * 1.05 * amountScale) / amountScale;
  const orderPrice = orderPriceNumber.toFixed(pricePrecision);
  const orderAmount = orderAmountNumber.toFixed(amountPrecision);
  const clientOrderId = wsApiClient.generateNewOrderID();

  let orderId;

  try {
    const submitted = await wsApiClient.submitSpotOrder({
      'account-id': spotAccountId,
      symbol: 'btcusdt',
      type: 'buy-limit-maker',
      amount: orderAmount,
      price: orderPrice,
      source: 'spot-api',
      'client-order-id': clientOrderId,
    });
    const result = submitted.data;
    orderId =
      typeof result === 'string'
        ? result
        : (result?.['order-id'] ?? result?.orderId);
    console.log('Spot WebSocket API response:', submitted);
  } catch (error) {
    console.error('Spot WebSocket API submission failed:', error);
    return;
  }

  if (!orderId) {
    console.error('The Spot command response did not include an order ID.');
    return;
  }

  try {
    const order = await restClient.getOrder({
      orderId: String(orderId),
    });
    console.log('Spot order after WebSocket command:', order.data);
  } catch (error) {
    console.error('Spot order query failed:', error);
  }

  try {
    const cancellation = await wsApiClient.cancelSpotOrders({
      'order-ids': [String(orderId)],
    });
    console.log('Spot WebSocket cancellation response:', cancellation);
  } catch (error) {
    console.error('Spot WebSocket cancellation failed:', error);
  }

  try {
    const orderAfterCancel = await restClient.getOrder({
      orderId: String(orderId),
    });
    console.log(
      'Spot order after cancellation attempt:',
      orderAfterCancel.data,
    );
  } catch (error) {
    console.error('Post-cancel Spot order query failed:', error);
  }

  wsApiClient.getWSClient().closeAll();
}

main();
```

The response can place the order ID directly in `data` or in an order-result object. The SDK resolves the command promise after matching its `cid`. The later REST API queries show the exchange's order state.

### 9. Run a V5 Futures WebSocket API order lifecycle

This example sends the V5 `place_order` and `cancel_order` commands through the USDT-M trade connection.

<!-- siebly:snippet id="futures-websocket-api" -->

```javascript
import { FuturesClient, WebsocketAPIClient } from '@siebly/htx-api';

const restClient = new FuturesClient({
  apiKey: process.env.HTX_API_KEY,
  apiSecret: process.env.HTX_API_SECRET,
});

const wsApiClient = new WebsocketAPIClient({
  apiKey: process.env.HTX_API_KEY,
  apiSecret: process.env.HTX_API_SECRET,
});

async function main() {
  let contract;
  let bestBid;
  let positionMode;

  try {
    const contracts = await restClient.getLinearSwapContractInfo({
      contract_code: 'BTC-USDT',
    });
    contract = contracts.data.find((item) => item.contract_code === 'BTC-USDT');
    console.log('BTC-USDT contract:', contract);
  } catch (error) {
    console.error('Contract request failed:', error);
    return;
  }

  if (!contract) {
    console.error('BTC-USDT contract metadata was not returned.');
    return;
  }

  if (contract.contract_status !== 1) {
    console.error('BTC-USDT is not available for trading.');
    return;
  }

  try {
    const orderBook = await restClient.getLinearSwapMarketDepth({
      contract_code: 'BTC-USDT',
      type: 'step0',
    });
    bestBid = Number(orderBook.tick.bids[0][0]);
    console.log('Current BTC-USDT best bid:', bestBid);
  } catch (error) {
    console.error('Futures order-book request failed:', error);
    return;
  }

  try {
    const modeResponse = await restClient.getMultiAssetPositionMode();
    positionMode = modeResponse.data.position_mode;
    console.log('Futures position mode:', positionMode);
  } catch (error) {
    console.error('Position-mode request failed:', error);
    return;
  }

  const priceTick = Number(contract.price_tick);
  const tickText = String(contract.price_tick);
  const priceDecimals = tickText.includes('.')
    ? tickText.split('.')[1].length
    : 0;
  const orderPriceNumber = Math.floor((bestBid * 0.9) / priceTick) * priceTick;
  const orderPrice = orderPriceNumber.toFixed(priceDecimals);
  const marginMode =
    contract.support_margin_mode === 'isolated' ? 'isolated' : 'cross';
  const positionSide = positionMode === 'dual_side' ? 'long' : 'both';
  const clientOrderId = wsApiClient.generateNewOrderID();

  let orderId;

  try {
    const submitted = await wsApiClient.placeLinearSwapOrder({
      contract_code: 'BTC-USDT',
      margin_mode: marginMode,
      position_side: positionSide,
      side: 'buy',
      type: 'post_only',
      time_in_force: 'gtc',
      price: orderPrice,
      volume: '1',
      reduce_only: 0,
      client_order_id: clientOrderId,
    });
    orderId = submitted.data?.order_id;
    console.log('Futures WebSocket API response:', submitted);
  } catch (error) {
    console.error('Futures WebSocket API submission failed:', error);
    return;
  }

  if (!orderId) {
    console.error('The Futures command response did not include an order ID.');
    return;
  }

  try {
    const order = await restClient.getMultiAssetOrderInfo({
      contract_code: 'BTC-USDT',
      margin_mode: marginMode,
      order_id: orderId,
    });
    console.log('Futures order after WebSocket command:', order.data);
  } catch (error) {
    console.error('Futures order query failed:', error);
  }

  try {
    const cancellation = await wsApiClient.cancelLinearSwapV5Order({
      contract_code: 'BTC-USDT',
      order_id: orderId,
    });
    console.log('Futures WebSocket cancellation response:', cancellation);
  } catch (error) {
    console.error('Futures WebSocket cancellation failed:', error);
  }

  try {
    const orderAfterCancel = await restClient.getMultiAssetOrderInfo({
      contract_code: 'BTC-USDT',
      margin_mode: marginMode,
      order_id: orderId,
    });
    console.log(
      'Futures order after cancellation attempt:',
      orderAfterCancel.data,
    );
  } catch (error) {
    console.error('Post-cancel Futures order query failed:', error);
  }

  wsApiClient.getWSClient().closeAll();
}

main();
```

`placeLinearSwapOrder()` sends the V5 `place_order` operation. `cancelLinearSwapV5Order()` sends `cancel_order`. The command response includes fields such as `cid`, `op`, `status`, `code`, `message`, `success`, and `data`, depending on the HTX response.

<!-- siebly:section id="rest-api" -->

## Explore more REST API methods

`SpotClient` and `FuturesClient` map JavaScript methods to HTX endpoints. The [complete endpoint map](./endpointFunctionList.md) lists every method, its authentication requirement, HTTP method, and endpoint.

### Spot REST API groups

| Area                     | Representative methods                                                                                   |
| ------------------------ | -------------------------------------------------------------------------------------------------------- |
| Market status and time   | `getMarketStatus()`, `getTimestamp()`                                                                    |
| Symbols and currencies   | `getTradingSymbols()`, `getCurrencies()`, `getMarketSymbolsSettings()`                                   |
| Market data              | `getTicker()`, `getTickers()`, `getMarketDepth()`, `getKlines()`, `getHistoryTrades()`                   |
| Accounts and balances    | `getAccounts()`, `getAccountBalance()`, `getAccountValuation()`, `getAccountLedger()`                    |
| Spot orders              | `submitOrder()`, `getOrder()`, `getOpenOrders()`, `getOrderHistory48h()`, `getMatchResults()`            |
| Conditional orders       | `placeConditionalOrder()`, `getOpenConditionalOrders()`, `cancelConditionalOrders()`                     |
| Margin                   | `getMarginAccountBalance()`, `getCrossMarginBalance()`, `requestMarginLoan()`, `repayCrossMarginLoan()`  |
| Transfers                | `submitTransfer()`, `submitV2AccountTransfer()`, `submitFuturesTransfer()`                               |
| Deposits and withdrawals | `getDepositAddress()`, `getWithdrawQuota()`, `getDepositWithdrawHistory()`, `submitWithdraw()`           |
| Subaccounts              | `getSubUserList()`, `getSubUserAccounts()`, `submitSubUserTransfer()`, `getSubUsersAggregatedBalance()`  |
| Broker and rebates       | `getBrokerUserRebateStatus()`, `setBrokerSubUserFeeRate()`, `getReferralRebateHistory()`                 |
| Earn and P2P             | `getEarnProjectList()`, `getEarnUserAssets()`, `earnSubscribe()`, `earnRedeem()`, `getP2POrderHistory()` |

Transfer, withdrawal, lending, and account-management methods move funds or alter account configuration. Read the current endpoint rules and permissions before calling them.

### Futures REST API groups

| Area                    | Representative methods                                                                                                           |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| USDT-M market data      | `getLinearSwapContractInfo()`, `getLinearSwapTicker()`, `getLinearSwapMarketDepth()`, `getLinearSwapFundingRate()`               |
| V5 account state        | `getMultiAssetMode()`, `getMultiAssetAccountBalance()`, `getMultiAssetBills()`                                                   |
| V5 orders               | `submitMultiAssetOrder()`, `getMultiAssetOrderInfo()`, `getMultiAssetOpenOrders()`, `getMultiAssetOrderHistory()`                |
| V5 positions            | `getMultiAssetPositions()`, `getMultiAssetPositionMode()`, `getMultiAssetLeverage()`, `adjustMultiAssetMargin()`                 |
| V5 collateral and risk  | `getMultiAssetCollateralAssets()`, `getMultiAssetRiskLimit()`, `getMultiAssetRiskLimitTiers()`, `getMultiAssetMarketRiskLimit()` |
| Coin-M delivery         | `getCoinMDeliveryContractInfo()`, `getCoinMDeliveryTicker()`, `getCoinMDeliveryAccountInfo()`, `submitCoinMDeliveryOrder()`      |
| Coin-M perpetuals       | `getCoinMPerpContractInfo()`, `getCoinMPerpTicker()`, `getCoinMPerpAccountInfo()`, `submitCoinMPerpOrder()`                      |
| Conditional order tools | Trigger, take-profit, stop-loss, trailing, and lightning-close methods for the relevant Futures product                          |
| Futures subaccounts     | Permission, asset, position, transfer, and account-state methods for USDT-M and Coin-M products                                  |
| Copy trading            | Copy-trader configuration, instruments, followers, orders, positions, and profit-sharing methods                                 |

Keep the product prefix visible when selecting a Futures method. `getLinearSwap...`, `getMultiAsset...`, `getCoinMDelivery...`, and `getCoinMPerp...` address different interfaces or contract families.

### WebSocket connection map

`WS_KEY_MAP` contains the supported connection keys:

| WebSocket key          | Connection purpose                             |
| ---------------------- | ---------------------------------------------- |
| `spotPublic`           | Spot market topics                             |
| `spotFeed`             | Spot MBP and feed topics                       |
| `spotPrivateV2`        | Spot account, order, and trade-clearing topics |
| `spotTrade`            | Spot WebSocket API commands                    |
| `linearSwapPublic`     | USDT-M Futures market topics                   |
| `derivativesPrivateV5` | V5 USDT-M account, trade, and position topics  |
| `linearSwapTrade`      | USDT-M Futures WebSocket API commands          |
| `coinDeliveryPublic`   | Coin-margined delivery market topics           |
| `coinDeliveryPrivate`  | Coin-margined delivery private topics          |
| `coinDeliveryTrade`    | Coin-margined delivery WebSocket API commands  |
| `coinSwapPublic`       | Coin-margined perpetual market topics          |
| `coinSwapPrivate`      | Coin-margined perpetual private topics         |
| `coinSwapTrade`        | Coin-margined perpetual WebSocket API commands |
| `derivativesIndex`     | Index, mark-price, and premium-index topics    |
| `derivativesSystem`    | Futures system and heartbeat topics            |

Use the exported constants instead of copying their string values so the intended connection stays clear.

<!-- siebly:section id="reconnect-recovery" -->

## Recover private state after a reconnect

A WebSocket reconnect restores transport and subscriptions. It does not prove that every private event sent during the gap reached your application.

Use the REST API to rebuild the affected [account state](https://siebly.io/reference/glossary#accountstate). This process is often called [REST API hydration](https://siebly.io/reference/glossary#rest-hydration). Limit the reload to the product and account affected by the reconnect, following [Scoped Recovery](https://siebly.io/reference/glossary#scoped-recovery).

The example below replaces its Spot snapshot only after the account, balance, open-order, and match requests all succeed.

<!-- siebly:snippet id="reconnect-recovery" -->

```javascript
import { SpotClient, WebsocketClient, WS_KEY_MAP } from '@siebly/htx-api';

const restClient = new SpotClient({
  apiKey: process.env.HTX_API_KEY,
  apiSecret: process.env.HTX_API_SECRET,
});

const wsClient = new WebsocketClient({
  apiKey: process.env.HTX_API_KEY,
  apiSecret: process.env.HTX_API_SECRET,
});

let spotState = {
  accountId: undefined,
  balances: [],
  openOrders: [],
  recentMatches: [],
};

async function recoverSpotState() {
  let spotAccountId;
  let balances;
  let openOrders;
  let recentMatches;

  try {
    const accountsResponse = await restClient.getAccounts();
    const spotAccount = accountsResponse.data.find(
      (account) => account.type === 'spot' && account.state === 'working',
    );
    spotAccountId = spotAccount?.id;
  } catch (error) {
    console.error('Recovery account request failed:', error);
    return;
  }

  if (!spotAccountId) {
    console.error('Recovery could not find an active Spot account.');
    return;
  }

  try {
    const balanceResponse = await restClient.getAccountBalance({
      accountId: spotAccountId,
    });
    balances = balanceResponse.data.list;
  } catch (error) {
    console.error('Recovery balance request failed:', error);
    return;
  }

  try {
    const orderResponse = await restClient.getOpenOrders({
      'account-id': String(spotAccountId),
      symbol: 'btcusdt',
    });
    openOrders = orderResponse.data;
  } catch (error) {
    console.error('Recovery open-order request failed:', error);
    return;
  }

  try {
    const matchResponse = await restClient.getMatchResults({
      symbol: 'btcusdt',
      size: 100,
    });
    recentMatches = matchResponse.data;
  } catch (error) {
    console.error('Recovery match request failed:', error);
    return;
  }

  const replacementState = {
    accountId: spotAccountId,
    balances,
    openOrders,
    recentMatches,
  };

  spotState = replacementState;
  console.log('Recovered Spot state:', spotState);
}

function main() {
  wsClient
    .on('reconnected', async (event) => {
      if (event.wsKey !== WS_KEY_MAP.spotPrivateV2) {
        return;
      }

      await recoverSpotState();
    })
    .on('message', (event) => {
      console.log('Private update:', event);
    })
    .on('exception', (event) => {
      console.error('WebSocket exception:', event);
    });

  wsClient.subscribe(
    ['accounts.update#1', 'orders#btcusdt', 'trade.clearing#btcusdt#1'],
    WS_KEY_MAP.spotPrivateV2,
  );
}

main();
```

Call the same recovery function during application startup to create the initial snapshot before applying stream updates. For broader service design, see [Exchange State](https://siebly.io/reference/exchange-state) and [Runtime Workflows](https://siebly.io/reference/runtime-workflows).

For Futures recovery, follow the same sequence with V5 account balance, positions, open orders, and recent fills. Trigger that reload only when `derivativesPrivateV5` reconnects.

<!-- siebly:section id="api-hosts" -->

## Choose standard or AWS API hosts

`SpotClient`, `FuturesClient`, and `WebsocketClient` use HTX's AWS hosts by default. The standard hosts remain available through explicit routing options.

| Product and network | REST API base URL            | Main WebSocket paths                                           |
| ------------------- | ---------------------------- | -------------------------------------------------------------- |
| Spot AWS            | `https://api-aws.huobi.pro`  | `/ws`, `/feed`, `/ws/v2`, `/ws/trade`                          |
| Spot standard       | `https://api.huobi.pro`      | `/ws`, `/feed`, `/ws/v2`, `/ws/trade`                          |
| Futures AWS         | `https://api.hbdm.vn`        | `/linear-swap-ws`, `/ws/v5/notification`, `/linear-swap-trade` |
| Futures standard    | `https://api.hbdm.com`       | `/linear-swap-ws`, `/ws/v5/notification`, `/linear-swap-trade` |
| Futures alternative | `https://api.btcgateway.pro` | REST API alternative supported by `FuturesClient`              |

Coin-margined delivery, coin-margined perpetual, index, and system connections use product-specific paths on the selected Futures WebSocket host.

Use `baseUrlKey` for the REST API and `wsEnvironment` for WebSockets:

<!-- siebly:snippet id="api-host-routing" -->

```javascript
import {
  FuturesClient,
  SpotClient,
  WebsocketClient,
  WS_KEY_MAP,
} from '@siebly/htx-api';

const standardSpotClient = new SpotClient({
  baseUrlKey: 'spot',
});

const standardFuturesClient = new FuturesClient({
  baseUrlKey: 'futures',
});

const standardWsClient = new WebsocketClient({
  wsEnvironment: 'standard',
});

async function main() {
  try {
    const spotTime = await standardSpotClient.getTimestamp();
    console.log('Standard Spot host time:', spotTime.data);
  } catch (error) {
    console.error('Standard Spot host request failed:', error);
  }

  try {
    const futuresTime = await standardFuturesClient.getTimestamp();
    console.log('Standard Futures host time:', futuresTime.ts);
  } catch (error) {
    console.error('Standard Futures host request failed:', error);
  }

  standardWsClient
    .on('response', (event) => {
      console.log('Standard WebSocket response:', event);
    })
    .on('message', (event) => {
      console.log('Standard WebSocket message:', event);
    })
    .on('exception', (event) => {
      console.error('Standard WebSocket exception:', event);
    });

  standardWsClient.subscribe('market.btcusdt.ticker', WS_KEY_MAP.spotPublic);
}

main();
```

For AWS routing, use `baseUrlKey: 'spotAWS'`, `baseUrlKey: 'futuresAWS'`, and `wsEnvironment: 'aws'`. The alternative Futures REST API host uses `baseUrlKey: 'futuresAlt1'`. A WebSocket client also follows `restOptions.baseUrlKey` when `wsEnvironment` is omitted.

Use `baseUrl` or `wsUrl` only when you need an explicit custom endpoint. Keep that override visible in configuration and deployment logs.

<!-- siebly:section id="proxies" -->

## Use a proxy with the REST API and WebSockets

Proxy agents work with the REST API clients, streaming WebSockets, and `WebsocketAPIClient`. Install the agent packages used by these examples:

```bash
npm install https-proxy-agent socks-proxy-agent
```

For more background, see [Using a proxy with Siebly SDKs](https://siebly.io/blog/using-proxy-with-siebly-sdks).

### HTTP or HTTPS proxy

`HttpsProxyAgent` accepts both `http://` and `https://` proxy URLs. Pass it as `httpsAgent` for the REST API and as `wsOptions.agent` for WebSockets.

<!-- siebly:snippet id="http-proxy" -->

```javascript
import {
  SpotClient,
  WebsocketAPIClient,
  WebsocketClient,
  WS_KEY_MAP,
} from '@siebly/htx-api';
import { HttpsProxyAgent } from 'https-proxy-agent';

if (!process.env.HTX_PROXY_URL) {
  throw new Error('Set HTX_PROXY_URL to an HTTP or HTTPS proxy URL.');
}

const agent = new HttpsProxyAgent(process.env.HTX_PROXY_URL);

const restClient = new SpotClient(
  {
    apiKey: process.env.HTX_API_KEY,
    apiSecret: process.env.HTX_API_SECRET,
  },
  {
    httpsAgent: agent,
    proxy: false,
  },
);

const wsClient = new WebsocketClient({
  apiKey: process.env.HTX_API_KEY,
  apiSecret: process.env.HTX_API_SECRET,
  wsOptions: {
    agent,
  },
});

const wsApiClient = new WebsocketAPIClient({
  apiKey: process.env.HTX_API_KEY,
  apiSecret: process.env.HTX_API_SECRET,
  wsOptions: {
    agent,
  },
});

async function main() {
  try {
    const time = await restClient.getTimestamp();
    console.log('REST API request through proxy:', time.data);
  } catch (error) {
    console.error('Proxied REST API request failed:', error);
  }

  wsClient
    .on('response', (event) => {
      console.log('Proxied WebSocket response:', event);
    })
    .on('message', (event) => {
      console.log('Proxied WebSocket message:', event);
    })
    .on('exception', (event) => {
      console.error('Proxied WebSocket exception:', event);
    });

  wsClient.subscribe('market.btcusdt.ticker', WS_KEY_MAP.spotPublic);

  console.log(
    'WebSocket API client configured:',
    Boolean(wsApiClient.getWSClient()),
  );
}

main();
```

The same agent can be reused by several clients when they use the same proxy route.

### SOCKS5 proxy

Use `SocksProxyAgent` for a `socks5://` or `socks5h://` endpoint.

<!-- siebly:snippet id="socks-proxy" -->

```javascript
import {
  FuturesClient,
  WebsocketAPIClient,
  WebsocketClient,
  WS_KEY_MAP,
} from '@siebly/htx-api';
import { SocksProxyAgent } from 'socks-proxy-agent';

if (!process.env.HTX_SOCKS_PROXY_URL) {
  throw new Error('Set HTX_SOCKS_PROXY_URL to a SOCKS5 proxy URL.');
}

const agent = new SocksProxyAgent(process.env.HTX_SOCKS_PROXY_URL);

const restClient = new FuturesClient(
  {
    apiKey: process.env.HTX_API_KEY,
    apiSecret: process.env.HTX_API_SECRET,
  },
  {
    httpsAgent: agent,
    proxy: false,
  },
);

const wsClient = new WebsocketClient({
  apiKey: process.env.HTX_API_KEY,
  apiSecret: process.env.HTX_API_SECRET,
  wsOptions: {
    agent,
  },
});

const wsApiClient = new WebsocketAPIClient({
  apiKey: process.env.HTX_API_KEY,
  apiSecret: process.env.HTX_API_SECRET,
  wsOptions: {
    agent,
  },
});

async function main() {
  try {
    const time = await restClient.getTimestamp();
    console.log('Futures REST API request through SOCKS5:', time.ts);
  } catch (error) {
    console.error('Proxied Futures REST API request failed:', error);
  }

  wsClient
    .on('response', (event) => {
      console.log('Proxied Futures WebSocket response:', event);
    })
    .on('message', (event) => {
      console.log('Proxied Futures WebSocket message:', event);
    })
    .on('exception', (event) => {
      console.error('Proxied Futures WebSocket exception:', event);
    });

  wsClient.subscribe('market.BTC-USDT.detail', WS_KEY_MAP.linearSwapPublic);

  console.log(
    'Futures WebSocket API client configured:',
    Boolean(wsApiClient.getWSClient()),
  );
}

main();
```

For a private proxy check, call a read-only account endpoint and confirm that the proxy's egress IP is included in the API key's IP list.

<!-- siebly:section id="production" -->

## Production checklist

### Keep request time accurate

Private requests use the current timestamp. Synchronize the host clock. If an application maintains its own measured offset, pass a `customTimestampFn` to the REST API client and call `setTimeOffsetMs()` on `WebsocketAPIClient` or its embedded `WebsocketClient`.

### Read current product rules

Spot price precision, amount precision, minimum amount, minimum order value, and trading state can change. Futures contract status, contract size, price tick, available leverage, and risk limits can also change. Read current metadata before building an order.

### Keep account modes explicit

Record the Futures asset mode, margin mode, and position mode with order intent. A `position_side` suitable for single-side mode is not the same request as a long or short leg in dual-side mode.

### Respect rate limits

Rate limits vary by endpoint and may be shared by an IP address or account. Apply backoff to retryable reads, limit repeated metadata requests, and cache stable public information for an appropriate period.

### Reconcile client order IDs

Use `generateNewOrderID()` for application-owned orders. Persist the ID before submission. After a timeout or dropped response, query by client order ID before deciding whether to retry.

### Confirm final order state

A REST API or WebSocket API submission response confirms the request result. Use the private order stream or an order query to confirm whether the order is open, partially filled, filled, canceled, or rejected.

### Keep streams healthy

Monitor `exception`, `reconnecting`, `reconnected`, and `close`. Track the last private update received for each `wsKey`, and run scoped recovery after a gap.

### Use dead-man switches where appropriate

Spot provides `setCancelAllAfter()`. V5 Futures provides `setMultiAssetCancelAfter()`. Refresh the selected control at the interval required by HTX and monitor its result.

### Scope credentials and network access

Use separate keys when processes need different permissions or egress IPs. Keep credentials out of logs and frontend bundles. Monitor proxy availability and confirm the expected egress IP during deployment.

### Check current Futures access

Futures availability, leverage, and API order permissions depend on the account and current HTX requirements. Review [HTX's current Futures API permission guidance](https://www.htx.com/en-in/support/35029113829881/) before deploying order code.

## FAQ

### Does `@siebly/htx-api` work with plain JavaScript?

Yes. Every example in this guide is JavaScript. TypeScript declarations are included for TypeScript projects.

### Which REST API client should I use?

Use `SpotClient` for Spot, margin, wallet, Earn, and Spot account operations. Use `FuturesClient` for USDT-M and Coin-M Futures.

### Why do some REST API results use `data` while others use `tick`?

HTX endpoints return product-specific response shapes. The SDK returns the parsed endpoint body rather than moving every payload into a new common wrapper.

### Why does a Spot order need an account ID?

HTX can return several account records. The account ID selects the Spot, margin, or other account that owns the request. Retrieve it with `getAccounts()`.

### Why are Spot and Futures symbols formatted differently?

Spot methods use lowercase compact symbols such as `btcusdt`. USDT-M Futures methods use contract codes such as `BTC-USDT`. Coin-margined products use their documented contract codes and aliases.

### What is the difference between `response` and `message` WebSocket events?

`response` contains authentication, subscription, request, or command replies. `message` contains data published for a subscribed topic.

### What does `wsKey` mean?

The [WebSocket key](https://siebly.io/reference/glossary#ws-key) identifies the connection that received an event. It also selects the connection used by `subscribe()`.

### Why does the SDK default to AWS hosts?

HTX documents AWS endpoints for deployments that benefit from that network route. The SDK uses those endpoints by default and provides explicit standard-host options.

### How should I confirm an order?

Use the order ID or client order ID with the matching REST API query, or process the relevant private order stream. A command acknowledgement and final order state are separate pieces of information.

### Which methods should I use for private USDT-M Futures state?

Use the V5 methods named `getMultiAsset...`, `submitMultiAsset...`, and related V5 position and risk methods. HTX's [USDT-M API upgrade guidance](https://www.htx.com/support/95034086350701) lists the current interface requirements.

### What should happen after a private WebSocket reconnect?

Reload the affected account's balances, positions, open orders, and recent fills through the REST API. Replace local state only after the required reads succeed, then continue applying stream updates.

### What causes timestamp or signature errors?

Common causes include clock drift, the wrong API host, a key without the required access, an IP restriction, or modified request parameters after signing. The SDK handles signing, while the application must provide current credentials and an accurate clock.

### Can I use a proxy for both the REST API and WebSockets?

Yes. Pass the proxy agent as `httpsAgent` for REST API clients and as `wsOptions.agent` for `WebsocketClient` and `WebsocketAPIClient`.

### Does a proxy change product or account access?

A proxy changes the network route and egress IP. HTX still applies the account's permissions, product availability, and current eligibility rules.

## Next steps

- Browse the [HTX SDK examples](https://siebly.io/examples/HTX).
- Use the [endpoint map](./endpointFunctionList.md) to find the method for a documented endpoint.
- Review the [Siebly glossary](https://siebly.io/reference/glossary) when implementing order state, acknowledgements, recovery, or reconciliation.
- Read [Exchange State](https://siebly.io/reference/exchange-state) and [Runtime Workflows](https://siebly.io/reference/runtime-workflows) before building a long-running private integration.
- Follow SDK updates and open issues in the [`sieblyio/htx-api` repository](https://github.com/sieblyio/htx-api).
