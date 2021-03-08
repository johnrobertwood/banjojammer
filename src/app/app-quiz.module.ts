import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DialogContentQuizComponent,
  DialogContentQuizDialogComponent,
} from 'src/app/dialog-content-quiz/dialog-content-quiz.component';
import {
  DialogContentFlashcardComponent,
  DialogContentFlashcardDialogComponent,
} from 'src/app/dialog-content-flashcard/dialog-content-flashcard.component';

import { AppMaterialModule } from './app-material.module';

@NgModule({
  declarations: [
    DialogContentQuizComponent,
    DialogContentQuizDialogComponent,
    DialogContentFlashcardComponent,
    DialogContentFlashcardDialogComponent,
  ],
  imports: [CommonModule, AppMaterialModule],
  exports: [
    DialogContentQuizComponent,
    DialogContentQuizDialogComponent,
    DialogContentFlashcardComponent,
    DialogContentFlashcardDialogComponent,
  ],
})
export class AppQuizModule {}
