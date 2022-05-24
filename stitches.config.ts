import { createStitches, globalCss } from '@stitches/react'
import { main } from './themes.config'

export const { getCssText } = createStitches();
export const { styled, css } = createStitches(main);

const globalStyles = globalCss({
    '*': { margin: 0, padding: 0, fontFamily: main.theme.fonts.mono },
    a: { textDecoration: 'none' }, 
    
  });
globalStyles();
