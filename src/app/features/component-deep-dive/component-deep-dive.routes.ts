import { Routes } from '@angular/router';

export const componentDeepDiveRoutes: Routes = [
  {
    path: 'directives',
    loadComponent: () => import('./pages/directives-page/directives-page').then((m) => m.DirectivesPage),
  },
  {
    path: 'practices',
    children: [
      {
        path: 'mouse-tracker',
        loadComponent: () => import('./pages/mouse-tracker-page/mouse-tracker-page').then((m) => m.MouseTrackerPage),
      },
    ],
  },
];
