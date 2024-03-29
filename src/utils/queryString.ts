import { isArrayOrObject } from './typeGuards';

type StringIndexed = Record<string, unknown>;

function queryStringify(data: StringIndexed, startKey?: string): string | never {
  if (!isArrayOrObject(data)) {
    throw new Error('input must be an object');
  }

  const result = Object.entries(data).map(([key, value]) => {
    if (isArrayOrObject(value)) {
      return startKey
        ? startKey + queryStringify(value as Record<string, unknown>, `[${key}]`)
        : queryStringify(value as Record<string, unknown>, key);
    } else {
      return startKey ? `${startKey}[${key}]=${value}` : `${key}=${value}`;
    }
  });

  return result.join('&');
}

export default queryStringify;
