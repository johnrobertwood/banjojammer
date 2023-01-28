export interface Technique {
  id: number;
  name: string;
  displayName: string;
  prevTechnique: string | null;
  nextTechnique: string | null;
  quiz: {
    complete: boolean;
    question: string;
    responses: [
      {
        text: string;
        correct: boolean;
      },
      {
        text: string;
        correct: boolean;
      },
      {
        text: string;
        correct: boolean;
      },
      {
        text: string;
        correct: boolean;
      }
    ];
  };
  flashcard: {
    complete: boolean;
    question: string;
    answer: string;
  };
  video: {
    url: string;
    videoUrl1?: string;
    videoUrl2?: string;
    tabUrl?: string;
    thumbnail: string;
  };
  notes: [
    {
      text: string;
    },
    {
      text: string;
    },
    {
      text: string;
    },
    {
      text: string;
    }
  ];
}
