import { Routes } from '@angular/router';

export const testsRoutes: Routes = [
  {
    path: 'formly',
    loadChildren: () => import('./formly/formly.routes').then((m) => m.formlyRoutes),
  },
];
