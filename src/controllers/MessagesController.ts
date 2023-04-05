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

  constructor() {
    return MessagesController.controller;
  }

  async connect(id: number, token: string) {
    const userId = store.getState().user?.data?.id;

    const transport = new WSTransport(`wss://ya-praktikum.tech/ws/chats/${userId}/${id}/${token}`);

    await transport.connect();

    this.subscribe(transport, id);

    this.sockets.set(id, transport);

    this.fetchOldMessages(id, 0);
  }

  sendMessage(id: number, message: string) {
    const transport = this.getTransport(id);

    const dto: ChatMessageDto = { content: message, type: 'message' };
    transport.send(dto);
  }

  /**
   * @id
   * Chat id
   * @offset
   * count of message starting from which 10 previous messages will be returned. Messages count starts from 0.
   */
  fetchOldMessages(id: number, offset: number) {
    const transport = this.getTransport(id);

    const dto: GetOldMessagesDto = { type: 'get old', content: offset };

    transport.send(dto);
  }

  private onMessage(id: number, messages: Message | Message[]) {
    const storeKey = `messages.${id}`;

    if (Array.isArray(messages)) {
      store.set(storeKey, messages.reverse());

      return;
    }

    const allOldMessages = store.getState().messages;

    if (allOldMessages) {
      const oldMessages = allOldMessages[id];

      if (!oldMessages) {
        store.set(storeKey, [messages]);

        return;
      }

      store.set(storeKey, [...oldMessages, messages]);
    }
  }

  private getTransport(id: number) {
    const transport = this.sockets.get(id);

    if (!transport) {
      throw new Error(`WS transport with id ${id} doesn't exist`);
    }

    return transport;
  }

  private subscribe(transport: WSTransport, id: number) {
    transport.on(WSTransportEvents.Message, message => this.onMessage(id, message));
  }
}
