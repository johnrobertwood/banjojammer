import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechniqueDetailComponent } from './technique-detail/technique-detail.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
// import { FavoritesListResolverService } from './favorites-list-resolver.service';

const techniquesRoutes: Routes = [
  {
    path: 'technique/:module/:name',
    component: TechniqueDetailComponent,
  },
  {
    path: 'favorites/:module/:name',
    component: FavoritesListComponent,
    // resolve: {
    //   flashcard: FavoritesListResolverService,
    // },
  },
];

@NgModule({
  imports: [RouterModule.forChild(techniquesRoutes)],
  exports: [RouterModule],
})
export class TechniquesRoutingModule {}
