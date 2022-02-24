import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-add-technique',
  templateUrl: './add-technique.component.html',
  styleUrls: ['./add-technique.component.css'],
})
export class AddTechniqueComponent {
  private ngUnsubscribe = new Subject();
  constructor(private authService: AuthenticationService) {}
  techArrayName: string;

  addTechnique() {
    this.authService
      .addTechniques(this.techArrayName)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe();
  }
}
