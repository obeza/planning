import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RestService } from './../../services/rest.service';
import { HttpModule } from '@angular/http';

const route = [
  { path: '', component: LoginComponent }
];

@NgModule({
    imports:[
      CommonModule,
      FormsModule, 
      RouterModule.forChild(route),
      HttpModule
    ],
    declarations:[LoginComponent],
    providers: [ RestService ]
})

export class LoginModule {}

