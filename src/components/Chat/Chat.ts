import { ChatsController } from '../../controllers/ChatsController';
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
import { Field } from '../Field/Field';
import { Form } from '../Form/Form';
import { Input } from '../Input/Input';
import { Modal } from '../Modal/Modal';
import template from './Chat.hbs';

const modalSwitcher = (
  modalName: InternalProps['Modal'],
  onCloseModal: () => void,
  controller: ChatsController
) => {
  const loginInput = new Input({
    name: 'login',
    inputStyle: 'inputField__input',
  });
  const loginField = new Field({
    input: loginInput,
    label: 'Логин',
    name: 'login',
  });

  const addUserForm = new Form<{ login: 'login' }>({
    fields: [loginField],
    inputs: [loginInput],
    submitBtn: new Button({ label: 'Добавить пользователя', stylesType: ButtonStyleTypes.Submit }),
    submit: values => console.log(values),
  });

  const deleteUserForm = new Form<{ login: 'login' }>({
    fields: [loginField],
    inputs: [loginInput],
    submitBtn: new Button({ label: 'Удалить пользователя', stylesType: ButtonStyleTypes.Submit }),
    submit: values => console.log(values),
  });

  const fileInput = new Input({
    type: 'file',
    name: 'avatar',
    id: 'avatar',
    inputStyle: 'modal__fileInput',
  });
  const fileField = new Field({
    input: fileInput,
    label: 'Выберите файл',
    name: 'avatar',
    labelStyle: 'modal__fileInputLabel',
  });

  const fileForm = new Form<{ avatar: 'avatar' }>({
    fields: [fileField],
    inputs: [fileInput],
    submit: values => console.log(values),
    submitBtn: new Button({ label: 'Поменять аватар', stylesType: ButtonStyleTypes.Submit }),
    formClass: 'modal__fileForm',
  });

  const createChatInput = new Input({
    name: 'chatName',
    inputStyle: 'inputField__input',
  });
  const createChatField = new Field({
    input: createChatInput,
    label: 'Имя чата',
    name: 'chatName',
  });
  const createChatForm = new Form<{ chatName: 'chatName' }>({
    fields: [createChatField],
    inputs: [createChatInput],
    submit: async ({ chatName }) => {
      await controller.createChat(chatName);
      onCloseModal();
    },
    submitBtn: new Button({ label: 'Создать чат', stylesType: ButtonStyleTypes.Submit }),
    formClass: 'modal__fileForm',
  });

  switch (modalName) {
    case 'delete-chat':
      return new Modal({
        isOpen: true,
        content: [new Button({ label: 'Подтвердить', stylesType: ButtonStyleTypes.Submit })],
        header: 'Удалить?',
        onClose: onCloseModal,
      });
    case 'add-user':
      return new Modal({
        isOpen: true,
        header: 'Добавить пользователя',
        content: [addUserForm],
        onClose: onCloseModal,
      });
    case 'delete-user':
      return new Modal({
        isOpen: true,
        header: 'Удалить пользователя',
        content: [deleteUserForm],
        onClose: onCloseModal,
      });
    case 'change-avatar':
      return new Modal({
        isOpen: true,
        header: 'Поменять аватар',
        content: [fileForm],
        onClose: onCloseModal,
      });
    case 'create-chat':
      return new Modal({
        isOpen: true,
        header: 'Создать чат',
        content: [createChatForm],
        onClose: onCloseModal,
      });
    default:
      return undefined;
  }
};

type InternalProps = {
  Modal?: 'delete-chat' | 'add-user' | 'delete-user' | 'change-avatar' | 'create-chat' | null;
  areSettingsOpen?: boolean;
};

type PropsFromStore = {
  isChatSelected: boolean;
};

type Controllers = {
  chatsController: ChatsController;
};

type OwnProps = {
  ChatMessageInput: ChatMessageInput;
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
  }

  private closeModal() {
    this.props.Modal = null;
  }

  protected componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    if (oldProps.Modal !== newProps.Modal) {
      this.props.areSettingsOpen = false;

      const modal = modalSwitcher(
        newProps.Modal,
        this.closeModal.bind(this),
        this.props.chatsController
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
});

const mapStateToProps = (state: State): PropsFromStore => {
  return {
    isChatSelected: state.chats?.selectedChatId !== undefined,
  };
};

export default withStore<PropsWithoutControllers, PropsFromStore>(mapStateToProps)(WithControllers);
