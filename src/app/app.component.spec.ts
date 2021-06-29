import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let h1: HTMLElement;
  let getTechniquesSpy: jasmine.Spy;
  const techniques = {
    armbar: {
      id: 0,
      name: 'armbar',
      displayName: 'Armbar',
      favorite: false,
      quiz: {
        name: 'Armbar Quiz',
        complete: false,
        question:
          'What are the important body part elements for entering to the armbar position?',
        responses: [
          {
            text: 'Controlling his head and pulling his elbow inside your hip',
            correct: true,
          },
          {
            text: 'Controlling his feet, turning our chest and shoulders',
            correct: false,
          },
          {
            text: 'Inverting, leg outside of his hips',
            correct: false,
          },
          {
            text: 'Keeping the hips low, pushing with the feet and inverting',
            correct: false,
          },
        ],
      },
      flashcard: {
        name: 'Armbar',
        complete: false,
        question: 'What is the body position for entering an armbar?',
        answer: 'Controlling his head, pulling his elbow inside our hips',
      },
      video: {
        code: 'pQ43Oy5k9yQ',
      },
    },
    triangle: {
      id: 1,
      name: 'triangle',
      displayName: 'Triangle',
      favorite: false,
      quiz: {
        name: 'Triangle Quiz',
        complete: false,
        question: 'How do you lock up a triangle?',
        responses: [
          {
            text: 'Underhook the leg, shin is horizontal across back of neck, pull head',
            correct: true,
          },
          { text: 'Stay square and keep leg across back', correct: false },
          { text: 'Pull them onto their side and squeeze', correct: false },
          { text: 'Reach for kimura grip', correct: false },
        ],
      },
      flashcard: {
        name: 'Triangle',
        complete: false,
        question: 'What are the triangle key points?',
        answer:
          'Push one hand and pull the other, shoot hips up, grab shin, underhook leg',
      },
      video: {
        code: 'oVvEQeasAxQ',
      },
    },
    kimura: {
      id: 2,
      name: 'kimura',
      displayName: 'Kimura',
      favorite: false,
      quiz: {
        name: 'Kimura Quiz',
        complete: false,
        question: 'What are the key body positions for a kimura from guard?',
        responses: [
          {
            text: 'Get their hands on mat, grip the wrist low, lock your elbow out straight, shrimp out a little, elbows tight to finish with monkey grip',
            correct: true,
          },
          {
            text: 'Hold tight with seatbelt, gable grip to lift up chin, gable grip the other side then slide arm across neck',
            correct: false,
          },
          {
            text: 'Push his thumb to peel one hand, then pull his other hand and finish',
            correct: false,
          },
          {
            text: 'Put your head on the map with his arm trapped then reach your crossface arm deep for the gable grip',
            correct: false,
          },
        ],
      },
      flashcard: {
        name: 'Kimura',
        complete: false,
        question: 'What is the first step of Kimura from closed guard?',
        answer: 'Get his hands on the mat',
      },
      video: {
        code: 'mVkKOPNGvjA',
      },
    },
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          BrowserAnimationsModule,
          HttpClientModule,
          AppMaterialModule,
        ],
        declarations: [AppComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    const techniqueService = jasmine.createSpyObj('TechniqueService', [
      'getTechniques',
    ]);

    getTechniquesSpy = techniqueService.getTechniques.and.returnValue(
      of(techniques)
    );

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
  });

  describe('when test with synchronous observable', () => {
    it('should create the app', () => {
      expect(component).toBeDefined();
    });

    it('should contain "Smart Defense Skills"', () => {
      expect(h1.textContent).toContain('Smart Defense Skills');
    });

    it('selectedName is undefined before OnInit', () => {
      expect(component.selectedName).toBeUndefined();
    });

    it('should not show techniques before OnInit', () => {
      expect(getTechniquesSpy.calls.any()).toBe(
        false,
        'getTechniques not yet called'
      );
    });

    it('selectedName is null after OnInit', () => {
      fixture.detectChanges();
      expect(component.selectedName).toEqual(null);
    });
  });
});
