export const profile = {
  name: 'Raneem Azib Almalki',
  title: 'Computer Science Senior | SAP Technology Consultant | Full-Stack & AI',
  location: 'Riyadh, Saudi Arabia',
  contact: {
    phone: '+966 546 961 145',
    phoneHref: 'tel:+966546961145',
    linkedinDisplay: 'linkedin.com/in/raneem-almalki-0b7ab5244',
  },
  summary:
    'Computer Science senior with SAP Technology Consultant certification, focused on enterprise platforms, business process automation, and AI-driven systems.',
  headlineBullets: [
    'Founded a 160+ member Technology Consulting Club (Taif University)',
    'AI co-op trainee at Taif Health Cluster (automation + healthcare workflows)',
    'Built full-stack platforms and AI-driven systems with measurable outcomes',
  ],
  links: {
    github: 'https://github.com/Rnemel',
    linkedin: 'https://www.linkedin.com/in/raneem-azib-almalki-0b7ab5244/',
    email: 'mailto:rnemelmalki@gmail.com',
    cv: '/Raneem Azib Almalki.pdf',
  },
  education: {
    degree: 'B.Sc. Computer Science',
    institution: 'Taif University, Saudi Arabia',
    expected: 'Expected June 2026',
    coursework: [
      'Artificial Intelligence',
      'Data Structures and Algorithms',
      'Software Engineering',
      'Systems Analysis and Design',
      'Project Management',
      'Human-Computer Interaction',
    ],
  },
  certificates: [
    {
      name: 'SAP Technology Consultant (Professional Certificate)',
      issuer: 'SAP',
      year: 2025,
      description:
        'SAP Activate methodology, module fundamentals, solution design, and digital transformation.',
    },
    {
      name: 'McKinsey Forward Program',
      issuer: 'McKinsey & Company',
      year: 2025,
      description:
        'Structured problem-solving, root-cause analysis, and data-driven decision-making.',
    },
    {
      name: 'Mustashar Accelerator',
      issuer: 'Mustashar',
      year: 2025,
      description:
        'Consulting frameworks, stakeholder engagement, and case analysis in simulated client engagements.',
    },
  ],
  experience: [
    {
      title: 'AI Co-op Trainee',
      organization: 'Taif Health Cluster · AI Department',
      period: '2024 · 2 months',
      bullets: [
        'Applied automation and web scraping using Ollama and Docker in a live healthcare environment.',
        'Trained 10 students on web scraping and automation as part of a departmental initiative.',
      ],
    },
    {
      title: 'Founder',
      organization: 'Technology Consulting Club (TCC), Taif University',
      period: '2025 – Present',
      bullets: [
        "Founded and scaled the university's first technology consulting club to 160+ members.",
        'Built a custom membership web platform for registrations, CV submissions, and application review.',
        'Engineered an automated email system (Resend API) for acceptance and scheduling workflows.',
      ],
    },
    {
      title: 'Events Consultant',
      organization: 'Robotics Engineering Club, Taif University',
      period: 'Jan 2023 – Present',
      bullets: [
        'Delivered 25+ events coordinating 6+ teams and stakeholders, reaching 1,000+ participants.',
        'Analysed workflow challenges and implemented process improvements across club operations.',
      ],
    },
  ],
  skills: {
    sapAndErp: [
      'SAP Activate',
      'ERP Fundamentals',
      'Digital Transformation',
      'Solution Design',
      'Business Process Analysis',
    ],
    technical: [
      'Python',
      'SQL',
      'Machine Learning',
      'FastAPI',
      'Flutter',
      'Docker',
      'OAuth API',
      'Web Scraping',
      'Web Development',
      'Excel',
      'Git',
    ],
    analytical: [
      'Requirements Analysis',
      'Stakeholder Communication',
      'Process Optimization',
      'Team Leadership',
      'Documentation',
      'End-User Training',
    ],
    languages: ['Arabic (Native)', 'English (Fluent)', 'French (Upper-Intermediate)'],
    tools: ['Postman', 'Docker', 'GitHub', 'VS Code', 'Jupyter', 'Anaconda', 'Excel', 'Notion'],
  },
  focusAreas: [
    'SAP technology consulting and structured problem solving',
    'Enterprise platforms and workflow automation',
    'AI-driven systems in real-world environments',
    'Full-stack product delivery (Next.js, TypeScript)',
  ],
};

export type Profile = typeof profile;
