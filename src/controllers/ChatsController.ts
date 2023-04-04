import { ChatsApi, GetChatsDto } from '../api/ChatsApi';
import { Router } from '../Router/Router';
import store from '../utils/Store';
import { MessagesController } from './MessagesController';

export class ChatsController {
  private router: Router;
  private api: ChatsApi;
  private messagesController: MessagesController;

  constructor() {
    this.router = new Router('#app');
    this.api = new ChatsApi();
    this.messagesController = new MessagesController();
  }

  async getChats(dto: GetChatsDto) {
    const chats = await this.api.read(dto);

    chats.forEach(async chat => {
      const token = await this.getToken(chat.id);

      this.messagesController.connect(chat.id, token);
    });

    store.set('chats.chatsList', chats);
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
