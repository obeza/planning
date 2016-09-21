import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { EqualValidator } from './../directives/equal-validator.directive';
import { UtilisateurService } from './../services/utilisateur.service'

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { UtilisateursComponent } from './pages/utilisateurs/utilisateurs.component';
import { CalendrierComponent } from './pages/calendrier/calendrier.component';
import { InvitationComponent } from './pages/utilisateurs/invitation/invitation.component';

import { RestService } from './../services/rest.service';
import { ComptesComponent } from './pages/comptes/comptes.component';
import { FavorisPipe } from './pages/comptes/favoris.pipe';

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
      },
      {
          path: 'comptes',
          component : ComptesComponent
      }
  ]  }
];

@NgModule({
    imports:[
        CommonModule, 
        FormsModule,
        ReactiveFormsModule,
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
        EqualValidator,
        ComptesComponent,
        FavorisPipe
    ],
    providers:[RestService, UtilisateurService]
})

export class PlanningModule {}

