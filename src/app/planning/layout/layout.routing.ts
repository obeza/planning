import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { DashbordComponent } from './../dashbord/dashbord.component';


const planningRoute: Routes = [
  { path: 'planning', component: LayoutComponent, children: [
      {
          path: '',
          component : DashbordComponent
      }
  ]  }
];

export const planningRouting: ModuleWithProviders = RouterModule.forRoot(planningRoute);