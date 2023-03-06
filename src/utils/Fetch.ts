enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

type OptionsType = {
  data?: Record<string, unknown>;
  timeout?: number;
  headers?: Record<string, string>;
  method: METHODS;
  retries: number;
};

class HTTPTransport {
  private static instance?: HTTPTransport;

  private constructor() {}

  public static get Instance() {
    if (!HTTPTransport.instance) {
      HTTPTransport.instance = new HTTPTransport();
    }

    return HTTPTransport.instance;
  }

  get = (url: string, options: Omit<OptionsType, 'method' | 'retries'> = {}) => {
    const query = this.queryStringify(url, options.data);
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

  private request = (url: string, options: Omit<OptionsType, 'retries'>, timeout = 5000) => {
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

  private queryStringify(url: string, data?: Record<string, unknown>) {
    if (data) {
      let optionsString = '?';

      Object.entries(data).forEach(([key, value]) => {
        optionsString += `${key}=${value}&`;
      });

      return url + optionsString.slice(0, -1);
    } else {
      return url;
    }
  }
}

export async function fetchWithRetry(url: string, options: OptionsType) {
  const transport = HTTPTransport.Instance;

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
