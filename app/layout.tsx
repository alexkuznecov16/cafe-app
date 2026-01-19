import { Metadata } from 'next';
import "./globals.css";
import Header from './layout/Header';
import Footer from './layout/Footer';


export const metadata: Metadata = {
  title: "Cafe app",
  description: "Made by Alexander Kuznecov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Header style={{ borderBottom: "1px solid #ee2"}} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
