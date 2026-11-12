import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-blank',
  templateUrl: './blank.html',
  host: {
    class: 'flex',
  },
})
export class Blank {
  readonly color = input('bg-red-100');
}
