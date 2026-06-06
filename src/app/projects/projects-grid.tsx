'use client';

import { useState } from 'react';
import { FadeIn } from '@/components/section';
import type { Project, ProjectCategory } from '@/data/projects';
import { hackathons, type Hackathon } from '@/data/hackathons';
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

type ListItem =
  | {
      kind: 'project';
      data: Project;
    }
  | {
      kind: 'hackathon';
      data: Hackathon;
    };

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [category, setCategory] = useState<CategoryFilter>('all');

  const filtered = projects.filter((project) =>
    category === 'all' ? true : project.category === category
  );

  const sortedProjects = [...filtered].sort((a, b) => {
    if (category === 'all') {
      const categoryDiff = categoryRank[a.category] - categoryRank[b.category];
      if (categoryDiff !== 0) return categoryDiff;
    }
    return b.year - a.year;
  });

  const items: ListItem[] = [
    ...sortedProjects.map(
      (project): ListItem => ({
        kind: 'project',
        data: project,
      })
    ),
    ...(category === 'all'
      ? hackathons.map(
          (hackathon): ListItem => ({
            kind: 'hackathon',
            data: hackathon,
          })
        )
      : []),
  ];

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
        <div className="space-y-4">
          {items.map((item) => {
            if (item.kind === 'project') {
              const project = item.data;

              return (
                <details key={project.slug} className="glass-surface border-gradient rounded-3xl">
                  <summary className="cursor-pointer select-none px-5 py-4 md:px-6">
                    <div className="border-gradient-inner flex items-start justify-between gap-4">
                      <div className="min-w-0 space-y-1">
                        <h2 className="text-sm font-semibold text-text">{project.title}</h2>
                        <p className="text-xs text-muted">{project.tagline}</p>
                      </div>
                      <span className="mt-1 shrink-0 text-[11px] font-medium text-muted hover:text-accent">
                        Details →
                      </span>
                    </div>
                  </summary>

                  <div className="border-gradient-inner space-y-4 px-5 pb-5 text-xs text-muted md:px-6">
                    <div className="space-y-3">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.22em] text-muted/70">
                          Overview
                        </p>
                        <p className="mt-1 text-text/90">{project.overview}</p>
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.22em] text-muted/70">
                          Problem
                        </p>
                        <p className="mt-1 text-text/90">{project.problem}</p>
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.22em] text-muted/70">
                          Constraints
                        </p>
                        <p className="mt-1">{project.constraints}</p>
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.22em] text-muted/70">
                          Approach
                        </p>
                        <p className="mt-1">{project.approach}</p>
                        <ol className="mt-2 space-y-1.5">
                          {project.approachSteps.map((step) => (
                            <li key={step} className="flex gap-2">
                              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-2 text-[11px]">
                      {project.links.repo && (
                        <a
                          href={project.links.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-muted hover:text-accent"
                        >
                          Repo →
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-muted hover:text-accent"
                        >
                          Demo →
                        </a>
                      )}
                    </div>
                  </div>
                </details>
              );
            }

            const hackathon = item.data;
            return (
              <details key={hackathon.slug} className="glass-surface border-gradient rounded-3xl">
                <summary className="cursor-pointer select-none px-5 py-4 md:px-6">
                  <div className="border-gradient-inner flex items-start justify-between gap-4">
                    <div className="min-w-0 space-y-1">
                      <h2 className="text-sm font-semibold text-text">{hackathon.name}</h2>
                      <p className="text-xs text-muted">{hackathon.impact}</p>
                    </div>
                    <span className="mt-1 shrink-0 text-[11px] font-medium text-muted hover:text-accent">
                      Details →
                    </span>
                  </div>
                </summary>

                <div className="border-gradient-inner space-y-4 px-5 pb-5 text-xs text-muted md:px-6">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-muted/70">Overview</p>
                    <p className="mt-1 text-text/90">{hackathon.impact}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2 text-[11px]">
                    {hackathon.links.project && (
                      <a
                        href={hackathon.links.project}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-muted hover:text-accent"
                      >
                        Project →
                      </a>
                    )}
                    {hackathon.links.writeup && (
                      <a
                        href={hackathon.links.writeup}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-muted hover:text-accent"
                      >
                        Write-up →
                      </a>
                    )}
                    {hackathon.links.replay && (
                      <a
                        href={hackathon.links.replay}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-muted hover:text-accent"
                      >
                        Replay →
                      </a>
                    )}
                  </div>
                </div>
              </details>
            );
          })}
        </div>
      </FadeIn>
    </>
  );
}
