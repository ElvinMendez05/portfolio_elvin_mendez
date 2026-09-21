import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Loader2, Mail } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { SocialLinks } from '@/components/SocialLinks';
import { socialLinks } from '@/data/content';
import { Field } from './Field';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const name = (data.get('name') as string)?.trim();
        const email = (data.get('email') as string)?.trim();
        const message = (data.get('message') as string)?.trim();

        const next: typeof errors = {};
        if (!name) next.name = 'Please enter your name.';
        if (!email) next.email = 'Please enter your email.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Please enter a valid email.';
        if (!message) next.message = 'Please enter a message.';
        setErrors(next);
        if (Object.keys(next).length > 0) return;

        setStatus('loading');

        // Obtener la URL según tu framework:
        const endpoint = import.meta.env.VITE_FORMSPREE_URL; 

        try {
          const response = await fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify({ name, email, message }),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            setStatus('success');
            form.reset();
            setTimeout(() => setStatus('idle'), 4000);
          } else {
            setStatus('error');
          }
        } catch (error) {
          console.error('Error sending email:', error);
          setStatus('error');
        }
    };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/8 blur-[120px]" />
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something."
          description="If you have a project, product or idea and need help building it, I'd love to hear from you."
          align="center"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
          <Reveal className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Get in touch
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Whether it's a full project, a collaboration or just a question — feel free to
                reach out through any of these channels.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={socialLinks.email}
                className="group flex items-center gap-3 rounded-lg border border-border bg-card/40 p-4 transition-colors hover:border-accent/30"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary">
                  <Mail className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium">elvinmendez005@gmail.com</p>
                </div>
              </a>

                <div className="space-y-3">
              <a
                href={socialLinks.email}
                className="group flex items-center gap-3 rounded-lg border border-border bg-card/40 p-4 transition-colors hover:border-accent/30"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary">
                  <Mail className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium">elvinmanuel005@gmail.com</p>
                </div>
              </a>
            </div>

            </div>


            <div>
              <p className="mb-2 text-xs text-muted-foreground">Find me on</p>
              <SocialLinks />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-xl border border-border bg-card/50 p-6 sm:p-8"
            >
              <div className="space-y-5">
                <Field label="Name" name="name" error={errors.name} placeholder="Your name" />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  error={errors.email}
                  placeholder="you@example.com"
                />
                <Field
                  label="Message"
                  name="message"
                  textarea
                  error={errors.message}
                  placeholder="Tell me about your project..."
                />

                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition-all hover:opacity-90 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'loading' && (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  )}
                  {status === 'success' && (
                    <>
                      <Check className="h-4 w-4" />
                      Message sent
                    </>
                  )}
                  {(status === 'idle' || status === 'error') && (
                    <>
                      Send message
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-sm text-accent"
                  >
                    Thanks for reaching out — I'll get back to you soon.
                  </motion.p>
                )}
                {status === 'error' && (
                  <p className="text-center text-sm text-destructive">
                    Something went wrong. Please try again or email directly.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
