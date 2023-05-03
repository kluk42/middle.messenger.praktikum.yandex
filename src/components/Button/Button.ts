import { Block, IBlock } from '../../utils/Block';
import template from './Button.hbs';

export type Props = {
  label: string;
  noValidation?: boolean;
  actionError?: string;
  stylesType?: ButtonStyleTypes;
  styles?: string;
  validationError?: string;
  containerStyles?: string;
  child?: IBlock<Record<string, never>> | IBlock<Record<string, unknown>>;
  events?: {
    click: () => void;
  };
  type?: string;
};

export enum ButtonStyleTypes {
  Submit = 'submit',
  Attachment = 'attachment',
  Custom = 'custom',
}

export class Button extends Block<Props, Record<string, never>> {
  constructor(props: Props) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
