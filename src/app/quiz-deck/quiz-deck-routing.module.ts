import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactivateGuard } from '../can-deactivate.guard';
import { QuizDeckComponent } from './quiz-deck/quiz-deck.component';
import { QuizDetailComponent } from './quiz-detail/quiz-detail.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';

import { QuizDetailResolverService } from './quiz-detail-resolver.service';

const quizDeckRoutes: Routes = [
  {
    path: '',
    component: QuizDeckComponent,
    children: [
      {
        path: ':module/:name',
        component: QuizListComponent,
        children: [
          {
            path: '',
            component: QuizDetailComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              quiz: QuizDetailResolverService,
            },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(quizDeckRoutes)],
  exports: [RouterModule],
})
export class QuizDeckRoutingModule { }
