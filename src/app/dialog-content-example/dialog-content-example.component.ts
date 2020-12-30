import { Component, Inject, Input } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Quiz } from 'src/app/quiz';

export interface DialogData {
  answered: boolean;
  quiz: Quiz;
  correctAnswer: boolean;
}

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'app-dialog-content-example',
  templateUrl: 'dialog-content-example.component.html',
  styleUrls: ['dialog-content-example.component.css'],
})
export class DialogContentExampleComponent {
  @Input() quiz: Quiz;

  correctAnswer: boolean;
  answered = false;

  constructor(public dialog: MatDialog, private router: Router) {}

  openDialog(): void {
    this.answered = false;
    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent, {
      width: '500px',
      data: {
        quiz: this.quiz,
        answered: this.answered,
        correctAnswer: this.correctAnswer,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.answered = result.answered;
      this.correctAnswer = result.correctAnswer;
    });
  }
}

@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.component.html',
  styleUrls: ['dialog-content-example.component.scss'],
})
export class DialogContentExampleDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogContentExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  selectAnswer(correct: boolean) {
    this.data.answered = true;
    this.data.correctAnswer = correct;
  }
}
