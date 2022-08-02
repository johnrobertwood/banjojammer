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
import { Quiz } from './quiz';

export interface DialogData {
  quiz: Quiz;
  answered: boolean;
}

@Component({
  selector: 'app-quiz',
  templateUrl: 'quiz.component.html',
  styleUrls: ['quiz.component.css'],
})
export class QuizComponent implements OnDestroy {
  @Input() technique: Technique;
  @Input() isQuizDone: boolean;
  answered = false;
  private ngUnsubscribe = new Subject();

  constructor(
    public dialog: MatDialog,
    private authService: AuthenticationService
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(QuizDialogComponent, {
      width: '500px',
      data: {
        quiz: this.technique.quiz,
        answered: false,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.authService
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
  selector: 'app-quiz-dialog',
  templateUrl: 'quiz-dialog.component.html',
  styleUrls: ['quiz-dialog.component.css'],
})
export class QuizDialogComponent implements OnDestroy {
  answered = false;

  constructor(
    public dialogRef: MatDialogRef<QuizDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

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
