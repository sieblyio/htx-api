
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
| [getFinanceHistory()](../examples/apidoc/SpotClient/getFinanceHistory.js) (undocumented, used by HTX Financial Records) | :closed_lock_with_key:  | GET | `/v1/query/finance-history` |
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
| [submitWithdraw()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1085) | :closed_lock_with_key:  | POST | `/v1/dw/withdraw/api/create` |
| [getWithdrawByClientId()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1096) | :closed_lock_with_key:  | GET | `/v1/query/withdraw/client-order-id` |
| [cancelWithdraw()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1107) | :closed_lock_with_key:  | POST | `/v1/dw/withdraw-virtual/{withdrawId}/cancel` |
| [getDepositWithdrawHistory()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1121) | :closed_lock_with_key:  | GET | `/v1/query/deposit-withdraw` |
| [getVaspList()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1132) |  | GET | `/v1/query/vasp-list` |
| [getBrokerUserRebateStatus()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1147) | :closed_lock_with_key:  | GET | `/broker/v1/user_rebate_status` |
| [setBrokerSubUserFeeRate()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1173) | :closed_lock_with_key:  | POST | `/broker/v1/sub-user/fee_rate/add` |
| [getBrokerAccountCapitalSnapshot()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1186) | :closed_lock_with_key:  | POST | `/broker/v1/account_capital_snapshot_everyday` |
| [updateSubUserDeductMode()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1205) | :closed_lock_with_key:  | POST | `/v2/sub-user/deduct-mode` |
| [getSubUserApiKey()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1217) | :closed_lock_with_key:  | GET | `/v2/user/api-key` |
| [getUserUid()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1229) | :closed_lock_with_key:  | GET | `/v2/user/uid` |
| [getSubUserList()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1252) | :closed_lock_with_key:  | GET | `/v2/sub-user/user-list` |
| [updateSubUserLockStatus()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1263) | :closed_lock_with_key:  | POST | `/v2/sub-user/management` |
| [getSubUserStatus()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1275) | :closed_lock_with_key:  | GET | `/v2/sub-user/user-state` |
| [setSubUserTradableMarket()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1286) | :closed_lock_with_key:  | POST | `/v2/sub-user/tradable-market` |
| [setSubUserTransferPermissions()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1297) | :closed_lock_with_key:  | POST | `/v2/sub-user/transferability` |
| [getSubUserAccounts()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1308) | :closed_lock_with_key:  | GET | `/v2/sub-user/account-list` |
| [createSubUserApiKey()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1319) | :closed_lock_with_key:  | POST | `/v2/sub-user/api-key-generation` |
| [updateSubUserApiKey()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1332) | :closed_lock_with_key:  | POST | `/v2/sub-user/api-key-modification` |
| [deleteSubUserApiKey()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1345) | :closed_lock_with_key:  | POST | `/v2/sub-user/api-key-deletion` |
| [submitSubUserTransfer()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1359) | :closed_lock_with_key:  | POST | `/v1/subuser/transfer` |
| [getSubUserDepositAddress()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1370) | :closed_lock_with_key:  | GET | `/v2/sub-user/deposit-address` |
| [getSubUserDepositHistory()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1382) | :closed_lock_with_key:  | GET | `/v2/sub-user/query-deposit` |
| [getSubUsersAggregatedBalance()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1395) | :closed_lock_with_key:  | GET | `/v1/subuser/aggregate-balance` |
| [getSubUserBalance()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1406) | :closed_lock_with_key:  | GET | `/v1/account/accounts/{subUid}` |
| [getSubUserEntrustUserList()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1417) | :closed_lock_with_key:  | GET | `/v2/sub-user/entrust-user-list` |
| [getSubUserManagedTransferHistory()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1433) | :closed_lock_with_key:  | GET | `/v2/sub-user/managed-transfer-history` |
| [getReferralRebateDetail()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1449) | :closed_lock_with_key:  | GET | `/v2/invitee/rebate/detail` |
| [getReferralRebateHistory()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1460) | :closed_lock_with_key:  | GET | `/v2/invitee/rebate/history` |
| [getReferralAllRebateDetail()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1471) | :closed_lock_with_key:  | GET | `/v2/invitee/rebate/all_rebate/detail` |
| [getReferralMultipleRebateDetail()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1484) | :closed_lock_with_key:  | GET | `/v2/invitee/rebate/batcher_rebate/detail` |
| [getReferralInvitedUserList()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1495) | :closed_lock_with_key:  | GET | `/v2/invitee/rebate/referrals` |
| [getP2POrderHistory()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1514) |  | GET | `/v1/api/c2c/order/history` |
| [getEarnProjectList()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1534) | :closed_lock_with_key:  | GET | `/v1/earn/project/queryEarnProjectList` |
| [earnSubscribe()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1547) | :closed_lock_with_key:  | POST | `/v1/earn/order/demand/add` |
| [earnRedeem()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1558) | :closed_lock_with_key:  | POST | `/v1/earn/order/demand/redeem-order` |
| [getEarnUserAssets()](https://github.com/sieblyio/htx-api/blob/main/src/SpotClient.ts#L1571) | :closed_lock_with_key:  | GET | `/v1/earn/order/user/assets/list` |

# FuturesClient.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [FuturesClient.ts](/src/FuturesClient.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [getTimestamp()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L440) |  | GET | `/api/v1/timestamp` |
| [getHeartbeat()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L450) |  | GET | `/heartbeat/` |
| [getLinearSwapAccountType()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L466) | :closed_lock_with_key:  | GET | `/linear-swap-api/v3/swap_unified_account_type` |
| [updateLinearSwapAccountType()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L482) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_switch_account_type` |
| [getLinearSwapFundingRate()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L498) |  | GET | `/linear-swap-api/v1/swap_funding_rate` |
| [getLinearSwapFundingRates()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L510) |  | GET | `/linear-swap-api/v1/swap_batch_funding_rate` |
| [getLinearSwapHistoricalFundingRate()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L522) |  | GET | `/linear-swap-api/v1/swap_historical_funding_rate` |
| [getLinearSwapLiquidationOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L534) |  | GET | `/linear-swap-api/v3/swap_liquidation_orders` |
| [getLinearSwapSettlementRecords()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L546) |  | GET | `/linear-swap-api/v1/swap_settlement_records` |
| [getLinearSwapNetAccountRatio()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L558) |  | GET | `/linear-swap-api/v1/swap_elite_account_ratio` |
| [getLinearSwapNetPositionRatio()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L571) |  | GET | `/linear-swap-api/v1/swap_elite_position_ratio` |
| [getLinearSwapIsolatedSystemStatus()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L584) |  | GET | `/linear-swap-api/v1/swap_api_state` |
| [getLinearSwapCrossTieredMargin()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L597) |  | GET | `/linear-swap-api/v1/swap_cross_ladder_margin` |
| [getLinearSwapIsolatedTieredMargin()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L609) |  | GET | `/linear-swap-api/v1/swap_ladder_margin` |
| [getLinearSwapEstimatedSettlementPrice()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L622) |  | GET | `/linear-swap-api/v1/swap_estimated_settlement_price` |
| [getLinearSwapIsolatedAdjustFactor()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L637) |  | GET | `/linear-swap-api/v1/swap_adjustfactor` |
| [getLinearSwapCrossAdjustFactor()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L650) |  | GET | `/linear-swap-api/v1/swap_cross_adjustfactor` |
| [getLinearSwapRiskReserveBalance()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L662) |  | GET | `/v1/insurance_fund_info` |
| [getLinearSwapRiskReserveHistory()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L674) |  | GET | `/v1/insurance_fund_history` |
| [getLinearSwapContractPriceLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L686) |  | GET | `/linear-swap-api/v1/swap_price_limit` |
| [getLinearSwapOpenInterest()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L698) |  | GET | `/linear-swap-api/v1/swap_open_interest` |
| [getLinearSwapContractInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L710) |  | GET | `/linear-swap-api/v1/swap_contract_info` |
| [getLinearSwapIndexPrice()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L722) |  | GET | `/linear-swap-api/v1/swap_index` |
| [getLinearSwapIndexConstituents()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L734) |  | GET | `/linear-swap-api/market/swap_contract_constituents` |
| [getLinearSwapContractElements()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L749) |  | GET | `/linear-swap-api/v1/swap_query_elements` |
| [getLinearSwapMarketDepth()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L767) |  | GET | `/linear-swap-ex/market/depth` |
| [getLinearSwapMarketBbo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L780) |  | GET | `/linear-swap-ex/market/bbo` |
| [getLinearSwapKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L793) |  | GET | `/linear-swap-ex/market/history/kline` |
| [getLinearSwapMarkKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L804) |  | GET | `/index/market/history/linear_swap_mark_price_kline` |
| [getLinearSwapTicker()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L818) |  | GET | `/linear-swap-ex/market/detail/merged` |
| [getLinearSwapTickers()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L830) |  | GET | `/v2/linear-swap-ex/market/detail/batch_merged` |
| [getLinearSwapLastTrade()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L843) |  | GET | `/linear-swap-ex/market/trade` |
| [getLinearSwapTradeHistory()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L855) |  | GET | `/linear-swap-ex/market/history/trade` |
| [getLinearSwapHistoricalOpenInterest()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L868) |  | GET | `/linear-swap-api/v1/swap_his_open_interest` |
| [getLinearSwapPremiumIndexKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L879) |  | GET | `/index/market/history/linear_swap_premium_index_kline` |
| [getLinearSwapFundingRateKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L893) |  | GET | `/index/market/history/linear_swap_estimated_rate_kline` |
| [getLinearSwapBasisData()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L907) |  | GET | `/index/market/history/linear_swap_basis` |
| [getLinearSwapAssetValuation()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L925) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_balance_valuation` |
| [getLinearSwapIsolatedAccountInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L938) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_account_info` |
| [getLinearSwapCrossAccountInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L951) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_account_info` |
| [getLinearSwapIsolatedPositions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L964) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_position_info` |
| [getLinearSwapCrossPositions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L977) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_position_info` |
| [getLinearSwapIsolatedAccountFull()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L990) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_account_position_info` |
| [getLinearSwapCrossAccountFull()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1003) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_account_position_info` |
| [updateLinearSwapSubPermissions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1017) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_sub_auth` |
| [getLinearSwapSubPermissions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1031) | :closed_lock_with_key:  | GET | `/linear-swap-api/v1/swap_sub_auth_list` |
| [getLinearSwapIsolatedSubAccounts()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1042) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_sub_account_list` |
| [getLinearSwapCrossSubAccounts()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1055) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_sub_account_list` |
| [getLinearSwapIsolatedSubAccountsAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1068) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_sub_account_info_list` |
| [getLinearSwapCrossSubAccountsAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1081) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_sub_account_info_list` |
| [getLinearSwapIsolatedSubAccountAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1095) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_sub_account_info` |
| [getLinearSwapCrossSubAccountAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1109) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_sub_account_info` |
| [getLinearSwapIsolatedSubPositions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1123) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_sub_position_info` |
| [getLinearSwapCrossSubPositions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1137) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_sub_position_info` |
| [getLinearSwapFinancialRecords()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1151) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_financial_record` |
| [getLinearSwapFinancialRecordsExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1164) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_financial_record_exact` |
| [getLinearSwapIsolatedAvailableLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1177) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_available_level_rate` |
| [getLinearSwapCrossAvailableLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1190) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_available_level_rate` |
| [getLinearSwapOrderLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1204) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_order_limit` |
| [getLinearSwapFee()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1217) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_fee` |
| [getLinearSwapIsolatedTransferLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1230) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_transfer_limit` |
| [getLinearSwapCrossTransferLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1243) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_transfer_limit` |
| [getLinearSwapIsolatedPositionLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1256) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_position_limit` |
| [getLinearSwapCrossPositionLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1269) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_position_limit` |
| [getLinearSwapIsolatedLeverageLimits()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1282) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_lever_position_limit` |
| [getLinearSwapCrossLeverageLimits()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1296) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_lever_position_limit` |
| [transferLinearSwapMasterSub()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1312) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_master_sub_transfer` |
| [getLinearSwapMasterSubTransfers()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1325) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_master_sub_transfer_record` |
| [transferLinearSwapInner()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1341) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_transfer_inner` |
| [setLinearSwapCancelAfter()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1360) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/linear-cancel-after` |
| [getLinearSwapCrossTradeState()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1374) | :closed_lock_with_key:  | GET | `/linear-swap-api/v1/swap_cross_trade_state` |
| [getLinearSwapCrossTransferState()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1388) | :closed_lock_with_key:  | GET | `/linear-swap-api/v1/swap_cross_transfer_state` |
| [updateLinearSwapIsolatedPositionMode()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1402) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_switch_position_mode` |
| [updateLinearSwapCrossPositionMode()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1416) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_switch_position_mode` |
| [submitLinearSwapIsolatedOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1433) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_order` |
| [submitLinearSwapCrossOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1446) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_order` |
| [submitLinearSwapIsolatedBatchOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1459) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_batchorder` |
| [submitLinearSwapCrossBatchOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1472) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_batchorder` |
| [cancelLinearSwapIsolatedOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1485) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cancel` |
| [cancelLinearSwapCrossOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1498) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_cancel` |
| [cancelLinearSwapIsolatedAllOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1511) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cancelall` |
| [cancelLinearSwapCrossAllOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1524) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_cancelall` |
| [updateLinearSwapIsolatedLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1537) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_switch_lever_rate` |
| [updateLinearSwapCrossLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1551) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_switch_lever_rate` |
| [getLinearSwapIsolatedOrderInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1567) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_order_info` |
| [getLinearSwapCrossOrderInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1580) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_order_info` |
| [getLinearSwapIsolatedOrderDetail()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1593) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_order_detail` |
| [getLinearSwapCrossOrderDetail()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1606) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_order_detail` |
| [getLinearSwapIsolatedOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1619) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_openorders` |
| [getLinearSwapCrossOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1632) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_openorders` |
| [getLinearSwapIsolatedHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1645) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_hisorders` |
| [getLinearSwapCrossHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1658) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_cross_hisorders` |
| [getLinearSwapIsolatedHistoryOrdersExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1671) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_hisorders_exact` |
| [getLinearSwapCrossHistoryOrdersExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1684) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_cross_hisorders_exact` |
| [getLinearSwapIsolatedFills()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1697) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_matchresults` |
| [getLinearSwapCrossFills()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1710) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_cross_matchresults` |
| [getLinearSwapIsolatedFillsExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1723) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_matchresults_exact` |
| [getLinearSwapCrossFillsExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1736) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/swap_cross_matchresults_exact` |
| [submitLinearSwapIsolatedLightningCloseOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1752) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_lightning_close_position` |
| [submitLinearSwapCrossLightningCloseOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1768) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_lightning_close_position` |
| [getLinearSwapIsolatedPositionMode()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1782) | :closed_lock_with_key:  | GET | `/linear-swap-api/v1/swap_position_side` |
| [getLinearSwapCrossPositionMode()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1793) | :closed_lock_with_key:  | GET | `/linear-swap-api/v1/swap_cross_position_side` |
| [submitLinearSwapIsolatedTriggerOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1813) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_trigger_order` |
| [submitLinearSwapCrossTriggerOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1826) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_trigger_order` |
| [cancelLinearSwapIsolatedTriggerOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1839) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_trigger_cancel` |
| [cancelLinearSwapCrossTriggerOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1853) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_trigger_cancel` |
| [cancelLinearSwapIsolatedAllTriggerOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1866) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_trigger_cancelall` |
| [cancelLinearSwapCrossAllTriggerOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1879) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_trigger_cancelall` |
| [getLinearSwapIsolatedTriggerOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1895) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_trigger_openorders` |
| [getLinearSwapCrossTriggerOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1908) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_trigger_openorders` |
| [getLinearSwapIsolatedTriggerHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1922) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_trigger_hisorders` |
| [getLinearSwapCrossTriggerHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1935) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_trigger_hisorders` |
| [submitLinearSwapIsolatedTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1949) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_tpsl_order` |
| [submitLinearSwapCrossTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1962) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_tpsl_order` |
| [cancelLinearSwapIsolatedTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1975) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_tpsl_cancel` |
| [cancelLinearSwapCrossTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L1989) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_tpsl_cancel` |
| [cancelLinearSwapIsolatedAllTpslOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2002) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_tpsl_cancelall` |
| [cancelLinearSwapCrossAllTpslOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2016) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_tpsl_cancelall` |
| [getLinearSwapIsolatedTpslOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2029) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_tpsl_openorders` |
| [getLinearSwapCrossTpslOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2042) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_tpsl_openorders` |
| [getLinearSwapIsolatedTpslHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2055) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_tpsl_hisorders` |
| [getLinearSwapCrossTpslHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2068) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_tpsl_hisorders` |
| [getLinearSwapIsolatedRelationTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2081) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_relation_tpsl_order` |
| [getLinearSwapCrossRelationTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2095) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_relation_tpsl_order` |
| [submitLinearSwapIsolatedTrailingOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2111) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_track_order` |
| [submitLinearSwapCrossTrailingOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2124) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_track_order` |
| [cancelLinearSwapIsolatedTrailingOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2137) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_track_cancel` |
| [cancelLinearSwapCrossTrailingOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2151) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_track_cancel` |
| [cancelLinearSwapIsolatedAllTrailingOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2164) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_track_cancelall` |
| [cancelLinearSwapCrossAllTrailingOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2177) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_track_cancelall` |
| [getLinearSwapIsolatedTrailingOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2190) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_track_openorders` |
| [getLinearSwapCrossTrailingOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2203) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_track_openorders` |
| [getLinearSwapIsolatedTrailingHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2216) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_track_hisorders` |
| [getLinearSwapCrossTrailingHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2229) | :closed_lock_with_key:  | POST | `/linear-swap-api/v1/swap_cross_track_hisorders` |
| [getLinearSwapUnifiedAccountInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2246) | :closed_lock_with_key:  | GET | `/linear-swap-api/v3/unified_account_info` |
| [getLinearSwapUnifiedAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2257) | :closed_lock_with_key:  | GET | `/linear-swap-api/v3/linear_swap_overview_account_info` |
| [updateLinearSwapUnifiedFeeMethod()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2273) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/linear_swap_fee_switch` |
| [getLinearSwapUnifiedMarginAdjustments()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2287) | :closed_lock_with_key:  | GET | `/linear-swap-api/v3/fix_position_margin_change_record` |
| [updateLinearSwapUnifiedMargin()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2303) | :closed_lock_with_key:  | POST | `/linear-swap-api/v3/fix_position_margin_change` |
| [getMultiAssetAccountBalance()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2323) | :closed_lock_with_key:  | GET | `/v5/account/balance` |
| [getMultiAssetMode()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2335) | :closed_lock_with_key:  | GET | `/v5/account/asset_mode` |
| [updateMultiAssetMode()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2347) | :closed_lock_with_key:  | POST | `/v5/account/asset_mode` |
| [updateMultiAssetFeeCurrency()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2359) | :closed_lock_with_key:  | POST | `/v5/account/fee_deduction_currency` |
| [getMultiAssetFeeCurrency()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2374) | :closed_lock_with_key:  | GET | `/v5/account/fee_deduction_currency` |
| [getMultiAssetBills()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2386) | :closed_lock_with_key:  | GET | `/v5/account/bills` |
| [submitMultiAssetOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2404) | :closed_lock_with_key:  | POST | `/v5/trade/order` |
| [submitMultiAssetBatchOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2416) | :closed_lock_with_key:  | POST | `/v5/trade/batch_orders` |
| [cancelMultiAssetOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2428) | :closed_lock_with_key:  | POST | `/v5/trade/cancel_order` |
| [cancelMultiAssetBatchOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2440) | :closed_lock_with_key:  | POST | `/v5/trade/cancel_batch_orders` |
| [cancelMultiAssetAllOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2452) | :closed_lock_with_key:  | POST | `/v5/trade/cancel_all_orders` |
| [closeMultiAssetPosition()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2466) | :closed_lock_with_key:  | POST | `/v5/trade/position` |
| [closeMultiAssetAllPositions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2478) | :closed_lock_with_key:  | POST | `/v5/trade/position_all` |
| [getMultiAssetOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2490) | :closed_lock_with_key:  | GET | `/v5/trade/order/opens` |
| [getMultiAssetFills()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2502) | :closed_lock_with_key:  | GET | `/v5/trade/order/details` |
| [getMultiAssetOrderHistory()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2514) | :closed_lock_with_key:  | GET | `/v5/trade/order/history` |
| [getMultiAssetOrderInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2526) | :closed_lock_with_key:  | GET | `/v5/trade/order` |
| [setMultiAssetCancelAfter()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2538) | :closed_lock_with_key:  | POST | `/v5/trade/cancel-after` |
| [submitMultiAssetAlgoOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2553) | :closed_lock_with_key:  | POST | `/v5/algo/order` |
| [cancelMultiAssetAlgoOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2562) | :closed_lock_with_key:  | POST | `/v5/algo/cancel_orders` |
| [getMultiAssetAlgoOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2571) | :closed_lock_with_key:  | GET | `/v5/algo/order` |
| [getMultiAssetAlgoOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2580) | :closed_lock_with_key:  | GET | `/v5/algo/order/opens` |
| [getMultiAssetAlgoOrderHistory()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2589) | :closed_lock_with_key:  | GET | `/v5/algo/order/history` |
| [getMultiAssetPositions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2607) | :closed_lock_with_key:  | GET | `/v5/trade/position/opens` |
| [getMultiAssetLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2619) | :closed_lock_with_key:  | GET | `/v5/position/lever` |
| [updateMultiAssetLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2631) | :closed_lock_with_key:  | POST | `/v5/position/lever` |
| [getMultiAssetPositionMode()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2643) | :closed_lock_with_key:  | GET | `/v5/position/mode` |
| [updateMultiAssetPositionMode()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2655) | :closed_lock_with_key:  | POST | `/v5/position/mode` |
| [getMultiAssetRiskLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2667) | :closed_lock_with_key:  | GET | `/v5/position/risk/limit` |
| [getMultiAssetRiskLimitTiers()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2679) | :closed_lock_with_key:  | GET | `/v5/position/risk/limit_tier` |
| [adjustMultiAssetMargin()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2692) | :closed_lock_with_key:  | POST | `/v5/position/margin` |
| [getMultiAssetFundingRateHistory()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2710) |  | GET | `/v5/market/funding_rate_history` |
| [getMultiAssetMarketRiskLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2721) | :closed_lock_with_key:  | GET | `/v5/market/risk/limit` |
| [getMultiAssetFeeCurrencies()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2733) | :closed_lock_with_key:  | GET | `/v5/market/assets_deduction_currency` |
| [getMultiAssetCollateralAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2745) | :closed_lock_with_key:  | GET | `/v5/market/multi_assets_margin` |
| [getCoinMDeliveryAdjustFactor()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2762) |  | GET | `/api/v1/contract_adjustfactor` |
| [getCoinMDeliveryHistoricalOpenInterest()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2773) |  | GET | `/api/v1/contract_his_open_interest` |
| [getCoinMDeliveryTieredMargin()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2784) |  | GET | `/api/v1/contract_ladder_margin` |
| [getCoinMDeliveryAccountRatio()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2795) |  | GET | `/api/v1/contract_elite_account_ratio` |
| [getCoinMDeliveryPositionRatio()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2807) |  | GET | `/api/v1/contract_elite_position_ratio` |
| [getCoinMDeliveryLiquidationOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2819) |  | GET | `/api/v3/contract_liquidation_orders` |
| [getCoinMDeliverySettlementRecords()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2830) |  | GET | `/api/v1/contract_settlement_records` |
| [getCoinMDeliveryRiskReserveBalance()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2841) |  | GET | `/v1/insurance_fund_info` |
| [getCoinMDeliveryRiskReserveHistory()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2852) |  | GET | `/v1/insurance_fund_history` |
| [getCoinMDeliveryContractLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2863) |  | GET | `/api/v1/contract_price_limit` |
| [getCoinMDeliveryOpenInterest()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2874) |  | GET | `/api/v1/contract_open_interest` |
| [getCoinMDeliveryDeliveryPrice()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2887) |  | GET | `/api/v1/contract_delivery_price` |
| [getCoinMDeliveryEstimatedSettlementPrice()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2898) |  | GET | `/api/v1/contract_estimated_settlement_price` |
| [getCoinMDeliverySystemStatus()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2911) |  | GET | `/api/v1/contract_api_state` |
| [getCoinMDeliveryContractInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2922) |  | GET | `/api/v1/contract_contract_info` |
| [getCoinMDeliveryIndexPrice()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2933) |  | GET | `/api/v1/contract_index` |
| [getCoinMDeliveryIndexConstituents()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2944) |  | GET | `/api/market/contract_constituents` |
| [getCoinMDeliveryContractElements()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2955) |  | GET | `/api/v1/contract_query_elements` |
| [getCoinMDeliveryMarketDepth()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2972) |  | GET | `/market/depth` |
| [getCoinMDeliveryMarketBbo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2984) |  | GET | `/market/bbo` |
| [getCoinMDeliveryKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L2995) |  | GET | `/market/history/kline` |
| [getCoinMDeliveryMarkKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3006) |  | GET | `/index/market/history/mark_price_kline` |
| [getCoinMDeliveryTicker()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3017) |  | GET | `/market/detail/merged` |
| [getCoinMDeliveryTickers()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3028) |  | GET | `/v2/market/detail/batch_merged` |
| [getCoinMDeliveryLastTrade()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3039) |  | GET | `/market/trade` |
| [getCoinMDeliveryTradeHistory()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3050) |  | GET | `/market/history/trade` |
| [getCoinMDeliveryIndexKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3062) |  | GET | `/index/market/history/index` |
| [getCoinMDeliveryBasisData()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3073) |  | GET | `/index/market/history/basis` |
| [getCoinMDeliveryAssetValuation()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3090) | :closed_lock_with_key:  | POST | `/api/v1/contract_balance_valuation` |
| [getCoinMDeliveryAccountInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3103) | :closed_lock_with_key:  | POST | `/api/v1/contract_account_info` |
| [getCoinMDeliveryPositionInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3116) | :closed_lock_with_key:  | POST | `/api/v1/contract_position_info` |
| [updateCoinMDeliverySubPermissions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3129) | :closed_lock_with_key:  | POST | `/api/v1/contract_sub_auth` |
| [getCoinMDeliverySubPermissions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3143) | :closed_lock_with_key:  | GET | `/api/v1/contract_sub_auth_list` |
| [getCoinMDeliverySubAccounts()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3154) | :closed_lock_with_key:  | POST | `/api/v1/contract_sub_account_list` |
| [getCoinMDeliverySubAccountsAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3167) | :closed_lock_with_key:  | POST | `/api/v1/contract_sub_account_info_list` |
| [getCoinMDeliverySubAccountAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3180) | :closed_lock_with_key:  | POST | `/api/v1/contract_sub_account_info` |
| [getCoinMDeliverySubPositionInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3194) | :closed_lock_with_key:  | POST | `/api/v1/contract_sub_position_info` |
| [getCoinMDeliveryFinancialRecords()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3208) | :closed_lock_with_key:  | POST | `/api/v3/contract_financial_record` |
| [getCoinMDeliveryFinancialRecordsExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3221) | :closed_lock_with_key:  | POST | `/api/v3/contract_financial_record_exact` |
| [getCoinMDeliveryUserSettlementRecords()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3234) | :closed_lock_with_key:  | POST | `/api/v1/contract_user_settlement_records` |
| [getCoinMDeliveryOrderLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3249) | :closed_lock_with_key:  | POST | `/api/v1/contract_order_limit` |
| [getCoinMDeliveryFee()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3262) | :closed_lock_with_key:  | POST | `/api/v1/contract_fee` |
| [getCoinMDeliveryTransferLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3275) | :closed_lock_with_key:  | POST | `/api/v1/contract_transfer_limit` |
| [getCoinMDeliveryPositionLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3288) | :closed_lock_with_key:  | POST | `/api/v1/contract_position_limit` |
| [getCoinMDeliveryAccountFull()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3301) | :closed_lock_with_key:  | POST | `/api/v1/contract_account_position_info` |
| [transferCoinMDeliveryMasterSub()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3314) | :closed_lock_with_key:  | POST | `/api/v1/contract_master_sub_transfer` |
| [getCoinMDeliveryMasterSubTransfers()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3327) | :closed_lock_with_key:  | POST | `/api/v1/contract_master_sub_transfer_record` |
| [getCoinMDeliveryApiStatus()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3340) | :closed_lock_with_key:  | GET | `/api/v1/contract_api_trading_status` |
| [getCoinMDeliveryAvailableLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3351) | :closed_lock_with_key:  | POST | `/api/v1/contract_available_level_rate` |
| [setCoinMDeliveryCancelAfter()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3370) | :closed_lock_with_key:  | POST | `/api/v1/contract-cancel-after` |
| [submitCoinMDeliveryOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3384) | :closed_lock_with_key:  | POST | `/api/v1/contract_order` |
| [submitCoinMDeliveryBatchOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3397) | :closed_lock_with_key:  | POST | `/api/v1/contract_batchorder` |
| [cancelCoinMDeliveryOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3410) | :closed_lock_with_key:  | POST | `/api/v1/contract_cancel` |
| [cancelCoinMDeliveryAllOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3423) | :closed_lock_with_key:  | POST | `/api/v1/contract_cancelall` |
| [updateCoinMDeliveryLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3436) | :closed_lock_with_key:  | POST | `/api/v1/contract_switch_lever_rate` |
| [getCoinMDeliveryOrderInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3450) | :closed_lock_with_key:  | POST | `/api/v1/contract_order_info` |
| [getCoinMDeliveryOrderDetail()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3463) | :closed_lock_with_key:  | POST | `/api/v1/contract_order_detail` |
| [getCoinMDeliveryOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3476) | :closed_lock_with_key:  | POST | `/api/v1/contract_openorders` |
| [getCoinMDeliveryHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3489) | :closed_lock_with_key:  | POST | `/api/v3/contract_hisorders` |
| [getCoinMDeliveryHistoryOrdersExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3502) | :closed_lock_with_key:  | POST | `/api/v3/contract_hisorders_exact` |
| [getCoinMDeliveryFills()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3515) | :closed_lock_with_key:  | POST | `/api/v3/contract_matchresults` |
| [getCoinMDeliveryFillsExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3528) | :closed_lock_with_key:  | POST | `/api/v3/contract_matchresults_exact` |
| [submitCoinMDeliveryLightningCloseOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3541) | :closed_lock_with_key:  | POST | `/api/v1/lightning_close_position` |
| [submitCoinMDeliveryTriggerOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3560) | :closed_lock_with_key:  | POST | `/api/v1/contract_trigger_order` |
| [cancelCoinMDeliveryTriggerOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3573) | :closed_lock_with_key:  | POST | `/api/v1/contract_trigger_cancel` |
| [cancelCoinMDeliveryAllTriggerOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3587) | :closed_lock_with_key:  | POST | `/api/v1/contract_trigger_cancelall` |
| [getCoinMDeliveryTriggerOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3600) | :closed_lock_with_key:  | POST | `/api/v1/contract_trigger_openorders` |
| [getCoinMDeliveryTriggerHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3613) | :closed_lock_with_key:  | POST | `/api/v1/contract_trigger_hisorders` |
| [submitCoinMDeliveryTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3626) | :closed_lock_with_key:  | POST | `/api/v1/contract_tpsl_order` |
| [cancelCoinMDeliveryTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3639) | :closed_lock_with_key:  | POST | `/api/v1/contract_tpsl_cancel` |
| [cancelCoinMDeliveryAllTpslOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3653) | :closed_lock_with_key:  | POST | `/api/v1/contract_tpsl_cancelall` |
| [getCoinMDeliveryTpslOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3666) | :closed_lock_with_key:  | POST | `/api/v1/contract_tpsl_openorders` |
| [getCoinMDeliveryTpslHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3679) | :closed_lock_with_key:  | POST | `/api/v1/contract_tpsl_hisorders` |
| [getCoinMDeliveryRelationTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3692) | :closed_lock_with_key:  | POST | `/api/v1/contract_relation_tpsl_order` |
| [submitCoinMDeliveryTrailingOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3706) | :closed_lock_with_key:  | POST | `/api/v1/contract_track_order` |
| [cancelCoinMDeliveryTrailingOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3719) | :closed_lock_with_key:  | POST | `/api/v1/contract_track_cancel` |
| [cancelCoinMDeliveryAllTrailingOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3733) | :closed_lock_with_key:  | POST | `/api/v1/contract_track_cancelall` |
| [getCoinMDeliveryTrailingOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3746) | :closed_lock_with_key:  | POST | `/api/v1/contract_track_openorders` |
| [getCoinMDeliveryTrailingHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3759) | :closed_lock_with_key:  | POST | `/api/v1/contract_track_hisorders` |
| [getCoinMPerpAdjustFactor()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3780) |  | GET | `/swap-api/v1/swap_adjustfactor` |
| [getCoinMPerpHistoricalOpenInterest()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3791) |  | GET | `/swap-api/v1/swap_his_open_interest` |
| [getCoinMPerpTieredMargin()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3802) |  | GET | `/swap-api/v1/swap_ladder_margin` |
| [getCoinMPerpAccountRatio()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3813) |  | GET | `/swap-api/v1/swap_elite_account_ratio` |
| [getCoinMPerpPositionRatio()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3825) |  | GET | `/swap-api/v1/swap_elite_position_ratio` |
| [getCoinMPerpEstimatedSettlementPrice()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3837) |  | GET | `/swap-api/v1/swap_estimated_settlement_price` |
| [getCoinMPerpSystemStatus()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3850) |  | GET | `/swap-api/v1/swap_api_state` |
| [getCoinMPerpFundingRate()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3861) |  | GET | `/swap-api/v1/swap_funding_rate` |
| [getCoinMPerpFundingRates()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3872) |  | GET | `/swap-api/v1/swap_batch_funding_rate` |
| [getCoinMPerpHistoricalFundingRate()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3883) |  | GET | `/swap-api/v1/swap_historical_funding_rate` |
| [getCoinMPerpLiquidationOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3896) |  | GET | `/swap-api/v3/swap_liquidation_orders` |
| [getCoinMPerpSettlementRecords()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3907) |  | GET | `/swap-api/v1/swap_settlement_records` |
| [getCoinMPerpContractInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3918) |  | GET | `/swap-api/v1/swap_contract_info` |
| [getCoinMPerpIndexPrice()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3929) |  | GET | `/swap-api/v1/swap_index` |
| [getCoinMPerpContractElements()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3940) |  | GET | `/swap-api/v1/swap_query_elements` |
| [getCoinMPerpIndexConstituents()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3951) |  | GET | `/swap-api/market/swap_constituents` |
| [getCoinMPerpRiskReserveBalance()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3962) |  | GET | `/v1/insurance_fund_info` |
| [getCoinMPerpRiskReserveHistory()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3973) |  | GET | `/v1/insurance_fund_history` |
| [getCoinMPerpPriceLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3984) |  | GET | `/swap-api/v1/swap_price_limit` |
| [getCoinMPerpOpenInterest()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L3995) |  | GET | `/swap-api/v1/swap_open_interest` |
| [getCoinMPerpMarketDepth()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4012) |  | GET | `/swap-ex/market/depth` |
| [getCoinMPerpMarketBbo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4024) |  | GET | `/swap-ex/market/bbo` |
| [getCoinMPerpKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4035) |  | GET | `/swap-ex/market/history/kline` |
| [getCoinMPerpMarkKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4046) |  | GET | `/index/market/history/swap_mark_price_kline` |
| [getCoinMPerpTicker()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4057) |  | GET | `/swap-ex/market/detail/merged` |
| [getCoinMPerpTickers()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4068) |  | GET | `/v2/swap-ex/market/detail/batch_merged` |
| [getCoinMPerpLastTrade()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4079) |  | GET | `/swap-ex/market/trade` |
| [getCoinMPerpTradeHistory()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4090) |  | GET | `/swap-ex/market/history/trade` |
| [getCoinMPerpPremiumIndexKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4102) |  | GET | `/index/market/history/swap_premium_index_kline` |
| [getCoinMPerpFundingRateKlines()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4113) |  | GET | `/index/market/history/swap_estimated_rate_kline` |
| [getCoinMPerpBasisData()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4124) |  | GET | `/index/market/history/swap_basis` |
| [getCoinMPerpAssetValuation()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4141) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_balance_valuation` |
| [getCoinMPerpAccountInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4154) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_account_info` |
| [getCoinMPerpPositionInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4167) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_position_info` |
| [getCoinMPerpAccountFull()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4180) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_account_position_info` |
| [getCoinMPerpSubPermissions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4193) | :closed_lock_with_key:  | GET | `/swap-api/v1/swap_sub_auth_list` |
| [updateCoinMPerpSubPermissions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4204) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_sub_auth` |
| [getCoinMPerpSubAccounts()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4218) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_sub_account_list` |
| [getCoinMPerpSubAccountsAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4231) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_sub_account_info_list` |
| [getCoinMPerpSubAccountAssets()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4244) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_sub_account_info` |
| [getCoinMPerpSubPositions()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4258) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_sub_position_info` |
| [getCoinMPerpFinancialRecords()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4272) | :closed_lock_with_key:  | POST | `/swap-api/v3/swap_financial_record` |
| [getCoinMPerpFinancialRecordsExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4285) | :closed_lock_with_key:  | POST | `/swap-api/v3/swap_financial_record_exact` |
| [getCoinMPerpAvailableLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4298) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_available_level_rate` |
| [getCoinMPerpOrderLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4311) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_order_limit` |
| [getCoinMPerpFee()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4324) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_fee` |
| [getCoinMPerpTransferLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4337) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_transfer_limit` |
| [getCoinMPerpPositionLimit()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4350) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_position_limit` |
| [transferCoinMPerpMasterSub()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4363) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_master_sub_transfer` |
| [getCoinMPerpMasterSubTransfers()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4376) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_master_sub_transfer_record` |
| [getCoinMPerpApiStatus()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4389) | :closed_lock_with_key:  | GET | `/swap-api/v1/swap_api_trading_status` |
| [setCoinMPerpCancelAfter()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4406) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap-cancel-after` |
| [submitCoinMPerpOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4420) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_order` |
| [submitCoinMPerpBatchOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4433) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_batchorder` |
| [cancelCoinMPerpOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4446) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_cancel` |
| [cancelCoinMPerpAllOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4459) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_cancelall` |
| [updateCoinMPerpLeverage()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4472) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_switch_lever_rate` |
| [getCoinMPerpOrderInfo()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4486) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_order_info` |
| [getCoinMPerpOrderDetail()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4499) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_order_detail` |
| [getCoinMPerpOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4512) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_openorders` |
| [getCoinMPerpHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4525) | :closed_lock_with_key:  | POST | `/swap-api/v3/swap_hisorders` |
| [getCoinMPerpHistoryOrdersExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4538) | :closed_lock_with_key:  | POST | `/swap-api/v3/swap_hisorders_exact` |
| [getCoinMPerpFills()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4551) | :closed_lock_with_key:  | POST | `/swap-api/v3/swap_matchresults` |
| [getCoinMPerpFillsExact()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4564) | :closed_lock_with_key:  | POST | `/swap-api/v3/swap_matchresults_exact` |
| [submitCoinMPerpLightningCloseOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4577) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_lightning_close_position` |
| [submitCoinMPerpTriggerOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4596) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_trigger_order` |
| [cancelCoinMPerpTriggerOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4609) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_trigger_cancel` |
| [cancelCoinMPerpAllTriggerOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4623) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_trigger_cancelall` |
| [getCoinMPerpTriggerOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4636) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_trigger_openorders` |
| [getCoinMPerpTriggerHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4649) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_trigger_hisorders` |
| [submitCoinMPerpTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4662) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_tpsl_order` |
| [cancelCoinMPerpTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4675) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_tpsl_cancel` |
| [cancelCoinMPerpAllTpslOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4688) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_tpsl_cancelall` |
| [getCoinMPerpTpslOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4701) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_tpsl_openorders` |
| [getCoinMPerpTpslHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4714) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_tpsl_hisorders` |
| [getCoinMPerpRelationTpslOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4727) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_relation_tpsl_order` |
| [submitCoinMPerpTrailingOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4740) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_track_order` |
| [cancelCoinMPerpTrailingOrder()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4753) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_track_cancel` |
| [cancelCoinMPerpAllTrailingOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4766) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_track_cancelall` |
| [getCoinMPerpTrailingOpenOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4779) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_track_openorders` |
| [getCoinMPerpTrailingHistoryOrders()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4792) | :closed_lock_with_key:  | POST | `/swap-api/v1/swap_track_hisorders` |
| [getCopyTraderInstruments()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4811) | :closed_lock_with_key:  | GET | `/api/v6/copyTrading/trader/instruments` |
| [getCopyTraderStatistics()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4822) | :closed_lock_with_key:  | GET | `/api/v6/copyTrading/trader/statistics` |
| [getCopyTraderProfitSharingHistory()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4833) | :closed_lock_with_key:  | GET | `/api/v6/copyTrading/trader/profit-sharing-history` |
| [getCopyTraderProfitSharingHistorySummary()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4849) | :closed_lock_with_key:  | GET | `/api/v6/copyTrading/trader/profit-sharing-history-summary` |
| [getCopyTraderUPNLSharingSummary()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4865) | :closed_lock_with_key:  | GET | `/api/v6/copyTrading/trader/unrealized-profit-sharing-summary` |
| [getCopyTraderFollowers()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4881) | :closed_lock_with_key:  | GET | `/api/v6/copyTrading/trader/followers` |
| [removeCopyTraderFollower()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4892) | :closed_lock_with_key:  | POST | `/api/v6/copyTrading/trader/follower` |
| [submitCopyTraderTransfer()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4907) | :closed_lock_with_key:  | POST | `/api/v6/copyTrading/trader/transfer` |
| [updateCopyTraderFollowerSettings()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4920) | :closed_lock_with_key:  | POST | `/api/v6/copyTrading/trader/follower-settings` |
| [getCopyTraderConfig()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4933) | :closed_lock_with_key:  | POST | `/api/v6/copyTrading/trader/config` |
| [createCopyTraderApikey()](https://github.com/sieblyio/htx-api/blob/main/src/FuturesClient.ts#L4946) | :closed_lock_with_key:  | POST | `/api/v6/copyTrading/trader/apikey` |

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
