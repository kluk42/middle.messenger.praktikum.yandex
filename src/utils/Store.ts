import { EventBus } from './EventBus';
import set from './set';

export type State = {
  chat: {
    messages: { message: string }[];
  };
};

export enum StoreEvents {
  Updated = 'updated',
}

type StoreEventsType = {
  [StoreEvents.Updated]: StoreEvents.Updated;
};

class Store extends EventBus<StoreEventsType> {
  private state: State;

  constructor(initialState: State) {
    super();
    this.state = initialState;
  }

  getState(): State {
    return this.state;
  }

  set(path: string, value: unknown): void {
    set(this.state, path, value);
    this.emit(StoreEvents.Updated);
  }
}

const store = new Store({ chat: { messages: [{ message: 'bla' }] } });

export default store;
