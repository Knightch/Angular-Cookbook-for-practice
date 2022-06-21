import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollTo]'
})
export class ScrollToDirective {
  @Input() target = '';
  @HostListener('click')

  onClick() {
    console.log("target value is " + this.target)
    const targetElement = document.querySelector(this.target);
    console.log("targetElemet is "+ targetElement)
    targetElement.scrollIntoView({behavior: 'smooth'});
  }
  constructor() { }

}
