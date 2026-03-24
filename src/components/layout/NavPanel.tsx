'use client';

import Link from 'next/link';
import { useNavPanel } from '@/hooks/useNavPanel';

export default function NavPanel() {
  const { isOpen, open, close } = useNavPanel();

  return (
    <>
      <button id="navPanelToggle" onClick={open} aria-label="Toggle navigation">
        Menu
      </button>

      <div id="navPanel" className={isOpen ? 'visible' : ''}>
        <nav>
          <Link href="/" onClick={close}>Home</Link>
          <a href="https://github.com/Zuus89/mental_health_pbi" target="_blank" rel="noopener">
            Mental Health Dashboard
          </a>
          <Link href="/earthquake-azure-data-pipeline/" onClick={close}>
            Earthquake Data Pipeline
          </Link>
          <a href="https://github.com/Zuus89/skinautica-bsale-powerbi" target="_blank" rel="noopener">
            Sporting Goods Data Pipeline
          </a>
          <a href="https://github.com/Zuus89/retail-analytics-sql" target="_blank" rel="noopener">
            Retail Analytics SQL
          </a>
          <Link href="/projects/" onClick={close}>All Projects</Link>
        </nav>
        <a className="close" onClick={close} href="#navPanel" aria-label="Close navigation" />
      </div>
    </>
  );
}
