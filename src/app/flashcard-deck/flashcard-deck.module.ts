import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlashcardListComponent } from './flashcard-list/flashcard-list.component';
import { FlashcardDeckComponent } from './flashcard-deck/flashcard-deck.component';
import { FlashcardDetailComponent } from './flashcard-detail/flashcard-detail.component';

import { FlashcardDeckRoutingModule } from './flashcard-deck-routing.module';
import { AppMaterialModule } from '../app-material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlashcardDeckRoutingModule,
    AppMaterialModule,
  ],
  declarations: [
    FlashcardDeckComponent,
    FlashcardListComponent,
    FlashcardDetailComponent,
  ],
})
export class FlashcardDeckModule {}
