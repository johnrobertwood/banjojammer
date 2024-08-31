import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { TechniqueService } from 'src/app/techniques/technique.service';
import { Technique } from 'src/app/techniques/technique';

import { concatMap, switchMap, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-technique-detail',
  templateUrl: './technique-detail.component.html',
  styleUrls: ['./technique-detail.component.css'],
})
export class TechniqueDetailComponent implements OnInit, OnDestroy {
  technique$!: Observable<Technique>;
  isLoggedIn = false;
  isFavorite = false;
  isQuizDone = false;
  isFlashDone = false;
  url = '';
  modulePath!: string | null;
  techniqueName!: string | null;
  private ngUnsubscribe = new Subject();

  constructor(
    private activatedRoute: ActivatedRoute,
    private techniqueService: TechniqueService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.getTechnique();
  }

  getTechnique(): void {
    this.technique$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.modulePath = params.get('module');
        this.techniqueName = params.get('name');
        return this.techniqueService.getUserFilterTechnique(
          this.modulePath,
          this.techniqueName
        );
      }),
      tap((technique) => {
        if (localStorage.getItem('currentUser')) {
          this.isLoggedIn = true;
          this.isFavorite = false;
          this.authService.getUserHistory().subscribe((res) => {
            res.userHistory.favorite.find((t: Technique) => {
              if (t.name === technique.name) {
                this.isFavorite = true;
              }
            });
          });
        } else {
          this.isLoggedIn = false;
        }
      })
    );
  }

  updateTechnique(technique: Technique): void {
    this.authService
      .getUserHistory()
      .pipe(
        concatMap((res) => {
          let favoriteArr = res.userHistory.favorite;
          this.isFavorite = true;
          favoriteArr = favoriteArr.filter((t: Technique) => {
            if (t.name === technique.name) {
              this.isFavorite = false;
            }
            return t.name !== technique.name;
          });
          if (this.isFavorite) {
            favoriteArr.push(technique);
          }
          return this.authService.updateTechnique(favoriteArr);
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
