import { ChatsController } from '../../controllers/ChatsController';
import { MessagesController } from '../../controllers/MessagesController';
import { withControllers } from '../../hocs/withControllers';
import { withStore } from '../../hocs/withStore';
import { Block } from '../../utils/Block';
import { State } from '../../utils/Store';
import { Message } from '../../utils/WSTransport';
import isEqual from '../../utils/isEqual';
import { ModalNames, modalsSwitcher } from '../../utils/modalsSwitcher';
import { Button, ButtonStyleTypes } from '../Button/Button';
import { ChatMessage } from '../ChatMessage/ChatMessage';
import { ChatMessageInput } from '../ChatMessageInput/ChatMessageInput';
import { ChatSettings } from '../ChatSettings/ChatSettings';
import { DotsForButton } from '../ChatSettings/DotsForButton';
import { getButtonsForSelectedChat } from '../ChatSettings/utils';
import template from './Chat.hbs';

export const getButtonsForNotSelectedChat = ({
  clickCreateChat,
}: {
  clickCreateChat: () => void;
}) => [
  new Button({
    label: '',
    noValidation: true,
    stylesType: ButtonStyleTypes.Custom,
    styles: 'chat__createChatBtn',
    events: { click: clickCreateChat },
  }),
];

type InternalProps = {
  Modal?: ModalNames | null;
  areSettingsOpen?: boolean;
};

type PropsFromStore = {
  isChatSelected: boolean;
  chatId?: number;
  chatMessages?: Message[];
  userId?: number;
  avatarSrc?: string;
  chatName?: string;
};

type Controllers = {
  chatsController: ChatsController;
  messagesController: MessagesController;
};

type Props = PropsFromStore & InternalProps & Controllers;
type PropsFromConstructor = PropsFromStore & Controllers;
type PropsWithoutControllers = PropsFromStore;

let closeFunction: null | ((e: MouseEvent) => void) = null;

class Chat extends Block<Props> {
  constructor(props: PropsFromConstructor) {
    super({ ...props, Modal: null, areSettingsOpen: false });
  }

  toggleSettings() {
    this.props.areSettingsOpen = !this.props.areSettingsOpen;
  }

  protected init(): void {
    this.children.CreateChatBtn = getButtonsForNotSelectedChat({
      clickCreateChat: () => (this.props.Modal = 'create-chat'),
    });

    this.children.ChatMessageInput = new ChatMessageInput({
      sendMessage: message => {
        if (this.props.chatId) {
          this.props.messagesController.sendMessage(this.props.chatId, message);
        }
      },
    });
  }

  private closeModal() {
    this.props.Modal = null;
  }

  protected componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    if (oldProps.Modal !== newProps.Modal) {
      this.props.areSettingsOpen = false;

      const modal = modalsSwitcher(
        this.closeModal.bind(this),
        this.props.chatId ?? null,
        this.props.chatsController,
        newProps.Modal
      );

      if (modal) {
        modal.dispatchComponentDidMount();
      }

      this.children.Modal = modal;
    }

    if (oldProps.areSettingsOpen !== newProps.areSettingsOpen) {
      const chatSettings = this.children.ChatSettings as ChatSettings;
      chatSettings.props.isOpen = !!newProps.areSettingsOpen;

      if (newProps.areSettingsOpen) {
        closeFunction = (e: MouseEvent) => {
          const target = e.target as HTMLElement;
          if (target.classList.contains('chatSettings__settingsBtn')) {
            return;
          }

          this.toggleSettings();
        };

        document.addEventListener('click', closeFunction);
      } else {
        if (closeFunction) {
          document.removeEventListener('click', closeFunction);
          closeFunction = null;
        }
      }
    }

    if (oldProps.isChatSelected !== newProps.isChatSelected) {
      if (newProps.isChatSelected) {
        this.children.ChatSettings = new ChatSettings({
          isOpen: false,
          buttons: getButtonsForSelectedChat({
            clickDeleteChat: () => (this.props.Modal = 'delete-chat'),
            clickAddUser: () => (this.props.Modal = 'add-user'),
            clickDeleteUser: () => (this.props.Modal = 'delete-user'),
            clickEditAvatar: () => (this.props.Modal = 'change-avatar'),
          }),
          openBtn: new Button({
            label: '',
            noValidation: true,
            stylesType: ButtonStyleTypes.Custom,
            styles: 'chatSettings__settingsBtn',
            child: new DotsForButton(),
            events: {
              click: this.toggleSettings.bind(this),
            },
          }),
        });

        this.renderMessages();
      } else {
        this.children.CreateChatBtn = getButtonsForNotSelectedChat({
          clickCreateChat: () => (this.props.Modal = 'create-chat'),
        });
      }
    }

    if (!isEqual(oldProps.chatMessages, newProps.chatMessages)) {
      this.renderMessages();
    }

    return !isEqual(oldProps, newProps);
  }

  private renderMessages() {
    this.children.chatMessages = this.props.chatMessages?.map(message => {
      const messageDate = new Date(message.time);
      const messageTime = `${messageDate.getHours()}:${messageDate.getMinutes()}`;
      return new ChatMessage({
        isMessageSent: message.user_id === this.props.userId,
        messageTime,
        textMessage: message.content,
      });
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

const WithControllers = withControllers<Props, Controllers>(Chat, {
  chatsController: new ChatsController(),
  messagesController: new MessagesController(),
});

const mapStateToProps = (state: State): PropsFromStore => {
  const chatId = state.selectedChat?.id;
  return {
    isChatSelected: state.selectedChat !== undefined,
    chatId: chatId,
    chatMessages:
      chatId !== undefined && state.messages && chatId in state.messages
        ? [...state.messages[chatId]]
        : [],
    userId: state.user?.id,
    chatName: state.selectedChat?.chatName,
    avatarSrc: state.selectedChat?.avatarSrc,
  };
};

export default withStore<PropsWithoutControllers, PropsFromStore>(mapStateToProps)(WithControllers);
