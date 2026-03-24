import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import ProjectDetailClient from './ProjectDetailClient';

export function generateStaticParams() {
  return projects
    .filter(p => p.tabs && p.tabs.length > 0)
    .map(p => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | Cristobal Elton`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project || !project.tabs) notFound();

  const tabContents: Record<string, string> = {};
  for (const tab of project.tabs) {
    if (tab.contentPath) {
      const filePath = path.join(process.cwd(), 'public', tab.contentPath);
      tabContents[tab.id] = fs.readFileSync(filePath, 'utf-8');
    }
  }

  return <ProjectDetailClient project={project} tabContents={tabContents} />;
}
