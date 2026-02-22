'use client';

import Link from 'next/link';
import type { Route } from 'next';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';
import { profile } from '@/data/profile';

const navItems: { href: Route; label: string }[] = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-accent/15 bg-background/80 backdrop-blur-glass">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-2xl bg-gradient-to-tr from-primary to-accent shadow-glow" />
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.2em] text-muted/80">
                Full-Stack &amp; AI
              </span>
              <span className="text-sm font-semibold text-text">{profile.name}</span>
            </div>
          </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-surface/60 bg-surface/60 px-2 py-1 text-xs text-muted shadow-lg md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative rounded-full px-3 py-1 transition-colors',
                  'hover:text-text',
                  isActive && 'bg-primary/40 text-text shadow-glow'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/projects"
              className="hidden rounded-full border border-primary/50 bg-primary/80 px-4 py-1.5 text-xs font-medium text-text shadow-glow hover:bg-primary/90 md:inline-flex"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-surface/70 bg-surface/80 text-xs text-muted hover:border-accent/70 hover:text-accent"
            >
              ✺
            </Link>
          </div>
        </div>
      </header>

      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-5 right-4 z-40 inline-flex items-center gap-1 rounded-full border border-accent/40 bg-surface/90 px-3 py-2 text-[11px] text-muted shadow-lg backdrop-blur-glass transition hover:border-accent hover:text-text hover:shadow-glow md:bottom-8 md:right-8"
        >
          <span className="text-xs">↑</span>
          <span>Back to top</span>
        </button>
      )}
    </>
  );
}
