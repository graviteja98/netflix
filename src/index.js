import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { CssBaseline} from '@mui/material';
import { red } from '@mui/material/colors';
const theme =  createTheme({
  palette:{
  mode : "dark",
  primary : {
    main : "#F9E2AF"
  },
  secondary:{
    main : "#009FBD"
  },
  error:{
    main : red[100]
  },
  warning:{
    main : "#77037B"
  },
  info:{
    main:"#FF6000"
  }
}
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline >
    <App />
    </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

