import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'px-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  navFixed: boolean = false;
  private scrollOffset: number = 100;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.navFixed = (window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0
    ) > this.scrollOffset;
  }

  ngOnInit(): void {
    this.scrollOffset = document.getElementById('meet-phoenix').offsetTop - 200;
  }

}
