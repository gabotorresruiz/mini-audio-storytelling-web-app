import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff275b',
      light: '#ffffff'
    },
    secondary: {
      main: '#7D7D7D'
    },
    text: {
      primary: '#ff275b',
      secondary: '#09172acc'
    },
    action: {
      active: '#ff275b',
      hover: '#e72c5f26',
      selected: '#f15971'
    },
    error: {
      main: '#d32f2f'
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: '#09172acc'
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
      color: '#09172acc'
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
      color: '#09172acc'
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      color: '#09172acc'
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      color: '#09172acc'
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
      color: '#09172acc'
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      color: '#10264699'
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      color: '#10264699'
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      color: '#09172acc'
    }
  },
  shape: {
    borderRadius: 10
  },
  spacing: 8,
  shadows: [
    'none',
    '0 2px 4px rgba(0, 0, 0, 0.1)',
    '0 4px 10px rgba(0, 0, 0, 0.1)',
    '0 1px 3px rgba(0, 0, 0, 0.12)',
    '0 1px 5px rgba(0, 0, 0, 0.14)',
    '0 1px 8px rgba(0, 0, 0, 0.2)',
    '0 2px 4px rgba(0, 0, 0, 0.1)',
    '0 3px 6px rgba(0, 0, 0, 0.1)',
    '0 4px 8px rgba(0, 0, 0, 0.1)',
    '0 5px 10px rgba(0, 0, 0, 0.1)',
    '0 6px 12px rgba(0, 0, 0, 0.1)',
    '0 7px 14px rgba(0, 0, 0, 0.1)',
    '0 8px 16px rgba(0, 0, 0, 0.1)',
    '0 9px 18px rgba(0, 0, 0, 0.1)',
    '0 10px 20px rgba(0, 0, 0, 0.1)',
    '0 11px 22px rgba(0, 0, 0, 0.1)',
    '0 12px 24px rgba(0, 0, 0, 0.1)',
    '0 13px 26px rgba(0, 0, 0, 0.1)',
    '0 14px 28px rgba(0, 0, 0, 0.1)',
    '0 15px 30px rgba(0, 0, 0, 0.1)',
    '0 16px 32px rgba(0, 0, 0, 0.1)',
    '0 17px 34px rgba(0, 0, 0, 0.1)',
    '0 18px 36px rgba(0, 0, 0, 0.1)',
    '0 19px 38px rgba(0, 0, 0, 0.1)',
    '0 20px 40px rgba(0, 0, 0, 0.1)'
  ]
});

export default theme;
