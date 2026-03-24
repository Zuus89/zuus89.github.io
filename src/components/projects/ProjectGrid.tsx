import { ReactNode } from 'react';

interface ProjectGridProps {
  children: ReactNode;
}

export default function ProjectGrid({ children }: ProjectGridProps) {
  return (
    <section className="posts">
      {children}
    </section>
  );
}
