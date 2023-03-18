import { GetUserResponse } from '../api/AuthApi';
import { EventBus } from './EventBus';
import set from './set';

export type State = {
  chat?: {
    messages: { message: string }[];
  };
  user?: { data?: GetUserResponse };
};

export enum StoreEvents {
  Updated = 'updated',
}

type StoreEventsType = {
  [StoreEvents.Updated]: StoreEvents.Updated;
};

type EventArguments = {
  [StoreEvents.Updated]: [State];
};

class Store extends EventBus<StoreEventsType, EventArguments> {
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
    this.emit(StoreEvents.Updated, this.state);
  }
}

const store = new Store({});

export default store;
