import { Router, Routes } from '../../Router/Router';
import { withControllers } from '../../hocs/withControllers';
import { Block } from '../../utils/Block';
import template from './AnchorLink.hbs';

export type OwnProps = {
  href: string;
  styles?: string;
  text: string;
  path?: Routes;
  events?: {
    click: (e: Event) => void;
  };
  handler?: () => void;
};

type Controllers = {
  router: Router;
};

type Props = OwnProps & Controllers;

export class AnchorLink extends Block<Props> {
  constructor(props: Props) {
    const { handler } = props;
    super({
      ...props,
      events: {
        click: (e: Event) => {
          e.preventDefault();
          if (this.props.path) {
            this.props.router.go(this.props.path);
          }
          if (handler) {
            handler();
          }
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

export default withControllers<Omit<Props, 'events'>, Controllers>(AnchorLink, {
  router: new Router('#app'),
});
