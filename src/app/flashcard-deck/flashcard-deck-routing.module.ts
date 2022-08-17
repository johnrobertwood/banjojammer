import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlashcardListComponent } from './flashcard-list/flashcard-list.component';
import { FlashcardDeckComponent } from './flashcard-deck/flashcard-deck.component';
import { FlashcardDetailComponent } from './flashcard-detail/flashcard-detail.component';

import { CanDeactivateGuard } from '../can-deactivate.guard';
import { FlashcardDetailResolverService } from './flashcard-detail-resolver.service';

const flashcardDeckRoutes: Routes = [
  {
    path: '',
    component: FlashcardDeckComponent,
    children: [
      {
        path: ':module/:name',
        component: FlashcardListComponent,
        children: [
          {
            path: '',
            component: FlashcardDetailComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              flashcard: FlashcardDetailResolverService,
            },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(flashcardDeckRoutes)],
  exports: [RouterModule],
})
export class FlashcardDeckRoutingModule {}
