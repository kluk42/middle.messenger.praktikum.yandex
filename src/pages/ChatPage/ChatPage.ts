import Chat from '../../components/Chat/Chat';
import MessagesList from '../../components/ChatsList/ChatsList';
import { Block } from '../../utils/Block';
import template from './ChatPage.hbs';
type Props = Record<string, never>;

export default class ChatPage extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  async init() {
    this.children.Chat = new Chat({
      chatName: 'Иван',
    });

    this.children.MessagesList = new MessagesList({});
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.children);
  }
}
