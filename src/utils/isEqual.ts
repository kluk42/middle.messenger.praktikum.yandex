import { Indexed } from './types';

const isObject = (value: unknown): value is Indexed => {
  return typeof value === 'object' && value !== null;
};

const isNaNCheck = (val: unknown) => {
  return typeof val === 'number' && isNaN(val);
};

const isEqual = (a: object, b: object): boolean => {
  if (typeof a !== typeof b) {
    return false;
  }

  const aEntries = Object.entries(a);
  const bEntries = Object.entries(b);

  const isAEmpty = aEntries.length === 0;
  const isBEmpty = bEntries.length === 0;
  const areEmpty = isAEmpty && isBEmpty;

  if (!areEmpty && (isAEmpty || isBEmpty)) {
    return false;
  }

  if (areEmpty) {
    return Array.isArray(a) === Array.isArray(b);
  }

  if (aEntries.length !== bEntries.length) {
    return false;
  }

  let result = true;

  aEntries.forEach(([key, aValue]) => {
    const castB = b as Indexed;

    if (!(key in castB)) {
      result = false;
      return;
    }

    const bValue = castB[key];

    if (isObject(aValue) && isObject(bValue)) {
      result = isEqual(aValue, bValue);
      return;
    }

    if (aValue !== bValue) {
      result = isNaNCheck(aValue) && isNaNCheck(bValue);
    }
  });

  return result;
};

export default isEqual;
