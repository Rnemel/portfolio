import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { FadeIn, Section } from '@/components/section';
import { getProjectBySlug, projects } from '@/data/projects';

type Params = {
  slug: string;
};

type ProjectPageProps = {
  params: any;
};

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {
      title: 'Project not found',
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.tagline,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Section>
        <FadeIn>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-[0.26em] text-muted/80">
                Case study · {project.sector}
              </p>
              <h1 className="text-2xl font-semibold text-text md:text-3xl">
                {project.title}
              </h1>
              <p className="max-w-2xl text-sm text-muted">{project.tagline}</p>
            </div>
            <div className="space-y-2 text-xs text-muted/80">
              <p>
                <span className="text-muted/60">Role:</span> {project.role}
              </p>
              <p>
                <span className="text-muted/60">Engagement:</span> {project.duration} ·{' '}
                {project.clientType === 'enterprise'
                  ? 'Enterprise'
                  : project.clientType === 'startup'
                    ? 'Startup'
                    : 'Internal initiative'}
              </p>
              <p>
                <span className="text-muted/60">Year:</span> {project.year}
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
          <FadeIn>
            <div className="space-y-6 text-sm text-muted">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-muted/80">
                  Overview
                </h2>
                <p className="mt-2 text-text/90">{project.overview}</p>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-muted/80">
                  Problem
                </h2>
                <p className="mt-2 text-text/90">{project.problem}</p>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-muted/80">
                  Constraints
                </h2>
                <p className="mt-2">{project.constraints}</p>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-muted/80">
                  Approach
                </h2>
                <ol className="mt-2 space-y-2 text-xs text-muted">
                  {project.approachSteps.map((step) => (
                    <li key={step} className="flex gap-2">
                      <span className="mt-1 h-1 w-1 rounded-full bg-accent" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-muted/80">
                  What I would improve next
                </h2>
                <p className="mt-2">{project.improvements}</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="space-y-4">
              <Card>
                <div className="border-gradient-inner space-y-3 text-xs text-muted">
                  <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted/80">
                    Results and metrics
                  </h2>
                  <p className="text-text/90">{project.impact}</p>
                  <dl className="mt-2 grid gap-2">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <dt className="text-muted/70">{metric.label}</dt>
                        <dd className="text-text">{metric.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Card>
              {project.slug === 'linkedin-job-application-automation' && (
                <Card>
                  <div className="border-gradient-inner space-y-3 text-xs text-muted">
                    <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted/80">
                      Engineering capabilities demonstrated
                    </h2>
                    <ul className="space-y-1.5">
                      <li>DOM interaction modelling.</li>
                      <li>Handling dynamic UI states in browser-based workflows.</li>
                      <li>Conditional branching logic in automation flows.</li>
                      <li>Automated structured form completion.</li>
                      <li>Secure credential handling strategy.</li>
                      <li>Throughput optimisation for repeated digital tasks.</li>
                    </ul>
                  </div>
                </Card>
              )}
              <Card>
                <div className="border-gradient-inner space-y-3 text-xs text-muted">
                  <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted/80">
                    Solution architecture
                  </h2>
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-text">
                      <div className="rounded-2xl bg-background/80 px-3 py-2">
                        Users / stakeholders
                      </div>
                      <span className="text-muted/60">→</span>
                      <div className="rounded-2xl bg-background/80 px-3 py-2">
                        Application / interface
                      </div>
                      <span className="text-muted/60">→</span>
                      <div className="rounded-2xl bg-background/80 px-3 py-2">
                        Services / APIs
                      </div>
                      <span className="text-muted/60">→</span>
                      <div className="rounded-2xl bg-background/80 px-3 py-2">
                        Data / ML layer
                      </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-1.5 text-[10px] text-muted/80">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-background/80 px-2.5 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="rounded-full bg-background/80 px-2.5 py-1">
                          +{project.stack.length - 4} more
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-muted/70">
                      Diagram is schematic. Exact tooling and deployment details vary by client and
                      environment.
                    </p>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="border-gradient-inner space-y-3 text-xs text-muted">
                  <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted/80">
                    Tech stack
                  </h2>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-background/80 px-3 py-1 text-[11px] text-muted/90"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
              <Card>
                <div className="border-gradient-inner space-y-3 text-xs text-muted">
                  <h2 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted/80">
                    Links
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {project.links.repo && (
                      <a
                        href={project.links.repo}
                        className="text-text hover:text-accent"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View implementation →
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        className="text-text hover:text-accent"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open live demo →
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="pt-0">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-4 rounded-3xl border-gradient bg-surface/70 px-5 py-5 md:flex-row md:items-center md:px-6 md:py-6">
            <div className="border-gradient-inner space-y-2">
              <p className="text-[11px] uppercase tracking-[0.24em] text-muted/80">
                Next steps
              </p>
              <p className="text-sm text-text/90">
                If this kind of work is relevant to your team, I am happy to discuss how a similar
                approach could look in your context.
              </p>
            </div>
            <Link
              href="/contact"
              className="text-xs font-medium text-muted hover:text-accent md:text-sm"
            >
              Let&apos;s talk →
            </Link>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
