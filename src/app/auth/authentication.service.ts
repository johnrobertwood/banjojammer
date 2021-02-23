import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { MessageService } from 'src/app/message.service';

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
            text:
              'Underhook the leg, shin is horizontal across back of neck, pull head',
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
            text:
              'Get their hands on mat, grip the wrist low, lock your elbow out straight, shrimp out a little, elbows tight to finish with monkey grip',
            correct: true,
          },
          {
            text:
              'Hold tight with seatbelt, gable grip to lift up chin, gable grip the other side then slide arm across neck',
            correct: false,
          },
          {
            text:
              'Push his thumb to peel one hand, then pull his other hand and finish',
            correct: false,
          },
          {
            text:
              'Put your head on the map with his arm trapped then reach your crossface arm deep for the gable grip',
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
            text:
              'Push his thumb to peel one hand, then pull his other hand and finish',
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
            text:
              'Traditional (clamping with bent knees) and Marceloplata (kicking with straight leg)',
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
            correct: true,
          },
          {
            text: 'False',
            correct: false,
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
            text:
              'Put your head on the mat with his arm trapped then reach your crossface arm deep for the gable grip',
            correct: true,
          },
          {
            text:
              'Switch your hips for reverse kesa gatame side control and step over to mount',
            correct: false,
          },
          {
            text: 'Lift up on your toes then move to north south position',
            correct: false,
          },
          {
            text:
              'Hop up to knee on belly then windshield wiper leg to get mount',
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
          'Having your arms too far away from chest and using the double wrist lock',
      },
      video: {
        url: 'https://www.youtube.com/embed/rZNFFH2hpbo',
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
        name: 'Straight Knee Bar',
        complete: false,
        question:
          'The Straight Knee Bar works well from half guard when opponent is up on his side',
        answer: 'True',
      },
      video: {
        url: 'https://www.youtube.com/embed/1UYJRNqW5Ao',
      },
    },
    johnAndMikeRolling: {
      id: 10,
      name: 'johnAndMikeRolling',
      displayName: 'John and Mike Rolling',
      favorite: false,
      quiz: {
        name: 'John and Mike Rolling Quiz',
        complete: false,
        question: 'How many triangles did John attempt',
        responses: [
          {
            text: '3',
            correct: true,
          },
          {
            text: '2',
            correct: false,
          },
          {
            text: '1',
            correct: false,
          },
          {
            text: '0',
            correct: false,
          },
        ],
      },
      flashcard: {
        name: 'John and Mike Rolling',
        complete: false,
        question: 'What sweep did John use?',
        answer: 'Deep half-guard sweep',
      },
      video: {
        url: 'https://www.youtube.com/embed/_0c66vMmR2Q',
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
            text:
              'Open guard and lift hips. Go onto shoulder to create space and then pull him onto you',
            correct: true,
          },
          {
            text:
              'Kick straight out with top leg and drop bottom leg like a prostitute',
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
      },
    },
  };

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

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
    return this.http.post<any>(url, user, this.httpOptions).pipe(
      // tap((_) => console.log('added a new user!')),
      catchError(this.handleError<any>('addUser HTTP post error'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a TechniqueService message with the TechniqueMessage */
  private log(message: string) {
    this.messageService.add(`TechniqueService: ${message}`);
  }
}
