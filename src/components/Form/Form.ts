import { Block } from '../../utils/Block';
import { EventBus, EventNamesType, MapType } from '../../utils/EventBus';
import { Button } from '../Button/Button';
import { Field } from '../Field/Field';
import { Input } from '../Input/Input';
import template from './Form.hbs';

export type Props<InputNames extends EventNamesType> = {
  fields: Field[];
  submitBtn?: Button;
  inputs: Input[];
  submit: (values: { [K in MapType<InputNames>]: string }) => void;
  formClass?: string;
  validationRules?: {
    [K in MapType<InputNames>]: (value: string) => string | null;
  };
  shouldCleanOnSubmit?: boolean;
};

export class Form<InputNames extends EventNamesType> extends Block<
  Props<InputNames> & {
    events?: {
      submit: (e: SubmitEvent) => void;
    };
  }
> {
  private validationBus?: EventBus<InputNames, Record<MapType<InputNames>, [string]>>;

  constructor(props: Props<InputNames>) {
    super(props);
    if (this.props.validationRules) {
      this.validationBus = new EventBus<InputNames, Record<MapType<InputNames>, [string]>>();
    }
  }

  public getValues() {
    const values: { [K in MapType<InputNames>]: string } = {} as {
      [K in MapType<InputNames>]: string;
    };
    const inputs = this.children.inputs as Input[];
    inputs.forEach(i => {
      const input = i.getContent()! as HTMLInputElement;
      const name = input.name as MapType<InputNames>;
      values[name] = input.value;
    });
    return values;
  }

  componentDidMount(): void {
    this.props.events = {
      submit: e => {
        e.preventDefault();
        if (this.validationBus) {
          this.triggerFormValidation();

          const fields = this.children.fields as Field[];

          const isFormInValid = fields.some(f => f.props.errorText && f.props.errorText !== '');

          if (isFormInValid) {
            return;
          }
        }

        this.props.submit(this.getValues());

        if (this.props.shouldCleanOnSubmit) {
          this.cleanValues();
        }
      },
    };

    this.subscribeInputsToValidationBus();

    if (!this.props.validationRules) {
      return;
    }
  }

  private subscribeInputsToValidationBus() {
    if (this.validationBus) {
      const inputs = this.children.inputs as Input[];

      inputs.forEach(input => {
        const inputName = input.props.name as MapType<InputNames>;
        input.props.events = {
          blur: _e => {
            this.triggerInputValidation(inputName, input.value);
          },
        };

        this.validationBus?.on(inputName, v => this.validationListener(v, inputName));
      });
    }
  }

  private triggerInputValidation(inputName: MapType<InputNames>, value: string) {
    if (this.validationBus) {
      this.validationBus.emit(inputName, value);
    }
  }

  private triggerFormValidation() {
    const inputs = this.children.inputs as Input[];

    inputs.forEach(input => {
      if (this.validationBus) {
        const inputName = input.props.name as MapType<InputNames>;
        this.validationBus.emit(inputName, input.value);
      }
    });
  }

  private validationListener(value: string, inputName: MapType<InputNames>) {
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
  }

  private cleanValues() {
    const inputs = this.children.inputs as Input[];

    inputs.forEach(input => {
      input.props.value = '';
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
