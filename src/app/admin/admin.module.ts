import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AppMaterialModule } from 'src/app/app-material.module';
import { PipeModule } from 'src/app/app-pipe.module';

import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageTechniqueDetailComponent } from './manage-technique-detail/manage-technique-detail.component';
import { ManageTechniqueListComponent } from './manage-technique-list/manage-technique-list.component';
import { AddTechniqueComponent } from './add-technique/add-technique.component';
import { TosComponent } from '../static-pages/tos/tos.component';
import { PrivacyComponent } from '../static-pages/privacy/privacy.component';
import { AddModuleComponent } from './add-module/add-module.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageTechniqueDetailComponent,
    ManageTechniqueListComponent,
    AddTechniqueComponent,
    TosComponent,
    PrivacyComponent,
    AddModuleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    AppMaterialModule,
    AdminRoutingModule,
    PipeModule,
    RouterModule,
  ],
})
export class AdminModule {}
