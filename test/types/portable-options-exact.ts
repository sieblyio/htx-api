import { ClientOptions } from 'ws';

import { WSConnectionOptions } from '../../src/types/websockets/ws-portable.js';

declare const nodeOptions: ClientOptions;

const portableOptions: WSConnectionOptions = nodeOptions;
const browserProtocols: WSConnectionOptions = { protocols: 'chat' };

void portableOptions;
void browserProtocols;
