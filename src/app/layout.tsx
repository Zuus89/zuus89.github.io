import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cristóbal Elton | Data Analytics & Engineering',
  description:
    'Independent Data Architect & Engineer — building scalable analytics infrastructure, ETL pipelines, and enterprise data models.',
  openGraph: {
    title: 'Cristóbal Elton — Data Architecture & Engineering Portfolio',
    description:
      'Explore projects in Data Analytics, SQL, Power BI, and interactive data visualizations.',
    images: ['https://cristobalelton.com/media/covers/preview_card.jpg'],
    url: 'https://cristobalelton.com',
    type: 'website',
    siteName: 'Cristóbal Elton',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cristóbal Elton — Data Architecture & Engineering Portfolio',
    description:
      'Explore projects in Data Analytics, SQL, Power BI, and interactive data visualizations.',
    images: ['https://cristobalelton.com/media/covers/preview_card.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" type="image/x-icon" href="/media/icons/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/fontawesome-all.min.css" />
      </head>
      <body className="bg-background text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
