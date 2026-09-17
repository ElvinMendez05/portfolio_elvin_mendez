import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { socialLinks } from '@/data/content';

const icons = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: Mail,
} as const;

type SocialKey = keyof typeof socialLinks;

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      {(Object.keys(socialLinks) as SocialKey[]).map((key) => {
        const Icon = icons[key];
        return (
          <a
            key={key}
            href={socialLinks[key]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={key}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/50 text-muted-foreground transition-all hover:border-accent/40 hover:text-accent"
          >
            <Icon className={cn('h-4 w-4', iconClassName)} />
          </a>
        );
      })}
    </div>
  );
}
