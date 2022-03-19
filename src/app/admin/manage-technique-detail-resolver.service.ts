import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

import { TechniqueService } from '../techniques/technique.service';
import { Technique } from '../techniques/technique';

@Injectable({
  providedIn: 'root',
})
export class ManageTechniqueDetailResolverService
  implements Resolve<Technique>
{
  constructor(private ts: TechniqueService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<Technique> | Observable<never> {
    const name = route.paramMap.get('name');

    return this.ts.getUserTechnique('jaffy-tech', name).pipe(
      take(1),
      mergeMap((technique) => {
        if (technique) {
          return of(technique);
        } else {
          // id not found
          this.router.navigate(['/manage-technique-list']);
          return EMPTY;
        }
      })
    );
  }
}
