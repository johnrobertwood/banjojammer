import { Component, Inject, Input, OnDestroy } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Quiz } from '../quiz';
import { Technique } from '../techniques/technique';
import { TechniqueService } from '../techniques/technique.service';

export interface DialogData {
  quiz: Quiz;
}

@Component({
  selector: 'app-dialog-content-example',
  templateUrl: 'dialog-content-example.component.html',
  styleUrls: ['dialog-content-example.component.css'],
})
export class DialogContentExampleComponent {
  @Input() technique: Technique;

  constructor(
    public dialog: MatDialog,
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

  selectAnswer() {
    this.data.quiz.complete = true;
  }

  ngOnDestroy() {
    this.data.quiz.complete = false;
    // pass data back with this method
    // this.dialogRef.close();
  }
}
