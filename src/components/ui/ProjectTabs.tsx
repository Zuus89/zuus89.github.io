'use client';

import { useState } from 'react';
import type { ProjectTab } from '@/data/projects';
import MarkdownRenderer from '@/components/content/MarkdownRenderer';
import SqlCodeBlock from '@/components/content/SqlCodeBlock';

interface ProjectTabsProps {
  tabs: ProjectTab[];
  tabContents: Record<string, string>;
}

export default function ProjectTabs({ tabs, tabContents }: ProjectTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');

  return (
    <div>
      {/* Tab bar */}
      <nav className="flex gap-1 border-b border-border mb-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2.5 text-sm font-medium transition-colors duration-fast cursor-pointer -mb-px border-b-2 ${
              activeTab === tab.id
                ? 'border-accent text-primary'
                : 'border-transparent text-muted hover:text-primary hover:border-border-hover'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Tab content */}
      {tabs.map(tab => (
        <div
          key={tab.id}
          className={`transition-opacity duration-normal ${
            activeTab === tab.id
              ? 'block opacity-100'
              : 'hidden opacity-0'
          }`}
        >
          {tab.type === 'markdown' && tabContents[tab.id] && (
            <MarkdownRenderer content={tabContents[tab.id]} />
          )}
          {tab.type === 'sql' && tabContents[tab.id] && (
            <SqlCodeBlock code={tabContents[tab.id]} />
          )}
        </div>
      ))}
    </div>
  );
}
