export interface Technique {
  id: number;
  name: string;
  displayName: string;
  prevTechnique: string | null;
  nextTechnique: string | null;
  video: {
    url: string;
    demoUrl: string;
    jamUrl: string;
    tabUrl: string;
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
