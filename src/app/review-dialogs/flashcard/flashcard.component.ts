import { Component, Inject, Input, OnDestroy } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthenticationService } from 'src/app/auth/authentication.service';
import { Technique } from '../../techniques/technique';

export interface DialogData {
  technique: Technique;
}

@Component({
  selector: 'app-flashcard',
  templateUrl: 'flashcard.component.html',
  styleUrls: ['flashcard.component.css'],
})
export class FlashcardComponent implements OnDestroy {
  @Input() technique: Technique;
  @Input() isFlashDone: boolean;
  answered: boolean;
  private ngUnsubscribe = new Subject();

  constructor(
    public dialog: MatDialog,
    private authService: AuthenticationService
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(FlashcardDialogComponent, {
      width: '500px',
      data: {
        technique: this.technique,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.authService
        .updateTechnique(this.technique, 'flashcard')
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe();
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}

@Component({
  selector: 'app-flashcard-dialog',
  templateUrl: 'flashcard-dialog.component.html',
  styleUrls: ['flashcard-dialog.component.css'],
})
export class FlashcardDialogComponent {
  reveal: boolean;

  constructor(
    public dialogRef: MatDialogRef<FlashcardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  revealAnswer() {
    this.reveal = true;
  }
}
