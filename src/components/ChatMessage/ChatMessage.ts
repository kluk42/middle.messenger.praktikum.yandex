import imageReceivedIcon from '../../../static/images/messageIsReceivedIcon.png';
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

type InternalProps = {
  messageReceivedImgPath: string;
};

export class ChatMessage extends Block<Props & InternalProps, Record<string, never>> {
  constructor(props: Props) {
    super({ ...props, messageReceivedImgPath: imageReceivedIcon });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
