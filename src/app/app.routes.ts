import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'learn',
    loadChildren: () => import('./features/learn/learn.routes').then((m) => m.learnRoutes),
  },
  {
    path: 'error',
    loadChildren: () => import('./features/error/error.routes').then((m) => m.errorRoutes),
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];
