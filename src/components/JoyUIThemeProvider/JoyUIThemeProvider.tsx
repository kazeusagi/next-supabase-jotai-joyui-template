'use client';

import { CssBaseline, CssVarsProvider, extendTheme } from '@mui/joy';

export type Props = {
  children: React.ReactNode;
};

export function JoyUIThemeProvider({ children }: Props) {
  const theme = extendTheme({
    fontFamily: {
      body: 'Noto Sans JP',
    },
  });

  return (
    <CssVarsProvider defaultMode='dark' theme={theme}>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}
