import { createStitches } from '@stitches/react';

export const { styled, getCssText, keyframes } = createStitches({
  theme: {
    fonts: {
      system: 'PingFang'
    },
    colors: {
      default: '#303030',
      dark: '#222222',
      gray: '#BBBBBB',
      white: '#fff',
      title: '#414141',
      subtitle: '#414141',
      background: '#F1F7FF',
      separator: '#23292D',
      linear: 'linear-gradient(270deg, #038FF4 0%, #674FFF 100%)',
    },
    fontSizes: {
      1: '13.22px',
      2: '14px',
      3: '16px',
      4: '18px',
      5: '20px',
      6: '26px',
      7: '32px',
      8: '48px',
      9: '60px',
      10: '66px'
    },
  },
});