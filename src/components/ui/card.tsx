import { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  key?: string | number;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'glass-surface border-gradient rounded-3xl p-6',
        'transition-transform transition-shadow duration-300 ease-out',
        'hover:-translate-y-1 hover:shadow-glow',
        className
      )}
    >
      {children}
    </div>
  );
}
