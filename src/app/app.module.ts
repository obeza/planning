import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { routing,
         appRoutingProviders }  from './app.routing';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
    
  ],
  providers: [ appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
