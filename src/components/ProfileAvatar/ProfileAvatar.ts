import { Block } from '../../utils/Block';
import { Button } from '../Button/Button';
import template from './ProfileAvatar.hbs';

export type InputName = {
  file: 'file';
};

type Props = {
  openModalBtn?: Button;
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
