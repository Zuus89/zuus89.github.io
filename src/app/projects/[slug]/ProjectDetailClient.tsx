'use client';

import type { Project } from '@/data/projects';
import PageWrapper from '@/components/layout/PageWrapper';
import ProjectTabs from '@/components/projects/ProjectTabs';

interface ProjectDetailClientProps {
  project: Project;
  tabContents: Record<string, string>;
}

export default function ProjectDetailClient({ project, tabContents }: ProjectDetailClientProps) {
  return (
    <PageWrapper showIntro={false}>
      <article>
        <header className="major">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </header>

        {project.mediaType === 'image' && (
          <div className="image main">
            <img
              src={project.mediaSrc}
              alt={project.mediaAlt || project.title}
              className="image fit"
            />
          </div>
        )}

        <ul className="actions special">
          <li>
            <a
              href={project.href.startsWith('/') ? `https://github.com/Zuus89` : project.href}
              className="button large"
              target="_blank"
              rel="noopener"
            >
              View on GitHub
            </a>
          </li>
        </ul>

        {project.tabs && project.tabs.length > 0 && (
          <ProjectTabs tabs={project.tabs} tabContents={tabContents} />
        )}
      </article>
    </PageWrapper>
  );
}
