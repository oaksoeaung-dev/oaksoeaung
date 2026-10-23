import { Directive, signal } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '[class]': `bg()`,
  },
})
export class Highlight {
  readonly bg = signal('bg-blue-100');
}
