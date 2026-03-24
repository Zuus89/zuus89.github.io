import type { Project } from '@/data/projects';
import TechTags from './TechTags';
import VideoThumbnail from './VideoThumbnail';
import Button from './Button';

interface FeaturedProjectProps {
  project: Project;
}

export default function FeaturedProject({ project }: FeaturedProjectProps) {
  const isExternal = project.linkType === 'external';

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Media */}
      <div className="overflow-hidden rounded-md">
        {project.powerBiUrl ? (
          <a href={project.powerBiUrl} target="_blank" rel="noopener noreferrer">
            {project.mediaType === 'video' ? (
              <VideoThumbnail src={project.mediaSrc} alt={project.mediaAlt} className="aspect-video" />
            ) : (
              <img
                src={project.mediaSrc}
                alt={project.mediaAlt || project.title}
                className="w-full aspect-video object-cover"
              />
            )}
          </a>
        ) : (
          <>
            {project.mediaType === 'video' ? (
              <VideoThumbnail src={project.mediaSrc} alt={project.mediaAlt} className="aspect-video" />
            ) : (
              <img
                src={project.mediaSrc}
                alt={project.mediaAlt || project.title}
                className="w-full aspect-video object-cover"
              />
            )}
          </>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold tracking-tight text-primary">
          {project.title}
        </h2>

        <TechTags tags={project.tags} />

        <p className="text-muted leading-relaxed">
          {project.description}
        </p>

        <div className="flex gap-3 mt-2">
          <Button
            href={project.href}
            external={isExternal}
            size="lg"
          >
            View Project
          </Button>
          {project.powerBiUrl && (
            <Button
              href={project.powerBiUrl}
              external
              variant="secondary"
              size="lg"
            >
              Live Dashboard
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
