import { Component, Inject, Input } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Flashcard } from 'src/app/flashcard';
import { FlashcardService } from '../flashcard.service';

export interface DialogData {
  flashcard: Flashcard;
}

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'app-dialog-content-flashcard',
  templateUrl: 'dialog-content-flashcard.component.html',
  styleUrls: ['dialog-content-flashcard.component.css'],
})
export class DialogContentFlashcardComponent {
  @Input() flashcard: Flashcard;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private flashcardService: FlashcardService
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentFlashcardDialogComponent, {
      width: '500px',
      data: {
        flashcard: this.flashcard,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // set to answered with HTTP for user profile
      this.flashcard.complete = true;
      // this.flashcardService.updateFlashcard(this.flashcard).subscribe();
    });
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
