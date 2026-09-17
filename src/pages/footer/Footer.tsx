import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { socialLinks } from '@/data/content';

export const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-secondary">
              <span className="font-mono text-[0.7rem] font-bold">EM</span>
            </span>
            <div>
              <p className="text-sm font-semibold">Elvin Mendez</p>
              <p className="text-xs text-muted-foreground">Software Developer</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-colors hover:text-accent"
            >
              <FaGithub className="h-4 w-4" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-colors hover:text-accent"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
            <a
              href={socialLinks.email}
              aria-label="Email"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-colors hover:text-accent"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Elvin Mendez. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted-foreground/70">
            Built with React, TypeScript &amp; curiosity.
          </p>
        </div>
      </div>
    </footer>
  );
}
