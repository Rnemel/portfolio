import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FadeIn, Section } from '@/components/section';
import { CertificatesAccordion } from '@/components/certificates-accordion';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';
import { hackathons } from '@/data/hackathons';

export const metadata: Metadata = {
  title:
    'Full-Stack Developer | AI Engineer | SAP Technology Consulting (Professional Certificate)',
  description:
    'Portfolio of a full-stack developer and AI engineer with a consulting background, focused on AI/ML delivery, full-stack products, and data-backed decision making.',
};

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const featuredHackathons = hackathons.slice(0, 3);

  return (
    <>
      <Section>
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
          <FadeIn delay={0.1}>
            <Card className="relative flex flex-col items-center justify-between gap-6 overflow-hidden border-gradient-inner bg-surface/80 px-6 pb-6 pt-8">
              <div className="pointer-events-none absolute inset-x-[-40%] top-[-45%] h-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(147,112,255,0.45),transparent_65%)] blur-3xl" />
              <div className="relative flex flex-col items-center gap-4">
                <div className="relative h-32 w-32 overflow-hidden rounded-3xl border border-primary/70 bg-[radial-gradient(circle_at_top,_rgba(147,112,255,0.3),_rgba(15,23,42,0.95))] shadow-[0_18px_45px_rgba(0,0,0,0.85)]">
                  <Image
                    src="/profile-placeholder.svg"
                    alt="Portrait of Raneem Azib Almalki"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted/80">
                    {profile.location}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-text">{profile.name}</p>
                  <p className="mt-1 text-xs text-muted/80">
                    Full-stack engineering and applied ML with a consulting mindset.
                  </p>
                </div>
              </div>

              <dl className="relative grid w-full grid-cols-2 gap-3 text-[11px] text-muted/90">
                <div className="rounded-2xl bg-background/60 px-3 py-2">
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-muted/70">
                    AI and ML delivery
                  </dt>
                  <dd className="mt-1 text-sm text-text">
                    Built time-series, tabular, and LLM-based systems with real-world constraints
                  </dd>
                </div>
                <div className="rounded-2xl bg-background/60 px-3 py-2">
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-muted/70">
                    Consulting mindset
                  </dt>
                  <dd className="mt-1 text-sm text-text">
                    Structured problem solving, stakeholder analysis, and decision-ready recommendations
                  </dd>
                </div>
                <div className="rounded-2xl bg-background/60 px-3 py-2">
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-muted/70">
                    Stack
                  </dt>
                  <dd className="mt-1 text-sm text-text">
                    Next.js · TypeScript · Python · ML · Docker · Vercel
                  </dd>
                </div>
                <div className="rounded-2xl bg-background/60 px-3 py-2">
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-muted/70">
                    Collaboration
                  </dt>
                  <dd className="mt-1 text-sm text-text">
                    Product, data, and engineering teams across time zones
                  </dd>
                </div>
              </dl>
              <div className="mt-4 flex w-full flex-wrap items-center justify-center gap-4">
                <a href={profile.links.cv} target="_blank" rel="noreferrer">
                  <Button>Download CV</Button>
                </a>
              </div>
              <div className="mt-6 w-full space-y-3 text-left">
                <p className="text-[11px] uppercase tracking-[0.26em] text-muted/80">
                  Professional certificates
                </p>
                <CertificatesAccordion certificates={profile.certificates} />
              </div>
            </Card>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-col gap-6">
              <div className="rounded-3xl border-gradient bg-surface/60 px-4 py-4 md:px-6 md:py-5">
                <div className="border-gradient-inner space-y-6">
                  <div className="space-y-2">
                    <p className="text-[11px] uppercase tracking-[0.26em] text-muted/80">
                      Signature strengths
                    </p>
                    <h2 className="text-xl font-semibold text-text">
                      How I drive impact in technical projects
                    </h2>
                    <p className="text-sm text-muted">
                      I am a hands-on builder who connects structured thinking to working software and
                      real-world outcomes.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Card>
                      <div className="border-gradient-inner space-y-2">
                        <p className="text-xs font-medium text-text/90">Structured problem solving</p>
                        <p className="text-xs text-muted">
                          I define objectives, constraints, and trade-offs clearly before committing
                          engineering time.
                        </p>
                      </div>
                    </Card>
                    <Card>
                      <div className="border-gradient-inner space-y-2">
                        <p className="text-xs font-medium text-text/90">
                          End-to-end product development
                        </p>
                        <p className="text-xs text-muted">
                          I design and implement systems across frontend, backend, and data layers to
                          ensure consistency between requirements, API, and interface.
                        </p>
                      </div>
                    </Card>
                    <Card>
                      <div className="border-gradient-inner space-y-2">
                        <p className="text-xs font-medium text-text/90">Systems &amp; automation</p>
                        <p className="text-xs text-muted">
                          Structured web data extraction and browser automation using DOM traversal,
                          selectors, dynamic forms, conditional workflows, and clean data structuring.
                        </p>
                      </div>
                    </Card>
                    <Card>
                      <div className="border-gradient-inner space-y-2">
                        <p className="text-xs font-medium text-text/90">Stakeholder communication</p>
                        <p className="text-xs text-muted">
                          I align technical and non-technical stakeholders through structured updates
                          focused on risks, options, and impact.
                        </p>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
