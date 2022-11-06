import { styled } from 'themes';
export const Item = styled('a', {
    fontFamily: '$system',
    lineHeight: '30px',
    fontSize: '$3',
    color: '$default',

    padding: '0 32px 0 32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textDecoration: 'none',
    height: '40px',
    '&:focus': {
      outline: '2px dotted',
      borderColor: '$default',
      borderRadius: '8px',
    }
   
});

export const Active = styled('div', {
  width: '46px',
  height: '4px',
  background: '$linear',
  borderRadius: '0px 0px 4px 4px'
})
