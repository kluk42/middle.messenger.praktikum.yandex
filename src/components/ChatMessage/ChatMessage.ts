import { Block } from '../../utils/Block';
import template from './ChatMessage.hbs';

type Props = {
  isMessageSent: boolean;
  isMessageDelivered?: boolean;
  messageTime: string;
  withDate?: boolean;
  messageDate?: string;
  imgPath?: string;
  textMessage?: string;
};

export class ChatMessage extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
