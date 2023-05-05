import { expect } from 'chai';
import set from './set';

describe('util set', () => {
  it('set is called - first arg is not object - first arg is returned', () => {
    const expected = 'not obj';

    const actual = set(expected, 'path', 1);

    expect(actual).equal(expected);
  });

  it('set is called - path is not a string - error is throws', () => {
    //@ts-ignore
    expect(() => set({}, {}, 1)).throws('path must be string');
  });

  it('set is called - arguments are correct - returns the same object', () => {
    const expected = { bla: 'bla' };
    expect(set(expected, 'new', 'bla')).equal(expected);
  });
});
