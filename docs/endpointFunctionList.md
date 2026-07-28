
# Endpoint maps

<p align="center">
  <a href="https://www.npmjs.com/package/@siebly/htx-api">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/sieblyio/htx-api/blob/main/docs/images/logoDarkMode2.svg?raw=true#gh-dark-mode-only">
      <img alt="SDK Logo" src="https://github.com/sieblyio/htx-api/blob/main/docs/images/logoBrightMode2.svg?raw=true#gh-light-mode-only">
    </picture>
  </a>
</p>

Each REST client is a JavaScript class, which provides functions individually mapped to each endpoint available in the exchange's API offering. 

The following table shows all methods available in each REST client, whether the method requires authentication (automatically handled if API keys are provided), as well as the exact endpoint each method is connected to.

This can be used to easily find which method to call, once you have [found which endpoint you're looking to use](https://github.com/tiagosiebler/awesome-crypto-examples/wiki/How-to-find-SDK-functions-that-match-API-docs-endpoint).

All REST clients are in the [src](/src) folder. For usage examples, make sure to check the [examples](/examples) folder.

List of clients:
- [SpotClient](#SpotClientts)
- [FuturesClient](#FuturesClientts)
- [WebsocketAPIClient](#WebsocketAPIClientts)


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
| [getMarketStatus()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L187) |  | GET | `/v2/market-status` |
| [getTimestamp()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L196) |  | GET | `/v1/common/timestamp` |
| [getTradingSymbols()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L205) |  | GET | `/v2/settings/common/symbols` |
| [getCurrencies()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L216) |  | GET | `/v2/settings/common/currencies` |
| [getCurrencysSettings()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L227) |  | GET | `/v1/settings/common/currencys` |
| [getSymbolsSettings()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L238) |  | GET | `/v1/settings/common/symbols` |
| [getMarketSymbolsSettings()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L249) |  | GET | `/v1/settings/common/market-symbols` |
| [getChainsInfo()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L261) |  | GET | `/v1/settings/common/chains` |
| [getReferenceCurrencies()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L272) |  | GET | `/v2/reference/currencies` |
| [getKlines()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L290) |  | GET | `/market/history/kline` |
| [getTicker()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L301) |  | GET | `/market/detail/merged` |
| [getTickers()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L312) |  | GET | `/market/tickers` |
| [getMarketDepth()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L321) |  | GET | `/market/depth` |
| [getLastTrade()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L332) |  | GET | `/market/trade` |
| [getHistoryTrades()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L343) |  | GET | `/market/history/trade` |
| [get24hMarketSummary()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L355) |  | GET | `/market/detail` |
| [getFullOrderBook()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L366) |  | GET | `/market/fullMbp` |
| [getAccounts()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L383) | :closed_lock_with_key:  | GET | `/v1/account/accounts` |
| [getAccountBalance()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L392) | :closed_lock_with_key:  | GET | `/v1/account/accounts/{accountId}/balance` |
| [getAccountValuation()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L403) | :closed_lock_with_key:  | GET | `/v2/account/valuation` |
| [getAssetValuation()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L415) | :closed_lock_with_key:  | GET | `/v2/account/asset-valuation` |
| [submitTransfer()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L426) | :closed_lock_with_key:  | POST | `/v1/account/transfer` |
| [getAccountHistory()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L437) | :closed_lock_with_key:  | GET | `/v1/account/history` |
| [getAccountLedger()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L450) | :closed_lock_with_key:  | GET | `/v2/account/ledger` |
| [submitV2AccountTransfer()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L463) | :closed_lock_with_key:  | POST | `/v2/account/transfer` |
| [submitFuturesTransfer()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L474) | :closed_lock_with_key:  | POST | `/v1/futures/transfer` |
| [getPointBalance()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L485) | :closed_lock_with_key:  | GET | `/v2/point/account` |
| [submitPointTransfer()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L496) | :closed_lock_with_key:  | POST | `/v2/point/transfer` |
| [getAccountSwitchUserInfo()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L507) | :closed_lock_with_key:  | GET | `/v1/account/switch/user/info` |
| [getAccountOverviewInfo()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L518) | :closed_lock_with_key:  | GET | `/v1/account/overview/info` |
| [updateFeeDeductionMethod()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L529) | :closed_lock_with_key:  | POST | `/v1/account/fee/switch` |
| [submitOrder()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L547) | :closed_lock_with_key:  | POST | `/v1/order/orders/place` |
| [submitBatchOrders()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L559) | :closed_lock_with_key:  | POST | `/v1/order/batch-orders` |
| [submitMarginOrder()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L573) | :closed_lock_with_key:  | POST | `/v1/order/auto/place` |
| [cancelOrderById()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L585) | :closed_lock_with_key:  | POST | `/v1/order/orders/{orderId}/submitcancel` |
| [cancelOrderByClientId()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L600) | :closed_lock_with_key:  | POST | `/v1/order/orders/submitCancelClientOrder` |
| [cancelAllOrders()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L613) | :closed_lock_with_key:  | GET | `/v1/order/cancelAllOrders` |
| [getOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L624) | :closed_lock_with_key:  | GET | `/v1/order/openOrders` |
| [batchCancelOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L635) | :closed_lock_with_key:  | POST | `/v1/order/orders/batchCancelOpenOrders` |
| [batchCancelOrders()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L648) | :closed_lock_with_key:  | POST | `/v1/order/orders/batchcancel` |
| [setCancelAllAfter()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L660) | :closed_lock_with_key:  | POST | `/v2/algo-orders/cancel-all-after` |
| [getOrder()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L673) | :closed_lock_with_key:  | GET | `/v1/order/orders/{orderId}` |
| [getOrderByClientId()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L684) | :closed_lock_with_key:  | GET | `/v1/order/orders/getClientOrder` |
| [getOrderMatch()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L695) | :closed_lock_with_key:  | GET | `/v1/order/orders/{orderId}/matchresults` |
| [getOrderHistory()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L706) | :closed_lock_with_key:  | GET | `/v1/order/orders` |
| [getOrderHistory48h()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L717) | :closed_lock_with_key:  | GET | `/v1/order/history` |
| [getMatchResults()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L728) | :closed_lock_with_key:  | GET | `/v1/order/matchresults` |
| [getFeeRate()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L739) | :closed_lock_with_key:  | GET | `/v2/reference/transact-fee-rate` |
| [placeConditionalOrder()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L756) | :closed_lock_with_key:  | POST | `/v2/algo-orders` |
| [cancelConditionalOrders()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L767) | :closed_lock_with_key:  | POST | `/v2/algo-orders/cancellation` |
| [getOpenConditionalOrders()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L778) | :closed_lock_with_key:  | GET | `/v2/algo-orders/opening` |
| [getConditionalOrderHistory()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L789) | :closed_lock_with_key:  | GET | `/v2/algo-orders/history` |
| [getConditionalOrder()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L800) | :closed_lock_with_key:  | GET | `/v2/algo-orders/specific` |
| [getRepaymentRecords()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L817) | :closed_lock_with_key:  | GET | `/v2/account/repayment` |
| [repayMarginLoan()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L830) | :closed_lock_with_key:  | POST | `/v2/account/repayment` |
| [transferSpotToIsolatedMargin()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L841) | :closed_lock_with_key:  | POST | `/v1/dw/transfer-in/margin` |
| [transferIsolatedMarginToSpot()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L852) | :closed_lock_with_key:  | POST | `/v1/dw/transfer-out/margin` |
| [getMarginLoanInfo()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L863) | :closed_lock_with_key:  | GET | `/v1/margin/loan-info` |
| [requestMarginLoan()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L874) | :closed_lock_with_key:  | POST | `/v1/margin/orders` |
| [repayMarginLoanIsolated()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L885) | :closed_lock_with_key:  | POST | `/v1/margin/orders/{orderId}/repay` |
| [getMarginLoanOrders()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L900) | :closed_lock_with_key:  | GET | `/v1/margin/loan-orders` |
| [getMarginAccountBalance()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L911) | :closed_lock_with_key:  | GET | `/v1/margin/accounts/balance` |
| [transferSpotToCrossMargin()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L923) | :closed_lock_with_key:  | POST | `/v1/cross-margin/transfer-in` |
| [transferCrossMarginToSpot()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L935) | :closed_lock_with_key:  | POST | `/v1/cross-margin/transfer-out` |
| [getCrossMarginLoanInfo()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L947) | :closed_lock_with_key:  | GET | `/v1/cross-margin/loan-info` |
| [requestCrossMarginLoan()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L958) | :closed_lock_with_key:  | POST | `/v1/cross-margin/orders` |
| [repayCrossMarginLoan()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L970) | :closed_lock_with_key:  | POST | `/v1/cross-margin/orders/{orderId}/repay` |
| [getCrossMarginLoanOrders()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L985) | :closed_lock_with_key:  | GET | `/v1/cross-margin/loan-orders` |
| [getCrossMarginBalance()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L996) | :closed_lock_with_key:  | GET | `/v1/cross-margin/accounts/balance` |
| [getCrossMarginLimit()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1007) | :closed_lock_with_key:  | GET | `/v2/margin/limit` |
| [getDepositAddress()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1024) | :closed_lock_with_key:  | GET | `/v2/account/deposit/address` |
| [getWithdrawQuota()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1035) | :closed_lock_with_key:  | GET | `/v2/account/withdraw/quota` |
| [getWithdrawAddress()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1046) | :closed_lock_with_key:  | GET | `/v2/account/withdraw/address` |
| [submitWithdraw()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1059) | :closed_lock_with_key:  | POST | `/v1/dw/withdraw/api/create` |
| [getWithdrawByClientId()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1070) | :closed_lock_with_key:  | GET | `/v1/query/withdraw/client-order-id` |
| [cancelWithdraw()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1081) | :closed_lock_with_key:  | POST | `/v1/dw/withdraw-virtual/{withdrawId}/cancel` |
| [getDepositWithdrawHistory()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1095) | :closed_lock_with_key:  | GET | `/v1/query/deposit-withdraw` |
| [getVaspList()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1106) |  | GET | `/v1/query/vasp-list` |
| [getBrokerUserRebateStatus()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1121) | :closed_lock_with_key:  | GET | `/broker/v1/user_rebate_status` |
| [setBrokerSubUserFeeRate()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1147) | :closed_lock_with_key:  | POST | `/broker/v1/sub-user/fee_rate/add` |
| [getBrokerAccountCapitalSnapshot()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1160) | :closed_lock_with_key:  | POST | `/broker/v1/account_capital_snapshot_everyday` |
| [updateSubUserDeductMode()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1179) | :closed_lock_with_key:  | POST | `/v2/sub-user/deduct-mode` |
| [getSubUserApiKey()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1191) | :closed_lock_with_key:  | GET | `/v2/user/api-key` |
| [getUserUid()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1203) | :closed_lock_with_key:  | GET | `/v2/user/uid` |
| [getSubUserList()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1226) | :closed_lock_with_key:  | GET | `/v2/sub-user/user-list` |
| [updateSubUserLockStatus()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1237) | :closed_lock_with_key:  | POST | `/v2/sub-user/management` |
| [getSubUserStatus()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1249) | :closed_lock_with_key:  | GET | `/v2/sub-user/user-state` |
| [setSubUserTradableMarket()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1260) | :closed_lock_with_key:  | POST | `/v2/sub-user/tradable-market` |
| [setSubUserTransferPermissions()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1271) | :closed_lock_with_key:  | POST | `/v2/sub-user/transferability` |
| [getSubUserAccounts()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1282) | :closed_lock_with_key:  | GET | `/v2/sub-user/account-list` |
| [createSubUserApiKey()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1293) | :closed_lock_with_key:  | POST | `/v2/sub-user/api-key-generation` |
| [updateSubUserApiKey()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1306) | :closed_lock_with_key:  | POST | `/v2/sub-user/api-key-modification` |
| [deleteSubUserApiKey()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1319) | :closed_lock_with_key:  | POST | `/v2/sub-user/api-key-deletion` |
| [submitSubUserTransfer()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1333) | :closed_lock_with_key:  | POST | `/v1/subuser/transfer` |
| [getSubUserDepositAddress()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1344) | :closed_lock_with_key:  | GET | `/v2/sub-user/deposit-address` |
| [getSubUserDepositHistory()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1356) | :closed_lock_with_key:  | GET | `/v2/sub-user/query-deposit` |
| [getSubUsersAggregatedBalance()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1369) | :closed_lock_with_key:  | GET | `/v1/subuser/aggregate-balance` |
| [getSubUserBalance()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1380) | :closed_lock_with_key:  | GET | `/v1/account/accounts/{subUid}` |
| [getSubUserEntrustUserList()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1391) | :closed_lock_with_key:  | GET | `/v2/sub-user/entrust-user-list` |
| [getSubUserManagedTransferHistory()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1407) | :closed_lock_with_key:  | GET | `/v2/sub-user/managed-transfer-history` |
| [getReferralRebateDetail()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1423) | :closed_lock_with_key:  | GET | `/v2/invitee/rebate/detail` |
| [getReferralRebateHistory()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1434) | :closed_lock_with_key:  | GET | `/v2/invitee/rebate/history` |
| [getReferralAllRebateDetail()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1445) | :closed_lock_with_key:  | GET | `/v2/invitee/rebate/all_rebate/detail` |
| [getReferralMultipleRebateDetail()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1458) | :closed_lock_with_key:  | GET | `/v2/invitee/rebate/batcher_rebate/detail` |
| [getReferralInvitedUserList()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1469) | :closed_lock_with_key:  | GET | `/v2/invitee/rebate/referrals` |
| [getP2POrderHistory()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1488) |  | GET | `/v1/api/c2c/order/history` |
| [getEarnProjectList()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1508) | :closed_lock_with_key:  | GET | `/v1/earn/project/queryEarnProjectList` |
| [earnSubscribe()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1521) | :closed_lock_with_key:  | POST | `/v1/earn/order/demand/add` |
| [earnRedeem()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1532) | :closed_lock_with_key:  | POST | `/v1/earn/order/demand/redeem-order` |
| [getEarnUserAssets()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1545) | :closed_lock_with_key:  | GET | `/v1/earn/order/user/assets/list` |

# FuturesClient.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [FuturesClient.ts](/src/FuturesClient.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [getTimestamp()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L435) |  | GET | `/api/v1/timestamp` |
| [getHeartbeat()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L445) |  | GET | `/heartbeat/` |
| [getLinearSwapAccountType()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L461) | :closed_lock_with_key:  | GET | `/linear-swap-api/v3/swap_unified_account_type` |
| [updateLinearSwapAccountType()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L477) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_switch_account_type` |
| [getLinearSwapFundingRate()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L493) |  | GET | `/linear-swap-api/v1/swap_funding_rate` |
| [getLinearSwapFundingRates()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L505) |  | GET | `/linear-swap-api/v1/swap_batch_funding_rate` |
| [getLinearSwapHistoricalFundingRate()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L517) |  | GET | `/linear-swap-api/v1/swap_historical_funding_rate` |
| [getLinearSwapLiquidationOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L529) |  | GET | `/linear-swap-api/v3/swap_liquidation_orders` |
| [getLinearSwapSettlementRecords()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L541) |  | GET | `/linear-swap-api/v1/swap_settlement_records` |
| [getLinearSwapNetAccountRatio()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L553) |  | GET | `/linear-swap-api/v1/swap_elite_account_ratio` |
| [getLinearSwapNetPositionRatio()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L566) |  | GET | `/linear-swap-api/v1/swap_elite_position_ratio` |
| [getLinearSwapIsolatedSystemStatus()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L579) |  | GET | `/linear-swap-api/v1/swap_api_state` |
| [getLinearSwapCrossTieredMargin()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L592) |  | GET | `/linear-swap-api/v1/swap_cross_ladder_margin` |
| [getLinearSwapIsolatedTieredMargin()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L604) |  | GET | `/linear-swap-api/v1/swap_ladder_margin` |
| [getLinearSwapEstimatedSettlementPrice()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L617) |  | GET | `/linear-swap-api/v1/swap_estimated_settlement_price` |
| [getLinearSwapIsolatedAdjustFactor()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L632) |  | GET | `/linear-swap-api/v1/swap_adjustfactor` |
| [getLinearSwapCrossAdjustFactor()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L645) |  | GET | `/linear-swap-api/v1/swap_cross_adjustfactor` |
| [getLinearSwapRiskReserveBalance()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L657) |  | GET | `/v1/insurance_fund_info` |
| [getLinearSwapRiskReserveHistory()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L669) |  | GET | `/v1/insurance_fund_history` |
| [getLinearSwapContractPriceLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L681) |  | GET | `/linear-swap-api/v1/swap_price_limit` |
| [getLinearSwapOpenInterest()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L693) |  | GET | `/linear-swap-api/v1/swap_open_interest` |
| [getLinearSwapContractInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L705) |  | GET | `/linear-swap-api/v1/swap_contract_info` |
| [getLinearSwapIndexPrice()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L717) |  | GET | `/linear-swap-api/v1/swap_index` |
| [getLinearSwapIndexConstituents()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L729) |  | GET | `/linear-swap-api/market/swap_contract_constituents` |
| [getLinearSwapContractElements()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L744) |  | GET | `/linear-swap-api/v1/swap_query_elements` |
| [getLinearSwapMarketDepth()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L762) |  | GET | `/linear-swap-ex/market/depth` |
| [getLinearSwapMarketBbo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L775) |  | GET | `/linear-swap-ex/market/bbo` |
| [getLinearSwapKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L788) |  | GET | `/linear-swap-ex/market/history/kline` |
| [getLinearSwapMarkKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L799) |  | GET | `/index/market/history/linear_swap_mark_price_kline` |
| [getLinearSwapTicker()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L813) |  | GET | `/linear-swap-ex/market/detail/merged` |
| [getLinearSwapTickers()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L825) |  | GET | `/v2/linear-swap-ex/market/detail/batch_merged` |
| [getLinearSwapLastTrade()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L838) |  | GET | `/linear-swap-ex/market/trade` |
| [getLinearSwapTradeHistory()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L850) |  | GET | `/linear-swap-ex/market/history/trade` |
| [getLinearSwapHistoricalOpenInterest()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L863) |  | GET | `/linear-swap-api/v1/swap_his_open_interest` |
| [getLinearSwapPremiumIndexKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L874) |  | GET | `/index/market/history/linear_swap_premium_index_kline` |
| [getLinearSwapFundingRateKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L888) |  | GET | `/index/market/history/linear_swap_estimated_rate_kline` |
| [getLinearSwapBasisData()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L902) |  | GET | `/index/market/history/linear_swap_basis` |
| [getLinearSwapAssetValuation()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L920) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_balance_valuation` |
| [getLinearSwapIsolatedAccountInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L933) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_account_info` |
| [getLinearSwapCrossAccountInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L946) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_account_info` |
| [getLinearSwapIsolatedPositions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L959) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_position_info` |
| [getLinearSwapCrossPositions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L972) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_position_info` |
| [getLinearSwapIsolatedAccountFull()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L985) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_account_position_info` |
| [getLinearSwapCrossAccountFull()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L998) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_account_position_info` |
| [updateLinearSwapSubPermissions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1012) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_sub_auth` |
| [getLinearSwapSubPermissions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1026) | :closed_lock_with_key:  | GET | `/linear-swap-api/v1/swap_sub_auth_list` |
| [getLinearSwapIsolatedSubAccounts()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1037) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_sub_account_list` |
| [getLinearSwapCrossSubAccounts()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1050) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_sub_account_list` |
| [getLinearSwapIsolatedSubAccountsAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1063) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_sub_account_info_list` |
| [getLinearSwapCrossSubAccountsAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1076) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_sub_account_info_list` |
| [getLinearSwapIsolatedSubAccountAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1090) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_sub_account_info` |
| [getLinearSwapCrossSubAccountAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1104) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_sub_account_info` |
| [getLinearSwapIsolatedSubPositions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1118) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_sub_position_info` |
| [getLinearSwapCrossSubPositions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1132) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_sub_position_info` |
| [getLinearSwapFinancialRecords()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1146) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_financial_record` |
| [getLinearSwapFinancialRecordsExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1159) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_financial_record_exact` |
| [getLinearSwapIsolatedAvailableLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1172) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_available_level_rate` |
| [getLinearSwapCrossAvailableLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1185) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_available_level_rate` |
| [getLinearSwapOrderLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1199) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_order_limit` |
| [getLinearSwapFee()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1212) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_fee` |
| [getLinearSwapIsolatedTransferLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1225) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_transfer_limit` |
| [getLinearSwapCrossTransferLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1238) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_transfer_limit` |
| [getLinearSwapIsolatedPositionLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1251) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_position_limit` |
| [getLinearSwapCrossPositionLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1264) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_position_limit` |
| [getLinearSwapIsolatedLeverageLimits()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1277) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_lever_position_limit` |
| [getLinearSwapCrossLeverageLimits()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1291) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_lever_position_limit` |
| [transferLinearSwapMasterSub()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1307) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_master_sub_transfer` |
| [getLinearSwapMasterSubTransfers()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1320) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_master_sub_transfer_record` |
| [transferLinearSwapInner()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1336) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_transfer_inner` |
| [setLinearSwapCancelAfter()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1355) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/linear-cancel-after` |
| [getLinearSwapCrossTradeState()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1369) | :closed_lock_with_key:  | GET | `/linear-swap-api/v1/swap_cross_trade_state` |
| [getLinearSwapCrossTransferState()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1383) | :closed_lock_with_key:  | GET | `/linear-swap-api/v1/swap_cross_transfer_state` |
| [updateLinearSwapIsolatedPositionMode()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1397) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_switch_position_mode` |
| [updateLinearSwapCrossPositionMode()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1411) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_switch_position_mode` |
| [submitLinearSwapIsolatedOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1428) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_order` |
| [submitLinearSwapCrossOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1441) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_order` |
| [submitLinearSwapIsolatedBatchOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1454) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_batchorder` |
| [submitLinearSwapCrossBatchOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1467) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_batchorder` |
| [cancelLinearSwapIsolatedOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1480) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cancel` |
| [cancelLinearSwapCrossOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1493) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_cancel` |
| [cancelLinearSwapIsolatedAllOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1506) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cancelall` |
| [cancelLinearSwapCrossAllOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1519) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_cancelall` |
| [updateLinearSwapIsolatedLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1532) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_switch_lever_rate` |
| [updateLinearSwapCrossLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1546) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_switch_lever_rate` |
| [getLinearSwapIsolatedOrderInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1562) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_order_info` |
| [getLinearSwapCrossOrderInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1575) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_order_info` |
| [getLinearSwapIsolatedOrderDetail()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1588) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_order_detail` |
| [getLinearSwapCrossOrderDetail()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1601) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_order_detail` |
| [getLinearSwapIsolatedOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1614) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_openorders` |
| [getLinearSwapCrossOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1627) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_openorders` |
| [getLinearSwapIsolatedHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1640) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_hisorders` |
| [getLinearSwapCrossHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1653) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_cross_hisorders` |
| [getLinearSwapIsolatedHistoryOrdersExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1666) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_hisorders_exact` |
| [getLinearSwapCrossHistoryOrdersExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1679) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_cross_hisorders_exact` |
| [getLinearSwapIsolatedFills()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1692) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_matchresults` |
| [getLinearSwapCrossFills()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1705) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_cross_matchresults` |
| [getLinearSwapIsolatedFillsExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1718) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_matchresults_exact` |
| [getLinearSwapCrossFillsExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1731) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_cross_matchresults_exact` |
| [submitLinearSwapIsolatedLightningCloseOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1747) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_lightning_close_position` |
| [submitLinearSwapCrossLightningCloseOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1763) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_lightning_close_position` |
| [getLinearSwapIsolatedPositionMode()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1777) | :closed_lock_with_key:  | GET | `/linear-swap-api/v1/swap_position_side` |
| [getLinearSwapCrossPositionMode()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1788) | :closed_lock_with_key:  | GET | `/linear-swap-api/v1/swap_cross_position_side` |
| [submitLinearSwapIsolatedTriggerOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1808) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_trigger_order` |
| [submitLinearSwapCrossTriggerOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1821) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_trigger_order` |
| [cancelLinearSwapIsolatedTriggerOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1834) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_trigger_cancel` |
| [cancelLinearSwapCrossTriggerOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1848) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_trigger_cancel` |
| [cancelLinearSwapIsolatedAllTriggerOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1861) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_trigger_cancelall` |
| [cancelLinearSwapCrossAllTriggerOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1874) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_trigger_cancelall` |
| [getLinearSwapIsolatedTriggerOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1890) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_trigger_openorders` |
| [getLinearSwapCrossTriggerOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1903) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_trigger_openorders` |
| [getLinearSwapIsolatedTriggerHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1917) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_trigger_hisorders` |
| [getLinearSwapCrossTriggerHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1930) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_trigger_hisorders` |
| [submitLinearSwapIsolatedTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1944) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_tpsl_order` |
| [submitLinearSwapCrossTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1957) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_tpsl_order` |
| [cancelLinearSwapIsolatedTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1970) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_tpsl_cancel` |
| [cancelLinearSwapCrossTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1984) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_tpsl_cancel` |
| [cancelLinearSwapIsolatedAllTpslOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1997) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_tpsl_cancelall` |
| [cancelLinearSwapCrossAllTpslOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2011) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_tpsl_cancelall` |
| [getLinearSwapIsolatedTpslOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2024) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_tpsl_openorders` |
| [getLinearSwapCrossTpslOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2037) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_tpsl_openorders` |
| [getLinearSwapIsolatedTpslHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2050) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_tpsl_hisorders` |
| [getLinearSwapCrossTpslHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2063) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_tpsl_hisorders` |
| [getLinearSwapIsolatedRelationTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2076) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_relation_tpsl_order` |
| [getLinearSwapCrossRelationTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2090) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_relation_tpsl_order` |
| [submitLinearSwapIsolatedTrailingOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2106) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_track_order` |
| [submitLinearSwapCrossTrailingOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2119) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_track_order` |
| [cancelLinearSwapIsolatedTrailingOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2132) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_track_cancel` |
| [cancelLinearSwapCrossTrailingOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2146) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_track_cancel` |
| [cancelLinearSwapIsolatedAllTrailingOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2159) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_track_cancelall` |
| [cancelLinearSwapCrossAllTrailingOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2172) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_track_cancelall` |
| [getLinearSwapIsolatedTrailingOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2185) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_track_openorders` |
| [getLinearSwapCrossTrailingOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2198) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_track_openorders` |
| [getLinearSwapIsolatedTrailingHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2211) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_track_hisorders` |
| [getLinearSwapCrossTrailingHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2224) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_track_hisorders` |
| [getLinearSwapUnifiedAccountInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2241) | :closed_lock_with_key:  | GET | `/linear-swap-api/v3/unified_account_info` |
| [getLinearSwapUnifiedAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2252) | :closed_lock_with_key:  | GET | `/linear-swap-api/v3/linear_swap_overview_account_info` |
| [updateLinearSwapUnifiedFeeMethod()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2268) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/linear_swap_fee_switch` |
| [getLinearSwapUnifiedMarginAdjustments()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2282) | :closed_lock_with_key:  | GET | `/linear-swap-api/v3/fix_position_margin_change_record` |
| [updateLinearSwapUnifiedMargin()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2298) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/fix_position_margin_change` |
| [getMultiAssetAccountBalance()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2318) | :closed_lock_with_key:  | GET | `/v5/account/balance` |
| [getMultiAssetMode()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2330) | :closed_lock_with_key:  | GET | `/v5/account/asset_mode` |
| [updateMultiAssetMode()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2342) | :closed_lock_with_key:  | POST | `/v5/account/asset_mode` |
| [updateMultiAssetFeeCurrency()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2354) | :closed_lock_with_key:  | POST | `/v5/account/fee_deduction_currency` |
| [getMultiAssetFeeCurrency()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2369) | :closed_lock_with_key:  | GET | `/v5/account/fee_deduction_currency` |
| [getMultiAssetBills()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2381) | :closed_lock_with_key:  | GET | `/v5/account/bills` |
| [submitMultiAssetOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2399) | :closed_lock_with_key:  | POST | `/v5/trade/order` |
| [submitMultiAssetBatchOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2411) | :closed_lock_with_key:  | POST | `/v5/trade/batch_orders` |
| [cancelMultiAssetOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2423) | :closed_lock_with_key:  | POST | `/v5/trade/cancel_order` |
| [cancelMultiAssetBatchOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2435) | :closed_lock_with_key:  | POST | `/v5/trade/cancel_batch_orders` |
| [cancelMultiAssetAllOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2447) | :closed_lock_with_key:  | POST | `/v5/trade/cancel_all_orders` |
| [closeMultiAssetPosition()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2461) | :closed_lock_with_key:  | POST | `/v5/trade/position` |
| [closeMultiAssetAllPositions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2473) | :closed_lock_with_key:  | POST | `/v5/trade/position_all` |
| [getMultiAssetOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2485) | :closed_lock_with_key:  | GET | `/v5/trade/order/opens` |
| [getMultiAssetFills()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2497) | :closed_lock_with_key:  | GET | `/v5/trade/order/details` |
| [getMultiAssetOrderHistory()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2509) | :closed_lock_with_key:  | GET | `/v5/trade/order/history` |
| [getMultiAssetOrderInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2521) | :closed_lock_with_key:  | GET | `/v5/trade/order` |
| [setMultiAssetCancelAfter()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2533) | :closed_lock_with_key:  | POST | `/v5/trade/cancel-after` |
| [getMultiAssetPositions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2551) | :closed_lock_with_key:  | GET | `/v5/trade/position/opens` |
| [getMultiAssetLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2563) | :closed_lock_with_key:  | GET | `/v5/position/lever` |
| [updateMultiAssetLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2575) | :closed_lock_with_key:  | POST | `/v5/position/lever` |
| [getMultiAssetPositionMode()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2587) | :closed_lock_with_key:  | GET | `/v5/position/mode` |
| [updateMultiAssetPositionMode()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2599) | :closed_lock_with_key:  | POST | `/v5/position/mode` |
| [getMultiAssetRiskLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2611) | :closed_lock_with_key:  | GET | `/v5/position/risk/limit` |
| [getMultiAssetRiskLimitTiers()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2623) | :closed_lock_with_key:  | GET | `/v5/position/risk/limit_tier` |
| [adjustMultiAssetMargin()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2636) | :closed_lock_with_key:  | POST | `/v5/position/margin` |
| [getMultiAssetMarketRiskLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2653) | :closed_lock_with_key:  | GET | `/v5/market/risk/limit` |
| [getMultiAssetFeeCurrencies()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2665) | :closed_lock_with_key:  | GET | `/v5/market/assets_deduction_currency` |
| [getMultiAssetCollateralAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2677) | :closed_lock_with_key:  | GET | `/v5/market/multi_assets_margin` |
| [getCoinMDeliveryAdjustFactor()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2694) |  | GET | `/api/v1/contract_adjustfactor` |
| [getCoinMDeliveryHistoricalOpenInterest()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2705) |  | GET | `/api/v1/contract_his_open_interest` |
| [getCoinMDeliveryTieredMargin()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2716) |  | GET | `/api/v1/contract_ladder_margin` |
| [getCoinMDeliveryAccountRatio()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2727) |  | GET | `/api/v1/contract_elite_account_ratio` |
| [getCoinMDeliveryPositionRatio()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2739) |  | GET | `/api/v1/contract_elite_position_ratio` |
| [getCoinMDeliveryLiquidationOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2751) |  | GET | `/api/v3/contract_liquidation_orders` |
| [getCoinMDeliverySettlementRecords()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2762) |  | GET | `/api/v1/contract_settlement_records` |
| [getCoinMDeliveryRiskReserveBalance()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2773) |  | GET | `/v1/insurance_fund_info` |
| [getCoinMDeliveryRiskReserveHistory()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2784) |  | GET | `/v1/insurance_fund_history` |
| [getCoinMDeliveryContractLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2795) |  | GET | `/api/v1/contract_price_limit` |
| [getCoinMDeliveryOpenInterest()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2806) |  | GET | `/api/v1/contract_open_interest` |
| [getCoinMDeliveryDeliveryPrice()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2819) |  | GET | `/api/v1/contract_delivery_price` |
| [getCoinMDeliveryEstimatedSettlementPrice()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2830) |  | GET | `/api/v1/contract_estimated_settlement_price` |
| [getCoinMDeliverySystemStatus()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2843) |  | GET | `/api/v1/contract_api_state` |
| [getCoinMDeliveryContractInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2854) |  | GET | `/api/v1/contract_contract_info` |
| [getCoinMDeliveryIndexPrice()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2865) |  | GET | `/api/v1/contract_index` |
| [getCoinMDeliveryIndexConstituents()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2876) |  | GET | `/api/market/contract_constituents` |
| [getCoinMDeliveryContractElements()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2887) |  | GET | `/api/v1/contract_query_elements` |
| [getCoinMDeliveryMarketDepth()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2904) |  | GET | `/market/depth` |
| [getCoinMDeliveryMarketBbo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2916) |  | GET | `/market/bbo` |
| [getCoinMDeliveryKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2927) |  | GET | `/market/history/kline` |
| [getCoinMDeliveryMarkKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2938) |  | GET | `/index/market/history/mark_price_kline` |
| [getCoinMDeliveryTicker()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2949) |  | GET | `/market/detail/merged` |
| [getCoinMDeliveryTickers()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2960) |  | GET | `/v2/market/detail/batch_merged` |
| [getCoinMDeliveryLastTrade()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2971) |  | GET | `/market/trade` |
| [getCoinMDeliveryTradeHistory()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2982) |  | GET | `/market/history/trade` |
| [getCoinMDeliveryIndexKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2994) |  | GET | `/index/market/history/index` |
| [getCoinMDeliveryBasisData()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3005) |  | GET | `/index/market/history/basis` |
| [getCoinMDeliveryAssetValuation()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3022) | :closed_lock_with_key:  | POST | `/api/v1/contract_balance_valuation` |
| [getCoinMDeliveryAccountInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3035) | :closed_lock_with_key:  | POST | `/api/v1/contract_account_info` |
| [getCoinMDeliveryPositionInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3048) | :closed_lock_with_key:  | POST | `/api/v1/contract_position_info` |
| [updateCoinMDeliverySubPermissions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3061) | :closed_lock_with_key:  | POST | `/api/v1/contract_sub_auth` |
| [getCoinMDeliverySubPermissions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3075) | :closed_lock_with_key:  | GET | `/api/v1/contract_sub_auth_list` |
| [getCoinMDeliverySubAccounts()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3086) | :closed_lock_with_key:  | POST | `/api/v1/contract_sub_account_list` |
| [getCoinMDeliverySubAccountsAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3099) | :closed_lock_with_key:  | POST | `/api/v1/contract_sub_account_info_list` |
| [getCoinMDeliverySubAccountAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3112) | :closed_lock_with_key:  | POST | `/api/v1/contract_sub_account_info` |
| [getCoinMDeliverySubPositionInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3126) | :closed_lock_with_key:  | POST | `/api/v1/contract_sub_position_info` |
| [getCoinMDeliveryFinancialRecords()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3140) | :closed_lock_with_key:  | POST | `/api/v3/contract_financial_record` |
| [getCoinMDeliveryFinancialRecordsExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3153) | :closed_lock_with_key:  | POST | `/api/v3/contract_financial_record_exact` |
| [getCoinMDeliveryUserSettlementRecords()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3166) | :closed_lock_with_key:  | POST | `/api/v1/contract_user_settlement_records` |
| [getCoinMDeliveryOrderLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3181) | :closed_lock_with_key:  | POST | `/api/v1/contract_order_limit` |
| [getCoinMDeliveryFee()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3194) | :closed_lock_with_key:  | POST | `/api/v1/contract_fee` |
| [getCoinMDeliveryTransferLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3207) | :closed_lock_with_key:  | POST | `/api/v1/contract_transfer_limit` |
| [getCoinMDeliveryPositionLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3220) | :closed_lock_with_key:  | POST | `/api/v1/contract_position_limit` |
| [getCoinMDeliveryAccountFull()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3233) | :closed_lock_with_key:  | POST | `/api/v1/contract_account_position_info` |
| [transferCoinMDeliveryMasterSub()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3246) | :closed_lock_with_key:  | POST | `/api/v1/contract_master_sub_transfer` |
| [getCoinMDeliveryMasterSubTransfers()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3259) | :closed_lock_with_key:  | POST | `/api/v1/contract_master_sub_transfer_record` |
| [getCoinMDeliveryApiStatus()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3272) | :closed_lock_with_key:  | GET | `/api/v1/contract_api_trading_status` |
| [getCoinMDeliveryAvailableLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3283) | :closed_lock_with_key:  | POST | `/api/v1/contract_available_level_rate` |
| [setCoinMDeliveryCancelAfter()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3302) | :closed_lock_with_key:  | POST | `/api/v1/contract-cancel-after` |
| [submitCoinMDeliveryOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3316) | :closed_lock_with_key:  | POST | `/api/v1/contract_order` |
| [submitCoinMDeliveryBatchOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3329) | :closed_lock_with_key:  | POST | `/api/v1/contract_batchorder` |
| [cancelCoinMDeliveryOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3342) | :closed_lock_with_key:  | POST | `/api/v1/contract_cancel` |
| [cancelCoinMDeliveryAllOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3355) | :closed_lock_with_key:  | POST | `/api/v1/contract_cancelall` |
| [updateCoinMDeliveryLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3368) | :closed_lock_with_key:  | POST | `/api/v1/contract_switch_lever_rate` |
| [getCoinMDeliveryOrderInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3382) | :closed_lock_with_key:  | POST | `/api/v1/contract_order_info` |
| [getCoinMDeliveryOrderDetail()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3395) | :closed_lock_with_key:  | POST | `/api/v1/contract_order_detail` |
| [getCoinMDeliveryOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3408) | :closed_lock_with_key:  | POST | `/api/v1/contract_openorders` |
| [getCoinMDeliveryHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3421) | :closed_lock_with_key:  | POST | `/api/v3/contract_hisorders` |
| [getCoinMDeliveryHistoryOrdersExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3434) | :closed_lock_with_key:  | POST | `/api/v3/contract_hisorders_exact` |
| [getCoinMDeliveryFills()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3447) | :closed_lock_with_key:  | POST | `/api/v3/contract_matchresults` |
| [getCoinMDeliveryFillsExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3460) | :closed_lock_with_key:  | POST | `/api/v3/contract_matchresults_exact` |
| [submitCoinMDeliveryLightningCloseOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3473) | :closed_lock_with_key:  | POST | `/api/v1/lightning_close_position` |
| [submitCoinMDeliveryTriggerOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3492) | :closed_lock_with_key:  | POST | `/api/v1/contract_trigger_order` |
| [cancelCoinMDeliveryTriggerOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3505) | :closed_lock_with_key:  | POST | `/api/v1/contract_trigger_cancel` |
| [cancelCoinMDeliveryAllTriggerOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3519) | :closed_lock_with_key:  | POST | `/api/v1/contract_trigger_cancelall` |
| [getCoinMDeliveryTriggerOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3532) | :closed_lock_with_key:  | POST | `/api/v1/contract_trigger_openorders` |
| [getCoinMDeliveryTriggerHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3545) | :closed_lock_with_key:  | POST | `/api/v1/contract_trigger_hisorders` |
| [submitCoinMDeliveryTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3558) | :closed_lock_with_key:  | POST | `/api/v1/contract_tpsl_order` |
| [cancelCoinMDeliveryTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3571) | :closed_lock_with_key:  | POST | `/api/v1/contract_tpsl_cancel` |
| [cancelCoinMDeliveryAllTpslOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3585) | :closed_lock_with_key:  | POST | `/api/v1/contract_tpsl_cancelall` |
| [getCoinMDeliveryTpslOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3598) | :closed_lock_with_key:  | POST | `/api/v1/contract_tpsl_openorders` |
| [getCoinMDeliveryTpslHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3611) | :closed_lock_with_key:  | POST | `/api/v1/contract_tpsl_hisorders` |
| [getCoinMDeliveryRelationTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3624) | :closed_lock_with_key:  | POST | `/api/v1/contract_relation_tpsl_order` |
| [submitCoinMDeliveryTrailingOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3638) | :closed_lock_with_key:  | POST | `/api/v1/contract_track_order` |
| [cancelCoinMDeliveryTrailingOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3651) | :closed_lock_with_key:  | POST | `/api/v1/contract_track_cancel` |
| [cancelCoinMDeliveryAllTrailingOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3665) | :closed_lock_with_key:  | POST | `/api/v1/contract_track_cancelall` |
| [getCoinMDeliveryTrailingOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3678) | :closed_lock_with_key:  | POST | `/api/v1/contract_track_openorders` |
| [getCoinMDeliveryTrailingHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3691) | :closed_lock_with_key:  | POST | `/api/v1/contract_track_hisorders` |
| [getCoinMPerpAdjustFactor()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3712) |  | GET | `/swap-api/v1/swap_adjustfactor` |
| [getCoinMPerpHistoricalOpenInterest()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3723) |  | GET | `/swap-api/v1/swap_his_open_interest` |
| [getCoinMPerpTieredMargin()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3734) |  | GET | `/swap-api/v1/swap_ladder_margin` |
| [getCoinMPerpAccountRatio()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3745) |  | GET | `/swap-api/v1/swap_elite_account_ratio` |
| [getCoinMPerpPositionRatio()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3757) |  | GET | `/swap-api/v1/swap_elite_position_ratio` |
| [getCoinMPerpEstimatedSettlementPrice()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3769) |  | GET | `/swap-api/v1/swap_estimated_settlement_price` |
| [getCoinMPerpSystemStatus()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3782) |  | GET | `/swap-api/v1/swap_api_state` |
| [getCoinMPerpFundingRate()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3793) |  | GET | `/swap-api/v1/swap_funding_rate` |
| [getCoinMPerpFundingRates()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3804) |  | GET | `/swap-api/v1/swap_batch_funding_rate` |
| [getCoinMPerpHistoricalFundingRate()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3815) |  | GET | `/swap-api/v1/swap_historical_funding_rate` |
| [getCoinMPerpLiquidationOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3828) |  | GET | `/swap-api/v3/swap_liquidation_orders` |
| [getCoinMPerpSettlementRecords()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3839) |  | GET | `/swap-api/v1/swap_settlement_records` |
| [getCoinMPerpContractInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3850) |  | GET | `/swap-api/v1/swap_contract_info` |
| [getCoinMPerpIndexPrice()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3861) |  | GET | `/swap-api/v1/swap_index` |
| [getCoinMPerpContractElements()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3872) |  | GET | `/swap-api/v1/swap_query_elements` |
| [getCoinMPerpIndexConstituents()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3883) |  | GET | `/swap-api/market/swap_constituents` |
| [getCoinMPerpRiskReserveBalance()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3894) |  | GET | `/v1/insurance_fund_info` |
| [getCoinMPerpRiskReserveHistory()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3905) |  | GET | `/v1/insurance_fund_history` |
| [getCoinMPerpPriceLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3916) |  | GET | `/swap-api/v1/swap_price_limit` |
| [getCoinMPerpOpenInterest()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3927) |  | GET | `/swap-api/v1/swap_open_interest` |
| [getCoinMPerpMarketDepth()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3944) |  | GET | `/swap-ex/market/depth` |
| [getCoinMPerpMarketBbo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3956) |  | GET | `/swap-ex/market/bbo` |
| [getCoinMPerpKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3967) |  | GET | `/swap-ex/market/history/kline` |
| [getCoinMPerpMarkKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3978) |  | GET | `/index/market/history/swap_mark_price_kline` |
| [getCoinMPerpTicker()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3989) |  | GET | `/swap-ex/market/detail/merged` |
| [getCoinMPerpTickers()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4000) |  | GET | `/v2/swap-ex/market/detail/batch_merged` |
| [getCoinMPerpLastTrade()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4011) |  | GET | `/swap-ex/market/trade` |
| [getCoinMPerpTradeHistory()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4022) |  | GET | `/swap-ex/market/history/trade` |
| [getCoinMPerpPremiumIndexKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4034) |  | GET | `/index/market/history/swap_premium_index_kline` |
| [getCoinMPerpFundingRateKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4045) |  | GET | `/index/market/history/swap_estimated_rate_kline` |
| [getCoinMPerpBasisData()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4056) |  | GET | `/index/market/history/swap_basis` |
| [getCoinMPerpAssetValuation()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4073) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_balance_valuation` |
| [getCoinMPerpAccountInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4086) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_account_info` |
| [getCoinMPerpPositionInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4099) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_position_info` |
| [getCoinMPerpAccountFull()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4112) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_account_position_info` |
| [getCoinMPerpSubPermissions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4125) | :closed_lock_with_key:  | GET | `/swap-api/v1/swap_sub_auth_list` |
| [updateCoinMPerpSubPermissions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4136) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_sub_auth` |
| [getCoinMPerpSubAccounts()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4150) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_sub_account_list` |
| [getCoinMPerpSubAccountsAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4163) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_sub_account_info_list` |
| [getCoinMPerpSubAccountAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4176) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_sub_account_info` |
| [getCoinMPerpSubPositions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4190) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_sub_position_info` |
| [getCoinMPerpFinancialRecords()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4204) | :closed_lock_with_key:  | POST | `/swap-api/v3/swap_financial_record` |
| [getCoinMPerpFinancialRecordsExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4217) | :closed_lock_with_key:  | POST | `/swap-api/v3/swap_financial_record_exact` |
| [getCoinMPerpAvailableLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4230) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_available_level_rate` |
| [getCoinMPerpOrderLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4243) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_order_limit` |
| [getCoinMPerpFee()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4256) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_fee` |
| [getCoinMPerpTransferLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4269) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_transfer_limit` |
| [getCoinMPerpPositionLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4282) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_position_limit` |
| [transferCoinMPerpMasterSub()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4295) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_master_sub_transfer` |
| [getCoinMPerpMasterSubTransfers()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4308) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_master_sub_transfer_record` |
| [getCoinMPerpApiStatus()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4321) | :closed_lock_with_key:  | GET | `/swap-api/v1/swap_api_trading_status` |
| [setCoinMPerpCancelAfter()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4338) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap-cancel-after` |
| [submitCoinMPerpOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4352) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_order` |
| [submitCoinMPerpBatchOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4365) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_batchorder` |
| [cancelCoinMPerpOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4378) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_cancel` |
| [cancelCoinMPerpAllOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4391) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_cancelall` |
| [updateCoinMPerpLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4404) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_switch_lever_rate` |
| [getCoinMPerpOrderInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4418) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_order_info` |
| [getCoinMPerpOrderDetail()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4431) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_order_detail` |
| [getCoinMPerpOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4444) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_openorders` |
| [getCoinMPerpHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4457) | :closed_lock_with_key:  | POST | `/swap-api/v3/swap_hisorders` |
| [getCoinMPerpHistoryOrdersExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4470) | :closed_lock_with_key:  | POST | `/swap-api/v3/swap_hisorders_exact` |
| [getCoinMPerpFills()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4483) | :closed_lock_with_key:  | POST | `/swap-api/v3/swap_matchresults` |
| [getCoinMPerpFillsExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4496) | :closed_lock_with_key:  | POST | `/swap-api/v3/swap_matchresults_exact` |
| [submitCoinMPerpLightningCloseOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4509) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_lightning_close_position` |
| [submitCoinMPerpTriggerOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4528) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_trigger_order` |
| [cancelCoinMPerpTriggerOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4541) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_trigger_cancel` |
| [cancelCoinMPerpAllTriggerOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4555) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_trigger_cancelall` |
| [getCoinMPerpTriggerOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4568) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_trigger_openorders` |
| [getCoinMPerpTriggerHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4581) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_trigger_hisorders` |
| [submitCoinMPerpTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4594) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_tpsl_order` |
| [cancelCoinMPerpTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4607) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_tpsl_cancel` |
| [cancelCoinMPerpAllTpslOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4620) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_tpsl_cancelall` |
| [getCoinMPerpTpslOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4633) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_tpsl_openorders` |
| [getCoinMPerpTpslHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4646) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_tpsl_hisorders` |
| [getCoinMPerpRelationTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4659) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_relation_tpsl_order` |
| [submitCoinMPerpTrailingOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4672) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_track_order` |
| [cancelCoinMPerpTrailingOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4685) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_track_cancel` |
| [cancelCoinMPerpAllTrailingOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4698) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_track_cancelall` |
| [getCoinMPerpTrailingOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4711) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_track_openorders` |
| [getCoinMPerpTrailingHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4724) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_track_hisorders` |
| [getCopyTraderInstruments()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4743) | :closed_lock_with_key:  | GET | `/api/v6/copyTrading/trader/instruments` |
| [getCopyTraderStatistics()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4754) | :closed_lock_with_key:  | GET | `/api/v6/copyTrading/trader/statistics` |
| [getCopyTraderProfitSharingHistory()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4765) | :closed_lock_with_key:  | GET | `/api/v6/copyTrading/trader/profit-sharing-history` |
| [getCopyTraderProfitSharingHistorySummary()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4781) | :closed_lock_with_key:  | GET | `/api/v6/copyTrading/trader/profit-sharing-history-summary` |
| [getCopyTraderUPNLSharingSummary()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4797) | :closed_lock_with_key:  | GET | `/api/v6/copyTrading/trader/unrealized-profit-sharing-summary` |
| [getCopyTraderFollowers()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4813) | :closed_lock_with_key:  | GET | `/api/v6/copyTrading/trader/followers` |
| [removeCopyTraderFollower()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4824) | :closed_lock_with_key:  | POST | `/api/v6/copyTrading/trader/follower` |
| [submitCopyTraderTransfer()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4839) | :closed_lock_with_key:  | POST | `/api/v6/copyTrading/trader/transfer` |
| [updateCopyTraderFollowerSettings()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4852) | :closed_lock_with_key:  | POST | `/api/v6/copyTrading/trader/follower-settings` |
| [getCopyTraderConfig()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4865) | :closed_lock_with_key:  | POST | `/api/v6/copyTrading/trader/config` |
| [createCopyTraderApikey()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4878) | :closed_lock_with_key:  | POST | `/api/v6/copyTrading/trader/apikey` |

# WebsocketAPIClient.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [WebsocketAPIClient.ts](/src/WebsocketAPIClient.ts). 

This client provides WebSocket API endpoints which allow for faster interactions with the HTX API via a WebSocket connection.

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [submitSpotOrder()](https://github.com/sieblyio/htx-api/blob/main/src/WebsocketAPIClient.ts#L74) | :closed_lock_with_key:  | WS | `create-order` |
| [submitSpotBatchOrders()](https://github.com/sieblyio/htx-api/blob/main/src/WebsocketAPIClient.ts#L84) | :closed_lock_with_key:  | WS | `create-batchorder` |
| [submitSpotMarginOrder()](https://github.com/sieblyio/htx-api/blob/main/src/WebsocketAPIClient.ts#L94) | :closed_lock_with_key:  | WS | `create-margin-order` |
| [cancelSpotOrders()](https://github.com/sieblyio/htx-api/blob/main/src/WebsocketAPIClient.ts#L104) | :closed_lock_with_key:  | WS | `cancel` |
| [cancelAllSpotOrders()](https://github.com/sieblyio/htx-api/blob/main/src/WebsocketAPIClient.ts#L114) | :closed_lock_with_key:  | WS | `cancelall` |
| [submitLinearSwapOrder()](https://github.com/sieblyio/htx-api/blob/main/src/WebsocketAPIClient.ts#L124) | :closed_lock_with_key:  | WS | `create_order` |
| [submitLinearSwapCrossOrder()](https://github.com/sieblyio/htx-api/blob/main/src/WebsocketAPIClient.ts#L134) | :closed_lock_with_key:  | WS | `create_cross_order` |
| [submitLinearSwapBatchOrders()](https://github.com/sieblyio/htx-api/blob/main/src/WebsocketAPIClient.ts#L146) | :closed_lock_with_key:  | WS | `create_batchorder` |
| [submitLinearSwapCrossBatchOrders()](https://github.com/sieblyio/htx-api/blob/main/src/WebsocketAPIClient.ts#L158) | :closed_lock_with_key:  | WS | `create_cross_batchorder` |
| [cancelLinearSwapOrder()](https://github.com/sieblyio/htx-api/blob/main/src/WebsocketAPIClient.ts#L170) | :closed_lock_with_key:  | WS | `cancel` |
| [cancelLinearSwapCrossOrder()](https://github.com/sieblyio/htx-api/blob/main/src/WebsocketAPIClient.ts#L180) | :closed_lock_with_key:  | WS | `cross_cancel` |
| [cancelAllLinearSwapOrders()](https://github.com/sieblyio/htx-api/blob/main/src/WebsocketAPIClient.ts#L190) | :closed_lock_with_key:  | WS | `cancelall` |
| [cancelAllLinearSwapCrossOrders()](https://github.com/sieblyio/htx-api/blob/main/src/WebsocketAPIClient.ts#L200) | :closed_lock_with_key:  | WS | `cross_cancelall` |
| [placeLinearSwapOrder()](https://github.com/sieblyio/htx-api/blob/main/src/WebsocketAPIClient.ts#L212) | :closed_lock_with_key:  | WS | `place_order` |
| [placeLinearSwapBatchOrders()](https://github.com/sieblyio/htx-api/blob/main/src/WebsocketAPIClient.ts#L222) | :closed_lock_with_key:  | WS | `place_batch_orders` |
| [cancelLinearSwapV5Order()](https://github.com/sieblyio/htx-api/blob/main/src/WebsocketAPIClient.ts#L234) | :closed_lock_with_key:  | WS | `cancel_order` |
| [cancelLinearSwapV5BatchOrders()](https://github.com/sieblyio/htx-api/blob/main/src/WebsocketAPIClient.ts#L244) | :closed_lock_with_key:  | WS | `cancel_batch_orders` |
| [cancelAllLinearSwapV5Orders()](https://github.com/sieblyio/htx-api/blob/main/src/WebsocketAPIClient.ts#L256) | :closed_lock_with_key:  | WS | `cancel_all_orders` |
| [submitCoinDeliveryOrder()](https://github.com/sieblyio/htx-api/blob/main/src/WebsocketAPIClient.ts#L268) | :closed_lock_with_key:  | WS | `create_order` |
| [submitCoinDeliveryBatchOrders()](https://github.com/sieblyio/htx-api/blob/main/src/WebsocketAPIClient.ts#L278) | :closed_lock_with_key:  | WS | `create_batchorder` |
| [cancelCoinDeliveryOrder()](https://github.com/sieblyio/htx-api/blob/main/src/WebsocketAPIClient.ts#L290) | :closed_lock_with_key:  | WS | `cancel` |
| [cancelAllCoinDeliveryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/WebsocketAPIClient.ts#L300) | :closed_lock_with_key:  | WS | `cancelall` |
| [submitCoinSwapOrder()](https://github.com/sieblyio/htx-api/blob/main/src/WebsocketAPIClient.ts#L310) | :closed_lock_with_key:  | WS | `create_order` |
| [submitCoinSwapBatchOrders()](https://github.com/sieblyio/htx-api/blob/main/src/WebsocketAPIClient.ts#L320) | :closed_lock_with_key:  | WS | `create_batchorder` |
| [cancelCoinSwapOrder()](https://github.com/sieblyio/htx-api/blob/main/src/WebsocketAPIClient.ts#L332) | :closed_lock_with_key:  | WS | `cancel` |
| [cancelAllCoinSwapOrders()](https://github.com/sieblyio/htx-api/blob/main/src/WebsocketAPIClient.ts#L342) | :closed_lock_with_key:  | WS | `cancelall` |
