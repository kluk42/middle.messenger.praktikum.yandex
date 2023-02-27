import { Block } from '../../utils/Block';
import { ChatMessage } from '../ChatMessage/ChatMessage';
import { ChatMessageInput } from '../ChatMessageInput/ChatMessageInput';
import { ChatSettings } from '../ChatSettings/ChatSettings';
import template from './Chat.hbs';

type Props = {
  ChatMessageInput: ChatMessageInput;
  ChatSettings: ChatSettings;
  avatarSrc?: string;
  chatName?: string;
  isChatSelected?: boolean;
  chatMessages?: ChatMessage[];
};

export class Chat extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
