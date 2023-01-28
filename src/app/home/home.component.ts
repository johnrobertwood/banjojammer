import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  pistolTactics$!: Observable<Technique[]>;
  grappling$!: Observable<Technique[]>;
  nonLethalWeapons$!: Observable<Technique[]>;
  edgedWeapons$!: Observable<Technique[]>;
  situationalAwareness$!: Observable<Technique[]>;
  banjo$!: Observable<Technique[]>;

  isLoggedIn = false;
  thumbnailUrl = '';

  constructor(
    private route: ActivatedRoute,
    private techniqueService: TechniqueService
  ) {}

  ngOnInit(): void {
    this.getTechniques();
  }

  getTechniques(): void {
    // this.grappling$ = this.route.paramMap.pipe(
    //   switchMap(() => this.techniqueService.getTechniques('glover-tech'))
    // );
    this.pistolTactics$ = this.route.paramMap.pipe(
      switchMap(() => this.techniqueService.getTechniques('randy-tech'))
    );
    // this.nonLethalWeapons$ = this.route.paramMap.pipe(
    //   switchMap(() => this.techniqueService.getTechniques('gorilla-tech')),
    // );
    // this.edgedWeapons$ = this.route.paramMap.pipe(
    //   switchMap(() => this.techniqueService.getTechniques('grill-tech')),
    // );
    // this.situationalAwareness$ = this.route.paramMap.pipe(
    //   switchMap(() => this.techniqueService.getTechniques('greek-tech')),
    // );
    this.banjo$ = this.route.paramMap.pipe(
      switchMap(() => this.techniqueService.getTechniques('banjo-tech'))
    );
    if (localStorage.getItem('currentUser')) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }
}
