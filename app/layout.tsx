import { Metadata } from 'next';
import './globals.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import ScrollToTopWidget from './components/ScrollToTop/ScrollToTopWidget';
import ScrollProgressBar from './components/ScrollProgressBar/ScrollProgressBar';
import ReduxProvider from './provider';

export const metadata: Metadata = {
  title: 'Cafe app',
  description: 'Made by Alexander Kuznecov',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ReduxProvider>
          <ScrollProgressBar />
          <Header />
          <main>
            <div className="container">{children}</div>
          </main>
          <ScrollToTopWidget />
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
