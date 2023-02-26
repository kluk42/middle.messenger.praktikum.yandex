import { Block } from '../../utils/Block';
import template from './Input.hbs';

export type Props = {
  inputStyle: string;
  name: string;
  placeholder?: string;
  type?: string;
  events?: {
    blur?: (e: FocusEvent) => void;
  };
  value?: string;
  isTextArea?: boolean;
};

export class Input extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  get value() {
    const element = this.getContent()! as HTMLInputElement;
    return element.value;
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
