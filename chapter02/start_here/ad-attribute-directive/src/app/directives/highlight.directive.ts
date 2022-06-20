import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  @Input() highlightText = '';
  @Input() highlightColor = 'yellow';
  originalHTML = '';

  constructor(private el: ElementRef) { }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    if (changes.highlightText.firstChange) {
      this.originalHTML = this.el.nativeElement.innerHTML;
      console.log(this.originalHTML)
      return;

    }

    const { currentValue } = changes.highlightText;
    console.log(currentValue);
    if (currentValue) {

      const regExp = new RegExp(`(${currentValue})`, 'gi')
      console.log(regExp)

      this.el.nativeElement.innerHTML = this.originalHTML.replace(regExp, `<span style="background-color:${this.highlightColor}">\$1</span>`)
      console.log(this.el.nativeElement.innerHTML)

    } else {

      this.el.nativeElement.innerHTML = this.originalHTML;

    }

  }

}
