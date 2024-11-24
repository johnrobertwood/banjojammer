import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';

import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { ConfirmRegistrationComponent } from './confirm-registration/confirm-registration.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    MatButtonModule,
    AmplifyUIAngularModule,
  ],
  declarations: [LoginComponent, ConfirmRegistrationComponent],
})
export class AuthenticationModule {}
