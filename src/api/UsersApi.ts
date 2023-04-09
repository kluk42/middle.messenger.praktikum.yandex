import { fetchWithRetry } from '../utils/Fetch';
import { METHODS } from '../utils/HttpTransport';
import BaseAPI from './BaseApi';

type SearchUserResponseType = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}[];

export type EditProfileResponse = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
};

export type EditProfileDto = {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
};

export class UsersApi extends BaseAPI {
  constructor() {
    super('/user');
  }

  create = undefined;
  read = undefined;
  delete = undefined;

  update(data: EditProfileDto): Promise<unknown> {
    return fetchWithRetry<EditProfileResponse>(this.http, '/profile', {
      method: METHODS.PUT,
      retries: 1,
      data,
    });
  }

  searchUser(login: string) {
    return fetchWithRetry<SearchUserResponseType>(this.http, '/search', {
      method: METHODS.POST,
      retries: 1,
      data: { login },
    });
  }

  editPassword(oldPassword: string, newPassword: string) {
    return fetchWithRetry<Record<string, never>>(this.http, '/password', {
      method: METHODS.PUT,
      retries: 1,
      data: { oldPassword, newPassword },
    });
  }
}
