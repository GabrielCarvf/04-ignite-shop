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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    padding: '0.75rem',
    backgroundColor: '$gray800',
    borderRadius: '6px',
    color: '$gray500',
    lineHeight: 0,
    border: '2px solid transparent',

    '&:hover': {
      transition: '0.2s',
      cursor: 'pointer',
      border: '2px solid $green500',
    },

    div: {
      position: 'absolute',
      '&::after': {
        content: 'attr(data-after)',
        position: 'relative',
        top: '-1.5rem',
        right: '-1.5rem',
        width: '1.5rem',
        height: '1.5rem',
        borderRadius: '50%',
        border: '3px solid $gray900',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        fontSize: '0.75rem',
        fontWeight: 'bold',

        textAlign: 'center',
        letterSpacing: '-0.06rem',

        color: '$gray100',
        background: '$green500',
      },
    },
  },
})
