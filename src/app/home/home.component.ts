import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Technique } from '../techniques/technique';
import { TechniqueService } from '../techniques/technique.service';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  selectedId: number;
  techniques$: Observable<Technique[]>;
  isLoggedIn: boolean;

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
        this.selectedId = +params.get('id');
        return this.techniqueService.getTechniques();
      })
    );
    if (localStorage.getItem('currentUser')) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }
}