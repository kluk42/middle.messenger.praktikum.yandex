import imgPath from '../../../static/images/photoMessage.png';
import { Button, ButtonStyleTypes } from '../../components/Button/Button';
import { Chat } from '../../components/Chat/Chat';
import { ChatMessage } from '../../components/ChatMessage/ChatMessage';
import { ChatMessageInput } from '../../components/ChatMessageInput/ChatMessageInput';
import { ChatSettings } from '../../components/ChatSettings/ChatSettings';
import { DotsForButton } from '../../components/ChatSettings/DotsForButton';
import { Field } from '../../components/Field/Field';
import { Form } from '../../components/Form/Form';
import { Input } from '../../components/Input/Input';
import { Message } from '../../components/Message/Message';
import { MessagesList } from '../../components/MessagesList/MessagesList';
import { Modal } from '../../components/Modal/Modal';
import { Block } from '../../utils/Block';
import template from './ChatPage.hbs';

type InternalProps = {
  openModal: 'delete-chat' | 'add-user' | 'delete-user' | 'change-avatar' | null;
  areSettingsOpen: boolean;
};

const modalSwitcher = (modalName: InternalProps['openModal'], onCloseModal: () => void) => {
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

export class ChatPage extends Block<InternalProps> {
  constructor() {
    super({ areSettingsOpen: false, openModal: null });
  }

  init() {
    const messages: ChatMessage[] = [
      new ChatMessage({
        withDate: true,
        messageDate: '3 июля',
        isMessageSent: false,
        messageTime: '15:40',
        imgPath: imgPath,
        isMessageDelivered: false,
      }),
      new ChatMessage({
        isMessageSent: false,
        messageTime: '15:40',
        textMessage:
          'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
      }),
      new ChatMessage({
        isMessageSent: true,
        messageTime: '15:40',
        textMessage: 'Хочу такой!!!',
      }),
      new ChatMessage({
        isMessageSent: false,
        messageTime: '15:40',
        textMessage: 'Хочу такой!!!',
        isMessageDelivered: true,
      }),
      new ChatMessage({
        withDate: true,
        messageDate: '3 июля',
        isMessageSent: false,
        messageTime: '15:40',
        imgPath: imgPath,
        isMessageDelivered: true,
      }),
      new ChatMessage({
        isMessageSent: true,
        messageTime: '15:40',
        isMessageDelivered: true,
        textMessage:
          'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
      }),
    ];
    this.children.Chat = new Chat({
      chatName: 'Иван',
      isChatSelected: true,
      chatMessages: messages,
      ChatMessageInput: new ChatMessageInput({}),
      areSettingsOpen: false,
      ChatSettings: new ChatSettings({
        isOpen: false,
        deleteChatBtn: new Button({
          label: 'Удалить чат',
          noValidation: true,
          stylesType: ButtonStyleTypes.Custom,
          styles: 'chatSettings__actionBtn',
          events: { click: () => (this.props.openModal = 'delete-chat') },
        }),
        addUserBtn: new Button({
          label: 'Добавить пользователя',
          noValidation: true,
          stylesType: ButtonStyleTypes.Custom,
          styles: 'chatSettings__actionBtn',
          events: { click: () => (this.props.openModal = 'add-user') },
        }),
        deleteUserBtn: new Button({
          label: 'Удалить пользователя',
          noValidation: true,
          stylesType: ButtonStyleTypes.Custom,
          styles: 'chatSettings__actionBtn',
          events: { click: () => (this.props.openModal = 'delete-user') },
        }),
        changeAvatarBtn: new Button({
          label: 'Изменить аватар',
          noValidation: true,
          stylesType: ButtonStyleTypes.Custom,
          styles: 'chatSettings__actionBtn',
          events: { click: () => (this.props.openModal = 'change-avatar') },
        }),
        openBtn: new Button({
          label: '',
          noValidation: true,
          stylesType: ButtonStyleTypes.Custom,
          styles: 'chatSettings__settingsBtn',
          child: new DotsForButton(),
          events: {
            click: () => {
              const chat = this.children.Chat as Chat;
              chat.props.areSettingsOpen = !chat.props.areSettingsOpen;
            },
          },
        }),
      }),
    });

    this.children.MessagesList = new MessagesList({
      messages: [
        new Message({
          chatName: 'Никита',
          messageDate: '17:03',
          message: 'Изображение',
          unreadMessagesCount: 1,
          isMessageSelected: true,
        }),
        new Message({
          chatName: 'Пётр',
          messageDate: '17:03',
          message:
            'Друзья, сегодня буду вести трансляцию из своего родного города Рима. Расскажу вам, куда здесь можно пойти и чем стоит заняться',
          unreadMessagesCount: 1,
          isMessageReceived: true,
        }),
        new Message({
          chatName: 'Иван',
          messageDate: 'Вт',
          message: 'Сообщение текст',
          isMessageReceived: true,
        }),
        new Message({
          chatName: 'Андрей',
          messageDate: '1 Мая 2020',
          message: 'Изображение',
          unreadMessagesCount: 1,
        }),
        new Message({
          chatName: 'Яков',
          messageDate: '1 Мая 2020',
          message: 'Отлично порыбачили!',
          unreadMessagesCount: 1,
        }),
        new Message({
          chatName: 'Фома',
          messageDate: '1 Мая 2020',
          message: 'Верую!!!',
          unreadMessagesCount: 1,
        }),
        new Message({
          chatName: 'Филипп',
          messageDate: '1 Мая 2020',
          message: 'Поеду в Грецию чо',
          unreadMessagesCount: 1,
        }),
        new Message({
          chatName: 'Варфоломей',
          messageDate: '1 Мая 2020',
          message: 'Деньги мне плати',
          unreadMessagesCount: 1,
        }),
        new Message({
          chatName: 'Яков',
          messageDate: '1 Мая 2020',
          message: 'Пожалуй, останусь в Армении',
          unreadMessagesCount: 1,
        }),
        new Message({
          chatName: 'Иуда не Искариот',
          messageDate: '1 Мая 2020',
          message: 'Я вообще не такой, как он!',
          unreadMessagesCount: 1,
        }),
        new Message({
          chatName: 'Семён',
          messageDate: '1 Мая 2020',
          message: 'Вся слава мне',
          unreadMessagesCount: 1,
        }),
        new Message({
          chatName: 'Павел',
          messageDate: '1 Мая 2020',
          message: 'Я тоже крут',
          unreadMessagesCount: 1,
        }),
        new Message({
          chatName: 'Александр Македонский',
          messageDate: '1 Мая 2020',
          message: 'Индию хочу',
          unreadMessagesCount: 1,
        }),
        new Message({
          chatName: 'Пётр',
          messageDate: '17:03',
          message:
            'Друзья, сегодня буду вести трансляцию из своего родного города Рима. Расскажу вам, куда здесь можно пойти и чем стоит заняться',
          unreadMessagesCount: 1,
          isMessageReceived: true,
        }),
        new Message({
          chatName: 'Пётр',
          messageDate: '17:03',
          message:
            'Друзья, сегодня буду вести трансляцию из своего родного города Рима. Расскажу вам, куда здесь можно пойти и чем стоит заняться',
          unreadMessagesCount: 1,
          isMessageReceived: true,
        }),
      ],
    });
  }

  private closeModal() {
    this.props.openModal = null;
  }

  protected componentDidUpdate(oldProps: InternalProps, newProps: InternalProps): boolean {
    if (oldProps.openModal !== newProps.openModal) {
      const chatSettings = this.children.Chat as Chat;
      chatSettings.props.areSettingsOpen = false;

      const modal = modalSwitcher(newProps.openModal, this.closeModal.bind(this));

      if (modal) {
        modal.dispatchComponentDidMount();
      }

      this.children.Modal = modal;
    }
    return oldProps !== newProps;
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.children);
  }
}
