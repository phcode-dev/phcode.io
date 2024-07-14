import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TCriticalUpdates } from '../components/main/sections/landing/banner/alert/alert.component';
import { ApiService } from './apiService';


@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private criticalAlertsSubject = new BehaviorSubject<TCriticalUpdates | null>(null);
  criticalAlerts$ = this.criticalAlertsSubject.asObservable();

  constructor(private apiService: ApiService) { }

  fetchCriticalAlerts(): Observable<TCriticalUpdates> {
    if (this.criticalAlertsSubject.value === null) {
      return this.apiService.getCriticalAlerts().pipe(
        tap(data => this.criticalAlertsSubject.next(data))
      );
    } else {
      return this.criticalAlerts$;
    }
  }
}
