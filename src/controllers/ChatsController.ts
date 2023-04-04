import { ChatsApi, GetChatsDto } from '../api/ChatsApi';
import { Router } from '../Router/Router';
import store from '../utils/Store';

export class ChatsController {
  private router: Router;
  private api: ChatsApi;

  constructor() {
    this.router = new Router('#app');
    this.api = new ChatsApi();
  }

  async getChats(dto: GetChatsDto) {
    const chats = await this.api.read(dto);
    const chatsWithTokens = await Promise.all(
      chats.map(async chat => {
        const { token } = await this.api.getToken(chat.id);

        return { ...chat, token };
      })
    );

    store.set('chats.chatsList', chatsWithTokens);
  }

  async selectChat(id: number) {
    store.set('chats.selectedChatId', id);
  }

  async createChat(chatName: string) {
    await this.api.create({ title: chatName });

    await this.getChats({ limit: 50, offset: 0 });
  }

  async getToken(chatId: number) {
    const response = await this.api.getToken(chatId);

    return response.token;
  }
}
