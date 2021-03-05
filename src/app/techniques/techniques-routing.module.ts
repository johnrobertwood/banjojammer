import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechniqueDetailComponent } from './technique-detail/technique-detail.component';

const techniquesRoutes: Routes = [
  {
    path: 'technique/:id',
    component: TechniqueDetailComponent,
    // data: { animation: 'technique' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(techniquesRoutes)],
  exports: [RouterModule],
})
export class TechniquesRoutingModule {}
