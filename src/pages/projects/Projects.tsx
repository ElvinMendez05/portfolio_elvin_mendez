import { useCallback, useRef, useState } from 'react';
import type { Project } from '@/types';
import { ProjectModal } from '@/components/ProjectModal';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { projects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const startX = useRef<number | null>(null);
  const scrollLeft = useRef(0);

  const maxIndex = Math.max(0, featured.length - 1);

  const scrollToIndex = useCallback((i: number, behavior: ScrollBehavior = 'smooth') => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('[data-card]');
    if (!card) return;
    const cardWidth = (card as HTMLElement).offsetWidth;
    const gap = 24;
    el.scrollTo({ left: i * (cardWidth + gap), behavior });
  }, []);

  const goPrev = useCallback(() => {
    setIndex((prev) => {
      const next = Math.max(0, prev - 1);
      scrollToIndex(next);
      return next;
    });
  }, [scrollToIndex]);

  const goNext = useCallback(() => {
    setIndex((prev) => {
      const next = Math.min(maxIndex, prev + 1);
      scrollToIndex(next);
      return next;
    });
  }, [maxIndex, scrollToIndex]);

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('[data-card]') as HTMLElement | null;
    if (!card) return;
    const cardWidth = card.offsetWidth;
    const gap = 24;
    const i = Math.round(el.scrollLeft / (cardWidth + gap));
    setIndex(Math.max(0, Math.min(maxIndex, i)));
  };

  const onTouchStart = (e: React.TouchEvent) => {
    const el = trackRef.current;
    if (!el) return;
    startX.current = e.touches[0].clientX;
    scrollLeft.current = el.scrollLeft;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    const el = trackRef.current;
    if (startX.current === null || !el) return;
    const delta = startX.current - e.touches[0].clientX;
    el.scrollLeft = scrollLeft.current + delta;
  };

  const canPrev = index > 0;
  const canNext = index < maxIndex;

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Selected Work"
            title="Featured Projects"
            description="A selection of products I've built — from SaaS platforms to business applications. Click any project for a full case study."
          />
          <Reveal delay={0.1}>
            <div className="flex items-center gap-2">
              <button
                onClick={goPrev}
                disabled={!canPrev}
                aria-label="Previous project"
                className={cn(
                  'inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/50 transition-all',
                  canPrev
                    ? 'hover:border-accent/40 hover:text-accent'
                    : 'cursor-not-allowed opacity-40',
                )}
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={goNext}
                disabled={!canNext}
                aria-label="Next project"
                className={cn(
                  'inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/50 transition-all',
                  canNext
                    ? 'hover:border-accent/40 hover:text-accent'
                    : 'cursor-not-allowed opacity-40',
                )}
              >
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-12">
          <div
            ref={trackRef}
            onScroll={onScroll}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {featured.map((project) => (
              <div
                key={project.slug}
                data-card
                className="w-[85%] shrink-0 snap-center sm:w-[calc(50%-12px)] lg:w-[calc(50%-12px)]"
              >
                <ProjectCard project={project} onClick={() => setSelected(project)} />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-4 flex justify-center gap-2">
          {featured.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIndex(i);
                scrollToIndex(i);
              }}
              aria-label={`Go to project ${i + 1}`}
              className={cn(
                'h-1.5 rounded-full transition-all',
                i === index ? 'w-8 bg-accent' : 'w-1.5 bg-border hover:bg-muted-foreground/50',
              )}
            />
          ))}
        </Reveal>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}