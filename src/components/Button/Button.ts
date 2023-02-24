import { Block } from '../../utils/Block';
import template from './Button.hbs';

export type Props = {
  label: string;
  actionError?: string;
  stylesType?: ButtonStyleTypes;
  styles?: string;
  validationError?: string;
};

export enum ButtonStyleTypes {
  Submit = 'submit',
}

export class Button extends Block {
  constructor(props: Props) {
    super(props);
  }
  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
