import { renderDOM } from '../..';
import { AnchorLink } from '../../components/AnchorLink/AnchorLink';
import { Button, ButtonStyleTypes } from '../../components/Button/Button';
import { Field } from '../../components/Field/Field';
import { Form, Props as FormProps } from '../../components/Form/Form';
import { Input } from '../../components/Input/Input';
import { Block } from '../../utils/Block';
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

export class SignInPage extends Block {
  constructor() {
    super({});
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

    this.children.form = new Form<InputNamesType>({
      fields,
      submitBtn: new Button({
        label: 'Зарегистрироваться',
        stylesType: ButtonStyleTypes.Submit,
        containerStyles: 'authForm__submitBtn',
      }),
      submit: values => {
        console.log(values);
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
          renderDOM('signUp');
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.children);
  }
}
