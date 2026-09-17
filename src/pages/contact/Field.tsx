interface FieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
  error?: string;
}

export const Field = (
    { label, name, type = 'text', placeholder, textarea, error 
}: FieldProps) => {
  const baseClass =
    'w-full rounded-lg border bg-background/50 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors';
  const borderClass = error ? 'border-destructive/50' : 'border-border';

  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          placeholder={placeholder}
          aria-invalid={!!error}
          className={`${baseClass} ${borderClass} resize-none`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          aria-invalid={!!error}
          className={`${baseClass} ${borderClass}`}
        />
      )}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
