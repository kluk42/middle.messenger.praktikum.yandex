import { Indexed } from './types';

const isObject = (value: unknown): value is Indexed => {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
};

function merge(lhs: Indexed, rhs: Indexed): Indexed {
  const keys = Object.keys(rhs);

  keys.forEach(key => {
    const rhsValue = rhs[key];
    const lhsValue = lhs[key];

    if (key in lhs && isObject(rhsValue) && isObject(lhsValue)) {
      merge(lhsValue, rhsValue);
    }

    if (!(key in lhs)) {
      if (isObject(rhsValue)) {
        lhs[key] = { ...rhsValue };
      } else {
        lhs[key] = rhsValue;
      }
    }
  });

  return lhs;
}

function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }

  if (!isObject(object)) {
    return object;
  }

  const result = path.split('.').reduceRight<Indexed | unknown>(
    (acc, key) => ({
      [key]: acc,
    }),
    value as any
  );

  merge(object, result as Indexed);

  return object;
}

export default set;

console.log(set({}, 'a', 1)); // { foo: 5, bar: { baz: 10 } }
console.log(set(3, 'foo.bar', 'baz')); // 3
