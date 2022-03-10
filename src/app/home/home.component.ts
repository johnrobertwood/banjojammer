import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Technique } from '../techniques/technique';
import { TechniqueService } from '../techniques/technique.service';

import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  selectedName: string;
  techniques$: Observable<Technique[]>;
  isLoggedIn: boolean;
  thumbnailUrl: string;

  constructor(
    private route: ActivatedRoute,
    private techniqueService: TechniqueService
  ) {}

  ngOnInit(): void {
    this.getTechniques();
  }

  getTechniques(): void {
    this.techniques$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedName = params.get('name');
        return this.techniqueService.getTechniques('jaffy-tech');
      })
    );
    if (localStorage.getItem('currentUser')) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }
}
