import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.css'],
})
export class ComposeMessageComponent implements OnDestroy {
  private ngUnsubscribe = new Subject();
  details: string;
  message: string;
  sending = false;

  constructor(private router: Router, private messageService: MessageService) {}

  send() {
    this.sending = true;
    this.details = 'Sending Message...';

    this.messageService
      .sendFeedback(this.message)
      .pipe(
        tap((x) => {
          console.log(x, this.message);
          this.sending = false;
          this.closePopup();
        })
      )
      .subscribe();
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{ outlets: { popup: null } }]);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
