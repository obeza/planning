import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

import {CalendarModule, CalendarEventTitle, CalendarDateFormatter} from './../modules/angular2-calendar';
import {FroalaEditorModule} from "ng2-froala-editor/ng2-froala-editor";

import { SitewebComponent } from './pages/siteweb/siteweb.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AjouterComponent } from './pages/projects/ajouter/ajouter.component';
import { ProjetComponent } from './pages/projects/projet/projet.component';
import { MurComponent } from './pages/projects/projet/mur/mur.component';
import { DiscutionComponent } from './pages/projects/projet/discution/discution.component';
import { ActualiteComponent } from './pages/projects/projet/actualite/actualite.component';
import { DocumentComponent } from './pages/projects/projet/document/document.component';
import { EditeurComponent } from './pages/projects/projet/document/editeur/editeur.component'

const myModules = {
    support : ()=>{
    return Promise.resolve(require( "./pages/support/support.module" )[ "SupportModule" ]);
  }
};

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
      },
      {
          path: 'support',
          loadChildren: myModules.support
      },
      {
          path: 'siteweb',
          component: SitewebComponent
      },
      {
          path: 'projects',
          component: ProjectsComponent
      },
      {
          path: 'projects/projet/:id',
          component: ProjetComponent,
          children:[
            {
                path: 'mur',
                component: MurComponent
            },
            {
                path: 'discution',
                component: DiscutionComponent
            },
            {
                path: 'actualite',
                component: ActualiteComponent
            },
            {
                path: 'document',
                component: DocumentComponent
            }
          ]
      }
  ]}
];

@NgModule({
    imports:[
        CommonModule, 
        FormsModule,
        ReactiveFormsModule,
        HttpModule, 
        RouterModule.forChild(planningRoute), 
        SimpleNotificationsModule,
        CalendarModule,
        FroalaEditorModule
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
        SitewebComponent, ProjectsComponent, AjouterComponent, ProjetComponent, MurComponent, DiscutionComponent, ActualiteComponent, DocumentComponent, EditeurComponent
    ],
    providers:[RestService, UtilisateurService, CalendarEventTitle,
    CalendarDateFormatter]
})

export class PlanningModule {}

