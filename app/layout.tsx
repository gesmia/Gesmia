import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thappie",
  description: "Una app de seguridad personal",
};

const HotjarLoader = dynamic(() => import('./hotjar-loader'), {
  ssr: false
});

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
        <HotjarLoader />
      </body>
    </html>
  );
}
