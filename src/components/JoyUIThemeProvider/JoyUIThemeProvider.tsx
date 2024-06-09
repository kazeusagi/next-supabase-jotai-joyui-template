'use client';

import { Inter, Noto_Sans_JP } from 'next/font/google';

import { CssBaseline, CssVarsProvider, extendTheme } from '@mui/joy';

const inter = Inter({ subsets: ['latin'] });
const notosansjp = Noto_Sans_JP({ subsets: ['latin'] });

export type Props = {
  children: React.ReactNode;
};

export function JoyUIThemeProvider({ children }: Props) {
  const theme = extendTheme({
    fontFamily: {
      body: `${inter.style.fontFamily}, ${notosansjp.style.fontFamily}, sans-serif`,
    },
  });

  return (
    <CssVarsProvider defaultMode='dark' theme={theme}>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}
