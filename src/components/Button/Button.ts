import { Block } from '../../utils/Block';
import template from './Button.hbs';

export type Props = {
  label: string;
  noValidation?: boolean;
  actionError?: string;
  stylesType?: ButtonStyleTypes;
  styles?: string;
  validationError?: string;
  containerStyles?: string;
  child?: Block;
  events?: {
    click: () => void;
  };
};

export enum ButtonStyleTypes {
  Submit = 'submit',
  Attachment = 'attachment',
  Custom = 'custom',
}

export class Button extends Block {
  constructor(props: Props) {
    super(props);
  }
  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
