import { MessageEventLike } from './ws-portable.js';

export type { MessageEventLike } from './ws-portable.js';

export interface WsDataEvent<TData = unknown, TWSKey = string> {
  data: TData;
  table: string;
  wsKey: TWSKey;
}

export function isMessageEvent(msg: unknown): msg is MessageEventLike<string> {
  if (typeof msg !== 'object' || !msg) {
    return false;
  }

  const message = msg as MessageEventLike;
  return message['type'] === 'message' && typeof message['data'] === 'string';
}
