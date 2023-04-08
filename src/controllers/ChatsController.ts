import { ChatsApi, GetChatsDto } from '../api/ChatsApi';
import { UsersApi } from '../api/UsersApi';
import { Router } from '../Router/Router';
import store from '../utils/Store';

export class ChatsController {
  private router: Router;
  private chatsApi: ChatsApi;
  private usersApi: UsersApi;

  constructor() {
    this.router = new Router('#app');
    this.chatsApi = new ChatsApi();
    this.usersApi = new UsersApi();
  }

  async getChats(dto: GetChatsDto) {
    const chats = await this.chatsApi.read(dto);
    const chatsWithTokens = await Promise.all(
      chats.map(async chat => {
        const token = await this.getToken(chat.id);

        return { ...chat, token };
      })
    );

    store.set('chats.chatsList', chatsWithTokens);
  }

  async selectChat(id: number) {
    store.set('chats.selectedChatId', id);
  }

  async createChat(chatName: string) {
    await this.chatsApi.create({ title: chatName });

    await this.getChats({ limit: 50, offset: 0 });
  }

  async getToken(chatId: number) {
    const response = await this.chatsApi.getToken(chatId);

    return response.token;
  }

  async addUser(userName: string, chatId: number) {
    const searchResponse = await this.usersApi.searchUser(userName);
    await this.chatsApi.addUser({ chatId, users: [searchResponse[0].id] });
  }

  async deleteUser(userName: string, chatId: number) {
    const searchResponse = await this.usersApi.searchUser(userName);
    await this.chatsApi.deleteUser(searchResponse[0].id, chatId);
  }
}
