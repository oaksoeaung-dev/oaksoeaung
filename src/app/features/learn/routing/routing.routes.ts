import { Routes } from '@angular/router';

export const routingRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/routing-page/routing-page').then((m) => m.RoutingPage),
    children: [
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadComponent: () => import('./pages/login-page/login-page').then((m) => m.LoginPage),
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about-page/about-page').then((m) => m.AboutPage),
      },
      {
        path: 'courses',
        children: [
          {
            path: '',
            loadComponent: () => import('./pages/courses-page/courses-page').then((m) => m.CoursesPage),
          },
        ],
      },
      {
        path: '**',
        loadComponent: () => import('../../error/pages/not-found-page/not-found-page').then((m) => m.NotFoundPage),
      },
    ],
  },
];
