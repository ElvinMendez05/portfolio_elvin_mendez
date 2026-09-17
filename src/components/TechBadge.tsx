import { cn } from '@/lib/utils';

interface TechBadgeProps {
  name: string;
  primary?: boolean;
  className?: string;
}

export function TechBadge({ name, primary, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium transition-colors',
        primary
          ? 'border-accent/30 bg-accent/10 text-accent'
          : 'border-border bg-secondary text-muted-foreground',
        className,
      )}
    >
      {name}
    </span>
  );
}
