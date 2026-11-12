import { Component } from '@angular/core';
import { Highlight } from '../../directives/highlight';
import { Blank } from '../../components/blank/blank';

@Component({
  imports: [Highlight, Blank],
  selector: 'app-directives-page',
  templateUrl: './directives-page.html',
})
export class DirectivesPage {
  onDeactivation(timeLength: number) {
    const seconds = timeLength / 1000;
    console.log(`Highlight deactivated after ${seconds} seconds.`);
  }
}
