enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

/**
 * Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
 * На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
 * На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
 */
function queryStringify(data: Record<string, unknown>) {
  let optionsString = '?';

  Object.entries(data).forEach(([key, value]) => {
    optionsString += `${key}=${value}&`;
  });

  return optionsString.slice(0, -1);
}

type OptionsType = {
  data?: Record<string, unknown>;
  timeout?: number;
  headers?: Record<string, string>;
  method: METHODS;
  retries: number;
};

class HTTPTransport {
  get = (url: string, options: Omit<OptionsType, 'method' | 'retries'> = {}) => {
    let query = url;
    if (options?.data) {
      query += queryStringify(options.data);
    }
    return this.request(query, { ...options, method: METHODS.GET }, options.timeout);
  };

  put = (url: string, options: Omit<OptionsType, 'method' | 'retries'>) => {
    return this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
  };

  post = (url: string, options: Omit<OptionsType, 'method' | 'retries'>) => {
    return this.request(url, { ...options, method: METHODS.POST }, options.timeout);
  };

  delete = (url: string, options: Omit<OptionsType, 'method' | 'retries'>) => {
    return this.request(url, { ...options, method: METHODS.POST }, options.timeout);
  };

  // PUT, POST, DELETE

  // options:
  // headers — obj
  // data — obj
  request = (url: string, options: Omit<OptionsType, 'retries'>, timeout = 5000) => {
    return new Promise(function (resolve, reject) {
      const { headers, data, method } = options;

      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      xhr.timeout = timeout;

      if (headers) {
        Object.entries(headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value);
        });
      }

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}

export async function fetchWithRetry(url: string, options: OptionsType) {
  const transport = new HTTPTransport();

  const { retries, method } = options;

  let requestFunction:
    | ((url: string, options: Omit<OptionsType, 'retries'>) => Promise<unknown>)
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
    const res = await requestFunction(url, options);
    return res;
  } catch (err) {
    if (requestFunction === null) {
      throw err;
    }
    if (triesCount === retries) {
      throw err;
    } else {
      triesCount += 1;
      return requestFunction(url, options);
    }
  }
}
