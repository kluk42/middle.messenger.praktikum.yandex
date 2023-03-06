import { renderDOM } from '../..';
import { AnchorLink } from '../../components/AnchorLink/AnchorLink';
import { Block } from '../../utils/Block';
import template from './ErrorPage.hbs';

export class ErrorPage extends Block<Record<string, never>> {
  constructor() {
    super({});
  }

  protected init(): void {
    this.children.Link = new AnchorLink({
      href: '/',
      text: 'Назад к чатам',
      events: {
        click(e) {
          e.preventDefault();
          renderDOM('chat');
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, {
      Link: this.children.Link,
      statusCode: 500,
      text: 'Что-то пошло не так',
    });
  }
}
