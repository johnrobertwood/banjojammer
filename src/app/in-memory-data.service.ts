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
      { id: 13, name: 'Kimura Quiz' },
      { id: 14, name: 'Rear Naked Choke Quiz' },
      { id: 15, name: 'Omoplata Quiz' },
      { id: 16, name: 'Guillotine Quiz' },
      { id: 17, name: 'Head and Arm Choke Quiz' },
      { id: 18, name: 'Americana Quiz' },
      { id: 19, name: 'Straight Armlock Quiz' },
      { id: 20, name: 'Straight Kneebar Quiz' },
    ];

    const histories = [
      { id: 11, name: 'Monday' },
      { id: 12, name: 'Tuesday' },
      { id: 13, name: 'Wednesday' },
      { id: 14, name: 'Thursday' },
      { id: 15, name: 'Friday' },
      { id: 16, name: 'Saturday' },
      { id: 17, name: 'Sunday' },
    ];
    return { techniques, quizzes, histories };
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
