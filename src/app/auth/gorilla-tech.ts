const gorillaTech = {
  baseballChoke: {
    id: 0,
    name: 'baseballChoke',
    displayName: 'Baseball Choke',
    prevTechnique: null,
    nextTechnique: null,
    quiz: {
      complete: false,
      question: 'How do you execute the baseball choke?',
      responses: [
        {
          text: 'Get the four finger lapel grip, make space to insert grip on other side of neck, bring elbow across neck and squeeze choke',

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
      question: 'What are the keys for baseball choke?',
      answer: '',
    },
    notes: [
      {
        text: 'Works against pressure pass because you have time to make the grip setup',
      },
      {
        text: 'Push and frame to get four finger grips on near side and make space to get grip on top of gi from other side of his neck',
      },
      {
        text: 'When he sprawls and comes accross, upa and bring your elbow across his neck',
      },
      {
        text: 'Squeeze and turn the collar choke to finish',
      },
      {
        text: 'Can setup the four finger grip from guard being lazy for the setup',
      },
    ],
    video: {
      url: 'https://www.youtube.com/embed/k3GN886_CYE',
      thumbnail: 'https://img.youtube.com/vi/k3GN886_CYE/mqdefault.jpg',
    },
  },
};

export default gorillaTech;
