import { fetchWithRetry } from '../utils/Fetch';
import { METHODS } from '../utils/HttpTransport';
import BaseAPI from './BaseApi';

export type SignUpBody = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type SignInBody = {
  login: string;
  password: string;
};

export type SignUpResponse = { id: number };

export type GetUserResponse = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: number;
  avatar: string;
};

export class AuthAPI extends BaseAPI {
  constructor() {
    super('/auth');
  }

  signup(data: SignUpBody) {
    return fetchWithRetry<SignUpResponse>(this.http, '/signup', {
      method: METHODS.POST,
      retries: 1,
      data,
    });
  }
  signin(data: SignInBody) {
    return fetchWithRetry(this.http, '/signin', {
      method: METHODS.POST,
      retries: 1,
      data,
    });
  }
  async getUser() {
    return fetchWithRetry<GetUserResponse>(this.http, '/user', {
      method: METHODS.GET,
      retries: 1,
    });
  }
  async logout() {
    return fetchWithRetry<void>(this.http, '/logout', {
      method: METHODS.POST,
      retries: 1,
    });
  }

  create = undefined;
  read = undefined;
  update = undefined;
  delete = undefined;
}
