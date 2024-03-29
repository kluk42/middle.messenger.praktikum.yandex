import { Button, ButtonStyleTypes } from '../components/Button/Button';
import { Field } from '../components/Field/Field';
import { FileForm } from '../components/Form/FileForm';
import { Form } from '../components/Form/Form';
import { FileInput } from '../components/Input/FileInput';
import { Input } from '../components/Input/Input';
import { Modal } from '../components/Modal/Modal';
import { ChatsController } from '../controllers/ChatsController';

export type ModalNames =
  | 'delete-chat'
  | 'add-user'
  | 'delete-user'
  | 'change-avatar'
  | 'create-chat';

export const modalsSwitcher = (
  onCloseModal: () => void,
  chatId: number | null,
  controller: ChatsController,
  modalName?: ModalNames | null
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
    submit: async ({ login }) => {
      if (chatId !== null) {
        await controller.addUser(login, chatId);
        onCloseModal();
      }
    },
  });

  const deleteUserForm = new Form<{ login: 'login' }>({
    fields: [loginField],
    inputs: [loginInput],
    submitBtn: new Button({ label: 'Удалить пользователя', stylesType: ButtonStyleTypes.Submit }),
    submit: async ({ login }) => {
      if (chatId !== null) {
        await controller.deleteUser(login, chatId);
        onCloseModal();
      }
    },
  });

  const fileInput = new FileInput({
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

  const fileForm = new FileForm<{ avatar: 'avatar' }>({
    fields: [fileField],
    inputs: [fileInput],
    submit: async ({ avatar }) => {
      if (avatar && chatId !== null) {
        const formData = new FormData();
        formData.append('avatar', avatar);
        formData.append('chatId', chatId.toString());
        await controller.editAvatar(formData);
      }
      onCloseModal();
    },
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

  const deleteChatBtn = new Button({
    label: 'Подтвердить',
    stylesType: ButtonStyleTypes.Submit,
    type: 'submit',
    events: {
      click: async () => {
        if (chatId) {
          await controller.deleteChat(chatId);
          onCloseModal();
        }
      },
    },
  });

  switch (modalName) {
    case 'delete-chat':
      return new Modal({
        isOpen: true,
        content: [deleteChatBtn],
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
