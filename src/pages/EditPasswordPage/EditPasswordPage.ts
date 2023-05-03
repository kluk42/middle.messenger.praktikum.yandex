import { Button, ButtonStyleTypes } from '../../components/Button/Button';
import { Field } from '../../components/Field/Field';
import { Form, Props as FormProps } from '../../components/Form/Form';
import { Input } from '../../components/Input/Input';
import { ProfileAvatar } from '../../components/ProfileAvatar/ProfileAvatar';
import { ProfileGoBackBtn } from '../../components/ProfileGoBackBtn/ProfileGoBackBtn';
import { AuthController } from '../../controllers/AuthController';
import { ProfileController } from '../../controllers/ProfileController';
import { withControllers } from '../../hocs/withControllers';
import { withStore } from '../../hocs/withStore';
import Router, { Routes } from '../../Router/Router';
import { Block } from '../../utils/Block';
import { State } from '../../utils/Store';
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

type Controllers = {
  profileController: ProfileController;
  authController: AuthController;
};

type PropsFromStore = {
  avatarSrc?: string;
};

type OwnProps = Record<string, never>;

type Props = Controllers & OwnProps & PropsFromStore;

type Children = {
  GoBackBtn: ProfileGoBackBtn;
  AvatarInput: ProfileAvatar;
  form: Form<InputNamesType>;
};

class EditPasswordPage extends Block<Props, Children> {
  constructor(props: Props) {
    super(props);
  }

  protected init(): void {
    this.children.GoBackBtn = new ProfileGoBackBtn({
      events: { click: () => Router.back() },
    });

    this.children.AvatarInput = new ProfileAvatar({ avatarSrc: this.props.avatarSrc });

    const oldPasswordInput = new Input({
      inputStyle: 'editProfileForm__input',
      type: 'password',
      name: InputNames.OldPassword,
    });
    const newPasswordInput = new Input({
      inputStyle: 'editProfileForm__input',
      type: 'password',
      name: InputNames.NewPassword,
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

    const submitBtn = new Button({
      label: 'Сохранить',
      stylesType: ButtonStyleTypes.Submit,
      styles: 'authForm__signUpBtn',
    });

    const pageProps = this.props;

    const submit = async function (
      this: Form<InputNamesType>,
      { newPassword, oldPassword }: { newPassword: string; oldPassword: string }
    ) {
      try {
        await pageProps.profileController.editPassword(oldPassword, newPassword);
        pageProps.authController.logout(Routes.SignInPage);
      } catch (error) {
        const e = error as any;
        const reason: string = e.reason;

        submitBtn.props.actionError = reason;
      }
    };

    this.children.form = new Form<InputNamesType>({
      fields,
      submitBtn,
      submit,
      inputs,
      validationRules,
      formClass: 'editProfileForm',
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.children);
  }
}

const mapStateToProps = (state: State): PropsFromStore => {
  return {
    avatarSrc: state.user?.avatar,
  };
};

const WithProps = withStore<Props, PropsFromStore, Children>(mapStateToProps)(EditPasswordPage);

export default withControllers<OwnProps, Controllers, Children>(WithProps, {
  profileController: new ProfileController(),
  authController: new AuthController(),
});
