import SiteLayout from '@/components/layout/SiteLayout';
import ProjectCard from '@/components/ui/ProjectCard';
import { allProjects } from '@/data/projects';

export const metadata = {
  title: 'All Projects | Cristóbal Elton',
  description: 'Complete portfolio of data analytics and engineering projects.',
};

export default function ProjectsPage() {
  return (
    <SiteLayout>
      <section className="py-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">All Projects</h1>
        <p className="text-muted mb-10">
          Complete portfolio of data analytics and engineering projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
