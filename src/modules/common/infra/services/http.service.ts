import axios, { AxiosRequestConfig } from 'axios';

export class HttpService {
  constructor(private readonly baseUrl: string) {}

  async request<T = never>(pathname: string, config: AxiosRequestConfig): Promise<T> {
    const response = await axios.request<T>({
      ...config,
      url: `${this.baseUrl}/${pathname}`,
    });

    return response.data;
  }

  get<T>(pathname: string, config: AxiosRequestConfig = {}): Promise<T> {
    return this.request<T>(pathname, config);
  }
}
