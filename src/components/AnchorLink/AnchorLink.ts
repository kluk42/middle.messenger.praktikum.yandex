import { Block } from '../../utils/Block';
import template from './AnchorLink.hbs';

export type Props = {
  href: string;
  styles?: string;
  text: string;
  events?: {
    click: (e: Event) => void;
  };
};

export class AnchorLink extends Block {
  constructor(props: Props) {
    super(props);
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
