import type { Metadata } from 'next';

import { Box } from '@mui/joy';
import { Toaster } from 'react-hot-toast';

import { JoyUIThemeProvider } from '@/components/JoyUIThemeProvider';
import { LoadingBar } from '@/components/LoadingBar';
import { Sidebar } from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'Template App',
  description: 'Next + Supabase + Jotai + JoyUI Template App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body>
        <Toaster />
        <JoyUIThemeProvider>
          <LoadingBar />
          <Box component='main' display='flex'>
            <Sidebar />
            <Box width='100%' p={2}>
              {children}
            </Box>
          </Box>
        </JoyUIThemeProvider>
      </body>
    </html>
  );
}
