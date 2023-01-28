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
    id: '2',
    name: 'cumberland3',
    displayName: 'Cumberland3',
    prevTechnique: 'cumberland2',
    nextTechnique: '',
    video: this.fb.group({
      thumbnail: 'https://img.youtube.com/vi/1i92oa6jLsA/mqdefault.jpg',
      demoUrl: 'https://www.youtube.com/embed/NoFB9u94jFM',
      jamUrl: 'https://www.youtube.com/embed/xAEjObNAPQQ',
      tabUrl: '/assets/cumberland.pdf',
    }),
  });
  private ngUnsubscribe = new Subject();

  constructor(
    private authService: AuthenticationService,
    private fb: FormBuilder
  ) {}

  addTechnique(moduleName: string): void {
    this.authService
      .addTechniques(this.tagForm.value, 'banjo-tech')
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe();
  }
}
