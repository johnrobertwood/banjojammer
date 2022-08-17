import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizDeckRoutingModule } from './quiz-deck-routing.module';
import { QuizDeckComponent } from './quiz-deck/quiz-deck.component';
import { QuizDetailComponent } from './quiz-detail/quiz-detail.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from '../app-material.module';
import { PipeModule } from '../app-pipe.module';

@NgModule({
  declarations: [QuizDeckComponent, QuizDetailComponent, QuizListComponent],
  imports: [
    CommonModule,
    FormsModule,
    QuizDeckRoutingModule,
    AppMaterialModule,
    PipeModule,
  ],
})
export class QuizDeckModule {}
