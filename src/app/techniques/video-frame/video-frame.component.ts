import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-frame',
  templateUrl: './video-frame.component.html',
  styleUrls: ['./video-frame.component.css'],
})
export class VideoFrameComponent {
  @Input() url: string;
  @Input() isSmallScreen: boolean;
}
