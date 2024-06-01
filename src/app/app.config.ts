import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AngularFireDatabase, AngularFireDatabaseModule } from '@angular/fire/compat/database'; // Import AngularFireDatabase and AngularFireDatabaseModule
import { firebaseConfig } from '../firebase.comfig';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),

  ]
};
