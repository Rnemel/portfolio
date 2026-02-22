'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'px-4 py-10 md:px-6 md:py-14 border-t border-accent/10',
        className
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6">{children}</div>
    </section>
  );
}

interface FadeInProps {
  delay?: number;
  children: ReactNode;
  className?: string;
}

export function FadeIn({ delay = 0, children, className }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
