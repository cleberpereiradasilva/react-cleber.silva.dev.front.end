import { styled } from 'themes';
export const Text = styled('p', {
  variants: {
    size: {
      normal: {
        fontSize: '$4'
      }, 
      big: {
        fontSize: '$9'
      }     
    },
  },
  defaultVariants:{
    size: 'normal'
  },
  fontFamily: '$system',
  fontWeight: '400',
  lineHeight: '25.2px',
  fontSize: '$18',
  color: '$default',
  paddingTop: '10px',
  });


