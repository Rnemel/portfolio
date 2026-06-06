import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Full-Stack Developer | AI Engineer | SAP Technology Consulting',
  description:
    'Premium portfolio of a full-stack developer and AI engineer delivering production-grade ML systems and SAP technology consulting.',
  metadataBase: new URL('https://portfolio-one-phi-z2ia5rz2yf.vercel.app'),
  openGraph: {
    title:
      'Full-Stack Developer | AI Engineer (ML Projects) | SAP Technology Consulting (Certified)',
    description:
      'Portfolio of a full-stack developer and AI engineer with a track record of shipping reliable ML features and SAP technology consulting engagements.',
    url: 'https://portfolio-one-phi-z2ia5rz2yf.vercel.app',
    siteName: 'Full-Stack & AI Engineering Portfolio',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Your Name',
    jobTitle: 'Full-Stack Developer | AI Engineer',
    url: 'https://portfolio-one-phi-z2ia5rz2yf.vercel.app',
    sameAs: [
      'https://www.linkedin.com/in/your-handle',
      'https://github.com/your-handle',
      'https://x.com/your-handle',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Independent Technology Consultant',
    },
    knowsAbout: [
      'Machine Learning',
      'MLOps',
      'Full-Stack Development',
      'Cloud Architecture',
      'Technical Strategy',
    ],
  };

  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <main className="min-h-screen">{children}</main>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
