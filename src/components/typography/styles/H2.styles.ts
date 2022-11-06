import { styled } from 'themes';
export const H2 = styled('h2', {
    variants: {
      variant:{
        dark:{
          color: '$dark'
        },
        white:{
          color: '$white'
        }
      }
    },
    defaultVariants:{
      variant: 'white'
    },
    textTransform: 'capitalize',
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontWeight: '200',
    letterSpacing: '0.002em', 
    lineHeight: '72px',
    fontSize: '$8',
    padding: 0,
    margin: 0,
});


