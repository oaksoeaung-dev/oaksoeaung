import { Routes } from '@angular/router';

export const routingRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/routing-page/routing-page').then((m) => m.RoutingPage),
  },
];
