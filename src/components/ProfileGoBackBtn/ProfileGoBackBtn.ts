import { Block } from '../../utils/Block';
import template from './ProfileGoBackBtn.hbs';

type Props = {
  events: {
    click: () => void;
  };
};

export class ProfileGoBackBtn extends Block<Props, Record<string, never>> {
  constructor(props: Props) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
