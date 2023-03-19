import { AuthAPI, SignInBody, SignUpBody } from '../api/AuthApi';
import { Router, Routes } from '../Router/Router';
import store from '../utils/Store';

export class AuthController {
  private api: AuthAPI;
  private router: Router;

  constructor() {
    this.api = new AuthAPI();
    this.router = new Router('#app');
  }
  async signUp(data: SignUpBody) {
    try {
      await this.api.signup(data);

      await this.getUser();

      this.router.replace(Routes.Profile);
    } catch (error) {
      console.error(error);
    }
  }
  async signIn(data: SignInBody) {
    try {
      await this.api.signin(data);

      await this.getUser();

      this.router.replace(Routes.Profile);
    } catch (error) {
      console.error(error);
    }
  }
  async getUser() {
    try {
      const user = await this.api.getUser();

      store.set('user.data', user);
    } catch (error) {
      this.router.replace(Routes.SignInPage);
      console.error(error);
    }
  }
  async logout() {
    try {
      await this.api.logout();

      this.router.replace(Routes.SignUpPage);

      store.set('user', undefined);
    } catch (error) {
      console.error(error);
    }
  }
}