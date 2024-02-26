import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DownloadLabels } from '../banner.component';

export enum Platforms {
  mac_intel = 'mac_intel',
  mac_m1 = 'mac_m1',
  windows_x64 = 'windows_x64',
  linux = 'linux',
  unknown = 'unknown',
}
export type DownloadURLs = {
  [Platforms.mac_intel]: string;
  [Platforms.mac_m1]: string;
  [Platforms.windows_x64]: string;
  [Platforms.linux]?: string;
  [Platforms.unknown]?: string;
}
@Component({
  selector: 'px-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
  @Input('downloadUrls') downloadUrls;
  @Input('donwloadUrlArr') donwloadUrlArr;
  isLinux = false;
  loading = true;
  platform: string;
  DownloadBtnLabel = 'Download';
  DownloadBtnUrl = 'https://github.com/phcode-dev/phoenix-desktop/releases/download/dev-app-v3.4.2/Phoenix.Code.Experimental.Build_3.4.2_x64-setup.exe';

  @ViewChild('downloadLink') downloadLinkRef!: ElementRef;
  @ViewChild('codeSnippet') codeSnippetRef!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.detectPlatform();
  }

  selectPlatform(platform) {
    this.platform = platform;
    this.setUrls(platform);
  }

  detectPlatform() {
    const platform = window.navigator.platform.toLowerCase();
    // const platform = Platforms.linux;
    if (platform.includes("win")) {
      this.platform = Platforms.windows_x64;
    } else if (platform.includes("mac")) {
      this.platform = Platforms.mac_m1;
    } else if (platform.includes("linux")) {
      this.platform = Platforms.linux;
    } else {
      this.platform = Platforms.unknown;
    }
    this.setUrls(this.platform);
  }

  setUrls(platform) {
    switch(platform) {
      case Platforms.unknown:
        this.DownloadBtnLabel = 'All releases';
        this.DownloadBtnUrl = 'https://github.com/phcode-dev/phoenix-desktop/releases';
      default:
        this.DownloadBtnLabel = DownloadLabels[platform] || 'Download';
        this.DownloadBtnUrl = this.downloadUrls[platform];
    }
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
