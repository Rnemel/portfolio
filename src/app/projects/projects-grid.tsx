'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { FadeIn } from '@/components/section';
import type { Project, ProjectCategory } from '@/data/projects';
import { hackathons } from '@/data/hackathons';
import { cn } from '@/lib/cn';

type CategoryFilter = 'all' | ProjectCategory;

const categoryRank: Record<ProjectCategory, number> = {
  'ai-ml': 0,
  'full-stack': 1,
  data: 2,
  consulting: 3,
};

const categoryOptions: { value: CategoryFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'ai-ml', label: 'AI / ML' },
  { value: 'full-stack', label: 'Full-stack' },
  { value: 'data', label: 'Data' },
  { value: 'consulting', label: 'Consulting' },
];

type ProjectsGridProps = {
  projects: Project[];
};

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [category, setCategory] = useState<CategoryFilter>('all');

  const filtered = projects.filter((project) =>
    category === 'all' ? true : project.category === category
  );

  const sorted = [...filtered].sort((a, b) => {
    if (category === 'all') {
      const categoryDiff = categoryRank[a.category] - categoryRank[b.category];
      if (categoryDiff !== 0) return categoryDiff;
    }
    return b.year - a.year;
  });

  return (
    <>
      <FadeIn>
        <div className="flex flex-col gap-4 rounded-3xl border-gradient bg-surface/70 px-4 py-4 md:flex-row md:items-center md:px-6 md:py-5">
          <div className="border-gradient-inner space-y-2">
            <p className="text-[11px] uppercase tracking-[0.24em] text-muted/80">
              Filters
            </p>
            <div className="flex flex-wrap gap-2 text-[11px]">
              {categoryOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setCategory(option.value)}
                  className={cn(
                    'rounded-full border px-3 py-1 transition',
                    category === option.value
                      ? 'border-accent bg-accent/15 text-text'
                      : 'border-surface/70 bg-background/40 text-muted hover:border-accent/40'
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="grid gap-6 md:grid-cols-3">
          {sorted.map((project) => (
            <Card key={project.slug}>
              <div className="border-gradient-inner flex h-full flex-col justify-between gap-4">
                <div className="space-y-2">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-muted/70">
                    {project.sector}
                  </p>
                  <h2 className="text-sm font-semibold text-text">{project.title}</h2>
                  <p className="text-xs text-muted">{project.tagline}</p>
                </div>

                <div className="space-y-3 text-[11px] text-muted/90">
                  <div>
                    <p className="text-muted/70">Problem</p>
                    <p className="text-text/90 line-clamp-3">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-muted/70">Approach</p>
                    <p className="line-clamp-3">{project.approach}</p>
                  </div>
                  <div>
                    <p className="text-muted/70">Impact</p>
                    <p className="line-clamp-3">{project.impact}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex flex-wrap gap-1">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-background/80 px-2.5 py-1 text-[11px] text-muted/90"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="rounded-full bg-background/80 px-2.5 py-1 text-[11px] text-muted/70">
                        +{project.stack.length - 3} more
                      </span>
                    )}
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-[11px] font-medium text-muted hover:text-accent"
                  >
                    Open case study →
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </FadeIn>

      <FadeIn>
        <div className="mt-10 space-y-3">
          <p className="text-[11px] uppercase tracking-[0.26em] text-muted/80">
            Hackathon projects
          </p>
          <h2 className="text-xl font-semibold text-text md:text-2xl">
            Validating ideas fast under real constraints
          </h2>
          <p className="max-w-2xl text-sm text-muted">
            These hackathon projects show how I frame problems quickly, align the team, and ship
            working demos that feel like real products.
          </p>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {hackathons.map((hackathon) => (
            <Card key={hackathon.slug}>
              <div className="border-gradient-inner flex h-full flex-col justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-muted/70">
                      {hackathon.organizer}
                    </p>
                  </div>
                  <h3 className="text-sm font-semibold text-text">{hackathon.name}</h3>
                  <p className="text-xs text-muted">{hackathon.impact}</p>
                </div>
                <dl className="grid gap-2 text-[11px] text-muted/90">
                  <div>
                    <dt className="text-muted/70">Role</dt>
                    <dd className="text-text">{hackathon.role}</dd>
                  </div>
                  <div>
                    <dt className="text-muted/70">Result</dt>
                    <dd className="text-text">{hackathon.result}</dd>
                  </div>
                  {hackathon.metrics.slice(0, 1).map((metric) => (
                    <div key={metric.label}>
                      <dt className="text-muted/70">{metric.label}</dt>
                      <dd className="text-text">{metric.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div className="flex flex-wrap gap-1">
                    {hackathon.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-background/80 px-2.5 py-1 text-[11px] text-muted/90"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </FadeIn>
    </>
  );
}
