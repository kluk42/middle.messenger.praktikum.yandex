import { Block } from '../../utils/Block';
import template from './Modal.hbs';

type Props = {
  isOpen: boolean;
  content: Block[];
  header: string;
};

export class Modal extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
