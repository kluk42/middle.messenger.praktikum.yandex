import { Block } from '../../utils/Block';
import { Button } from '../Button/Button';
import template from './ChatSettings.hbs';

type Props = {
  isOpen: boolean;
  buttons: Button[];
  openBtn: Button;
};

export class ChatSettings extends Block<Props, Record<string, never>> {
  constructor(props: Props) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
