import { Routes } from '@angular/router';

export const errorRoutes: Routes = [
  {
    path: '404',
    loadComponent: () => import('./pages/not-found-page/not-found-page').then((m) => m.NotFoundPage),
  },
];
