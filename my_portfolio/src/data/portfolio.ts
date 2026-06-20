export const profile = {
  name: 'Ramzan Khan',
  title: 'Senior Frontend Developer',
  tagline:
    'Senior Frontend Developer with 2.5+ years shipping production React, Next.js and React Native apps — leading frontend teams across legal, regulatory and event-tech, with a focus on performance and design systems.',
  location: 'New Delhi, Delhi, India',
  email: 'ramzanformasai03@gmail.com',
  workEmail: 'ramzan.khan@thewasserstoff.com',
  phone: '+91 99589 49641',
  phoneTel: '+919958949641',
  github: 'https://github.com/mr-ramzan01',
  githubHandle: 'mr-ramzan01',
  linkedin: 'https://www.linkedin.com/in/ramzan01/',
  linkedinHandle: 'ramzan01',
  resumeUrl: '/resume.pdf',
} as const;

export const summary =
  'Senior Frontend Developer with 2.5+ years building production React, Next.js, React Native, and TypeScript apps across legal, regulatory, and event-tech domains. Led a team of 4 developers and mentored 10+ interns, cut load times by 45%, and architected 3 flagship products end-to-end at Wasserstoff. Strong expertise in frontend architecture, design systems, SSR, SEO, and performance optimization.';

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'Wasserstoff Innovation & Learning Labs Pvt. Ltd.',
    role: 'Senior Frontend Developer',
    location: 'Gurugram, Haryana',
    period: 'Mar 2024 — Present',
    bullets: [
      'Architected and shipped three flagship products (Lit Law, Lit Reg, and Astrix) end-to-end using Next.js, React, TypeScript, and React Native.',
      'Led a team of 4 developers and mentored 10+ interns, owning PR reviews, code quality, and deployments across production apps.',
      'Reduced app load time by 45% via code-splitting, lazy loading, SSR, and frontend performance optimizations across key user flows.',
      'Integrated Razorpay, Cashfree, and PayU across products to power subscriptions and ticket payments, owning end-to-end checkout flows.',
    ],
  },
  {
    company: 'BrainVibs Technologies Pvt. Ltd.',
    role: 'Full Stack Web Developer',
    location: 'New Delhi',
    period: 'Sep 2023 — Feb 2024',
    bullets: [
      'Built a React Flow-based visual editor for WhatsApp Business chatbots, letting non-technical users design conversational flows without writing code.',
      'Built a multi-provider email service integrating 5+ SMTPs (SendGrid, Mailgun, AWS SES, Brevo) with dynamic templates, queuing, and provider failover — powering reliable transactional notifications across the product.',
    ],
  },
];

export interface ProjectItem {
  name: string;
  subtitle: string;
  company: string;
  tech: string[];
  bullets: string[];
  link?: string;
  image?: string;
}

export const projects: ProjectItem[] = [
  {
    name: 'Lit Law',
    subtitle: 'Legal AI Assistant & AI Paralegal',
    company: 'Wasserstoff',
    tech: ['Next.js', 'Redux', 'Material UI', 'SSE', 'Tailwind'],
    bullets: [
      'Built a Legal AI Assistant and AI Paralegal platform covering 9 countries — powering legal research, document drafting, and compliance workflows, all backed by verified citations.',
      'Architected the Next.js frontend with SSR, code-splitting, and lazy loading — cutting load time by 45% and improving SEO discoverability.',
      'Integrated Cashfree and PayU for subscription billing, and Server-Sent Events (SSE) for real-time streaming of LLM responses.',
    ],
    link: 'https://app.litt.law',
    image: '/Images/litlaw.png',
  },
  {
    name: 'Astrix',
    subtitle: 'Event Ticketing & Engagement Platform',
    company: 'Wasserstoff',
    tech: ['Next.js', 'Redux', 'Material Tailwind', 'tRPC'],
    bullets: [
      'Built an event discovery and ticketing platform from scratch — connecting artists with fans through browse, calendar, and map-based event exploration.',
      'Implemented an XP-based engagement system with points redeemable for ticket discounts, boosting user retention and repeat purchases.',
      'Integrated Razorpay and PayU for ticket payments; built end-to-end type-safe APIs with tRPC across event discovery and checkout flows.',
    ],
    link: 'https://astrix.live',
    image: '/Images/astrix.png',
  },
  {
    name: 'Lit Reg',
    subtitle: 'LLM-Based Regulatory Intelligence Platform',
    company: 'Wasserstoff',
    tech: ['Next.js', 'TypeScript', 'Redux', 'Tailwind'],
    bullets: [
      'Built a regulatory intelligence platform enabling compliance and legal teams to navigate filings from SEBI, RBI, and SAT through an LLM-powered interface.',
      'Developed a Google Drive-style file and folder management system with drag-and-drop uploads, inline metadata editing, and real-time PDF rendering.',
      'Built modal-based PDF previews and side-by-side folder navigation in TypeScript, letting compliance teams cross-reference filings without leaving the workspace.',
    ],
    link: 'https://reg.lit.law',
    image: '/Images/litreg.png',
  },
];

export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: 'Languages & Frameworks',
    items: [
      'TypeScript',
      'JavaScript',
      'React',
      'Next.js',
      'React Native',
      'Redux Toolkit',
      'TanStack Query',
      'Tailwind CSS',
      'Material UI',
    ],
  },
  {
    label: 'Tools & Tech',
    items: [
      'Git',
      'Vite',
      'Postman',
      'Cypress',
      'Socket.io',
      'SSE',
      'tRPC',
      'React Flow',
      'Vercel',
      'CI/CD',
    ],
  },
  {
    label: 'Engineering & Performance',
    items: [
      'REST APIs',
      'SSR',
      'SEO',
      'Code-splitting',
      'Lazy Loading',
      'Web Vitals',
      'Payment Integrations',
    ],
  },
  {
    label: 'Languages Spoken',
    items: ['English — Professional', 'Hindi — Native'],
  },
];

export interface EducationItem {
  institution: string;
  qualification: string;
  period: string;
  detail?: string;
}

export const education: EducationItem[] = [
  {
    institution: 'Indira Gandhi National Open University (IGNOU)',
    qualification: 'Bachelor of Computer Applications (BCA)',
    period: 'Pursuing · Expected 2028',
  },
];

export const certifications: EducationItem[] = [
  {
    institution: 'Masai School',
    qualification: 'Full Stack Web Development',
    period: 'Feb 2022 — Dec 2022',
    detail: '1200+ hour intensive program covering MERN stack, DSA, and system design.',
  },
];
