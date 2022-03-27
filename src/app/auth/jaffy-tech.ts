const jaffyTech = {
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
      url: 'https://www.youtube.com/embed/GmvNttCRsx0',
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
        'If you are at a bar and your buddy sitting next to you reaches for your drink it exposes their neck and arm',
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
      url: 'https://www.youtube.com/embed/t6FiiticH3Y',
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
      url: 'https://www.youtube.com/embed/4csIWClv-vo',
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
      url: 'https://www.youtube.com/embed/XKBigNF7TME',
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
      url: 'https://www.youtube.com/embed/UC7vDdyXpe4',
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
      url: 'https://www.youtube.com/embed/1J3bZu_zKIE',
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
      url: 'https://www.youtube.com/embed/Q5j5iwut2eQ',
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
      url: 'https://www.youtube.com/embed/ySpx7x7dZbE',
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
      url: 'https://www.youtube.com/embed/zXUKhU7TC-w',
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
      url: 'https://www.youtube.com/embed/GpBqyOjidSU',
      thumbnail: 'https://img.youtube.com/vi/GpBqyOjidSU/mqdefault.jpg',
    },
  },
  paperCutterChoke: {
    id: 10,
    name: 'paperCutterChoke',
    displayName: 'Paper Cutter Choke',
    prevTechnique: 'reverseArmbar',
    nextTechnique: 'donkeyGuillotine',
    quiz: {
      complete: false,
      question: 'What are the steps for a paper cutter choke?',
      responses: [
        {
          text: 'Reach arm thru like an arm drag to grab the back of his collar.  Then use a cross lapel grip to choke',
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
      question: 'What are the steps for a paper cutter choke?',
      answer:
        'Reach arm thru like an arm drag to grab the back of his collar.  Then use a cross lapel grip to choke',
    },
    notes: [
      { text: 'Similar to an arm drag from top side control' },
      {
        text: 'Can start from north south and swim arm through',
      },
      {
        text: 'Drop the head and chest down to get a deep grip on the back of lapel',
      },
      {
        text: 'If they hand fight, bring them closer and scrap their face with forearm',
      },
    ],
    video: {
      url: 'https://www.youtube.com/embed/T46fOa6N4eE',
      thumbnail: 'https://img.youtube.com/vi/T46fOa6N4eE/mqdefault.jpg',
    },
  },
  donkeyGuillotine: {
    id: 11,
    name: 'donkeyGuillotine',
    displayName: 'Donkey Guillotine',
    prevTechnique: 'paperCutterChoke',
    nextTechnique: 'fakeSingleToHook',
    quiz: {
      complete: false,
      question: 'What is the donkey guillotine?',
      responses: [
        {
          text: 'Present your back, then reach around for the guillotine and connect your hands behind back',
          correct: true,
        },
        {
          text: 'Lift up on your toes then move to north south position',
          correct: false,
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
      question: 'What is the donkey guillotine?',
      answer:
        'Present your back, then reach around for the guillotine and connect your hands behind back',
    },
    notes: [
      {
        text: 'Start in donkey stance with hand wraped behind back',
      },
      {
        text: 'Can switch to a high elbow guillotine, arm in guillotine or front headlock',
      },
      {
        text: 'Having confidence with someone attacking your back opens up creativity in your game',
      },
    ],
    video: {
      url: 'https://www.youtube.com/embed/56387hMPiLk',
      thumbnail: 'https://img.youtube.com/vi/56387hMPiLk/mqdefault.jpg',
    },
  },
  fakeSingleToHook: {
    id: 12,
    name: 'fakeSingleToHook',
    displayName: 'Fake Single To Hook',
    prevTechnique: 'donkeyGuillotine',
    nextTechnique: 'gogoplata',
    quiz: {
      complete: false,
      question: 'What is the fake single to hook?',
      responses: [
        {
          text: 'Change levels and touch the leg for the fake shot, then rise up to throw a left hook',
          correct: true,
        },
        {
          text: 'Open guard and lift hips. Go onto shoulder to create space and then pull him onto you',
          correct: false,
        },
        {
          text: 'De la riva to x guard and berimbolo',
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
      question: 'What is the fake single to hook?',
      answer: 'Change levels and touch the leg then rise up with the left hook',
    },
    notes: [
      { text: 'Single leg distraction short circuits the brain' },
      {
        text: 'Fake the single leg, throw the left hook, then do a real single leg',
      },
      { text: 'Fun to try on your friends messing around' },
      { text: 'Can also use this with a double leg at the end' },
    ],
    video: {
      url: 'https://www.youtube.com/embed/h9Bxfnob1Cc',
      thumbnail: 'https://img.youtube.com/vi/h9Bxfnob1Cc/mqdefault.jpg',
    },
  },
  gogoplata: {
    id: 13,
    name: 'gogoplata',
    displayName: 'Gogoplata',
    prevTechnique: 'fakeSingleToHook',
    nextTechnique: 'deepHalfGuardSweep',
    quiz: {
      complete: false,
      question: 'What is the gogoplata?',
      responses: [
        {
          text: 'Shrimp away then swing your leg up from guard or trap the arm in mount and bring the shin across under chin',
          correct: true,
        },
        {
          text: 'De la riva to x guard and berimbolo',
          correct: false,
        },
        {
          text: 'Put hands on the mat and shrimp away',
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
      question: 'What is the gogoplata?',
      answer:
        'Shrimp away then swing your leg up from guard or trap the arm in mount and bring the shin across under chin',
    },
    notes: [
      { text: 'A good move for flexible guys' },
      {
        text: 'Reach over his head to grab your own foot for the finish from guard',
      },
      { text: 'Lean forward and push down on foot to finish from mount' },
    ],
    video: {
      url: 'https://www.youtube.com/embed/9gUzj39Kh0s',
      thumbnail: 'https://img.youtube.com/vi/9gUzj39Kh0s/mqdefault.jpg',
    },
  },
  deepHalfGuardSweep: {
    id: 14,
    name: 'deepHalfGuardSweep',
    displayName: 'Deep Half Guard Sweep',
    prevTechnique: 'gogoplata',
    nextTechnique: null,
    quiz: {
      complete: false,
      question: 'What is the Deep Half Guard Sweep?',
      responses: [
        {
          text: 'Get his knee to touch the ground then use his momentum to swing up to single leg with head inside',
          correct: true,
        },
        {
          text: 'Drop the head and chest down to get a deep grip on the back of lapel',
        },
        {
          text: 'Put hands on the mat and shrimp away',
          correct: false,
        },
        {
          text: 'Lift up on your toes then move to north south position',
          correct: false,
        },
      ],
    },
    flashcard: {
      complete: false,
      question: 'What is the Deep Half Guard Sweep?',
      answer:
        'Get his knee to touch the ground to provoke pull back reaction, then use momentum to swing up to head inside single leg',
    },
    notes: [
      { text: 'Timing is important to follow his leg up using the momentum' },
      { text: 'Keep your head inside to avoid getting guillotined' },
      { text: 'Can use inside hook to spin and transition to 50/50 heel hook' },
    ],
    video: {
      url: 'https://www.youtube.com/embed/WNXrZjz8nFU',
      thumbnail: 'https://img.youtube.com/vi/WNXrZjz8nFU/mqdefault.jpg',
    },
  },
};

export default jaffyTech;
