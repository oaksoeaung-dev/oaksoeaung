import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from '../../app.routes';
import { providePrimeNG } from '@core/providers/prime-ng-provider';
import { provideFormlyCore } from '@ngx-formly/core';
import { aliases } from '@core/formly/aliases';

export const appConfig: ApplicationConfig = {
  providers: [provideBrowserGlobalErrorListeners(), provideRouter(routes), providePrimeNG(), provideFormlyCore(aliases)],
};
