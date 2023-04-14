import { Block } from '../../utils/Block';
import template from './TextAreaInput.hbs';

type Props = {
  name: string;
  id: string;
  styles: string;
  placeholder: string;
};

export class TextAreaInput extends Block {
  constructor(props: Props) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
