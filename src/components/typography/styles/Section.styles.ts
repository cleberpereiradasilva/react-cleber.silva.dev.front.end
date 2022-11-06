import { styled } from 'themes';
export const Section = styled('section', {
    variants: {
      align: {
        right: {
          '> *': {
            textAlign: 'right'
          }
        }, 
        left: {
          '> *': {
            textAlign: 'left' 
          }
        }     
      },
    },
    defaultVariants: {
      align: 'left'
    },
    width: '261px',
    padding: '0',
  });
