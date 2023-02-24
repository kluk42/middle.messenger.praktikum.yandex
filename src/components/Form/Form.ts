import { Block } from '../../utils/Block';
import { Button } from '../Button/Button';
import { Field } from '../Field/Field';
import template from './Form.hbs';

export type Props = {
  inputs: Field[];
  submitBtn: Button;
  events: {
    submit: (e: SubmitEvent) => void;
  };
};

export class Form extends Block {
  constructor(props: Props) {
    super(props);
  }

  public getValues() {
    const children = this.getContent()?.children;
    if (children) {
      const childrenArray = Array.from(children);
      console.log(childrenArray);
    }
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
