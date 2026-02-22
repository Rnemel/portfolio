export const profile = {
  name: 'Raneem Azib Almalki',
  title:
    'Full-Stack Developer | AI Engineer | SAP Technology Consulting (Professional Certificate)',
  location: 'Riyadh, Saudi Arabia',
  summary:
    'I build end-to-end products and AI systems that turn messy data and real problems into usable, secure, measurable solutions. My work blends full-stack delivery, ML experimentation, and consulting-style problem solving—validated through hackathons and real platforms.',
  headlineBullets: [],
  links: {
    github: 'https://github.com/Rnemel',
    linkedin: 'https://www.linkedin.com/in/raneem-azib-almalki-0b7ab5244/',
    email: 'mailto:rnemelmalki@gmail.com',
    cv: '/Raneem Azib Almalki.pdf',
    calendly: 'https://calendly.com/your-handle/intro',
  },
  certificates: [
    {
      name: 'SAP Technology Consulting (Professional Certificate)',
      issuer: 'SAP',
      year: 2025,
      description:
        'The Apprentice Shape is an SAP Professional Certificate in Technology Consulting, focused on structured problem-solving, SAP solution design, implementation methodologies (SAP Activate), and delivering technology-enabled business transformation.',
    },
    {
      name: 'IBM Data Analyst Professional Certificate',
      issuer: 'IBM',
      year: 2026,
      description:
        'Through the IBM Data Analyst Professional Certificate, I developed practical skills in Python, SQL, and Excel for data cleaning, analysis, and visualization. I learned how to transform raw data into actionable insights using EDA and dashboard tools.',
    },
  ],
  focusAreas: [
    'Production ML and LLM-powered features',
    'Full-stack product development (Next.js, TypeScript)',
    'Technical discovery, roadmapping, and fractional CTO support',
    'Cloud-native architecture and observability',
  ],
};

export type Profile = typeof profile;
