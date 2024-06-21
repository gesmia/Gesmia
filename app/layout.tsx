import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thappie",
  description: "Una app de seguridad personal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Thappie</title>
        <meta name="description" content="Una app de seguridad personal" />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
