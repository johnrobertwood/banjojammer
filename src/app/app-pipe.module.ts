import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { RandomPipe } from './random.pipe';
import { AppMaterialModule } from './app-material.module';

@NgModule({
  declarations: [SafePipe, RandomPipe],
  imports: [CommonModule, AppMaterialModule],
  exports: [SafePipe, RandomPipe],
})
export class PipeModule {}
