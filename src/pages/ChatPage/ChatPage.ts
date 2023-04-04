import Chat from '../../components/Chat/Chat';
import { ChatMessageInput } from '../../components/ChatMessageInput/ChatMessageInput';
import MessagesList from '../../components/ChatsList/ChatsList';
import { Block } from '../../utils/Block';
import template from './ChatPage.hbs';
import { chatMessagesMock } from './mocks';
type Props = Record<string, never>;

export default class ChatPage extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  async init() {
    this.children.Chat = new Chat({
      chatName: 'Иван',
      chatMessages: chatMessagesMock,
      ChatMessageInput: new ChatMessageInput({}),
    });

    this.children.MessagesList = new MessagesList({});
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.children);
  }
}
