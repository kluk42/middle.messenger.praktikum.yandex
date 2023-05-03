import { Block } from '../../utils/Block';
import { EventNamesType, MapType } from '../../utils/EventBus';
import { Button } from '../Button/Button';
import { Field } from '../Field/Field';
import { FileInput } from '../Input/FileInput';
import template from './Form.hbs';

type Children = {
  inputs: FileInput[];
};

export type Props<InputNames extends EventNamesType> = {
  fields: Field[];
  submitBtn?: Button;
  inputs: FileInput[];
  submit: (values: { [K in MapType<InputNames>]: File | null }) => void;
  formClass?: string;
  validationRules?: {
    [K in MapType<InputNames>]: (value: string) => string | null;
  };
  shouldCleanOnSubmit?: boolean;
};

export class FileForm<InputNames extends EventNamesType> extends Block<
  Props<InputNames> & {
    events?: {
      submit: (e: SubmitEvent) => void;
    };
  },
  Children
> {
  constructor(props: Props<InputNames>) {
    super(props);
  }

  public getValues() {
    const values: { [K in MapType<InputNames>]: File | null } = {} as {
      [K in MapType<InputNames>]: File | null;
    };
    const inputs = this.children.inputs;
    inputs.forEach(i => {
      const name = i.props.name as MapType<InputNames>;
      values[name] = i.file;
    });
    return values;
  }

  componentDidMount(): void {
    this.props.events = {
      submit: e => {
        e.preventDefault();

        this.props.submit(this.getValues());

        if (this.props.shouldCleanOnSubmit) {
          this.cleanValues();
        }
      },
    };

    if (!this.props.validationRules) {
      return;
    }
  }

  private cleanValues() {
    const inputs = this.children.inputs;

    inputs.forEach(input => {
      input.props.value = undefined;
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
