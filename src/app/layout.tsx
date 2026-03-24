import '@/styles/global/main.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cristóbal Elton | Portfolio - Data Analytics & Engineering',
  description:
    'Cristóbal Elton - Portfolio de proyectos en Data Analytics, Data Engineering, Power BI, SQL y Python.',
  openGraph: {
    title: 'Cristóbal Elton — Portfolio de Proyectos en Data & Tecnología',
    description:
      'Explora mis proyectos de Data Analytics, SQL, Power BI y visualizaciones interactivas.',
    images: ['https://cristobalelton.com/media/covers/preview_card.jpg'],
    url: 'https://cristobalelton.com',
    type: 'website',
    siteName: 'Cristóbal Elton Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cristóbal Elton — Portfolio de Proyectos en Data & Tecnología',
    description:
      'Explora mis proyectos de Data Analytics, SQL, Power BI y visualizaciones interactivas.',
    images: ['https://cristobalelton.com/media/covers/preview_card.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <link rel="icon" type="image/x-icon" href="/media/icons/favicon.ico" />
        <link rel="stylesheet" href="/assets/css/fontawesome-all.min.css" />
        <meta httpEquiv="Cache-Control" content="public, max-age=3600" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="is-preload">
        {children}
      </body>
    </html>
  );
}
