import Header from './Header';
import Footer from './Footer';

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
