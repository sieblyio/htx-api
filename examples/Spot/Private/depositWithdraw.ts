/* eslint-disable @typescript-eslint/no-unused-vars */
import { SpotClient } from '../../../src/index.js';

// This example shows how to call Kraken API endpoint with either node.js,
// javascript (js) or typescript (ts) with the npm module "@siebly/kraken-api" for Kraken exchange
// for DEPOSIT AND WITHDRAWAL

/**
 * import { SpotClient } from '@siebly/kraken-api';
 */

// initialise the client
/**
 *
 * Kraken API uses API Key and Private Key (base64 encoded)
 *
 * Example:
 * {
 *   apiKey: 'your-api-key',
 *   apiSecret: 'your-base64-encoded-private-key',
 * }
 *
 * API Key Permissions Required:
 * - Funds permissions - Query
 * - Funds permissions - Deposit
 * - Funds permissions - Withdraw
 * - Data - Query ledger entries
 *
 */
const client = new SpotClient({
  apiKey: process.env.API_SPOT_KEY || 'insertApiKeyHere',
  apiSecret: process.env.API_SPOT_SECRET || 'insertApiSecretHere',
});

async function withdrawFunds() {
  try {
    // Make a withdrawal request
    const withdrawal = await client.submitWithdrawal({
      asset: 'XBT',
      key: 'btc_2709', // Withdrawal key name from your account
      amount: '0.725',
      address: 'bc1kar0ssrr7xf3vy5l6d3lydnwkre5og2zz3f5ldq', // Optional confirmation
    });
    console.log('Withdrawal Result: ', JSON.stringify(withdrawal, null, 2));

    // Response includes:
    // - refid: Reference ID for the withdrawal
  } catch (e) {
    console.error('Withdraw funds error: ', e);
  }
}

async function getDepositMethods() {
  try {
    // Get available deposit methods for an asset
    const depositMethods = await client.getDepositMethods({
      asset: 'XBT',
    });
    console.log('Deposit Methods: ', JSON.stringify(depositMethods, null, 2));

    // Response includes:
    // - method: Name of deposit method
    // - limit: Maximum net amount that can be deposited
    // - fee: Fees that will be paid
    // - address-setup-fee: Whether method has setup fee
    // - gen-address: Whether new addresses can be generated
    // - minimum: Minimum net amount
  } catch (e) {
    console.error('Get deposit methods error: ', e);
  }
}

async function getDepositAddresses() {
  try {
    // Get or generate deposit address
    const depositAddresses = await client.getDepositAddresses({
      asset: 'XBT',
      method: 'Bitcoin',
      new: false, // Set to true to generate new address
    });
    console.log(
      'Deposit Addresses: ',
      JSON.stringify(depositAddresses, null, 2),
    );

    // Response includes:
    // - address: Deposit address
    // - expiretm: Expiration time or 0 if not expiring
    // - new: Whether address has ever been used
    // - tag: Contains tags/memos for XRP, STX, XLM, EOS
  } catch (e) {
    console.error('Get deposit addresses error: ', e);
  }
}

async function generateNewDepositAddress() {
  try {
    // Generate a new deposit address
    const newAddress = await client.getDepositAddresses({
      asset: 'XBT',
      method: 'Bitcoin',
      new: true, // Generate new address
    });
    console.log('New Deposit Address: ', JSON.stringify(newAddress, null, 2));
  } catch (e) {
    console.error('Generate new deposit address error: ', e);
  }
}

async function getWithdrawalMethods() {
  try {
    // Get available withdrawal methods
    const withdrawalMethods = await client.getWithdrawalMethods({
      asset: 'XBT',
    });
    console.log(
      'Withdrawal Methods: ',
      JSON.stringify(withdrawalMethods, null, 2),
    );

    // Response includes:
    // - asset: Name of asset being withdrawn
    // - method: Name of withdrawal method
    // - network: Blockchain/network name
    // - minimum: Minimum net amount that can be withdrawn
  } catch (e) {
    console.error('Get withdrawal methods error: ', e);
  }
}

async function getWithdrawalAddresses() {
  try {
    // Get withdrawal addresses
    const withdrawalAddresses = await client.getWithdrawalAddresses({
      asset: 'XBT',
      verified: true, // Filter by verification status
    });
    console.log(
      'Withdrawal Addresses: ',
      JSON.stringify(withdrawalAddresses, null, 2),
    );

    // Response includes:
    // - address: Withdrawal address
    // - asset: Asset name
    // - method: Withdrawal method
    // - key: Withdrawal key name
    // - tag: Tags/memos for XRP, STX, XLM, EOS
    // - verified: Verification status
  } catch (e) {
    console.error('Get withdrawal addresses error: ', e);
  }
}

async function getWithdrawalAddressByKey() {
  try {
    // Find withdrawal address by key name
    const addressByKey = await client.getWithdrawalAddresses({
      key: 'btc_2709', // Withdrawal key name
    });
    console.log(
      'Withdrawal Address by Key: ',
      JSON.stringify(addressByKey, null, 2),
    );
  } catch (e) {
    console.error('Get withdrawal address by key error: ', e);
  }
}

async function getWithdrawalsStatus() {
  try {
    // Get status of recent withdrawals
    const withdrawalsStatus = await client.getWithdrawalsStatus({
      asset: 'XBT',
      method: 'Bitcoin',
    });
    console.log(
      'Withdrawals Status: ',
      JSON.stringify(withdrawalsStatus, null, 2),
    );

    // Status values:
    // - Initial: withdrawal just created
    // - Pending: withdrawal pending
    // - Settled: withdrawal settled
    // - Success: withdrawal successful
    // - Failure: withdrawal failed

    // Status properties (if available):
    // - cancel-pending: cancelation requested
    // - canceled: canceled
    // - cancel-denied: cancelation denied
    // - return: return transaction by Kraken
    // - onhold: on hold pending review
  } catch (e) {
    console.error('Get withdrawals status error: ', e);
  }
}

async function getWithdrawalsStatusWithPagination() {
  try {
    // Get withdrawals with pagination
    const withdrawalsPaginated = await client.getWithdrawalsStatus({
      asset: 'XBT',
      cursor: true, // Enable pagination
      limit: 10, // Results per page
    });
    console.log(
      'Withdrawals (Paginated): ',
      JSON.stringify(withdrawalsPaginated, null, 2),
    );
  } catch (e) {
    console.error('Get paginated withdrawals error: ', e);
  }
}

async function getDepositsStatus() {
  try {
    // Get status of recent deposits
    const depositsStatus = await client.getDepositsStatus({
      asset: 'XBT',
      method: 'Bitcoin',
    });
    console.log('Deposits Status: ', JSON.stringify(depositsStatus, null, 2));

    // Similar status values as withdrawals
  } catch (e) {
    console.error('Get deposits status error: ', e);
  }
}

async function cancelWithdrawal() {
  try {
    // Cancel a recent withdrawal (if not yet processed)
    const cancelResult = await client.cancelWithdrawal({
      asset: 'XBT',
      refid: 'AGBSO6T-UFMTTQ-I7KGS6', // Reference ID from withdrawal
    });
    console.log('Cancel Withdrawal: ', JSON.stringify(cancelResult, null, 2));

    // Returns true if cancellation successful
  } catch (e) {
    console.error('Cancel withdrawal error: ', e);
  }
}

async function getWithdrawalInfo() {
  try {
    // Get withdrawal fee information before withdrawing
    const withdrawalInfo = await client.getWithdrawalInfo({
      asset: 'XBT',
      key: 'btc_2709',
      amount: '0.725',
    });
    console.log('Withdrawal Info: ', JSON.stringify(withdrawalInfo, null, 2));

    // Response includes:
    // - method: Withdrawal method
    // - limit: Maximum amount that can be withdrawn
    // - amount: Net amount to be withdrawn
    // - fee: Withdrawal fee
  } catch (e) {
    console.error('Get withdrawal info error: ', e);
  }
}

async function transferToFutures() {
  try {
    const transfer = await client.submitTransferToFutures({
      asset: 'EUR',
      amount: '10',
      from: 'Spot Wallet',
      to: 'Futures Wallet',
    });
    console.log('Transfer to Futures: ', JSON.stringify(transfer, null, 2));
  } catch (e) {
    console.error('Transfer to futures error: ', e);
  }
}

async function transferToSubaccount() {
  try {
    const transfer = await client.submitSubaccountTransfer({
      asset: 'EUR',
      amount: '50',
      from: 'UID', // get From API, getSubaccounts()
      to: 'UID', // get From API, getSubaccounts()
    });
    console.log('Transfer to Subaccount: ', JSON.stringify(transfer, null, 2));
  } catch (e) {
    console.error('Transfer to subaccount error: ', e);
  }
}

// Uncomment the function you want to test:

// withdrawFunds();
// getDepositMethods();
// getDepositAddresses();
// generateNewDepositAddress();
// getWithdrawalMethods();
// getWithdrawalAddresses();
// getWithdrawalAddressByKey();
// getWithdrawalsStatus();
// getWithdrawalsStatusWithPagination();
// getDepositsStatus();
// cancelWithdrawal();
// getWithdrawalInfo();
// transferToFutures();
// transferToSubaccount();
