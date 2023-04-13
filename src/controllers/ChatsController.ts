import { ChatsApi, GetChatsDto } from '../api/ChatsApi';
import { UsersApi } from '../api/UsersApi';
import { AppLinks } from '../api/constants';
import store from '../utils/Store';

export class ChatsController {
  private chatsApi: ChatsApi;
  private usersApi: UsersApi;

  constructor() {
    this.chatsApi = new ChatsApi();
    this.usersApi = new UsersApi();
  }

  async getChats(dto: GetChatsDto) {
    const chats = await this.chatsApi.read(dto);
    const chatsWithTokens = await Promise.all(
      chats.map(async chat => {
        const token = await this.getToken(chat.id);

        return { ...chat, token, avatar: chat.avatar && AppLinks.ResourcesUrl + '/' + chat.avatar };
      })
    );

    store.set('chats', chatsWithTokens);
  }

  async selectChat(id: number) {
    const chat = store.getState().chats?.find(c => c.id === id);
    if (chat) {
      store.set('selectedChat', {
        avatarSrc: chat.avatar,
        chatName: chat.title,
        id: id,
      });
    }
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

  async editAvatar(avatar: FormData) {
    const { avatar: newAvatarSrc, id } = await this.chatsApi.editAvatar(avatar);

    const updatedChatIndex = store.getState().chats?.findIndex(chat => chat.id === id);

    const avatarPath = AppLinks.ResourcesUrl + newAvatarSrc;

    store.set('selectedChat.avatarSrc', avatarPath);
    store.set(`chats.${updatedChatIndex}.avatar`, avatarPath);
  }
}
