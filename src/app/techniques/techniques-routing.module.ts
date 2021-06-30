import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechniqueDetailComponent } from './technique-detail/technique-detail.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';

const techniquesRoutes: Routes = [
  {
    path: 'technique/:name',
    component: TechniqueDetailComponent,
    // data: { animation: 'technique' },
  },
  {
    path: 'favorites',
    component: FavoritesListComponent,
    // data: { animation: 'favorites' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(techniquesRoutes)],
  exports: [RouterModule],
})
export class TechniquesRoutingModule {}
