const randyTech = {
  kneeSlice: {
    id: 0,
    name: 'kneeSlice',
    displayName: 'Knee Slice',
    prevTechnique: null,
    nextTechnique: 'barDarce',
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
      { text: 'Get inside hand position on his biceps and stand up' },
      { text: 'Backup, sit and put knee in middle' },
      { text: 'Shortcut turn knee towards side control (not mount)' },
      {
        text: 'Pummel underhook, pull up near arm and slice thru to sidecontrol',
      },
      { text: 'Sitting on toes' },
      { text: 'Swimming hands to pummel for inside underhook position' },
    ],
    video: {
      url: 'https://player.vimeo.com/video/257845940',
      thumbnail: 'https://img.youtube.com/vi/GmvNttCRsx0/mqdefault.jpg',
    },
  },
  barDarce: {
    id: 1,
    name: 'barDarce',
    displayName: 'Bar Darce',
    prevTechnique: 'kneeSlice',
    nextTechnique: 'sevenYearOldChoke',
    quiz: {
      complete: false,
      question: 'What is the bar darce analogy?',
      responses: [
        {
          text: 'If you are at a bar and your buddy sitting next to you reaches for your drink it exposes their neck and arm',
          correct: true,
        },
        {
          text: 'Use your forearm as a bar for leverage on the darce',
          correct: false,
        },
        {
          text: 'The bar darce is best done from front headlock',
          correct: false,
        },
        {
          text: 'A bar darce is similar to a knee bar but its a choke',
          correct: false,
        },
      ],
    },
    flashcard: {
      complete: false,
      question: 'What is the bar darce analogy?',
      answer:
        'An arm drag with a hop step to the side when opponent has you in front headlock',
    },
    notes: [
      { text: 'Works best when side to side' },
      { text: 'Partner is reaching across exposing arm and neck' },
      { text: 'Close side is a darce, far side is anaconda' },
      {
        text: 'Short path from side up and under to darce, dont have to reach far',
      },
    ],
    video: {
      url: 'https://player.vimeo.com/video/253383057',
      thumbnail: 'https://img.youtube.com/vi/t6FiiticH3Y/mqdefault.jpg',
    },
  },
  sevenYearOldChoke: {
    id: 2,
    name: 'sevenYearOldChoke',
    displayName: 'Seven Year Old Choke',
    prevTechnique: 'barDarce',
    nextTechnique: 'monoplata',
    quiz: {
      complete: false,
      question: 'How do you do the seven year old choke?',
      responses: [
        {
          text: 'Push their hands down and climb over their shoulders with legs, hands clasped under their chin',
          correct: true,
        },
        {
          text: 'Gable grip to short choke',
          correct: false,
        },
        {
          text: 'Cover his mouth to restrict breathing',
          correct: false,
        },
        {
          text: 'Front headlock to darce',
          correct: false,
        },
      ],
    },
    flashcard: {
      complete: false,
      question: 'How do you do the seven year old choke?',
      answer:
        'Climb up their back onto their shoulders with legs, hands clasped under their chin',
    },
    notes: [
      { text: 'Lock up the triangle for extra pressure' },
      {
        text: 'Push their hands down then climb up their back using your legs',
      },
      { text: 'Pry the fingers as a last resort escape' },
    ],
    video: {
      url: 'https://player.vimeo.com/video/226399320',
      thumbnail: 'https://img.youtube.com/vi/4csIWClv-vo/mqdefault.jpg',
    },
  },
  monoplata: {
    id: 3,
    name: 'monoplata',
    displayName: 'Monoplata',
    prevTechnique: 'sevenYearOldChoke',
    nextTechnique: 'suckerDrag',
    quiz: {
      complete: false,
      question: 'True or false: Monoplata is the _______ version of Omoplata?',
      responses: [
        {
          text: 'Mouted',
          correct: true,
        },
        {
          text: 'Guard',
          correct: false,
        },
        {
          text: 'Inverted',
          correct: false,
        },
        {
          text: 'Reverse',
          correct: false,
        },
      ],
    },
    flashcard: {
      complete: false,
      question: 'How do you do the monoplata?',
      answer:
        'When they underhook and turn into side control, lean forward and swing your leg over their body',
    },
    notes: [
      {
        text: 'Starts when they are underhooking your side control to wrestle up on a single leg',
      },
      {
        text: 'Lean and swing',
      },
      {
        text: 'Instead of pummeling for the underhook, swing your leg up and over',
      },
    ],
    video: {
      url: 'https://player.vimeo.com/video/205332429',
      thumbnail: 'https://img.youtube.com/vi/XKBigNF7TME/mqdefault.jpg',
    },
  },
  suckerDrag: {
    id: 4,
    name: 'suckerDrag',
    displayName: 'Sucker Drag',
    prevTechnique: 'monoplata',
    nextTechnique: 'triangleFromKnees',
    quiz: {
      complete: false,
      question: 'What is the sucker drag?',
      responses: [
        {
          text: 'An arm drag with a hop step to the side when opponent has you in front headlock',
          correct: true,
        },
        {
          text: 'Harai goshi',
          correct: false,
        },
        {
          text: 'Butt scooting',
          correct: false,
        },
        {
          text: 'Mounted guillotine ',
          correct: false,
        },
      ],
    },
    flashcard: {
      complete: false,
      question: 'What is the sucker drag?',
      answer:
        'An arm drag with a hop step to the side when opponent has you in front headlock',
    },
    notes: [
      { text: 'The darce is easy to hit after the drag' },
      { text: 'Use it to take the back' },
      { text: 'Works from standing or from the knees' },
    ],
    video: {
      url: 'https://player.vimeo.com/video/201800635',
      thumbnail: 'https://img.youtube.com/vi/UC7vDdyXpe4/mqdefault.jpg',
    },
  },
  triangleFromKnees: {
    id: 5,
    name: 'triangleFromKnees',
    displayName: 'Triangle From Knees',
    prevTechnique: 'suckerDrag',
    nextTechnique: 'darceOrGuillotineTrap',
    quiz: {
      complete: false,
      question:
        'True or False: Focus on getting the leg up high to hang off their back',
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
      question:
        'What should you do to draw your opponent into the triangle from knees',
      answer: 'Raise your arm to create space and bait them into an underhook',
    },
    notes: [
      {
        text: 'Leg up and over back first, then swing bottom leg around the neck',
      },
      {
        text: 'Stand up with outside leg to make space before swinging down to lock up the triangle',
      },
      {
        text: 'Deep half defense allows you to attempt unconventional stuff',
      },
    ],
    video: {
      url: 'https://player.vimeo.com/video/184632648',
      thumbnail: 'https://img.youtube.com/vi/1J3bZu_zKIE/mqdefault.jpg',
    },
  },
  darceOrGuillotineTrap: {
    id: 6,
    name: 'darceOrGuillotineTrap',
    displayName: 'Darce or Guillotine Trap',
    prevTechnique: 'triangleFromKnees',
    nextTechnique: 'bottomSideToSingleLeg',
    quiz: {
      complete: false,
      question: 'What is the setup for Darce or Guillotine Trap?',
      responses: [
        {
          text: 'Turn your legs away and lift your arm to expose your side as bait',
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
      question: 'What is the setup for Darce or Guillotine Trap?',
      answer:
        'Turn your legs away and lift your arm to expose your side as bait',
    },
    notes: [
      {
        text: 'The entrance is what catches them. Wait for the touch then spring the trap',
      },
      {
        text: 'If his head is inside grab the wizzer then throw yourself down to create space for darce',
      },
      {
        text: 'If head is outside, pop hips back and get the arm in guillotine',
      },
    ],
    video: {
      url: 'https://player.vimeo.com/video/182810796',
      thumbnail: 'https://img.youtube.com/vi/Q5j5iwut2eQ/mqdefault.jpg',
    },
  },
  bottomSideToSingleLeg: {
    id: 7,
    name: 'bottomSideToSingleLeg',
    displayName: 'Bottom Side To Single Leg',
    prevTechnique: 'darceOrGuillotineTrap',
    nextTechnique: 'crossAshiSweep',
    quiz: {
      complete: false,
      question:
        'The single leg is a good alternative to _________________ when you opponent is on top',
      responses: [
        {
          text: 'Recovering guard',
          correct: true,
        },
        {
          text: 'Front headlock',
          correct: false,
        },
        {
          text: 'Kani Basami',
          correct: false,
        },
        {
          text: 'Guillotine',
          correct: false,
        },
      ],
    },
    flashcard: {
      complete: false,
      question: 'What is the single leg a good alternative for?',
      answer: 'An alternative to recovering guard',
    },
    notes: [
      {
        text: 'Works as a defense to front headlock, guillotine, darce, anaconda and loop choke',
      },
      { text: 'Single leg is a good alternative to recovering guard' },
      {
        text: 'Single leg is not just for wrestling and opens up a lot of cool jiu jitsu',
      },
    ],
    video: {
      url: 'https://player.vimeo.com/video/177502454',
      thumbnail: 'https://img.youtube.com/vi/ySpx7x7dZbE/mqdefault.jpg',
    },
  },
  crossAshiSweep: {
    id: 8,
    name: 'crossAshiSweep',
    displayName: 'Cross Ashi Sweep',
    prevTechnique: 'bottomSideToSingleLeg',
    nextTechnique: 'reverseArmbar',
    quiz: {
      complete: false,
      question: 'What are the steps for the cross ashi sweep?',
      responses: [
        {
          text: 'Load them up, twist and drop them down to 411',
          correct: true,
        },
        {
          text: 'De la riva to x guard and berimbolo',
          correct: false,
        },
        {
          text: 'Scissor sweep to omoplata',
          correct: false,
        },
        {
          text: 'Deep Half guard to dip set',
          correct: false,
        },
      ],
    },
    flashcard: {
      complete: false,
      question: 'What are the steps for the cross ashi sweep?',
      answer: 'Load them up, twist and drop them down to 411',
    },
    notes: [
      {
        text: 'Use ashi to heel hook or capitalize top position to step over for side control',
      },
      {
        text: 'This technique is challenging and takes practice but is worth it',
      },
      {
        text: 'Connect one butterfly hook and slide the other leg under to practice movement',
      },
      { text: 'Throw in a submission after the pass like a darce' },
    ],
    video: {
      url: 'https://player.vimeo.com/video/171513490',
      thumbnail: 'https://img.youtube.com/vi/zXUKhU7TC-w/mqdefault.jpg',
    },
  },
  reverseArmbar: {
    id: 9,
    name: 'reverseArmbar',
    displayName: 'Reverse Armbar',
    prevTechnique: 'crossAshiSweep',
    nextTechnique: 'paperCutterChoke',
    quiz: {
      complete: false,
      question: 'What are the steps for a reverse armbar?',
      responses: [
        {
          text: 'Shoot in, scoot low for underhooks, pull them up onto butterfly then trap the arm',
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
      question: 'What are the steps for a reverse armbar?',
      answer:
        'Scoot in low to butterfly with underhooks, pull them back and force their hands onto mat then trap the arm',
    },
    notes: [
      {
        text: 'Scoot in and get a body lock, then lean back to get them to post',
      },
      {
        text: 'Scoot back then use head, shoulder and face to clamp his arm straight',
      },
      { text: 'Practice the cross arm elbow to elbow grip for the finish' },
    ],
    video: {
      url: 'https://player.vimeo.com/video/167912420',
      thumbnail: 'https://img.youtube.com/vi/GpBqyOjidSU/mqdefault.jpg',
    },
  },
};

export default randyTech;
