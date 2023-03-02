import { Chat } from '../../components/Chat/Chat';
import { ChatMessageInput } from '../../components/ChatMessageInput/ChatMessageInput';
import { MessagesList } from '../../components/MessagesList/MessagesList';
import { Block } from '../../utils/Block';
import template from './ChatPage.hbs';
import { chatMessagesMock, messagesListMock } from './mocks';

export class ChatPage extends Block<Record<string, never>> {
  constructor() {
    super({});
  }

  init() {
    this.children.Chat = new Chat({
      chatName: 'Иван',
      isChatSelected: true,
      chatMessages: chatMessagesMock,
      ChatMessageInput: new ChatMessageInput({}),
    });

    this.children.MessagesList = new MessagesList({
      messages: messagesListMock,
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.children);
  }
}
