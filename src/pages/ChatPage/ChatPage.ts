import Chat from '../../components/Chat/Chat';
import MessagesList from '../../components/ChatsList/ChatsList';
import { Block } from '../../utils/Block';
import template from './ChatPage.hbs';

type Props = Record<string, never>;

type Children = {
  Chat: InstanceType<typeof Chat>;
  MessagesList: InstanceType<typeof MessagesList>;
};

export default class ChatPage extends Block<Props, Children> {
  constructor(props: Props) {
    super(props);
  }

  async init() {
    this.children.Chat = new Chat({});

    this.children.MessagesList = new MessagesList({});
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.children);
  }
}
