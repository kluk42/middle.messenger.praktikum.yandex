import { AuthAPI, SignInBody, SignUpBody } from '../api/AuthApi';
import store from '../utils/Store';

class AuthController {
  private api: AuthAPI;

  constructor() {
    this.api = new AuthAPI();
  }
  async signUp(data: SignUpBody) {
    try {
      await this.api.signup(data);

      await this.getUser();
    } catch (error) {
      console.error(error);
    }
  }
  async signIn(data: SignInBody) {
    try {
      await this.api.signin(data);

      await this.getUser();
    } catch (error) {
      console.error(error);
    }
  }
  async getUser() {
    try {
      const user = await this.api.getUser();

      store.set('user', user);
    } catch (error) {
      console.error(error);
    }
  }
  async logout() {
    try {
      await this.api.logout();

      store.set('user', undefined);
    } catch (error) {
      console.error(error);
    }
  }
}
