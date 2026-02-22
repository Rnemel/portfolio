export type Hackathon = {
  slug: string;
  name: string;
  organizer: string;
  date: string;
  role: string;
  result: string;
  impact: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  links: {
    project?: string;
    replay?: string;
    writeup?: string;
  };
};

export const hackathons: Hackathon[] = [
  {
    slug: 'sam-absher-smart-agent',
    name: 'SAM — Absher Smart Agent',
    organizer: 'Digital services hackathon (placeholder)',
    date: '',
    role: 'Product + Technical Contributor',
    result: 'Hackathon project',
    impact:
      'Designed a natural-language smart agent that understands user intent and executes Absher services through one guided flow, reducing the need for credential sharing with service offices and prioritising security-by-design and UX clarity so that users complete tasks with greater confidence and control.',
    metrics: [
      {
        label: 'Security impact',
        value: 'Reduced risk of credential exposure via safer interaction model (placeholder)',
      },
      {
        label: 'User experience',
        value: 'Improved completion speed and confidence through guided execution (placeholder)',
      },
    ],
    stack: ['Security patterns', 'AI agents', 'UX design', 'Digital services APIs'],
    links: {},
  },
  {
    slug: 'insightx-company-health-bubble-detection',
    name: 'InsightX — Company Health & Bubble Detection',
    organizer: 'Analytics hackathon (placeholder)',
    date: '',
    role: 'Data + Full-Stack Contributor',
    result: 'Hackathon project',
    impact:
      'Built an analysis flow that evaluates signals and outputs an interpretable assessment of company health and potential bubble risk, focusing on explainability so that decision makers can distinguish stability from hype-driven growth and rely less on surface-level success metrics.',
    metrics: [
      {
        label: 'Decision support',
        value: 'Faster, clearer evaluation of company performance quality (placeholder)',
      },
      {
        label: 'Risk reduction',
        value: 'Reduced reliance on hype-only indicators when making decisions (placeholder)',
      },
    ],
    stack: ['Analytics pipelines', 'Data visualisation', 'Decision support UX'],
    links: {},
  },
];
