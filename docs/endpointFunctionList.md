
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

This can be used to easily find which method to call, once you have [found which endpoint you're looking to use](https://github.com/sieblyio/awesome-crypto-examples/wiki/How-to-find-SDK-functions-that-match-API-docs-endpoint).

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
| [getMarketStatus()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L185) |  | GET | `/v2/market-status` |
| [getTimestamp()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L194) |  | GET | `/v1/common/timestamp` |
| [getTradingSymbols()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L203) |  | GET | `/v2/settings/common/symbols` |
| [getCurrencies()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L214) |  | GET | `/v2/settings/common/currencies` |
| [getCurrencysSettings()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L225) |  | GET | `/v1/settings/common/currencys` |
| [getSymbolsSettings()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L236) |  | GET | `/v1/settings/common/symbols` |
| [getMarketSymbolsSettings()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L247) |  | GET | `/v1/settings/common/market-symbols` |
| [getChainsInfo()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L259) |  | GET | `/v1/settings/common/chains` |
| [getReferenceCurrencies()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L270) |  | GET | `/v2/reference/currencies` |
| [getKlines()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L288) |  | GET | `/market/history/kline` |
| [getTicker()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L299) |  | GET | `/market/detail/merged` |
| [getTickers()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L310) |  | GET | `/market/tickers` |
| [getMarketDepth()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L319) |  | GET | `/market/depth` |
| [getLastTrade()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L330) |  | GET | `/market/trade` |
| [getHistoryTrades()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L341) |  | GET | `/market/history/trade` |
| [get24hMarketSummary()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L353) |  | GET | `/market/detail` |
| [getFullOrderBook()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L364) |  | GET | `/market/fullMbp` |
| [getAccounts()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L381) | :closed_lock_with_key:  | GET | `/v1/account/accounts` |
| [getAccountBalance()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L390) | :closed_lock_with_key:  | GET | `/v1/account/accounts/{accountId}/balance` |
| [getAccountValuation()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L401) | :closed_lock_with_key:  | GET | `/v2/account/valuation` |
| [getAssetValuation()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L413) | :closed_lock_with_key:  | GET | `/v2/account/asset-valuation` |
| [submitTransfer()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L424) | :closed_lock_with_key:  | POST | `/v1/account/transfer` |
| [getAccountHistory()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L435) | :closed_lock_with_key:  | GET | `/v1/account/history` |
| [getAccountLedger()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L448) | :closed_lock_with_key:  | GET | `/v2/account/ledger` |
| [submitV2AccountTransfer()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L461) | :closed_lock_with_key:  | POST | `/v2/account/transfer` |
| [submitUniversalTransfer()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L472) | :closed_lock_with_key:  | POST | `/v5/account/universal_transfer` |
| [getUniversalTransferRecords()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L483) | :closed_lock_with_key:  | GET | `/v5/account/universal_transfer_records` |
| [submitFuturesTransfer()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L494) | :closed_lock_with_key:  | POST | `/v1/futures/transfer` |
| [getPointBalance()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L505) | :closed_lock_with_key:  | GET | `/v2/point/account` |
| [submitPointTransfer()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L516) | :closed_lock_with_key:  | POST | `/v2/point/transfer` |
| [getAccountSwitchUserInfo()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L527) | :closed_lock_with_key:  | GET | `/v1/account/switch/user/info` |
| [getAccountOverviewInfo()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L538) | :closed_lock_with_key:  | GET | `/v1/account/overview/info` |
| [updateFeeDeductionMethod()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L549) | :closed_lock_with_key:  | POST | `/v1/account/fee/switch` |
| [submitOrder()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L567) | :closed_lock_with_key:  | POST | `/v1/order/orders/place` |
| [submitBatchOrders()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L579) | :closed_lock_with_key:  | POST | `/v1/order/batch-orders` |
| [submitMarginOrder()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L593) | :closed_lock_with_key:  | POST | `/v1/order/auto/place` |
| [cancelOrderById()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L605) | :closed_lock_with_key:  | POST | `/v1/order/orders/{orderId}/submitcancel` |
| [cancelOrderByClientId()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L620) | :closed_lock_with_key:  | POST | `/v1/order/orders/submitCancelClientOrder` |
| [cancelAllOrders()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L633) | :closed_lock_with_key:  | GET | `/v1/order/cancelAllOrders` |
| [getOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L644) | :closed_lock_with_key:  | GET | `/v1/order/openOrders` |
| [batchCancelOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L655) | :closed_lock_with_key:  | POST | `/v1/order/orders/batchCancelOpenOrders` |
| [batchCancelOrders()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L668) | :closed_lock_with_key:  | POST | `/v1/order/orders/batchcancel` |
| [setCancelAllAfter()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L680) | :closed_lock_with_key:  | POST | `/v2/algo-orders/cancel-all-after` |
| [getOrder()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L693) | :closed_lock_with_key:  | GET | `/v1/order/orders/{orderId}` |
| [getOrderByClientId()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L704) | :closed_lock_with_key:  | GET | `/v1/order/orders/getClientOrder` |
| [getOrderMatch()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L715) | :closed_lock_with_key:  | GET | `/v1/order/orders/{orderId}/matchresults` |
| [getOrderHistory()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L726) | :closed_lock_with_key:  | GET | `/v1/order/orders` |
| [getOrderHistory48h()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L737) | :closed_lock_with_key:  | GET | `/v1/order/history` |
| [getMatchResults()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L748) | :closed_lock_with_key:  | GET | `/v1/order/matchresults` |
| [getFeeRate()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L759) | :closed_lock_with_key:  | GET | `/v2/reference/transact-fee-rate` |
| [placeConditionalOrder()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L776) | :closed_lock_with_key:  | POST | `/v2/algo-orders` |
| [cancelConditionalOrders()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L788) | :closed_lock_with_key:  | POST | `/v2/algo-orders/cancellation` |
| [getOpenConditionalOrders()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L799) | :closed_lock_with_key:  | GET | `/v2/algo-orders/opening` |
| [getConditionalOrderHistory()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L810) | :closed_lock_with_key:  | GET | `/v2/algo-orders/history` |
| [getConditionalOrder()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L821) | :closed_lock_with_key:  | GET | `/v2/algo-orders/specific` |
| [getRepaymentRecords()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L838) | :closed_lock_with_key:  | GET | `/v2/account/repayment` |
| [repayMarginLoan()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L851) | :closed_lock_with_key:  | POST | `/v2/account/repayment` |
| [transferSpotToIsolatedMargin()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L862) | :closed_lock_with_key:  | POST | `/v1/dw/transfer-in/margin` |
| [transferIsolatedMarginToSpot()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L873) | :closed_lock_with_key:  | POST | `/v1/dw/transfer-out/margin` |
| [getMarginLoanInfo()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L884) | :closed_lock_with_key:  | GET | `/v1/margin/loan-info` |
| [requestMarginLoan()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L895) | :closed_lock_with_key:  | POST | `/v1/margin/orders` |
| [repayMarginLoanIsolated()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L906) | :closed_lock_with_key:  | POST | `/v1/margin/orders/{orderId}/repay` |
| [getMarginLoanOrders()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L921) | :closed_lock_with_key:  | GET | `/v1/margin/loan-orders` |
| [getMarginAccountBalance()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L932) | :closed_lock_with_key:  | GET | `/v1/margin/accounts/balance` |
| [transferSpotToCrossMargin()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L944) | :closed_lock_with_key:  | POST | `/v1/cross-margin/transfer-in` |
| [transferCrossMarginToSpot()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L956) | :closed_lock_with_key:  | POST | `/v1/cross-margin/transfer-out` |
| [getCrossMarginLoanInfo()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L968) | :closed_lock_with_key:  | GET | `/v1/cross-margin/loan-info` |
| [requestCrossMarginLoan()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L979) | :closed_lock_with_key:  | POST | `/v1/cross-margin/orders` |
| [repayCrossMarginLoan()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L991) | :closed_lock_with_key:  | POST | `/v1/cross-margin/orders/{orderId}/repay` |
| [getCrossMarginLoanOrders()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1006) | :closed_lock_with_key:  | GET | `/v1/cross-margin/loan-orders` |
| [getCrossMarginBalance()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1017) | :closed_lock_with_key:  | GET | `/v1/cross-margin/accounts/balance` |
| [getCrossMarginLimit()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1028) | :closed_lock_with_key:  | GET | `/v2/margin/limit` |
| [getDepositAddress()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1045) | :closed_lock_with_key:  | GET | `/v2/account/deposit/address` |
| [getWithdrawQuota()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1056) | :closed_lock_with_key:  | GET | `/v2/account/withdraw/quota` |
| [getWithdrawAddress()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1067) | :closed_lock_with_key:  | GET | `/v2/account/withdraw/address` |
| [submitWithdraw()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1080) | :closed_lock_with_key:  | POST | `/v1/dw/withdraw/api/create` |
| [getWithdrawByClientId()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1091) | :closed_lock_with_key:  | GET | `/v1/query/withdraw/client-order-id` |
| [cancelWithdraw()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1102) | :closed_lock_with_key:  | POST | `/v1/dw/withdraw-virtual/{withdrawId}/cancel` |
| [getDepositWithdrawHistory()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1116) | :closed_lock_with_key:  | GET | `/v1/query/deposit-withdraw` |
| [getVaspList()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1127) |  | GET | `/v1/query/vasp-list` |
| [getBrokerUserRebateStatus()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1142) | :closed_lock_with_key:  | GET | `/broker/v1/user_rebate_status` |
| [setBrokerSubUserFeeRate()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1168) | :closed_lock_with_key:  | POST | `/broker/v1/sub-user/fee_rate/add` |
| [getBrokerAccountCapitalSnapshot()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1181) | :closed_lock_with_key:  | POST | `/broker/v1/account_capital_snapshot_everyday` |
| [updateSubUserDeductMode()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1200) | :closed_lock_with_key:  | POST | `/v2/sub-user/deduct-mode` |
| [getSubUserApiKey()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1212) | :closed_lock_with_key:  | GET | `/v2/user/api-key` |
| [getUserUid()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1224) | :closed_lock_with_key:  | GET | `/v2/user/uid` |
| [getSubUserList()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1247) | :closed_lock_with_key:  | GET | `/v2/sub-user/user-list` |
| [updateSubUserLockStatus()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1258) | :closed_lock_with_key:  | POST | `/v2/sub-user/management` |
| [getSubUserStatus()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1270) | :closed_lock_with_key:  | GET | `/v2/sub-user/user-state` |
| [setSubUserTradableMarket()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1281) | :closed_lock_with_key:  | POST | `/v2/sub-user/tradable-market` |
| [setSubUserTransferPermissions()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1292) | :closed_lock_with_key:  | POST | `/v2/sub-user/transferability` |
| [getSubUserAccounts()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1303) | :closed_lock_with_key:  | GET | `/v2/sub-user/account-list` |
| [createSubUserApiKey()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1314) | :closed_lock_with_key:  | POST | `/v2/sub-user/api-key-generation` |
| [updateSubUserApiKey()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1327) | :closed_lock_with_key:  | POST | `/v2/sub-user/api-key-modification` |
| [deleteSubUserApiKey()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1340) | :closed_lock_with_key:  | POST | `/v2/sub-user/api-key-deletion` |
| [submitSubUserTransfer()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1354) | :closed_lock_with_key:  | POST | `/v1/subuser/transfer` |
| [getSubUserDepositAddress()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1365) | :closed_lock_with_key:  | GET | `/v2/sub-user/deposit-address` |
| [getSubUserDepositHistory()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1377) | :closed_lock_with_key:  | GET | `/v2/sub-user/query-deposit` |
| [getSubUsersAggregatedBalance()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1390) | :closed_lock_with_key:  | GET | `/v1/subuser/aggregate-balance` |
| [getSubUserBalance()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1401) | :closed_lock_with_key:  | GET | `/v1/account/accounts/{subUid}` |
| [getSubUserEntrustUserList()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1412) | :closed_lock_with_key:  | GET | `/v2/sub-user/entrust-user-list` |
| [getSubUserManagedTransferHistory()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1428) | :closed_lock_with_key:  | GET | `/v2/sub-user/managed-transfer-history` |
| [getReferralRebateDetail()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1444) | :closed_lock_with_key:  | GET | `/v2/invitee/rebate/detail` |
| [getReferralRebateHistory()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1455) | :closed_lock_with_key:  | GET | `/v2/invitee/rebate/history` |
| [getReferralAllRebateDetail()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1466) | :closed_lock_with_key:  | GET | `/v2/invitee/rebate/all_rebate/detail` |
| [getReferralMultipleRebateDetail()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1479) | :closed_lock_with_key:  | GET | `/v2/invitee/rebate/batcher_rebate/detail` |
| [getReferralInvitedUserList()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1490) | :closed_lock_with_key:  | GET | `/v2/invitee/rebate/referrals` |
| [getP2POrderHistory()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1509) |  | GET | `/v1/api/c2c/order/history` |
| [getEarnProjectList()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1529) | :closed_lock_with_key:  | GET | `/v1/earn/project/queryEarnProjectList` |
| [earnSubscribe()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1542) | :closed_lock_with_key:  | POST | `/v1/earn/order/demand/add` |
| [earnRedeem()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1553) | :closed_lock_with_key:  | POST | `/v1/earn/order/demand/redeem-order` |
| [getEarnUserAssets()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1566) | :closed_lock_with_key:  | GET | `/v1/earn/order/user/assets/list` |

# FuturesClient.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [FuturesClient.ts](/src/FuturesClient.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [getTimestamp()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L430) |  | GET | `/api/v1/timestamp` |
| [getHeartbeat()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L440) |  | GET | `/heartbeat/` |
| [getLinearSwapAccountType()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L456) | :closed_lock_with_key:  | GET | `/linear-swap-api/v3/swap_unified_account_type` |
| [updateLinearSwapAccountType()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L472) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_switch_account_type` |
| [getLinearSwapFundingRate()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L488) |  | GET | `/linear-swap-api/v1/swap_funding_rate` |
| [getLinearSwapFundingRates()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L500) |  | GET | `/linear-swap-api/v1/swap_batch_funding_rate` |
| [getLinearSwapHistoricalFundingRate()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L512) |  | GET | `/linear-swap-api/v1/swap_historical_funding_rate` |
| [getLinearSwapLiquidationOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L524) |  | GET | `/linear-swap-api/v3/swap_liquidation_orders` |
| [getLinearSwapSettlementRecords()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L536) |  | GET | `/linear-swap-api/v1/swap_settlement_records` |
| [getLinearSwapNetAccountRatio()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L548) |  | GET | `/linear-swap-api/v1/swap_elite_account_ratio` |
| [getLinearSwapNetPositionRatio()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L561) |  | GET | `/linear-swap-api/v1/swap_elite_position_ratio` |
| [getLinearSwapIsolatedSystemStatus()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L574) |  | GET | `/linear-swap-api/v1/swap_api_state` |
| [getLinearSwapCrossTieredMargin()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L587) |  | GET | `/linear-swap-api/v1/swap_cross_ladder_margin` |
| [getLinearSwapIsolatedTieredMargin()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L599) |  | GET | `/linear-swap-api/v1/swap_ladder_margin` |
| [getLinearSwapEstimatedSettlementPrice()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L612) |  | GET | `/linear-swap-api/v1/swap_estimated_settlement_price` |
| [getLinearSwapIsolatedAdjustFactor()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L627) |  | GET | `/linear-swap-api/v1/swap_adjustfactor` |
| [getLinearSwapCrossAdjustFactor()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L640) |  | GET | `/linear-swap-api/v1/swap_cross_adjustfactor` |
| [getLinearSwapRiskReserveBalance()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L652) |  | GET | `/v1/insurance_fund_info` |
| [getLinearSwapRiskReserveHistory()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L664) |  | GET | `/v1/insurance_fund_history` |
| [getLinearSwapContractPriceLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L676) |  | GET | `/linear-swap-api/v1/swap_price_limit` |
| [getLinearSwapOpenInterest()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L688) |  | GET | `/linear-swap-api/v1/swap_open_interest` |
| [getLinearSwapContractInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L700) |  | GET | `/linear-swap-api/v1/swap_contract_info` |
| [getLinearSwapIndexPrice()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L712) |  | GET | `/linear-swap-api/v1/swap_index` |
| [getLinearSwapIndexConstituents()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L724) |  | GET | `/linear-swap-api/market/swap_contract_constituents` |
| [getLinearSwapContractElements()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L739) |  | GET | `/linear-swap-api/v1/swap_query_elements` |
| [getLinearSwapMarketDepth()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L757) |  | GET | `/linear-swap-ex/market/depth` |
| [getLinearSwapMarketBbo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L770) |  | GET | `/linear-swap-ex/market/bbo` |
| [getLinearSwapKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L783) |  | GET | `/linear-swap-ex/market/history/kline` |
| [getLinearSwapMarkKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L794) |  | GET | `/index/market/history/linear_swap_mark_price_kline` |
| [getLinearSwapTicker()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L808) |  | GET | `/linear-swap-ex/market/detail/merged` |
| [getLinearSwapTickers()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L820) |  | GET | `/v2/linear-swap-ex/market/detail/batch_merged` |
| [getLinearSwapLastTrade()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L833) |  | GET | `/linear-swap-ex/market/trade` |
| [getLinearSwapTradeHistory()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L845) |  | GET | `/linear-swap-ex/market/history/trade` |
| [getLinearSwapHistoricalOpenInterest()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L858) |  | GET | `/linear-swap-api/v1/swap_his_open_interest` |
| [getLinearSwapPremiumIndexKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L869) |  | GET | `/index/market/history/linear_swap_premium_index_kline` |
| [getLinearSwapFundingRateKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L883) |  | GET | `/index/market/history/linear_swap_estimated_rate_kline` |
| [getLinearSwapBasisData()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L897) |  | GET | `/index/market/history/linear_swap_basis` |
| [getLinearSwapAssetValuation()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L915) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_balance_valuation` |
| [getLinearSwapIsolatedAccountInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L928) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_account_info` |
| [getLinearSwapCrossAccountInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L941) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_account_info` |
| [getLinearSwapIsolatedPositions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L954) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_position_info` |
| [getLinearSwapCrossPositions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L967) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_position_info` |
| [getLinearSwapIsolatedAccountFull()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L980) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_account_position_info` |
| [getLinearSwapCrossAccountFull()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L993) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_account_position_info` |
| [updateLinearSwapSubPermissions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1007) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_sub_auth` |
| [getLinearSwapSubPermissions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1021) | :closed_lock_with_key:  | GET | `/linear-swap-api/v1/swap_sub_auth_list` |
| [getLinearSwapIsolatedSubAccounts()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1032) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_sub_account_list` |
| [getLinearSwapCrossSubAccounts()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1045) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_sub_account_list` |
| [getLinearSwapIsolatedSubAccountsAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1058) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_sub_account_info_list` |
| [getLinearSwapCrossSubAccountsAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1071) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_sub_account_info_list` |
| [getLinearSwapIsolatedSubAccountAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1085) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_sub_account_info` |
| [getLinearSwapCrossSubAccountAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1099) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_sub_account_info` |
| [getLinearSwapIsolatedSubPositions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1113) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_sub_position_info` |
| [getLinearSwapCrossSubPositions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1127) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_sub_position_info` |
| [getLinearSwapFinancialRecords()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1141) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_financial_record` |
| [getLinearSwapFinancialRecordsExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1154) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_financial_record_exact` |
| [getLinearSwapIsolatedAvailableLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1167) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_available_level_rate` |
| [getLinearSwapCrossAvailableLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1180) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_available_level_rate` |
| [getLinearSwapOrderLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1194) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_order_limit` |
| [getLinearSwapFee()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1207) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_fee` |
| [getLinearSwapIsolatedTransferLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1220) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_transfer_limit` |
| [getLinearSwapCrossTransferLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1233) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_transfer_limit` |
| [getLinearSwapIsolatedPositionLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1246) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_position_limit` |
| [getLinearSwapCrossPositionLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1259) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_position_limit` |
| [getLinearSwapIsolatedLeverageLimits()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1272) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_lever_position_limit` |
| [getLinearSwapCrossLeverageLimits()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1286) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_lever_position_limit` |
| [transferLinearSwapMasterSub()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1302) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_master_sub_transfer` |
| [getLinearSwapMasterSubTransfers()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1315) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_master_sub_transfer_record` |
| [transferLinearSwapInner()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1331) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_transfer_inner` |
| [setLinearSwapCancelAfter()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1350) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/linear-cancel-after` |
| [getLinearSwapCrossTradeState()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1364) | :closed_lock_with_key:  | GET | `/linear-swap-api/v1/swap_cross_trade_state` |
| [getLinearSwapCrossTransferState()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1378) | :closed_lock_with_key:  | GET | `/linear-swap-api/v1/swap_cross_transfer_state` |
| [updateLinearSwapIsolatedPositionMode()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1392) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_switch_position_mode` |
| [updateLinearSwapCrossPositionMode()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1406) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_switch_position_mode` |
| [submitLinearSwapIsolatedOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1423) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_order` |
| [submitLinearSwapCrossOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1436) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_order` |
| [submitLinearSwapIsolatedBatchOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1449) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_batchorder` |
| [submitLinearSwapCrossBatchOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1462) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_batchorder` |
| [cancelLinearSwapIsolatedOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1475) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cancel` |
| [cancelLinearSwapCrossOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1488) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_cancel` |
| [cancelLinearSwapIsolatedAllOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1501) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cancelall` |
| [cancelLinearSwapCrossAllOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1514) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_cancelall` |
| [updateLinearSwapIsolatedLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1527) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_switch_lever_rate` |
| [updateLinearSwapCrossLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1541) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_switch_lever_rate` |
| [getLinearSwapIsolatedOrderInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1557) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_order_info` |
| [getLinearSwapCrossOrderInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1570) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_order_info` |
| [getLinearSwapIsolatedOrderDetail()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1583) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_order_detail` |
| [getLinearSwapCrossOrderDetail()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1596) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_order_detail` |
| [getLinearSwapIsolatedOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1609) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_openorders` |
| [getLinearSwapCrossOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1622) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_openorders` |
| [getLinearSwapIsolatedHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1635) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_hisorders` |
| [getLinearSwapCrossHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1648) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_cross_hisorders` |
| [getLinearSwapIsolatedHistoryOrdersExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1661) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_hisorders_exact` |
| [getLinearSwapCrossHistoryOrdersExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1674) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_cross_hisorders_exact` |
| [getLinearSwapIsolatedFills()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1687) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_matchresults` |
| [getLinearSwapCrossFills()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1700) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_cross_matchresults` |
| [getLinearSwapIsolatedFillsExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1713) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_matchresults_exact` |
| [getLinearSwapCrossFillsExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1726) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_cross_matchresults_exact` |
| [submitLinearSwapIsolatedLightningCloseOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1742) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_lightning_close_position` |
| [submitLinearSwapCrossLightningCloseOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1758) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_lightning_close_position` |
| [getLinearSwapIsolatedPositionMode()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1772) | :closed_lock_with_key:  | GET | `/linear-swap-api/v1/swap_position_side` |
| [getLinearSwapCrossPositionMode()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1783) | :closed_lock_with_key:  | GET | `/linear-swap-api/v1/swap_cross_position_side` |
| [submitLinearSwapIsolatedTriggerOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1803) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_trigger_order` |
| [submitLinearSwapCrossTriggerOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1816) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_trigger_order` |
| [cancelLinearSwapIsolatedTriggerOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1829) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_trigger_cancel` |
| [cancelLinearSwapCrossTriggerOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1843) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_trigger_cancel` |
| [cancelLinearSwapIsolatedAllTriggerOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1856) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_trigger_cancelall` |
| [cancelLinearSwapCrossAllTriggerOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1869) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_trigger_cancelall` |
| [getLinearSwapIsolatedTriggerOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1885) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_trigger_openorders` |
| [getLinearSwapCrossTriggerOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1898) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_trigger_openorders` |
| [getLinearSwapIsolatedTriggerHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1912) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_trigger_hisorders` |
| [getLinearSwapCrossTriggerHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1925) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_trigger_hisorders` |
| [submitLinearSwapIsolatedTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1939) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_tpsl_order` |
| [submitLinearSwapCrossTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1952) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_tpsl_order` |
| [cancelLinearSwapIsolatedTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1965) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_tpsl_cancel` |
| [cancelLinearSwapCrossTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1979) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_tpsl_cancel` |
| [cancelLinearSwapIsolatedAllTpslOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1992) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_tpsl_cancelall` |
| [cancelLinearSwapCrossAllTpslOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2006) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_tpsl_cancelall` |
| [getLinearSwapIsolatedTpslOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2019) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_tpsl_openorders` |
| [getLinearSwapCrossTpslOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2032) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_tpsl_openorders` |
| [getLinearSwapIsolatedTpslHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2045) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_tpsl_hisorders` |
| [getLinearSwapCrossTpslHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2058) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_tpsl_hisorders` |
| [getLinearSwapIsolatedRelationTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2071) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_relation_tpsl_order` |
| [getLinearSwapCrossRelationTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2085) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_relation_tpsl_order` |
| [submitLinearSwapIsolatedTrailingOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2101) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_track_order` |
| [submitLinearSwapCrossTrailingOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2114) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_track_order` |
| [cancelLinearSwapIsolatedTrailingOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2127) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_track_cancel` |
| [cancelLinearSwapCrossTrailingOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2141) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_track_cancel` |
| [cancelLinearSwapIsolatedAllTrailingOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2154) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_track_cancelall` |
| [cancelLinearSwapCrossAllTrailingOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2167) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_track_cancelall` |
| [getLinearSwapIsolatedTrailingOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2180) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_track_openorders` |
| [getLinearSwapCrossTrailingOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2193) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_track_openorders` |
| [getLinearSwapIsolatedTrailingHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2206) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_track_hisorders` |
| [getLinearSwapCrossTrailingHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2219) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_track_hisorders` |
| [getLinearSwapUnifiedAccountInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2236) | :closed_lock_with_key:  | GET | `/linear-swap-api/v3/unified_account_info` |
| [getLinearSwapUnifiedAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2247) | :closed_lock_with_key:  | GET | `/linear-swap-api/v3/linear_swap_overview_account_info` |
| [updateLinearSwapUnifiedFeeMethod()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2263) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/linear_swap_fee_switch` |
| [getLinearSwapUnifiedMarginAdjustments()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2277) | :closed_lock_with_key:  | GET | `/linear-swap-api/v3/fix_position_margin_change_record` |
| [updateLinearSwapUnifiedMargin()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2293) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/fix_position_margin_change` |
| [getMultiAssetAccountBalance()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2313) | :closed_lock_with_key:  | GET | `/v5/account/balance` |
| [getMultiAssetMode()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2325) | :closed_lock_with_key:  | GET | `/v5/account/asset_mode` |
| [updateMultiAssetMode()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2337) | :closed_lock_with_key:  | POST | `/v5/account/asset_mode` |
| [updateMultiAssetFeeCurrency()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2349) | :closed_lock_with_key:  | POST | `/v5/account/fee_deduction_currency` |
| [getMultiAssetFeeCurrency()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2364) | :closed_lock_with_key:  | GET | `/v5/account/fee_deduction_currency` |
| [getMultiAssetBills()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2376) | :closed_lock_with_key:  | GET | `/v5/account/bills` |
| [submitMultiAssetOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2394) | :closed_lock_with_key:  | POST | `/v5/trade/order` |
| [submitMultiAssetBatchOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2406) | :closed_lock_with_key:  | POST | `/v5/trade/batch_orders` |
| [cancelMultiAssetOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2418) | :closed_lock_with_key:  | POST | `/v5/trade/cancel_order` |
| [cancelMultiAssetBatchOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2430) | :closed_lock_with_key:  | POST | `/v5/trade/cancel_batch_orders` |
| [cancelMultiAssetAllOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2442) | :closed_lock_with_key:  | POST | `/v5/trade/cancel_all_orders` |
| [closeMultiAssetPosition()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2456) | :closed_lock_with_key:  | POST | `/v5/trade/position` |
| [closeMultiAssetAllPositions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2468) | :closed_lock_with_key:  | POST | `/v5/trade/position_all` |
| [getMultiAssetOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2480) | :closed_lock_with_key:  | GET | `/v5/trade/order/opens` |
| [getMultiAssetFills()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2492) | :closed_lock_with_key:  | GET | `/v5/trade/order/details` |
| [getMultiAssetOrderHistory()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2504) | :closed_lock_with_key:  | GET | `/v5/trade/order/history` |
| [getMultiAssetOrderInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2516) | :closed_lock_with_key:  | GET | `/v5/trade/order` |
| [setMultiAssetCancelAfter()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2528) | :closed_lock_with_key:  | POST | `/v5/trade/cancel-after` |
| [getMultiAssetPositions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2546) | :closed_lock_with_key:  | GET | `/v5/trade/position/opens` |
| [getMultiAssetLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2558) | :closed_lock_with_key:  | GET | `/v5/position/lever` |
| [updateMultiAssetLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2570) | :closed_lock_with_key:  | POST | `/v5/position/lever` |
| [getMultiAssetPositionMode()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2582) | :closed_lock_with_key:  | GET | `/v5/position/mode` |
| [updateMultiAssetPositionMode()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2594) | :closed_lock_with_key:  | POST | `/v5/position/mode` |
| [getMultiAssetRiskLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2606) | :closed_lock_with_key:  | GET | `/v5/position/risk/limit` |
| [getMultiAssetRiskLimitTiers()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2618) | :closed_lock_with_key:  | GET | `/v5/position/risk/limit_tier` |
| [adjustMultiAssetMargin()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2631) | :closed_lock_with_key:  | POST | `/v5/position/margin` |
| [getMultiAssetMarketRiskLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2648) | :closed_lock_with_key:  | GET | `/v5/market/risk/limit` |
| [getMultiAssetFeeCurrencies()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2660) | :closed_lock_with_key:  | GET | `/v5/market/assets_deduction_currency` |
| [getMultiAssetCollateralAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2672) | :closed_lock_with_key:  | GET | `/v5/market/multi_assets_margin` |
| [getCoinMDeliveryAdjustFactor()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2689) |  | GET | `/api/v1/contract_adjustfactor` |
| [getCoinMDeliveryHistoricalOpenInterest()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2700) |  | GET | `/api/v1/contract_his_open_interest` |
| [getCoinMDeliveryTieredMargin()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2711) |  | GET | `/api/v1/contract_ladder_margin` |
| [getCoinMDeliveryAccountRatio()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2722) |  | GET | `/api/v1/contract_elite_account_ratio` |
| [getCoinMDeliveryPositionRatio()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2734) |  | GET | `/api/v1/contract_elite_position_ratio` |
| [getCoinMDeliveryLiquidationOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2746) |  | GET | `/api/v3/contract_liquidation_orders` |
| [getCoinMDeliverySettlementRecords()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2757) |  | GET | `/api/v1/contract_settlement_records` |
| [getCoinMDeliveryRiskReserveBalance()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2768) |  | GET | `/v1/insurance_fund_info` |
| [getCoinMDeliveryRiskReserveHistory()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2779) |  | GET | `/v1/insurance_fund_history` |
| [getCoinMDeliveryContractLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2790) |  | GET | `/api/v1/contract_price_limit` |
| [getCoinMDeliveryOpenInterest()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2801) |  | GET | `/api/v1/contract_open_interest` |
| [getCoinMDeliveryDeliveryPrice()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2814) |  | GET | `/api/v1/contract_delivery_price` |
| [getCoinMDeliveryEstimatedSettlementPrice()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2825) |  | GET | `/api/v1/contract_estimated_settlement_price` |
| [getCoinMDeliverySystemStatus()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2838) |  | GET | `/api/v1/contract_api_state` |
| [getCoinMDeliveryContractInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2849) |  | GET | `/api/v1/contract_contract_info` |
| [getCoinMDeliveryIndexPrice()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2860) |  | GET | `/api/v1/contract_index` |
| [getCoinMDeliveryIndexConstituents()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2871) |  | GET | `/api/market/contract_constituents` |
| [getCoinMDeliveryContractElements()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2882) |  | GET | `/api/v1/contract_query_elements` |
| [getCoinMDeliveryMarketDepth()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2899) |  | GET | `/market/depth` |
| [getCoinMDeliveryMarketBbo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2911) |  | GET | `/market/bbo` |
| [getCoinMDeliveryKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2922) |  | GET | `/market/history/kline` |
| [getCoinMDeliveryMarkKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2933) |  | GET | `/index/market/history/mark_price_kline` |
| [getCoinMDeliveryTicker()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2944) |  | GET | `/market/detail/merged` |
| [getCoinMDeliveryTickers()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2955) |  | GET | `/v2/market/detail/batch_merged` |
| [getCoinMDeliveryLastTrade()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2966) |  | GET | `/market/trade` |
| [getCoinMDeliveryTradeHistory()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2977) |  | GET | `/market/history/trade` |
| [getCoinMDeliveryIndexKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2989) |  | GET | `/index/market/history/index` |
| [getCoinMDeliveryBasisData()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3000) |  | GET | `/index/market/history/basis` |
| [getCoinMDeliveryAssetValuation()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3017) | :closed_lock_with_key:  | POST | `/api/v1/contract_balance_valuation` |
| [getCoinMDeliveryAccountInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3030) | :closed_lock_with_key:  | POST | `/api/v1/contract_account_info` |
| [getCoinMDeliveryPositionInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3043) | :closed_lock_with_key:  | POST | `/api/v1/contract_position_info` |
| [updateCoinMDeliverySubPermissions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3056) | :closed_lock_with_key:  | POST | `/api/v1/contract_sub_auth` |
| [getCoinMDeliverySubPermissions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3070) | :closed_lock_with_key:  | GET | `/api/v1/contract_sub_auth_list` |
| [getCoinMDeliverySubAccounts()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3081) | :closed_lock_with_key:  | POST | `/api/v1/contract_sub_account_list` |
| [getCoinMDeliverySubAccountsAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3094) | :closed_lock_with_key:  | POST | `/api/v1/contract_sub_account_info_list` |
| [getCoinMDeliverySubAccountAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3107) | :closed_lock_with_key:  | POST | `/api/v1/contract_sub_account_info` |
| [getCoinMDeliverySubPositionInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3121) | :closed_lock_with_key:  | POST | `/api/v1/contract_sub_position_info` |
| [getCoinMDeliveryFinancialRecords()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3135) | :closed_lock_with_key:  | POST | `/api/v3/contract_financial_record` |
| [getCoinMDeliveryFinancialRecordsExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3148) | :closed_lock_with_key:  | POST | `/api/v3/contract_financial_record_exact` |
| [getCoinMDeliveryUserSettlementRecords()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3161) | :closed_lock_with_key:  | POST | `/api/v1/contract_user_settlement_records` |
| [getCoinMDeliveryOrderLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3176) | :closed_lock_with_key:  | POST | `/api/v1/contract_order_limit` |
| [getCoinMDeliveryFee()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3189) | :closed_lock_with_key:  | POST | `/api/v1/contract_fee` |
| [getCoinMDeliveryTransferLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3202) | :closed_lock_with_key:  | POST | `/api/v1/contract_transfer_limit` |
| [getCoinMDeliveryPositionLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3215) | :closed_lock_with_key:  | POST | `/api/v1/contract_position_limit` |
| [getCoinMDeliveryAccountFull()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3228) | :closed_lock_with_key:  | POST | `/api/v1/contract_account_position_info` |
| [transferCoinMDeliveryMasterSub()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3241) | :closed_lock_with_key:  | POST | `/api/v1/contract_master_sub_transfer` |
| [getCoinMDeliveryMasterSubTransfers()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3254) | :closed_lock_with_key:  | POST | `/api/v1/contract_master_sub_transfer_record` |
| [getCoinMDeliveryApiStatus()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3267) | :closed_lock_with_key:  | GET | `/api/v1/contract_api_trading_status` |
| [getCoinMDeliveryAvailableLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3278) | :closed_lock_with_key:  | POST | `/api/v1/contract_available_level_rate` |
| [setCoinMDeliveryCancelAfter()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3297) | :closed_lock_with_key:  | POST | `/api/v1/contract-cancel-after` |
| [submitCoinMDeliveryOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3311) | :closed_lock_with_key:  | POST | `/api/v1/contract_order` |
| [submitCoinMDeliveryBatchOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3324) | :closed_lock_with_key:  | POST | `/api/v1/contract_batchorder` |
| [cancelCoinMDeliveryOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3337) | :closed_lock_with_key:  | POST | `/api/v1/contract_cancel` |
| [cancelCoinMDeliveryAllOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3350) | :closed_lock_with_key:  | POST | `/api/v1/contract_cancelall` |
| [updateCoinMDeliveryLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3363) | :closed_lock_with_key:  | POST | `/api/v1/contract_switch_lever_rate` |
| [getCoinMDeliveryOrderInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3377) | :closed_lock_with_key:  | POST | `/api/v1/contract_order_info` |
| [getCoinMDeliveryOrderDetail()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3390) | :closed_lock_with_key:  | POST | `/api/v1/contract_order_detail` |
| [getCoinMDeliveryOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3403) | :closed_lock_with_key:  | POST | `/api/v1/contract_openorders` |
| [getCoinMDeliveryHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3416) | :closed_lock_with_key:  | POST | `/api/v3/contract_hisorders` |
| [getCoinMDeliveryHistoryOrdersExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3429) | :closed_lock_with_key:  | POST | `/api/v3/contract_hisorders_exact` |
| [getCoinMDeliveryFills()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3442) | :closed_lock_with_key:  | POST | `/api/v3/contract_matchresults` |
| [getCoinMDeliveryFillsExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3455) | :closed_lock_with_key:  | POST | `/api/v3/contract_matchresults_exact` |
| [submitCoinMDeliveryLightningCloseOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3468) | :closed_lock_with_key:  | POST | `/api/v1/lightning_close_position` |
| [submitCoinMDeliveryTriggerOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3487) | :closed_lock_with_key:  | POST | `/api/v1/contract_trigger_order` |
| [cancelCoinMDeliveryTriggerOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3500) | :closed_lock_with_key:  | POST | `/api/v1/contract_trigger_cancel` |
| [cancelCoinMDeliveryAllTriggerOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3514) | :closed_lock_with_key:  | POST | `/api/v1/contract_trigger_cancelall` |
| [getCoinMDeliveryTriggerOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3527) | :closed_lock_with_key:  | POST | `/api/v1/contract_trigger_openorders` |
| [getCoinMDeliveryTriggerHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3540) | :closed_lock_with_key:  | POST | `/api/v1/contract_trigger_hisorders` |
| [submitCoinMDeliveryTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3553) | :closed_lock_with_key:  | POST | `/api/v1/contract_tpsl_order` |
| [cancelCoinMDeliveryTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3566) | :closed_lock_with_key:  | POST | `/api/v1/contract_tpsl_cancel` |
| [cancelCoinMDeliveryAllTpslOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3580) | :closed_lock_with_key:  | POST | `/api/v1/contract_tpsl_cancelall` |
| [getCoinMDeliveryTpslOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3593) | :closed_lock_with_key:  | POST | `/api/v1/contract_tpsl_openorders` |
| [getCoinMDeliveryTpslHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3606) | :closed_lock_with_key:  | POST | `/api/v1/contract_tpsl_hisorders` |
| [getCoinMDeliveryRelationTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3619) | :closed_lock_with_key:  | POST | `/api/v1/contract_relation_tpsl_order` |
| [submitCoinMDeliveryTrailingOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3633) | :closed_lock_with_key:  | POST | `/api/v1/contract_track_order` |
| [cancelCoinMDeliveryTrailingOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3646) | :closed_lock_with_key:  | POST | `/api/v1/contract_track_cancel` |
| [cancelCoinMDeliveryAllTrailingOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3660) | :closed_lock_with_key:  | POST | `/api/v1/contract_track_cancelall` |
| [getCoinMDeliveryTrailingOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3673) | :closed_lock_with_key:  | POST | `/api/v1/contract_track_openorders` |
| [getCoinMDeliveryTrailingHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3686) | :closed_lock_with_key:  | POST | `/api/v1/contract_track_hisorders` |
| [getCoinMPerpAdjustFactor()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3707) |  | GET | `/swap-api/v1/swap_adjustfactor` |
| [getCoinMPerpHistoricalOpenInterest()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3718) |  | GET | `/swap-api/v1/swap_his_open_interest` |
| [getCoinMPerpTieredMargin()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3729) |  | GET | `/swap-api/v1/swap_ladder_margin` |
| [getCoinMPerpAccountRatio()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3740) |  | GET | `/swap-api/v1/swap_elite_account_ratio` |
| [getCoinMPerpPositionRatio()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3752) |  | GET | `/swap-api/v1/swap_elite_position_ratio` |
| [getCoinMPerpEstimatedSettlementPrice()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3764) |  | GET | `/swap-api/v1/swap_estimated_settlement_price` |
| [getCoinMPerpSystemStatus()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3777) |  | GET | `/swap-api/v1/swap_api_state` |
| [getCoinMPerpFundingRate()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3788) |  | GET | `/swap-api/v1/swap_funding_rate` |
| [getCoinMPerpFundingRates()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3799) |  | GET | `/swap-api/v1/swap_batch_funding_rate` |
| [getCoinMPerpHistoricalFundingRate()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3810) |  | GET | `/swap-api/v1/swap_historical_funding_rate` |
| [getCoinMPerpLiquidationOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3823) |  | GET | `/swap-api/v3/swap_liquidation_orders` |
| [getCoinMPerpSettlementRecords()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3834) |  | GET | `/swap-api/v1/swap_settlement_records` |
| [getCoinMPerpContractInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3845) |  | GET | `/swap-api/v1/swap_contract_info` |
| [getCoinMPerpIndexPrice()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3856) |  | GET | `/swap-api/v1/swap_index` |
| [getCoinMPerpContractElements()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3867) |  | GET | `/swap-api/v1/swap_query_elements` |
| [getCoinMPerpIndexConstituents()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3878) |  | GET | `/swap-api/market/swap_constituents` |
| [getCoinMPerpRiskReserveBalance()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3889) |  | GET | `/v1/insurance_fund_info` |
| [getCoinMPerpRiskReserveHistory()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3900) |  | GET | `/v1/insurance_fund_history` |
| [getCoinMPerpPriceLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3911) |  | GET | `/swap-api/v1/swap_price_limit` |
| [getCoinMPerpOpenInterest()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3922) |  | GET | `/swap-api/v1/swap_open_interest` |
| [getCoinMPerpMarketDepth()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3939) |  | GET | `/swap-ex/market/depth` |
| [getCoinMPerpMarketBbo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3951) |  | GET | `/swap-ex/market/bbo` |
| [getCoinMPerpKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3962) |  | GET | `/swap-ex/market/history/kline` |
| [getCoinMPerpMarkKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3973) |  | GET | `/index/market/history/swap_mark_price_kline` |
| [getCoinMPerpTicker()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3984) |  | GET | `/swap-ex/market/detail/merged` |
| [getCoinMPerpTickers()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3995) |  | GET | `/v2/swap-ex/market/detail/batch_merged` |
| [getCoinMPerpLastTrade()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4006) |  | GET | `/swap-ex/market/trade` |
| [getCoinMPerpTradeHistory()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4017) |  | GET | `/swap-ex/market/history/trade` |
| [getCoinMPerpPremiumIndexKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4029) |  | GET | `/index/market/history/swap_premium_index_kline` |
| [getCoinMPerpFundingRateKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4040) |  | GET | `/index/market/history/swap_estimated_rate_kline` |
| [getCoinMPerpBasisData()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4051) |  | GET | `/index/market/history/swap_basis` |
| [getCoinMPerpAssetValuation()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4068) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_balance_valuation` |
| [getCoinMPerpAccountInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4081) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_account_info` |
| [getCoinMPerpPositionInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4094) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_position_info` |
| [getCoinMPerpAccountFull()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4107) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_account_position_info` |
| [getCoinMPerpSubPermissions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4120) | :closed_lock_with_key:  | GET | `/swap-api/v1/swap_sub_auth_list` |
| [updateCoinMPerpSubPermissions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4131) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_sub_auth` |
| [getCoinMPerpSubAccounts()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4145) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_sub_account_list` |
| [getCoinMPerpSubAccountsAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4158) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_sub_account_info_list` |
| [getCoinMPerpSubAccountAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4171) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_sub_account_info` |
| [getCoinMPerpSubPositions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4185) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_sub_position_info` |
| [getCoinMPerpFinancialRecords()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4199) | :closed_lock_with_key:  | POST | `/swap-api/v3/swap_financial_record` |
| [getCoinMPerpFinancialRecordsExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4212) | :closed_lock_with_key:  | POST | `/swap-api/v3/swap_financial_record_exact` |
| [getCoinMPerpAvailableLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4225) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_available_level_rate` |
| [getCoinMPerpOrderLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4238) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_order_limit` |
| [getCoinMPerpFee()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4251) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_fee` |
| [getCoinMPerpTransferLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4264) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_transfer_limit` |
| [getCoinMPerpPositionLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4277) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_position_limit` |
| [transferCoinMPerpMasterSub()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4290) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_master_sub_transfer` |
| [getCoinMPerpMasterSubTransfers()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4303) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_master_sub_transfer_record` |
| [getCoinMPerpApiStatus()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4316) | :closed_lock_with_key:  | GET | `/swap-api/v1/swap_api_trading_status` |
| [setCoinMPerpCancelAfter()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4333) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap-cancel-after` |
| [submitCoinMPerpOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4347) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_order` |
| [submitCoinMPerpBatchOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4360) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_batchorder` |
| [cancelCoinMPerpOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4373) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_cancel` |
| [cancelCoinMPerpAllOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4386) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_cancelall` |
| [updateCoinMPerpLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4399) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_switch_lever_rate` |
| [getCoinMPerpOrderInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4413) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_order_info` |
| [getCoinMPerpOrderDetail()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4426) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_order_detail` |
| [getCoinMPerpOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4439) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_openorders` |
| [getCoinMPerpHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4452) | :closed_lock_with_key:  | POST | `/swap-api/v3/swap_hisorders` |
| [getCoinMPerpHistoryOrdersExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4465) | :closed_lock_with_key:  | POST | `/swap-api/v3/swap_hisorders_exact` |
| [getCoinMPerpFills()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4478) | :closed_lock_with_key:  | POST | `/swap-api/v3/swap_matchresults` |
| [getCoinMPerpFillsExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4491) | :closed_lock_with_key:  | POST | `/swap-api/v3/swap_matchresults_exact` |
| [submitCoinMPerpLightningCloseOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4504) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_lightning_close_position` |
| [submitCoinMPerpTriggerOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4523) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_trigger_order` |
| [cancelCoinMPerpTriggerOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4536) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_trigger_cancel` |
| [cancelCoinMPerpAllTriggerOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4550) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_trigger_cancelall` |
| [getCoinMPerpTriggerOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4563) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_trigger_openorders` |
| [getCoinMPerpTriggerHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4576) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_trigger_hisorders` |
| [submitCoinMPerpTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4589) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_tpsl_order` |
| [cancelCoinMPerpTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4602) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_tpsl_cancel` |
| [cancelCoinMPerpAllTpslOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4615) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_tpsl_cancelall` |
| [getCoinMPerpTpslOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4628) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_tpsl_openorders` |
| [getCoinMPerpTpslHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4641) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_tpsl_hisorders` |
| [getCoinMPerpRelationTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4654) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_relation_tpsl_order` |
| [submitCoinMPerpTrailingOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4667) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_track_order` |
| [cancelCoinMPerpTrailingOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4680) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_track_cancel` |
| [cancelCoinMPerpAllTrailingOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4693) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_track_cancelall` |
| [getCoinMPerpTrailingOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4706) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_track_openorders` |
| [getCoinMPerpTrailingHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4719) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_track_hisorders` |
| [getCopyTraderInstruments()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4738) | :closed_lock_with_key:  | GET | `/api/v6/copyTrading/trader/instruments` |
| [getCopyTraderStatistics()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4749) | :closed_lock_with_key:  | GET | `/api/v6/copyTrading/trader/statistics` |
| [getCopyTraderProfitSharingHistory()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4760) | :closed_lock_with_key:  | GET | `/api/v6/copyTrading/trader/profit-sharing-history` |
| [getCopyTraderProfitSharingHistorySummary()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4776) | :closed_lock_with_key:  | GET | `/api/v6/copyTrading/trader/profit-sharing-history-summary` |
| [getCopyTraderUPNLSharingSummary()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4792) | :closed_lock_with_key:  | GET | `/api/v6/copyTrading/trader/unrealized-profit-sharing-summary` |
| [getCopyTraderFollowers()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4808) | :closed_lock_with_key:  | GET | `/api/v6/copyTrading/trader/followers` |
| [removeCopyTraderFollower()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4819) | :closed_lock_with_key:  | POST | `/api/v6/copyTrading/trader/follower` |
| [submitCopyTraderTransfer()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4834) | :closed_lock_with_key:  | POST | `/api/v6/copyTrading/trader/transfer` |
| [updateCopyTraderFollowerSettings()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4847) | :closed_lock_with_key:  | POST | `/api/v6/copyTrading/trader/follower-settings` |
| [getCopyTraderConfig()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4860) | :closed_lock_with_key:  | POST | `/api/v6/copyTrading/trader/config` |
| [createCopyTraderApikey()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4873) | :closed_lock_with_key:  | POST | `/api/v6/copyTrading/trader/apikey` |

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