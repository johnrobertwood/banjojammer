import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { TechniqueService } from 'src/app/techniques/technique.service';
import { Technique } from 'src/app/techniques/technique';

import { switchMap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { DialogService } from 'src/app/dialog.service';
import { FormBuilder } from '@angular/forms';

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
  moduleName = '';
  private ngUnsubscribe = new Subject();
  @ViewChild('modInput') modInput!: HTMLInputElement;

  tagForm = this.fb.group({
    id: '',
    name: '',
    displayName: '',
    prevTechnique: '',
    nextTechnique: '',
    video: this.fb.group({
      thumbnail: '',
      demoUrl: '',
      jamUrl: '',
      tabUrl: '',
    }),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private techniqueService: TechniqueService,
    private dialogService: DialogService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getTechnique();

    this.route.data.subscribe((data) => {
      this.editName = data.technique.displayName;
      this.technique = data.technique;
    });
  }

  getTechnique(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.moduleName = params.get('module');
          return this.techniqueService.getUserFilterTechnique(
            params.get('module'),
            params.get('name')
          );
        })
      )
      .subscribe((technique: Technique) => {
        this.tagForm.patchValue(technique);
      });
  }

  goBack(techniqueName: string): void {
    void this.router.navigate([
      '/admin/manage-technique-list',
      { name: techniqueName },
    ]);
  }

  save(): void {
    this.techniqueService
      .editTechnique(this.tagForm.value, this.moduleName)
      .subscribe(() => {
        this.goBack(this.technique.name);
      });
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (!this.technique || this.technique.displayName === this.editName) {
      return true;
    }

    return this.dialogService.confirm('Discard changes?');
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
