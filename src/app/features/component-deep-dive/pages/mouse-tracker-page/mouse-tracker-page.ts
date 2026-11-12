import { Component } from '@angular/core';
import { TrackMouse } from '../../directives/track-mouse';

@Component({
  imports: [TrackMouse],
  selector: 'app-mouse-tracker-page',
  templateUrl: './mouse-tracker-page.html',
  host: {
    class: 'flex flex-col gap-3',
  },
})
export class MouseTrackerPage {}
