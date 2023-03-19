import { Block } from '../../utils/Block';
import template from './Message.hbs';

export type MessageProps = {
  chatName: string;
  messageDate?: string;
  message?: string;
  isMessageReceived?: boolean;
  unreadMessagesCount?: number;
  isMessageSelected?: boolean;
  imgSrc?: string;
  chatId?: number;
};

export class Message extends Block<MessageProps> {
  constructor(props: MessageProps) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
