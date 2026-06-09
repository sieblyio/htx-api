export interface WsDataEvent<TData = unknown, TWSKey = string> {
  data: TData;
  table: string;
  wsKey: TWSKey;
}

export interface MessageEventLike<TData = string> {
  target: WebSocket;
  type: 'message';
  data: TData;
}

export function isMessageEvent(msg: unknown): msg is MessageEventLike<string> {
  if (typeof msg !== 'object' || !msg) {
    return false;
  }

  const message = msg as MessageEventLike;
  return message['type'] === 'message' && typeof message['data'] === 'string';
}
