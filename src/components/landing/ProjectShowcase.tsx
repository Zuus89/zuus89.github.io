'use client';

import { motion } from 'framer-motion';
import { useCube, type CubeScene } from '@/context/CubeContext';
import TechTags from '@/components/ui/TechTags';
import VideoThumbnail from '@/components/ui/VideoThumbnail';

interface ShowcaseProject {
  title: string;
  description: string;
  tags: string[];
  cubeScene: CubeScene;
  mediaSrc?: string;
  mediaType?: 'image' | 'video';
  href: string;
}

const showcaseProjects: ShowcaseProject[] = [
  {
    title: 'Mental Health Power BI Dashboard',
    description: 'Full ETL pipeline in Python and snowflake-style data model for Power BI, analyzing mental health disorder prevalence globally.',
    tags: ['Power BI', 'SQL', 'Python', 'ETL'],
    cubeScene: 'bar-chart',
    mediaSrc: '/media/videos/mental_health.mp4',
    mediaType: 'video',
    href: 'https://github.com/Zuus89/mental_health_pbi',
  },
  {
    title: 'Earthquake Azure Data Pipeline',
    description: 'End-to-end automated data pipeline in Microsoft Fabric transforming earthquake data from the USGS API into insights.',
    tags: ['Microsoft Fabric', 'PySpark', 'Data Factory', 'Power BI'],
    cubeScene: 'etl-pipeline',
    mediaSrc: '/media/covers/earthquake_cover.png',
    mediaType: 'image',
    href: '/projects/earthquake-azure-data-pipeline',
  },
  {
    title: 'Retail Analytics SQL',
    description: 'Structured SQL portfolio solving business problems through sales analysis, segmentation, and KPI optimization.',
    tags: ['SQL', 'Retail Analytics'],
    cubeScene: 'sql-query',
    mediaSrc: '/media/covers/retail_sql_cover.jpg',
    mediaType: 'image',
    href: '/projects/retail-analytics-sql',
  },
];

function ProjectShowcaseCard({ project, index }: { project: ShowcaseProject; index: number }) {
  const { setActiveScene } = useCube();

  return (
    <motion.article
      className="group relative bg-card-bg border border-glass-border rounded-lg p-8 backdrop-blur-[12px] overflow-hidden cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:border-border-glow hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_40px_rgba(0,220,255,0.08),inset_0_1px_0_rgba(255,255,255,0.05)]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 + index * 0.15, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      onMouseEnter={() => setActiveScene(project.cubeScene)}
      onMouseLeave={() => setActiveScene('default')}
    >
      {/* Top glow line on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]" />

      {/* Title */}
      <h3 className="font-sans text-[1.3rem] font-semibold tracking-[-0.01em] mb-5 group-hover:text-accent transition-colors duration-normal">
        {project.title}
      </h3>

      {/* Horizontal: Thumbnail left + Description right */}
      <div className="flex gap-4 mb-6 items-start">
        {/* Media thumbnail */}
        <div className="relative w-[110px] h-[80px] flex-shrink-0 overflow-hidden rounded-md bg-gradient-to-br from-[#141e32] to-[#1a2744] border border-glass-border">
          {project.mediaType === 'video' && project.mediaSrc ? (
            <VideoThumbnail src={project.mediaSrc} alt={project.title} className="h-full object-cover" />
          ) : project.mediaSrc ? (
            <img
              src={project.mediaSrc}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-muted-dim text-xs">Preview</span>
            </div>
          )}
          {/* DEMO badge */}
          <div className="absolute top-1 right-1 bg-accent text-background font-mono text-[0.55rem] font-bold px-1.5 py-0.5 rounded-[3px] tracking-[0.05em]">
            DEMO
          </div>
          {/* Play button */}
          <div className="absolute bottom-1.5 left-1.5 w-6 h-6 rounded-full bg-black/60 border border-white/20 flex items-center justify-center">
            <div className="w-0 h-0 border-l-[7px] border-l-primary border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-0.5" />
          </div>
        </div>

        {/* Description */}
        <p className="font-mono text-[0.78rem] leading-[1.6] text-muted-dim flex-1">
          {project.description}
        </p>
      </div>

      {/* Tech tags */}
      <TechTags tags={project.tags} />
    </motion.article>
  );
}

export default function ProjectShowcase() {
  return (
    <section className="relative z-[1] px-6 lg:px-12 pb-12 lg:pb-24">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseProjects.map((project, i) => (
            <ProjectShowcaseCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
