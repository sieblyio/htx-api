import NodeWebSocket, { ClientOptions } from 'ws';

import { WebsocketClient } from '../../src/WebsocketClient';
import {
  MessageEventLike,
  WebSocketBinaryData,
  WebSocketLike,
  WSConnectionOptions,
} from '../../src/types/websockets/ws-portable';

declare const browserSocket: WebSocket;
declare const browserMessage: MessageEvent<ArrayBuffer>;
declare const nodeSocket: NodeWebSocket;
declare const nodeOptions: ClientOptions;
declare const nodeBuffer: Buffer;

const acceptSocket = (_socket: WebSocketLike) => undefined;

acceptSocket(browserSocket);
acceptSocket(nodeSocket);

const portableMessage: MessageEventLike<ArrayBuffer> = browserMessage;
const portableOptions: WSConnectionOptions = nodeOptions;
const portableBinary: WebSocketBinaryData = nodeBuffer;

new WebsocketClient({ wsOptions: nodeOptions });

void portableMessage;
void portableOptions;
void portableBinary;
