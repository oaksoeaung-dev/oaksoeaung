import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';
import { noirPreset } from './themes/presets/noir-preset';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: noirPreset,
        options: {
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng',
          },
        },
      },
      license:
        'eyJpZCI6IjVlYzFjNGU2LWZkYTEtNDZjNi1hZWVmLWQ1OGNmM2U0OGM5ZSIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODMyMzgyOTAsImV4cCI6MTgxNDc3NDI5MH0.i54BgtI0o62Ut-cgnMe0NoSH0GUDFrxVmSVsVOPu8FvdFqQPUTruGDMk2hVOBOxz1w6wCfr4HrrKujPUByyZAQ',
      ripple: true,
    }),
  ],
};
