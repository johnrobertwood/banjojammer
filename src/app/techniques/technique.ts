export interface Technique {
  id: number;
  name: string;
  displayName: string;
  prevTechnique: string;
  nextTechnique: string;
  favorite: boolean;
  quiz: {
    complete: boolean;
    question: string;
    responses: [
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
  };
}
