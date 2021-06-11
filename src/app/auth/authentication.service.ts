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
      name: 'safetyWithFirearms',
      displayName: 'Safety With Firearms',
      favorite: false,
      quiz: {
        name: 'Safety With Firearms Quiz',
        complete: false,
        question: 'What is the 1st rule for safe handling of firearms?',
        responses: [
          {
            text: 'All Guns are Always Loaded',
            correct: true,
          },
          {
            text: 'Always be sure of your target',
            correct: false,
          },
          {
            text: 'Never let the muzzle cover anything you are not willing to destroy',
            correct: false,
          },
          {
            text: 'Keep your booger hook off the bang switch till your sights are on target',
            correct: false,
          },
        ],
      },
      flashcard: {
        name: 'Safety With Firearms Flashcard',
        complete: false,
        question: 'What are the 4 rules for safe gun handling?',
        answer:
          'All Guns are Always Loaded, Never let the muzzle cover anything you are not willing to destroy, Keep your finger off the trigger until your sights are on the target, Be sure of your target',
      },
      video: {
        url: 'https://www.youtube.com/embed/yT_X1cCGD3g',
        thumbnail: 'https://img.youtube.com/vi/yT_X1cCGD3g/0.jpg',
        videoId: 'pQ43Oy5k9yQ',
      },
    },
    modernTechnique: {
      id: 1,
      name: 'modernTechnique',
      displayName: 'Modern Technique',
      favorite: false,
      quiz: {
        name: 'Modern Technique Quiz',
        complete: false,
        question: 'What are the elements of the Modern Technique?',
        responses: [
          {
            text: 'Efficient presentation with a two handed grip, flash sight picture and compressed surprise break on a heavy duty pistol',
            correct: true,
          },
          {
            text: 'Isosceles triangle stance, red dot sight, polymer pistol',
            correct: false,
          },
          {
            text: 'Small caliber micro compact, ankle holster and pepper spray',
            correct: false,
          },
          {
            text: 'Situational awareness, combat mindset and cargo shorts',
            correct: false,
          },
        ],
      },
      flashcard: {
        name: 'Modern Technique Flashcard',
        complete: false,
        question: 'What are the elements of the Modern Technique?',
        answer:
          'Efficient presentation with a two handed grip, flash sight picture and compressed surprise break on a heavy duty pistol',
      },
      video: {
        url: 'https://www.youtube.com/embed/i0ZfNsm0_ks',
        thumbnail: 'https://img.youtube.com/vi/i0ZfNsm0_ks/0.jpg',
      },
    },
    combatTriad: {
      id: 2,
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
            text: 'Fixed blade knife, first aid kit and extra magazine',
            correct: false,
          },
          {
            text: 'Heavy duty pistol, jiu jitsu, steel toe boots',
            correct: false,
          },
          {
            text: '1000 yard stare, leather hoster and operator beard',
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
        thumbnail: 'https://img.youtube.com/vi/nRLjbG-9zvU/0.jpg',
      },
    },
    readyPosition: {
      id: 4,
      name: 'readyPosition',
      displayName: 'The Ready Position',
      favorite: false,
      quiz: {
        name: 'Ready Position Quiz',
        complete: false,
        question: 'What is the Ready Position?',
        responses: [
          {
            text: 'Gun drawn, arms lowered 45 degrees, finger off trigger',
            correct: true,
          },
          {
            text: 'Gun up, sights on target and finger on trigger',
            correct: false,
          },
          {
            text: 'Gun holstered, hands up and weight forward',
            correct: false,
          },
          {
            text: 'Leaning back slightly with a one handed grip',
            correct: false,
          },
        ],
      },
      flashcard: {
        name: 'Ready Position Flashcard',
        complete: false,
        question: 'What is the Ready Position?',
        answer: 'Gun drawn, arms lowered at 45 degrees, finger off trigger',
      },
      video: {
        url: 'https://www.youtube.com/embed/oATKlh_UKR4',
        thumbnail: 'https://img.youtube.com/vi/oATKlh_UKR4/0.jpg',
      },
    },
    presentation: {
      id: 5,
      name: 'presentation',
      displayName: 'Presentation',
      favorite: false,
      quiz: {
        name: 'Presentation Quiz',
        complete: false,
        question: 'What are the 5 counts or steps of the presentation?',
        responses: [
          {
            text: 'Grip, clear, click, smack, look',
            correct: true,
          },
          {
            text: 'Look, step, reach, draw, kneel',
            correct: false,
          },
          {
            text: 'Spin, duck, draw, point, click',
            correct: false,
          },
          {
            text: 'Hop, skip, jump, sit, shoot',
            correct: false,
          },
        ],
      },
      flashcard: {
        name: 'Presentation Flashcard',
        complete: false,
        question: 'What are the 5 counts of the presentation?',
        answer: 'Grip, clear, click, smack, look',
      },
      video: {
        url: 'https://www.youtube.com/embed/fBcdQhTOPY8',
        thumbnail: 'https://img.youtube.com/vi/fBcdQhTOPY8/0.jpg',
      },
    },
    conditionCheck: {
      id: 7,
      name: 'conditionCheck',
      displayName: 'Condition Check',
      favorite: false,
      quiz: {
        name: 'Condition Check Quiz',
        complete: false,
        question: 'What are the elements of the Condition Check?',
        responses: [
          {
            text: 'Chamber check and magazine check by sight and touch',
            correct: true,
          },
          {
            text: 'Visual only chamber and magazine check',
            correct: false,
          },
          {
            text: 'Inspecting the pistol for damage',
            correct: false,
          },
          {
            text: 'Removing the magazine and racking the slide 5-6 times',
            correct: false,
          },
        ],
      },
      flashcard: {
        name: 'Chamber Check Flashcard',
        complete: false,
        question: 'What are the elements of the Condition Check?',
        answer: 'Chamber check and magazine check by sight and touch',
      },
      video: {
        url: 'https://www.youtube.com/embed/3g51qvhy6fc',
        thumbnail: 'https://img.youtube.com/vi/3g51qvhy6fc/0.jpg',
      },
    },
    pistolUnloading: {
      id: 8,
      name: 'pistolUnloading',
      displayName: 'Pistol Unloading',
      favorite: false,
      quiz: {
        name: 'Pistol Unloading Quiz',
        complete: false,
        question: 'What is the proper method to unload a pistol?',
        responses: [
          {
            text: 'Remove the magazine and lock the slide back. Visually and physically inspect chamber then control the slide forward',
            correct: true,
          },
          {
            text: 'Rack the slide, remove the magazine and press the trigger',
            correct: false,
          },
          {
            text: 'Rack the slide until the pistol is empty',
            correct: false,
          },
          {
            text: 'Remove the magazine and look into the muzzle with a flashlight',
            correct: false,
          },
        ],
      },
      flashcard: {
        name: 'Pistol Unloading Flashcard',
        complete: false,
        question: 'What is the proper method to unload a pistol?',
        answer:
          'Remove the magazine and lock the slide back. Visually and physically inspect chamber then control the slide forward',
      },
      video: {
        url: 'https://www.youtube.com/embed/m9UDlyT4lHM',
        thumbnail: 'https://img.youtube.com/vi/m9UDlyT4lHM/0.jpg',
      },
    },
    failureToFire: {
      id: 9,
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
            text: 'Bent firing pin and no trigger discipline',
            correct: false,
          },
          {
            text: 'Limp wristing',
            correct: false,
          },
          {
            text: 'Ejection port jam',
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
        thumbnail: 'https://img.youtube.com/vi/C_uAP9AMa08/0.jpg',
      },
    },
    doubleFeed: {
      id: 10,
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
            text: 'Lock the slide back, stip out the magazine and do 3 Tap Roll Racks',
            correct: true,
          },
          {
            text: 'Keep doing Tap Roll and Racks until it is clear',
            correct: false,
          },
          {
            text: 'Pry the rounds out with your fingers',
            correct: false,
          },
          {
            text: 'Perform a speed reload',
            correct: false,
          },
        ],
      },
      flashcard: {
        name: 'Double Feed Flashcard',
        complete: false,
        question:
          'What should you do when a Tap Roll and Rack fails to clear the malfunction?',
        answer:
          'Lock the slide back, stip out the magazine and do 3 tap, roll, racks',
      },
      video: {
        url: 'https://player.vimeo.com/video/556981700',
        thumbnail: 'https://img.youtube.com/vi/BxTcQV-4R9w/0.jpg',
      },
    },
    failureToEject: {
      id: 11,
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
            text: 'Tactical reload',
            correct: false,
          },
          {
            text: 'Strip out the magazine and lock the slide back',
            correct: false,
          },
          {
            text: 'Quickly rack the slide 3 times',
            correct: false,
          },
        ],
      },
      flashcard: {
        name: 'Failure to Eject Flashcard',
        complete: false,
        question:
          'What is the immediate action for a Failure to Eject (Stove Pipe)',
        answer: 'Tap roll and rack',
      },
      video: {
        url: 'https://www.youtube.com/embed/xsEeTm8SvWY',
        thumbnail: 'https://img.youtube.com/vi/xsEeTm8SvWY/0.jpg',
      },
    },
    tacticalReload: {
      id: 12,
      name: 'tacticalReload',
      displayName: 'Tactical Reload',
      favorite: false,
      quiz: {
        name: 'Tactical Reload Quiz',
        complete: false,
        question: 'What are the steps for a tactical reload?',
        responses: [
          {
            text: 'Grab a spare magazine, release used magazine into palm, insert new magazine and save old magazine',
            correct: true,
          },
          {
            text: 'Remove used magazine, replace in mag holster then grab new magazine and speed load it',
            correct: false,
          },
          {
            text: 'Lock the slide back, drop the old magazine and speed load the new magazine',
            correct: false,
          },
          {
            text: 'Remove used magazine, put pistol under your arm and top off the mag',
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
        url: 'https://player.vimeo.com/video/556958374',
        thumbnail: 'https://img.youtube.com/vi/Rx6qo5cydM4/0.jpg',
      },
    },
    speedReload: {
      id: 13,
      name: 'speedReload',
      displayName: 'Speed Reload',
      favorite: false,
      quiz: {
        name: 'Speed Reload Quiz',
        complete: false,
        question: 'How do you execute a speed reload?',
        responses: [
          {
            text: 'Shift pistol in hand, put thumb on mag release, withdraw new mag, release used mag, flat on flat, insert new mag',
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
        url: 'https://player.vimeo.com/video/556939734',
        url2: 'https://player.vimeo.com/video/556958374',
        thumbnail: 'https://img.youtube.com/vi/RxJMGPZrlq8/0.jpg',
      },
    },
    naturalPointOfAim: {
      id: 14,
      name: 'naturalPointOfAim',
      displayName: 'Natural Point of Aim',
      favorite: false,
      quiz: {
        name: 'Natural Point of Aim Quiz',
        question: 'What is the Natural Point of Aim?',
        responses: [
          {
            text: 'It occurs when your body position is helping you align the sights with the threat.',
            correct: true,
          },
          {
            text: 'It is always 6 inches below your sight picture',
            correct: false,
          },
          {
            text: 'It is the same in every position',
            correct: false,
          },
          {
            text: 'Natural point of aim only works with a red dot sight',
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
        thumbnail: 'https://img.youtube.com/vi/9d6Uq7z14ss/0.jpg',
      },
    },
    supportedKneeling: {
      id: 15,
      name: 'supportedKneeling',
      displayName: 'Supported Kneeling',
      favorite: false,
      quiz: {
        name: 'Supported Kneeling Quiz',
        question:
          'What are the 2 steps to enter the Supported or Braced Kneeling position',
        responses: [
          {
            text: 'Support-side foot steps forward and across the midline of the body.  Squat down and rest your butt on your heel and elbow on knee',
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
          'Support-side foot steps forward and across the midline of the body.  Squat down and rest your butt on your heel and elbow on knee',
      },
      video: {
        url: 'https://www.youtube.com/embed/5g1v7y07dFg',
        thumbnail: 'https://img.youtube.com/vi/5g1v7y07dFg/0.jpg',
      },
    },
    speedKneeling: {
      id: 16,
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
            text: 'Double knee kneeling',
            correct: false,
          },
          {
            text: 'Combat base',
            correct: false,
          },
          {
            text: 'Cross leg seated',
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
        thumbnail: 'https://img.youtube.com/vi/0ecn11AUP2w/0.jpg',
      },
    },
    doubleKneeling: {
      id: 17,
      name: 'doubleKneeling',
      displayName: 'Double Kneeling',
      favorite: false,
      quiz: {
        name: 'Double Kneeling Quiz',
        question: 'How do you enter the Double Kneeling position?',
        responses: [
          {
            text: 'With the pistol at the ready position, lower your body until both knees are on the ground',
            correct: true,
          },
          {
            text: 'Enter the speed kneeling position, draw to ready and then put other knee down',
            correct: false,
          },
          {
            text: 'Enter the prone position, then pop up to kneeling',
            correct: false,
          },
          {
            text: 'Spread legs apart, pivot on heels and bend your knees',
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
          'With the pistol at the ready position, lower your body until both knees are on the ground',
      },
      video: {
        url: 'https://www.youtube.com/embed/wpiAwbfc8Xw',
        thumbnail: 'https://img.youtube.com/vi/wpiAwbfc8Xw/0.jpg',
      },
    },
    shootingAroundObstacles: {
      id: 18,
      name: 'shootingAroundObstacles',
      displayName: 'Shooting Around Obstacles',
      favorite: false,
      quiz: {
        name: 'Shooting Around Obstacles Quiz',
        question:
          'What are the tactical pointers for shooting around obstacles?',
        responses: [
          {
            text: 'Distance is your friend, pie the corners, expose only what is necessary and do not rely on quick peeks',
            correct: true,
          },
          {
            text: 'Shoot and scoot',
            correct: false,
          },
          {
            text: 'Slang and bang',
            correct: false,
          },
          {
            text: 'Run and gun',
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
        thumbnail: 'https://img.youtube.com/vi/k874fSPmPy0/0.jpg',
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
