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
      new AnchorLink({
        href: '/',
        text: 'Авторизация',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            renderDOM('signIn');
          },
        },
      }),
      new AnchorLink({
        href: '/',
        text: 'Чат',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            renderDOM('chat');
          },
        },
      }),
      new AnchorLink({
        href: '/',
        text: 'Редактирование профиля',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            renderDOM('editProfile');
          },
        },
      }),
      new AnchorLink({
        href: '/',
        text: 'Редактирование пароля',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            renderDOM('editPassword');
          },
        },
      }),
      new AnchorLink({
        href: '/',
        text: 'Профиль',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            renderDOM('profilePage');
          },
        },
      }),
      new AnchorLink({
        href: '/',
        text: 'Страница с ошибкой',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            renderDOM('errorPage');
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
