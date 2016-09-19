import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SenregistrerComponent } from './senregistrer.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { RestService } from './../../services/rest.service';

import { EqualValidator } from './../../directives/equal-validator.directive';

const route = [
  { path: '', component: SenregistrerComponent }
];

@NgModule({
    imports:[
      CommonModule,
      FormsModule, 
      RouterModule.forChild(route),
      HttpModule,
      SimpleNotificationsModule
    ],
    declarations:[SenregistrerComponent, EqualValidator],
    providers:[RestService]
})

export class SenregistrerModule {}

