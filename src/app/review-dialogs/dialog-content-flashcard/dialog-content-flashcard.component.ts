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
  selector: 'app-dialog-content-flashcard',
  templateUrl: 'dialog-content-flashcard.component.html',
  styleUrls: ['dialog-content-flashcard.component.css'],
})
export class DialogContentFlashcardComponent implements OnDestroy {
  private ngUnsubscribe = new Subject();
  @Input() technique: Technique;
  answered: boolean;
  @Input() isFlashDone: boolean;

  constructor(
    public dialog: MatDialog,
    private authService: AuthenticationService
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentFlashcardDialogComponent, {
      width: '500px',
      data: {
        technique: this.technique,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // set to answered with HTTP for user profile
      this.isFlashDone = true;
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
  selector: 'app-dialog-content-flashcard-dialog',
  templateUrl: 'dialog-content-flashcard-dialog.component.html',
  styleUrls: ['dialog-content-flashcard-dialog.component.css'],
})
export class DialogContentFlashcardDialogComponent {
  reveal: boolean;

  constructor(
    public dialogRef: MatDialogRef<DialogContentFlashcardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  revealAnswer() {
    this.reveal = true;
  }
}
