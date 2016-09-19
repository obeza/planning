import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const myModules = {
  planning : ()=>{
    return Promise.resolve(require( "./planning/planning.module" )[ "PlanningModule" ]);
  },
  login : ()=>{
    return Promise.resolve(require( "./modules/login/login.module" )[ "LoginModule" ]);
  },
  senregistrer : ()=>{
    return Promise.resolve(require( "./modules/senregistrer/senregistrer.module" )[ "SenregistrerModule" ]);
  },

};

import { SenregistrerComponent } from './modules/senregistrer/senregistrer.component';


const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: myModules.login },
  { path: 'planning', loadChildren: myModules.planning },
  { path: 'senregistrer/:code', loadChildren: myModules.senregistrer },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);