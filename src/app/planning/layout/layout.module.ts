import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { DashbordComponent } from './../dashbord/dashbord.component';

import { RouterModule } from '@angular/router';

const planningRoute = [
  { path: '', component: LayoutComponent, children: [
      {
          path: '',
          component : DashbordComponent
      }
  ]  }
];

@NgModule({
    imports:[CommonModule, RouterModule.forChild(planningRoute)],
    declarations:[LayoutComponent, DashbordComponent]
})

export class PlanningModule {}

