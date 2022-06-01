import { createStitches, globalCss } from '@stitches/react'
import { main } from './themes.config'

export const { getCssText } = createStitches();
export const { styled, css } = createStitches(main);

const globalStyles = globalCss({
    '@font-face': {
      fontFamily: 'PingFang SC Regular',
      src: `local(
        './assets/fonts/pingfang-sc/PingFang SC Regular.ttf'), 
        url('./assets/fonts/pingfang-sc/PingFang SC Regular.woff')`,
    },
    '*': { margin: 0, padding: 0, fontFamily: '$primary' },
    a: { textDecoration: 'none' }, 
    
  });
globalStyles();
