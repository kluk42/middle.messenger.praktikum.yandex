import { ChatsApi } from '../api/ChatsApi';
import { AppLinks } from '../api/constants';
import store from '../utils/Store';
import { Message, WSTransport, WSTransportEvents } from '../utils/WSTransport';

export type ChatMessageDto = {
  content: string;
  type: 'message';
};

export type GetOldMessagesDto = {
  type: 'get old';
  content: number;
};

export class MessagesController {
  private sockets: Map<number, WSTransport> = new Map();
  private static controller: MessagesController = new MessagesController();
  private chatsApi: ChatsApi = new ChatsApi();

  constructor() {
    return MessagesController.controller;
  }

  static closeAll() {
    this.controller.sockets.forEach(socket => {
      socket.close();
    });
  }

  async connect(id: number, token: string) {
    if (this.sockets.get(id)) {
      return;
    }

    const userId = store.getState().user?.id;

    const transport = new WSTransport(`${AppLinks.WSURL}/${userId}/${id}/${token}`);

    await transport.connect();

    this.subscribe(transport, id);

    this.sockets.set(id, transport);
  }

  async sendMessage(id: number, message: string) {
    const transport = await this.getTransport(id);

    const dto: ChatMessageDto = { content: message, type: 'message' };
    transport.send(dto);
  }

  /**
   * @id
   * Chat id
   * @offset
   * count of message starting from which 10 previous messages will be returned. Messages count starts from 0.
   */
  async fetchOldMessages(id: number, offset: number) {
    const transport = await this.getTransport(id);

    const dto: GetOldMessagesDto = { type: 'get old', content: offset };

    transport.send(dto);
  }

  disconnect(id: number) {
    this.sockets.get(id)?.close();
  }

  private onMessage(id: number, messages: Message | Message[]) {
    if (!Array.isArray(messages) && messages.type !== 'message') {
      return;
    }

    const storeKey = `messages.${id}`;

    const allOldMessages = store.getState().messages;
    const oldMessages = allOldMessages && allOldMessages[id];

    if (!oldMessages) {
      store.set(storeKey, Array.isArray(messages) ? messages.reverse() : [messages]);

      return;
    }

    if (Array.isArray(messages)) {
      store.set(storeKey, [...oldMessages, ...messages]);

      return;
    }

    store.set(storeKey, [...oldMessages, messages]);
  }

  private async getTransport(id: number): Promise<WSTransport> {
    const transport = this.sockets.get(id);

    if (!transport) {
      const { token } = await this.chatsApi.getToken(id);

      await this.connect(id, token);

      return this.getTransport(id);
    }

    return transport;
  }

  private onClose(id: number) {
    this.sockets.delete(id);
  }

  private subscribe(transport: WSTransport, id: number) {
    transport.on(WSTransportEvents.Message, message => this.onMessage(id, message));
    transport.on(WSTransportEvents.Close, () => this.onClose(id));
  }
}
