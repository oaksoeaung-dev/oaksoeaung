import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  constructor() {
    console.log('Highlight');
  }
}
