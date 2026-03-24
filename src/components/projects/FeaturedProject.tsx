import type { Project } from '@/data/projects';
import TechTags from './TechTags';
import VideoThumbnail from './VideoThumbnail';

interface FeaturedProjectProps {
  project: Project;
}

export default function FeaturedProject({ project }: FeaturedProjectProps) {
  const media = project.mediaType === 'video' ? (
    <VideoThumbnail src={project.mediaSrc} alt={project.mediaAlt} />
  ) : (
    <img src={project.mediaSrc} alt={project.mediaAlt || project.title} className="image fit" />
  );

  return (
    <article className="post featured">
      <header className="major">
        <h2>{project.title}</h2>
      </header>
      {project.powerBiUrl ? (
        <a href={project.powerBiUrl} className="image main" target="_blank" rel="noopener">
          {media}
        </a>
      ) : (
        <div className="image main">
          {media}
        </div>
      )}
      <TechTags tags={project.tags} />
      <p>{project.description}</p>
      <ul className="actions special">
        <li>
          <a href={project.href} className="button large" target="_blank" rel="noopener">
            View Project
          </a>
        </li>
      </ul>
    </article>
  );
}
