import { styled } from '../../../stitches.config'

export const H1 = styled('h1',{ 
  fontSize: '$8',
  fontWeight: '600',
  fontStyle: 'normal',
  lineHeight: '$10',  
  textAlign: 'center',
  letterSpacing: '$1',
  textTransform: 'uppercase',
  color: '$primary'  
})


export const RainbowText = styled('strong',{
  background: '$linear',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent'
})
