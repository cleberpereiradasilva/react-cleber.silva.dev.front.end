import { styled } from '../../../themes';
export const Card = styled('div', {
  maxWidth: '336px', 
  height: '400px',
  padding: '12px 0 0 12px',

  backgroundColor: '$white',
  boxShadow: `0px 54px 80px rgba(0, 0, 0, 0.07), 
              0px 22.5599px 33.4221px rgba(0, 0, 0, 0.0503198), 
              0px 12.0616px 17.869px rgba(0, 0, 0, 0.0417275), 
              0px 6.76164px 10.0172px rgba(0, 0, 0, 0.035), 
              0px 3.59106px 5.32008px rgba(0, 0, 0, 0.0282725), 
              0px 1.49432px 2.21381px rgba(0, 0, 0, 0.0196802)`,
  borderRadius: '24px',
});


export const Cover = styled('div', {
  border: '1px solid green',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  width: 'calc(100% - 12px)',
  height: '176px',
  borderRadius: '16px',
  marginBottom: '34px',
})

export const Content = styled('div', {
  paddingTop: '20px',
  width: 'calc(100% - 12px)',
  height: 'calc(100% - 302px)',
})

export const Link = styled('a', {
  display: 'flex',
  justifyContent: 'flex-end',
  textDecoration: 'none', 
  paddingRight: '33px',
  '& > h4':{
    marginRight: '8px'
  }
})

