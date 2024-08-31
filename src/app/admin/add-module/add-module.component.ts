import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css'],
})
export class AddModuleComponent {
  techArrayName = '';
  private ngUnsubscribe = new Subject();

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  addModule(): void {
    this.authService
      .addModule(this.techArrayName)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        this.router.navigate(['/admin/manage-technique-list']);
      });
  }
}
