import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Full-Stack Developer | AI Engineer | SAP Technology Consulting',
  description:
    'Premium portfolio of a full-stack developer and AI engineer delivering production-grade ML systems and SAP technology consulting.',
  metadataBase: new URL('https://www.example.com'),
  openGraph: {
    title:
      'Full-Stack Developer | AI Engineer (ML Projects) | SAP Technology Consulting (Certified)',
    description:
      'Portfolio of a full-stack developer and AI engineer with a track record of shipping reliable ML features and SAP technology consulting engagements.',
    url: 'https://www.example.com',
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
    url: 'https://www.example.com',
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
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
