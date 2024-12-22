import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {provideRouterStore, routerReducer} from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore({
    router: routerReducer,
  }), provideEffects(), provideRouterStore(), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};

