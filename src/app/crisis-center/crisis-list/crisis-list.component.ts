import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { Technique } from 'src/app/techniques/technique';
import { TechniqueService } from 'src/app/techniques/technique.service';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css'],
})
export class CrisisListComponent implements OnInit {
  private ngUnsubscribe = new Subject();
  techniques: Technique[];
  selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private techniqueService: TechniqueService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.selectedId = +params.get('id');
          return this.techniqueService.getTechniques();
        }),
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe((techniques) => {
        const obj = JSON.parse(techniques.body).techniques;
        const arr = [];

        for (const key in obj) {
          arr.push(obj[key]);
        }

        arr.sort((a, b) => {
          return a.id - b.id;
        });

        this.techniques = arr;
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
