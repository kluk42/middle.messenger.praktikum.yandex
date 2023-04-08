import { Button, ButtonStyleTypes } from '../Button/Button';

export const getButtonsForSelectedChat = ({
  clickDeleteChat,
  clickAddUser,
  clickDeleteUser,
  clickEditAvatar,
}: {
  clickDeleteChat: () => void;
  clickAddUser: () => void;
  clickDeleteUser: () => void;
  clickEditAvatar: () => void;
}) => [
  new Button({
    label: 'Удалить чат',
    noValidation: true,
    stylesType: ButtonStyleTypes.Custom,
    styles: 'chatSettings__actionBtn',
    events: { click: clickDeleteChat },
  }),
  new Button({
    label: 'Добавить пользователя',
    noValidation: true,
    stylesType: ButtonStyleTypes.Custom,
    styles: 'chatSettings__actionBtn',
    events: { click: clickAddUser },
  }),
  new Button({
    label: 'Удалить пользователя',
    noValidation: true,
    stylesType: ButtonStyleTypes.Custom,
    styles: 'chatSettings__actionBtn',
    events: { click: clickDeleteUser },
  }),
  new Button({
    label: 'Изменить аватар',
    noValidation: true,
    stylesType: ButtonStyleTypes.Custom,
    styles: 'chatSettings__actionBtn',
    events: { click: clickEditAvatar },
  }),
];

export const getButtonsForNotSelectedChat = ({
  clickCreateChat,
}: {
  clickCreateChat: () => void;
}) => [
  new Button({
    label: 'Создать чат',
    noValidation: true,
    stylesType: ButtonStyleTypes.Custom,
    styles: 'chatSettings__actionBtn',
    events: { click: clickCreateChat },
  }),
];
