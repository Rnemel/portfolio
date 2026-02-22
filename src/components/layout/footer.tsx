import Link from 'next/link';
import { profile } from '@/data/profile';

export function Footer() {
  return (
    <footer className="border-t border-surface/80 bg-background/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-6">
        <div className="space-y-1">
          <p className="font-medium text-text/80">
            Full-Stack Developer | AI Engineer | Technology Consulting
          </p>
          <p className="text-muted/70">
            Designing, shipping, and scaling production systems where reliability and impact
            matter.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex gap-3">
            <a
              href={profile.links.github}
              className="hover:text-accent"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              className="hover:text-accent"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href={profile.links.email} className="hover:text-accent">
              Email
            </a>
          </div>
          <span className="text-muted/60">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
