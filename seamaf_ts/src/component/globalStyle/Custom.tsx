import { createTheme } from '@mui/material';

interface ThemeOptions {
  typography?: {
    fontFamily?: string,
    fontSize?:string,
  };
}

export const customTheme = createTheme({
  typography: {
    fontFamily: '"Josefin Sans"',
  }
});
