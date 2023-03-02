import imgPath from '../../../static/images/photoMessage.png';
import { ChatMessage } from '../../components/ChatMessage/ChatMessage';
import { Message } from '../../components/Message/Message';

export const chatMessagesMock: ChatMessage[] = [
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

export const messagesListMock = [
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
];
