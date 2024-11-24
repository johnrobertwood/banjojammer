import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';

import { AppComponent } from './app.component';

import { of } from 'rxjs';
import { TechniqueService } from './techniques/technique.service';

import grillTech from './auth/grill-tech';

describe('AppComponent', () => {
  let techniqueService;
  let getTechniquesSpy: jasmine.Spy;

  beforeEach(async () => {
    techniqueService = jasmine.createSpyObj('TechniqueService', [
      'getTechniques',
    ]);

    getTechniquesSpy = techniqueService.getTechniques.and.returnValue(
      of(grillTech)
    );

    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatMenuModule,
      ],
      providers: [{ provide: TechniqueService, useValue: techniqueService }],
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should display the h1 page title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const h1 = fixture.nativeElement.querySelector('.h1 .mandofont');
    expect(h1.textContent).toEqual('BJJ Quiz');
  });

  it('should call getTechniqueService', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(getTechniquesSpy.calls.any()).toBe(false);
    fixture.detectChanges();
    expect(getTechniquesSpy.calls.any()).toBe(true);
  });
});
