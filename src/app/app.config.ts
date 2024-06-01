import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
// import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from '../firebase.comfig';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
    
  ]
};
