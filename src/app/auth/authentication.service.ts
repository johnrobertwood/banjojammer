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
        url: 'https://www.youtube.com/embed/pQ43Oy5k9yQ',
        thumbnail: 'https://img.youtube.com/vi/pQ43Oy5k9yQ/0.jpg',
        videoId: 'pQ43Oy5k9yQ',
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
        url: 'https://www.youtube.com/embed/oVvEQeasAxQ',
        thumbnail: 'https://img.youtube.com/vi/oVvEQeasAxQ/0.jpg',
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
        url: 'https://www.youtube.com/embed/mVkKOPNGvjA',
        thumbnail: 'https://img.youtube.com/vi/mVkKOPNGvjA/0.jpg',
      },
    },
    rearNakedChoke: {
      id: 3,
      name: 'rearNakedChoke',
      displayName: 'Rear Naked Choke',
      favorite: false,
      quiz: {
        name: 'Rear Naked Choke Quiz',
        question:
          'How do you break his grip to finish choke when opponent is holding your hands?',
        responses: [
          {
            text: 'Push his thumb to peel one hand, then pull his other hand and finish',
            correct: true,
          },
          {
            text: 'Squeeze as hard as possible',
            correct: false,
          },
          {
            text: 'Cover his mouth to restrict breathing',
            correct: false,
          },
          {
            text: 'Strike their windpipe with a knifehand',
            correct: false,
          },
        ],
        complete: false,
      },
      flashcard: {
        name: 'Rear Naked Choke',
        complete: false,
        question: 'Steps to finish a Rear Naked Choke?',
        answer:
          'Hold tight with seatbelt, gable grip to lift up chin, gable grip the other side then slide arm across neck',
      },
      video: {
        url: 'https://www.youtube.com/embed/lZnST9hNkNU',
        thumbnail: 'https://img.youtube.com/vi/lZnST9hNkNU/0.jpg',
      },
    },
    omoplata: {
      id: 4,
      name: 'omoplata',
      displayName: 'Omoplata',
      favorite: false,
      quiz: {
        name: 'Omoplata Quiz',
        complete: false,
        question: 'What are the two variations of Omoplata from closed guard?',
        responses: [
          {
            text: 'Traditional (clamping with bent knees) and Marceloplata (kicking with straight leg)',
            correct: true,
          },
          {
            text: 'American and Brazilian',
            correct: false,
          },
          {
            text: 'Original or Extra Crispy',
            correct: false,
          },
          {
            text: 'Mounted or Half Guard',
            correct: false,
          },
        ],
      },
      flashcard: {
        name: 'Omoplata',
        complete: false,
        question: 'What are the two variations of Omoplata from closed guard?',
        answer:
          'Traditional (clamping with bent knees) and Marceloplata (kicking with straight leg)',
      },
      video: {
        url: 'https://www.youtube.com/embed/LVy4tGv5Fk4',
        thumbnail: 'https://img.youtube.com/vi/LVy4tGv5Fk4/0.jpg',
      },
    },
    guillotine: {
      id: 5,
      name: 'guillotine',
      displayName: 'Guillotine',
      favorite: false,
      quiz: {
        name: 'Guillotine Quiz',
        complete: false,
        question:
          'True or False: To finish a guillotine you lean straight back while pulling on the head',
        responses: [
          {
            text: 'True',
            correct: false,
          },
          {
            text: 'False',
            correct: true,
          },
        ],
      },
      flashcard: {
        name: 'Guillotine',
        complete: false,
        question: 'How can you stop the pass when sitting back on guillotine?',
        answer:
          'Use a high leg to block his hips and a high elbow on the choke to block his upper body',
      },
      video: {
        url: 'https://www.youtube.com/embed/DPKhbTth0So',
        thumbnail: 'https://img.youtube.com/vi/DPKhbTth0So/0.jpg',
      },
    },
    headAndArmChoke: {
      id: 6,
      name: 'headAndArmChoke',
      displayName: 'Head and Arm Choke',
      favorite: false,
      quiz: {
        name: 'Head and Arm Choke Quiz',
        complete: false,
        question: 'What is the setup for Head and Arm from side control',
        responses: [
          {
            text: 'Put your head on the mat with his arm trapped then reach your crossface arm deep for the gable grip',
            correct: true,
          },
          {
            text: 'Switch your hips for reverse kesa gatame side control and step over to mount',
            correct: false,
          },
          {
            text: 'Lift up on your toes then move to north south position',
            correct: false,
          },
          {
            text: 'Hop up to knee on belly then windshield wiper leg to get mount',
            correct: false,
          },
        ],
      },
      flashcard: {
        name: 'Head and Arm Choke',
        complete: false,
        question: 'What is the finish for head and arm choke',
        answer:
          'Sink the hips, flatten out low and apply squeeze while being patient',
      },
      video: {
        url: 'https://www.youtube.com/embed/Hw8-59qdvnU',
        thumbnail: 'https://img.youtube.com/vi/Hw8-59qdvnU/0.jpg',
      },
    },
    defendingAmericana: {
      id: 7,
      name: 'defendingAmericana',
      displayName: 'Defending Americana',
      favorite: false,
      quiz: {
        name: 'Defending Americana Quiz',
        complete: false,
        question:
          'To defend the Americana you turn towards the arm and suck it in towards your body',
        responses: [
          {
            text: 'True',
            correct: true,
          },
          {
            text: 'False',
            correct: false,
          },
        ],
      },
      flashcard: {
        name: 'Americana',
        complete: false,
        question: 'How do you defend an Americana when it is already deep?',
        answer: 'Bridge and then suck in the arm while pusing his elbow',
      },
      video: {
        url: 'https://www.youtube.com/embed/FNyL93v5fGs',
        thumbnail: 'https://img.youtube.com/vi/FNyL93v5fGs/0.jpg',
      },
    },
    straightArmlock: {
      id: 8,
      name: 'straightArmlock',
      displayName: 'Straight Armlock',
      favorite: false,
      quiz: {
        name: 'Straight Armlock Quiz',
        complete: false,
        question:
          'To finish the straight arm lock, put one hand on mat and use the other to turn his wrist',
        responses: [
          {
            text: 'True',
            correct: true,
          },
          {
            text: 'False',
            correct: false,
          },
        ],
      },
      flashcard: {
        name: 'Straight Arm Lock',
        complete: false,
        question: 'What are common mistake in finishing the straight arm lock?',
        answer:
          'Mistakes are your arms too far away from chest and using the double wrist lock',
      },
      video: {
        url: 'https://www.youtube.com/embed/rZNFFH2hpbo',
        thumbnail: 'https://img.youtube.com/vi/rZNFFH2hpbo/0.jpg',
      },
    },
    straightKneebar: {
      id: 9,
      name: 'straightKneebar',
      displayName: 'Straight Kneebar',
      favorite: false,
      quiz: {
        name: 'Straight Kneebar Quiz',
        complete: false,
        question:
          'What move should you fake to provoke a reaction for the knee bar entry?',
        responses: [
          {
            text: 'Kimura',
            correct: true,
          },
          {
            text: 'Americana',
            correct: false,
          },
          {
            text: 'Heel hook',
            correct: false,
          },
          {
            text: 'Triangle',
            correct: false,
          },
        ],
      },
      flashcard: {
        name: 'Straight Knee Bar Flashcard',
        complete: false,
        question: 'What position is a good start for the Straight Knee Bar?',
        answer: 'Works well from top half when opponent is up on his side',
      },
      video: {
        url: 'https://www.youtube.com/embed/1UYJRNqW5Ao',
        thumbnail: 'https://img.youtube.com/vi/1UYJRNqW5Ao/0.jpg',
      },
    },
    avoidDeepHalfGuard: {
      id: 10,
      name: 'avoidDeepHalfGuard',
      displayName: 'Avoid Deep Half Guard',
      favorite: false,
      quiz: {
        name: 'Avoid Deep Half Guard Quiz',
        complete: false,
        question:
          'What should you do to avoid getting stuck in deep half guard?',
        responses: [
          {
            text: 'Sprawl, use a crossface and pummel your foot inside his calf',
            correct: true,
          },
          {
            text: 'Keep hips in tight and keep head down',
            correct: false,
          },
          {
            text: 'Posture up and limp arm out',
            correct: false,
          },
          {
            text: 'Put hands on the mat and shrimp away',
            correct: false,
          },
        ],
      },
      flashcard: {
        name: 'Half Guard Sweep Flashcard',
        complete: false,
        question: 'What should you do to avoid getting stuck deep half guard?',
        answer: 'Sprawl, use a crossface and pummel your foot inside his calf',
      },
      video: {
        url: 'https://www.youtube.com/embed/FNaMku7pjDU',
        thumbnail: 'https://img.youtube.com/vi/FNaMku7pjDU/0.jpg',
      },
    },
    scissorSweep: {
      id: 11,
      name: 'scissorSweep',
      displayName: 'Scissor Sweep',
      favorite: false,
      quiz: {
        name: 'Scissor Sweep Quiz',
        complete: false,
        question:
          'What is the position for scissor sweep when opponent lifts leg and postures',
        responses: [
          {
            text: 'Stay flat and butterfly the outside leg',
            correct: false,
          },
          {
            text: 'Open guard and lift hips. Go onto shoulder to create space and then pull him onto you',
            correct: true,
          },
          {
            text: 'Kick straight out with top leg and drop bottom leg like a prostitute',
            correct: false,
          },
          {
            text: 'Swim under then grab around the waist',
            correct: false,
          },
        ],
      },
      flashcard: {
        name: 'Scissor Sweep Flashcard',
        complete: false,
        question: 'What is the correct leg position for scissor sweep',
        answer:
          'Bottom leg with calf against his knee, top leg is strong with shin across his waist',
      },
      video: {
        url: 'https://www.youtube.com/embed/X-PA21_0xTg',
        thumbnail: 'https://img.youtube.com/vi/X-PA21_0xTg/0.jpg',
      },
    },
    heelHookDefense: {
      id: 12,
      name: 'heelHookDefense',
      displayName: 'Heel Hook Defense',
      favorite: false,
      quiz: {
        name: 'Heel Hook Defense Quiz',
        complete: false,
        question: 'How do you defend the inside heel hook?',
        responses: [
          {
            text: 'Straighten your leg',
            correct: false,
          },
          {
            text: 'Hide your heel',
            correct: false,
          },
          {
            text: 'Post up and elevate your hips',
            correct: false,
          },
          {
            text: 'All of the above',
            correct: true,
          },
        ],
      },
      flashcard: {
        name: 'Heel Hook Defense Flashcard',
        complete: false,
        question: 'How do you defend the inside heel hook',
        answer:
          'Get your leg straight, hide your heel, hips up and push them back on their shoulder',
      },
      video: {
        url: 'https://www.youtube.com/embed/w-W0ug7Edag',
        thumbnail: 'https://img.youtube.com/vi/w-W0ug7Edag/0.jpg',
      },
    },
    triangleEscape: {
      id: 13,
      name: 'triangleEscape',
      displayName: 'Triangle Escape',
      favorite: false,
      quiz: {
        name: 'Triangle Escape Quiz',
        complete: false,
        question: 'How do you escape the late front triangle?',
        responses: [
          {
            text: 'Lock hands to create space and posture',
            correct: false,
          },
          {
            text: 'Extend arms and stand up',
            correct: false,
          },
          {
            text: 'Step both legs over and sit back with feet up on his chest',
            correct: false,
          },
          {
            text: 'All of the above',
            correct: true,
          },
        ],
      },
      flashcard: {
        name: 'Triangle Escape',
        complete: false,
        question: 'Triangle Escape Flashcard',
        answer:
          'Lock hands, posture up to standing then step both legs on their chest',
      },
      video: {
        url: 'https://www.youtube.com/embed/od-lcD_34f8',
        thumbnail: 'https://img.youtube.com/vi/od-lcD_34f8/0.jpg',
      },
    },
    armbarDefense: {
      id: 14,
      name: 'armbarDefense',
      displayName: 'Armbar Defense',
      favorite: false,
      quiz: {
        name: 'Armbar Defense Quiz',
        complete: false,
        question: 'How do you escape the armbar?',
        responses: [
          {
            text: 'Keep arms crossed then bridge up on knees to come on top',
            correct: true,
          },
          {
            text: 'Stay flat on back while shrimping',
            correct: true,
          },
          {
            text: 'Stand up and pull arm out in one motion',
            correct: false,
          },
          {
            text: 'Roll away with shoulder and arm extended',
            correct: false,
          },
        ],
      },
      flashcard: {
        name: 'Armbar Defense Flashcard',
        complete: false,
        question: 'What are the armbar defense steps?',
        answer:
          'Keep arms crossed then bridge up to knees. Stack and pull elbow out in little spurts',
      },
      video: {
        url: 'https://www.youtube.com/embed/zwNOXB8GQ3w',
        thumbnail: 'https://img.youtube.com/vi/zwNOXB8GQ3w/0.jpg',
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
