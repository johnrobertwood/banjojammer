import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DialogService } from '../../dialog.service';
import { Technique } from 'src/app/techniques/technique';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.css'],
})
export class CrisisDetailComponent implements OnInit {
  editName: string;
  reveal: boolean;
  technique: Technique;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: { crisis: Technique }) => {
      this.reveal = false;
      this.technique = data.crisis;
    });
  }

  gotoNextFlashcard() {
    const techniqueId = this.technique ? this.technique.id : null;
    this.router.navigate(['/crisis-center', techniqueId + 1]);
  }

  gotoPrevFlashcard() {
    const techniqueId = this.technique ? this.technique.id : null;
    this.router.navigate(['/crisis-center', techniqueId - 1]);
  }

  revealAnswer() {
    this.reveal = true;
  }
}
