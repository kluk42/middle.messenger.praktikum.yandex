import { Block, IBlock } from '../../utils/Block';
import { Button } from '../Button/Button';
import template from './Modal.hbs';

export type Props = {
  isOpen: boolean;
  content: IBlock<Record<string, unknown>>[];
  header: string;
  onClose: () => void;
};

type Children = {
  CloseBtn: Button;
};

export class Modal extends Block<Props, Children> {
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
