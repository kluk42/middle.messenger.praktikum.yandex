import { ChatsController } from '../../controllers/ChatsController';
import { withControllers } from '../../hocs/withControllers';
import { withStore } from '../../hocs/withStore';
import { Block } from '../../utils/Block';
import isEqual from '../../utils/isEqual';
import { State } from '../../utils/Store';
import { Message, MessageProps } from '../Message/Message';
import template from './MessagesList.hbs';

type PropsFromStore = {
  messages?: MessageProps[];
  selectedChatId?: string;
};

type Controllers = {
  chatsController: ChatsController;
};

type OwnProps = {};

type Props = PropsFromStore & OwnProps & Controllers;

class MessagesList extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  protected async init() {
    this.children.chats = this.createChats();

    await this.props.chatsController.getChats();
  }

  protected componentDidUpdate(oldProps: PropsFromStore, newProps: PropsFromStore): boolean {
    if (!isEqual(oldProps.messages, newProps.messages)) {
      this.children.chats = this.createChats();

      return true;
    }

    if (oldProps.selectedChatId !== newProps.selectedChatId) {
      const selectedMessage = (this.children.chats as Message[]).find(
        c => c.props.chatId === newProps.selectedChatId
      );

      selectedMessage?.props.isMessageSelected = true;
    }

    return !isEqual(oldProps, newProps);
  }

  protected render(): DocumentFragment {
    return this.compile(template, { ...this.props, ...this.children });
  }

  protected createChats() {
    return this.props.messages?.map(m => new Message(m));
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
    selectedChatId: state.chats?.selectedChat,
  };
};

const WithControllers = withControllers<OwnProps, Controllers>(MessagesList, {
  chatsController: new ChatsController(),
});

export default withStore<OwnProps, PropsFromStore>(mapStateToProps)(WithControllers);
