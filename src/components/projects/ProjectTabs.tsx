'use client';

import { useState } from 'react';
import type { ProjectTab } from '@/data/projects';
import MarkdownRenderer from '@/components/content/MarkdownRenderer';
import SqlCodeBlock from '@/components/content/SqlCodeBlock';
import styles from '@/styles/modules/ProjectTabs.module.scss';

interface ProjectTabsProps {
  tabs: ProjectTab[];
  tabContents: Record<string, string>;
}

export default function ProjectTabs({ tabs, tabContents }: ProjectTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');

  return (
    <>
      <nav className={styles.subnav}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`${styles.subnavLink}${activeTab === tab.id ? ` ${styles.active}` : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {tabs.map(tab => (
        <div
          key={tab.id}
          className={`${styles.tabContent}${activeTab === tab.id ? ` ${styles.tabContentActive}` : ''}`}
        >
          {tab.type === 'markdown' && tabContents[tab.id] && (
            <MarkdownRenderer content={tabContents[tab.id]} />
          )}
          {tab.type === 'sql' && tabContents[tab.id] && (
            <SqlCodeBlock code={tabContents[tab.id]} />
          )}
        </div>
      ))}
    </>
  );
}
