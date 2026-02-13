
# Endpoint maps

<p align="center">
  <a href="https://www.npmjs.com/package/@siebly/kraken-api">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/sieblyio/kraken-api/blob/main/docs/images/logoDarkMode2.svg?raw=true#gh-dark-mode-only">
      <img alt="SDK Logo" src="https://github.com/sieblyio/kraken-api/blob/main/docs/images/logoBrightMode2.svg?raw=true#gh-light-mode-only">
    </picture>
  </a>
</p>

Each REST client is a JavaScript class, which provides functions individually mapped to each endpoint available in the exchange's API offering. 

The following table shows all methods available in each REST client, whether the method requires authentication (automatically handled if API keys are provided), as well as the exact endpoint each method is connected to.

This can be used to easily find which method to call, once you have [found which endpoint you're looking to use](https://github.com/tiagosiebler/awesome-crypto-examples/wiki/How-to-find-SDK-functions-that-match-API-docs-endpoint).

All REST clients are in the [src](/src) folder. For usage examples, make sure to check the [examples](/examples) folder.

List of clients:
- [SpotClient](#spotclientts)
- [DerivativesClient](#derivativesclientts)
- [InstitutionalClient](#institutionalclientts)
- [PartnerClient](#partnerclientts)
- [WebsocketAPIClient](#websocketapiclientts)


If anything is missing or wrong, please open an issue or let us know in our [Node.js Traders](https://t.me/nodetraders) telegram group!

## How to use table

Table consists of 4 parts:

- Function name
- AUTH
- HTTP Method
- Endpoint

**Function name** is the name of the function that can be called through the SDK. Check examples folder in the repo for more help on how to use them!

**AUTH** is a boolean value that indicates if the function requires authentication - which means you need to pass your API key and secret to the SDK.

**HTTP Method** shows HTTP method that the function uses to call the endpoint. Sometimes endpoints can have same URL, but different HTTP method so you can use this column to differentiate between them.

**Endpoint** is the URL that the function uses to call the endpoint. Best way to find exact function you need for the endpoint is to search for URL in this table and find corresponding function name.


# SpotClient.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [SpotClient.ts](/src/SpotClient.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [getSystemStatus()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L141) |  | GET | `0/public/SystemStatus` |
| [getAssetInfo()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L150) |  | GET | `0/public/Assets` |
| [getAssetPairs()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L162) |  | GET | `0/public/AssetPairs` |
| [getTicker()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L175) |  | GET | `0/public/Ticker` |
| [getCandles()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L189) |  | GET | `0/public/OHLC` |
| [getOrderBook()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L201) |  | GET | `0/public/Depth` |
| [getRecentTrades()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L212) |  | GET | `0/public/Trades` |
| [getRecentSpreads()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L223) |  | GET | `0/public/Spread` |
| [getAccountBalance()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L240) | :closed_lock_with_key:  | POST | `0/private/Balance` |
| [getExtendedBalance()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L252) | :closed_lock_with_key:  | POST | `0/private/BalanceEx` |
| [getCreditLines()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L263) | :closed_lock_with_key:  | POST | `0/private/CreditLines` |
| [getTradeBalance()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L274) | :closed_lock_with_key:  | POST | `0/private/TradeBalance` |
| [getOpenOrders()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L285) | :closed_lock_with_key:  | POST | `0/private/OpenOrders` |
| [getClosedOrders()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L297) | :closed_lock_with_key:  | POST | `0/private/ClosedOrders` |
| [getOrders()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L308) | :closed_lock_with_key:  | POST | `0/private/QueryOrders` |
| [getOrderAmends()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L320) | :closed_lock_with_key:  | POST | `0/private/OrderAmends` |
| [getTradesHistory()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L332) | :closed_lock_with_key:  | POST | `0/private/TradesHistory` |
| [getTrades()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L343) | :closed_lock_with_key:  | POST | `0/private/QueryTrades` |
| [getOpenPositions()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L354) | :closed_lock_with_key:  | POST | `0/private/OpenPositions` |
| [getLedgersInfo()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L365) | :closed_lock_with_key:  | POST | `0/private/Ledgers` |
| [getLedgers()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L376) | :closed_lock_with_key:  | POST | `0/private/QueryLedgers` |
| [getTradingVolume()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L387) | :closed_lock_with_key:  | POST | `0/private/TradeVolume` |
| [requestLedgersExport()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L399) | :closed_lock_with_key:  | POST | `0/private/AddExport` |
| [getLedgersExportStatus()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L410) | :closed_lock_with_key:  | POST | `0/private/ExportStatus` |
| [getLedgersExport()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L421) | :closed_lock_with_key:  | POST | `0/private/RetrieveExport` |
| [deleteLedgersExport()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L430) | :closed_lock_with_key:  | POST | `0/private/RemoveExport` |
| [submitOrder()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L450) | :closed_lock_with_key:  | POST | `0/private/AddOrder` |
| [amendOrder()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L464) | :closed_lock_with_key:  | POST | `0/private/AmendOrder` |
| [cancelOrder()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L479) | :closed_lock_with_key:  | POST | `0/private/CancelOrder` |
| [cancelAllOrders()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L495) | :closed_lock_with_key:  | POST | `0/private/CancelAll` |
| [cancelAllOrdersAfter()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L511) | :closed_lock_with_key:  | POST | `0/private/CancelAllOrdersAfter` |
| [getWebSocketsToken()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L528) | :closed_lock_with_key:  | POST | `0/private/GetWebSocketsToken` |
| [submitBatchOrders()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L540) | :closed_lock_with_key:  | POST | `0/private/AddOrderBatch` |
| [cancelBatchOrders()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L555) | :closed_lock_with_key:  | POST | `0/private/CancelOrderBatch` |
| [getDepositMethods()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L579) | :closed_lock_with_key:  | POST | `0/private/DepositMethods` |
| [getDepositAddresses()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L590) | :closed_lock_with_key:  | POST | `0/private/DepositAddresses` |
| [getDepositsStatus()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L601) | :closed_lock_with_key:  | POST | `0/private/DepositStatus` |
| [getWithdrawalMethods()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L612) | :closed_lock_with_key:  | POST | `0/private/WithdrawMethods` |
| [getWithdrawalAddresses()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L623) | :closed_lock_with_key:  | POST | `0/private/WithdrawAddresses` |
| [getWithdrawalInfo()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L634) | :closed_lock_with_key:  | POST | `0/private/WithdrawInfo` |
| [submitWithdrawal()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L645) | :closed_lock_with_key:  | POST | `0/private/Withdraw` |
| [getWithdrawalsStatus()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L658) | :closed_lock_with_key:  | POST | `0/private/WithdrawStatus` |
| [cancelWithdrawal()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L669) | :closed_lock_with_key:  | POST | `0/private/WithdrawCancel` |
| [submitTransferToFutures()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L682) | :closed_lock_with_key:  | POST | `0/private/WalletTransfer` |
| [createSubaccount()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L702) | :closed_lock_with_key:  | POST | `0/private/CreateSubaccount` |
| [submitSubaccountTransfer()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L715) | :closed_lock_with_key:  | POST | `0/private/AccountTransfer` |
| [allocateEarnFunds()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L733) | :closed_lock_with_key:  | POST | `0/private/Earn/Allocate` |
| [deallocateEarnFunds()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L746) | :closed_lock_with_key:  | POST | `0/private/Earn/Deallocate` |
| [getEarnAllocationStatus()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L758) | :closed_lock_with_key:  | POST | `0/private/Earn/AllocateStatus` |
| [getEarnDeallocationStatus()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L771) | :closed_lock_with_key:  | POST | `0/private/Earn/DeallocateStatus` |
| [getEarnStrategies()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L787) | :closed_lock_with_key:  | POST | `0/private/Earn/Strategies` |
| [getEarnAllocations()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L802) | :closed_lock_with_key:  | POST | `0/private/Earn/Allocations` |
| [getPreTradeData()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L820) |  | GET | `0/public/PreTrade` |
| [getPostTradeData()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L832) |  | GET | `0/public/PostTrade` |
| [getOAuthAccessToken()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L850) |  | POST | `oauth/token` |
| [getOAuthUserInfo()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L862) | :closed_lock_with_key:  | GET | `oauth/userinfo` |
| [createOAuthFastApiKey()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L872) | :closed_lock_with_key:  | POST | `oauth/fast-api-key` |
| [deleteOAuthFastApiKey()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L884) | :closed_lock_with_key:  | DELETE | `oauth/fast-api-key` |
| [updateOAuthFastApiKey()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L898) | :closed_lock_with_key:  | PUT | `oauth/fast-api-key` |
| [listOAuthFastApiKeys()](https://github.com/sieblyio/kraken-api/blob/main/src/SpotClient.ts#L910) | :closed_lock_with_key:  | GET | `oauth/fast-api-keys` |

# DerivativesClient.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [DerivativesClient.ts](/src/DerivativesClient.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [getTradeHistory()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L109) |  | GET | `derivatives/api/v3/history` |
| [getOrderbook()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L123) |  | GET | `derivatives/api/v3/orderbook` |
| [getTickers()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L134) |  | GET | `derivatives/api/v3/tickers` |
| [getTicker()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L145) |  | GET | `derivatives/api/v3/tickers/{symbol}` |
| [getInstruments()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L162) |  | GET | `derivatives/api/v3/instruments` |
| [getInstrumentStatusList()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L173) |  | GET | `derivatives/api/v3/instruments/status` |
| [getInstrumentStatus()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L186) |  | GET | `derivatives/api/v3/instruments/{symbol}/status` |
| [batchOrderManagement()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L204) | :closed_lock_with_key:  | POST | `derivatives/api/v3/batchorder` |
| [cancelAllOrders()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L223) | :closed_lock_with_key:  | POST | `derivatives/api/v3/cancelallorders` |
| [cancelAllOrdersAfter()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L239) | :closed_lock_with_key:  | POST | `derivatives/api/v3/cancelallordersafter` |
| [cancelOrder()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L254) | :closed_lock_with_key:  | POST | `derivatives/api/v3/cancelorder` |
| [editOrder()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L270) | :closed_lock_with_key:  | POST | `derivatives/api/v3/editorder` |
| [getOpenOrders()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L285) | :closed_lock_with_key:  | GET | `derivatives/api/v3/openorders` |
| [submitOrder()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L296) | :closed_lock_with_key:  | POST | `derivatives/api/v3/sendorder` |
| [getOrderStatus()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L311) | :closed_lock_with_key:  | POST | `derivatives/api/v3/orders/status` |
| [getPnlPreferences()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L333) | :closed_lock_with_key:  | GET | `derivatives/api/v3/pnlpreferences` |
| [setPnlPreference()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L345) | :closed_lock_with_key:  | PUT | `derivatives/api/v3/pnlpreferences` |
| [getLeverageSettings()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L359) | :closed_lock_with_key:  | GET | `derivatives/api/v3/leveragepreferences` |
| [setLeverageSettings()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L373) | :closed_lock_with_key:  | PUT | `derivatives/api/v3/leveragepreferences` |
| [getAccounts()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L395) | :closed_lock_with_key:  | GET | `derivatives/api/v3/accounts` |
| [getOpenPositions()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L407) | :closed_lock_with_key:  | GET | `derivatives/api/v3/openpositions` |
| [getPositionPercentile()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L418) | :closed_lock_with_key:  | GET | `derivatives/api/v3/unwindqueue` |
| [getPortfolioMarginParameters()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L431) | :closed_lock_with_key:  | GET | `derivatives/api/v3/portfolio-margining/parameters` |
| [simulateMarginRequirements()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L443) | :closed_lock_with_key:  | POST | `derivatives/api/v3/portfolio-margining/simulate` |
| [getAssignmentPrograms()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L462) | :closed_lock_with_key:  | GET | `derivatives/api/v3/assignmentprogram/current` |
| [addAssignmentPreference()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L473) | :closed_lock_with_key:  | POST | `derivatives/api/v3/assignmentprogram/add` |
| [deleteAssignmentPreference()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L486) | :closed_lock_with_key:  | POST | `derivatives/api/v3/assignmentprogram/delete` |
| [getAssignmentPreferencesHistory()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L499) | :closed_lock_with_key:  | GET | `derivatives/api/v3/assignmentprogram/history` |
| [getFeeSchedules()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L518) |  | GET | `derivatives/api/v3/feeschedules` |
| [getFeeScheduleVolumes()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L529) | :closed_lock_with_key:  | GET | `derivatives/api/v3/feeschedules/volumes` |
| [getNotifications()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L548) | :closed_lock_with_key:  | GET | `derivatives/api/v3/notifications` |
| [getFills()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L565) | :closed_lock_with_key:  | GET | `derivatives/api/v3/fills` |
| [getHistoricalFundingRates()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L582) |  | GET | `derivatives/api/v3/historical-funding-rates` |
| [getSelfTradeStrategy()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L601) | :closed_lock_with_key:  | GET | `derivatives/api/v3/self-trade-strategy` |
| [updateSelfTradeStrategy()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L614) | :closed_lock_with_key:  | PUT | `derivatives/api/v3/self-trade-strategy` |
| [getSubaccountTradingStatus()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L637) | :closed_lock_with_key:  | GET | `derivatives/api/v3/subaccount/{subaccountUid}/trading-enabled` |
| [updateSubaccountTradingStatus()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L650) | :closed_lock_with_key:  | PUT | `derivatives/api/v3/subaccount/{subaccountUid}/trading-enabled` |
| [getSubaccounts()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L666) | :closed_lock_with_key:  | GET | `derivatives/api/v3/subaccounts` |
| [submitWalletTransfer()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L683) | :closed_lock_with_key:  | POST | `derivatives/api/v3/transfer` |
| [submitSubaccountTransfer()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L696) | :closed_lock_with_key:  | POST | `derivatives/api/v3/transfer/subaccount` |
| [submitTransferToSpot()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L710) | :closed_lock_with_key:  | POST | `derivatives/api/v3/withdrawal` |
| [getOpenRFQs()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L730) |  | GET | `derivatives/api/v3/rfqs` |
| [getOpenRFQ()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L742) |  | GET | `derivatives/api/v3/rfqs/{rfqUid}` |
| [getRFQOpenOffers()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L754) | :closed_lock_with_key:  | GET | `derivatives/api/v3/rfqs/open-offers` |
| [submitRFQNewOffer()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L766) | :closed_lock_with_key:  | POST | `derivatives/api/v3/rfqs/{rfqUid}/place-offer` |
| [updateRFQOpenOffer()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L783) | :closed_lock_with_key:  | PUT | `derivatives/api/v3/rfqs/{rfqUid}/replace-offer` |
| [cancelRFQOffer()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L800) | :closed_lock_with_key:  | DELETE | `derivatives/api/v3/rfqs/{rfqUid}/cancel-offer` |
| [getExecutionEvents()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L819) | :closed_lock_with_key:  | GET | `api/history/v3/executions` |
| [getOrderEvents()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L834) | :closed_lock_with_key:  | GET | `api/history/v3/orders` |
| [getTriggerEvents()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L849) | :closed_lock_with_key:  | GET | `api/history/v3/triggers` |
| [getPositionEvents()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L864) | :closed_lock_with_key:  | GET | `api/history/v3/positions` |
| [getAccountLog()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L880) | :closed_lock_with_key:  | GET | `api/history/v3/account-log` |
| [getAccountLogCsv()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L891) | :closed_lock_with_key:  | GET | `api/history/v3/accountlogcsv` |
| [getPublicExecutionEvents()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L906) |  | GET | `api/history/v3/market/{tradeable}/executions` |
| [getPublicOrderEvents()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L920) |  | GET | `api/history/v3/market/{tradeable}/orders` |
| [getPublicMarkPriceEvents()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L934) |  | GET | `api/history/v3/market/{tradeable}/price` |
| [getTickTypes()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L954) |  | GET | `api/charts/v1/` |
| [getMarketsForTickType()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L964) |  | GET | `api/charts/v1/{tickType}` |
| [getResolutions()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L977) |  | GET | `api/charts/v1/{tickType}/{symbol}` |
| [getCandles()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L992) |  | GET | `api/charts/v1/{tickType}/{symbol}/{resolution}` |
| [getLiquidityPoolStatistic()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L1010) |  | GET | `api/charts/v1/analytics/liquidity-pool` |
| [getMarketAnalytics()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L1021) |  | GET | `api/charts/v1/analytics/{symbol}/{analyticsType}` |
| [checkApiKeyV3()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L1041) | :closed_lock_with_key:  | GET | `api/auth/v1/api-keys/v3/check` |
| [getAccountMarketShare()](https://github.com/sieblyio/kraken-api/blob/main/src/DerivativesClient.ts#L1057) | :closed_lock_with_key:  | GET | `api/stats/v1/rebates/self-market-share` |

# InstitutionalClient.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [InstitutionalClient.ts](/src/InstitutionalClient.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [listCustodyVaults()](https://github.com/sieblyio/kraken-api/blob/main/src/InstitutionalClient.ts#L73) | :closed_lock_with_key:  | POST | `0/private/ListCustodyVaults` |
| [getCustodyVaultbyId()](https://github.com/sieblyio/kraken-api/blob/main/src/InstitutionalClient.ts#L86) | :closed_lock_with_key:  | POST | `0/private/GetCustodyVault` |
| [getCustodyDepositMethods()](https://github.com/sieblyio/kraken-api/blob/main/src/InstitutionalClient.ts#L103) | :closed_lock_with_key:  | POST | `0/private/DepositMethods` |
| [getCustodyDepositAddresses()](https://github.com/sieblyio/kraken-api/blob/main/src/InstitutionalClient.ts#L119) | :closed_lock_with_key:  | POST | `0/private/DepositAddresses` |
| [listCustodyTransactions()](https://github.com/sieblyio/kraken-api/blob/main/src/InstitutionalClient.ts#L134) | :closed_lock_with_key:  | POST | `0/private/ListCustodyTransactions` |
| [getCustodyTransactionbyId()](https://github.com/sieblyio/kraken-api/blob/main/src/InstitutionalClient.ts#L149) | :closed_lock_with_key:  | POST | `0/private/GetCustodyTransaction` |
| [getCustodyWithdrawMethods()](https://github.com/sieblyio/kraken-api/blob/main/src/InstitutionalClient.ts#L170) | :closed_lock_with_key:  | POST | `0/private/WithdrawMethods` |
| [getCustodyWithdrawAddresses()](https://github.com/sieblyio/kraken-api/blob/main/src/InstitutionalClient.ts#L185) | :closed_lock_with_key:  | POST | `0/private/WithdrawAddresses` |
| [listCustodyTasks()](https://github.com/sieblyio/kraken-api/blob/main/src/InstitutionalClient.ts#L211) | :closed_lock_with_key:  | POST | `0/private/ListCustodyTasks` |
| [getCustodyTaskbyId()](https://github.com/sieblyio/kraken-api/blob/main/src/InstitutionalClient.ts#L224) | :closed_lock_with_key:  | POST | `0/private/GetCustodyTask` |
| [listCustodyActivities()](https://github.com/sieblyio/kraken-api/blob/main/src/InstitutionalClient.ts#L240) | :closed_lock_with_key:  | POST | `0/private/ListCustodyActivities` |
| [getCustodyActivitybyId()](https://github.com/sieblyio/kraken-api/blob/main/src/InstitutionalClient.ts#L253) | :closed_lock_with_key:  | POST | `0/private/GetCustodyActivity` |
| [createOtcQuoteRequest()](https://github.com/sieblyio/kraken-api/blob/main/src/InstitutionalClient.ts#L276) | :closed_lock_with_key:  | POST | `0/private/CreateOtcQuoteRequest` |
| [updateOtcQuote()](https://github.com/sieblyio/kraken-api/blob/main/src/InstitutionalClient.ts#L290) | :closed_lock_with_key:  | POST | `0/private/UpdateOtcQuote` |
| [getOtcPairs()](https://github.com/sieblyio/kraken-api/blob/main/src/InstitutionalClient.ts#L304) | :closed_lock_with_key:  | POST | `0/private/GetOtcPairs` |
| [getOtcActiveQuotes()](https://github.com/sieblyio/kraken-api/blob/main/src/InstitutionalClient.ts#L316) | :closed_lock_with_key:  | POST | `0/private/GetOtcActiveQuotes` |
| [getOtcHistoricalQuotes()](https://github.com/sieblyio/kraken-api/blob/main/src/InstitutionalClient.ts#L331) | :closed_lock_with_key:  | POST | `0/private/GetOtcHistoricalQuotes` |
| [getOtcExposures()](https://github.com/sieblyio/kraken-api/blob/main/src/InstitutionalClient.ts#L345) | :closed_lock_with_key:  | POST | `0/private/GetOtcExposures` |
| [checkOtcClient()](https://github.com/sieblyio/kraken-api/blob/main/src/InstitutionalClient.ts#L359) | :closed_lock_with_key:  | POST | `0/private/CheckOtcClient` |

# PartnerClient.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [PartnerClient.ts](/src/PartnerClient.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [createEmbedUser()](https://github.com/sieblyio/kraken-api/blob/main/src/PartnerClient.ts#L82) | :closed_lock_with_key:  | POST | `b2b/users` |
| [getEmbedUser()](https://github.com/sieblyio/kraken-api/blob/main/src/PartnerClient.ts#L95) | :closed_lock_with_key:  | GET | `b2b/users/{user}` |
| [updateEmbedUser()](https://github.com/sieblyio/kraken-api/blob/main/src/PartnerClient.ts#L104) | :closed_lock_with_key:  | PATCH | `b2b/users/{user}` |
| [submitEmbedVerification()](https://github.com/sieblyio/kraken-api/blob/main/src/PartnerClient.ts#L126) | :closed_lock_with_key:  | POST | `b2b/verifications/{user}` |
| [listEmbedAssets()](https://github.com/sieblyio/kraken-api/blob/main/src/PartnerClient.ts#L147) | :closed_lock_with_key:  | GET | `b2b/assets` |
| [getEmbedAsset()](https://github.com/sieblyio/kraken-api/blob/main/src/PartnerClient.ts#L158) | :closed_lock_with_key:  | GET | `b2b/assets/{asset}` |
| [listEmbedAssetRates()](https://github.com/sieblyio/kraken-api/blob/main/src/PartnerClient.ts#L171) | :closed_lock_with_key:  | GET | `b2b/assets/{asset}/rates` |
| [requestEmbedQuote()](https://github.com/sieblyio/kraken-api/blob/main/src/PartnerClient.ts#L189) | :closed_lock_with_key:  | POST | `b2b/quotes` |
| [getEmbedQuote()](https://github.com/sieblyio/kraken-api/blob/main/src/PartnerClient.ts#L204) | :closed_lock_with_key:  | GET | `b2b/quotes/{quote_id}` |
| [executeEmbedQuote()](https://github.com/sieblyio/kraken-api/blob/main/src/PartnerClient.ts#L216) | :closed_lock_with_key:  | PUT | `b2b/quotes/{quote_id}` |
| [getEmbedPortfolioSummary()](https://github.com/sieblyio/kraken-api/blob/main/src/PartnerClient.ts#L236) | :closed_lock_with_key:  | GET | `b2b/portfolio/{user}/summary` |
| [getEmbedPortfolioHistory()](https://github.com/sieblyio/kraken-api/blob/main/src/PartnerClient.ts#L249) | :closed_lock_with_key:  | GET | `b2b/portfolio/{user}/history` |
| [listEmbedPortfolioDetails()](https://github.com/sieblyio/kraken-api/blob/main/src/PartnerClient.ts#L261) | :closed_lock_with_key:  | GET | `b2b/portfolio/{user}/details` |
| [listEmbedPortfolioTransactions()](https://github.com/sieblyio/kraken-api/blob/main/src/PartnerClient.ts#L273) | :closed_lock_with_key:  | GET | `b2b/portfolio/{user}/transactions` |
| [getEmbedEarnSummary()](https://github.com/sieblyio/kraken-api/blob/main/src/PartnerClient.ts#L292) | :closed_lock_with_key:  | GET | `b2b/earn/{user}` |
| [listEmbedEarnAssets()](https://github.com/sieblyio/kraken-api/blob/main/src/PartnerClient.ts#L305) | :closed_lock_with_key:  | GET | `b2b/earn/assets` |
| [toggleEmbedAutoEarn()](https://github.com/sieblyio/kraken-api/blob/main/src/PartnerClient.ts#L318) | :closed_lock_with_key:  | PUT | `b2b/earn/{user}/auto` |
| [withdrawEmbedFunds()](https://github.com/sieblyio/kraken-api/blob/main/src/PartnerClient.ts#L339) | :closed_lock_with_key:  | POST | `b2b/funds/withdrawals` |
| [listEmbedFundingTransactions()](https://github.com/sieblyio/kraken-api/blob/main/src/PartnerClient.ts#L354) | :closed_lock_with_key:  | GET | `b2b/funds/transactions` |
| [listEmbedSettlementReports()](https://github.com/sieblyio/kraken-api/blob/main/src/PartnerClient.ts#L372) | :closed_lock_with_key:  | GET | `b2b/reports/settlement` |
| [getEmbedSettlementReport()](https://github.com/sieblyio/kraken-api/blob/main/src/PartnerClient.ts#L383) | :closed_lock_with_key:  | GET | `b2b/reports/settlement/{id}` |
| [listRampBuyCryptoAssets()](https://github.com/sieblyio/kraken-api/blob/main/src/PartnerClient.ts#L401) | :closed_lock_with_key:  | GET | `b2b/ramp/buy/crypto` |
| [listRampFiatCurrencies()](https://github.com/sieblyio/kraken-api/blob/main/src/PartnerClient.ts#L410) | :closed_lock_with_key:  | GET | `b2b/ramp/fiat-currencies` |
| [listRampPaymentMethods()](https://github.com/sieblyio/kraken-api/blob/main/src/PartnerClient.ts#L420) | :closed_lock_with_key:  | GET | `b2b/ramp/payment-methods` |
| [listRampCountries()](https://github.com/sieblyio/kraken-api/blob/main/src/PartnerClient.ts#L430) | :closed_lock_with_key:  | GET | `b2b/ramp/countries` |
| [getRampLimits()](https://github.com/sieblyio/kraken-api/blob/main/src/PartnerClient.ts#L445) | :closed_lock_with_key:  | GET | `b2b/ramp/limits` |
| [getRampProspectiveQuote()](https://github.com/sieblyio/kraken-api/blob/main/src/PartnerClient.ts#L457) | :closed_lock_with_key:  | GET | `b2b/ramp/quotes/prospective` |
| [getRampCheckoutUrl()](https://github.com/sieblyio/kraken-api/blob/main/src/PartnerClient.ts#L475) | :closed_lock_with_key:  | GET | `b2b/ramp/checkout` |

# WebsocketAPIClient.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [WebsocketAPIClient.ts](/src/WebsocketAPIClient.ts). 

This client provides WebSocket API endpoints which allow for faster interactions with the Kraken API via a WebSocket connection.

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [submitSpotOrder()](https://github.com/sieblyio/kraken-api/blob/main/src/WebsocketAPIClient.ts#L85) | :closed_lock_with_key:  | WS | `add_order` |
| [amendSpotOrder()](https://github.com/sieblyio/kraken-api/blob/main/src/WebsocketAPIClient.ts#L99) | :closed_lock_with_key:  | WS | `amend_order` |
| [cancelSpotOrder()](https://github.com/sieblyio/kraken-api/blob/main/src/WebsocketAPIClient.ts#L113) | :closed_lock_with_key:  | WS | `cancel_order` |
| [cancelAllSpotOrders()](https://github.com/sieblyio/kraken-api/blob/main/src/WebsocketAPIClient.ts#L127) | :closed_lock_with_key:  | WS | `cancel_all` |
| [cancelAllSpotOrdersAfter()](https://github.com/sieblyio/kraken-api/blob/main/src/WebsocketAPIClient.ts#L139) | :closed_lock_with_key:  | WS | `cancel_all_orders_after` |
| [batchSubmitSpotOrders()](https://github.com/sieblyio/kraken-api/blob/main/src/WebsocketAPIClient.ts#L158) | :closed_lock_with_key:  | WS | `batch_add` |
| [batchCancelSpotOrders()](https://github.com/sieblyio/kraken-api/blob/main/src/WebsocketAPIClient.ts#L172) | :closed_lock_with_key:  | WS | `batch_cancel` |
| [editSpotOrder()](https://github.com/sieblyio/kraken-api/blob/main/src/WebsocketAPIClient.ts#L189) | :closed_lock_with_key:  | WS | `edit_order` |