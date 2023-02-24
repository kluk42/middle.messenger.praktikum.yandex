import { Block } from '../../utils/Block';
import template from './Input.hbs';

export type Props = {
  class: string;
  type: string;
  name: string;
  events?: {
    blur?: (e: FocusEvent) => void;
  };
  value?: string;
};

export class Input extends Block {
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
