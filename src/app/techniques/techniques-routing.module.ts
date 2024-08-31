import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TechniqueDetailComponent } from './technique-detail/technique-detail.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
// import { FavoritesListResolverService } from './favorites-list-resolver.service';

const techniquesRoutes: Routes = [
  {
    path: 'song/:module/:name',
    component: TechniqueDetailComponent,
  },
  {
    path: 'favorites',
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
