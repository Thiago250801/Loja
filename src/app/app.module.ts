import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialAngular} from "./shared/material-angular.module";
import {provideFirestore,getFirestore} from "@angular/fire/firestore";
import {environment} from "../environments/environment";
import {provideFirebaseApp,initializeApp} from "@angular/fire/app";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MaterialAngular,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
