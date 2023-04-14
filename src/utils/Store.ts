import { EventBus } from './EventBus';
import { Message } from './WSTransport';
import set from './set';

export type ChatsListItem = {
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
};

export type ChatsList = ChatsListItem[];

export type State = {
  chat?: {
    messages: { message: string }[];
    id: number;
  };
  user?: {
    id: number;
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: number;
    avatar: string;
  };
  chats?: ChatsList;
  selectedChat?: {
    avatarSrc?: string;
    chatName: string;
    id: number;
  };
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
