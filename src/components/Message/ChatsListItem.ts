import { withStore } from '../../hocs/withStore';
import { Block } from '../../utils/Block';
import { State } from '../../utils/Store';
import isEqual from '../../utils/isEqual';
import template from './ChatsListItem.hbs';

type PropsFromStore = {
  selectedChatId?: number;
  selectedChatAvatar?: string;
};

export type ChatListItemProps = {
  chatName: string;
  messageDate?: string;
  message?: string;
  isMessageReceived?: boolean;
  unreadMessagesCount?: number;
  isMessageSelected?: boolean;
  imgSrc?: string;
  chatId: number;
  events?: {
    click: (e: MouseEvent) => void;
  };
};

type InternalState = {
  isMessageSelected: boolean;
};

type ExternalProps = ChatListItemProps & PropsFromStore;

type Props = ChatListItemProps & PropsFromStore & InternalState;

class ChatsListItem extends Block<Props> {
  constructor(props: ExternalProps) {
    super({ ...props, isMessageSelected: props.chatId === props.selectedChatId });
  }

  protected componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    if (oldProps.selectedChatId !== newProps.selectedChatId) {
      this.props.isMessageSelected = this.props.chatId === newProps.selectedChatId;
    }

    if (
      newProps.selectedChatAvatar &&
      oldProps.selectedChatAvatar !== newProps.selectedChatAvatar &&
      this.props.isMessageSelected
    ) {
      this.props.imgSrc = newProps.selectedChatAvatar;
    }

    return !isEqual(oldProps, newProps);
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

const mapStateToProps = (state: State): PropsFromStore => {
  return {
    selectedChatId: state.selectedChat?.id,
    selectedChatAvatar: state.selectedChat?.avatarSrc,
  };
};

export const createChatsListItem = () =>
  withStore<ChatListItemProps, PropsFromStore>(mapStateToProps)(ChatsListItem);
