import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlResponse } from '../components/main/sections/landing/banner/banner.component';
import { TCriticalUpdates } from '../components/main/sections/landing/banner/alert/alert.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'https://updates.phcode.io/install.json';
  alertsUrl = 'https://updates.phcode.io/siteNotifications/en.json';

  constructor(private http: HttpClient) { }

  getDownloadUrls(): Observable<UrlResponse> {
    return this.http.get<UrlResponse>(`${this.apiUrl}`);
  }

  getCriticalAlerts(): Observable<TCriticalUpdates> {
    return this.http.get<TCriticalUpdates>(`${this.alertsUrl}`);
  }

}
