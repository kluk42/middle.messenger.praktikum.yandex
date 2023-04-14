import imgPath from '../../../static/images/photoMessage.png';
import { ChatMessage } from '../../components/ChatMessage/ChatMessage';

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
