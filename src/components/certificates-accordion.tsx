'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/cn';

type Certificate = {
  name: string;
  issuer: string;
  year: number;
  description?: string;
};

type CertificatesAccordionProps = {
  certificates: Certificate[];
};

export function CertificatesAccordion({ certificates }: CertificatesAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <dl className="flex-1 space-y-2 text-xs text-muted">
      {certificates.map((certificate, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={certificate.name}
            className={cn(
              'rounded-2xl bg-background/60 px-3 py-2 transition-colors',
              isOpen && 'bg-background/70'
            )}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full cursor-pointer items-center justify-between rounded-xl px-1 py-0.5 text-left transition-colors hover:bg-background/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              <div className="space-y-1">
                <span className="text-[11px] font-medium text-text/90">
                  {certificate.name}
                </span>
                <span className="mt-0.5 block text-[11px] text-muted/80">
                  {certificate.issuer}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-border/60 px-2 py-0.5 text-[11px] text-muted/80">
                  {certificate.year}
                </span>
                <motion.span
                  className="text-[12px] text-muted/60"
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  ›
                </motion.span>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: 8, height: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="mt-3 overflow-hidden"
                >
                  <div className="rounded-2xl bg-background/40 p-3 text-[11px] leading-relaxed text-muted/80">
                    <div className="mb-2 flex items-center justify-between text-[11px] text-muted/70">
                      <span className="font-medium text-text/80">
                        {certificate.issuer}
                      </span>
                      <span className="rounded-full bg-background/80 px-2 py-0.5 text-[10px] text-muted/80">
                        {certificate.year}
                      </span>
                    </div>
                    <p>
                      {certificate.description ??
                        `${certificate.name} issued by ${certificate.issuer} (${certificate.year}).`}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </dl>
  );
}

