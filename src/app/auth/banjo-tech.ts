import { Technique } from '../techniques/technique';

export const banjoTech: Technique = {
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
    demoUrl: 'https://www.youtube.com/embed/NoFB9u94jFM',
    jamUrl: 'https://www.youtube.com/embed/xAEjObNAPQQ',
    tabUrl: '/assets/cumberland.pdf',
    thumbnail: 'https://img.youtube.com/vi/xAEjObNAPQQ/mqdefault.jpg',
  },
};

export default banjoTech;
