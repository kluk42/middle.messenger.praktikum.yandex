import { isArrayOrObject } from './typeGuards';

function cloneDeep<T extends Record<string, any> = Record<string, any>>(
  obj: T
): Record<string, any> {
  const result: Record<string, any> = Array.isArray(obj) ? [] : {};

  const entries = Object.entries(obj);

  entries.forEach(([key, value]) => {
    if (isArrayOrObject(value)) {
      const copy = cloneDeep(value);
      result[key] = copy;
    } else {
      result[key] = value;
    }
  });

  return result;
}

export default cloneDeep;
