import { Component, Inject, Input, OnDestroy } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Technique } from '../../techniques/technique';
import { TechniqueService } from '../../techniques/technique.service';

export interface DialogData {
  technique: Technique;
  answered: boolean;
}

@Component({
  selector: 'app-dialog-content-quiz',
  templateUrl: 'dialog-content-quiz.component.html',
  styleUrls: ['dialog-content-quiz.component.css'],
})
export class DialogContentQuizComponent implements OnDestroy {
  private ngUnsubscribe = new Subject();
  @Input() technique: Technique;
  answered: boolean;

  constructor(
    public dialog: MatDialog,
    private techniqueService: TechniqueService
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentQuizDialogComponent, {
      width: '500px',
      data: {
        technique: this.technique,
        answered: false,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.technique.quiz.complete = true;
      this.techniqueService
        .updateTechnique(this.technique, 'quiz')
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
  selector: 'app-dialog-content-quiz-dialog',
  templateUrl: 'dialog-content-quiz-dialog.component.html',
  styleUrls: ['dialog-content-quiz-dialog.component.css'],
})
export class DialogContentQuizDialogComponent implements OnDestroy {
  answered: boolean;

  constructor(
    public dialogRef: MatDialogRef<DialogContentQuizDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  selectAnswer() {
    this.data.answered = true;
  }

  ngOnDestroy() {
    // this is to reset the green box after closing
    this.answered = false;
    // pass data back with this method
    // this.dialogRef.close(this.data);
  }
}
