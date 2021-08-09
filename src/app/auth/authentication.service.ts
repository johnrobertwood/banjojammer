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
      id: 40,
      name: 'presentation',
      displayName: 'Presentation',
      prevTechnique: null,
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
      nextTechnique: 'loadAndMakeReady',
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
    loadAndMakeReady: {
      id: 90,
      name: 'loadAndMakeReady',
      displayName: 'Load and Make Ready',
      prevTechnique: 'shootingAroundObstacles',
      nextTechnique: 'unloadAndMakeSafe',
      favorite: false,
      flashcard: {
        name: 'Load and Make Ready Flashcard',
        complete: false,
        question: 'What are the steps to load and make ready?',
        answer:
          'Bring into your workstation, get a mag, insert and drive the pistol forward to rack the slide',
      },
      video: {
        code: '578978794',
        thumbnail:
          '2bbe1a0e-1658-4fce-b61a-2259caa60435.gif?ClientID=vimeo-core-prod&Date=1628487036&Signature=a97f7b1ae7cdc0c054e8565332a2fb179ea0def3',
      },
    },
    unloadAndMakeSafe: {
      id: 100,
      name: 'unloadAndMakeSafe',
      displayName: 'Unload and Make Safe',
      prevTechnique: 'loadAndMakeReady',
      nextTechnique: null,
      favorite: false,
      flashcard: {
        name: 'Unload and Make Safe Flashcard',
        complete: false,
        question: 'What are the steps to unload and make safe?',
        answer:
          'Shift grip and release mag, lock slide to rear, check chamber, release slide',
      },
      video: {
        code: '584709997',
        thumbnail:
          'd86d9e96-1592-4b7c-8770-6cd668c17c33.gif?ClientID=vimeo-core-prod&Date=1628486975&Signature=891fed9841af6cb40f9820160e04de35bbaae50b',
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
