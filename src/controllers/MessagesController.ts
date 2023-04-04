import store from '../utils/Store';
import { WSTransport } from '../utils/WSTransport';

export type ChatMessageDto = {
  content: string;
  type: 'message';
};

export type GetOldMessagesDto = {
  type: 'get old';
  content: number;
};

export class MessagesController {
  private static sockets: Map<number, WSTransport> = new Map();

  async connect(id: number, token: string) {
    const userId = store.getState().user?.data?.id;

    const transport = new WSTransport(`wss://ya-praktikum.tech/ws/chats/${userId}/${id}/${token}`);

    await transport.connect();

    MessagesController.sockets.set(id, transport);
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

  private getTransport(id: number) {
    const transport = MessagesController.sockets.get(id);

    if (!transport) {
      throw new Error(`WS transport with id ${id} doesn't exist`);
    }

    return transport;
  }
}
