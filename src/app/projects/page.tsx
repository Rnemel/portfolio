import type { Metadata } from 'next';
import { FadeIn, Section } from '@/components/section';
import { projects } from '@/data/projects';
import { ProjectsGrid } from './projects-grid';

export const metadata: Metadata = {
  title: 'Projects | Full-Stack Developer & AI Engineer',
  description:
    'Case studies showing how I deliver measurable impact through full-stack engineering, applied machine learning, and technology consulting.',
};

export default function ProjectsPage() {
  return (
    <>
      <Section>
        <FadeIn>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.26em] text-muted/80">
                Projects &amp; case studies
              </p>
              <h1 className="text-2xl font-semibold text-text md:text-3xl">
                From problem framing to shipped, measurable outcomes
              </h1>
              <p className="max-w-2xl text-sm text-muted">
                Each project pairs technical implementation with clear success metrics. I work
                end-to-end: from discovery and scoping through architecture, implementation,
                rollout, and iteration.
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section className="pt-0">
        <ProjectsGrid projects={projects} />
      </Section>
    </>
  );
}
