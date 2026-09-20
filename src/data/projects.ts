import stockLogic from "@/assets/stock_logic_dashboard.png";
import documentFrontend from "@/assets/Document_Frontend.png";
import documentApi from "@/assets/Document_Backend.png";
import bookApp from "@/assets/BookApp.png";
import pokedexApp from "@/assets/Pokedex.png" 

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
    year: '2026',
    technologies: ['React', 'vite', 'TypeScript', 'Node.js', 'Express', 'SQL', 'Zustand', 'TanStack Query', 'Tailwind', 'shadcn/ui'],
    links: {
      github: 'https://github.com/ElvinMendez05/Stock_Logic_Inventory_App',
    },
    featured: true,
    accent: '160 60% 45%',
    image: stockLogic,
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

  {
    slug: 'document-manager',
    name: 'Document Manager',
    tagline: 'Document management web application',
    description:
      'A web application for managing documents and users through a secure interface that consumes a REST API built with ASP.NET Core.',
    status: 'completed',
    category: 'Web Application',
    year: '2026',
    technologies: ['C#', '.NET', 'ASP.NET Core', 'Razor Pages', 'REST API', 'JWT', 'HttpClient'],
    links: {
      github: 'https://github.com/ElvinMendez05/Document_Manager_Frontend',
    },
    featured: true,
    accent: '280 70% 50%',
    image: documentFrontend,
    caseStudy: {
      overview:
        'Document Manager is a web application for managing documents and users through a structured web interface. The application consumes a separate ASP.NET Core REST API through a dedicated ApiClient and service layer, providing authenticated workflows for interacting with the document management system.',

      problem:
        'Users need a simple and secure interface to interact with a document management system without directly accessing backend endpoints. The frontend must handle authentication, communicate with the API and organize document and user workflows while keeping the codebase maintainable.',

      solution:
        'A web application built with ASP.NET Core Razor Pages that consumes the Document Management REST API through a dedicated ApiClient. Services such as AuthService and DocumentService encapsulate API communication, while JWT helpers and authorization attributes handle authenticated access. Razor Views and ViewComponents provide the user interface and reusable presentation elements.',

      keyFeatures: [
        'Document management interface',
        'User management',
        'Authentication and JWT-based session handling',
        'REST API integration through a dedicated ApiClient',
        'Service layer for API communication',
        'Reusable Razor ViewComponents',
        'Protected routes and authorization',
      ],

      architecture:
        'Frontend: ASP.NET Core Razor Pages with Controllers, Models, Services, ViewComponents and Views. ApiClient is responsible for communicating with the REST API, while AuthService and DocumentService encapsulate application-specific API operations. JwtHelper and JwtSessionAuthorizeAttribute handle JWT-related authentication and authorization. The frontend communicates with the ASP.NET Core REST API rather than accessing the database directly.',

      challenges:
        'Designing a clean communication flow between the frontend and the REST API while keeping API calls separated from presentation logic. Organizing ApiClient, authentication helpers and application services so that document and user workflows remain maintainable and easy to extend.',
    },
  },

  {
    slug: 'document-management-api',
    name: 'Document Management API',
    tagline: 'Secure document management REST API',
    description:
      'A REST API for managing documents and users with role-based authentication, validation, global exception handling and optimized data access.',
    status: 'completed',
    category: 'Backend API',
    year: '2026',
    technologies: ['C#', '.NET', 'ASP.NET Core', 'SQL Server', 'JWT', 'REST API', 'Clean Architecture'],
    links: {
      github: 'https://github.com/ElvinMendez',
    },
    featured: true,
    accent: '160 60% 45%',
    image: documentApi,
    caseStudy: {
      overview:
        'Document Management API is a REST API built with ASP.NET Core and Clean Architecture for managing documents and users. It includes role-based authentication and authorization, validation, global exception handling and optimized data access.',

      problem:
        'Organizations need a secure and structured way to manage documents and users. Manual processes and poorly structured backend systems can lead to inconsistent data, unauthorized access and difficult maintenance.',

      solution:
        'A REST API built with ASP.NET Core following Clean Architecture principles. The application is divided into API, Domain, Application and Infrastructure layers, with JWT authentication, role-based authorization, request validation, global exception handling and optimized data access.',

      keyFeatures: [
        'Document management through REST endpoints',
        'User management and role-based access control',
        'JWT authentication',
        'Request and data validation',
        'Global exception handling',
        'Clean Architecture with four separated layers',
        'Optimized database access',
      ],

      architecture:
        'Backend: ASP.NET Core Web API organized into four layers: API, Domain, Application and Infrastructure. The API layer handles HTTP requests and controllers. The Domain layer contains entities and business rules. The Application layer contains application logic and use cases. The Infrastructure layer handles database access and external implementations. JWT is used for authentication and role-based authorization.',

      challenges:
        'Maintaining a clear separation of responsibilities between the API, Domain, Application and Infrastructure layers. Implementing secure role-based authorization, centralized exception handling and consistent validation while keeping the application maintainable and easy to extend.',
    },
  },

  {
    slug: 'book-app',
    name: 'BookApp',
    tagline: 'Web application for book management and reading',
    description:
      'A web application built with Node.js and Express using MVC architecture, featuring user authentication, server-side rendered views, database management, email services and file uploads.',
    status: 'completed',
    category: 'Web Application',
    year: '2025',
    technologies: ['Node.js', 'Express', 'JavaScript', 'Handlebars', 'Sequelize', 'SQL', 'Nodemailer', 'Multer', 'MVC'],
    links: {
      github: 'https://github.com/ElvinMendez05/BookApp',
    },
    featured: true,
    accent: '280 70% 50%',
    image: bookApp,
    caseStudy: {
      overview:
        'BookApp is a web application developed with Node.js and Express following the MVC architecture. The application provides user authentication, book management workflows, server-side rendered views with Handlebars, database persistence through Sequelize, email functionality with Nodemailer and file uploads using Multer.',

      problem:
        'Users need a centralized web application to interact with book-related content while having secure authentication and a simple interface. The application also requires backend functionality for database management, email communication and handling uploaded files.',

      solution:
        'A Node.js and Express application structured using the MVC pattern. Handlebars is used for server-side rendered views, Sequelize manages database interactions, Nodemailer provides email functionality and Multer handles file uploads. Authentication and application logic are organized into separate components to keep the project maintainable.',

      keyFeatures: [
        'User authentication',
        'Book management',
        'Server-side rendered views with Handlebars',
        'Database management with Sequelize',
        'Email communication with Nodemailer',
        'File uploads with Multer',
        'MVC architecture',
      ],

      architecture:
        'Backend: Node.js + Express following the MVC architecture. Models handle database entities through Sequelize, controllers manage application logic and request handling, and Handlebars provides server-side rendered views. Nodemailer handles email communication, while Multer manages file uploads.',

      challenges:
        'Organizing the application using MVC while integrating multiple backend technologies and services. Managing database operations with Sequelize, handling user authentication, integrating email functionality and processing file uploads while keeping the application structure maintainable.',
    },
  },

  {
  slug: 'pokedex',
  name: 'Pokédex App',
  tagline: 'Interactive web catalog for exploring Pokémon and regions',
  description:
    'A web application built with Node.js and Express using MVC architecture, featuring server-side rendered views, database management with Sequelize, file uploads with Multer, and regional filtering.',
  status: 'completed',
  category: 'Web Application',
  year: '2025',
  technologies: ['Node.js', 'Express', 'JavaScript', 'Handlebars', 'Sequelize', 'SQL', 'Multer', 'MVC', 'Bootstrap'],
  links: {
    github: 'https://github.com/ElvinMendez05',
  },
  featured: true,
  accent: '0 85% 60%',
  image: pokedexApp,
  caseStudy: {
    overview:
      'Pokédex App is a web catalog developed with Node.js and Express following the MVC pattern. It allows users to browse and manage a structured collection of Pokémon, filter entries by region, and view detailed information using server-side rendered templates with Handlebars and database persistence via Sequelize.',

    problem:
      'Pokémon enthusiasts and users need an intuitive, organized web interface to search, filter, and view detailed information about different Pokémon and their respective regions without unnecessary access barriers.',

    solution:
      'A streamlined Node.js and Express web application built with the MVC architecture. Handlebars renders simple and responsive views with Bootstrap styling, Sequelize manages relational database models for Pokémon and regions, and Multer handles image uploads for media assets.',

    keyFeatures: [
      'Interactive Pokémon directory and detail views',
      'Region-based filtering system',
      'Database persistence with Sequelize',
      'Server-side rendered views using Handlebars',
      'File and image uploads with Multer',
      'Responsive design with Bootstrap',
      'Clean MVC architecture',
    ],

    architecture:
      'Backend: Node.js + Express following the MVC architecture. Models manage Pokémon and region entities using Sequelize ORM. Controllers execute core data flows and filtering logic, while Handlebars handles server-side rendered UI components alongside Multer for handling image asset uploads.',

    challenges:
      'Designing clean database relationships between Pokémon and their regions using Sequelize, while implementing dynamic filtering logic on server-rendered views without full client-side framework overhead.',
  },
},
  
];
