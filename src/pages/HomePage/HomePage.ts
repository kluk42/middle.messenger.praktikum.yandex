import { renderDOM } from '../..';
import { AnchorLink } from '../../components/AnchorLink/AnchorLink';
import { Block } from '../../utils/Block';
import template from './HomePage.hbs';

export class HomePage extends Block {
  constructor() {
    super({});
  }

  protected init(): void {
    const links = [
      new AnchorLink({
        href: '/',
        text: 'Регистрация',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            renderDOM('signUp');
          },
        },
      }),
    ];
    this.children.links = links;
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.children);
  }
}