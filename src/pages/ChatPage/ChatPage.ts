import { Block } from '../../utils/Block';
import template from './ChatPage.hbs';

export class ChatPage extends Block {
  constructor() {
    super({});
  }

  init() {}

  protected render(): DocumentFragment {
    return this.compile(template, this.children);
  }
}
