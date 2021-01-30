import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TechniqueListComponent } from './technique-list/technique-list.component';
import { TechniqueDetailComponent } from './technique-detail/technique-detail.component';
import {
  DialogContentQuizComponent,
  DialogContentQuizDialogComponent,
} from 'src/app/dialog-content-quiz/dialog-content-quiz.component';
import {
  DialogContentFlashcardComponent,
  DialogContentFlashcardDialogComponent,
} from 'src/app/dialog-content-flashcard/dialog-content-flashcard.component';

import { TechniquesRoutingModule } from './techniques-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { AppMaterialModule } from 'src/app/app-material.module';
import { SafePipeModule } from '../app-safe-pipe.module';

@NgModule({
  declarations: [
    TechniqueListComponent,
    TechniqueDetailComponent,
    DialogContentQuizComponent,
    DialogContentQuizDialogComponent,
    DialogContentFlashcardComponent,
    DialogContentFlashcardDialogComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    AppMaterialModule,
    TechniquesRoutingModule,
    SafePipeModule,
  ],
})
export class TechniquesModule {}
