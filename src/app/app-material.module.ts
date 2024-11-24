import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';

@NgModule({
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatChipsModule,
    MatListModule,
    MatExpansionModule,
    MatInputModule,
  ],
})
export class AppMaterialModule {}
