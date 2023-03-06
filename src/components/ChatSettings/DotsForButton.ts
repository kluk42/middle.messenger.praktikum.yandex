import { Block } from '../../utils/Block';
import template from './DotsForButton.hbs';

export class DotsForButton extends Block<Record<string, never>> {
  constructor() {
    super({});
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
