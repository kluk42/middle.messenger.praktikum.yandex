import { AnchorLink } from '../../components/AnchorLink/AnchorLink';
import router, { Routes } from '../../Router/Router';
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
            e.preventDefault();
            router.go(Routes.SignUpPage);
          },
        },
      }),
      new AnchorLink({
        href: '/',
        text: 'Авторизация',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            router.go(Routes.SignInPage);
          },
        },
      }),
      new AnchorLink({
        href: '/',
        text: 'Чат',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            router.go(Routes.Chat);
          },
        },
      }),
      new AnchorLink({
        href: '/',
        text: 'Редактирование профиля',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            router.go(Routes.EditProfilePage);
          },
        },
      }),
      new AnchorLink({
        href: '/',
        text: 'Редактирование пароля',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            router.go(Routes.EditPasswordPage);
          },
        },
      }),
      new AnchorLink({
        href: '/',
        text: 'Профиль',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            router.go(Routes.Profile);
          },
        },
      }),
      new AnchorLink({
        href: '/',
        text: 'Страница с ошибкой',
        events: {
          click: (e: Event) => {
            e.preventDefault();
            router.go(Routes.ServerError);
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
