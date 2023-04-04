import { ChatsController } from '../../controllers/ChatsController';
import { MessagesController } from '../../controllers/MessagesController';
import { withControllers } from '../../hocs/withControllers';
import { withStore } from '../../hocs/withStore';
import { Block } from '../../utils/Block';
import isEqual from '../../utils/isEqual';
import { State } from '../../utils/Store';
import ChatsListItem, { MessageProps } from '../Message/ChatsListItem';
import template from './ChatsList.hbs';

type PropsFromStore = {
  messages?: MessageProps[];
  chats?: { id: number; token: string }[];
};

type Controllers = {
  chatsController: ChatsController;
  messagesController: MessagesController;
};

type OwnProps = Record<string, never>;

type Props = PropsFromStore & OwnProps & Controllers;

class ChatsList extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  protected async init() {
    await this.props.chatsController.getChats({ limit: 50, offset: 0 });

    this.props.chats?.forEach(async chat => {
      this.props.messagesController.connect(chat.id, chat.token);
    });

    this.children.chats = this.createChats();
  }

  protected componentDidUpdate(oldProps: PropsFromStore, newProps: PropsFromStore): boolean {
    if (!isEqual(oldProps.messages, newProps.messages)) {
      this.children.chats = this.createChats();

      return true;
    }

    return !isEqual(oldProps, newProps);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, ...this.children });
  }

  protected createChats() {
    const chatsController = this.props.chatsController;
    const messagesController = this.props.messagesController;
    return this.props.messages?.map(
      m =>
        new ChatsListItem({
          ...m,
          events: {
            click() {
              chatsController.selectChat(m.chatId);
              messagesController.fetchOldMessages(m.chatId, 0);
            },
          },
        })
    );
  }
}

const mapStateToProps = (state: State): PropsFromStore => {
  return {
    messages: state.chats?.chatsList.map(c => ({
      chatName: c.title,
      message: c.last_message?.content,
      messageDate: c.last_message?.time && new Date(c.last_message?.time).toString(),
      imgSrc: c.avatar,
      unreadMessagesCount: c.unread_count,
      isMessageReceived: c.unread_count === 0,
      isMessageSelected: false,
      chatId: c.id,
    })),
    chats: state.chats?.chatsList.map(c => ({ id: c.id, token: c.token })),
  };
};

const WithControllers = withControllers<OwnProps, Controllers>(ChatsList, {
  chatsController: new ChatsController(),
  messagesController: new MessagesController(),
});

export default withStore<OwnProps, PropsFromStore>(mapStateToProps)(WithControllers);
