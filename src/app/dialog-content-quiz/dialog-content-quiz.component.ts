import { Component, Inject, Input, OnDestroy } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Quiz } from './quiz';
import { Technique } from '../techniques/technique';
import { TechniqueService } from '../techniques/technique.service';

export interface DialogData {
  quiz: Quiz;
}

@Component({
  selector: 'app-dialog-content-quiz',
  templateUrl: 'dialog-content-quiz.component.html',
  styleUrls: ['dialog-content-quiz.component.css'],
})
export class DialogContentQuizComponent {
  @Input() technique: Technique;

  constructor(
    public dialog: MatDialog,
    private techniqueService: TechniqueService
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentQuizDialogComponent, {
      width: '500px',
      data: {
        quiz: this.technique.quiz,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.techniqueService.updateTechnique(this.technique).subscribe();
    });
  }
}

@Component({
  selector: 'app-dialog-content-quiz-dialog',
  templateUrl: 'dialog-content-quiz-dialog.component.html',
  styleUrls: ['dialog-content-quiz-dialog.component.css'],
})
export class DialogContentQuizDialogComponent implements OnDestroy {
  constructor(
    public dialogRef: MatDialogRef<DialogContentQuizDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  selectAnswer() {
    this.data.quiz.complete = true;
  }

  ngOnDestroy() {
    // this is to reset the green box after closing
    this.data.quiz.complete = false;

    // pass data back with this method
    // this.dialogRef.close();
  }
}
