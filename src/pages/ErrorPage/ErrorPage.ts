import AnchorLink from '../../components/AnchorLink/AnchorLink';
import { Routes } from '../../Router/Router';
import { Block } from '../../utils/Block';
import template from './ErrorPage.hbs';

type Props = {
  statusCode: number;
  text: string;
};

type Children = {
  Link: InstanceType<typeof AnchorLink>;
};

export class ErrorPage extends Block<Props, Children> {
  constructor(props: Props) {
    super(props);
  }

  protected init(): void {
    this.children.Link = new AnchorLink({
      href: '/',
      text: 'Назад к чатам',
      path: Routes.Chat,
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, {
      Link: this.children.Link,
      ...this.props,
    });
  }
}
