// The browser entry intentionally has no bundled declarations. Its API is the
// same long-standing EventEmitter implementation used by browser bundlers.
// @ts-expect-error -- typed through the SDK-owned constructor below
import BrowserEventEmitter from 'events/events.js';

import {
  EventEmitterConstructor,
  EventListener,
  EventName,
} from '../types/websockets/ws-portable.js';

const RuntimeEventEmitter =
  BrowserEventEmitter as unknown as EventEmitterConstructor;

/** Browser adapter backed by the established `events` package. */
export class EventEmitter extends RuntimeEventEmitter {
  listenerCount(eventName: EventName, listener?: EventListener): number {
    if (!listener) {
      return super.listenerCount(eventName);
    }

    return this.listeners(eventName).filter(
      (registeredListener) => registeredListener === listener,
    ).length;
  }
}
