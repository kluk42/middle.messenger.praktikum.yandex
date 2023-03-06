import { Block } from '../../utils/Block';
import { Button, ButtonStyleTypes } from '../Button/Button';
import { ChatMessage } from '../ChatMessage/ChatMessage';
import { ChatMessageInput } from '../ChatMessageInput/ChatMessageInput';
import { ChatSettings } from '../ChatSettings/ChatSettings';
import { DotsForButton } from '../ChatSettings/DotsForButton';
import { Field } from '../Field/Field';
import { Form } from '../Form/Form';
import { Input } from '../Input/Input';
import { Modal } from '../Modal/Modal';
import template from './Chat.hbs';

type InternalProps = {
  Modal: 'delete-chat' | 'add-user' | 'delete-user' | 'change-avatar' | null;
  areSettingsOpen: boolean;
};

const modalSwitcher = (modalName: InternalProps['Modal'], onCloseModal: () => void) => {
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
    default:
      return undefined;
  }
};

type Props = {
  ChatMessageInput: ChatMessageInput;
  avatarSrc?: string;
  chatName?: string;
  isChatSelected?: boolean;
  chatMessages?: ChatMessage[];
};

export class Chat extends Block<Props & InternalProps> {
  constructor(props: Props) {
    super({ ...props, Modal: null, areSettingsOpen: false });
  }

  protected init(): void {
    this.children.ChatSettings = new ChatSettings({
      isOpen: false,
      deleteChatBtn: new Button({
        label: 'Удалить чат',
        noValidation: true,
        stylesType: ButtonStyleTypes.Custom,
        styles: 'chatSettings__actionBtn',
        events: { click: () => (this.props.Modal = 'delete-chat') },
      }),
      addUserBtn: new Button({
        label: 'Добавить пользователя',
        noValidation: true,
        stylesType: ButtonStyleTypes.Custom,
        styles: 'chatSettings__actionBtn',
        events: { click: () => (this.props.Modal = 'add-user') },
      }),
      deleteUserBtn: new Button({
        label: 'Удалить пользователя',
        noValidation: true,
        stylesType: ButtonStyleTypes.Custom,
        styles: 'chatSettings__actionBtn',
        events: { click: () => (this.props.Modal = 'delete-user') },
      }),
      changeAvatarBtn: new Button({
        label: 'Изменить аватар',
        noValidation: true,
        stylesType: ButtonStyleTypes.Custom,
        styles: 'chatSettings__actionBtn',
        events: { click: () => (this.props.Modal = 'change-avatar') },
      }),
      openBtn: new Button({
        label: '',
        noValidation: true,
        stylesType: ButtonStyleTypes.Custom,
        styles: 'chatSettings__settingsBtn',
        child: new DotsForButton(),
        events: {
          click: () => {
            this.props.areSettingsOpen = !this.props.areSettingsOpen;
          },
        },
      }),
    });
  }

  private closeModal() {
    this.props.Modal = null;
  }

  protected componentDidUpdate(oldProps: InternalProps, newProps: InternalProps): boolean {
    if (oldProps.Modal !== newProps.Modal) {
      this.props.areSettingsOpen = false;

      const modal = modalSwitcher(newProps.Modal, this.closeModal.bind(this));

      if (modal) {
        modal.dispatchComponentDidMount();
      }

      this.children.Modal = modal;
    }
    if (oldProps.areSettingsOpen !== newProps.areSettingsOpen) {
      const chatSettings = this.children.ChatSettings as ChatSettings;
      chatSettings.props.isOpen = newProps.areSettingsOpen;
    }

    return oldProps !== newProps;
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
