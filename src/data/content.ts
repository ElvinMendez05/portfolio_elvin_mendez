import type { SkillCategory, ExperienceItem, Experiment } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', primary: true },
      { name: 'TypeScript', primary: true },
      { name: 'JavaScript', primary: true },
      { name: 'Vite' },
      { name: 'Tailwind CSS' },
      { name: 'shadcn/ui' },
      { name: 'React Hook Form' },
      { name: 'TanStack Query' },
      { name: 'Zustand' },
      { name: 'Framer Motion' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', primary: true },
      { name: 'Express' },
      { name: '.NET', primary: true },
      { name: 'C#' },
      { name: 'REST APIs' },
      { name: 'Prisma' },
      { name: 'JWT' },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'SQL Server', primary: true },
      { name: 'PostgreSQL' },
      { name: 'SQL' },
      { name: 'Prisma' },
    ],
  },
  {
    title: 'AI',
    skills: [
      { name: 'AI Agents' },
      { name: 'CrewAI' },
      { name: 'LangGraph' },
      { name: 'OpenAI SDK' },
      { name: 'MCP' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Clean Architecture' },
      { name: 'API Design' },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    role: 'Software Developer Intern',
    company: 'Banco Ademi',
    period: '2026',
    description:
      'Working on internal applications with React and .NET, building REST APIs, maintaining Razor Pages interfaces, and collaborating on debugging and performance improvements.',
    technologies: ['React', '.NET', 'REST APIs', 'SQL Server', 'Razor Pages', 'Git'],
  },
];

export const experiments: Experiment[] = [
  {
    name: 'AI Agent Workflows',
    description: 'Multi-agent systems built with CrewAI and LangGraph for automated research and content tasks.',
    technologies: ['CrewAI', 'LangGraph', 'OpenAI SDK'],
    category: 'AI Agents',
  },
  {
    name: 'MCP Integrations',
    description: 'Model Context Protocol servers connecting AI assistants to external tools and data sources.',
    technologies: ['MCP', 'TypeScript', 'OpenAI SDK'],
    category: 'AI Tooling',
  },
  {
    name: '.NET REST APIs',
    description: 'Backend experiments exploring clean architecture patterns and API design in C# and .NET.',
    technologies: ['.NET', 'C#', 'SQL Server'],
    category: 'Backend',
  },
  {
    name: 'Developer Tools',
    description: 'Small utilities and automation scripts for everyday development workflows.',
    technologies: ['Node.js', 'TypeScript'],
    category: 'Tooling',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks = {
  github: 'https://github.com/ElvinMendez05',
  linkedin: 'https://www.linkedin.com/in/elvin-manuel-mendez-espinosa-a63b44291/',
  email: 'elvinmendez005@gmail.com',
};

export const philosophy = [
  {
    number: '01',
    title: 'Understand the problem',
    description: 'Before writing code, I make sure I understand what needs to be solved and why it matters.',
  },
  {
    number: '02',
    title: 'Build simple',
    description: 'I prefer clear, maintainable solutions over clever ones. Simple is harder to break and easier to extend.',
  },
  {
    number: '03',
    title: 'Design matters',
    description: 'A functional application should also be pleasant to use. UX is part of engineering, not an afterthought.',
  },
  {
    number: '04',
    title: 'Keep improving',
    description: 'I am always learning new technologies, patterns and practices. Stagnation is the fastest way to fall behind.',
  },
];

export const aboutValues = [
  'Clean code',
  'Great UX',
  'Maintainability',
  'Performance',
  'Real-world solutions',
];
