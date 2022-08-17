import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  QuizComponent,
  QuizDialogComponent,
} from 'src/app/review-dialogs/quiz/quiz.component';
import {
  FlashcardComponent,
  FlashcardDialogComponent,
} from 'src/app/review-dialogs/flashcard/flashcard.component';

import { AppMaterialModule } from '../app-material.module';
import { PipeModule } from '../app-pipe.module';

@NgModule({
  declarations: [
    QuizComponent,
    QuizDialogComponent,
    FlashcardComponent,
    FlashcardDialogComponent,
  ],
  imports: [CommonModule, AppMaterialModule, PipeModule],
  exports: [
    QuizComponent,
    QuizDialogComponent,
    FlashcardComponent,
    FlashcardDialogComponent,
  ],
})
export class AppQuizModule {}
