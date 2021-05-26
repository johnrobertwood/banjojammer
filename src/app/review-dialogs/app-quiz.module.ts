import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DialogContentQuizComponent,
  DialogContentQuizDialogComponent,
} from 'src/app/review-dialogs/dialog-content-quiz/dialog-content-quiz.component';
import {
  DialogContentFlashcardComponent,
  DialogContentFlashcardDialogComponent,
} from 'src/app/review-dialogs/dialog-content-flashcard/dialog-content-flashcard.component';

import { AppMaterialModule } from '../app-material.module';
import { PipeModule } from '../app-pipe.module';

@NgModule({
  declarations: [
    DialogContentQuizComponent,
    DialogContentQuizDialogComponent,
    DialogContentFlashcardComponent,
    DialogContentFlashcardDialogComponent,
  ],
  imports: [CommonModule, AppMaterialModule, PipeModule],
  exports: [
    DialogContentQuizComponent,
    DialogContentQuizDialogComponent,
    DialogContentFlashcardComponent,
    DialogContentFlashcardDialogComponent,
  ],
})
export class AppQuizModule {}
