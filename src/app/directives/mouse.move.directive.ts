import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[pxMouseMove]'
})
export class MouseMoveDirective implements AfterViewInit {
  element = null;
  mouseOverParent = false;
  @Input('parent') parent = null;
  @Input('xMovement') xMovement = 10;
  @Input('yMovement') yMovement = 10;

  @Input('scroll') scroll = false;

  constructor(private el: ElementRef) {
    this.element = el.nativeElement;

  }

  ngAfterViewInit(): void {
    if (this.parent) {
      this.parent.addEventListener('mouseenter', () => {
        document.addEventListener('mousemove', this.updateElPosition);
      });
      this.parent.addEventListener('mouseleave', () => {
        document.removeEventListener('mousemove', this.updateElPosition);
      });
    }
  }

  updateElPosition = (e) => {
    const mousePercentX = e.clientX / document.body.clientWidth;
    const mousePercentY = e.clientY / document.body.clientHeight;
    const posX = (mousePercentX * 2 - 1) * this.xMovement;
    const posY = (mousePercentY * 2 - 1) * this.yMovement;
    this.element.style.transform = `translate(${posX}px, ${posY}px)`;
  }

  updateElPositionOnScroll = (e) => {
    console.log('scroll')
    if (this.scroll) {
      // const mousePercentX = window.scrollY / document.body.clientWidth;
      const mousePercentY = window.scrollY / document.body.clientHeight;
      // const posX = (mousePercentX * 2 - 1) * this.xMovement;
      const posY = (mousePercentY * 2 - 1) * (this.yMovement * 3);
      this.element.style.transform = `translateY(${posY}px)`;
    }
  }

}
