import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TechniqueDetailComponent } from './technique-detail/technique-detail.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { TechniquesRoutingModule } from './techniques-routing.module';
import { AppMaterialModule } from 'src/app/app-material.module';
import { PipeModule } from '../app-pipe.module';
import { VideoFrameComponent } from './video-frame/video-frame.component';

@NgModule({
  declarations: [
    TechniqueDetailComponent,
    FavoritesListComponent,
    VideoFrameComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppMaterialModule,
    TechniquesRoutingModule,
    PipeModule,
  ],
})
export class TechniquesModule {}
