import { GetUserResponse } from '../../api/AuthApi';
import { AnchorLink } from '../../components/AnchorLink/AnchorLink';
import { Button, ButtonStyleTypes } from '../../components/Button/Button';
import { Field } from '../../components/Field/Field';
import { Form, Props as FormProps } from '../../components/Form/Form';
import { Input } from '../../components/Input/Input';
import { AuthController } from '../../controllers/AuthController';
import { withControllers } from '../../hocs/withControllers';
import { withStore } from '../../hocs/withStore';
import { Router, Routes } from '../../Router/Router';
import { Block } from '../../utils/Block';
import { State } from '../../utils/Store';
import template from './SignInPage.hbs';

enum InputNames {
  Login = 'login',
  Password = 'password',
}

type InputNamesType = {
  [InputNames.Login]: InputNames.Login;
  [InputNames.Password]: InputNames.Password;
};

const validator = (v: string, regExp: RegExp, errorText: string) => {
  const value = v.trim();
  const isValid = regExp.test(value);

  if (isValid) {
    return null;
  }

  return errorText;
};

const validationRules: FormProps<InputNamesType>['validationRules'] = {
  [InputNames.Login]: v =>
    validator(
      v,
      /^[a-zA-Z][a-zA-Z0-9\-_]{3,20}$/,
      'от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)'
    ),
  [InputNames.Password]: v =>
    validator(
      v,
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,40}$/,
      'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра'
    ),
};

type Controllers = { auth: AuthController; router: Router };
type FromStore = GetUserResponse | undefined;
type OwnProps = {};
type AllProps = Controllers & FromStore & OwnProps;

class SignInPage extends Block<AllProps> {
  constructor(props: AllProps) {
    super(props);
  }

  init() {
    const loginInput = new Input({
      inputStyle: 'inputField__input',
      type: 'text',
      name: 'login',
    });
    const passwordInput = new Input({
      inputStyle: 'inputField__input',
      type: 'password',
      name: 'password',
    });

    const inputs = [loginInput, passwordInput];

    const loginField = new Field({
      name: 'login',
      label: 'Логин *',
      input: loginInput,
    });
    const passwordField = new Field({
      name: 'password',
      label: 'Пароль *',
      input: passwordInput,
    });

    const fields: Field[] = [loginField, passwordField];

    const submitBtn = new Button({
      label: 'Войти',
      stylesType: ButtonStyleTypes.Submit,
      containerStyles: 'authForm__submitBtn',
    });

    this.children.form = new Form<InputNamesType>({
      fields,
      submitBtn,
      submit: async values => {
        try {
          await this.props.auth.signIn(values);
        } catch (error) {
          const e = error as any;
          const reason: string = e.reason;

          submitBtn.props.actionError = reason;
        }
      },
      inputs,
      validationRules,
      formClass: 'authForm',
    });
    this.children.signUpLink = new AnchorLink({
      href: '/',
      text: 'Нет аккаунта?',
      styles: 'auth__link',
      events: {
        click: e => {
          e.preventDefault();
          this.props.router.go(Routes.SignUpPage);
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.children);
  }
}

const WithControllers = withControllers<OwnProps, { auth: AuthController; router: Router }>(
  SignInPage,
  {
    auth: new AuthController(),
    router: new Router('#app'),
  }
);

const mapStateToProps = (state: State): FromStore => {
  return state.user;
};

const WithStore = withStore<OwnProps, FromStore>(mapStateToProps)(WithControllers);

export default WithStore;
