import { Block } from '../../utils/Block';
import { Button } from '../Button/Button';
import template from './Modal.hbs';

export type Props = {
  isOpen: boolean;
  content: Block[];
  header: string;
  onClose: () => void;
};

export class Modal extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  protected init(): void {
    this.children.CloseBtn = new Button({
      label: '',
      noValidation: true,
      styles: 'closeBtn',
      events: {
        click: this.props.onClose,
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
