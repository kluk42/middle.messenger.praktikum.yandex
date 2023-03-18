import { GetUserResponse } from '../../api/AuthApi';
import { AnchorLink } from '../../components/AnchorLink/AnchorLink';
import { ProfileGoBackBtn } from '../../components/ProfileGoBackBtn/ProfileGoBackBtn';
import { withControllers } from '../../hocs/withControllers';
import { withStore } from '../../hocs/withStore';
import { Router, Routes } from '../../Router/Router';
import { Block } from '../../utils/Block';
import { State } from '../../utils/Store';
import template from './ProfilePage.hbs';

type Controllers = { router: Router };
type FromStore = GetUserResponse | undefined;
type OwnProps = {};
type Props = Controllers & FromStore & OwnProps;

class ProfilePage extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  protected init(): void {
    const router = this.props.router;
    this.children.GoBackBtn = new ProfileGoBackBtn({
      events: {
        click() {
          router.back();
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
          router.go(Routes.EditProfilePage);
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
          router.replace(Routes.SignUpPage);
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
          router.go(Routes.EditPasswordPage);
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

const mapStateToProps = (state: State) => {
  return state.user?.data;
};

const WithControllers = withControllers<OwnProps, Controllers>(ProfilePage, {
  router: new Router('#app'),
});

export default withStore<OwnProps, FromStore>(mapStateToProps)(WithControllers);
