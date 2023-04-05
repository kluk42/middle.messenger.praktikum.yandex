import { GetUserResponse } from '../api/AuthApi';
import { EventBus } from './EventBus';
import { Message } from './WSTransport';
import set from './set';

export type ChatsList = {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message?: {
    user: {
      first_name: string;
      second_name: string;
      avatar: string;
      email: string;
      login: string;
      phone: string;
    };
    time: string;
    content: string;
  };
  token: string;
}[];

export type State = {
  chat?: {
    messages: { message: string }[];
    id: number;
  };
  user?: { data?: GetUserResponse };
  chats?: { chatsList: ChatsList; selectedChatId?: number };
  messages?: Record<number, Message[]>;
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
