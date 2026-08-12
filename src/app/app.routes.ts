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
    path: 'tests',
    loadChildren: () => import('./features/tests/tests.routes').then((m) => m.testsRoutes),
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];
