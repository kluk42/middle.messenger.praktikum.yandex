import { Indexed } from './types';

export const isObject = (value: unknown): value is Indexed => {
  return (
    typeof value === 'object' &&
    value !== null &&
    value.constructor === Object &&
    Object.prototype.toString.call(value) === '[object Object]'
  );
};

export function isArrayOrObject(value: unknown): value is [] | Indexed {
  return isObject(value) || Array.isArray(value);
}
