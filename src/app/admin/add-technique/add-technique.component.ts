import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-technique',
  templateUrl: './add-technique.component.html',
  styleUrls: ['./add-technique.component.css'],
})
export class AddTechniqueComponent {
  tagForm = this.fb.group({
    id: '',
    name: '',
    displayName: '',
    prevTechnique: '',
    nextTechnique: '',
    quiz: this.fb.group({
      question: '',
      response1: '',
      response2: '',
      response3: '',
      response4: '',
    }),
    flashcard: this.fb.group({
      question: '',
      answer: '',
    }),
    video: this.fb.group({
      url: '',
      thumbnail: '',
    }),
    notes: this.fb.group({
      note1: '',
      note2: '',
      note3: '',
      note4: '',
    }),
  });
  private ngUnsubscribe = new Subject();

  constructor(
    private authService: AuthenticationService,
    private fb: FormBuilder
  ) { }

  addTechnique(moduleName: string) {
    this.authService
      .addTechniques(this.tagForm.value, moduleName)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe();
  }
}
