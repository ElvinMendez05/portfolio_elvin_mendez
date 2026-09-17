import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { skillCategories } from '@/data/content';

export const Skills = () => {
  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Technologies I work with"
          description="My primary focus is React and TypeScript on the frontend, with strong backend capabilities across Node.js and .NET."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <Reveal key={category.title} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-border bg-card/40 p-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {category.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={
                        skill.primary
                          ? 'inline-flex items-center rounded-lg border border-accent/30 bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent'
                          : 'inline-flex items-center rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-sm font-medium text-foreground/85'
                      }
                    >
                      {skill.name}
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
