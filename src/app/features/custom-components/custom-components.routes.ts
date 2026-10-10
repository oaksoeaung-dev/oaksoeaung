import { Routes } from '@angular/router';

export const customComponentsRoutes: Routes = [
  {
    path: 'tiptap',
    loadComponent: () => import('./pages/tiptap-page/tiptap-page').then((m) => m.TiptapPage),
  },
];
