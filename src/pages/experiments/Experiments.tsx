import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { experiments } from '@/data/content';

export const Experiments = () => {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="More experiments"
          title="Side projects & explorations"
          description="Smaller projects exploring AI agents, APIs, .NET and developer tooling."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {experiments.map((exp, i) => (
            <Reveal key={exp.name} delay={i * 0.06}>
              <div className="group h-full rounded-xl border border-border bg-card/40 p-5 transition-colors hover:border-accent/25">
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-accent/80">
                  {exp.category}
                </span>
                <h3 className="mt-2 text-base font-semibold">{exp.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-border bg-secondary/40 px-2 py-0.5 font-mono text-[0.7rem] text-muted-foreground"
                    >
                      {tech}
                    </span>
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
