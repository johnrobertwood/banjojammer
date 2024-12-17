import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';

import { ConfirmRegistrationComponent } from './confirm-registration/confirm-registration.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [CommonModule, FormsModule, AuthRoutingModule, ReactiveFormsModule],
  declarations: [ConfirmRegistrationComponent, RegisterComponent],
})
export class AuthenticationModule {}
