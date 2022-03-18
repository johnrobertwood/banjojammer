import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Technique } from 'src/app/techniques/technique';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css'],
})
export class FavoritesListComponent implements OnInit {
  selectedName: string;
  techniques$: Observable<Technique[]>;

  constructor(
    private authService: AuthenticationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getTechniques('randy-tech');
  }

  getTechniques(tech: string): void {
    this.techniques$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedName = params.get('name');
        return this.authService.getUserHistory();
      }),
      map((user) => user.userHistory.favorite)
    );
  }

  // delete(technique: Technique): void {
  //   this.techniques = this.techniques.filter((t) => t !== technique);
  //   this.techniqueService.deleteTechnique(technique).subscribe();
  // }
}
