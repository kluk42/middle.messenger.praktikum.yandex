import { isArrayOrObject } from './typeGuards';

type StringIndexed = Record<string, any>;

function queryStringify(data: StringIndexed, startKey?: string): string | never {
  if (!isArrayOrObject(data)) {
    throw new Error('input must be an object');
  }

  const result = Object.entries(data).map(([key, value]) => {
    if (isArrayOrObject(value)) {
      return startKey ? startKey + queryStringify(value, `[${key}]`) : queryStringify(value, key);
    } else {
      return startKey ? `${startKey}[${key}]=${value}` : `${key}=${value}`;
    }
  });

  return result.join('&');
}

export default queryStringify;
