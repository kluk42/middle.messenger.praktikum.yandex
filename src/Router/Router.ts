import { Block } from '../utils/Block';
import { trim } from '../utils/trim';

export interface BlockConstructable<P extends Record<string, any> = any> {
  new (props: P): Block<P>;
}

interface IRouter {
  use<
    P extends Record<string, unknown> = Record<string, unknown>,
    B extends BlockConstructable<P> = BlockConstructable<P>
  >(
    path: Routes,
    block: B,
    props: P,
    query: string
  ): Router;
  start(): void; // запустить роутер
  go(path: Routes): void;
  back(): void; // переход назад по истории браузера
  forward(): void; // переход вперёд по истории браузера
  onRoute(path: Routes): void;
  getRoute(path: Routes): Route | null;
}

interface IRoute {
  navigate(path: Routes): void;
}

export enum Routes {
  SignInPage = '/',
  SignUpPage = 'sign-up',
  Chat = 'chat',
  EditProfilePage = 'edit-profile',
  EditPasswordPage = 'edit-password',
  Profile = 'profile',
  NotFoundPage = 'not-found',
  ServerError = 'server-error',
}

function render(query: string, block: Block) {
  const root = document.querySelector(query);

  if (root === null) {
    throw new Error(`root not found by selector "${query}"`);
  }

  root.innerHTML = '';

  root.append(block.getContent()!);

  block.dispatchComponentDidMount();

  return root;
}

export class Route<
  P extends Record<string, unknown> = Record<string, unknown>,
  B extends BlockConstructable<P> = BlockConstructable<P>
> implements IRoute
{
  public pathName: Routes;
  private blockClass: B;
  private block: Block<P> | null = null;
  private props: P;
  private readonly query: string;

  constructor(pathname: Routes, view: B, props: P, query: string) {
    this.pathName = pathname;
    this.blockClass = view;
    this.props = props;
    this.query = query;
  }

  navigate(pathName: Routes) {
    if (this.match(pathName)) {
      this.pathName = pathName;
      this.render();
    }
  }

  leave() {
    this.block = null;
  }

  match(pathname: Routes) {
    return pathname === this.pathName;
  }

  render() {
    if (!this.block) {
      this.block = new this.blockClass(this.props);
      render(this.query, this.block);

      return;
    }

    render(this.query, this.block);
  }
}

export class Router implements IRouter {
  private static instance: Router;
  private routes: Route<Record<string, unknown>, BlockConstructable>[] = [];
  private history: (typeof window)['history'] = window.history;
  private currentRoute: Route | null = null;

  constructor(private readonly query: string) {
    if (Router.instance) {
      return Router.instance;
    }

    Router.instance = this;

    this.query = query;
  }

  use<
    P extends Record<string, unknown> = Record<string, unknown>,
    B extends BlockConstructable<P> = BlockConstructable<P>
  >(path: Routes, block: B, props: P): Router {
    const route = new Route(path, block, props, this.query);

    this.routes.push(route);

    return this;
  }

  start(): void {
    window.onpopstate = event => {
      const target = event.currentTarget as Window;
      const pathName =
        target.location.pathname === '/'
          ? Routes.SignInPage
          : (trim(target.location.pathname, '/') as Routes);
      this.onRoute(pathName);
    };
  }

  onRoute(pathname: Routes) {
    const route = this.getRoute(pathname);
    if (!route) {
      this.go(Routes.NotFoundPage);
      return;
    }

    if (this.currentRoute) {
      this.currentRoute.leave();
    }

    route.render();
  }

  getRoute(pathname: Routes) {
    return this.routes.find(route => route.match(pathname)) ?? null;
  }

  go(pathname: Routes) {
    this.history.pushState({}, '', pathname);
    this.onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  replace(newRoute: Routes) {
    this.history.replaceState({}, '', newRoute);
    this.onRoute(newRoute);
  }

  getCurrentPathName() {
    return trim(window.location.pathname, '/');
  }
}

export default new Router('#app');
