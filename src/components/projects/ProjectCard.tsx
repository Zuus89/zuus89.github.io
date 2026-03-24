import Link from 'next/link';
import type { Project } from '@/data/projects';
import TechTags from './TechTags';
import VideoThumbnail from './VideoThumbnail';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isExternal = project.linkType === 'external';

  const media = project.mediaType === 'video' ? (
    <VideoThumbnail src={project.mediaSrc} alt={project.mediaAlt} />
  ) : (
    <img src={project.mediaSrc} alt={project.mediaAlt || project.title} className="image fit" />
  );

  const linkContent = (
    <>
      {media}
      <h3>{project.title}</h3>
      <TechTags tags={project.tags} />
      <p>{project.description}</p>
      <ul className="actions">
        <li>
          {isExternal ? (
            <a href={project.href} className="button" target="_blank" rel="noopener">
              View Project
            </a>
          ) : (
            <Link href={project.href} className="button">
              View Project
            </Link>
          )}
        </li>
      </ul>
    </>
  );

  return (
    <article>
      {linkContent}
    </article>
  );
}
