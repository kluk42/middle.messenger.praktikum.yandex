import { expect } from 'chai';
import sinon from 'sinon';
import { Router, Routes } from '../../Router/Router';
import { AnchorLink } from './AnchorLink';

describe('AnchorLink component tests', () => {
  const goMock = sinon.stub();
  //@ts-ignore
  const router = {
    go: goMock,
  } as Router;

  const link = new AnchorLink({
    href: '/',
    text: 'Text',
    router,
    path: Routes.Chat,
  });

  beforeEach(() => {
    goMock.reset();
  });

  it('Constructor is called - correct props are passed - should render', () => {
    new AnchorLink({
      href: '/',
      text: 'Text',
      router,
      path: Routes.Chat,
    });
  });

  it('Constructor is called - label is passed in props - rendered with the same label', () => {
    const expectedLabel = 'Text';
    console.log(link.getContent());

    expect(link.getContent()?.textContent).equals(expectedLabel);
  });

  it('Click is rendered without handler - click it - should call go method of router', () => {
    link.getContent()?.click();

    expect(goMock.calledOnceWith(Routes.Chat)).equals(true);
  });

  it('Click is rendered with handler - click it - should call handler', () => {
    const handler = sinon.stub();
    const link = new AnchorLink({
      href: '/',
      text: 'Text',
      router,
      path: Routes.Chat,
      handler,
    });

    link.getContent()?.click();

    expect(handler.calledOnceWith()).equals(true);
  });
});
