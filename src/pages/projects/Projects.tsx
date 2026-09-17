import { useState } from 'react';
import type { Project } from '@/types';
import { ProjectModal } from '@/components/ProjectModal';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
  
  const [selected, setSelected] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          description="A selection of products I've built — from SaaS platforms to business applications. Click any project for a full case study."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1}>
              <ProjectCard project={project} onClick={() => setSelected(project)} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
