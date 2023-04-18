import { ChatsApi, GetChatsDto } from '../api/ChatsApi';
import { UsersApi } from '../api/UsersApi';
import { AppLinks } from '../api/constants';
import store, { ChatsListItem } from '../utils/Store';
import { MessagesController } from './MessagesController';

export class ChatsController {
  private chatsApi: ChatsApi;
  private usersApi: UsersApi;
  private messagesController: MessagesController;

  constructor() {
    this.chatsApi = new ChatsApi();
    this.usersApi = new UsersApi();
    this.messagesController = new MessagesController();
  }

  async getChats(dto: GetChatsDto) {
    const chats = await this.chatsApi.read(dto);
    const chatsWithTokens = await Promise.all(
      chats.map(async chat => {
        const token = await this.getToken(chat.id);

        return {
          ...chat,
          token,
          avatar: chat.avatar && AppLinks.BaseUrl + '/resources' + chat.avatar,
        };
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

  async editAvatar(avatarDto: FormData) {
    const { avatar, id } = await this.chatsApi.editAvatar(avatarDto);

    const oldChat = store.getState().chats?.find(chat => chat.id === id);
    const chatIndex = store.getState().chats?.findIndex(chat => chat.id === id);
    const notUpdatedChats = store.getState().chats;
    const chatsToUpdate = notUpdatedChats && [...notUpdatedChats];

    const avatarPath = AppLinks.BaseUrl + '/resources' + avatar;

    if (oldChat && chatsToUpdate && chatIndex !== undefined) {
      store.set('selectedChat.avatarSrc', avatarPath);

      const updatedChat: ChatsListItem = { ...oldChat, avatar: avatarPath };

      chatsToUpdate[chatIndex] = updatedChat;

      store.set('chats', chatsToUpdate);
    }
  }

  async deleteChat(chatId: number) {
    await this.chatsApi.delete({ chatId });
    this.messagesController.disconnect(chatId);

    const newChats = store.getState().chats?.filter(chat => chat.id !== chatId);

    store.set('chats', newChats);
    store.set('selectedChat', undefined);
    store.set(`messages.${chatId}`, undefined);
  }
}
