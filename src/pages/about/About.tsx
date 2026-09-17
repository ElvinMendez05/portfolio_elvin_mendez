import { GraduationCap, Languages } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { aboutValues } from '@/data/content';

export const About = () => {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="A developer who thinks in products."
          description="I build modern web applications with a focus on clean architecture, maintainability and user experience — working across frontend and backend to ship complete solutions."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-12">
          <Reveal className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="relative shrink-0 overflow-hidden rounded-2xl border border-border bg-secondary">
                <img
                  src="https://images.pexels.com/photos/6804094/pexels-photo-6804094.jpeg?auto=compress&cs=tinysrgb&h=400&w=400"
                  alt="Elvin Mendez"
                  className="h-24 w-24 object-cover sm:h-28 sm:w-28"
                  loading="lazy"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-accent/20 rounded-2xl" />
              </div>
              <div className="pt-1">
                <h3 className="text-lg font-semibold">Elvin Mendez</h3>
                <p className="text-sm text-muted-foreground">Software Developer</p>
              </div>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              I'm a software developer graduated from the{' '}
              <span className="text-foreground">Software Development Technology</span> program at
              ITLA. My main focus is building web applications and SaaS products with React and
              TypeScript, with solid experience on the backend side using Node.js, Express and .NET.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              I care about building things that work — not just demos. I'm especially interested in
              SaaS, web applications, APIs, AI-powered products and product development. I enjoy
              turning an idea into a real, usable product.
            </p>

            <div className="pt-2">
              <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
                What I care about
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {aboutValues.map((value) => (
                  <span
                    key={value}
                    className="inline-flex items-center rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-sm font-medium text-foreground/90"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-4">
            <div className="rounded-xl border border-border bg-card/50 p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary">
                  <GraduationCap className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Education</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tecnólogo en Desarrollo de Software
                  </p>
                  <p className="text-xs text-muted-foreground/70">ITLA</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card/50 p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary">
                  <Languages className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">English — C1</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Advanced level, comfortable working in international teams.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-accent/20 bg-accent/5 p-5">
              <p className="font-mono text-sm text-accent">Building. Learning. Shipping.</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Turning ideas into software, one commit at a time.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
