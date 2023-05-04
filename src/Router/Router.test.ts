import { expect } from 'chai';
import sinon from 'sinon';
import Router, { BlockConstructable, Routes } from './Router';

describe('Router tests', () => {
  global.window.history.back = () => {
    if (typeof window.onpopstate === 'function') {
      window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
    }
  };
  global.window.history.forward = () => {
    if (typeof window.onpopstate === 'function') {
      window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
    }
  };

  const getContentMock = sinon.fake.returns(document.createElement('div'));

  const BlockMock = class {
    getContent = getContentMock;
    dispatchComponentDidMount() {}
  } as unknown as BlockConstructable<Record<string, unknown>, Record<string, never>>;

  it('use() should return Router instance', () => {
    const result = Router.use(Routes.SignInPage, BlockMock, {});

    expect(result).to.eq(Router);
  });

  it('should render a page on history back action', () => {
    Router.use(Routes.SignInPage, BlockMock, {}).start();

    Router.back();

    expect(getContentMock.callCount).to.eq(1);
  });

  it('should render a page on start', () => {
    Router.use(Routes.SignInPage, BlockMock, {}).start();

    expect(getContentMock.callCount).to.eq(1);
  });
});
