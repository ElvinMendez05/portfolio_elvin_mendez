import { Briefcase } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { TechBadge } from '@/components/TechBadge';
import { experience } from '@/data/content';

export const Experience = () => {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="mt-12 space-y-6">
          {experience.map((item, i) => (
            <Reveal key={item.role} delay={i * 0.1}>
              <div className="relative rounded-xl border border-border bg-card/40 p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary">
                      <Briefcase className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold">{item.role}</h3>
                      <p className="text-sm text-muted-foreground">{item.company}</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground">
                    {item.period}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
