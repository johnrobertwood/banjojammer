import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlingService } from '../error-handling.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isLoggedIn = false;
  userData: any;

  techniques: { [key: string]: object } = {
    presentation: {
      id: 0,
      name: 'presentation',
      displayName: 'Presentation',
      favorite: false,
      quiz: {
        name: 'Presentation Quiz',
        complete: false,
        question: 'What are the 5 counts of the presentation?',
        responses: [
          {
            text: 'Grip, Clear, Click, Smack, Look',
            correct: true,
          },
          {
            text: 'Funny joke wrong answer #1',
            correct: false,
          },
          {
            text: 'Common mistake wrong answer #1',
            correct: false,
          },
          {
            text: 'Funny joke wrong answer #2',
            correct: false,
          },
        ],
      },
      flashcard: {
        name: 'Presentation Flashcard',
        complete: false,
        question: 'What are the 5 counts of the presentation?',
        answer: 'Grip, Clear, Click, Smack, Look',
      },
      video: {
        url: 'https://www.youtube.com/embed/fBcdQhTOPY8',
      },
    },
    tacticalReload: {
      id: 1,
      name: 'tacticalReload',
      displayName: 'Tactical Reload',
      favorite: false,
      quiz: {
        name: 'Tactical Reload Quiz',
        complete: false,
        question: 'What are the steps for a tactical reload?',
        responses: [
          {
            text:
              'Remove spare magazine, release used magazine into palm, insert new magazine and place old magazine in pouch',
            correct: true,
          },
          {
            text: 'Funny joke wrong answer #1',
            correct: false,
          },
          {
            text: 'Common mistake wrong answer #1',
            correct: false,
          },
          {
            text: 'Funny joke wrong answer #2',
            correct: false,
          },
        ],
      },
      flashcard: {
        name: 'Tactical Reload Flashcard',
        complete: false,
        question: 'What are the steps for a tactical reload?',
        answer:
          'Remove spare magazine, release used magazine into palm and remove, insert new magazine and place old magazine in pouch',
      },
      video: {
        url: 'https://www.youtube.com/embed/Rx6qo5cydM4',
      },
    },
    kimura: {
      id: 2,
      name: 'speedReload',
      displayName: 'Speed Reload',
      favorite: false,
      quiz: {
        name: 'Speed Reload Quiz',
        complete: false,
        question: 'How do you execute a speed reload?',
        responses: [
          {
            text:
              'Shift pistol, put thumb on mag release, withdraw new mag, release used mag, flat on flat, insert new mag',
            correct: true,
          },
          {
            text: 'Funny joke wrong answer #1',
            correct: false,
          },
          {
            text: 'Common mistake wrong answer #1',
            correct: false,
          },
          {
            text: 'Funny joke wrong answer #2',
            correct: false,
          },
        ],
      },
      flashcard: {
        name: 'Speed Reload Flashcard',
        complete: false,
        question: 'How do you execute a speed reload?',
        answer:
          'Shift pistol, put thumb on mag release, withdraw new mag, release used mag, flat on flat, insert new mag',
      },
      video: {
        url: 'https://www.youtube.com/embed/RxJMGPZrlq8',
      },
    },
    naturalPointOfAim: {
      id: 3,
      name: 'naturalPointOfAim',
      displayName: 'Natural Point of Aim',
      favorite: false,
      quiz: {
        name: 'Natural Point of Aim Quiz',
        question: 'What is the Natural Point of Aim',
        responses: [
          {
            text:
              'Natural Point of Aim occurs when your body position is helping you align the sights with the threat.',
            correct: true,
          },
          {
            text: 'Funny joke wrong answer #1',
            correct: false,
          },
          {
            text: 'Common mistake wrong answer #1',
            correct: false,
          },
          {
            text: 'Funny joke wrong answer #2',
            correct: false,
          },
        ],
        complete: false,
      },
      flashcard: {
        name: 'Natural Point of Aim',
        complete: false,
        question: 'What is the Natural Point of Aim?',
        answer:
          'Natural Point of Aim occurs when your body position is helping you align the sights with the threat.',
      },
      video: {
        url: 'https://www.youtube.com/embed/9d6Uq7z14ss',
      },
    },
    conditionsOfReadiness: {
      id: 4,
      name: 'conditionsOfReadiness',
      displayName: 'Conditions of Readiness',
      favorite: false,
      quiz: {
        name: 'Conditions of Readiness Quiz',
        complete: false,
        question: 'How many conditions of pistol readiness are there?',
        responses: [
          {
            text: 'Four',
            correct: true,
          },
          {
            text: 'Funny joke wrong answer #1',
            correct: false,
          },
          {
            text: 'Common mistake wrong answer #1',
            correct: false,
          },
          {
            text: 'Funny joke wrong answer #2',
            correct: false,
          },
        ],
      },
      flashcard: {
        name: 'Conditions of Readiness',
        complete: false,
        question: 'How many conditions of pistol readiness are there?',
        answer: 'There are four conditions of pistol readiness',
      },
      video: {
        url: 'https://www.youtube.com/embed/Se6EJXWPLKY',
      },
    },
    weaverStance: {
      id: 5,
      name: 'weaverStance',
      displayName: 'Weaver Stance',
      favorite: false,
      quiz: {
        name: 'Weaver Stance Quiz',
        complete: false,
        question:
          'The Weaver Stane is a balanced fighting stance akin to a _____',
        responses: [
          {
            text: 'Boxer',
            correct: true,
          },
          {
            text: 'Funny joke wrong answer #1',
            correct: false,
          },
          {
            text: 'Common mistake wrong answer #1',
            correct: false,
          },
          {
            text: 'Funny joke wrong answer #2',
            correct: false,
          },
        ],
      },
      flashcard: {
        name: 'Weaver Stance Flashcard',
        complete: false,
        question: 'What kind of stance is the Weaver Stance?',
        answer: 'A balance fighting stance, similar to a boxer',
      },
      video: {
        url: 'https://www.youtube.com/embed/i0ZfNsm0_ks',
      },
    },
    readyPosition: {
      id: 6,
      name: 'readyPosition',
      displayName: 'The Ready Position',
      favorite: false,
      quiz: {
        name: 'Ready Position Quiz',
        complete: false,
        question: 'What is the Ready Position?',
        responses: [
          {
            text:
              'The Ready Position is Weaver Stance but with arms lowerd 45 degrees',
            correct: true,
          },
          {
            text: 'Funny joke wrong answer #1',
            correct: false,
          },
          {
            text: 'Common mistake wrong answer #1',
            correct: false,
          },
          {
            text: 'Funny joke wrong answer #2',
            correct: false,
          },
        ],
      },
      flashcard: {
        name: 'Ready Position Flashcard',
        complete: false,
        question: 'What is the Ready Position?',
        answer:
          'The Ready Position is Weaver Stance but with arms lowerd 45 degrees',
      },
      video: {
        url: 'https://www.youtube.com/embed/oATKlh_UKR4',
      },
    },
    failureToEject: {
      id: 7,
      name: 'failureToEject',
      displayName: 'Failure To Eject (Stove Pipe)',
      favorite: false,
      quiz: {
        name: 'Failure to Eject Quiz',
        complete: false,
        question:
          'What is the immediate action for a Failure to Eject (Stove Pipe)',
        responses: [
          {
            text: 'Tap Roll and Rack',
            correct: true,
          },
          {
            text: 'Funny joke wrong answer #1',
            correct: false,
          },
          {
            text: 'Common mistake wrong answer #1',
            correct: false,
          },
          {
            text: 'Funny joke wrong answer #2',
            correct: false,
          },
        ],
      },
      flashcard: {
        name: 'Failure to Eject Flashcard',
        complete: false,
        question:
          'What is the immediate action for a Failure to Eject (Stove Pipe)',
        answer: 'Tap Roll and Rack',
      },
      video: {
        url: 'https://www.youtube.com/embed/xsEeTm8SvWY',
      },
    },
    failureToFire: {
      id: 8,
      name: 'failureToFire',
      displayName: 'Failure To Fire',
      favorite: false,
      quiz: {
        name: 'Failure to Fire Quiz',
        complete: false,
        question: 'What are the two main causes of Failure to Fire',
        responses: [
          {
            text: 'Magazine not seated fully or faulty ammo',
            correct: true,
          },
          {
            text: 'Funny joke wrong answer #1',
            correct: false,
          },
          {
            text: 'Common mistake wrong answer #1',
            correct: false,
          },
          {
            text: 'Funny joke wrong answer #2',
            correct: false,
          },
        ],
      },
      flashcard: {
        name: 'Failure to Fire Flashcard',
        complete: false,
        question: 'What are the two main causes of Failure to Fire',
        answer: 'Magazine not seated fully or faulty ammo',
      },
      video: {
        url: 'https://www.youtube.com/embed/C_uAP9AMa08',
      },
    },
  };

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient, private ehs: ErrorHandlingService) {}

  login(payload: any) {
    this.userData = payload.data;
    this.isLoggedIn = true;
    localStorage.setItem(
      'currentUser',
      JSON.stringify({
        userId: payload.data.attributes.sub,
        username: payload.data.username,
      })
    );
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('currentUser');
  }

  checkLocalStorage() {
    if (localStorage.getItem('currentUser')) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  addUser(payload: any): Observable<any> {
    const user = {
      userId: payload.data.userSub,
      username: payload.data.user.username.toLowerCase(),
      techniques: this.techniques,
    };
    const url =
      'https://o7qz9dt15c.execute-api.us-east-1.amazonaws.com/Production/users';
    return this.http
      .post<any>(url, user, this.httpOptions)
      .pipe(catchError(this.ehs.handleError<any>('addUser HTTP post error')));
  }
}
