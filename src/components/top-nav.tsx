'use client';

import Link from 'next/link';
import type { Route } from 'next';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/cn';

const navItems: { href: Route; label: string }[] = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
];

export function TopNav() {
  const pathname = usePathname();

  return (
    <div className="mx-auto flex max-w-6xl justify-center px-4 md:px-6">
      <nav className="inline-flex items-center gap-1.5 rounded-full border border-surface/60 bg-surface/60 p-1 text-xs text-muted shadow-lg backdrop-blur">
        {navItems.map((item) => {
          const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? 'page' : undefined}
              className={cn(
                'relative rounded-full px-4 py-2 font-medium transition',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50',
                'active:scale-[0.98]',
                isActive
                  ? 'bg-primary/45 text-text shadow-glow'
                  : 'text-muted hover:bg-background/50 hover:text-text'
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
