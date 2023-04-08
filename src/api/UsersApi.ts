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

export class UsersApi extends BaseAPI {
  constructor() {
    super('/user');
  }

  create = undefined;
  read = undefined;
  update = undefined;
  delete = undefined;

  searchUser(login: string) {
    return fetchWithRetry<SearchUserResponseType>(this.http, '/search', {
      method: METHODS.POST,
      retries: 1,
      data: { login },
    });
  }
}
