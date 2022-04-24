import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.css'],
})
export class AddModuleComponent implements OnInit {
  techArrayName: string;
  private ngUnsubscribe = new Subject();

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}

  addModule() {
    this.authService
      .addModule(this.techArrayName)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe();
  }
}
