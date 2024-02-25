import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlResponse } from '../components/main/sections/landing/banner/banner.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'https://updates.phcode.io/install.json';

  constructor(private http: HttpClient) { }

  getDownloadUrls(): Observable<UrlResponse> {
    return this.http.get<UrlResponse>(`${this.apiUrl}`);
  }

}
