import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { EqualValidator } from './../directives/equal-validator.directive';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { UtilisateursComponent } from './pages/utilisateurs/utilisateurs.component';
import { CalendrierComponent } from './pages/calendrier/calendrier.component';
import { InvitationComponent } from './pages/utilisateurs/invitation/invitation.component';

import { RestService } from './../services/rest.service';

const planningRoute = [
  { path: '', component: LayoutComponent, children: [
      {
          path: '',
          component : DashbordComponent
      },
      {
          path: 'calendrier',
          component : CalendrierComponent
      },
      {
          path: 'utilisateurs',
          component : UtilisateursComponent
      },
      {
          path: 'utilisateurs/invitation',
          component : InvitationComponent
      }
  ]  }
];

@NgModule({
    imports:[
        CommonModule, 
        FormsModule,
        HttpModule, 
        RouterModule.forChild(planningRoute), 
        SimpleNotificationsModule
    ],
    declarations:[
        LayoutComponent, 
        DashbordComponent, 
        SidebarComponent, 
        TopbarComponent, 
        UtilisateursComponent, 
        CalendrierComponent, 
        InvitationComponent,
        EqualValidator
    ],
    providers:[RestService]
})

export class PlanningModule {}

