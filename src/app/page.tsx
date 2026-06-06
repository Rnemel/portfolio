import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FadeIn, Section } from '@/components/section';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: 'Raneem Azib Almalki | Computer Science Senior',
  description:
    'Computer Science senior with SAP Technology Consultant certification and hands-on experience in enterprise platforms, automation, and AI-driven systems.',
};

export default function HomePage() {
  return (
    <>
      <Section className="border-t-0 pt-12 md:pt-16">
        <FadeIn>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start">
            <Card className="relative overflow-hidden border-gradient-inner bg-surface/80 p-5 sm:p-6">
              <div className="pointer-events-none absolute inset-x-[-40%] top-[-45%] h-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35),transparent_65%)] blur-3xl" />
              <div className="relative flex flex-col gap-6">
                <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-start sm:text-left">
                  <div className="relative h-24 w-24 overflow-hidden rounded-3xl border border-primary/70 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.28),_rgba(2,6,23,0.95))] shadow-[0_18px_45px_rgba(0,0,0,0.85)]">
                    <Image
                      src="/profile-placeholder.svg"
                      alt="Portrait of Raneem Azib Almalki"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.22em] text-muted/80">
                      {profile.location}
                    </p>
                    <h1 className="mt-2 text-3xl font-semibold text-text md:text-4xl">
                      {profile.name}
                    </h1>
                    <p className="mt-2 text-sm text-muted">{profile.title}</p>
                  </div>
                </div>

                <p className="text-sm text-muted">{profile.summary}</p>

                <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                  <a href={profile.links.cv} target="_blank" rel="noreferrer">
                    <Button>Download CV</Button>
                  </a>
                  <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                    <Button variant="ghost">LinkedIn</Button>
                  </a>
                  <a href={profile.links.email}>
                    <Button variant="ghost">Email</Button>
                  </a>
                  <a href={profile.links.github} target="_blank" rel="noreferrer">
                    <Button variant="ghost">GitHub</Button>
                  </a>
                </div>
              </div>
            </Card>

            <div className="space-y-4">
              <Card className="p-5 sm:p-6">
                <div className="border-gradient-inner space-y-4">
                  <div className="space-y-2">
                    <p className="text-[11px] uppercase tracking-[0.26em] text-muted/80">
                      Education
                    </p>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-text">{profile.education.degree}</p>
                      <p className="text-xs text-muted">{profile.education.institution}</p>
                      <p className="text-xs text-muted/80">{profile.education.expected}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[11px] uppercase tracking-[0.26em] text-muted/80">
                      Certifications
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {profile.certificates.map((certificate) => (
                        <span
                          key={certificate.name}
                          className="rounded-full bg-background/70 px-3 py-1 text-[11px] text-muted/90"
                        >
                          {certificate.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-5 sm:p-6">
                <div className="border-gradient-inner space-y-3">
                  <p className="text-[11px] uppercase tracking-[0.26em] text-muted/80">Experience</p>
                  <div className="space-y-4 text-xs text-muted">
                    {profile.experience.map((item) => (
                      <div key={`${item.title}-${item.organization}`} className="space-y-2">
                        <div className="space-y-0.5">
                          <p className="font-medium text-text/90">{item.title}</p>
                          <p className="text-muted/70">{item.organization}</p>
                          <p className="text-muted/60">{item.period}</p>
                        </div>
                        <ul className="space-y-1.5 text-muted/80">
                          {item.bullets.slice(0, 1).map((bullet) => (
                            <li key={bullet} className="flex gap-2">
                              <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section className="pt-0">
        <FadeIn>
          <div className="flex justify-center">
            <Link href="/projects">
              <Button>View Projects</Button>
            </Link>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
