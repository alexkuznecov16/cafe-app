import { Metadata } from 'next';
import './globals.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import ScrollToTopWidget from './components/ScrollToTop/ScrollToTopWidget';
import ScrollProgressBar from './components/ScrollProgressBar/ScrollProgressBar';
import ReduxProvider from './provider';

export const metadata: Metadata = {
  title: 'Neon Restaurant: The Best Place to Eat in the USA',
  description:
    'Neon Restaurant — a futuristic dining experience serving signature fire-grilled dishes, fresh local ingredients, and crafted cocktails. Join thousands of happy guests and enjoy unforgettable nights in the heart of the city.',
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
