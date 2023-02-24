import { Button, ButtonStyleTypes } from '../../components/Button/Button';
import { Field } from '../../components/Field/Field';
import { Form } from '../../components/Form/Form';
import { Input } from '../../components/Input/input';
import { Block } from '../../utils/Block';
import template from './SignUpPage.hbs';

export class SignUpPage extends Block {
  constructor() {
    super({});
  }

  init() {
    const firstInput = new Input({
      class: 'inputField__input',
      type: 'text',
      name: 'first_name',
      events: {
        blur: e => {
          const input = e.target as HTMLInputElement;
          console.log(input.value);
        },
      },
    });
    const secondInput = new Input({
      class: 'inputField__input',
      type: 'text',
      name: 'second_name',
      events: {
        blur: e => {
          const input = e.target as HTMLInputElement;
          console.log(input.value);
        },
      },
    });

    const inputs = [firstInput, secondInput];

    const firstNameField = new Field({
      name: 'first_name',
      label: 'Имя',
      input: firstInput,
    });
    const secondNameField = new Field({
      name: 'second_name',
      label: 'Фамилия',
      input: secondInput,
    });
    const fields: Field[] = [
      firstNameField,
      secondNameField,
      //   new Field({
      //     type: 'text',
      //     name: 'login',
      //     label: 'Логин *',
      //   }),
      //   new Field({
      //     type: 'email',
      //     name: 'email',
      //     label: 'Email *',
      //   }),
      //   new Field({
      //     type: 'tel',
      //     name: 'phone',
      //     label: 'Телефон *',
      //   }),
      //   new Field({
      //     type: 'password',
      //     name: 'password',
      //     label: 'Пароль *',
      //   }),
    ];

    this.children.form = new Form({
      inputs: fields,
      submitBtn: new Button({
        label: 'Авторизоваться',
        stylesType: ButtonStyleTypes.Submit,
        styles: 'authForm__signUpBtn',
      }),
      events: {
        submit: e => {
          e.preventDefault();
          inputs.forEach(i => {
            const input = i.getContent()! as HTMLInputElement;
            console.log(input.value);
          });
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.children);
  }
}
