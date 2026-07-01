/* eslint-disable @typescript-eslint/no-unused-vars */
import { SpotClient } from '../../../src/index.js';

// This example shows how to call HTX Spot API endpoints for DEPOSIT AND WITHDRAWAL.

/**
 * import { SpotClient } from '@siebly/htx-api';
 */

const client = new SpotClient({
  apiKey: process.env.API_SPOT_KEY || 'insertApiKeyHere',
  apiSecret: process.env.API_SPOT_SECRET || 'insertApiSecretHere',
});

async function getDepositAddress() {
  try {
    const depositAddress = await client.getDepositAddress({ currency: 'btc' });
    console.log('Deposit Address: ', JSON.stringify(depositAddress, null, 2));
  } catch (e) {
    console.error('Get deposit address error: ', e);
  }
}

async function getWithdrawQuota() {
  try {
    const withdrawQuota = await client.getWithdrawQuota({ currency: 'btc' });
    console.log('Withdraw Quota: ', JSON.stringify(withdrawQuota, null, 2));
  } catch (e) {
    console.error('Get withdraw quota error: ', e);
  }
}

async function getWithdrawAddress() {
  try {
    const withdrawAddress = await client.getWithdrawAddress({
      currency: 'btc',
    });
    console.log(
      'Withdraw Addresses: ',
      JSON.stringify(withdrawAddress, null, 2),
    );
  } catch (e) {
    console.error('Get withdraw address error: ', e);
  }
}

async function submitWithdraw() {
  try {
    const withdrawal = await client.submitWithdraw({
      address: 'your-withdraw-address-here',
      currency: 'usdt',
      amount: '10',
      fee: 0,
      chain: 'trc20usdt',
      'client-order-id': client.generateNewOrderID(),
    });
    console.log('Withdrawal Result: ', JSON.stringify(withdrawal, null, 2));
  } catch (e) {
    console.error('Submit withdraw error: ', e);
  }
}

async function getDepositWithdrawHistory() {
  try {
    const deposits = await client.getDepositWithdrawHistory({
      type: 'deposit',
      currency: 'btc',
    });
    console.log('Deposit History: ', JSON.stringify(deposits, null, 2));

    const withdrawals = await client.getDepositWithdrawHistory({
      type: 'withdraw',
      currency: 'btc',
    });
    console.log('Withdraw History: ', JSON.stringify(withdrawals, null, 2));
  } catch (e) {
    console.error('Get deposit/withdraw history error: ', e);
  }
}

async function cancelWithdraw() {
  try {
    const cancelResult = await client.cancelWithdraw(123456789);
    console.log(
      'Cancel Withdraw Result: ',
      JSON.stringify(cancelResult, null, 2),
    );
  } catch (e) {
    console.error('Cancel withdraw error: ', e);
  }
}

async function transferSpotToFutures() {
  try {
    const transfer = await client.submitFuturesTransfer({
      currency: 'usdt',
      amount: '10',
      type: 'pro-to-futures',
    });
    console.log(
      'Spot to Futures Transfer: ',
      JSON.stringify(transfer, null, 2),
    );
  } catch (e) {
    console.error('Transfer spot to futures error: ', e);
  }
}

async function transferToSubUser() {
  try {
    const transfer = await client.submitSubUserTransfer({
      'sub-uid': 123456789,
      currency: 'usdt',
      amount: '10',
      type: 'master-transfer-in',
    });
    console.log('Sub User Transfer: ', JSON.stringify(transfer, null, 2));
  } catch (e) {
    console.error('Transfer to sub user error: ', e);
  }
}

// Uncomment the function you want to test:

// getDepositAddress();
// getWithdrawQuota();
// getWithdrawAddress();
// submitWithdraw();
// getDepositWithdrawHistory();
// cancelWithdraw();
// transferSpotToFutures();
// transferToSubUser();
