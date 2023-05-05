import { Block } from '../../utils/Block';
import template from './FoundMessage.hbs';

type Props = {
  avatarSrc?: string;
  name: string;
};

export class FoundMessage extends Block<Props, Record<string, never>> {
  constructor(props: Props) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
