import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BussinessLogicModule } from '@bussiness-logic';
import { StoreModule } from '@store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule,
    RouterModule,
    BussinessLogicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
