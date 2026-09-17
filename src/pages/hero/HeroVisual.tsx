import { motion } from 'framer-motion';

export const HeroVisual = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute right-0 top-32 hidden h-[420px] w-[440px] select-none lg:block"
      aria-hidden
    >
      <div className="relative h-full w-full">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full border border-dashed border-border/50"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-8 rounded-full border border-dashed border-border/40"
        />
        <div className="absolute inset-16 rounded-full border border-border/30" />

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute left-1/2 top-6 -translate-x-1/2"
        >
          <div className="rounded-xl border border-border bg-card/80 px-3 py-2 font-mono text-xs text-accent backdrop-blur-sm">
            &lt;React /&gt;
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute right-4 top-1/2 -translate-y-1/2"
        >
          <div className="rounded-xl border border-border bg-card/80 px-3 py-2 font-mono text-xs text-muted-foreground backdrop-blur-sm">
            TypeScript
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-8 left-10"
        >
          <div className="rounded-xl border border-border bg-card/80 px-3 py-2 font-mono text-xs text-muted-foreground backdrop-blur-sm">
            Node.js
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute bottom-12 right-12"
        >
          <div className="rounded-xl border border-border bg-card/80 px-3 py-2 font-mono text-xs text-muted-foreground backdrop-blur-sm">
            .NET
          </div>
        </motion.div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 shadow-glow">
            <span className="font-mono text-2xl font-bold text-accent">EM</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
