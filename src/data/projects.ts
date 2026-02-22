export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectCategory = 'ai-ml' | 'full-stack' | 'data' | 'consulting';

export type ProjectImpactLevel = 'low' | 'medium' | 'high';

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  clientType: 'startup' | 'enterprise' | 'internal' | 'hackathon';
  sector: string;
  category: ProjectCategory;
  overview: string;
  problem: string;
  constraints: string;
  approach: string;
  approachSteps: string[];
  impact: string;
  metrics: ProjectMetric[];
  impactLevel: ProjectImpactLevel;
  stack: string[];
  role: string;
  duration: string;
  year: number;
  improvements: string;
  links: {
    repo?: string;
    demo?: string;
    caseStudy?: string;
  };
};

export const projects: Project[] = [
  {
    slug: 'mehad-early-seizure-prediction',
    title: 'MEHAD — Early Seizure Prediction',
    tagline:
      'Early seizure prediction system using physiological signals with a structured preprocessing and modelling pipeline.',
    clientType: 'enterprise',
    sector: 'Healthcare · Time-Series ML',
    category: 'ai-ml',
    overview:
      'Early seizure prediction system using physiological signals, built as an end-to-end ML workflow that clinicians can use to explore earlier, interpretable risk signals before acute events.',
    problem:
      'Seizures often occur with limited warning. The challenge is predicting events early enough to support timely action using real-world biomedical signals.',
    constraints:
      'Time-constrained prototype built with a limited labelled dataset, heterogeneous physiological signals from different devices, and the need to keep model outputs interpretable for clinicians and clinical safety reviewers.',
    approach:
      'Built a reproducible preprocessing pipeline (windowing, labelling strategy, class balancing), trained time-series models for multi-class classification, and implemented a consistent evaluation flow for iteration and reporting.',
    approachSteps: [
      'Defined a windowing and labelling strategy on multichannel physiological signals.',
      'Implemented preprocessing, normalisation, and class balancing to create training-ready datasets.',
      'Trained and compared time-series models for multi-class seizure risk prediction.',
      'Established a consistent evaluation and reporting flow for experiments.',
      'Prepared the pipeline for future deployment-oriented inference services.',
    ],
    impact:
      'Delivered a clean ML pipeline suitable for systematic experimentation and results reporting, creating a foundation that can scale to more subjects and deployment-ready inference.',
    metrics: [
      { label: 'Forecast horizon', value: 'Up to 60 minutes ahead of events (placeholder)' },
      { label: 'Model performance', value: 'ROC-AUC and precision/recall tuned to clinical needs' },
      { label: 'Data latency', value: 'Preprocessing suitable for near real-time usage' },
    ],
    impactLevel: 'high',
    stack: ['Python', 'Pandas / NumPy', 'scikit-learn', 'Deep learning (placeholder)'],
    role: 'AI Engineer · Time-Series ML',
    duration: '4 months (prototype to pilot)',
    year: 2024,
    improvements:
      'Extend evaluation on larger, more diverse cohorts, tighten integration with existing hospital systems, and harden monitoring around model drift and data quality before full clinical deployment.',
    links: {
      caseStudy: '/projects/mehad-early-seizure-prediction',
    },
  },
  {
    slug: 'taif-health-cluster-internship-platform',
    title: 'Internship Platform — Taif Health Cluster',
    tagline:
      'End-to-end internship management platform to streamline applications, onboarding, and tracking for a health cluster.',
    clientType: 'startup',
    sector: 'Healthcare · Internship Operations',
    category: 'full-stack',
    overview:
      'End-to-end internship management platform to streamline applications, onboarding, and tracking for Taif Health Cluster, giving HR and departments a single operational view of placements.',
    problem:
      'Manual coordination, scattered forms, and inconsistent tracking reduce visibility and slow decisions for HR and departments.',
    constraints:
      'Multiple stakeholder groups across HR and departments, existing processes rooted in spreadsheets and email, and a rollout window aligned to academic terms.',
    approach:
      'Designed platform workflows for applicants, HR, and departments; built role-based experiences; and implemented forms, status tracking, and filtering for decision making on top of a structured data model.',
    approachSteps: [
      'Mapped existing manual coordination flows across HR, departments, and education coordinators.',
      'Designed platform workflows for applicant intake, HR dashboards, and department routing.',
      'Built role-based experiences for students and internal stakeholders with clear permissions.',
      'Implemented forms, status tracking, and filtering to support day-to-day decision making.',
      'Prepared a phased rollout plan with migration from existing spreadsheets and forms.',
    ],
    impact:
      'Reduced manual follow-ups, improved visibility across internship stages, and improved decision speed by centralising applicant data and workflow status.',
    metrics: [
      { label: 'Programs onboarded', value: 'Multiple departments supported (placeholder)' },
      {
        label: 'Operational overhead',
        value: 'Reduced manual status tracking by centralising workflows (placeholder)',
      },
      { label: 'Data quality', value: 'Single, consistent schema for placements and evaluations' },
    ],
    impactLevel: 'high',
    stack: [
      'Next.js',
      'React',
      'Tailwind',
      'API (placeholder)',
      'Database (placeholder)',
      'Auth (placeholder)',
    ],
    role: 'Full-Stack Developer',
    duration: '3 months',
    year: 2024,
    improvements:
      'Introduce richer analytics on placement outcomes, expand API integrations with institutional systems (SIS/HR), and harden permissioning and audit trails for larger, multi-institution deployments.',
    links: {
      caseStudy: '/projects/taif-health-cluster-internship-platform',
    },
  },
  {
    slug: 'tcc-club-management-platform',
    title: 'TCC Platform — Technology Consulting Club',
    tagline:
      'Student club platform to manage members, events, announcements, and internal operations.',
    clientType: 'internal',
    sector: 'Student Clubs · Internal Tools',
    category: 'full-stack',
    overview:
      'A student club management platform to organise members, events, announcements, and internal operations for a technology consulting club.',
    problem:
      'Student club operations are often spread across tools, creating coordination overhead and losing continuity across semesters.',
    constraints:
      'Volunteer-run organisation, limited engineering capacity, and the need for a simple UX that works for members with different levels of technical comfort.',
    approach:
      'Built a centralised web platform that brings membership, events, announcements, and admin views into a single interface, with an admin experience designed to reduce friction for club leadership.',
    approachSteps: [
      'Mapped existing channels and documents used for membership, events, and announcements.',
      'Defined roles and permissions for members, officers, and administrators.',
      'Implemented pages for membership records, event scheduling, announcements, and admin configuration.',
      'Designed an admin experience focused on reducing repetitive manual coordination.',
      'Prepared the platform for future modules such as KPIs, attendance, committees, and automation.',
    ],
    impact:
      'Increased operational clarity and reduced coordination overhead, while creating a scalable base for future modules such as KPIs, attendance, committees, and automation.',
    metrics: [
      {
        label: 'Operational workflows',
        value: 'Core membership and event flows consolidated into one platform',
      },
      { label: 'Tools reduced', value: 'Fewer fragmented channels for announcements and tracking' },
      {
        label: 'Future modules',
        value: 'Clear paths for KPIs, attendance tracking, and automation',
      },
    ],
    stack: ['Next.js', 'React', 'Tailwind', 'API (placeholder)', 'Database (placeholder)'],
    impactLevel: 'medium',
    role: 'Full-Stack Developer',
    duration: '1 semester (initial rollout)',
    year: 2024,
    improvements:
      'Add richer analytics on engagement, automate recurring communications, and formalise KPI tracking and attendance modules.',
    links: {
      caseStudy: '/projects/tcc-club-management-platform',
    },
  },
  {
    slug: 'robotics-club-strategy',
    title: 'Strategic Operating Model & Execution Plan — Robotics Engineering Club, Taif University',
    tagline:
      'Strategic operating model and execution plan to align governance, committees, and delivery around measurable outcomes.',
    clientType: 'internal',
    sector: 'Education · Robotics · Operating Model',
    category: 'consulting',
    overview:
      'Comprehensive operating model and execution plan for a Robotics Engineering Club at Taif University, designed to strengthen governance, clarify roles, and align technical activities with a structured, measurable strategy.',
    problem:
      'The club operated without a clear strategic direction, formal operating structure, or KPI-driven accountability, making it difficult to sustain initiatives, coordinate committees, and demonstrate impact over time.',
    constraints:
      'Part-time leadership with changing rotations, multiple committees with overlapping responsibilities, and the need to design a pragmatic operating model that could be adopted quickly without adding unnecessary bureaucracy.',
    approach:
      'Applied a consulting-style methodology combining strategic analysis, operating model design, and execution planning to define direction, structure the organisation, and establish a disciplined delivery cadence.',
    approachSteps: [
      'Conducted a structured assessment of the current state using SWOT analysis across strategy, organisation, and delivery.',
      'Defined a clear vision, mission, and value proposition for the Robotics Engineering Club aligned with university stakeholders and technical ambitions.',
      'Used the McKinsey 7S model to align structure, systems, skills, style, staff, strategy, and shared values.',
      'Redesigned the organisational structure, with committees mapped to outcomes and reporting lines clarified for leadership.',
      'Developed a KPI framework with leading and lagging indicators covering participation, delivery quality, and strategic initiatives.',
      'Planned a multi-week workshop and technical calendar that connects committee activities to the strategic roadmap.',
      'Outlined budget structuring logic, including categories, prioritisation principles, and guidelines for trade-off decisions.',
      'Defined governance mechanisms, decision rights, and role descriptions to reduce ambiguity and hand-off friction.',
      'Created a phased execution timeline that moves from stabilisation to optimisation and then to expansion.',
    ],
    impact:
      'Established a structured operating model with clear accountability, a defined workshop pipeline, and measurable performance expectations, enabling leadership to run the Robotics Engineering Club with greater discipline and strategic focus.',
    metrics: [
      {
        label: 'Role clarity',
        value: 'Documented responsibilities and decision rights for leadership and committees (placeholder)',
      },
      {
        label: 'Execution cadence',
        value: 'Defined workshop pipeline and delivery rhythm mapped to the strategic roadmap (placeholder)',
      },
      {
        label: 'Alignment mechanisms',
        value: 'Regular governance checkpoints between committees and leadership (placeholder)',
      },
    ],
    impactLevel: 'high',
    stack: [
      'Strategic planning frameworks',
      'SWOT analysis',
      'McKinsey 7S model',
      'Operating model and KPI design',
      'Workshop and roadmap planning',
    ],
    role: 'Strategic Advisor · Technology Consulting',
    duration: '6 weeks (design and rollout support)',
    year: 2024,
    improvements:
      'Introduce quantitative targets for KPIs after the first operating cycle, add lightweight tooling for tracking commitments, and refine the operating model based on observed adoption and outcomes.',
    links: {
      caseStudy: '/projects/robotics-club-strategy',
    },
  },
  {
    slug: 'linkedin-job-application-automation',
    title: 'LinkedIn Job Application Automation System',
    tagline:
      'A workflow automation engineering project focused on reducing repetitive digital task friction while maintaining structured logic and system reliability.',
    clientType: 'internal',
    sector: 'Career Workflows · Automation',
    category: 'full-stack',
    overview:
      'Automation system that streamlines repetitive LinkedIn job application steps, focusing on structured interactions with forms and listings to reduce manual effort while keeping behaviour predictable and auditable.',
    problem:
      'Applying to multiple job postings requires repetitive form filling, document uploads, and navigation steps, which slows down productivity and introduces manual errors.',
    constraints:
      'Dynamic UI patterns, changing page structures, and the need to design automation flows that remain robust to minor layout changes while respecting platform constraints.',
    approach:
      'Designed an automation workflow for structured form interactions, navigation across job listings, and Easy Apply sequences, with logic to handle conditional fields and dynamic flows.',
    approachSteps: [
      'Mapped the end-to-end job application journey across multiple posting types.',
      'Designed a workflow that encapsulates navigation, form filling, and document uploads as reusable steps.',
      'Implemented DOM automation to populate contact details and upload documents consistently.',
      'Added branching logic for conditional fields and multi-step forms.',
      'Introduced basic logging and configuration to tune behaviour per profile or role type.',
    ],
    impact:
      'Reduced manual application time per job, enabled higher application throughput with consistent formatting, and improved efficiency in tracking opportunities across multiple postings.',
    metrics: [
      {
        label: 'Manual time per application',
        value: 'Significant reduction vs fully manual flow (placeholder)',
      },
      {
        label: 'Applications per session',
        value: 'Higher throughput with consistent formatting (placeholder)',
      },
      {
        label: 'Error rate',
        value: 'Fewer manual input mistakes in repeated fields (placeholder)',
      },
    ],
    impactLevel: 'medium',
    stack: [
      'Python',
      'Selenium / Playwright (prototype)',
      'DOM automation',
      'Workflow orchestration',
    ],
    role: 'Automation Engineer · Full-Stack Developer',
    duration: '1 month (prototype)',
    year: 2024,
    improvements:
      'Harden resilience to UI changes, add richer monitoring and alerting, and formalise configuration profiles for different job families and markets.',
    links: {
      caseStudy: '/projects/linkedin-job-application-automation',
    },
  },
  {
    slug: 'automated-messaging-workflow-system',
    title: 'Automated Messaging Workflow System',
    tagline:
      'Python-based automation workflow for structured outbound messaging across a web-based platform.',
    clientType: 'internal',
    sector: 'Automation · Systems Engineering · Python',
    category: 'full-stack',
    overview:
      'Python automation system that manages structured outbound messaging workflows across a web-based messaging interface, focusing on predictable execution, consistency, and controlled throughput.',
    problem:
      'Manually sending repetitive structured messages is inefficient, error-prone, and difficult to scale, especially when teams need to maintain consistent wording and timing across many interactions.',
    constraints:
      'Browser-based interfaces with evolving UI patterns, the need to keep behaviour predictable and auditable, and requirements to operate within controlled environments rather than uncontrolled bulk messaging.',
    approach:
      'Designed an automation workflow in Python that encapsulates session handling, navigation, templated messages, and basic rate control so that outbound communication runs as a repeatable, observable process.',
    approachSteps: [
      'Built a Python-based automation workflow to orchestrate outbound messaging steps.',
      'Implemented session handling and navigation logic for a web-based messaging interface.',
      'Structured message templates so content stays consistent and easy to adjust centrally.',
      'Added basic rate control to avoid overloading the interface or recipients.',
      'Designed error-handling and retry mechanisms for transient failures.',
      'Outlined an extension path to support additional platforms, such as Telegram APIs, under controlled usage.',
    ],
    impact:
      'Reduced manual outreach effort, increased consistency and accuracy of outbound communication, and created a reusable automation framework that can be adapted to additional platforms over time.',
    metrics: [
      {
        label: 'Manual effort',
        value: 'Significant reduction in repeated manual sending tasks (placeholder)',
      },
      {
        label: 'Template consistency',
        value: 'Higher adherence to standardised message templates (placeholder)',
      },
      {
        label: 'Framework reuse',
        value: 'Multiple workflows built on the same automation core (placeholder)',
      },
    ],
    impactLevel: 'medium',
    stack: [
      'Python',
      'Browser automation tooling (placeholder)',
      'Workflow orchestration',
      'Template management',
      'Monitoring and logging (placeholder)',
    ],
    role: 'Automation Engineer · Systems Engineer',
    duration: '2 months (initial implementation and tuning)',
    year: 2024,
    improvements:
      'Add more granular observability on message outcomes, formalise configuration for different workflows, and extend the framework to first-class API integrations where available.',
    links: {
      caseStudy: '/projects/automated-messaging-workflow-system',
    },
  },
  {
    slug: 'html-data-parsing-structured-export',
    title: 'HTML Data Parsing & Structured Export Prototype',
    tagline:
      'Educational prototype showing how to turn sample HTML into structured, analysis-ready datasets.',
    clientType: 'internal',
    sector: 'Data Engineering · Python · Automation',
    category: 'data',
    overview:
      'Prototype data engineering system that extracts structured information from sample HTML sources and transforms it into clean, analysis-ready datasets in formats such as Excel and CSV.',
    problem:
      'Many web interfaces present logically structured information using unstructured HTML layouts. Without a parsing and transformation pipeline, analysts resort to manual copy-paste or ad-hoc scripts, which do not scale and are difficult to maintain.',
    constraints:
      'HTML structures that can change over time, inconsistent field formatting, and the need to keep the prototype generic and educational rather than tailored to a specific site or platform.',
    approach:
      'Implemented an educational parsing and transformation pipeline in Python that reads sample HTML inputs, extracts fields using DOM selectors, cleans and normalises values, and exports structured datasets suitable for downstream analysis.',
    approachSteps: [
      'Implemented HTML parsing in Python to load and traverse sample HTML sources.',
      'Defined DOM selector strategies for identifying and extracting structured fields.',
      'Cleaned and normalised extracted values to standardise formats and reduce noise.',
      'Built export logic to generate structured Excel and CSV outputs.',
      'Organised the code as a reusable data acquisition and transformation pipeline for similar HTML-shaped inputs.',
    ],
    impact:
      'Demonstrated a complete data engineering workflow from raw HTML to structured dataset, reduced manual extraction effort in comparable scenarios, and provided reusable logic for future structured data transformation tasks.',
    metrics: [
      {
        label: 'Manual extraction',
        value: 'Lower effort vs copy-paste workflows for similar inputs (placeholder)',
      },
      {
        label: 'Data structure',
        value: 'Consistent tabular outputs suitable for analysis (placeholder)',
      },
      {
        label: 'Reusability',
        value: 'Prototype pipeline applicable to multiple HTML patterns (placeholder)',
      },
    ],
    impactLevel: 'medium',
    stack: ['Python', 'HTML parsing library (placeholder)', 'CSV / Excel export', 'Data cleaning'],
    role: 'Data Engineer · Automation Engineer',
    duration: 'Prototype phase',
    year: 2024,
    improvements:
      'Extend the prototype with richer schema inference, add validation rules for extracted fields, and integrate with scheduled workflows for recurring data acquisition in controlled environments.',
    links: {
      caseStudy: '/projects/html-data-parsing-structured-export',
    },
  },
  {
    slug: 'responsive-email-systems',
    title: 'Responsive HTML Email Systems & Campaign Infrastructure',
    tagline:
      'Responsive HTML email templates and systems engineered for cross-client reliability and scalable campaigns.',
    clientType: 'internal',
    sector: 'Product Systems · Communication Infrastructure',
    category: 'full-stack',
    overview:
      'Responsive, brand-aligned HTML email systems built to behave predictably across major clients and support scalable campaign execution without redesigning layouts for every send.',
    problem:
      'Email rendering engines such as Gmail, Outlook, and mobile clients apply inconsistent HTML and CSS rules. Without a structured system, teams see broken layouts, duplicated formatting work, inconsistent branding, and weak CTA visibility across outbound communication.',
    constraints:
      'Strict HTML and CSS feature limitations, divergent behaviour between desktop and mobile clients, and the need to support many campaign variants without introducing manual formatting overhead.',
    approach:
      'Treated email as a constrained delivery surface and designed modular, testable HTML email templates with inline CSS, responsive patterns, and integration points into campaign tooling and automation workflows.',
    approachSteps: [
      'Built modular HTML email templates using inline CSS appropriate for major email clients.',
      'Structured layout systems that remain robust across Gmail, Outlook, and mobile applications.',
      'Implemented responsive patterns for key viewports so content remains readable and prioritised on desktop and mobile.',
      'Designed reusable template components (headers, content blocks, footers) to scale across campaigns.',
      'Integrated brand identity guidelines in a systematic way, using tokens and repeatable patterns instead of ad-hoc styling.',
      'Optimised visual hierarchy and CTA placement so key actions are consistently visible and accessible.',
      'Integrated templates into tools such as Mailchimp or custom workflows to support automated and scheduled sends.',
    ],
    impact:
      'Created a reusable email system that improved consistency across outbound communication, reduced manual formatting work, and enabled campaigns to be assembled from proven components instead of rebuilt from scratch.',
    metrics: [
      {
        label: 'Layout reliability',
        value: 'Fewer client-specific rendering issues observed in test runs (placeholder)',
      },
      {
        label: 'Template reuse',
        value: 'Multiple campaigns assembled from shared components (placeholder)',
      },
      {
        label: 'Manual formatting',
        value: 'Reduced one-off formatting changes per campaign (placeholder)',
      },
    ],
    impactLevel: 'medium',
    stack: [
      'Hand-coded HTML email',
      'Inline CSS',
      'Email client testing tools (placeholder)',
      'Mailchimp / ESP integration (placeholder)',
      'Automation workflows',
    ],
    role: 'Full-Stack Developer · Systems Engineer',
    duration: '3 months (initial system design and rollout)',
    year: 2024,
    improvements:
      'Automate broader client regression testing, introduce systematic A/B testing hooks for CTAs, and integrate richer engagement analytics back into product and growth planning.',
    links: {
      caseStudy: '/projects/responsive-email-systems',
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
