const greekTech = {
  dopeMount: {
    id: 0,
    name: 'dopeMount',
    displayName: 'Dope Mount',
    prevTechnique: null,
    nextTechnique: null,
    quiz: {
      complete: false,
      question: 'How do you do the Dope Mount?',
      responses: [
        {
          text: 'Walk towards his hips to wind him up, get a knee between his legs and slide over to mount',
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
      question: 'How do you do the Dope Mount?',
      answer:
        'Walk towards his hips to wind him up, get a knee between his legs and slide over to mount',
    },
    notes: [
      {
        text: 'Move around towards his hips and get knee between his legs',
      },
      {
        text: "Underhooks are good and put your head on the floor so he can't push you off",
      },
      {
        text: '1 knee is good 2 knees is better',
      },
      {
        text: 'Walk back to wind him up and then then get the mount',
      },
      {
        text: 'Catch the knee in middle if he turns into you or away in side control',
      },
    ],
    video: {
      url: 'https://www.youtube.com/embed/1ujz7K-JiNs',
      thumbnail: 'https://img.youtube.com/vi/1ujz7K-JiNs/mqdefault.jpg',
    },
  },
};

export default greekTech;
