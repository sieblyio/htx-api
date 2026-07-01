/* eslint-disable @typescript-eslint/no-unused-vars */
import { FuturesClient } from '../../../src/index.js';

// This example shows how to call HTX Derivatives API endpoints for ACCOUNT INFORMATION.

/**
 * import { FuturesClient } from '@siebly/htx-api';
 */

const client = new FuturesClient({
  apiKey: process.env.API_FUTURES_KEY || 'insertApiKeyHere',
  apiSecret: process.env.API_FUTURES_SECRET || 'insertApiSecretHere',
});

const contractCode = 'BTC-USDT';

async function getLinearSwapAccountType() {
  try {
    const accountType = await client.getLinearSwapAccountType();
    console.log('Account Type: ', JSON.stringify(accountType, null, 2));
  } catch (e) {
    console.error('Get account type error: ', e);
  }
}

async function getCrossAccountInfo() {
  try {
    const accountInfo = await client.getLinearSwapCrossAccountInfo();
    console.log('Cross Account Info: ', JSON.stringify(accountInfo, null, 2));
  } catch (e) {
    console.error('Get cross account info error: ', e);
  }
}

async function getCrossPositions() {
  try {
    const positions = await client.getLinearSwapCrossPositions({
      contract_code: contractCode,
    });
    console.log('Cross Positions: ', JSON.stringify(positions, null, 2));
  } catch (e) {
    console.error('Get cross positions error: ', e);
  }
}

async function getCrossFills() {
  try {
    const fills = await client.getLinearSwapCrossFills({
      contract: contractCode,
      trade_type: 0,
    });
    console.log('Cross Fills: ', JSON.stringify(fills, null, 2));
  } catch (e) {
    console.error('Get cross fills error: ', e);
  }
}

async function getMultiAssetAccountBalance() {
  try {
    const balance = await client.getMultiAssetAccountBalance();
    console.log(
      'Multi-Asset Account Balance: ',
      JSON.stringify(balance, null, 2),
    );
  } catch (e) {
    console.error('Get multi-asset account balance error: ', e);
  }
}

async function getFinancialRecords() {
  try {
    const records = await client.getLinearSwapFinancialRecords({
      mar_acct: 'USDT',
      contract: contractCode,
      type: '3,4,5,6',
    });
    console.log('Financial Records: ', JSON.stringify(records, null, 2));
  } catch (e) {
    console.error('Get financial records error: ', e);
  }
}

async function transferLinearSwapInner() {
  try {
    const transfer = await client.transferLinearSwapInner({
      asset: 'USDT',
      from_margin_account: 'USDT',
      to_margin_account: contractCode,
      amount: '10',
    });
    console.log('Inner Transfer Result: ', JSON.stringify(transfer, null, 2));
  } catch (e) {
    console.error('Transfer linear swap inner error: ', e);
  }
}

async function getMultiAssetPositions() {
  try {
    const positions = await client.getMultiAssetPositions({
      contract_code: contractCode,
    });
    console.log('Multi-Asset Positions: ', JSON.stringify(positions, null, 2));
  } catch (e) {
    console.error('Get multi-asset positions error: ', e);
  }
}

// Uncomment the function you want to test:

// getLinearSwapAccountType();
// getCrossAccountInfo();
// getCrossPositions();
// getCrossFills();
// getMultiAssetAccountBalance();
// getFinancialRecords();
// transferLinearSwapInner();
// getMultiAssetPositions();
