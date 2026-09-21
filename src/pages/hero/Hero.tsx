import { motion, type Variants } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { HeroVisual } from './HeroVisual';

const heroTech = ['React', 'Vite', 'TypeScript', 'Node.js', '.NET'];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-36 md:pt-44 md:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-[0.35]" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              Available for new projects
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          >
            Building modern web 
            <br />
            applications and 
            <br /> 
            <span className="gradient-text">digital products.</span>

          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I'm Elvin Mendez, a software developer focused on building products with React,
            TypeScript and scalable backend technologies — with an emphasis on clean
            architecture, great UX and real-world business problems.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition-all hover:opacity-90 hover:shadow-glow"
            >
              View my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary/50 px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-accent/40 hover:bg-secondary"
            >
              Let's work together
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              {heroTech.map((tech, i) => (
                <div key={tech} className="flex items-center gap-3">
                  {i > 0 && <span className="h-1 w-1 rounded-full bg-border" />}
                  <span className="font-mono text-xs text-muted-foreground">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}

