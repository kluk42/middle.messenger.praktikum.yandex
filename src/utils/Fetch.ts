import { HTTPTransport, METHODS, OptionsType } from './HttpTransport';

export const fetchWithRetry = async <Response>(
  transport: HTTPTransport,
  path: string,
  options: OptionsType
): Promise<Response> => {
  const { retries, method } = options;

  let requestFunction:
    | ((path: string, options: Omit<OptionsType, 'retries'>) => Promise<Response>)
    | null = null;

  switch (method) {
    case METHODS.DELETE:
      requestFunction = transport.delete.bind(transport);
      break;
    case METHODS.POST:
      requestFunction = transport.post.bind(transport);
      break;
    case METHODS.PUT:
      requestFunction = transport.put.bind(transport);
      break;
    default:
      requestFunction = transport.get.bind(transport);
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
};
