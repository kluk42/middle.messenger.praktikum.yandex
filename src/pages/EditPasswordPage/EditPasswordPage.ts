import { Button, ButtonStyleTypes } from '../../components/Button/Button';
import { Field } from '../../components/Field/Field';
import { Form, Props as FormProps } from '../../components/Form/Form';
import { Input } from '../../components/Input/Input';
import { InputName, ProfileAvatar } from '../../components/ProfileAvatar/ProfileAvatar';
import { ProfileGoBackBtn } from '../../components/ProfileGoBackBtn/ProfileGoBackBtn';
import Router from '../../Router/Router';
import { Block } from '../../utils/Block';
import template from './EditPasswordPage.hbs';

enum InputNames {
  OldPassword = 'oldPassword',
  NewPassword = 'newPassword',
  NewPasswordAgain = 'newPasswordAgain',
  Login = 'login',
}

type InputNamesType = {
  [InputNames.OldPassword]: InputNames.OldPassword;
  [InputNames.NewPassword]: InputNames.NewPassword;
  [InputNames.NewPasswordAgain]: InputNames.NewPasswordAgain;
  [InputNames.Login]: InputNames.Login;
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
  [InputNames.OldPassword]: v =>
    validator(
      v,
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,40}$/,
      'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра'
    ),
  [InputNames.NewPassword]: v =>
    validator(
      v,
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,40}$/,
      'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра'
    ),
  [InputNames.NewPasswordAgain]: v =>
    validator(
      v,
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,40}$/,
      'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра'
    ),
  [InputNames.Login]: v =>
    validator(
      v,
      /^[a-zA-Z][a-zA-Z0-9\-_]{3,20}$/,
      'от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)'
    ),
};

export class EditPasswordPage extends Block<Record<string, never>> {
  constructor() {
    super({});
  }

  protected init(): void {
    this.children.GoBackBtn = new ProfileGoBackBtn({
      events: { click: () => Router.back() },
    });

    const fileInput = new Input({
      inputStyle: 'profile__changeAvatarInput',
      name: 'file',
      type: 'file',
    });
    const fileInputField = new Field({
      input: fileInput,
      label: '',
      labelStyle: 'editProfileForm__fileInputLabel',
      name: 'file',
      errorStyle: 'editProfileForm__fileInputError',
    });

    const fileForm = new Form<InputName>({
      fields: [fileInputField],
      inputs: [fileInput],
      submit(values) {
        console.log(values);
      },
    });

    this.children.AvatarInput = new ProfileAvatar({ fileForm });

    const oldPasswordInput = new Input({
      inputStyle: 'editProfileForm__input',
      type: 'password',
      name: InputNames.OldPassword,
    });
    const newPasswordInput = new Input({
      inputStyle: 'editProfileForm__input',
      type: 'text',
      name: 'second_name',
    });
    const newPasswordAgainInput = new Input({
      inputStyle: 'editProfileForm__input',
      type: 'password',
      name: InputNames.NewPasswordAgain,
    });

    const inputs = [oldPasswordInput, newPasswordInput, newPasswordAgainInput];

    const oldPasswordField = new Field({
      name: InputNames.OldPassword,
      label: 'Старый пароль',
      input: oldPasswordInput,
      inputWrapperStyle: 'editProfileForm__inputWrapper',
      labelStyle: 'editProfileForm__inputLabel',
      errorStyle: 'editProfileForm__inputError',
    });
    const newPasswordField = new Field({
      name: InputNames.NewPassword,
      label: 'Новый пароль',
      input: newPasswordInput,
      inputWrapperStyle: 'editProfileForm__inputWrapper',
      labelStyle: 'editProfileForm__inputLabel',
      errorStyle: 'editProfileForm__inputError',
    });
    const newPasswordAgainField = new Field({
      name: InputNames.NewPasswordAgain,
      label: 'Повторите пароль',
      input: newPasswordAgainInput,
      inputWrapperStyle: 'editProfileForm__inputWrapper',
      labelStyle: 'editProfileForm__inputLabel',
      errorStyle: 'editProfileForm__inputError',
    });

    const fields: Field[] = [oldPasswordField, newPasswordField, newPasswordAgainField];

    this.children.form = new Form<InputNamesType>({
      fields,
      submitBtn: new Button({
        label: 'Сохранить',
        stylesType: ButtonStyleTypes.Submit,
        styles: 'authForm__signUpBtn',
      }),
      submit: values => {
        console.log(values);
      },
      inputs,
      validationRules,
      formClass: 'editProfileForm',
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.children);
  }
}
