type Subscriber<A extends unknown[]> = (...args: A) => void;
export type MapType<P> = P[keyof P];

export type EventNamesType = { [name: string]: string };
export type EventDataType<E extends EventNamesType> = Record<MapType<E>, []>;

export class EventBus<
  EventNames extends EventNamesType = Record<string, string>,
  Args extends Record<MapType<EventNames>, unknown[]> = Record<string, never[]>
> {
  private readonly listeners: {
    [K in MapType<EventNames>]?: Subscriber<Args[K]>[];
  } = {};

  on<Event extends MapType<EventNames>>(event: Event, callback: Subscriber<Args[Event]>) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event]?.push(callback);
  }

  off<Event extends MapType<EventNames>>(event: Event, callback: Subscriber<Args[Event]>) {
    if (!this.listeners[event]) {
      throw new Error(`Несуществующее событие: ${event}`);
    }

    this.listeners[event] = this.listeners[event]!.filter(listener => listener !== callback);
  }

  emit<Event extends MapType<EventNames>>(event: Event, ...args: Args[Event]) {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event]!.forEach(listener => {
      listener(...args);
    });
  }
}
