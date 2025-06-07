import { createTheme } from '@mui/material/styles';

const minimalTheme = createTheme({
  typography: {
    fontFamily: [
      "'Inter'",
      "'Helvetica Neue'",
      'Arial',
      'sans-serif'
    ].join(','),
    h2: {
      fontWeight: 300,
      letterSpacing: '0.05em',
      fontSize: '1.8rem',
      color: '#333'
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          textTransform: 'none' // Evita transformaciones automáticas
        }
      }
    }
  }
});

export default minimalTheme;