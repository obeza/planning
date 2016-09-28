import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support.component';
import { ConfigComponent } from './config/config.component';
import { SitewebComponent } from './siteweb/siteweb.component';
import { FormatsComponent } from './formats/formats.component';

import { RestService } from './../../../services/rest.service';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {DndModule} from 'ng2-dnd';

const supportRoute = [
  { path: '', component: SupportComponent, children: [
      {
          path: 'config',
          component : ConfigComponent
      },
      {
          path: 'siteweb',
          component : SitewebComponent
      },
      {
          path: 'formats',
          component : FormatsComponent
      }
  ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(supportRoute),
    FormsModule,
    HttpModule,
    DndModule.forRoot()
  ],
  providers:[RestService],
  declarations: [
    SupportComponent, 
    ConfigComponent, 
    SitewebComponent,
    FormatsComponent
  ]
})
export class SupportModule { }







