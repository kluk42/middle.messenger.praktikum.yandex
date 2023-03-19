import { Chat } from '../../components/Chat/Chat';
import { ChatMessageInput } from '../../components/ChatMessageInput/ChatMessageInput';
import MessagesList from '../../components/MessagesList/MessagesList';
import { ChatsController } from '../../controllers/ChatsController';
import { Router } from '../../Router/Router';
import { Block } from '../../utils/Block';
import template from './ChatPage.hbs';
import { chatMessagesMock } from './mocks';

type PropsFromStore = {};
type Controllers = {
  router: Router;
  chatsController: ChatsController;
};
type OwnProps = {};

type Props = PropsFromStore & Controllers & OwnProps;

export default class ChatPage extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  async init() {
    this.children.Chat = new Chat({
      chatName: 'Иван',
      isChatSelected: true,
      chatMessages: chatMessagesMock,
      ChatMessageInput: new ChatMessageInput({}),
    });

    this.children.MessagesList = new MessagesList({});
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.children);
  }
}
