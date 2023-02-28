import { Block } from '../../utils/Block';
import { ChatMessage } from '../ChatMessage/ChatMessage';
import { ChatMessageInput } from '../ChatMessageInput/ChatMessageInput';
import { ChatSettings } from '../ChatSettings/ChatSettings';
import template from './Chat.hbs';

type Props = {
  ChatMessageInput: ChatMessageInput;
  ChatSettings: ChatSettings;
  areSettingsOpen: boolean;
  avatarSrc?: string;
  chatName?: string;
  isChatSelected?: boolean;
  chatMessages?: ChatMessage[];
};

export class Chat extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  protected componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    if (oldProps.areSettingsOpen !== newProps.areSettingsOpen) {
      const chatSettings = this.children.ChatSettings as ChatSettings;
      chatSettings.props.isOpen = newProps.areSettingsOpen;
    }

    return oldProps !== newProps;
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
