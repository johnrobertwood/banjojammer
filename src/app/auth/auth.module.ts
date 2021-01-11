import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    MatButtonModule,
    AmplifyUIAngularModule,
  ],
  declarations: [LoginComponent],
})
export class AuthenticationModule {}
