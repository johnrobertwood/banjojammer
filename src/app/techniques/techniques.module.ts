import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { TechniqueDetailComponent } from './technique-detail/technique-detail.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { TechniquesRoutingModule } from './techniques-routing.module';
import { AppMaterialModule } from 'src/app/app-material.module';
import { PipeModule } from '../app-pipe.module';
import { AppQuizModule } from '../review-dialogs/app-quiz.module';

@NgModule({
  declarations: [TechniqueDetailComponent, FavoritesListComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    AppMaterialModule,
    TechniquesRoutingModule,
    PipeModule,
    AppQuizModule,
  ],
})
export class TechniquesModule {}
