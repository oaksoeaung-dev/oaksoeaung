import { Routes } from '@angular/router';

export const designPatternsRoutes: Routes = [
  {
    path: 'command',
    loadComponent: () => import('./pages/command-page/command-page').then((m) => m.CommandPage),
  },
];
