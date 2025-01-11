import type { Metadata } from 'next';
import './globals.css';
import RootProviders from '@/providers/RootProviders';
import Header from '@/components/ui/Header';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={''}>
        <Header />
        <RootProviders>{children}</RootProviders>
        <div id="modal-portal" />
      </body>
    </html>
  );
}
