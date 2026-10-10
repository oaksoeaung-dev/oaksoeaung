import { Routes } from '@angular/router';

export const componentDeepDiveRoutes: Routes = [
  {
    path: 'directives',
    loadComponent: () => import('./pages/directives-page/directives-page').then((m) => m.DirectivesPage),
  },
];
