import { Directive, ElementRef, inject, signal } from '@angular/core';
import { clamp } from '../utils/helper';

@Directive({
  selector: '[track-mouse]',
  host: {
    '(mousemove)': 'mouseMoved($event)',
    '[style.--mouse-x.px]': 'x()',
    '[style.--mouse-y.px]': 'y()',
  },
  exportAs: 'track-mouse',
})
export class TrackMouse {
  readonly x = signal(0);
  readonly y = signal(0);
  private readonly hostElement = inject(ElementRef).nativeElement as HTMLElement;

  private mouseMoved(ev: MouseEvent) {
    const rectangle = this.hostElement.getBoundingClientRect();
    const x = clamp(0, ev.clientX - rectangle.left, rectangle.width);
    const y = clamp(0, ev.clientY - rectangle.top, rectangle.height);
    this.x.set(x);
    this.y.set(y);
  }
}
