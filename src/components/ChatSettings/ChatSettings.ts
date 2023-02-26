import { Block } from '../../utils/Block';
import template from './ChatSettings.hbs';

type Props = {
  isOpen: boolean;
};

export class ChatSettings extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
