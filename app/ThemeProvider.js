// components/ThemeProvider.js

"use client"; // Ensure this file is treated as a client component

import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';

// Define the theme
const lightTheme = createTheme({
  palette: {
    background: {
      default: '#f5f5f5',
    },
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

export default function CustomThemeProvider({ children }) {
  return (
    <MUIThemeProvider theme={lightTheme}>
      {children}
    </MUIThemeProvider>
  );
}

CustomThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
