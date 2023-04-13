import { AuthAPI, SignInBody, SignUpBody } from '../api/AuthApi';
import { AppLinks } from '../api/constants';
import { Router, Routes } from '../Router/Router';
import store from '../utils/Store';
import { MessagesController } from './MessagesController';

export class AuthController {
  private api: AuthAPI;
  private router: Router;

  constructor() {
    this.api = new AuthAPI();
    this.router = new Router('#app');
  }

  async signUp(data: SignUpBody) {
    await this.api.signup(data);

    await this.getUser();

    this.router.replace(Routes.Profile);
  }

  async signIn(data: SignInBody) {
    await this.api.signin(data);

    await this.getUser();

    this.router.replace(Routes.Chat);
  }

  async getUser() {
    try {
      const user = await this.api.getUser();

      user.avatar = AppLinks.ResourcesUrl + user.avatar;

      store.set('user', user);

      this.router.replace(Routes.Chat);
    } catch (error) {
      this.router.replace(Routes.SignInPage);
      console.error(error);
    }
  }
  async logout(redirectPath?: Routes) {
    try {
      MessagesController.closeAll();

      await this.api.logout();

      this.router.replace(redirectPath ?? Routes.SignUpPage);

      store.set('user', undefined);
    } catch (error) {
      console.error(error);
    }
  }
}
