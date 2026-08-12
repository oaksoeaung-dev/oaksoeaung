import { Routes } from '@angular/router';

export const formlyRoutes: Routes = [
  {
    path: 'render-form',
    loadComponent: () => import('./pages/render-form-page/render-form-page').then((m) => m.RenderFormPage),
  },
];
