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

/**
 * @offset
 * The number of items to skip before starting to collect the result set
 * @limit
 * The numbers of items to return
 * @title
 * Chat's title to filter by. Optional
 */
export type GetChatsDto = {
  offset: number;
  limit: number;
  title?: string;
};

export type GetTokenDto = {
  id: number;
};

export type GetTokenResponse = { token: string };

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

  public read(dto: GetChatsDto) {
    return fetchWithRetry<GetChatsResponse>(this.http, '', {
      method: METHODS.GET,
      retries: 1,
      data: dto,
    });
  }

  public delete(data: DeleteChatDto) {
    return fetchWithRetry<DeleteChatResponse>(this.http, '', {
      method: METHODS.DELETE,
      retries: 1,
      data,
    });
  }

  public getToken(id: number) {
    return fetchWithRetry<GetTokenResponse>(this.http, `/token/${id}`, {
      method: METHODS.POST,
      retries: 1,
    });
  }
}
