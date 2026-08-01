import { Routes } from '@angular/router';

export const learnRoutes: Routes = [
  {
    path: 'routing',
    loadChildren: () => import('./routing/routing.routes').then((m) => m.routingRoutes),
  },
];
