import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing,
         appRoutingProviders }  from './app.routing';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routing
    
  ],
  providers: [ appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
