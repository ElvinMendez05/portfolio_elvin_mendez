import type { Project } from '@/types';
import { motion } from 'framer-motion';
import { ArrowUpRight} from 'lucide-react';
import { TechBadge } from '@/components/TechBadge';
import { FaGithub } from 'react-icons/fa';

const statusLabels: Record<Project['status'], string> = {
  live: 'Live',
  'in-development': 'In development',
  completed: 'Completed',
};

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card/50 text-left transition-colors hover:border-accent/30"
    >
      <div
        className="relative h-44 w-full overflow-hidden"
        style={
          project.image
            ? undefined
            : { background: `linear-gradient(135deg, hsl(${project.accent} / 0.12) 0%, hsl(${project.accent} / 0.02) 100%)` }
        }
      >
        {project.image ? (
          <>
            <img
              src={project.image}
              alt={`${project.name} preview`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-dots opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="font-mono text-3xl font-bold tracking-tight opacity-20 transition-opacity group-hover:opacity-30"
                style={{ color: `hsl(${project.accent})` }}
              >
                {project.name}
              </span>
            </div>
          </>
        )}
        <div className="absolute left-4 top-4">
          <span
            className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium backdrop-blur-sm"
            style={{
              borderColor: `hsl(${project.accent} / 0.3)`,
              color: `hsl(${project.accent})`,
              backgroundColor: `hsl(${project.accent} / 0.08)`,
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: `hsl(${project.accent})` }}
            />
            {statusLabels[project.status]}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {project.category} · {project.year}
            </span>
            <h3 className="mt-1 text-xl font-semibold tracking-tight">{project.name}</h3>
          </div>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
          {project.technologies.length > 5 && (
            <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium text-muted-foreground/60">
              +{project.technologies.length - 5}
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <FaGithub className="h-3.5 w-3.5" />
              Code
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
              Demo
            </a>
          )}
          <span className="ml-auto text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
            View case study →
          </span>
        </div>
      </div>
    </motion.button>
  );
}