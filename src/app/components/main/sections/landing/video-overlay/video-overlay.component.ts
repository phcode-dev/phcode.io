import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'px-video-overlay',
  templateUrl: './video-overlay.component.html',
  styleUrls: ['./video-overlay.component.scss']
})
export class VideoOverlayComponent implements OnInit, AfterViewInit {
  @Input('title') title;
  @Input('titleIconSrc') titleIconSrc;
  @Input('subtitle') subtitle;
  @Input('videoSrc') videoSrc;
  @ViewChild('videoElement') videoElement: ElementRef<HTMLVideoElement>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const video: HTMLVideoElement = this.videoElement.nativeElement;
    video.muted = true;
    video.autoplay = true;
    video.loop = true;
    video.load();
    video.play().catch(error => {
      console.error('Error attempting to play video:', error);
    });
  }

}
