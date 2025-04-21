import type { Metadata } from 'next';
import './globals.css';
import Header from './_layout/header';
import Footer from './_layout/footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const metadata: Metadata = {
  title: 'MD. Shihab Parves',
  description: 'Developed by MD. Mehedi Hassan',
  alternates: {
    canonical: 'https://www.mehedihassan.me',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-inter">
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
