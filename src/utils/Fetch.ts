import { HTTPTransport, METHODS, OptionsType } from './HttpTransport';

export async function fetchWithRetry<Response>(
  transport: HTTPTransport,
  path: string,
  options: OptionsType
): Promise<Response> {
  const { retries, method } = options;

  let requestFunction:
    | ((path: string, options: Omit<OptionsType, 'retries'>) => Promise<Response>)
    | null = null;

  switch (method) {
    case METHODS.DELETE:
      requestFunction = transport.delete;
      break;
    case METHODS.POST:
      requestFunction = transport.post;
      break;
    case METHODS.PUT:
      requestFunction = transport.put;
      break;
    default:
      requestFunction = transport.get;
  }

  let triesCount = 0;

  try {
    const res = await requestFunction(path, options);
    return res;
  } catch (err) {
    if (requestFunction === null) {
      throw err;
    }
    if (triesCount === retries) {
      throw err;
    } else {
      triesCount += 1;
      return requestFunction(path, options);
    }
  }
}
