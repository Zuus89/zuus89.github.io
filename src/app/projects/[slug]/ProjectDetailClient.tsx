'use client';

import type { Project } from '@/data/projects';
import SiteLayout from '@/components/layout/SiteLayout';
import ProjectTabs from '@/components/ui/ProjectTabs';
import TechTags from '@/components/ui/TechTags';
import VideoThumbnail from '@/components/ui/VideoThumbnail';
import Button from '@/components/ui/Button';
import Link from 'next/link';

interface ProjectDetailClientProps {
  project: Project;
  tabContents: Record<string, string>;
}

export default function ProjectDetailClient({ project, tabContents }: ProjectDetailClientProps) {
  const githubUrl = project.linkType === 'external'
    ? project.href
    : `https://github.com/Zuus89/${project.slug}`;

  return (
    <SiteLayout>
      {/* Breadcrumbs */}
      <nav className="text-sm text-muted mb-8">
        <Link href="/projects" className="hover:text-primary transition-colors duration-fast">
          Projects
        </Link>
        <span className="mx-2">/</span>
        <span className="text-primary">{project.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-4">{project.title}</h1>
        <p className="text-muted text-lg mb-4">{project.description}</p>
        <TechTags tags={project.tags} />
      </header>

      {/* Media */}
      {project.mediaType === 'image' && (
        <div className="rounded-md overflow-hidden mb-8">
          <img
            src={project.mediaSrc}
            alt={project.mediaAlt || project.title}
            className="w-full object-cover"
          />
        </div>
      )}
      {project.mediaType === 'video' && (
        <div className="rounded-md overflow-hidden mb-8">
          <VideoThumbnail src={project.mediaSrc} alt={project.mediaAlt} className="aspect-video" />
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3 mb-10">
        <Button href={githubUrl} external size="md">
          View on GitHub
        </Button>
        {project.powerBiUrl && (
          <Button href={project.powerBiUrl} external variant="secondary" size="md">
            Live Dashboard
          </Button>
        )}
      </div>

      {/* Tabs */}
      {project.tabs && project.tabs.length > 0 && (
        <ProjectTabs tabs={project.tabs} tabContents={tabContents} />
      )}
    </SiteLayout>
  );
}
