import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const route = [
  { path: '', component: LoginComponent }
];

@NgModule({
    imports:[CommonModule,FormsModule, RouterModule.forChild(route)],
    declarations:[LoginComponent]
})

export class LoginModule {}

