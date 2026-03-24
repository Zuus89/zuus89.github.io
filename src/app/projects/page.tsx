import PageWrapper from '@/components/layout/PageWrapper';
import ProjectCard from '@/components/projects/ProjectCard';
import { allProjects } from '@/data/projects';

export const metadata = {
  title: 'All Projects | Cristobal Elton',
  description: 'Complete portfolio of data analytics and engineering projects.',
};

export default function ProjectsPage() {
  return (
    <PageWrapper showIntro={false}>
      <header className="major">
        <h2>All Projects</h2>
        <p>Complete portfolio of data analytics and engineering projects.</p>
      </header>
      <section className="posts">
        {allProjects.map(project => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </PageWrapper>
  );
}
