import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Technique } from './techniques/technique';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const techniques = [
      {
        id: 11,
        name: 'Armbar',
        favorite: false,
        quizzed: false,
        flashcarded: false,
      },
      {
        id: 12,
        name: 'Triangle',
        favorite: false,
        quizzed: false,
        flashcarded: false,
      },
      {
        id: 13,
        name: 'Kimura',
        favorite: false,
        quizzed: false,
        flashcarded: false,
      },
      {
        id: 14,
        name: 'Rear Naked Choke',
        favorite: false,
        quizzed: false,
        flashcarded: false,
      },
      {
        id: 15,
        name: 'Omoplata',
        favorite: false,
        quizzed: false,
        flashcarded: false,
      },
      {
        id: 16,
        name: 'Guillotine',
        favorite: false,
        quizzed: false,
        flashcarded: false,
      },
      {
        id: 17,
        name: 'Head and Arm Choke',
        favorite: false,
        quizzed: false,
        flashcarded: false,
      },
      {
        id: 18,
        name: 'Americana',
        favorite: false,
        quizzed: false,
        flashcarded: false,
      },
      {
        id: 19,
        name: 'Straight Armlock',
        favorite: false,
        quizzed: false,
        flashcarded: false,
      },
      {
        id: 20,
        name: 'Straight Kneebar',
        favorite: false,
        quizzed: false,
        flashcarded: false,
      },
    ];

    const quizzes = [
      {
        id: 11,
        name: 'Armbar Quiz',
        question: 'First move of armbar?',
        responses: [
          {
            text:
              'Same side wrist grip, cross arm behind the tricep and pull arm across your body',
            correct: true,
          },
          { text: 'Cross grip wrist, same side underhook leg', correct: false },
          { text: 'Shoot hips up', correct: false },
          { text: 'Sweep the leg', correct: false },
        ],
        complete: false,
      },

      {
        id: 12,
        name: 'Triangle Quiz',
        question: 'What are the triangle finishing steps?',
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
        complete: false,
      },
      {
        id: 13,
        name: 'Kimura Quiz',
        question: 'Kimura works from many different positions',
        responses: [
          { text: 'True', correct: true },
          { text: 'False', correct: false },
        ],
        complete: false,
      },
      {
        id: 14,
        name: 'Rear Naked Choke Quiz',
        question: 'How do you finish a RNC',
        responses: [
          {
            text:
              'Bottom arm chokes, ear to ear, staying tight while arching and extending with hips',
            correct: true,
          },
          {
            text: 'Top arm choking, crossing feet for control',
            correct: false,
          },
          {
            text: 'Remove hooks and sit forward',
            correct: false,
          },
          {
            text: 'Strike their windpipe with a knifehand',
            correct: false,
          },
        ],
        complete: false,
      },
      {
        id: 15,
        name: 'Omoplata Quiz',
        question: 'What is first move of Omoplata?',
        responses: [
          {
            text: 'Put oppponents hand in your pocket and triangle their arm',
            correct: true,
          },
          {
            text: 'Butterfly guard with double underhooks',
            correct: false,
          },
          {
            text: 'Butt scoot to berimbolo',
            correct: false,
          },
        ],
        complete: false,
      },
      {
        id: 16,
        name: 'Guillotine Quiz',
        question:
          'True or False: To finish a guillotine you crunch in and squeeze',
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
        complete: false,
      },
      {
        id: 17,
        name: 'Head and Arm Choke Quiz',
        question: 'What is the final step to finish arm triangle choke?',
        responses: [
          {
            text: 'Sink the hips low and flatten out',
            correct: true,
          },
          {
            text: 'Crank their face',
            correct: false,
          },
          {
            text: 'Lift up on your toes',
            correct: false,
          },
          {
            text: 'Explode up with your hips',
            correct: false,
          },
        ],
        complete: false,
      },
      {
        id: 18,
        name: 'Americana Quiz',
        question: 'T/F Americana works best when his elbow is near his hip',
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
        complete: false,
      },
      {
        id: 19,
        name: 'Straight Armlock Quiz',
        question: 'T/F Straight arm lock goes well with Americana',
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
        complete: false,
      },
      {
        id: 20,
        name: 'Straight Kneebar Quiz',
        question: 'T/F Straight knee bar is IBJJF legal',
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
        complete: false,
      },
    ];

    const flashcards = [
      {
        id: 11,
        name: 'Armbar',
        question: 'What is the armbar postion?',
        answer: 'Cross grip pull over body',
        complete: false,
      },
      {
        id: 12,
        name: 'Triangle',
        question: 'What is the triangle key points?',
        answer: 'Stuff one hand and pull the other',
        complete: false,
      },
      {
        id: 13,
        name: 'Kimura',
        question:
          'True or False: Kimura works in a large variety of different positions?',
        answer:
          'True, Kimura is a great control technique in many different guard and attack positions',
        complete: false,
      },
      {
        id: 14,
        name: 'Rear Naked Choke',
        question: 'Steps to finish a Rear Naked Choke?',
        answer:
          'Finish RNC with bottom arm choking, ear to ear in tight then arch hips',
        complete: false,
      },
      {
        id: 15,
        name: 'Omoplata',
        question: 'Direction to point knees on Omoplata finish',
        answer: 'Point knees away from opponent',
        complete: false,
      },
      {
        id: 16,
        name: 'Guillotine',
        question: 'How to finish a guillotine',
        answer: 'Crunch in with arms and squeeze, don"t pull',
        complete: false,
      },
      {
        id: 17,
        name: 'Head and Arm Choke',
        question: 'What is the finish for head and arm choke',
        answer: 'Sink with the hips and flatten out low',
        complete: false,
      },
      {
        id: 18,
        name: 'Americana',
        question: 'How to finish an Americana',
        answer: 'Bring his arm down towards his hip',
        complete: false,
      },
      {
        id: 19,
        name: 'Straight Arm Lock',
        question: 'Works with which other arm locks?',
        answer: 'Americana or kimura',
        complete: false,
      },
      {
        id: 20,
        name: 'Straight Knee Bar',
        question: 'The Straight Knee Bar is IBJJF legal?',
        answer: 'True',
        complete: false,
      },
    ];

    const videos = [
      {
        id: 11,
        url: 'https://www.youtube.com/embed/pQ43Oy5k9yQ',
      },
      {
        id: 12,
        url: 'https://www.youtube.com/embed/oVvEQeasAxQ',
      },
      {
        id: 13,
        url: 'https://www.youtube.com/embed/mVkKOPNGvjA',
      },
      {
        id: 14,
        url: 'https://youtube.com/embed/OxSm8RtRS8o',
      },
      {
        id: 15,
        url: 'https://www.youtube.com/embed/tfvEGtSCIRI',
      },
      {
        id: 16,
        url: 'https://www.youtube.com/embed/UbcqJETDUY8',
      },
      {
        id: 17,
        url: 'https://www.youtube.com/embed/xWR68zc-3GE',
      },
      {
        id: 18,
        url: 'https://www.youtube.com/embed/FNyL93v5fGs',
      },
      {
        id: 19,
        url: 'https://www.youtube.com/embed/iPnQx-6RYpU',
      },
      {
        id: 20,
        url: 'https://www.youtube.com/embed/1UYJRNqW5Ao',
      },
    ];

    return { techniques, quizzes, flashcards, videos };
  }

  // Overrides the genId method to ensure that a technique always has an id.
  // If the techniques array is empty,
  // the method below returns the initial number (11).
  // if the techniques array is not empty, the method below returns the highest
  // technique id + 1.
  genId(techniques: Technique[]): number {
    return techniques.length > 0
      ? Math.max(...techniques.map((technique) => technique.id)) + 1
      : 11;
  }
}
