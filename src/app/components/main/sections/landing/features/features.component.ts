import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alertService';

export type FeatureConfig = {
  title: string,
  subtitle: string,
  titleIconSrc: string,
  videoSrc: string,
}
const VIDEO_OVERLAY_CONFIG: FeatureConfig[] = [
  {
    title: 'Live Preview',
    subtitle: `See your HTML and CSS code changes instantly, without page reloads! Use powerful UI tools like the colour editor to tweak background
and text colours, adjust font sizes and border-radius with number dials, or explore page layouts with live code hints. Phoenix Code makes
your web design workflows faster and more enjoyable.`,
    titleIconSrc: 'assets/images/load.gif',
    videoSrc: 'https://docs-images.phcode.dev/videos/phcode.io-site/live_preview.mp4',
  },
  {
    title: 'Code Intelligence for the Web',
    subtitle: `Write HTML, CSS, and JavaScript faster with on-the-fly code completion and catch errors before they become problems. We're always
adding better smarts to our code intelligence, making Phoenix Code sharper with every release. It's web development with everything you
need, right out of the box- no extensions needed.`,
    titleIconSrc: 'assets/images/intelligence.png',
    videoSrc: 'https://docs-images.phcode.dev/videos/phcode.io-site/error_detect.mp4',
  },
  {
    title: 'Lightning-Fast Search',
    subtitle: `Find exactly what you need across your entire project with Instant search. We've fine-tuned the UX to help you pinpoint your query
faster: search within specific file types, exclude files and folders, or use regular expressions for complex queries. Phoenix Code's state-of-
the-art 'find in files' feature handles large projects with ease, delivering instant results as you type.`,
    titleIconSrc: 'assets/images/flash.gif',
    videoSrc: 'https://docs-images.phcode.dev/videos/phcode.io-site/find_in_files.mp4',
  },
];
@Component({
  selector: 'px-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  videoOverlayConfig = [];

  constructor(private alertService: AlertService) { }

  featuresFromAPI: any = null;

  ngOnInit(): void {
    this.videoOverlayConfig = VIDEO_OVERLAY_CONFIG;
    this.alertService.fetchCriticalAlerts().subscribe((data) => {
      if (data?.features) {
        this.videoOverlayConfig = data?.features;
      }
    });
  }

}
