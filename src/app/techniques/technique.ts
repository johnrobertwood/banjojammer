export interface Technique {
  id: number;
  name: string;
  displayName: string;
  favorite: boolean;
  quiz: {
    id: number;
    name: string;
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
    id: number;
    name: string;
    complete: boolean;
    question: string;
    answer: string;
  };
  video: {
    url: string;
  };
}
