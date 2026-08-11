/**
 * HTX websocket topics are string templates, e.g.:
 *
 * - `market.btcusdt.kline.1min`
 * - `market.btcusdt.mbp.150`
 * - `orders#btcusdt`
 * - `orders.btc-usdt`
 *
 * The exchange publishes a large and evolving topic surface, so the SDK keeps
 * the topic type open while exporting common topic groups for discovery and
 * private/public routing.
 */

export const WS_SPOT_PUBLIC_TOPICS = [
  'market.$symbol$.kline.$period$',
  'market.$symbol.bbo',
  'market.$symbol.depth.$type',
  'market.$symbol.detail',
  'market.$symbol.mbp.$levels',
  'market.$symbol.mbp.refresh.$levels',
  'market.$symbol.ticker',
  'market.$symbol.trade.detail',
] as const;

export const WS_SPOT_PRIVATE_TOPICS = [
  'accounts.update#${mode}',
  'orders#${symbol}',
  'trade.clearing#${symbol}#${mode}',
] as const;

export const WS_DERIVATIVES_PUBLIC_TOPICS = [
  'market.$contract_code.kline.$period',
  'market.$contract_code.depth.$type',
  'market.$contract_code.depth.size_${size}.high_freq',
  'market.$contract_code.detail',
  'market.$contract_code.bbo',
  'market.$contract_code.trade.detail',
  'market.$contract_code.index.$period',
  'market.$contract_code.premium_index.$period',
  'market.$contract_code.estimated_rate.$period',
  'market.$contract_code.basis.$period.$basis_price_type',
  'market.$contract_code.mark_price.$period',
  'public.$contract_code.liquidation_orders',
  'public.$contract_code.funding_rate',
  'public.$contract_code.contract_info',
  'public.$contract_code.contract_elements',
  'public.$service.heartbeat',
] as const;

export const WS_DERIVATIVES_PRIVATE_TOPICS = [
  'orders.$contract_code',
  'orders_cross.$contract_code',
  'accounts.$contract_code',
  'accounts_cross.$margin_account',
  'positions.$contract_code',
  'positions_cross.$contract_code',
  'matchOrders.$contract_code',
  'matchOrders_cross.$contract_code',
  'match_orders.$contract_code',
  'trade_detail.$contract_code',
  'algo_orders.$contract_code',
  'trigger_order.$contract_code',
  'trigger_order_cross.$contract_code',
  'accounts_unify.USDT',
] as const;

export type WSSpotPublicTopic = (typeof WS_SPOT_PUBLIC_TOPICS)[number];
export type WSSpotPrivateTopic = (typeof WS_SPOT_PRIVATE_TOPICS)[number];
export type WSDerivativesPublicTopic =
  (typeof WS_DERIVATIVES_PUBLIC_TOPICS)[number];
export type WSDerivativesPrivateTopic =
  (typeof WS_DERIVATIVES_PRIVATE_TOPICS)[number];

export type WSTopic =
  | WSSpotPublicTopic
  | WSSpotPrivateTopic
  | WSDerivativesPublicTopic
  | WSDerivativesPrivateTopic
  | string;

export function isPrivateTopic(topic: string): boolean {
  return (
    topic.startsWith('accounts.') ||
    topic.startsWith('accounts#') ||
    topic.startsWith('accounts.update') ||
    topic.startsWith('orders.') ||
    topic.startsWith('orders#') ||
    topic.startsWith('orders_cross.') ||
    topic.startsWith('positions.') ||
    topic.startsWith('positions_cross.') ||
    topic.startsWith('matchOrders.') ||
    topic.startsWith('matchOrders_cross.') ||
    topic === 'match_orders' ||
    topic.startsWith('match_orders.') ||
    topic === 'trade_detail' ||
    topic.startsWith('trade_detail.') ||
    topic === 'algo_orders' ||
    topic.startsWith('algo_orders.') ||
    topic.startsWith('trigger_order') ||
    topic.startsWith('trade.clearing')
  );
}
