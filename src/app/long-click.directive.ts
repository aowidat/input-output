import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appLongClick]'
})
export class LongClickDirective {

  constructor() { }

  @Output() longClick = new EventEmitter();
  @Input() longClickFunction: (() => void) | undefined;

  private intervalId: any;

  @HostListener('mousedown')
  onMouseDown() {
    this.intervalId = setInterval(() => {
      this.longClick.emit();
      if (this.longClickFunction) {
        this.longClickFunction();
      }
    }, 200);  // Adjust the delay time as needed
  }

  @HostListener('mouseup')
  onMouseUp() {
    console.log("unclicked");
    
    clearInterval(this.intervalId);
  }

}
