import { isArrayOrObject } from './typeGuards';
import { Indexed } from './types';

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
    return true;
  }

  const areArrays = Array.isArray(a) && Array.isArray(b);

  if (areArrays && aEntries.length !== bEntries.length) {
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

    if (isArrayOrObject(aValue) && isArrayOrObject(bValue)) {
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
