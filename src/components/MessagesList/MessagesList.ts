import { Block } from '../../utils/Block';
import template from './MessagesList.hbs';

type Props = {};

export class MessagesList extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.children);
  }
}
