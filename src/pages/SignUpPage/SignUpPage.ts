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
import template from './SignUpPage.hbs';

enum InputNames {
  Name = 'first_name',
  Surname = 'second_name',
  Login = 'login',
  Email = 'email',
  Phone = 'phone',
  Password = 'password',
}

type InputNamesType = {
  [InputNames.Name]: InputNames.Name;
  [InputNames.Surname]: InputNames.Surname;
  [InputNames.Login]: InputNames.Login;
  [InputNames.Email]: InputNames.Email;
  [InputNames.Phone]: InputNames.Phone;
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
  [InputNames.Name]: v =>
    validator(
      v,
      /^[A-ZА-Я][\p{L}]*$/u,
      'Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов'
    ),
  [InputNames.Surname]: v =>
    validator(
      v,
      /^[A-ZА-Я][\p{L}]*$/u,
      'Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов'
    ),
  [InputNames.Login]: v =>
    validator(
      v,
      /^[a-zA-Z][a-zA-Z0-9\-_]{3,20}$/,
      'от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)'
    ),
  [InputNames.Email]: v =>
    validator(
      v,
      /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
      'латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы'
    ),
  [InputNames.Password]: v =>
    validator(
      v,
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,40}$/,
      'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра'
    ),
  [InputNames.Phone]: v =>
    validator(
      v,
      /^\+?[0-9]{10,15}$/,
      'От 10 до 15 символов, состоит из цифр, может начинается с плюса'
    ),
};

type Controllers = { auth: AuthController; router: Router };
type FromStore = GetUserResponse | undefined;
type OwnProps = {};
type AllProps = Controllers & FromStore & OwnProps;

class SignUpPage extends Block<AllProps> {
  constructor(props: AllProps) {
    super(props);
  }

  init() {
    const nameInput = new Input({
      inputStyle: 'inputField__input',
      type: 'text',
      name: InputNames.Name,
    });
    const surnameInput = new Input({
      inputStyle: 'inputField__input',
      type: 'text',
      name: InputNames.Surname,
    });
    const loginInput = new Input({
      inputStyle: 'inputField__input',
      type: 'text',
      name: InputNames.Login,
    });
    const emailInput = new Input({
      inputStyle: 'inputField__input',
      type: 'email',
      name: InputNames.Email,
    });
    const phoneInput = new Input({
      inputStyle: 'inputField__input',
      type: 'tel',
      name: InputNames.Phone,
    });
    const passwordInput = new Input({
      inputStyle: 'inputField__input',
      type: 'password',
      name: InputNames.Password,
    });

    const inputs = [nameInput, surnameInput, loginInput, emailInput, phoneInput, passwordInput];

    const firstNameField = new Field({
      name: InputNames.Name,
      label: 'Имя',
      input: nameInput,
    });
    const secondNameField = new Field({
      name: InputNames.Surname,
      label: 'Фамилия',
      input: surnameInput,
    });
    const loginField = new Field({
      name: InputNames.Login,
      label: 'Логин *',
      input: loginInput,
    });
    const emailField = new Field({
      name: InputNames.Email,
      label: 'Email *',
      input: emailInput,
    });
    const phoneField = new Field({
      name: InputNames.Phone,
      label: 'Телефон *',
      input: phoneInput,
    });
    const passwordField = new Field({
      name: InputNames.Password,
      label: 'Пароль *',
      input: passwordInput,
    });

    const fields: Field[] = [
      firstNameField,
      secondNameField,
      loginField,
      emailField,
      phoneField,
      passwordField,
    ];

    this.children.form = new Form<InputNamesType>({
      fields,
      submitBtn: new Button({
        label: 'Зарегистрироваться',
        stylesType: ButtonStyleTypes.Submit,
        styles: 'authForm__signUpBtn',
      }),
      submit: async values => {
        await this.props.auth.signUp(values);
      },
      inputs,
      validationRules,
      formClass: 'authForm',
    });

    this.children.signInLink = new AnchorLink({
      href: '/',
      text: 'Уже есть аккаунт?',
      styles: 'auth__link',
      events: {
        click: e => {
          e.preventDefault();
          this.props.router.go(Routes.SignInPage);
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.children);
  }
}

const WithControllers = withControllers<OwnProps, { auth: AuthController; router: Router }>(
  SignUpPage,
  {
    auth: new AuthController(),
    router: new Router('#app'),
  }
);

const mapStateToProps = (state: State): FromStore => {
  return state.user?.data;
};

const WithStore = withStore<OwnProps, FromStore>(mapStateToProps)(WithControllers);

export default WithStore;
