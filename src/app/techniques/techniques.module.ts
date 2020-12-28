import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TechniqueListComponent } from './technique-list/technique-list.component';
import { TechniqueDetailComponent } from './technique-detail/technique-detail.component';
import {
  DialogContentExampleComponent,
  DialogContentExampleDialogComponent,
} from '../dialog-content-example/dialog-content-example.component';

import { TechniquesRoutingModule } from './techniques-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { AppMaterialModule } from '../app-material.module';

@NgModule({
  declarations: [
    TechniqueListComponent,
    TechniqueDetailComponent,
    DialogContentExampleComponent,
    DialogContentExampleDialogComponent,
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
