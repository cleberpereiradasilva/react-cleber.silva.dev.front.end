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
      1: '0.826rem', // '13.22px',
      2: '0.875rem', // '14px',
      3: '1rem', // '16px',
      4: '1.125rem', // '18px',
      5: '1.25rem', // '20px',
      6: '1.625rem', // '26px',
      7: '2rem', // '32px',
      8: '3rem', // '48px',
      9: '3.75rem', // '60px',
      10: '4.125rem', // '66px'
    },
    media: {
      bp1: '(min-width: 640px)',
      bp2: '(min-width: 768px)',
      bp3: '(min-width: 1024px)',
    },
  },
});