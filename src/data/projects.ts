import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'reservaai',
    name: 'ReservaAI',
    tagline: 'AI-powered booking and reservation SaaS platform',
    description:
      'A SaaS platform for managing reservations, appointments and services across different types of businesses, with an AI assistant to streamline booking workflows.',
    status: 'in-development',
    category: 'SaaS Platform',
    year: '2025',
    technologies: ['Node.js', 'Express', 'TypeScript', 'Prisma', 'SQL', 'JWT', 'REST API', 'React'],
    links: {
      github: 'https://github.com/elvinmendez',
    },
    featured: true,
    accent: '199 89% 52%',
    image: 'https://images.pexels.com/photos/7947968/pexels-photo-7947968.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    caseStudy: {
      overview:
        'ReservaAI is a multi-tenant SaaS platform that lets businesses manage services, pricing, availability, staff, clients and reservations from a single dashboard. The platform includes an AI assistant designed to help operators handle bookings more efficiently through natural language interactions.',
      problem:
        'Small and medium businesses — clinics, salons, consultants — still manage appointments through phone calls, spreadsheets or fragmented tools. There is no unified way to handle services, staff schedules, client data and reservations in one place, and no intelligence layer to reduce manual work.',
      solution:
        'A REST API built with Node.js, Express and TypeScript following clean architecture principles. Prisma manages the data layer over SQL, JWT handles authentication, and the API is designed for multi-tenancy from day one. A React frontend consumes the API, and an AI assistant layer is being integrated to help with scheduling decisions.',
      keyFeatures: [
        'Multi-tenant business management with services, pricing and durations',
        'Staff scheduling and availability management',
        'Client management with reservation history',
        'JWT-based authentication and authorization',
        'AI assistant for booking assistance',
        'REST API designed for scalability and clean architecture',
      ],
      architecture:
        'Backend: Node.js + Express + TypeScript with a layered clean architecture (routes, services, repositories). Prisma as the ORM over SQL. JWT for stateless auth. The API is versioned and documented for future client consumption.',
      challenges:
        'Designing a flexible data model that works across different business types without becoming over-engineered. Building multi-tenancy at the data level while keeping queries performant. Planning the AI assistant integration so it augments rather than replaces the operator workflow.',
    },
  },
  {
    slug: 'stock-logic',
    name: 'Stock Logic',
    tagline: 'Inventory and sales management application',
    description:
      'A business application for managing products, categories, sales, suppliers, reports and users with role-based access, PDF documents and image handling.',
    status: 'completed',
    category: 'Business Application',
    year: '2024',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'SQL', 'Zustand', 'TanStack Query', 'Tailwind', 'shadcn/ui'],
    links: {
      github: 'https://github.com/elvinmendez',
    },
    featured: true,
    accent: '160 60% 45%',
    image: 'https://images.pexels.com/photos/38984817/pexels-photo-38984817.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    caseStudy: {
      overview:
        'Stock Logic is an inventory management application that helps businesses track products, categories, sales, suppliers and users. It includes role-based access control, PDF document generation, image handling and reporting.',
      problem:
        'Businesses need a centralized system to manage inventory, sales and suppliers. Spreadsheets and manual processes lead to errors, missing stock and no clear reporting. Existing tools are often too complex or too rigid.',
      solution:
        'A full-stack application with a React frontend using TanStack Query for server state and Zustand for client state. The backend is Node.js with Express and SQL. Role-based authentication controls access, and the UI is built with shadcn/ui and Tailwind for a clean, professional experience.',
      keyFeatures: [
        'Product and category management with image uploads',
        'Sales tracking and reporting',
        'Supplier management',
        'User roles and authentication',
        'PDF document generation for invoices and reports',
        'Dashboard with key business metrics',
      ],
      architecture:
        'Frontend: React + TypeScript, TanStack Query for data fetching and caching, Zustand for UI state, Tailwind + shadcn/ui for the design system. Backend: Node.js + Express + SQL with REST endpoints. Auth handled via JWT with role-based authorization.',
      challenges:
        'Keeping server state consistent across inventory, sales and suppliers using TanStack Query cache invalidation. Building a role system that was flexible enough for different business sizes. Generating clean PDF documents that matched the UI design.',
    },
  },
];
