import { Block } from '../../utils/Block';
import { Input } from '../Input/input';
import template from './Field.hbs';

export type Props = {
  name: string;
  label: string;
  input: Input;
  errorStyle?: string;
  errorText?: string;
  inputWrapperStyle?: string;
  labelStyle?: string;
};

export class Field extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
