import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlashcardDeckHomeComponent } from './flashcard-deck-home/flashcard-deck-home.component';
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
        path: ':name',
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
          {
            path: '',
            component: FlashcardDeckHomeComponent,
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
