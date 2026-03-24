import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header id="header">
      <Link href="/" className="logo">
        Cristóbal Elton
      </Link>
    </header>
  );
}
