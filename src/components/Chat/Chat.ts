import { ChatsController } from '../../controllers/ChatsController';
import { MessagesController } from '../../controllers/MessagesController';
import { withControllers } from '../../hocs/withControllers';
import { withStore } from '../../hocs/withStore';
import { Block } from '../../utils/Block';
import { State } from '../../utils/Store';
import isEqual from '../../utils/isEqual';
import { Button, ButtonStyleTypes } from '../Button/Button';
import { ChatMessage } from '../ChatMessage/ChatMessage';
import { ChatMessageInput } from '../ChatMessageInput/ChatMessageInput';
import { ChatSettings } from '../ChatSettings/ChatSettings';
import { DotsForButton } from '../ChatSettings/DotsForButton';
import { getButtonsForNotSelectedChat, getButtonsForSelectedChat } from '../ChatSettings/utils';
import template from './Chat.hbs';
import { ModalNames, modalSwitcher } from './utils';

type InternalProps = {
  Modal?: ModalNames | null;
  areSettingsOpen?: boolean;
};

type PropsFromStore = {
  isChatSelected: boolean;
  chatId?: number;
};

type Controllers = {
  chatsController: ChatsController;
  messagesController: MessagesController;
};

type OwnProps = {
  avatarSrc?: string;
  chatName?: string;
  chatMessages?: ChatMessage[];
};

type Props = OwnProps & PropsFromStore & InternalProps & Controllers;
type PropsFromConstructor = OwnProps & PropsFromStore & Controllers;
type PropsWithoutControllers = OwnProps & PropsFromStore;

class Chat extends Block<Props> {
  constructor(props: PropsFromConstructor) {
    super({ ...props, Modal: null, areSettingsOpen: false });
  }

  protected init(): void {
    this.children.ChatSettings = new ChatSettings({
      isOpen: false,
      buttons: getButtonsForNotSelectedChat({
        clickCreateChat: () => (this.props.Modal = 'create-chat'),
      }),
      openBtn: new Button({
        label: '',
        noValidation: true,
        stylesType: ButtonStyleTypes.Custom,
        styles: 'chatSettings__settingsBtn',
        child: new DotsForButton(),
        events: {
          click: () => (this.props.areSettingsOpen = !this.props.areSettingsOpen),
        },
      }),
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

      const modal = modalSwitcher(
        this.closeModal.bind(this),
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
    }

    if (oldProps.isChatSelected !== newProps.isChatSelected) {
      if (newProps.isChatSelected) {
        this.children.ChatSettings = new ChatSettings({
          isOpen: false,
          buttons: getButtonsForSelectedChat({
            clickDeleteChat: () => {
              this.props.Modal = 'delete-chat';
            },
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
              click: () => (this.props.areSettingsOpen = !this.props.areSettingsOpen),
            },
          }),
        });
      } else {
        this.children.ChatSettings = new ChatSettings({
          isOpen: false,
          buttons: getButtonsForNotSelectedChat({
            clickCreateChat: () => (this.props.Modal = 'create-chat'),
          }),
          openBtn: new Button({
            label: '',
            noValidation: true,
            stylesType: ButtonStyleTypes.Custom,
            styles: 'chatSettings__settingsBtn',
            child: new DotsForButton(),
            events: {
              click: () => (this.props.areSettingsOpen = !this.props.areSettingsOpen),
            },
          }),
        });
      }
    }

    return !isEqual(oldProps, newProps);
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
  return {
    isChatSelected: state.chats?.selectedChatId !== undefined,
    chatId: state.chats?.selectedChatId,
  };
};

export default withStore<PropsWithoutControllers, PropsFromStore>(mapStateToProps)(WithControllers);
