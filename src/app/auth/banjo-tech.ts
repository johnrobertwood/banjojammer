import { Technique } from '../techniques/technique';

export const banjoTech: any = {
  id: 0,
  name: 'bravoFlipChoke',
  displayName: 'Bravo Flip Choke',
  prevTechnique: null,
  nextTechnique: 'unstoppableNoGiGuardSequence',

  notes: [
    {
      text: 'Pull out opponents lapel and get the slack out',
    },
    {
      text: 'Pass lapel over his back and in front of shoulder, keeping tension',
    },
    {
      text: 'Other hand goes around and digs under their arm and neck to find the collar',
    },
    {
      text: 'Use the grip to flip, cup his head and dig elbow to stuff his arm for the choke finish',
    },
  ],
  video: {
    url: 'https://www.youtube.com/embed/1i92oa6jLsA',
    tabUrl: '/assets/cumberland.pdf',
    videoUrl1: 'https://www.youtube.com/embed/xAEjObNAPQQ',
    videoUrl2: 'https://www.youtube.com/embed/NoFB9u94jFM',
    thumbnail: 'https://img.youtube.com/vi/1i92oa6jLsA/mqdefault.jpg',
  },
};

export default banjoTech;
