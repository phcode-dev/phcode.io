import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/ApiService';

enum Platforms {
  mac_intel = 'mac_intel',
  mac_m1 = 'mac_m1',
  windows_x64 = 'windows_x64',
  linux = 'linux',
}
type DownloadURLs = {
  [Platforms.mac_intel]: string;
  [Platforms.mac_m1]: string;
  [Platforms.windows_x64]: string;
  [Platforms.linux]?: string;
}
export type UrlResponse = {
  'phcode.io.DownloadURL': DownloadURLs
}
const Labels = {
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
  public donwloadUrlArr: {label: string, value: string}[];
  loading = true;
  platform: string;
  DownloadBtnLabel = 'Download';
  DownloadBtnUrl = 'https://github.com/phcode-dev/phoenix-desktop/releases/download/dev-app-v3.4.2/Phoenix.Code.Experimental.Build_3.4.2_x64-setup.exe';
  @ViewChild('downloadLink') downloadLinkRef!: ElementRef;
  @ViewChild('codeSnippet') codeSnippetRef!: ElementRef;

  constructor(private apiService: ApiService) {}

  ngOnInit() {

    this.apiService.getDownloadUrls().subscribe((data: UrlResponse) => {
      this.downloadUrls = data['phcode.io.DownloadURL'];
      this.donwloadUrlArr = Object.keys(this.downloadUrls).map(key => ({
        label: Labels[key],
        value: data['phcode.io.DownloadURL'][key]
      }));

      this.loading = false;
      this.detectPlatform();
    },() => {
      console.error('Failed to get URLs');
    });
  }


  detectPlatform() {
    const platform = window.navigator.platform.toLowerCase();
    if (platform.includes("win")) {
      this.platform = Platforms.windows_x64;
    } else if (platform.includes("mac")) {
      this.platform = Platforms.mac_m1;
    } else if (platform.includes("linux")) {
      this.platform = Platforms.linux;
    } else {
      this.platform = Platforms.windows_x64;
    }
    this.DownloadBtnLabel = Labels[this.platform] || 'Download';
    this.DownloadBtnUrl = this.downloadUrls[this.platform];
  }

  downloadFile() {
    // Set the download URL

    // Programmatically trigger the anchor element's click event to start the download
    const downloadLink = this.downloadLinkRef.nativeElement as HTMLAnchorElement;
    downloadLink.click();
  }

  copyCode() {
    const codeSnippetElement = this.codeSnippetRef.nativeElement;
    const codeText = codeSnippetElement.textContent.trim();
    // Use Clipboard API if supported
    if (navigator.clipboard) {
      navigator.clipboard.writeText(codeText).then(() => {
        console.log('Code copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy code: ', err);
      });
    } else {
      // Fallback for browsers not supporting Clipboard API
      const tempTextarea = document.createElement('textarea');
      tempTextarea.value = codeText;
      document.body.appendChild(tempTextarea);
      tempTextarea.select();
      document.execCommand('copy');
      document.body.removeChild(tempTextarea);
      console.log('Code copied to clipboard!');
    }
  }

}
