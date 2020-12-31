import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Technique } from './techniques/technique';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const techniques = [
      { id: 11, name: 'Armbar' },
      { id: 12, name: 'Triangle' },
      { id: 13, name: 'Kimura' },
      { id: 14, name: 'Rear Naked Choke' },
      { id: 15, name: 'Omoplata' },
      { id: 16, name: 'Guillotine' },
      { id: 17, name: 'Head and Arm Choke' },
      { id: 18, name: 'Americana' },
      { id: 19, name: 'Straight Armlock' },
      { id: 20, name: 'Straight Kneebar' },
      { id: 21, name: 'Armbar2' },
      { id: 22, name: 'Triangle2' },
      { id: 23, name: 'Kimura2' },
      { id: 24, name: 'Rear Naked Choke2' },
      { id: 25, name: 'Omoplata2' },
      { id: 26, name: 'Guillotine2' },
      { id: 27, name: 'Head and Arm Choke2' },
      { id: 28, name: 'Americana2' },
      { id: 29, name: 'Straight Armlock2' },
      { id: 30, name: 'Straight Kneebar2' },
    ];

    const quizzes = [
      {
        id: 11,
        name: 'Armbar Quiz',
        question: 'First move of armbar',
        responses: [
          {
            text: 'Same side wrist grip, cross arm behind the tricep',
            correct: true,
          },
          { text: 'Cross grip wrist, same side underhook leg', correct: false },
          { text: 'Shoot hips up', correct: false },
          { text: 'Sweep the leg', correct: false },
        ],
      },

      {
        id: 12,
        name: 'Triangle Quiz',
        question: 'What is the triangle?',
        responses: [
          { text: 'This is a correct answer (a)', correct: true },
          { text: 'This is an incorrect answer (b)', correct: false },
          { text: 'This is answer c', correct: false },
          { text: 'This is answer d', correct: false },
        ],
      },
      {
        id: 13,
        name: 'Kimura Quiz',
        question: 'Kimura works from many different positions',
        responses: [
          { text: 'True', correct: true },
          { text: 'False', correct: false },
        ],
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
            text: 'Top arm choking',
            correct: false,
          },
        ],
      },
      {
        id: 15,
        name: 'Omoplata Quiz',
        question: 'What is first move of Omoplata',
        responses: [
          {
            text: 'Put oppponents hand in your pocket',
            correct: true,
          },
          {
            text: 'Wrong answer',
            correct: false,
          },
        ],
      },
      { id: 16, name: 'Guillotine Quiz' },
      { id: 17, name: 'Head and Arm Choke Quiz' },
      { id: 18, name: 'Americana Quiz' },
      { id: 19, name: 'Straight Armlock Quiz' },
      { id: 20, name: 'Straight Kneebar Quiz' },
    ];

    const flashcards = [
      {
        id: 11,
        name: 'Armbar',
        question: 'What is the armbar postion?',
        answer: 'Cross grip pull over body',
      },
      {
        id: 12,
        name: 'Triangle',
        question: 'What is the triangle key points?',
        answer: 'Stuff one hand and pull the other',
      },
      {
        id: 13,
        name: 'Kimura',
        question:
          'True or False: Kimura works in a large variety of different positions?',
        answer:
          'True, Kimura is a great control technique in many different guard and attack positions',
      },
      {
        id: 14,
        name: 'Rear Naked Choke',
        question: 'Steps to finish a Rear Naked Choke?',
        answer:
          'Finish RNC with bottom arm choking, ear to ear in tight then arch hips',
      },
      {
        id: 15,
        name: 'Omoplata',
        question: 'Direction to point feet on Omoplata finish',
        answer: 'Point feet away from opponent',
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
        url: 'https://www.youtube.com/embed/LppnEfRoFIM',
      },
      {
        id: 15,
        url: 'https://www.youtube.com/embed/tfvEGtSCIRI',
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
