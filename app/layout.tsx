import type { Metadata } from 'next';

import { Toaster } from 'sonner';
import { inter } from './common/fonts/fonts';
import SessionProvider from './common/providers/SessionProvider';
import ThemeProvider from './common/providers/ThemeProvider';

import NavBar from './common/navbar/Navbar';
import { ModalProvider } from './common/providers/ModalProvider';
import TanQueryClientProvider from './common/providers/TanQueryClientProvider';
import './globals.css';
import { CounterStoreProvider } from './store/CountersStoreProvider';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} `}>
      <body>
        <ThemeProvider>
          <SessionProvider>
            <TanQueryClientProvider>
            <NavBar />
            <CounterStoreProvider>{children}</CounterStoreProvider>
            </TanQueryClientProvider>
          </SessionProvider>
          <Toaster expand={true} />
          <ModalProvider />
        </ThemeProvider>
      </body>
    </html>
  );
}
