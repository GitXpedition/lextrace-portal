import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LexTrace | The Certainty Framework',
  description: 'LexTrace structures your critical data to provide clarity for your decisions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // SE AÑADIÓ className="dark" A LA ETIQUETA <html>
    <html lang="en" className="dark"> 
      <body className={inter.className}>{children}</body>
    </html>
  );
}
