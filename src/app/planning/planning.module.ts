import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';

import { RouterModule } from '@angular/router';

import { SidebarComponent } from './components/sidebar/sidebar.component';

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
    declarations:[LayoutComponent, DashbordComponent, SidebarComponent]
})

export class PlanningModule {}

