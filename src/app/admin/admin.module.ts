import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AppMaterialModule } from 'src/app/app-material.module';

import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageTechniqueDetailComponent } from './manage-technique-detail/manage-technique-detail.component';
import { ManageTechniqueListComponent } from './manage-technique-list/manage-technique-list.component';
import { SafePipe } from '../safe.pipe';

@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageTechniqueDetailComponent,
    ManageTechniqueListComponent,
    SafePipe,
    AsyncPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    AppMaterialModule,
    AdminRoutingModule,
  ],
})
export class AdminModule {}
