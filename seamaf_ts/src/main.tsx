import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { customTheme } from './component/globalStyle/Custom';
import './component/globalStyle/GlobalStyle.css';
import Provider from './store/Provider';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './component/Auth/AuthProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ThemeProvider theme={customTheme}>
      <AuthProvider>
        <Provider>
          <App />
        </Provider>
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
);
