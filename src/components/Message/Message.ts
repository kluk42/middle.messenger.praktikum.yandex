import { Block } from '../../utils/Block';
import template from './Message.hbs';

type Props = {
  chatName: string;
  messageDate: string;
  message: string;
  isMessageReceived?: boolean;
  unreadMessagesCount?: number;
  isMessageSelected?: boolean;
  imgSrc?: string;
};

export class Message extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
