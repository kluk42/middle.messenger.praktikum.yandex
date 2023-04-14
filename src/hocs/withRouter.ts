import Router from '../Router/Router';

export function withRouter<P extends Record<string, unknown>, O extends Record<string, any>>(
  Component: any
) {
  return class WithRouter extends Component {
    constructor(props: Omit<P, keyof O>) {
      super({ ...props, router: Router });
    }
  };
}

export interface PropsWithRouter {
  router: typeof Router;
}
