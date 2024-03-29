import { AnchorLink } from '../../components/AnchorLink/AnchorLink';
import router, { Routes } from '../../Router/Router';
import { Block } from '../../utils/Block';
import template from './ErrorPage.hbs';

type Props = {
  statusCode: number;
  text: string;
};

export class ErrorPage extends Block<Props> {
  constructor(props: Props) {
    super(props);
  }

  protected init(): void {
    this.children.Link = new AnchorLink({
      href: '/',
      text: 'Назад к чатам',
      events: {
        click(e) {
          e.preventDefault();
          router.go(Routes.Chat);
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, {
      Link: this.children.Link,
      ...this.props,
    });
  }
}
