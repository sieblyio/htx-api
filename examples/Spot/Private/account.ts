/* eslint-disable @typescript-eslint/no-unused-vars */
import { SpotClient } from '../../../src/index.js';

// This example shows how to call Kraken API endpoint with either node.js,
// javascript (js) or typescript (ts) with the npm module "@siebly/kraken-api" for Kraken exchange
// for ACCOUNT INFORMATION

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
 * - Data - Query ledger entries
 *
 */
const client = new SpotClient({
  apiKey: process.env.API_SPOT_KEY || 'insertApiKeyHere',
  apiSecret: process.env.API_SPOT_SECRET || 'insertApiSecretHere',
});

async function getAccountBalance() {
  try {
    // Get all cash balances (net of pending withdrawals)
    const balances = await client.getAccountBalance();
    console.log('Account Balances: ', JSON.stringify(balances, null, 2));

    // Note: Staking/Earn assets may have these extensions:
    // .B - balances in new yield-bearing products
    // .F - balances earning automatically in Kraken Rewards
    // .T - tokenized assets
  } catch (e) {
    console.error('Get account balance error: ', e);
  }
}

async function getExtendedBalance() {
  try {
    // Get extended balances including credits and held amounts
    // Available balance = balance + credit - credit_used - hold_trade
    const extendedBalances = await client.getExtendedBalance();
    console.log(
      'Extended Balances: ',
      JSON.stringify(extendedBalances, null, 2),
    );
  } catch (e) {
    console.error('Get extended balance error: ', e);
  }
}

async function getTradeBalance() {
  try {
    // Get trade balance summary (margin info)
    const tradeBalance = await client.getTradeBalance();
    console.log('Trade Balance: ', JSON.stringify(tradeBalance, null, 2));

    // Response includes:
    // - eb: equivalent balance
    // - tb: trade balance
    // - m: margin amount
    // - n: unrealized P&L
    // - e: equity
    // - mf: free margin
  } catch (e) {
    console.error('Get trade balance error: ', e);
  }
}

async function getLedgers() {
  try {
    // Query specific ledger entries by ID
    const ledgers = await client.getLedgers({
      id: 'LUI2RA-CJFLB-EN5I4P,L2QE42-IGSZ3-WEVTLK',
      trades: false,
    });
    console.log('Ledger Entries: ', JSON.stringify(ledgers, null, 2));

    // Ledger entry types include:
    // - trade, deposit, withdrawal, transfer, margin
    // - adjustment, rollover, spend, receive, settled
    // - credit, staking, reward, dividend, sale, conversion
  } catch (e) {
    console.error('Query ledgers error: ', e);
  }
}

async function getLedgersInfo() {
  try {
    // Get ledger info with filters (returns 50 most recent by default)
    const ledgersInfo = await client.getLedgersInfo({
      asset: 'XBT', // Filter by asset
      type: 'deposit', // Filter by type
    });
    console.log('Ledgers Info: ', JSON.stringify(ledgersInfo, null, 2));
  } catch (e) {
    console.error('Get ledgers info error: ', e);
  }
}

async function getTradingVolume() {
  try {
    // Get 30-day USD trading volume and fee schedule
    const tradingVolume = await client.getTradingVolume({
      pair: 'XBTUSD,ETHUSD',
    });
    console.log('Trading Volume: ', JSON.stringify(tradingVolume, null, 2));

    // Response includes:
    // - currency: volume currency
    // - volume: current trading volume
    // - fees: fee schedule by pair
    // - fees_maker: maker fee schedule
  } catch (e) {
    console.error('Get trading volume error: ', e);
  }
}

// Uncomment the function you want to test:

getAccountBalance();
// getExtendedBalance();
// getTradeBalance();
// getLedgers();
// getLedgersInfo();
// getTradingVolume();
