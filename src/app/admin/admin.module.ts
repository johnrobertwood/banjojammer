import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { AdminRoutingModule } from './admin-routing.module';
import { ManageTechniqueDetailComponent } from './manage-technique-detail/manage-technique-detail.component';
import { ManageTechniqueListComponent } from './manage-technique-list/manage-technique-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageTechniqueDetailComponent,
    ManageTechniqueListComponent,
  ],
})
export class AdminModule {}
