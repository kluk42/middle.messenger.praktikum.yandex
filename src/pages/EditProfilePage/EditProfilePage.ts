import { Button, ButtonStyleTypes } from '../../components/Button/Button';
import { Field } from '../../components/Field/Field';
import { FileForm } from '../../components/Form/FileForm';
import { Form, Props as FormProps } from '../../components/Form/Form';
import { FileInput } from '../../components/Input/FileInput';
import { Input } from '../../components/Input/Input';
import { Modal } from '../../components/Modal/Modal';
import { ProfileAvatar } from '../../components/ProfileAvatar/ProfileAvatar';
import { ProfileGoBackBtn } from '../../components/ProfileGoBackBtn/ProfileGoBackBtn';
import { ProfileController } from '../../controllers/ProfileController';
import { withControllers } from '../../hocs/withControllers';
import { withStore } from '../../hocs/withStore';
import Router from '../../Router/Router';
import { Block } from '../../utils/Block';
import isEqual from '../../utils/isEqual';
import { State } from '../../utils/Store';
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

type Controllers = {
  profileController: ProfileController;
};

type PropsFromStore = {
  user: State['user'];
};

type StateProps = {
  isModalOpen?: boolean;
};

type InjectedProps = Controllers & PropsFromStore;

type Props = InjectedProps & StateProps;

export class EditProfilePage extends Block<Props> {
  constructor(props: InjectedProps) {
    super(props);
  }

  protected init(): void {
    this.children.GoBackBtn = new ProfileGoBackBtn({
      events: { click: () => Router.back() },
    });

    this.renderForm();
  }

  protected componentDidUpdate(oldProps: Props, newProps: Props): boolean {
    if (!isEqual(oldProps.user, newProps.user)) {
      this.renderForm();
      return true;
    }

    return !isEqual(oldProps, newProps);
  }

  protected closeModal() {
    this.children.AvatarModal = undefined;
    this.props.isModalOpen = false;
  }

  protected renderModal() {
    const fileInput = new FileInput({
      type: 'file',
      name: 'avatar',
      id: 'avatar',
      inputStyle: 'modal__fileInput',
    });
    const fileField = new Field({
      input: fileInput,
      label: 'Выберите файл',
      name: 'avatar',
      labelStyle: 'modal__fileInputLabel',
    });

    const fileForm = new FileForm<{ avatar: 'avatar' }>({
      fields: [fileField],
      inputs: [fileInput],
      submit: values => console.log(values),
      submitBtn: new Button({ label: 'Поменять аватар', stylesType: ButtonStyleTypes.Submit }),
      formClass: 'modal__fileForm',
    });

    const modal = new Modal({
      content: [fileForm],
      header: 'Изменить аватар',
      isOpen: true,
      onClose: this.closeModal.bind(this),
    });

    this.children.AvatarModal = modal;
    this.props.isModalOpen = true;
  }

  protected renderForm() {
    const openModal = this.renderModal.bind(this);
    const openModalBtn = new Button({
      label: '',
      noValidation: true,
      styles: 'editProfileForm__openAvatarModal',
      events: {
        click: openModal,
      },
    });

    this.children.AvatarInput = new ProfileAvatar({ openModalBtn });

    const nameInput = new Input({
      inputStyle: 'editProfileForm__input',
      type: 'text',
      name: 'first_name',
      value: this.props.user?.first_name ?? '',
    });
    const surnameInput = new Input({
      inputStyle: 'editProfileForm__input',
      type: 'text',
      name: 'second_name',
      value: this.props.user?.second_name ?? '',
    });
    const loginInput = new Input({
      inputStyle: 'editProfileForm__input',
      type: 'text',
      name: 'login',
      value: this.props.user?.login ?? '',
    });
    const emailInput = new Input({
      inputStyle: 'editProfileForm__input',
      type: 'email',
      name: 'email',
      value: this.props.user?.email ?? '',
    });
    const phoneInput = new Input({
      inputStyle: 'editProfileForm__input',
      type: 'tel',
      name: 'phone',
      value: this.props.user?.phone.toString() ?? '',
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

    const profileController = this.props.profileController;
    const oldUserData: State['user'] | Record<string, never> = this.props.user ?? {};

    this.children.Form = new Form<InputNamesType>({
      fields,
      submitBtn: new Button({
        label: 'Сохранить',
        stylesType: ButtonStyleTypes.Submit,
        styles: 'authForm__signUpBtn',
      }),
      async submit(values) {
        await profileController.editProfile({
          ...oldUserData,
          ...values,
          display_name: oldUserData.display_name ?? '',
        });
      },
      inputs,
      validationRules,
      formClass: 'editProfileForm',
    });

    this.children.Form.componentDidMount();
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.children);
  }
}

const mapStateToProps = (state: State): PropsFromStore => {
  return { user: state.user };
};

const WithStore = withStore<InjectedProps, PropsFromStore>(mapStateToProps)(EditProfilePage);

export default withControllers<Omit<InjectedProps, keyof PropsFromStore>, Controllers>(WithStore, {
  profileController: new ProfileController(),
});
