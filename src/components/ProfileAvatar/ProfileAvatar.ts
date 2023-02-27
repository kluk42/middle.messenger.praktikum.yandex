import { Block } from '../../utils/Block';
import { Form } from '../Form/Form';
import template from './ProfileAvatar.hbs';

export type InputName = {
  file: 'file';
};

type Props = {
  fileForm: Form<InputName>;
  avatarSrc?: string;
};

export class ProfileAvatar extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
