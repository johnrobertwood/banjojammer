import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { TechniqueService } from 'src/app/techniques/technique.service';
import { Technique } from 'src/app/techniques/technique';

import { switchMap, map, mergeMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { DialogService } from 'src/app/dialog.service';

@Component({
  selector: 'app-manage-technique-detail',
  templateUrl: './manage-technique-detail.component.html',
  styleUrls: ['./manage-technique-detail.component.css'],
})
export class ManageTechniqueDetailComponent implements OnInit, OnDestroy {
  technique$!: Observable<Technique>;
  technique!: Technique;
  display = false;
  editName = '';
  editAnswer = '';
  private ngUnsubscribe = new Subject();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private techniqueService: TechniqueService,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.getTechnique();
    //@ts-ignore
    this.route.data.subscribe((data: { technique: Technique }) => {
      this.editName = data.technique.displayName;
      this.editAnswer = data.technique.flashcard.answer;
      this.technique = data.technique;
    });
  }

  getTechnique(): void {
    this.technique$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.techniqueService.getUserFilterTechnique(
          'randy-tech',
          params.get('name')
        )
      )
    );
  }

  goBack(techniqueName: string): void {
    void this.router.navigate([
      '/admin/manage-technique-list',
      { name: techniqueName },
    ]);
  }

  save(displayName: string, flashcardAnswer: string): void {
    this.technique$
      .pipe(
        map((technique: Technique) => ({
          ...technique,
          displayName,
          flashcard: {
            complete: this.technique.flashcard.complete,
            question: this.technique.flashcard.question,
            answer: flashcardAnswer,
          },
        })),
        mergeMap((technique: Technique) =>
          this.techniqueService.editTechnique(technique)
        )
      )
      .subscribe(() => {
        this.technique.displayName = this.editName;
        this.technique.flashcard.answer = this.editAnswer;
        this.goBack(this.technique.name);
      });
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (
      !this.technique ||
      (this.technique.displayName === this.editName &&
        this.technique.flashcard.answer === this.editAnswer)
    ) {
      return true;
    }

    return this.dialogService.confirm('Discard changes?');
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
