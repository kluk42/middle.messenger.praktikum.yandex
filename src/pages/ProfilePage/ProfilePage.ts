import { renderDOM } from '../..';
import { AnchorLink } from '../../components/AnchorLink/AnchorLink';
import { ProfileGoBackBtn } from '../../components/ProfileGoBackBtn/ProfileGoBackBtn';
import { Block } from '../../utils/Block';
import template from './ProfilePage.hbs';

export class ProfilePage extends Block<Record<string, never>> {
  constructor() {
    super({});
  }

  protected init(): void {
    this.children.GoBackBtn = new ProfileGoBackBtn({
      events: {
        click() {
          renderDOM('home');
        },
      },
    });

    this.children.ChangeDataLink = new AnchorLink({
      href: '/',
      text: 'Изменить данные',
      styles: 'profile__link',
      events: {
        click(e) {
          e.preventDefault();
          renderDOM('editProfile');
        },
      },
    });

    this.children.LogoutLink = new AnchorLink({
      href: '/',
      text: 'Выйти',
      styles: 'profile__link',
      events: {
        click(e) {
          e.preventDefault();
        },
      },
    });

    this.children.ChangePasswordLink = new AnchorLink({
      href: '/',
      text: 'Изменить пароль',
      styles: 'profile__link',
      events: {
        click(e) {
          e.preventDefault();
          renderDOM('editPassword');
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, {
      ...this.children,
      email: 'bla@bla.bla',
      login: 'bla88',
      name: 'Bla',
      surname: 'Bla',
      chatName: 'Bla',
      telephone: '777',
    });
  }
}
