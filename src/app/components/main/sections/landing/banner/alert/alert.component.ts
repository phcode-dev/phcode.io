import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/apiService';

enum SeverityType {
  Critical = 'critical',
  Warning = 'warning',
  Info = 'info',
}
type TUpdateMsgFormat = {
  titleHTML: string;
  messageHTML: string;
  severity: SeverityType;
  type: 1 | 2 | 3;
  dismissable: boolean;
}
export type TCriticalUpdates = {
  all: TUpdateMsgFormat,
  mac: TUpdateMsgFormat,
  linux: TUpdateMsgFormat,
  win: TUpdateMsgFormat,
  android: TUpdateMsgFormat,
  ios: TUpdateMsgFormat
}

@Component({
  selector: 'px-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  activeAlert: TUpdateMsgFormat | null = null

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getCriticalAlerts();
  }

  getCriticalAlerts() {
    this.apiService.getCriticalAlerts().subscribe((data: TCriticalUpdates) => {
      let platform = this.getMobileOperatingSystem() || window.navigator.platform.toLowerCase();
      if(platform.includes('mac')) {
        platform = 'mac';
      } else if(platform.includes('win')) {
        platform = 'win';
      } else if(platform.includes('linux')) {
        platform = 'linux';
      }
      const platFormAlert: TUpdateMsgFormat = data[platform];
      if (platFormAlert?.messageHTML && platFormAlert?.titleHTML) {
        this.activeAlert = platFormAlert;
        this.activeAlert.severity = this.activeAlert.severity || SeverityType.Critical;
        this.activeAlert.dismissable = this.activeAlert.dismissable || false;
        this.activeAlert.type = this.activeAlert.type || 3;
      } else {
        this.activeAlert = null;
      }
    },() => {
      console.error('Failed to get Critical Alerts');
    });
  }

  closeAlert() {
    this.activeAlert = null;
  }

  getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor;
    if (/android/i.test(userAgent)) {
        return "android";
    }
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any)?.MSStream) {
        return "ios";
    }
    return false;
  }

}
