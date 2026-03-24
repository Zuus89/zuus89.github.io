'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav id="nav">
      <ul className="links">
        <li className={pathname === '/' ? 'active' : ''}>
          <Link href="/">Home</Link>
        </li>
        <li>
          <a href="https://github.com/Zuus89/mental_health_pbi" target="_blank" rel="noopener">
            Mental Health Dashboard
          </a>
        </li>
        <li className={pathname === '/earthquake-azure-data-pipeline/' ? 'active' : ''}>
          <Link href="/earthquake-azure-data-pipeline/">Earthquake Data Pipeline</Link>
        </li>
        <li>
          <a href="https://github.com/Zuus89/skinautica-bsale-powerbi" target="_blank" rel="noopener">
            Sporting Goods Data Pipeline
          </a>
        </li>
        <li>
          <a href="https://github.com/Zuus89/retail-analytics-sql" target="_blank" rel="noopener">
            Retail Analytics SQL
          </a>
        </li>
        <li className={pathname === '/projects/' ? 'active' : ''}>
          <Link href="/projects/">All Projects</Link>
        </li>
      </ul>
      <ul className="icons">
        <li>
          <a
            href="https://www.linkedin.com/in/cristobalelton/"
            className="icon brands fa-linkedin"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn Profile"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Zuus89"
            className="icon brands fa-github"
            target="_blank"
            rel="noopener"
            aria-label="GitHub Profile"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/34682295486"
            className="icon brands fa-whatsapp"
            target="_blank"
            rel="noopener"
            aria-label="WhatsApp Contact"
          >
            <span className="label">WhatsApp</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:celton.aret@gmail.com"
            className="icon solid fa-envelope"
            aria-label="Email Contact"
          >
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
