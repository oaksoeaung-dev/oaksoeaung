import { Component, signal } from '@angular/core';
import { ButtonDirective } from 'primeng/button';

@Component({
  imports: [ButtonDirective],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('oaksoeaung');
}
