/* eslint-disable @typescript-eslint/no-unused-vars */
import { DerivativesClient } from '../../../src/index.js';

// This example shows how to call Kraken API endpoint with either node.js,
// javascript (js) or typescript (ts) with the npm module "@siebly/kraken-api" for Kraken exchange
// for FUTURES ACCOUNT INFORMATION

/**
 * import { DerivativesClient } from '@siebly/kraken-api';
 */

// initialise the client
/**
 *
 * Kraken Futures API uses API Key and API Secret
 *
 * Example:
 * {
 *   apiKey: 'your-api-key',
 *   apiSecret: 'your-api-secret',
 * }
 *
 * API Key Permissions Required:
 * - Read access for account information
 * - Withdrawal permissions for transfers
 *
 */
const client = new DerivativesClient({
  apiKey: process.env.API_FUTURES_KEY || 'insertApiKeyHere',
  apiSecret: process.env.API_FUTURES_SECRET || 'insertApiSecretHere',
});

async function getWallets() {
  try {
    // Get all wallets (cash and margin accounts)
    const wallets = await client.getAccounts();
    console.log('Wallets: ', JSON.stringify(wallets, null, 2));

    // Response includes:
    // - cash: Cash account with balances
    // - flex: Multi-collateral wallet with margin info
    // - Available margin, portfolio value, PnL
    // - Initial/maintenance margin requirements
    // For each margin account:
    //   - balances, auxiliary (pv, pnl, af, funding)
    //   - marginRequirements (im, mm, lt, tt)
    //   - triggerEstimates
  } catch (e) {
    console.error('Get wallets error: ', e);
  }
}

async function getOpenPositions() {
  try {
    // Get all open Futures positions
    const openPositions = await client.getOpenPositions();
    console.log('Open Positions: ', JSON.stringify(openPositions, null, 2));

    // Response includes for each position:
    // - symbol: Futures symbol
    // - side: long or short
    // - size: Position size
    // - price: Average entry price
    // - fillTime: When position was opened
    // - unrealizedFunding: Unrealized funding
  } catch (e) {
    console.error('Get open positions error: ', e);
  }
}

async function getFills() {
  try {
    // Get filled orders history (last 100)
    const fills = await client.getFills();
    console.log('Fills: ', JSON.stringify(fills, null, 2));

    // Response includes for each fill:
    // - fill_id: Unique fill identifier
    // - order_id: Associated order ID
    // - symbol: Futures symbol
    // - side: buy or sell
    // - size: Fill size
    // - price: Fill price
    // - fillTime: Execution time
    // - fillType: maker, taker, liquidation, etc.
  } catch (e) {
    console.error('Get fills error: ', e);
  }
}

async function getFillsBeforeTime() {
  try {
    // Get fills before specific time
    const fillsBeforeTime = await client.getFills({
      lastFillTime: new Date(Date.now() - 86400000).toISOString(), // 24h ago
    });
    console.log('Fills (24h ago): ', JSON.stringify(fillsBeforeTime, null, 2));

    // Returns 100 fills before specified time
  } catch (e) {
    console.error('Get fills before time error: ', e);
  }
}

async function initiateWalletTransfer() {
  try {
    // Transfer between margin accounts or to/from cash account
    const transfer = await client.submitWalletTransfer({
      fromAccount: 'flex',
      toAccount: 'fi_xbtusd',
      unit: 'BTC',
      amount: 1,
    });
    console.log('Transfer Result: ', JSON.stringify(transfer, null, 2));

    // Transfers funds between accounts instantly
  } catch (e) {
    console.error('Initiate wallet transfer error: ', e);
  }
}

async function initiateWithdrawalToSpot() {
  try {
    // Withdraw from Futures to Spot wallet
    const withdrawal = await client.submitTransferToSpot({
      currency: 'USDT',
      amount: '100',
      sourceWallet: 'cash', // Default is cash wallet
    });
    console.log('Withdrawal Result: ', JSON.stringify(withdrawal, null, 2));

    // Response includes:
    // - uid: Withdrawal reference ID
  } catch (e) {
    console.error('Initiate withdrawal to spot error: ', e);
  }
}

async function getOrderEvents() {
  try {
    // Get order history events
    const orderEvents = await client.getOrderEvents({
      count: 50,
      sort: 'desc', // desc = newest first
      opened: true, // Include opened orders
      closed: true, // Include closed orders
    });
    console.log('Order Events: ', JSON.stringify(orderEvents, null, 2));

    // Response includes:
    // - elements: Array of order events
    // - Order placed, cancelled, rejected, executed events
    // - continuationToken: For pagination
  } catch (e) {
    console.error('Get order events error: ', e);
  }
}

async function getOrderEventsBySymbol() {
  try {
    // Filter order events by symbol
    const orderEventsBySymbol = await client.getOrderEvents({
      tradeable: 'PF_ETHUSD',
      count: 50,
    });
    console.log(
      'Order Events (PF_ETHUSD): ',
      JSON.stringify(orderEventsBySymbol, null, 2),
    );
  } catch (e) {
    console.error('Get order events by symbol error: ', e);
  }
}

async function getExecutionEvents() {
  try {
    // Get execution/trade history
    const executions = await client.getExecutionEvents({
      count: 50,
      sort: 'desc',
    });
    console.log('Execution Events: ', JSON.stringify(executions, null, 2));

    // Response includes for each execution:
    // - execution: Fill details (price, quantity, timestamp)
    // - order: Associated order details
    // - fee: Fee paid
    // - positionSize: Position size after execution
  } catch (e) {
    console.error('Get execution events error: ', e);
  }
}

async function getExecutionEventsBySymbol() {
  try {
    // Filter executions by symbol
    const executionsBySymbol = await client.getExecutionEvents({
      tradeable: 'PF_ETHUSD',
      count: 50,
    });
    console.log(
      'Executions (PF_ETHUSD): ',
      JSON.stringify(executionsBySymbol, null, 2),
    );
  } catch (e) {
    console.error('Get execution events by symbol error: ', e);
  }
}

async function getAccountLog() {
  try {
    // Get account log (all account activities)
    const accountLog = await client.getAccountLog({
      count: 50,
      sort: 'desc',
    });
    console.log('Account Log: ', JSON.stringify(accountLog, null, 2));

    // Log includes:
    // - futures trade, liquidation, funding rate change
    // - conversions, transfers, settlements
    // - interest payments, fees
  } catch (e) {
    console.error('Get account log error: ', e);
  }
}

async function getAccountLogFiltered() {
  try {
    // Filter account log by info types
    const filteredLog = await client.getAccountLog({
      info: ['futures trade', 'transfer', 'funding rate change'],
      count: 50,
    });
    console.log('Filtered Account Log: ', JSON.stringify(filteredLog, null, 2));
  } catch (e) {
    console.error('Get filtered account log error: ', e);
  }
}

async function enableFuturesSubTrading() {
  try {
    const enableFuturesSubTrading = await client.updateSubaccountTradingStatus({
      subaccountUid: '6e5378ff-31ce-44e8-929f-23f822aa5673',
      tradingEnabled: true,
    });
    console.log(
      'Enable Futures Sub Trading: ',
      JSON.stringify(enableFuturesSubTrading, null, 2),
    );
  } catch (e) {
    console.error('Enable futures sub trading error: ', e);
  }
}

async function getSubaccountTradingStatus() {
  try {
    const subaccountTradingStatus = await client.getSubaccountTradingStatus({
      subaccountUid: '6e5378ff-31ce-44e8-929f-23f822aa5673',
    });
    console.log(
      'Subaccount Trading Status: ',
      JSON.stringify(subaccountTradingStatus, null, 2),
    );
  } catch (e) {
    console.error('Get subaccount trading status error: ', e);
  }
}

async function getSubaccounts() {
  try {
    const subaccounts = await client.getSubaccounts();
    console.log('Subaccounts: ', JSON.stringify(subaccounts, null, 2));
  } catch (e) {
    console.error('Get subaccounts error: ', e);
  }
}
// Uncomment the function you want to test:

// getWallets();
// getOpenPositions();
// getFills();
// getFillsBeforeTime();
// initiateWalletTransfer();
// initiateWithdrawalToSpot();
// getOrderEvents();
// getOrderEventsBySymbol();
// getExecutionEvents();
// getExecutionEventsBySymbol();
// getAccountLog();
// getAccountLogFiltered();
// enableFuturesSubTrading();
// getSubaccountTradingStatus();
// getSubaccounts();
