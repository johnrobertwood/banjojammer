const basicTechniques = {
  armbar: {
    id: 0,
    name: 'armbar',
    displayName: 'Armbar',
    prevTechnique: null,
    nextTechnique: 'triangle',
    quiz: {
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
      complete: false,
      question: 'What is the body position for entering an armbar?',
      answer: 'Controlling his head, pulling his elbow inside our hips',
    },
    video: {
      url: 'https://www.youtube.com/embed/pQ43Oy5k9yQ',
      thumbnail: 'https://img.youtube.com/vi/pQ43Oy5k9yQ/mqdefault.jpg',
    },
  },
  triangle: {
    id: 1,
    name: 'triangle',
    displayName: 'Triangle',
    prevTechnique: 'armbar',
    nextTechnique: 'kimura',
    quiz: {
      complete: false,
      question: 'How do you lock up a triangle?',
      responses: [
        {
          text: 'Underhook the leg, shin is horizontal across back of neck, pull head',
          correct: true,
        },
        { text: 'Stay square and keep leg across back', correct: false },
        { text: 'Pull them onto their side and squeeze', correct: false },
        { text: 'Reach for kimura grip', correct: false },
      ],
    },
    flashcard: {
      complete: false,
      question: 'What are the triangle key points?',
      answer:
        'Push one hand and pull the other, shoot hips up, grab shin, underhook leg',
    },
    video: {
      url: 'https://www.youtube.com/embed/oVvEQeasAxQ',
      thumbnail: 'https://img.youtube.com/vi/oVvEQeasAxQ/mqdefault.jpg',
    },
  },
  kimura: {
    id: 2,
    name: 'kimura',
    displayName: 'Kimura',
    prevTechnique: 'triangle',
    nextTechnique: 'rearNakedChoke',
    quiz: {
      complete: false,
      question: 'What are the key body positions for a kimura from guard?',
      responses: [
        {
          text: 'Get their hands on mat, grip the wrist low, lock your elbow out straight, shrimp out a little, elbows tight to finish with monkey grip',
          correct: true,
        },
        {
          text: 'Hold tight with seatbelt, gable grip to lift up chin, gable grip the other side then slide arm across neck',
          correct: false,
        },
        {
          text: 'Push his thumb to peel one hand, then pull his other hand and finish',
          correct: false,
        },
        {
          text: 'Put your head on the map with his arm trapped then reach your crossface arm deep for the gable grip',
          correct: false,
        },
      ],
    },
    flashcard: {
      complete: false,
      question: 'What is the first step of Kimura from closed guard?',
      answer: 'Get his hands on the mat',
    },
    video: {
      url: 'https://www.youtube.com/embed/mVkKOPNGvjA',
      thumbnail: 'https://img.youtube.com/vi/mVkKOPNGvjA/mqdefault.jpg',
    },
  },
  rearNakedChoke: {
    id: 3,
    name: 'rearNakedChoke',
    displayName: 'Rear Naked Choke',
    prevTechnique: 'kimura',
    nextTechnique: 'omoplata',
    quiz: {
      complete: false,
      question:
        'How do you break his grip to finish choke when opponent is holding your hands?',
      responses: [
        {
          text: 'Push his thumb to peel one hand, then pull his other hand and finish',
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
    },
    flashcard: {
      complete: false,
      question: 'Steps to finish a Rear Naked Choke?',
      answer:
        'Hold tight with seatbelt, gable grip to lift up chin, gable grip the other side then slide arm across neck',
    },
    video: {
      url: 'https://www.youtube.com/embed/lZnST9hNkNU',
      thumbnail: 'https://img.youtube.com/vi/lZnST9hNkNU/mqdefault.jpg',
    },
  },
  omoplata: {
    id: 4,
    name: 'omoplata',
    displayName: 'Omoplata',
    prevTechnique: 'rearNakedChoke',
    nextTechnique: 'guillotine',
    quiz: {
      complete: false,
      question: 'What are the two variations of Omoplata from closed guard?',
      responses: [
        {
          text: 'Traditional (clamping with bent knees) and Marceloplata (kicking with straight leg)',
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
      complete: false,
      question: 'What are the two variations of Omoplata from closed guard?',
      answer:
        'Traditional (clamping with bent knees) and Marceloplata (kicking with straight leg)',
    },
    video: {
      url: 'https://www.youtube.com/embed/LVy4tGv5Fk4',
      thumbnail: 'https://img.youtube.com/vi/LVy4tGv5Fk4/mqdefault.jpg',
    },
  },
  guillotine: {
    id: 5,
    name: 'guillotine',
    displayName: 'Guillotine',
    prevTechnique: 'omoplata',
    nextTechnique: 'headAndArmChoke',
    quiz: {
      complete: false,
      question:
        'True or False: To finish a guillotine you lean straight back while pulling on the head',
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
      complete: false,
      question: 'How can you stop the pass when sitting back on guillotine?',
      answer:
        'Use a high leg to block his hips and a high elbow on the choke to block his upper body',
    },
    video: {
      url: 'https://www.youtube.com/embed/DPKhbTth0So',
      thumbnail: 'https://img.youtube.com/vi/DPKhbTth0So/mqdefault.jpg',
    },
  },
  headAndArmChoke: {
    id: 6,
    name: 'headAndArmChoke',
    displayName: 'Head and Arm Choke',
    prevTechnique: 'guillotine',
    nextTechnique: 'defendingAmericana',
    quiz: {
      complete: false,
      question: 'What is the setup for Head and Arm from side control',
      responses: [
        {
          text: 'Put your head on the mat with his arm trapped then reach your crossface arm deep for the gable grip',
          correct: true,
        },
        {
          text: 'Switch your hips for reverse kesa gatame side control and step over to mount',
          correct: false,
        },
        {
          text: 'Lift up on your toes then move to north south position',
          correct: false,
        },
        {
          text: 'Hop up to knee on belly then windshield wiper leg to get mount',
          correct: false,
        },
      ],
    },
    flashcard: {
      complete: false,
      question: 'What is the finish for head and arm choke',
      answer:
        'Sink the hips, flatten out low and apply squeeze while being patient',
    },
    video: {
      url: 'https://www.youtube.com/embed/Hw8-59qdvnU',
      thumbnail: 'https://img.youtube.com/vi/Hw8-59qdvnU/mqdefault.jpg',
    },
  },
  defendingAmericana: {
    id: 7,
    name: 'defendingAmericana',
    displayName: 'Defending Americana',
    prevTechnique: 'headAndArmChoke',
    nextTechnique: 'straightArmlock',
    quiz: {
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
      complete: false,
      question: 'How do you defend an Americana when it is already deep?',
      answer: 'Bridge and then suck in the arm while pusing his elbow',
    },
    video: {
      url: 'https://www.youtube.com/embed/FNyL93v5fGs',
      thumbnail: 'https://img.youtube.com/vi/FNyL93v5fGs/mqdefault.jpg',
    },
  },
  straightArmlock: {
    id: 8,
    name: 'straightArmlock',
    displayName: 'Straight Armlock',
    prevTechnique: 'defendingAmericana',
    nextTechnique: 'straightKneebar',
    quiz: {
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
      complete: false,
      question: 'What are common mistake in finishing the straight arm lock?',
      answer:
        'Mistakes are your arms too far away from chest and using the double wrist lock',
    },
    video: {
      url: 'https://www.youtube.com/embed/rZNFFH2hpbo',
      thumbnail: 'https://img.youtube.com/vi/rZNFFH2hpbo/mqdefault.jpg',
    },
  },
  straightKneebar: {
    id: 9,
    name: 'straightKneebar',
    displayName: 'Straight Kneebar',
    prevTechnique: 'straightArmlock',
    nextTechnique: 'avoidDeepHalfGuard',
    quiz: {
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
      complete: false,
      question: 'What position is a good start for the Straight Knee Bar?',
      answer: 'Works well from top half when opponent is up on his side',
    },
    video: {
      url: 'https://www.youtube.com/embed/1UYJRNqW5Ao',
      thumbnail: 'https://img.youtube.com/vi/1UYJRNqW5Ao/mqdefault.jpg',
    },
  },
  avoidDeepHalfGuard: {
    id: 10,
    name: 'avoidDeepHalfGuard',
    displayName: 'Avoid Deep Half Guard',
    prevTechnique: 'straightKneebar',
    nextTechnique: 'scissorSweep',
    quiz: {
      complete: false,
      question: 'What should you do to avoid getting stuck in deep half guard?',
      responses: [
        {
          text: 'Sprawl, use a crossface and pummel your foot inside his calf',
          correct: true,
        },
        {
          text: 'Keep hips in tight and keep head down',
          correct: false,
        },
        {
          text: 'Posture up and limp arm out',
          correct: false,
        },
        {
          text: 'Put hands on the mat and shrimp away',
          correct: false,
        },
      ],
    },
    flashcard: {
      complete: false,
      question: 'What should you do to avoid getting stuck deep half guard?',
      answer: 'Sprawl, use a crossface and pummel your foot inside his calf',
    },
    video: {
      url: 'https://www.youtube.com/embed/FNaMku7pjDU',
      thumbnail: 'https://img.youtube.com/vi/FNaMku7pjDU/mqdefault.jpg',
    },
  },
  scissorSweep: {
    id: 11,
    name: 'scissorSweep',
    displayName: 'Scissor Sweep',
    prevTechnique: 'avoidDeepHalfGuard',
    nextTechnique: 'heelHookDefense',
    quiz: {
      complete: false,
      question:
        'What is the position for scissor sweep when opponent lifts leg and postures',
      responses: [
        {
          text: 'Stay flat and butterfly the outside leg',
          correct: false,
        },
        {
          text: 'Open guard and lift hips. Go onto shoulder to create space and then pull him onto you',
          correct: true,
        },
        {
          text: 'Kick straight out with top leg and drop bottom leg like a prostitute',
          correct: false,
        },
        {
          text: 'Swim under then grab around the waist',
          correct: false,
        },
      ],
    },
    flashcard: {
      complete: false,
      question: 'What is the correct leg position for scissor sweep',
      answer:
        'Bottom leg with calf against his knee, top leg is strong with shin across his waist',
    },
    video: {
      url: 'https://www.youtube.com/embed/X-PA21_0xTg',
      thumbnail: 'https://img.youtube.com/vi/X-PA21_0xTg/mqdefault.jpg',
    },
  },
  heelHookDefense: {
    id: 12,
    name: 'heelHookDefense',
    displayName: 'Heel Hook Defense',
    prevTechnique: 'scissorSweep',
    nextTechnique: 'triangleEscape',
    quiz: {
      complete: false,
      question: 'How do you defend the inside heel hook?',
      responses: [
        {
          text: 'Straighten your leg',
          correct: false,
        },
        {
          text: 'Hide your heel',
          correct: false,
        },
        {
          text: 'Post up and elevate your hips',
          correct: false,
        },
        {
          text: 'All of the above',
          correct: true,
        },
      ],
    },
    flashcard: {
      complete: false,
      question: 'How do you defend the inside heel hook',
      answer:
        'Get your leg straight, hide your heel, hips up and push them back on their shoulder',
    },
    video: {
      url: 'https://www.youtube.com/embed/w-W0ug7Edag',
      thumbnail: 'https://img.youtube.com/vi/w-W0ug7Edag/mqdefault.jpg',
    },
  },
  triangleEscape: {
    id: 13,
    name: 'triangleEscape',
    displayName: 'Triangle Escape',
    prevTechnique: 'heelHookDefense',
    nextTechnique: 'armbarDefense',
    quiz: {
      complete: false,
      question: 'How do you escape the late front triangle?',
      responses: [
        {
          text: 'Lock hands to create space and posture',
          correct: false,
        },
        {
          text: 'Extend arms and stand up',
          correct: false,
        },
        {
          text: 'Step both legs over and sit back with feet up on his chest',
          correct: false,
        },
        {
          text: 'All of the above',
          correct: true,
        },
      ],
    },
    flashcard: {
      complete: false,
      question: 'How do you escape the triangle',
      answer:
        'Lock hands, posture up to standing then step both legs on their chest',
    },
    video: {
      url: 'https://www.youtube.com/embed/od-lcD_34f8',
      thumbnail: 'https://img.youtube.com/vi/od-lcD_34f8/mqdefault.jpg',
    },
  },
  armbarDefense: {
    id: 14,
    name: 'armbarDefense',
    displayName: 'Armbar Defense',
    prevTechnique: 'triangleEscape',
    nextTechnique: null,
    quiz: {
      complete: false,
      question: 'How do you escape the armbar?',
      responses: [
        {
          text: 'Keep arms crossed then bridge up on knees to come on top',
          correct: true,
        },
        {
          text: 'Stay flat on back while shrimping',
          correct: true,
        },
        {
          text: 'Stand up and pull arm out in one motion',
          correct: false,
        },
        {
          text: 'Roll away with shoulder and arm extended',
          correct: false,
        },
      ],
    },
    flashcard: {
      complete: false,
      question: 'What are the armbar defense steps?',
      answer:
        'Keep arms crossed then bridge up to knees. Stack and pull elbow out in little spurts',
    },
    video: {
      url: 'https://www.youtube.com/embed/zwNOXB8GQ3w',
      thumbnail: 'https://img.youtube.com/vi/zwNOXB8GQ3w/mqdefault.jpg',
    },
  },
};

export default basicTechniques;
