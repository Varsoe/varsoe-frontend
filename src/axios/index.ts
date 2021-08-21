import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// eslint-disable-next-line no-shadow
enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: 'application/json',
};

// We can use the following function to inject the JWT token through an interceptor
// We get the `accessToken` from the localStorage that we set when we authenticate
const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
  try {
    const token: string | null = localStorage.getItem('token');

    if (token != null) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  } catch (error) {
    throw new Error(error);
  }
};

class Http {
  private instance: AxiosInstance | null = null;

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  // constructor() {
  //   this.instance = this.instance != null ? this.instance : this.initHttp();
  // }

  initHttp() {
    const localInstance = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      headers,
    });

    localInstance.interceptors.request.use(injectToken, (error) => Promise.reject(error));

    localInstance.interceptors.response.use(
      (response) => response.data as AxiosResponse,
      (error: { response: { data: { status: number; message: string } } }) => {
        const responseData = error.response.data;
        return this.handleError(responseData);
      }
    );

    this.instance = localInstance;
    return localInstance;
  }

  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    return this.http.request(config);
  }

  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.get<T, R>(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
    return this.http.post<T, R>(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
    return this.http.put<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.delete<T, R>(url, config);
  }

  // Handle global app errors
  // We can handle generic app errors depending on the status code
  // eslint-disable-next-line class-methods-use-this
  private handleError(error: { status: number }) {
    const { status } = error;

    switch (status) {
      case StatusCode.InternalServerError: {
        // Handle InternalServerError
        break;
      }
      case StatusCode.Forbidden: {
        // Handle Forbidden
        break;
      }
      case StatusCode.Unauthorized: {
        window.location.href = '/login';
        // Handle Unauthorized
        break;
      }
      case StatusCode.TooManyRequests: {
        // Handle TooManyRequests
        break;
      }
      default:
        break;
    }

    return Promise.reject(error);
  }
}

const http = new Http();

export default http;
