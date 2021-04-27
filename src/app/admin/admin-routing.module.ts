import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { AuthGuard } from '../auth/auth.guard';
import { ManageTechniqueListComponent } from './manage-technique-list/manage-technique-list.component';
import { ManageTechniqueDetailComponent } from './manage-technique-detail/manage-technique-detail.component';
import { CanDeactivateGuard } from '../can-deactivate.guard';
import { ManageTechniqueDetailResolverService } from './manage-technique-detail-resolver.service';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'manage-technique-list',
            component: ManageTechniqueListComponent,
            data: { animation: 'list' },
          },
          {
            path: 'manage-technique-detail/:id',
            component: ManageTechniqueDetailComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              technique: ManageTechniqueDetailResolverService,
            },
            data: { animation: 'detail' },
          },
          { path: '', component: AdminDashboardComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
