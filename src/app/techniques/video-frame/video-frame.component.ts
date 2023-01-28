import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';

import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-video-frame',
  templateUrl: './video-frame.component.html',
  styleUrls: ['./video-frame.component.css'],
})
export class VideoFrameComponent implements OnInit {
  @Input() url = '';
  @Input() video1url: any;
  @Input() video2url: any;
  @Input() tabUrl: any;
  @Input() technique: any;
  @Input() isSmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    // console.log(this.technique[0]);
    this.breakpointObserver
      .observe(['(max-width: 600px)'])
      .pipe(pluck('matches'))
      .subscribe((m: boolean) => (this.isSmallScreen = m));
  }
}
