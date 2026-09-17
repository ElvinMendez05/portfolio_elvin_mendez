import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { philosophy } from '@/data/content';

export const Philosophy = () => {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How I build"
          title="My approach to software"
          description="A few principles I follow when building products."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {philosophy.map((item, i) => (
            <Reveal key={item.number} delay={i * 0.08}>
              <div className="group h-full rounded-xl border border-border bg-card/40 p-6 transition-colors hover:border-accent/25">
                <span className="font-mono text-2xl font-bold text-accent/30 transition-colors group-hover:text-accent/50">
                  {item.number}
                </span>
                <h3 className="mt-3 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
