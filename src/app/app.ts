import { Component } from '@angular/core';
import { Shell } from '@shared/layouts/shell/shell';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Shell, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
