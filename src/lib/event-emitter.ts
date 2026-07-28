import { EventEmitter as NodeEventEmitter } from 'node:events';

import { EventEmitterConstructor } from '../types/websockets/ws-portable.js';

const RuntimeEventEmitter =
  NodeEventEmitter as unknown as EventEmitterConstructor;

/** Node.js adapter. The cast keeps Node declarations out of the public API. */
export class EventEmitter extends RuntimeEventEmitter {}
