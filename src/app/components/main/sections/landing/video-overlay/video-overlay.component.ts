import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'px-video-overlay',
  templateUrl: './video-overlay.component.html',
  styleUrls: ['./video-overlay.component.scss']
})
export class VideoOverlayComponent implements OnInit {
  @Input('title') title;
  @Input('titleIconSrc') titleIconSrc;
  @Input('subtitle') subtitle;
  @Input('videoSrc') videoSrc;

  constructor() { }

  ngOnInit(): void {
  }

}
