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
        favorite: false,
        quiz: {
          id: 11,
          name: 'Armbar Quiz',
          complete: false,
          question:
            'What are the important body part elements for entering to the armbar position?',
          responses: [
            {
              text:
                'Controlling his head and pulling his elbow inside your hip',
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
          id: 11,
          name: 'Armbar',
          complete: false,
          question: 'What is the body position for entering an armbar?',
          answer: 'Controlling his head, pulling his elbow inside our hips',
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
          id: 13,
          name: 'Kimura',
          complete: false,
          question: 'What is the first step of Kimura from closed guard?',
          answer: 'Get his hands on the mat',
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
          id: 14,
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
      {
        id: 15,
        name: 'Omoplata',
        quiz: {
          id: 15,
          name: 'Omoplata Quiz',
          complete: false,
          question:
            'What are the two variations of Omoplata from closed guard?',
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
          id: 15,
          name: 'Omoplata',
          complete: false,
          question:
            'What are the two variations of Omoplata from closed guard?',
          answer:
            'Traditional (clamping with bent knees) and Marceloplata (kicking with straight leg)',
        },
        video: {
          url: 'https://www.youtube.com/embed/LVy4tGv5Fk4',
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
            'True or False: To finish a guillotine you lean back while pulling on the head',
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
          id: 16,
          name: 'Guillotine',
          complete: false,
          question:
            'How can you stop the pass when sitting back on guillotine?',
          answer:
            'Use a high leg to block his hips and a high elbow choke to block his upper body',
        },
        video: {
          url: 'https://www.youtube.com/embed/DPKhbTth0So',
        },
      },
      {
        id: 17,
        name: 'Head and Arm Choke',
        quiz: {
          id: 17,
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
          id: 17,
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
      {
        id: 18,
        name: 'Defending Americana',
        quiz: {
          id: 18,
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
          id: 18,
          name: 'Americana',
          complete: false,
          question: 'How do you defend an Americana when it is already deep?',
          answer: 'Bridge and then suck in the arm while pusing his elbow',
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
          id: 19,
          name: 'Straight Arm Lock',
          complete: false,
          question:
            'What are common mistake in finishing the straight arm lock?',
          answer:
            'Having your arms too far away from chest and using the double wrist lock',
        },
        video: {
          url: 'https://www.youtube.com/embed/rZNFFH2hpbo',
        },
      },
      {
        id: 20,
        name: 'Straight Kneebar',
        quiz: {
          id: 20,
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
          id: 20,
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
          id: 20,
          name: 'John and Mike Rolling',
          complete: false,
          question: 'What sweep did John use?',
          answer: 'Deep half-guard sweep',
        },
        video: {
          url: 'https://www.youtube.com/embed/_0c66vMmR2Q',
        },
      },
    ];

    return { techniques };
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
