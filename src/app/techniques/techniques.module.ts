import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

import { TechniqueDetailComponent } from './technique-detail/technique-detail.component';
import { TechniquesRoutingModule } from './techniques-routing.module';
import { AppMaterialModule } from 'src/app/app-material.module';
import { SafePipeModule } from '../app-safe-pipe.module';
import { AppQuizModule } from '../app-quiz.module';

@NgModule({
  declarations: [TechniqueDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    AppMaterialModule,
    TechniquesRoutingModule,
    SafePipeModule,
    AppQuizModule,
  ],
})
export class TechniquesModule {}
