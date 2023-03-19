import { fetchWithRetry } from '../utils/Fetch';
import { METHODS } from '../utils/HttpTransport';
import BaseAPI from './BaseApi';

export type CreateChatDto = {
  title: string;
};

export type GetChatsResponse = {
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
}[];

export type DeleteChatResponse = {
  userId: number;
  result: {
    id: number;
    title: string;
    avatar: string;
  };
};

export type DeleteChatDto = {
  chatId: number;
};

export class ChatsApi extends BaseAPI {
  constructor() {
    super('/chats');
  }

  update = undefined;

  public create(data: CreateChatDto) {
    return fetchWithRetry<Record<string, never>>(this.http, '', {
      method: METHODS.POST,
      retries: 1,
      data,
    });
  }

  public read() {
    return fetchWithRetry<GetChatsResponse>(this.http, '', { method: METHODS.GET, retries: 1 });
  }

  public delete(data: DeleteChatDto) {
    return fetchWithRetry<DeleteChatResponse>(this.http, '', {
      method: METHODS.DELETE,
      retries: 1,
      data,
    });
  }
}
