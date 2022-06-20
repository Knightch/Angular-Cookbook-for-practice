import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ReadTimeConfig {

  wordsPerMinute: number;

}

@Directive({
  selector: '[appReadTime]'
})
export class ReadTimeDirective implements OnInit {

  @Input() configuration: ReadTimeConfig = {

    wordsPerMinute: 100

  }
  @Output() readTimeCalculated = new EventEmitter<string>();
  constructor(private el: ElementRef) { }

  ngOnInit() {

    const text = this.el.nativeElement.textContent;
    console.log(text)
    const time = this.calculateReadTime(text);
    console.log(time)
    const timeStr = this.createTimeString(time);
    console.log(timeStr);
    this.readTimeCalculated.emit(timeStr);
    console.log("emit value " + this.readTimeCalculated.emit(timeStr))

  }
  calculateReadTime(text: string) {

    const wordsCount = text.split(/\s+/g).length;
    console.log('wordsCount ' + wordsCount)
    const configValueWordspermin = this.configuration.wordsPerMinute;
    console.log('config Value ' + configValueWordspermin)
    const minutes = wordsCount / configValueWordspermin;
    console.log('minutes ' + minutes)
    return Math.ceil(minutes);

  }

  createTimeString(timeInMinutes) {
    if (timeInMinutes === 1) {
      return '1 minute';
    } else if (timeInMinutes < 1) {
      return '< 1 minute';
    } else {
      return `${timeInMinutes} minutes`;
    }

  }
}
