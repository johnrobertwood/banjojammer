import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const techniques = [
      {
        id: 11,
        name: 'Armbar',
      },
      {
        id: 12,
        name: 'Triangle',
      },
      {
        id: 13,
        name: 'Kimura',
      },
      {
        id: 14,
        name: 'Rear Naked Choke',
      },
      {
        id: 15,
        name: 'Omoplata',
      },
      {
        id: 16,
        name: 'Guillotine',
      },
      {
        id: 17,
        name: 'Head and Arm Choke',
      },
      {
        id: 18,
        name: 'Americana',
      },
      {
        id: 19,
        name: 'Straight Armlock',
      },
      {
        id: 20,
        name: 'Straight Kneebar',
      },
      {
        id: 21,
        name: 'Rolling',
      },
    ];

    const quizzes = [
      {
        id: 11,
        name: 'Armbar',
        favorite: false,
        quiz: {
          id: 11,
          name: 'Armbar Quiz',
          complete: false,
          question: 'First move of armbar?',
          responses: [
            {
              text:
                'Same side wrist grip, cross arm behind the tricep and pull arm across your body',
              correct: true,
            },
            {
              text: 'Cross grip wrist, same side underhook leg',
              correct: false,
            },
            { text: 'Shoot hips up', correct: false },
            { text: 'Sweep the leg', correct: false },
          ],
        },
        flashcard: {
          id: 11,
          name: 'Armbar',
          complete: false,
          question: 'What is the armbar postion?',
          answer: 'Cross grip pull over body',
        },
        video: {
          url: 'https://www.youtube.com/embed/pQ43Oy5k9yQ',
        },
      },
      {
        id: 12,
        name: 'Triangle',
        quiz: {
          id: 12,
          name: 'Triangle Quiz',
          complete: false,
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
        },
        flashcard: {
          id: 12,
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
      {
        id: 13,
        name: 'Kimura',
        quiz: {
          id: 13,
          name: 'Kimura Quiz',
          complete: false,
          question: 'Kimura works from many different positions',
          responses: [
            { text: 'True', correct: true },
            { text: 'False', correct: false },
          ],
        },
        flashcard: {
          id: 13,
          name: 'Kimura',
          complete: false,
          question:
            'True or False: Kimura works in a large variety of different positions?',
          answer:
            'True, Kimura is a great control technique in many different guard and attack positions',
        },
        video: {
          url: 'https://www.youtube.com/embed/mVkKOPNGvjA',
        },
      },
      {
        id: 14,
        name: 'Rear Naked Choke',
        quiz: {
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
        flashcard: {
          id: 14,
          name: 'Rear Naked Choke',
          complete: false,
          question: 'Steps to finish a Rear Naked Choke?',
          answer:
            'Finish RNC with bottom arm choking, ear to ear in tight then arch hips',
        },
        video: {
          url: 'https://youtube.com/embed/X5OrEPQCrjk',
        },
      },
      {
        id: 15,
        name: 'Omoplata',
        quiz: {
          id: 15,
          name: 'Omoplata Quiz',
          complete: false,
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
        },
        flashcard: {
          id: 15,
          name: 'Omoplata',
          complete: false,
          question: 'Direction to point knees on Omoplata finish',
          answer: 'Point knees away from opponent',
        },
        video: {
          url: 'https://www.youtube.com/embed/tfvEGtSCIRI',
        },
      },
      {
        id: 16,
        name: 'Guillotine',
        quiz: {
          id: 16,
          name: 'Guillotine Quiz',
          complete: false,
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
        },
        flashcard: {
          id: 16,
          name: 'Guillotine',
          complete: false,
          question: 'How to finish a guillotine',
          answer: 'Crunch in with arms and squeeze, don"t pull',
        },
        video: {
          url: 'https://www.youtube.com/embed/UbcqJETDUY8',
        },
      },
      {
        id: 17,
        name: 'Head and Arm Choke',
        quiz: {
          id: 17,
          name: 'Head and Arm Choke Quiz',
          complete: false,
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
        },
        flashcard: {
          id: 17,
          name: 'Head and Arm Choke',
          complete: false,
          question: 'What is the finish for head and arm choke',
          answer: 'Sink with the hips and flatten out low',
        },
        video: {
          url: 'https://www.youtube.com/embed/xWR68zc-3GE',
        },
      },
      {
        id: 18,
        name: 'Americana',
        quiz: {
          id: 18,
          name: 'Americana Quiz',
          complete: false,
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
        },
        flashcard: {
          id: 18,
          name: 'Americana',
          complete: false,
          question: 'How to finish an Americana',
          answer: 'Bring his arm down towards his hip',
        },
        video: {
          url: 'https://www.youtube.com/embed/FNyL93v5fGs',
        },
      },
      {
        id: 19,
        name: 'Straight Armlock',
        quiz: {
          id: 19,
          name: 'Straight Armlock Quiz',
          complete: false,
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
        },
        flashcard: {
          id: 19,
          name: 'Straight Arm Lock',
          complete: false,
          question: 'Works with which other arm locks?',
          answer: 'Americana or kimura',
        },
        video: {
          url: 'https://www.youtube.com/embed/iPnQx-6RYpU',
        },
      },
      {
        id: 20,
        name: 'Straight Kneebar',
        quiz: {
          id: 20,
          name: 'Straight Kneebar Quiz',
          complete: false,
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
        },
        flashcard: {
          id: 20,
          name: 'Straight Knee Bar',
          complete: false,
          question: 'The Straight Knee Bar is IBJJF legal?',
          answer: 'True',
        },
        video: {
          url: 'https://www.youtube.com/embed/1UYJRNqW5Ao',
        },
      },
      {
        id: 21,
        name: 'John and Mike Rolling',
        quiz: {
          id: 21,
          name: 'John and Mike Rolling Quiz',
          complete: false,
          question: 'How many triangles did John attempt',
          responses: [
            {
              text: '3',
              correct: false,
            },
            {
              text: '2',
              correct: true,
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
          id: 20,
          name: 'John and Mike Rolling',
          complete: false,
          question: 'Did John hit a perfect deep half sweep?',
          answer: 'Yes',
        },
        video: {
          url: 'https://www.youtube.com/embed/_0c66vMmR2Q',
        },
      },
    ];

    return { techniques, quizzes };
  }

  // Overrides the genId method to ensure that a technique always has an id.
  // If the techniques array is empty,
  // the method below returns the initial number (11).
  // if the techniques array is not empty, the method below returns the highest
  // technique id + 1.
  // genId(techniques: Technique[]): number {
  //   return techniques.length > 0
  //     ? Math.max(...techniques.map((technique) => technique.id)) + 1
  //     : 11;
  // }
}
