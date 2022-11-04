import { createStitches } from '@stitches/react';

export const { styled, getCssText, keyframes } = createStitches({
  theme: {
    fonts: {
      system: 'PingFang'
    },
    colors: {
      default: '#303030',
      gray: '#BBBBBB',
      linear: 'linear-gradient(270deg, #038FF4 0%, #674FFF 100%)'
    },
    fontSizes: {
      1: '13.22px',
      2: '14px',
      3: '16px',
      4: '18px',
      5: '26px',
      6: '32px',
      7: '48px',
      8: '60px',
      9: '66px'
    },
  },
});