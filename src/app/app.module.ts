import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { SignInModule } from './auth/sign-in';
import { AuthZoneModule } from './zones/auth-zone';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SignUpModule } from './auth/sign-up';
import { DashboardModule } from './dashboard';
import { InternalZoneModule } from './zones/internal-zone';
import { StoreModule } from '@ngrx/store';
import { DrawModule } from './draw';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routes,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,

    StoreModule.forRoot({}),

    SignInModule,
    SignUpModule,

    DashboardModule,
    DrawModule,

    AuthZoneModule,
    InternalZoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
