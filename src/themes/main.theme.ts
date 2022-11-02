import { createStitches } from '@stitches/react';

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      system: 'PingFang'
    },
    colors: {
      default: '#303030',
      linear: 'linear-gradient(270deg, #038FF4 0%, #674FFF 100%)'
    },
    fontSizes: {
      1: '13.22px',
      2: '14px',
      3: '16x',
      4: '18x',
      5: '26x',
      6: '32x',
      7: '48x',
      8: '60x'
    },
  },
});