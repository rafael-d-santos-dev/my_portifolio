export const SITE = {
  name: 'Rafael Douglas',
  role: 'Freelance Web Designer & Developer',
  eyebrow: 'FREELANCE WEB DESIGN & DEVELOPMENT',
  location: 'Remote Worldwide',
  github: 'https://github.com/rafael-d-santos-dev',
  email: 'rafaeldouglassantossilva211@gmail.com',
};

export const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const PROJECTS = [
  {
    name: 'NorthStar Cleaning',
    category: 'Business Website Concept',
    description:
      'A fictional cleaning company website concept created to demonstrate modern business web design, responsive layouts, service presentation, and user-friendly navigation.',
    features: [
      'Responsive layout',
      'Service sections',
      'Navigation',
      'Contact form UI',
      'Accessibility considerations',
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://northstar-cleaning.ai.studio',
    repoUrl: 'https://github.com/rafael-d-santos-dev/northstar-cleaning',
    concept: true,
    preview: 'northstar' as const,
  },
  {
    name: 'NovaFit Fitness Studio',
    category: 'Fitness & Wellness Website',
    description:
      'A modern fitness studio website concept featuring interactive workout filters, membership plans, a weekly schedule, FAQ, and a trial request form.',
    features: [
      'Workout filters',
      'Membership plans',
      'Weekly schedule',
      'FAQ section',
      'Trial request form',
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://novafit-fitness-studio.vercel.app',
    repoUrl: 'https://github.com/rafael-d-santos-dev/novafit-fitness-studio',
    concept: true,
    preview: 'novafit' as const,
  },
  {
    name: 'AgendaFlow',
    category: 'Multi-Industry Booking Platform',
    description:
      'A multi-industry appointment booking platform featuring a customer booking portal and an administrative dashboard for managing appointments, services, staff, customers, and business settings.',
    features: [
      'Seven-step customer booking workflow.',
      'Dynamic availability and scheduling validation.',
      'Administrative dashboard and calendar.',
      'Customer CRM and team management.',
      'Five configurable business environments.',
    ],
    tech: [
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS v4',
      'Motion',
      'Lucide React',
    ],
    demoUrl:
      'https://agendaflow-editorial-luxury-scheduling-platform.ai.studio',
    repoUrl:
      'https://github.com/rafael-d-santos-dev/agendaflow-booking-platform',
    concept: true,
    preview: 'agendaflow' as const,
  },
  {
    name: 'APEX — Automotive Cinematic Experience',
    category: 'Cinematic Web Experience',
    description:
      'A premium automotive web experience exploring cinematic storytelling through scroll-driven motion, custom Canvas rendering, and responsive visual design.',
    features: [
      'Cinematic Scroll Experience',
      'Custom Canvas Engine',
      'Responsive Art Direction',
    ],
    tech: ['React', 'TypeScript', 'GSAP', 'Vite'],
    demoUrl: 'https://apex-automotive-cinematic-experienc.vercel.app/',
    repoUrl:
      'https://github.com/rafael-d-santos-dev/apex-automotive-cinematic-experience',
    concept: true,
    preview: 'apex' as const,
  },
];

export const AI_CASE_STUDIES = [
  {
    name: 'NovaFit AI Assistant',
    category: 'Fitness & Wellness Concept',
    badge: 'AI Integration Concept',
    businessProblem:
      'Visitors may struggle to identify which fitness program or membership best matches their goals.',
    proposedSolution:
      'A website-integrated conversational assistant that helps visitors explore available programs, compare membership options and find a suitable next step.',
    potentialBenefit:
      'A simpler plan-discovery experience and clearer guidance toward the trial process.',
    demoUrl: 'https://novafit-fitness-studio.vercel.app',
    ctaLabel: 'Explore Live Concept',
  },
  {
    name: 'NorthStar Service Advisor',
    category: 'Home & Commercial Services Concept',
    badge: 'AI Integration Concept',
    businessProblem:
      'Potential customers may be unsure which cleaning service or package best fits their property and needs.',
    proposedSolution:
      'A website-integrated service advisor that guides visitors through available cleaning services and pricing options before directing them to the quote form.',
    potentialBenefit:
      'A more straightforward service-selection experience and an easier path to requesting a quote.',
    demoUrl: 'https://northstar-cleaning.ai.studio',
    ctaLabel: 'Explore Live Concept',
  },
];

export const AI_CASE_STUDIES_DISCLOSURE =
  'These are conceptual demonstrations of proposed AI integrations. The current prototypes use predefined conversation flows and do not connect to live AI services.';

export const SERVICES = [
  {
    title: 'Business Websites',
    description:
      'A modern, responsive website that presents your services clearly and helps small businesses strengthen their online presence — something I aim to build through my developing skills and portfolio.',
    icon: 'Store',
  },
  {
    title: 'Landing Pages',
    description:
      'Focused single-page sites to introduce a product or offer and guide visitors toward one clear action, designed to load quickly on mobile.',
    icon: 'Rocket',
  },
  {
    title: 'Responsive Website Redesign',
    description:
      'A refresh of an existing site to improve layout, performance, and readability across phones, tablets, and desktops — helping a business improve its online presence without losing what already works.',
    icon: 'Smartphone',
  },
];

export const PROCESS = [
  {
    step: '01',
    title: 'Discover',
    description:
      'We talk through your goals, audience, and what your business needs the website to do.',
  },
  {
    step: '02',
    title: 'Plan',
    description:
      'I map out the structure, pages, and content so the build has a clear direction.',
  },
  {
    step: '03',
    title: 'Build',
    description:
      'I design and develop the site with responsive, accessible, modern code.',
  },
  {
    step: '04',
    title: 'Refine',
    description:
      'We review, test on real devices, and polish the details until it feels right.',
  },
];
