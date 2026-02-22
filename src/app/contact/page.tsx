import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { FadeIn, Section } from '@/components/section';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: 'Contact | Full-Stack Developer & AI Engineer',
  description:
    "If you're building a product, exploring AI, or need structured technical thinking — get in touch.",
};

export default function ContactPage() {
  return (
    <Section>
      <FadeIn>
        <div className="mx-auto flex max-w-xl flex-col items-center gap-6 text-center">
          <p className="text-[11px] uppercase tracking-[0.26em] text-muted/80">Contact</p>
          <h1 className="text-3xl font-semibold text-text md:text-4xl">Let&apos;s talk.</h1>
          <p className="max-w-lg text-sm text-muted">
            If you&apos;re building a product, exploring AI, or need structured technical thinking ،I&apos;m
            open to serious conversations and collaborations.
          </p>
          <a href={profile.links.email}>
            <Button>Email Me</Button>
          </a>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-muted/90">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent"
            >
              GitHub
            </a>
            <span className="h-1 w-1 rounded-full bg-muted/50" />
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent"
            >
              LinkedIn
            </a>
            <span className="h-1 w-1 rounded-full bg-muted/50" />
            <a href={profile.links.cv} target="_blank" rel="noreferrer" className="hover:text-accent">
              Download CV
            </a>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
