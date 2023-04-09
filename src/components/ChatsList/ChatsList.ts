import { ChatsController } from '../../controllers/ChatsController';
import { MessagesController } from '../../controllers/MessagesController';
import { withControllers } from '../../hocs/withControllers';
import { withStore } from '../../hocs/withStore';
import { Router, Routes } from '../../Router/Router';
import { Block } from '../../utils/Block';
import isEqual from '../../utils/isEqual';
import { State } from '../../utils/Store';
import { Message } from '../../utils/WSTransport';
import { AnchorLink } from '../AnchorLink/AnchorLink';
import ChatsListItem, { ChatListItemProps } from '../Message/ChatsListItem';
import template from './ChatsList.hbs';

type PropsFromStore = {
  lastChatMessages?: ChatListItemProps[];
  chats?: { id: number; token: string }[];
  messages?: Record<number, Message[]>;
};

type Controllers = {
  chatsController: ChatsController;
  messagesController: MessagesController;
  router: Router;
};

type OwnProps = Record<string, never>;

type Props = PropsFromStore & OwnProps & Controllers;

class ChatsList extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  protected async init() {
    this.children.ProfileLink = new AnchorLink({
      href: '/',
      text: 'Профиль >',
      events: {
        click: (e: Event) => {
          e.preventDefault();
          this.props.router.go(Routes.Profile);
        },
      },
      styles: 'messages__profileLink',
    });

    await this.props.chatsController.getChats({ limit: 50, offset: 0 });

    this.props.chats?.forEach(async chat => {
      await this.props.messagesController.connect(chat.id, chat.token);
    });
  }

  protected componentDidUpdate(oldProps: PropsFromStore, newProps: PropsFromStore): boolean {
    if (!isEqual(oldProps.lastChatMessages, newProps.lastChatMessages)) {
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

    const props = this.props;

    return this.props.lastChatMessages?.map(
      m =>
        new ChatsListItem({
          ...m,
          events: {
            async click() {
              chatsController.selectChat(m.chatId);

              const hasOldMessages =
                !!props.messages && props.messages[m.chatId] && props.messages[m.chatId].length > 0;

              if (hasOldMessages) {
                return;
              }

              await messagesController.fetchOldMessages(m.chatId, 0);
            },
          },
        })
    );
  }
}

const mapStateToProps = (state: State): PropsFromStore => {
  return {
    lastChatMessages: state.chats?.chatsList.map(c => {
      return {
        chatName: c.title,
        message: c.last_message?.content,
        messageDate: c.last_message?.time && new Date(c.last_message?.time).toString(),
        imgSrc: c.avatar,
        unreadMessagesCount: c.unread_count,
        isMessageReceived: c.unread_count === 0,
        isMessageSelected: false,
        chatId: c.id,
      };
    }),
    chats: state.chats?.chatsList.map(c => ({ id: c.id, token: c.token })),
    messages: state.messages,
  };
};

const WithControllers = withControllers<OwnProps, Controllers>(ChatsList, {
  chatsController: new ChatsController(),
  messagesController: new MessagesController(),
  router: new Router('#app'),
});

export default withStore<OwnProps, PropsFromStore>(mapStateToProps)(WithControllers);
