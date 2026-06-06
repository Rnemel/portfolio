import type { Metadata } from 'next';
import { FadeIn, Section } from '@/components/section';
import { TopNav } from '@/components/top-nav';
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
        <TopNav />
        <FadeIn>
          <h1 className="text-2xl font-semibold text-text md:text-3xl">Projects</h1>
        </FadeIn>
      </Section>

      <Section className="pt-0">
        <ProjectsGrid projects={projects} />
      </Section>
    </>
  );
}
