import Link from 'next/link';
import type { Project } from '@/data/projects';
import TechTags from './TechTags';
import VideoThumbnail from './VideoThumbnail';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isExternal = project.linkType === 'external';
  const Wrapper = isExternal ? 'a' : Link;
  const wrapperProps = isExternal
    ? { href: project.href, target: '_blank' as const, rel: 'noopener noreferrer' }
    : { href: project.href };

  return (
    <article className="group bg-surface border border-border rounded-md overflow-hidden transition-colors duration-fast hover:border-border-hover">
      {/* Media */}
      <div className="overflow-hidden">
        {project.mediaType === 'video' ? (
          <VideoThumbnail
            src={project.mediaSrc}
            alt={project.mediaAlt}
            className="aspect-video transition-transform duration-normal group-hover:scale-105"
          />
        ) : (
          <Wrapper {...wrapperProps}>
            <img
              src={project.mediaSrc}
              alt={project.mediaAlt || project.title}
              loading="lazy"
              className="w-full aspect-video object-cover transition-transform duration-normal group-hover:scale-105"
            />
          </Wrapper>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">
        <Wrapper {...wrapperProps} className="hover:text-accent">
          <h3 className="text-lg font-semibold text-primary leading-tight">
            {project.title}
          </h3>
        </Wrapper>

        <TechTags tags={project.tags} />

        <p className="text-sm text-muted leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>
    </article>
  );
}
