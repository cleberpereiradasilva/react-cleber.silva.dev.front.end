import { styled } from '../../stitches.config'

export const Span = styled('span',{
  fontWeight: "$600",
  color: "$primary",
  lineHeight: "$3",
  fontSize: "$4",
  padding: "$2 $5"
})

export const Underline = styled('div',{
  variants: {
    active: {
      true: {
        display: ''
      }, 
      false: {
        display: 'none'
      }
    },
  },  
  height: 4,
  width: '30%',
  background: '$linear',
  borderRadius: '0px 0px $1 $1'
})

export const A = styled('a',{
  height: '40px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: 'fit-content',
  cursor: 'pointer',
  '&:hover > div': {
      display : 'block'
  }
})

export const Nav = styled('nav',{
  width: '100%', 
  height: '108px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center'
  
})