import { Technique } from '../techniques/technique';

export const grillTech: Technique[] = [
  {
    id: 0,
    name: 'bravoFlipChoke',
    displayName: 'Bravo Flip Choke',
    prevTechnique: null,
    nextTechnique: 'unstoppableNoGiGuardSequence',
    quiz: {
      complete: false,
      question:
        'How do you execute a Bravo Flip Choke when opponent is turtled?',
      responses: [
        {
          text: 'Remove lapel, pass over his back in front of his face, then bring other hand around to dig under and grab lapel to flip',
          correct: true,
        },
        {
          text: 'Stand up, knee in middle, push with hand on legs to mount',
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
      complete: false,
      question:
        'How do you execute a Bravo Flip Choke when opponent is turtled?',
      answer:
        'Remove his lapel, pass it over his back in front of his face, then bring other hand around to dig under and grab lapel to flip',
    },
    notes: [
      {
        text: 'Pull out opponents lapel and get the slack out',
      },
      {
        text: 'Pass lapel over his back and in front of shoulder, keeping tension',
      },
      {
        text: 'Other hand goes around and digs under their arm and neck to find the collar',
      },
      {
        text: 'Use the grip to flip, cup his head and dig elbow to stuff his arm for the choke finish',
      },
    ],
    video: {
      url: 'https://www.youtube.com/embed/1i92oa6jLsA',
      thumbnail: 'https://img.youtube.com/vi/1i92oa6jLsA/mqdefault.jpg',
    },
  },
  {
    id: 0,
    name: 'unstoppableNoGiGuardSequence',
    displayName: 'Unstoppable No Gi Guard Sequence',
    prevTechnique: 'bravoFlipChoke',
    nextTechnique: null,
    quiz: {
      complete: false,
      question: 'What is the Unstoppable No Gi Guard Sequence?',
      responses: [
        {
          text: '',
          correct: true,
        },
        {
          text: 'Stand up, knee in middle, push with hand on legs to mount',
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
      complete: false,
      question:
        'How do you execute a Bravo Flip Choke when opponent is turtled?',
      answer:
        'Remove his lapel, pass it over his back in front of his face, then bring other hand around to dig under and grab lapel to flip',
    },
    notes: [
      {
        text: 'Make your partner feel comfortable but use your Batman blade frames',
      },
      {
        text: 'Keep your feet in play so you can back up',
      },
      {
        text: 'Jab one, two to double grip his arm, then straigten his arm out',
      },
      {
        text: 'Finish by sitting up, reaching around to grab his lat wing and turn into a takedown or use a darce to sweep',
      },
    ],
    video: {
      url: 'https://www.youtube.com/embed/_WNDZPwzLyk',
      thumbnail: 'https://img.youtube.com/vi/_WNDZPwzLyk/mqdefault.jpg',
    },
  },
];

export default grillTech;
