import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'component-deep-dive/directives',
    pathMatch: 'full',
  },
  {
    path: 'component-deep-dive',
    loadChildren: () => import('./features/component-deep-dive/component-deep-dive.routes').then((m) => m.componentDeepDiveRoutes),
  },
  {
    path: 'custom-components',
    loadChildren: () => import('./features/custom-components/custom-components.routes').then((m) => m.customComponentsRoutes),
  },
];
