type Subscriber<A extends any[] = unknown[]> = (...args: A) => void;
type MapType<P> = P[keyof P];

export class EventBus<
  EventNames extends { [name: string]: string },
  Args extends Record<MapType<EventNames>, any[]>
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
      throw new Error(`Нет события: ${event}`);
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
