const randyTech = {
  activeShooterResponseProtocol: {
    id: 0,
    name: 'activeShooterResponseProtocol',
    displayName: 'Active Shooter Response Protocol',
    prevTechnique: null,
    nextTechnique: 'defendingYourHomeGroundJanuary2018',
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
      thumbnail:
        'https://i.vimeocdn.com/video/685868180-c879e3d1287ff83185fcd6a061ee6c83719a91c3764020bcce5b2aa3c0950d7c-d_640',
    },
  },
  defendingYourHomeGroundJanuary2018: {
    id: 10,
    name: 'defendingYourHomeGroundJanuary2018',
    displayName: 'Defending Your Home Ground January 2018 ',
    prevTechnique: 'activeShooterResponseProtocol',
    nextTechnique: 'strongHandPistol',
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
      thumbnail:
        'https://i.vimeocdn.com/video/680255616-4b557188e8e15954172c1113d08e813e7af67b569233aaa9727f69c4dd7cc17f-d_640',
    },
  },
  strongHandPistol: {
    id: 15,
    name: 'strongHandPistol',
    displayName: 'Strong Hand Pistol',
    prevTechnique: 'defendingYourHomeGroundJanuary2018',
    nextTechnique: 'movingToContact',
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
      url: 'https://player.vimeo.com/video/226399320',
      thumbnail:
        'https://i.vimeocdn.com/video/645999868-1526be02fe2dfebd3b4ed163b223150064c84f38ae8471723dcfca91eefe559b-d_640',
    },
  },
  movingToContact: {
    id: 20,
    name: 'movingToContact',
    displayName: 'Moving To Contact',
    prevTechnique: 'strongHandPistol',
    nextTechnique: 'activeShooterInTheWorkplace',
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
      url: 'https://player.vimeo.com/video/205332429',
      thumbnail:
        'https://i.vimeocdn.com/video/620070868-b572dd3149f5bbc64201210579dce7d6b00baaf480da03d4f12539e8ff6e8415-d_640',
    },
  },
  activeShooterInTheWorkplace: {
    id: 30,
    name: 'activeShooterInTheWorkplace',
    displayName: 'Active Shooter In The Workplace',
    prevTechnique: 'movingToContact',
    nextTechnique: 'defensivePistolLevelFour',
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
      url: 'https://player.vimeo.com/video/201800635',
      thumbnail:
        'https://i.vimeocdn.com/video/615661803-194e6595fdd4de2606cf682bc39e86a2e7588d536088d25c4b38e361eb5e41ae-d_640',
    },
  },
  defensivePistolLevelFour: {
    id: 40,
    name: 'defensivePistolLevelFour',
    displayName: 'Defensive Pistol Level Four',
    prevTechnique: 'activeShooterInTheWorkplace',
    nextTechnique: 'defendingYourHomeGround',
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
      url: 'https://player.vimeo.com/video/184632648',
      thumbnail:
        'https://i.vimeocdn.com/video/634534779-f27d6e622865cc0b34eae3b0f71ec62cefd07cd5df6fd20022868e852ff87a2f-d_640',
    },
  },
  defendingYourHomeGround: {
    id: 50,
    name: 'defendingYourHomeGround',
    displayName: 'Defending Your Home Ground',
    prevTechnique: 'defensivePistolLevelFour',
    nextTechnique: 'defensivePistolLevelThree',
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
      url: 'https://player.vimeo.com/video/182810796',
      thumbnail:
        'https://i.vimeocdn.com/video/634533140-155e926a554afb04ed352f78ba516b1b67a45f4191c1814de8ff6a3bf6ede544-d_640',
    },
  },
  defensivePistolLevelThree: {
    id: 60,
    name: 'defensivePistolLevelThree',
    displayName: 'Defensive Pistol Level Three',
    prevTechnique: 'defendingYourHomeGround',
    nextTechnique: 'defensiveCarbineLevelTwo',
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
      url: 'https://player.vimeo.com/video/177502454',
      thumbnail:
        'https://i.vimeocdn.com/video/584934587-af277bd6210f119e74edb871d1671d556e534cc1aeae901bbdaeb9e8ba447aa4-d_640',
    },
  },
  defensiveCarbineLevelTwo: {
    id: 70,
    name: 'defensiveCarbineLevelTwo',
    displayName: 'Defensive Carbine Level Two',
    prevTechnique: 'defensivePistolLevelThree',
    nextTechnique: 'defensivePistolLevelTwo',
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
      url: 'https://player.vimeo.com/video/171513490',
      thumbnail:
        'https://i.vimeocdn.com/video/634534492-ed6d44c5c3377b502bd0e5ec44cbc5f904007b61f296b7e7e7df4c8188e737bd-d_640',
    },
  },
  defensivePistolLevelTwo: {
    id: 80,
    name: 'defensivePistolLevelTwo',
    displayName: 'Defensive Pistol Level Two',
    prevTechnique: 'defensiveCarbineLevelTwo',
    nextTechnique: 'defensivePistolLevelOne',
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
      url: 'https://player.vimeo.com/video/167912420',
      thumbnail:
        'https://i.vimeocdn.com/video/634534609-e60ece5b908173d4d55a3cd9db94262110ecef41489c4c5f5daeee04b7d4804f-d_640',
    },
  },
  defensivePistolLevelOne: {
    id: 90,
    name: 'defensivePistolLevelOne',
    displayName: 'Defensive Pistol Level One',
    prevTechnique: 'defensivePistolLevelTwo',
    nextTechnique: 'pppMarch2016',
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
      url: 'https://player.vimeo.com/video/160052156',
      thumbnail:
        'https://i.vimeocdn.com/video/561942597-30ee500707c04f18657578efd2da29ee029bb59179cf8cb18ce2588c105602ac-d_640',
    },
  },
  pppMarch2016: {
    id: 100,
    name: 'pppMarch2016',
    displayName: 'Practical Pistol Proficiency March 2016',
    prevTechnique: 'defensivePistolLevelOne',
    nextTechnique: 'precisionRifleMarksmanship',
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
      url: 'https://player.vimeo.com/video/159129026',
      thumbnail:
        'https://i.vimeocdn.com/video/560797551-6ff2fe4135d56ee33e3453bc60004a09f32c0c83bafd835737c73d3eb9011e26-d_640',
    },
  },
  precisionRifleMarksmanship: {
    id: 110,
    name: 'precisionRifleMarksmanship',
    displayName: 'Precision Rifle Marksmanship',
    prevTechnique: 'pppMarch2016',
    nextTechnique: 'couplesSafetySeminar',
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
      url: 'https://player.vimeo.com/video/158097373',
      thumbnail:
        'https://i.vimeocdn.com/video/559513837-28c3f48fdec79c64f809f5b0b0b7aa36a160efa773d48505af44c2df5db0cde2-d_640',
    },
  },
  couplesSafetySeminar: {
    id: 120,
    name: 'couplesSafetySeminar',
    displayName: 'Couples Safety Seminar',
    prevTechnique: 'precisionRifleMarksmanship',
    nextTechnique: 'pppClassJanuary2016',
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
      url: 'https://player.vimeo.com/video/157687186',
      thumbnail:
        'https://i.vimeocdn.com/video/634531343-be8bf1d487063f16f5330eec2a2a9890591a15f4800e4cb82ccc2f2df27a015c-d_640',
    },
  },
  pppClassJanuary2016: {
    id: 130,
    name: 'pppClassJanuary2016',
    displayName: 'Practical Pistol Proficiency January 2016',
    prevTechnique: 'couplesSafetySeminar',
    nextTechnique: null,
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
      url: 'https://player.vimeo.com/video/153177543',
      thumbnail:
        'https://i.vimeocdn.com/video/634534680-a0ec71a5ea33bada24fae6a9b14648fe7eff7a19cb296db9d04705376555e4f6-d_640',
    },
  },
};

export default randyTech;
