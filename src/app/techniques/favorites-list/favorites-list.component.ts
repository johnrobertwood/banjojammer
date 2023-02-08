import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SongModule, Technique } from 'src/app/techniques/technique';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { TechniqueService } from '../technique.service';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css'],
})
export class FavoritesListComponent implements OnInit {
  techniques$!: Observable<Technique[]>;
  selectedName!: string | null;
  modulePath!: string | null;
  modules$!: Observable<SongModule[]>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  favArray: any;

  constructor(
    private authService: AuthenticationService,
    private route: ActivatedRoute,
    private ts: TechniqueService
  ) {}

  ngOnInit(): void {
    this.getModules();
    this.getTechniques('banjo-tech');
  }

  selectTech(tech: Technique): void {
    this.selectedName = tech.name;
  }

  getModules(): void {
    this.modules$ = this.ts.getModules();
  }

  getTechniques(moduleName: string): void {
    this.techniques$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.modulePath = params.get('module');
        this.selectedName = params.get('name');
        return this.authService.getUserHistory();
      }),
      map((user) => user.userHistory.favorite),
      tap((data) => {
        this.favArray = data;
      }),
      switchMap(() => this.ts.getTechniques(moduleName)),
      map((arr1) => {
        const arr = [];
        for (const element of arr1) {
          for (const element2 of this.favArray) {
            if (element.name === element2.name) {
              // If element is in both the arrays
              arr.push(element); // Push to arr array
            }
          }
        }
        return arr;
      })
    );
  }
}
