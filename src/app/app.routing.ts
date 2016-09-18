import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

function loadPlanningModule(): any {
  //return PlanningModule;
    return Promise.resolve(require("./planning/layout/layout.module")["PlanningModule"]);
}

function loadLoginModule(){
    return Promise.resolve(require("./modules/login/login.module")["LoginModule"]);
}

const appRoutes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', loadChildren: loadLoginModule },
  { path: 'planning', loadChildren: loadPlanningModule }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);