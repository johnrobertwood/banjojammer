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

import { TechniquesRoutingModule } from './techniques-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { AppMaterialModule } from 'src/app/app-material.module';
import { SafePipe } from '../safe.pipe';

@NgModule({
  declarations: [
    TechniqueListComponent,
    TechniqueDetailComponent,
    DialogContentExampleComponent,
    DialogContentExampleDialogComponent,
    DialogContentFlashcardComponent,
    DialogContentFlashcardDialogComponent,
    SafePipe,
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
