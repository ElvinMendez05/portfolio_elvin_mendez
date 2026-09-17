export type ProjectStatus = 'live' | 'in-development' | 'completed';

export interface ProjectLink {
  github?: string;
  demo?: string;
}

export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  architecture?: string;
  challenges?: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  category: string;
  year: string;
  technologies: string[];
  links: ProjectLink;
  caseStudy: ProjectCaseStudy;
  featured: boolean;
  accent: string;
  image?: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; primary?: boolean }[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Experiment {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  category: string;
}
