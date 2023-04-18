import { isArrayOrObject } from './typeGuards';
import { Indexed } from './types';

const isNaNCheck = (val: unknown) => {
  return typeof val === 'number' && isNaN(val);
};

const isEqual = (a?: object, b?: object): boolean => {
  if (typeof a !== typeof b) {
    return false;
  }

  if (a === undefined || b === undefined) {
    return a === b;
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

  if (aEntries.length !== bEntries.length) {
    return false;
  }

  for (const [key, aValue] of aEntries) {
    const castB = b as Indexed;

    if (!(key in castB)) {
      return false;
    }

    const bValue = castB[key];

    if (isArrayOrObject(aValue) && isArrayOrObject(bValue)) {
      if (isEqual(aValue, bValue)) {
        continue;
      }
      return false;
    }

    if (aValue !== bValue) {
      return isNaNCheck(aValue) && isNaNCheck(bValue);
    }
  }

  return true;
};

export default isEqual;
