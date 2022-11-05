import { styled } from 'themes';
export const H1 = styled('h1', {
    textTransform: 'Uppercase',
    textAlign: 'center',
    fontFamily: '$system',
    fontStyle: 'normal',
    fontWeight: '600',
    letterSpacing: '0.002em', 
    lineHeight: '$8',
    fontSize: '$8',
    color: '$default',
    '> p strong':{
      backgroundImage: 'linear-gradient(339.21deg, #038FF4 9.58%, #674FFF 89.92%), linear-gradient(0deg, #303030, #303030)',
      color: 'black',
      backgroundClip: 'text',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent'
    }
  });


