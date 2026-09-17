import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type { Project } from '@/types';
import { TechBadge } from '@/components/TechBadge';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const statusLabels: Record<Project['status'], string> = {
  live: 'Live',
  'in-development': 'In development',
  completed: 'Completed',
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border border-border bg-card sm:rounded-2xl"
            role="dialog"
            aria-modal="true"
            aria-label={`${project.name} case study`}
          >
            <div
              className="relative h-32 w-full overflow-hidden sm:h-40"
              style={
                project.image
                  ? undefined
                  : { background: `linear-gradient(135deg, hsl(${project.accent} / 0.15) 0%, hsl(${project.accent} / 0.02) 100%)` }
              }
            >
              {project.image ? (
                <>
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                </>
              ) : (
                <div className="absolute inset-0 bg-dots opacity-30" />
              )}
              <div className="absolute left-6 top-6 flex items-center gap-2">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium"
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
              <button
                onClick={onClose}
                className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background/80 text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="px-6 pb-8 pt-6 sm:px-8">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {project.category} · {project.year}
                </span>
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {project.name}
                </h3>
                <p className="text-base text-muted-foreground">{project.tagline}</p>
              </div>

              <div className="mt-6 space-y-6">
                <CaseStudySection title="Overview" body={project.caseStudy.overview} />
                <CaseStudySection title="Problem" body={project.caseStudy.problem} />
                <CaseStudySection title="Solution" body={project.caseStudy.solution} />

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Key features
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {project.caseStudy.keyFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/90">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: `hsl(${project.accent})` }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.caseStudy.architecture && (
                  <CaseStudySection title="Architecture" body={project.caseStudy.architecture} />
                )}
                {project.caseStudy.challenges && (
                  <CaseStudySection title="Challenges" body={project.caseStudy.challenges} />
                )}

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Stack
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 border-t border-border pt-6">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/40"
                    >
                      <FaGithub className="h-4 w-4" />
                      GitHub
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-all hover:shadow-glow"
                    >
                      Live Demo
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

function CaseStudySection({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-foreground/90">{body}</p>
    </div>
  );
}
