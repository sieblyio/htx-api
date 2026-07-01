/* eslint-disable @typescript-eslint/no-unused-vars */
import { SpotClient } from '../../../src/index.js';

// This example shows how to call HTX Spot API endpoints for ACCOUNT INFORMATION.

/**
 * import { SpotClient } from '@siebly/htx-api';
 */

/**
 * HTX API uses API Key and API Secret.
 *
 * Example:
 * {
 *   apiKey: 'your-api-key',
 *   apiSecret: 'your-api-secret',
 * }
 *
 * API Key Permissions Required:
 * - Read access for account and balance queries
 */
const client = new SpotClient({
  apiKey: process.env.API_SPOT_KEY || 'insertApiKeyHere',
  apiSecret: process.env.API_SPOT_SECRET || 'insertApiSecretHere',
});

async function getAccounts() {
  try {
    const accounts = await client.getAccounts();
    console.log('Accounts: ', JSON.stringify(accounts, null, 2));

    // Use the spot account id for trading and balance queries
    const spotAccount = accounts.data?.find(
      (account) => account.type === 'spot',
    );
    console.log('Spot Account ID: ', spotAccount?.id);
  } catch (e) {
    console.error('Get accounts error: ', e);
  }
}

async function getAccountBalance() {
  try {
    const accounts = await client.getAccounts();
    const accountId = accounts.data?.find(
      (account) => account.type === 'spot',
    )?.id;

    if (!accountId) {
      console.error('No spot account id found');
      return;
    }

    const balance = await client.getAccountBalance({ accountId });
    console.log('Account Balance: ', JSON.stringify(balance, null, 2));
  } catch (e) {
    console.error('Get account balance error: ', e);
  }
}

async function getAccountValuation() {
  try {
    const valuation = await client.getAccountValuation({
      accountType: 'spot',
      valuationCurrency: 'USD',
    });
    console.log('Account Valuation: ', JSON.stringify(valuation, null, 2));
  } catch (e) {
    console.error('Get account valuation error: ', e);
  }
}

async function getAssetValuation() {
  try {
    const assetValuation = await client.getAssetValuation({
      accountType: 'spot',
      valuationCurrency: 'BTC',
    });
    console.log('Asset Valuation: ', JSON.stringify(assetValuation, null, 2));
  } catch (e) {
    console.error('Get asset valuation error: ', e);
  }
}

async function getAccountLedger() {
  try {
    const ledger = await client.getAccountLedger({
      limit: 50,
    });
    console.log('Account Ledger: ', JSON.stringify(ledger, null, 2));
  } catch (e) {
    console.error('Get account ledger error: ', e);
  }
}

async function getFeeRate() {
  try {
    const feeRate = await client.getFeeRate({ symbols: 'btcusdt,ethusdt' });
    console.log('Fee Rate: ', JSON.stringify(feeRate, null, 2));
  } catch (e) {
    console.error('Get fee rate error: ', e);
  }
}

// Uncomment the function you want to test:

getAccounts();
// getAccountBalance();
// getAccountValuation();
// getAssetValuation();
// getAccountLedger();
// getFeeRate();
