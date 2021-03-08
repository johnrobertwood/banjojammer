import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthGuard } from './auth/auth.guard';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import { ProfileComponent } from './profile/profile.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup',
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canLoad: [AuthGuard],
  },
  {
    path: 'flashcard-deck',
    loadChildren: () =>
      import('./flashcard-deck/flashcard-deck.module').then(
        (m) => m.FlashcardDeckModule
      ),
    data: { preload: true },
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'favorites',
    component: FavoritesListComponent,
    // data: { animation: 'favorites' },
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false, // <-- debugging purposes only
      preloadingStrategy: SelectivePreloadingStrategyService,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
