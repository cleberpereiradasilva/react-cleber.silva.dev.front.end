import { styled } from 'themes';
export const Technology = styled('div', {
   display: 'flex',
   width: '176px',
   height: '257px', 
   border: '0',
   borderRadius: '245.5px',
   background: 'linear-gradient(339.21deg, #038FF4 9.58%, #674FFF 89.92%)',
   padding: '4px',
  });

export const TechInside = styled('div', {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   width: '136px',
   height: '217px', 
   border: '20px solid',
   borderRadius: '245.5px',
   backgroundColor: '$background',
   
})

export const Description = styled('p',{
   marginTop: '24px',
   fontFamily: '$system',
   lineHeight: '24.4px',
   fontSize: '$3',
   color: '$default',
})


export const Grid = styled('div', {
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between'
})
