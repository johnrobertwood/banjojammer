import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TechniqueListComponent } from './technique-list/technique-list.component';
import { TechniqueDetailComponent } from './technique-detail/technique-detail.component';
import {
  DialogContentExampleComponent,
  DialogContentExampleDialogComponent,
} from 'src/app/dialog-content-example/dialog-content-example.component';
import {
  DialogContentFlashcardComponent,
  DialogContentFlashcardDialogComponent,
} from 'src/app/dialog-content-flashcard/dialog-content-flashcard.component';
import { GameCardComponent } from 'src/app/game-card/game-card.component';

import { TechniquesRoutingModule } from './techniques-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { AppMaterialModule } from 'src/app/app-material.module';

@NgModule({
  declarations: [
    TechniqueListComponent,
    TechniqueDetailComponent,
    DialogContentExampleComponent,
    DialogContentExampleDialogComponent,
    DialogContentFlashcardComponent,
    DialogContentFlashcardDialogComponent,
    GameCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TechniquesRoutingModule,
    MatDialogModule,
    MatInputModule,
    AppMaterialModule,
  ],
})
export class TechniquesModule {}
