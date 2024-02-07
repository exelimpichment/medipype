import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { Toaster } from 'sonner';
import { inter } from './common/fonts/fonts';
import SessionProvider from './common/providers/SessionProvider';
import ThemeProvider from './common/providers/ThemeProvider';

import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} `}>
      <body>
        <ThemeProvider>
          <SessionProvider session={session}>{children}</SessionProvider>
          <Toaster expand={true} />
        </ThemeProvider>
      </body>
    </html>
  );
}
