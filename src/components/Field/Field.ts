import { Block } from '../../utils/Block';
import { FileInput } from '../Input/FileInput';
import { Input } from '../Input/Input';
import template from './Field.hbs';

export type Props = {
  name: string;
  label: string;
  input: Input | FileInput;
  isTextArea?: boolean;
  errorStyle?: string;
  errorText?: string;
  inputWrapperStyle?: string;
  labelStyle?: string;
};

export class Field extends Block<Props, Record<string, never>> {
  constructor(props: Props) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
