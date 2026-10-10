import { Component } from '@angular/core';
import { MainShell } from './shared/components/shells/main-shell/main-shell';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [MainShell, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
