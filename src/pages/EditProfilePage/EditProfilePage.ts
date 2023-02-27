import { renderDOM } from '../..';
import { Button, ButtonStyleTypes } from '../../components/Button/Button';
import { Field } from '../../components/Field/Field';
import { Form, Props as FormProps } from '../../components/Form/Form';
import { Input } from '../../components/Input/Input';
import { InputName, ProfileAvatar } from '../../components/ProfileAvatar/ProfileAvatar';
import { ProfileGoBackBtn } from '../../components/ProfileGoBackBtn/ProfileGoBackBtn';
import { Block } from '../../utils/Block';
import template from './EditProfilePage.hbs';

enum InputNames {
  Name = 'first_name',
  Surname = 'second_name',
  Login = 'login',
  Email = 'email',
  Phone = 'phone',
}

type InputNamesType = {
  [InputNames.Name]: InputNames.Name;
  [InputNames.Surname]: InputNames.Surname;
  [InputNames.Login]: InputNames.Login;
  [InputNames.Email]: InputNames.Email;
  [InputNames.Phone]: InputNames.Phone;
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
  [InputNames.Phone]: v =>
    validator(
      v,
      /^\+?[0-9]{10,15}$/,
      'От 10 до 15 символов, состоит из цифр, может начинается с плюса'
    ),
};

export class EditProfilePage extends Block<Record<string, never>> {
  constructor() {
    super({});
  }

  protected init(): void {
    this.children.GoBackBtn = new ProfileGoBackBtn({
      events: { click: () => renderDOM('home') },
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

    const nameInput = new Input({
      inputStyle: 'editProfileForm__input',
      type: 'text',
      name: 'first_name',
    });
    const surnameInput = new Input({
      inputStyle: 'editProfileForm__input',
      type: 'text',
      name: 'second_name',
    });
    const loginInput = new Input({
      inputStyle: 'editProfileForm__input',
      type: 'text',
      name: 'login',
    });
    const emailInput = new Input({
      inputStyle: 'editProfileForm__input',
      type: 'email',
      name: 'email',
    });
    const phoneInput = new Input({
      inputStyle: 'editProfileForm__input',
      type: 'tel',
      name: 'phone',
    });

    const inputs = [nameInput, surnameInput, loginInput, emailInput, phoneInput];

    const firstNameField = new Field({
      name: 'first_name',
      label: 'Имя',
      input: nameInput,
      inputWrapperStyle: 'editProfileForm__inputWrapper',
      labelStyle: 'editProfileForm__inputLabel',
      errorStyle: 'editProfileForm__inputError',
    });
    const secondNameField = new Field({
      name: 'second_name',
      label: 'Фамилия',
      input: surnameInput,
      inputWrapperStyle: 'editProfileForm__inputWrapper',
      labelStyle: 'editProfileForm__inputLabel',
      errorStyle: 'editProfileForm__inputError',
    });
    const loginField = new Field({
      name: 'login',
      label: 'Логин *',
      input: loginInput,
      inputWrapperStyle: 'editProfileForm__inputWrapper',
      labelStyle: 'editProfileForm__inputLabel',
      errorStyle: 'editProfileForm__inputError',
    });
    const emailField = new Field({
      name: 'email',
      label: 'Email *',
      input: emailInput,
      inputWrapperStyle: 'editProfileForm__inputWrapper',
      labelStyle: 'editProfileForm__inputLabel',
      errorStyle: 'editProfileForm__inputError',
    });
    const phoneField = new Field({
      name: 'phone',
      label: 'Телефон *',
      input: phoneInput,
      inputWrapperStyle: 'editProfileForm__inputWrapper',
      labelStyle: 'editProfileForm__inputLabel',
      errorStyle: 'editProfileForm__inputError',
    });

    const fields: Field[] = [firstNameField, secondNameField, loginField, emailField, phoneField];

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
