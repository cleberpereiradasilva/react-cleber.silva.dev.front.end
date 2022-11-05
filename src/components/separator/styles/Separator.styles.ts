import { styled } from 'themes';
export const Separator = styled('div', {
  height: '134px',
  display: 'flex',
  padding: '0',
});

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end', 
  height: '100px',
  width: '100%',
  padding: '0',
});

export const Main = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'baseline',
  width: '100%',
  height: '150px',
  padding: '0',
});

export const MainTop = styled('div', {
  width: '100%',
  height: '50px',
  backgroundColor: '$separator',
  padding: '0',
});

export const MainTopInside = styled('div', {
  width: '100%',
  height: '50px',
  backgroundColor: '$white',
  padding: '0',
  borderRadius: '88px 88px 0 0 ' ,
});

export const Left = styled('div', {
  backgroundColor: '$separator',
  width: '175px',
  height: '134px',
  borderRadius: '0 0 88px 0' ,
  padding: '0',
});

export const Rigth = styled('div', {
  backgroundColor: '$separator',
  width: '175px',
  height: '134px',  
  borderRadius: '0 0 0 88px',
  padding: '0',
});