import { expect } from 'chai';
import sinon from 'sinon';
import { HTTPTransport, METHODS } from './HttpTransport';

describe('Tests for hhtp transport', () => {
  const requests: sinon.SinonFakeXMLHttpRequest[] = [];
  const XHR = sinon.useFakeXMLHttpRequest();

  //@ts-ignore
  global.XMLHttpRequest = XHR;

  XHR.onCreate = function (xhr) {
    requests.push(xhr);
  };

  afterEach(() => {
    requests.pop();
  });

  it('Call get method - everything is correct - method is executed', () => {
    const transport = new HTTPTransport('/path');

    transport.get();

    expect(requests[0].method).equals(METHODS.GET);
  });

  it('Call post method - everything is correct - method is executed', () => {
    const transport = new HTTPTransport('/path');

    transport.post('bla', {});

    expect(requests[0].method).equals(METHODS.POST);
  });
});
