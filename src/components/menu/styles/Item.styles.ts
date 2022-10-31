import { styled } from 'themes';
export const Item = styled('a', {
    fontFamily: '$system',
    color: '$default',
    fontSize: '$3',

    textDecoration: 'none',
    lineHeight: '16px',
    border: '0',
    backgroundColor: 'white', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 32px 0 32px',
    height: '32px',
    active :  {
      border: '1px solid green'
    }
  });

  export const Active = styled('div', {
    background: '$linear',

    marginTop: '8px',
    height: '4px',
    width: '46px',
    borderRadius: '0px 0px 4px 4px'
  })