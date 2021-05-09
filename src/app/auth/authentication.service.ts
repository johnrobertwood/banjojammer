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
      id: 66,
      name: 'safety',
      displayName: 'Safety',
      favorite: false,
      quiz: {
        name: 'Safety Quiz',
        complete: false,
        question: 'What are the 4 rules for safe handling of firearms?',
        responses: [
          {
            text:
              'All Guns are Always Loaded, Never let the muzzle cover anything you are not willing to destroy, Keep your finger off the trigger until your sights are on the target, Be sure of your target',
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
        name: 'Safety Flashcard',
        complete: false,
        question: 'What are the 4 rules for safe gun handling?',
        answer:
          'All Guns are Always Loaded, Never let the muzzle cover anything you are not willing to destroy, Keep your finger off the trigger until your sights are on the target, Be sure of your target',
      },
      video: {
        url: 'https://www.youtube.com/embed/yT_X1cCGD3g',
      },
    },
    combatTriad: {
      id: 76,
      name: 'combatTriad',
      displayName: 'The Combat Triad',
      favorite: false,
      quiz: {
        name: 'Combat Triad Quiz',
        complete: false,
        question: 'What are the three elements of the combat triad?',
        responses: [
          {
            text: 'Mindset, Gun Handling and Practical Marksmanship',
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
        name: 'Combat Triad Flashcard',
        complete: false,
        question: 'What are the three elements of the combat triad?',
        answer: 'Mindset, Gun Handling and Practical Marksmanship',
      },
      video: {
        url: 'https://www.youtube.com/embed/nRLjbG-9zvU',
      },
    },
    presentation: {
      id: 96,
      name: 'presentation',
      displayName: 'Presentation',
      favorite: false,
      quiz: {
        name: 'Presentation Quiz',
        complete: false,
        question: 'What are the 5 counts or steps of the presentation?',
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
    modernTechnique: {
      id: 106,
      name: 'modernTechnique',
      displayName: 'Modern Technique',
      favorite: false,
      quiz: {
        name: 'Modern Technique Quiz',
        complete: false,
        question: 'What are the elements of the Modern Technique?',
        responses: [
          {
            text:
              'Efficient Presentation to a Two Handed Weaver Grip, Flash Sight Picture and Compressed Surprise Break on a Heavy Duty Pistol',
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
        name: 'Modern Technique Flashcard',
        complete: false,
        question: 'What are the elements of the Modern Technique?',
        answer:
          'Efficient Presentation to a Two Handed Weaver Grip, Flash Sight Picture and Compressed Surprise Break with a Heavy Duty Pistol',
      },
      video: {
        url: 'https://www.youtube.com/embed/i0ZfNsm0_ks',
      },
    },
    conditionCheck: {
      id: 116,
      name: 'conditionCheck',
      displayName: 'Condition Check',
      favorite: false,
      quiz: {
        name: 'Condition Check Quiz',
        complete: false,
        question: 'What are the elements of the Condition Check?',
        responses: [
          {
            text: 'Chamber check and magazine check by touch',
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
        name: 'Chamber Check Flashcard',
        complete: false,
        question: 'What are the elements of the Condition Check?',
        answer: 'Chamber check and magazine check by touch',
      },
      video: {
        url: 'https://www.youtube.com/embed/3g51qvhy6fc',
      },
    },

    tacticalReload: {
      id: 146,
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
    speedReload: {
      id: 156,
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
              'Shift pistol in hand, put thumb on mag release, withdraw new mag, release used mag, flat on flat, insert new mag',
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
          'Shift pistol in hand, put thumb on mag release, withdraw new mag, release used mag, flat on flat, insert new mag',
      },
      video: {
        url: 'https://www.youtube.com/embed/RxJMGPZrlq8',
      },
    },
    naturalPointOfAim: {
      id: 166,
      name: 'naturalPointOfAim',
      displayName: 'Natural Point of Aim',
      favorite: false,
      quiz: {
        name: 'Natural Point of Aim Quiz',
        question: 'What is the Natural Point of Aim?',
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
        name: 'Natural Point of Aim Flashcard',
        complete: false,
        question: 'What is the Natural Point of Aim?',
        answer:
          'Natural Point of Aim occurs when your body position is helping you align the sights with the threat.',
      },
      video: {
        url: 'https://www.youtube.com/embed/9d6Uq7z14ss',
      },
    },
    supportedKneeling: {
      id: 176,
      name: 'supportedKneeling',
      displayName: 'Supported Kneeling',
      favorite: false,
      quiz: {
        name: 'Supported Kneeling Quiz',
        question:
          'What are the 2 steps to enter the Supported or Braced Kneeling position',
        responses: [
          {
            text:
              'On COUNT 1 of the Presentation ("GRIP") the support-side foot steps forward and across the midline of the body.  As the pistol leaves the holster the torso drops down and the buttocks is rested on the firing side heel',
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
        name: 'Supported Kneeling Flashcard',
        complete: false,
        question:
          'What are the 2 steps to enter the Supported Kneeling position',
        answer:
          'On COUNT 1 of the Presentation ("GRIP") the support-side foot steps forward and across the midline of the body.  As the pistol leaves the holster the torso drops down and the buttocks is rested on the firing side heel',
      },
      video: {
        url: 'https://www.youtube.com/embed/5g1v7y07dFg',
      },
    },
    speedKneeling: {
      id: 186,
      name: 'speedKneeling',
      displayName: 'Speed Kneeling',
      favorite: false,
      quiz: {
        name: 'Speed Kneeling Quiz',
        question:
          'Speed Kneeling is essentially an unsupported variation of which other kneeling position?',
        responses: [
          {
            text: 'Supported Kneeling',
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
        name: 'Speed Kneeling Flashcard',
        complete: false,
        question:
          'Speed kneeling is an unsupported variation of which other kneeling position?',
        answer:
          'Speed Kneeling is an unsupported version of Supported Kneeling',
      },
      video: {
        url: 'https://www.youtube.com/embed/0ecn11AUP2w',
      },
    },
    doubleKneeling: {
      id: 196,
      name: 'doubleKneeling',
      displayName: 'Double Kneeling',
      favorite: false,
      quiz: {
        name: 'Double Kneeling Quiz',
        question: 'How do you enter the Double Kneeling position?',
        responses: [
          {
            text:
              'With the pistol at the ready position, lower your body in a controlled manner until both knees are on the ground',
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
        name: 'Double Kneeling Flashcard',
        complete: false,
        question: 'How do you enter the Double Kneeling position?',
        answer:
          'With the pistol at the ready position, lower your body in a controlled manner until both knees are on the ground',
      },
      video: {
        url: 'https://www.youtube.com/embed/wpiAwbfc8Xw',
      },
    },
    shootingAroundObstacles: {
      id: 206,
      name: 'shootingAroundObstacles',
      displayName: 'Shooting Around Obstacles',
      favorite: false,
      quiz: {
        name: 'Shooting Around Obstacles Quiz',
        question:
          'What are the tactical pointers for shooting around obstacles?',
        responses: [
          {
            text:
              'Distance is your friend, pie the corners, expose only what is necessary and do not rely on quick peeks',
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
        name: 'Shooting Around Obstacles Flashcard',
        complete: false,
        question:
          'What are the tactical pointers for shooting around obstacles?',
        answer:
          'Distance is your friend, pie the corners, expose only what is necessary and do not rely on quick peeks',
      },
      video: {
        url: 'https://www.youtube.com/embed/k874fSPmPy0',
      },
    },
    conditionsOfReadiness: {
      id: 116,
      name: 'conditionsOfReadiness',
      displayName: 'Conditions of Readiness',
      favorite: false,
      quiz: {
        name: 'Conditions of Readiness Quiz',
        complete: false,
        question:
          'What is the correct condition to carry the single-action pistol?',
        responses: [
          {
            text: 'Condition ONE',
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
        question:
          'What is the correct condition to carry the single-action pistol?',
        answer: 'Condition ONE',
      },
      video: {
        url: 'https://www.youtube.com/embed/nBDIHwybtew',
      },
    },
    weaverStance: {
      id: 86,
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
      id: 136,
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
      id: 126,
      name: 'failureToFire',
      displayName: 'Failure To Fire',
      favorite: false,
      quiz: {
        name: 'Failure to Fire Quiz',
        complete: false,
        question: 'What are the two main causes of Failure to Fire?',
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
        question: 'What are the two main causes of Failure to Fire?',
        answer: 'Magazine not seated fully or faulty ammo',
      },
      video: {
        url: 'https://www.youtube.com/embed/C_uAP9AMa08',
      },
    },
    doubleFeed: {
      id: 146,
      name: 'doubleFeed',
      displayName: 'The Double Feed',
      favorite: false,
      quiz: {
        name: 'Double Feed Quiz',
        complete: false,
        question:
          'What should you do when a Tap Roll and Rack fails to clear the malfunction?',
        responses: [
          {
            text: 'Initiate a double feed clearance',
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
        name: 'Double Feed Flashcard',
        complete: false,
        question:
          'What should you do when a Tap Roll and Rack fails to clear the malfunction?',
        answer: 'Initiate a double feed clearance',
      },
      video: {
        url: 'https://www.youtube.com/embed/BxTcQV-4R9w',
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
