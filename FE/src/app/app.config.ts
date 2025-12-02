import {APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { routes } from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {IconService} from "./inbox/domain/infrastructure/icon.service";

export function initializeIcons(iconService: IconService) {
  return () => iconService.registerIcons();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withFetch()),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeIcons,
      deps: [IconService],
      multi: true,
    },
    provideZoneChangeDetection({ eventCoalescing: true }),
  ]
};
