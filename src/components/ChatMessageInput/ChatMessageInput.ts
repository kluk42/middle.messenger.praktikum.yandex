import { Block } from '../../utils/Block';
import { Button, ButtonStyleTypes } from '../Button/Button';
import { Field } from '../Field/Field';
import { Form, Props as FormProps } from '../Form/Form';
import { Input } from '../Input/Input';
import template from './ChatMessageInput.hbs';

enum InputNames {
  Message = 'message',
}

type InputNamesType = {
  [InputNames.Message]: InputNames.Message;
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
  [InputNames.Message]: v => validator(v, /(.|\s)*\S(.|\s)*/, 'Пустое поле недопустимо'),
};

type Props = {
  sendMessage: (message: string) => void;
};

export class ChatMessageInput extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  protected init(): void {
    this.children.AttachmentBtn = new Button({
      stylesType: ButtonStyleTypes.Attachment,
      label: '',
      noValidation: true,
    });

    const input = new Input({
      isTextArea: true,
      name: 'message',
      inputStyle: 'newMessage__textArea',
      placeholder: 'Сообщение',
    });
    const field = new Field({
      name: 'message',
      label: '',
      input: input,
      errorStyle: 'newMessage__errorText',
      labelStyle: 'newMessage__inputLabel',
    });
    this.children.Form = new Form<InputNamesType>({
      fields: [field],
      inputs: [input],
      submit: ({ message }) => {
        this.props.sendMessage(message);
      },
      submitBtn: new Button({
        label: '→',
        stylesType: ButtonStyleTypes.Submit,
        styles: 'newMessage__submitBtn',
        noValidation: true,
      }),
      formClass: 'newMessage__form',
      validationRules,
      shouldCleanOnSubmit: true,
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.children);
  }
}
