import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  providers: [provideStore()]
};
