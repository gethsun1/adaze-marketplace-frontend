// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#003366', // Deep Blue for highlights
    },
    secondary: {
      main: '#ed018d', // Vibrant Pink for accents
    },
    background: {
      default: '#fef9ac', // Light Neutral for the background
    },
    text: {
      primary: '#000000', // Black for headers
      secondary: '#333333', // Dark Gray for body text
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h6: { fontSize: '1.2rem', fontWeight: 'bold', color: '#000000' },
    body1: { fontSize: '1rem', color: '#333333' },
  },
});

export default theme;
