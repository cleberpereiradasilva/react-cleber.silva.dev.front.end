 import { styled } from 'themes';

export const Carousel = styled('div', {
  '@bp1': {
    width: '100%',
  },
  '@bp2': {
    width: '80%',
  },
  '& .slick-slider': {
    display: 'flex',
    alignItems: 'center'  
  }
});

export const Arrow = styled('div', {
  cursor: 'pointer', 
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px',
  width: '16px',
  height: '16px',
  borderRadius: '99px', 
  marginLeft: '14px', 
  zIndex: 1000,
  '&:hover': {
    boxShadow: '0px 9px 22px rgba(0, 0, 0, 0.08), 0px 1.12694px 2.75474px rgba(0, 0, 0, 0.04)',
  }
});



export const Card = styled('div', {
  width: '336px', 
  height: '400px',
  backgroundColor: '$white',
  padding: '15px',
})

export const CardContent = styled('div', {
  width: '100%', 
  height: '100%',
  backgroundColor: '#c0c0c0',
})
