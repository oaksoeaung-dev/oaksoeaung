import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'learn',
    loadChildren: () => import('./features/learn/learn.routes').then((m) => m.learnRoutes),
  },
];
