import { Block } from '../../utils/Block';
import { EventBus, EventNamesType, MapType } from '../../utils/EventBus';
import { Button } from '../Button/Button';
import { Field } from '../Field/Field';
import { Input } from '../Input/Input';
import { Modal } from '../Modal/Modal';
import template from './Form.hbs';

export type Props<InputNames extends EventNamesType> = {
  fields: Field[];
  submitBtn?: Button;
  inputs: Input[];
  submit: (values: Record<string, string>) => void;
  formClass?: string;
  validationRules?: {
    [K in MapType<InputNames>]: (value: string) => string | null;
  };
  Modal?: Modal;
};

export class Form<InputNames extends EventNamesType> extends Block<
  Props<InputNames> & {
    events?: {
      submit: (e: SubmitEvent) => void;
    };
  }
> {
  constructor(props: Props<InputNames>) {
    super(props);
  }

  public getValues() {
    const values: Record<string, string> = {};
    const inputs = this.children.inputs as Input[];
    inputs.forEach(i => {
      const input = i.getContent()! as HTMLInputElement;
      values[input.name] = input.value;
    });
    return values;
  }

  componentDidMount(): void {
    if (!this.props.validationRules) {
      return;
    }

    const validationBus = new EventBus<InputNames, Record<MapType<InputNames>, [string]>>();

    const triggerValidation = (name: MapType<InputNames>, value: string) => {
      validationBus.emit(name, value);
    };

    const inputs = this.children.inputs as Input[];

    inputs.forEach(input => {
      const inputName = input.props.name as MapType<InputNames>;
      input.props.events = {
        blur: _e => {
          triggerValidation(inputName, input.value);
        },
      };

      const validationListener = (value: string) => {
        const listener = this.props.validationRules && this.props.validationRules[inputName];
        if (listener) {
          const errorText = listener(value);

          const fields = this.children.fields as Field[];
          const inputFieldArr = fields.filter(field => field.props.name === inputName);

          if (!inputFieldArr[0]) {
            throw new Error(`Поле с имененм ${inputName} не зарегистрировано`);
          }
          if (inputFieldArr.length > 1) {
            throw new Error('Имена полей ввода должны быть уникальными');
          }

          const inputField = inputFieldArr[0];

          if (errorText !== null) {
            inputField.props.errorText = errorText;
          }

          if (errorText === null && inputField.props.errorText) {
            inputField.props.errorText = '';
          }
        }
      };

      validationBus.on(inputName, validationListener);
    });

    this.props.events = {
      submit: e => {
        e.preventDefault();
        const inputs = this.children.inputs as Input[];

        inputs.forEach(input => {
          const inputName = input.props.name as MapType<InputNames>;
          validationBus.emit(inputName, input.value);
        });

        const fields = this.children.fields as Field[];

        const isFormInValid = fields.some(f => f.props.errorText && f.props.errorText !== '');

        if (isFormInValid) {
          return;
        }

        this.props.submit(this.getValues());
      },
    };
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
