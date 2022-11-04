import { styled, keyframes } from 'themes';

export const Slider = styled('div', {
    
    display: 'flex',
    width: '420px',
    height: '620px',
    borderRadius: '245.5px',
    padding: '4px',
    background: 'linear-gradient(339.21deg, #038FF4 9.58%, #674FFF 89.92%)'
  });

export const Inside = styled('div', {
  
  width: '380px',
  height: '580px',
  borderRadius: '245.5px',
  border: '20px solid',
  borderColor: 'white',
  background: 'url(photos/3.jpeg) no-repeat cover',
 
})


const scaleUp = keyframes({
  '0%': { opacity: 0.0 },
  '20%': { opacity: 0.0  },
  '40%': { opacity: 1 },
  '60%': { opacity: 1 },
  '65%': { opacity: 1 },
  '70%': { opacity: 1 },
  '80%': { opacity: 0 },
  '90%': { opacity: 0 },
  '100%': { opacity: 0 },
});


export const Slide = styled('div', {
  width: '379px',
  height: '579px',
  border: '1px solid',
  borderRadius: '245.5px',
  backgroundSize: 'cover',
  animation: `${scaleUp} infinite`,
  animationDuration: '30s',
  position: 'relative',
  marginTop: '-581px',
})

