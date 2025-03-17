import { HttpService } from '@/modules/common/infra/services/http.service';

export function createHttpService(baseUrl: string) {
  return new HttpService(baseUrl);
}
