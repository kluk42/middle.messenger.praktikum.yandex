import { Block } from '../../utils/Block';
import template from './Input.hbs';

export type Props = {
  name: string;
  id?: string;
  inputStyle?: string;
  type: 'file';
};

export class FileInput extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  get file() {
    const element = this.getContent()! as HTMLInputElement;
    return element.files && element.files[0];
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
