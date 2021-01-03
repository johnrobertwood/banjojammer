export interface Quiz {
  id: number;
  name: string;
  question: string;
  responses: [{ text: string; correct: boolean }];
  complete: boolean;
}
