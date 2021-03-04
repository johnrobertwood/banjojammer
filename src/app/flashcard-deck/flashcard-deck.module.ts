import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { FlashcardDeckHomeComponent } from './flashcard-deck-home/flashcard-deck-home.component';
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
    MatButtonModule,
    MatInputModule,
    AppMaterialModule,
  ],
  declarations: [
    FlashcardDeckComponent,
    FlashcardListComponent,
    FlashcardDeckHomeComponent,
    FlashcardDetailComponent,
  ],
})
export class FlashcardDeckModule {}
