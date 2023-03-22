import { ChatsApi } from '../api/ChatsApi';
import { Router } from '../Router/Router';
import store from '../utils/Store';

export class ChatsController {
  private router: Router;
  private api: ChatsApi;

  constructor() {
    this.router = new Router('#app');
    this.api = new ChatsApi();
  }

  async getChats() {
    const chats = await this.api.read();

    store.set('chats.chatsList', chats);
  }

  selectChat(id: number) {
    store.set('chats.selectedChatId', id);
  }
}