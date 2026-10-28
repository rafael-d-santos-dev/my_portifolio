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
    demoUrl: 'https://northstar-cleaning-w-h3zw.bolt.host',
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
];

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
