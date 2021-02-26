import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

import { TechniqueService } from '../techniques/technique.service';
import { Technique } from '../techniques/technique';

@Injectable({
  providedIn: 'root',
})
export class CrisisDetailResolverService implements Resolve<Technique> {
  constructor(private ts: TechniqueService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Technique> | Observable<never> {
    const id = route.paramMap.get('id');

    return this.ts.getUserTechnique(+id).pipe(
      take(1),
      mergeMap((technique) => {
        if (technique) {
          return of(technique);
        } else {
          // id not found
          this.router.navigate(['/crisis-center']);
          return EMPTY;
        }
      })
    );
  }
}
