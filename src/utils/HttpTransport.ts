export enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export type OptionsType = {
  data?: Record<string, unknown>;
  timeout?: number;
  headers?: Record<string, string>;
  method: METHODS;
  retries: number;
};

export class HTTPTransport {
  static API_URL = 'https://ya-praktikum.tech/api/v2';
  protected endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = `${HTTPTransport.API_URL}${endpoint}`;
  }

  get<Response>(path: string = '/', options: Omit<OptionsType, 'method' | 'retries'> = {}) {
    const query = this.queryStringify(path, options.data);
    return this.request<Response>(
      this.endpoint + query,
      { ...options, method: METHODS.GET },
      options.timeout
    );
  }

  put<Response = void>(path: string, options: Omit<OptionsType, 'method' | 'retries'>) {
    return this.request<Response>(
      this.endpoint + path,
      { ...options, method: METHODS.PUT },
      options.timeout
    );
  }

  post<Response = void>(path: string, options: Omit<OptionsType, 'method' | 'retries'>) {
    return this.request<Response>(
      this.endpoint + path,
      { ...options, method: METHODS.POST },
      options.timeout
    );
  }

  delete<Response>(path: string, options: Omit<OptionsType, 'method' | 'retries'>) {
    return this.request<Response>(
      this.endpoint + path,
      { ...options, method: METHODS.POST },
      options.timeout
    );
  }

  private request<Response>(
    url: string,
    options: Omit<OptionsType, 'retries'>,
    timeout = 5000
  ): Promise<Response> {
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
        if (xhr.status < 400) {
          const response = xhr.response as Response;
          resolve(response);
        } else {
          reject(xhr.response);
        }
      };

      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.withCredentials = true;
      xhr.responseType = 'json';

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  }

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
