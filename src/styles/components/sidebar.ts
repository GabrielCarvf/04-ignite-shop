import { styled } from '..'

export const SidebarContainer = styled('div', {
  position: 'absolute',
  right: 0,
  backgroundColor: '$gray800',
  zIndex: 1001,

  padding: '3rem',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',

  display: 'flex',
  flexDirection: 'column',

  height: '100vh',
  minWidth: 480,

  header: {
    display: 'flex',
    justifyContent: 'right',
    marginTop: '-1.5rem',
    marginRight: '-1.5rem',
    marginBottom: '1.5rem',

    button: {
      background: 'transparent',
      border: 'none',
      color: '$gray500',
      lineHeight: 0,
      cursor: 'pointer',

      '&:hover': {
        color: '$gray300',
      },
    },
  },

  transition: 'all 0.2s ease-in-out',

  h1: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },

  variants: {
    hidden: {
      true: {
        transform: 'translateX(110%)',
        opacity: '0',
        transition: 'all 0.2s ease-in-out',
      },
    },
  },
})

export const Content = styled('main', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const Footer = styled('footer', {
  button: {
    width: '100%',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    marginTop: '3.43rem',

    transition: '0.2s',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:hover': {
      backgroundColor: '$green300',
    },
  },
})

export const InfosContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
})

export const AmountInfoContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})

export const ValueInfoContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  span: {
    fontSize: '$md',
    fontWeight: 'bold',
  },
  strong: {
    fontSize: '$xl',
  },
})

export const ProductsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  overflow: 'auto',
})

export const Product = styled('div', {
  display: 'flex',
  gap: '1.25rem',

  div: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',

    p: {
      fontSize: '$md',
    },

    span: {
      fontWeight: 'bold',
      fontSize: '$md',
    },

    button: {
      background: 'transparent',
      border: 0,
      color: '$green500',
      fontSize: '1rem',
      fontWeight: 'bold',
      textAlign: 'left',
      cursor: 'pointer',

      '&:hover': {
        color: '$green300',
      },
    },
  },
})

export const ImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})
