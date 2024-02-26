import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/ApiService';
import { DownloadURLs, Platforms } from './download/download.component';


export type UrlResponse = {
  'phcode.io.DownloadURL': DownloadURLs
}
export const DownloadLabels = {
  windows_x64: "Windows x64 Installer",
  mac_m1: "Mac - Apple Silicon DMG",
  mac_intel: "Mac - Intel DMG",
  linux: "Linux x64",
}
@Component({
  selector: 'px-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  downloadUrls;
  donwloadUrlArr: {label: string, value: string, key: string}[];
  loading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit() {

    this.apiService.getDownloadUrls().subscribe((data: UrlResponse) => {
      this.downloadUrls = data['phcode.io.DownloadURL'];
      this.donwloadUrlArr = Object.keys(this.downloadUrls).map(key => ({
        label: DownloadLabels[key],
        value: data['phcode.io.DownloadURL'][key],
        key,
      }));
      this.donwloadUrlArr.push({
        label: DownloadLabels.linux,
        value: '',
        key: Platforms.linux,
      })

      this.loading = false;
    },() => {
      console.error('Failed to get URLs');
    });
  }


}
