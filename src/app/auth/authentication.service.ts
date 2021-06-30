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
    safety: {
      id: 0,
      name: 'bodyLockEscape',
      displayName: 'Body Lock Escape',
      prevTechnique: null,
      nextTechnique: 'smartStriking',
      favorite: false,
      flashcard: {
        name: 'Body Lock Escape Flashcard',
        complete: false,
        question: 'What is the body lock escape?',
        answer:
          'Sink down, step inside foot around and behind then lean back and stand tall',
      },
      video: {
        code: '569130514',
        thumbnail:
          '539a8740-44ad-4254-b5cb-01c8d35d31e6.gif?ClientID=vimeo-core-prod&Date=1625008784&Signature=70cd0de9faba7b089c0578fb49b11e941169bee9',
      },
    },
    smartStriking: {
      id: 10,
      name: 'smartStriking',
      displayName: 'Smart Striking',
      prevTechnique: 'bodyLockEscape',
      nextTechnique: 'frontChokeEscape',
      favorite: false,
      flashcard: {
        name: 'Smart Striking Flashcard',
        complete: false,
        question: 'What are the elements of the Smart Striking?',
        answer: 'Front kicks, face strikes, elbows and knees',
      },
      video: {
        code: '569106005',
        thumbnail:
          '02be6648-901e-442e-acd8-827ca7bf5346.gif?ClientID=vimeo-core-prod&Date=1625005134&Signature=ce4d407b08748d9337daf3c5e45b0a6d3d7dfe8d',
      },
    },
    frontChokeEscape: {
      id: 20,
      name: 'frontChokeEscape',
      displayName: 'The Front Choke Escape',
      prevTechnique: 'smartStriking',
      nextTechnique: 'sideHugEscape',
      favorite: false,
      flashcard: {
        name: 'Front Choke Escape Flashcard',
        complete: false,
        question: 'What are the three elements of the Front Choke Escape?',
        answer:
          'Bring your arms up high then bring your elbows down and break their grip',
      },
      video: {
        code: '569115499',
        thumbnail:
          '4586c7f4-9c3a-48a1-95b3-3e39b3a79691.gif?ClientID=vimeo-core-prod&Date=1625005705&Signature=4d2768520d2f4ccd0f679643e5eb0c1f9e711140',
      },
    },
    sideHugEscape: {
      id: 30,
      name: 'sideHugEscape',
      displayName: 'The Side Hug Escape',
      prevTechnique: 'frontChokeEscape',
      nextTechnique: 'presentation',
      favorite: false,
      flashcard: {
        name: 'Side Hug Escape Flashcard',
        complete: false,
        question: 'What is the Side Hug Escape?',
        answer:
          'Trap the arm hugging around your hip then step backwards to wrist lock',
      },
      video: {
        code: '569118142',
        thumbnail:
          '9c106bc8-ece5-4c92-99fb-6b28bb2eca93.gif?ClientID=vimeo-core-prod&Date=1625006162&Signature=ff9a3dbfe97a83f7f5c79f2877a625c2f2f4543d',
      },
    },
    presentation: {
      id: 40,
      name: 'presentation',
      displayName: 'Presentation',
      prevTechnique: 'sideHugEscape',
      nextTechnique: 'doubleFeed',
      favorite: false,
      flashcard: {
        name: 'Presentation Flashcard',
        complete: false,
        question: 'What are the 5 counts of the presentation?',
        answer: 'Grip, clear, rotate, connect, extend',
      },
      video: {
        code: '567776116',
        thumbnail:
          '6f3cc017-950d-4eab-a821-b2398a9fd03c.gif?ClientID=vimeo-core-prod&Date=1624907667&Signature=f820153e0ca94ec56181897c5bb6f23770e04a77',
      },
    },
    doubleFeed: {
      id: 50,
      name: 'doubleFeed',
      displayName: 'The Double Feed',
      prevTechnique: 'presentation',
      nextTechnique: 'tacticalReload',
      favorite: false,
      flashcard: {
        name: 'Double Feed Flashcard',
        complete: false,
        question:
          'What should you do when a Tap Roll and Rack fails to clear the malfunction?',
        answer:
          'Lock the slide back, stip out the magazine and do 3 tap, roll, racks',
      },
      video: {
        code: '556981700',
        thumbnail:
          '71fae51d-3dec-4c33-8110-c690811913a7.gif?ClientID=vimeo-core-prod&Date=1624908989&Signature=6098c567a40470f4302e54e7d947cc1ab3f868c3',
      },
    },
    tacticalReload: {
      id: 60,
      name: 'tacticalReload',
      displayName: 'Tactical Reload',
      prevTechnique: 'doubleFeed',
      nextTechnique: 'speedReload',
      favorite: false,
      flashcard: {
        name: 'Tactical Reload Flashcard',
        complete: false,
        question: 'What are the steps for a tactical reload?',
        answer:
          'Remove spare magazine, release used magazine into palm and remove, insert new magazine and place old magazine in pouch',
      },
      video: {
        code: '568553306',
        thumbnail:
          'b713601b-6a46-4615-b7b5-0d9310202f23.gif?ClientID=vimeo-core-prod&Date=1624908457&Signature=aef56cea9c4cbdfd4985830e889fa46a6b384179',
      },
    },
    speedReload: {
      id: 70,
      name: 'speedReload',
      displayName: 'Speed Reload',
      prevTechnique: 'tacticalReload',
      nextTechnique: 'shootingAroundObstacles',
      favorite: false,
      flashcard: {
        name: 'Speed Reload Flashcard',
        complete: false,
        question: 'How do you execute a speed reload?',
        answer:
          'Shift pistol in hand, put thumb on mag release, withdraw new mag, release used mag, flat on flat, insert new mag',
      },
      video: {
        code: '556939734',
        thumbnail:
          'f74a26c7-fb1a-46df-becb-1986bee2de51.gif?ClientID=vimeo-core-prod&Date=1624908704&Signature=37075fe6e20660876804df268e6629ab52c25673',
      },
    },
    shootingAroundObstacles: {
      id: 80,
      name: 'shootingAroundObstacles',
      displayName: 'Shooting Around Obstacles',
      prevTechnique: 'speedReload',
      nextTechnique: null,
      favorite: false,
      flashcard: {
        name: 'Shooting Around Obstacles Flashcard',
        complete: false,
        question:
          'What are the tactical pointers for shooting around obstacles?',
        answer:
          'Distance is your friend, pie the corners, expose only what is necessary and do not rely on quick peeks',
      },
      video: {
        code: '568554791',
        thumbnail:
          'b7df8567-b0b8-498c-a6ff-670c56661a5e.gif?ClientID=vimeo-core-prod&Date=1624908103&Signature=70586cc389bb9353705c03a2413683e9927a81dc',
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
