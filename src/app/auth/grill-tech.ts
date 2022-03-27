const grillTech = {
  bravoFlipChoke: {
    id: 0,
    name: 'bravoFlipChoke',
    displayName: 'Bravo Flip Choke',
    prevTechnique: null,
    nextTechnique: null,
    quiz: {
      complete: false,
      question: 'How do you execute a knee slice from closed guard?',
      responses: [
        {
          text: 'Stand up, knee in the middle, turn knee down, underhook and slice',
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
      question: 'What are the keys for knee slice from closed guard?',
      answer:
        'Stand up, knee in the middle, turn knee down, underhook and slice',
    },
    notes: [
      {
        text: 'Grips create angles of attack and set up opportunities for other moves',
      },
      {
        text: 'Types include mirror collar or cross collar and high / low collar grip',
      },
      {
        text: 'Mirror grip can be patient, cross collar you need to shake and attack',
      },
      {
        text: 'High collar to hang on them and hold their head down',
      },
      {
        text: 'Reach with first hand to fish, then follow up with the other hand to grab a mirror',
      },
      {
        text: 'Reach with first hand to fish to flare the lapel out then jab stiff arm mirror grip',
      },
      {
        text: 'Use the stiff arm mirror to move them around and control',
      },
    ],
    video: {
      url: 'https://www.youtube.com/embed/1i92oa6jLsA',
      thumbnail: 'https://img.youtube.com/vi/1i92oa6jLsA/mqdefault.jpg',
    },
  },
};

export default grillTech;
