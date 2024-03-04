import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DownloadLabels } from '../banner.component';
import { animate, style, transition, trigger } from '@angular/animations';

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
  styleUrls: ['./download.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({opacity: 0}),
          animate('100ms', style({opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('100ms', style({opacity: 0}))
        ])
      ]
    )
  ],
})
export class DownloadComponent implements OnInit {
  @Input('downloadUrls') downloadUrls;
  @Input('donwloadUrlArr') donwloadUrlArr;
  @Input('isMobile') isMobile;
  isLinux = false;
  loading = true;
  platform: string;
  DownloadBtnLabel = 'Download';
  DownloadBtnUrl = '';
  copied = false;

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
        this.DownloadBtnLabel = DownloadLabels[Platforms.windows_x64];
        this.DownloadBtnUrl = this.downloadUrls[Platforms.windows_x64];
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
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 2000);
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
