import { styled } from '../../stitches.config'

export const Button = styled('button',{
  variants: {
    primary: {
      true: {        
        background: '$linear',
        color: '$white',
      },     
    },  
    secondary: {
      true: {        
        background: '$white',
        color: '$gray30',
        '&:hover': {
          background: '$grayf0',    
        }
      },     
    },  
    defaultVariants: {
      true: {
        background: '$linear',
          color: '$white',          
        }
      }
  },

  background: '$linear',
  color: '$white',
  fontStyle: 'normal',
  fontWeight: '$600',
  fontSize: '$4',
  lineHeight: '$5',
  letterSpacing: '$1',
  width: "357px",
  height: "56px",
  borderRadius: "16px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px 24px",
  boxSizing: "border-box",
  cursor: 'pointer',
  '&:disabled': {
    background: '$grayb0', 
    cursor: 'auto',   
    '&:hover': {
      background: '$grayb0',    
    }
  },
  '&:hover': {
    background: '$black',    
  }
})