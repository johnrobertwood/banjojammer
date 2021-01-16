import { Component, Inject, Input, OnDestroy } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
// import { Quiz } from 'src/app/quiz';
import { Technique } from '../techniques/technique';
import { TechniqueService } from '../techniques/technique.service';

export interface DialogData {
  quiz: any;
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
  @Input() technique: Technique;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private techniqueService: TechniqueService
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentExampleDialogComponent, {
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
  selector: 'app-dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.component.html',
  styleUrls: ['dialog-content-example-dialog.component.css'],
})
export class DialogContentExampleDialogComponent implements OnDestroy {
  constructor(
    public dialogRef: MatDialogRef<DialogContentExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  selectAnswer(correct: boolean) {
    this.data.quiz.complete = true;
  }

  ngOnDestroy() {
    this.data.quiz.complete = false;
    // pass data back with this method
    // this.dialogRef.close();
  }
}
