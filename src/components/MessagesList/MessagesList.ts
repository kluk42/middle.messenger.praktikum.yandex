import { Block } from '../../utils/Block';
import { FoundMessage } from '../FoundMessage/FoundMessage';
import { Message } from '../Message/Message';
import template from './MessagesList.hbs';

type Props = {
  messages?: Message[];
  foundMessages?: FoundMessage[];
};

export class MessagesList extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
