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
    video: this.fb.group({
      thumbnail: '',
      demoUrl: '',
      jamUrl: '',
      tabUrl: '',
    }),
  });
  private ngUnsubscribe = new Subject();

  constructor(
    private authService: AuthenticationService,
    private fb: FormBuilder
  ) {}

  addTechnique(moduleName: string): void {
    this.authService
      .addTechniques(this.tagForm.value, moduleName)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe();
  }
}
