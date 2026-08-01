import { Routes } from '@angular/router';

export const learnRoutes: Routes = [
  {
    path: 'routing',
    loadComponent: () => import('./pages/routing-page/routing-page').then((m) => m.RoutingPage),
  },
];
