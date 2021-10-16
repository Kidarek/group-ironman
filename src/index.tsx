import * as React from 'react'
import * as ReactDOM from "react-dom"
import './index.css'
import App from './App'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/system';
import { CssBaseline } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme = {darkTheme}>
      <CssBaseline/>
      <Box>
        <App />
      </Box>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
