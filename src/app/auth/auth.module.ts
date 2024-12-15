import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

import { ConfirmRegistrationComponent } from './confirm-registration/confirm-registration.component';

@NgModule({
  imports: [CommonModule, FormsModule, AuthRoutingModule],
  declarations: [ConfirmRegistrationComponent],
})
export class AuthenticationModule {}
