import { environment } from './../../environments/environment';

export class ENDPOINT {
  static URLS = {
    WATCH_EVENTS: `${environment.apiUrl}/events`,
    GET_AVG_LOAD: `${environment.apiUrl}/getAvgCPULoadPerTime`
  };
}
