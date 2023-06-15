import { styled } from '..'

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'space-between',

  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  button: {
    padding: '0.75rem',
    backgroundColor: '$gray800',
    'border-radius': '6px',
    color: '$gray500',
    lineHeight: 0,
    border: '2px solid transparent',

    '&:hover': {
      transition: '0.2s',
      cursor: 'pointer',
      border: '2px solid $green500',
    },
  },
})
