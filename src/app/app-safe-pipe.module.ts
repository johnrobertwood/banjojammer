import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { AppMaterialModule } from './app-material.module';

@NgModule({
  declarations: [SafePipe],
  imports: [CommonModule, AppMaterialModule],
  exports: [SafePipe],
})
export class SafePipeModule {}
