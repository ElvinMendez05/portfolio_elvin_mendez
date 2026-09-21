import stockLogic from "@/assets/stock_logic_dashboard.png";
import documentFrontend from "@/assets/Document_Frontend.png";
import documentApi from "@/assets/Document_Backend.png";
import bookApp from "@/assets/BookApp.png";
import pokedexApp from "@/assets/Pokedex.png" 
import ecommerceApi from "@/assets/ApiEcomerce.png"
import cinemaManager from "@/assets/Gestor_cine.png"
import aiPortfolioAssistant from "@/assets/chatbot.png"
import sidekick from "@/assets/sidekick assistant.png"
import aiClinicManager from "@/assets/crew.png"
import taskManager from "@/assets/task.png"


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
    featured: false,
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
  slug: 'ai-portfolio-assistant',
  name: 'AI Portfolio Assistant',
  tagline: 'AI-powered assistant for exploring my professional portfolio',
  description:
    'An AI-powered portfolio assistant that answers questions about my professional background, projects, skills and experience using OpenAI Function Calling and custom tools.',
  status: 'completed',
  category: 'AI Application',
  year: '2026',
  technologies: ['Python', 'OpenAI API', 'Function Calling', 'Gradio', 'AI Agents'],
  links: {
    github: 'https://github.com/ElvinMendez05/Personal-AI-Assistant',
  },
  featured: true,
  accent: '270 80% 60%',
  image: aiPortfolioAssistant,
  caseStudy: {
    overview:
      'AI Portfolio Assistant is an interactive AI application that acts as a conversational version of my professional portfolio. It allows recruiters, clients and visitors to ask questions about my technical skills, professional experience and software projects through natural language.',

    problem:
      'Traditional portfolios require visitors to navigate through multiple sections to find specific information about a developer. Recruiters and clients may have different questions about technical skills, experience or projects, making a static portfolio less interactive and personalized.',

    solution:
      'An AI-powered assistant built with the OpenAI API and Function Calling. The assistant uses custom tools to retrieve and provide relevant information about my professional background, projects and technical skills. Gradio provides an interactive conversational interface where visitors can communicate naturally with the assistant.',

    keyFeatures: [
      'AI-powered conversational portfolio assistant',
      'OpenAI API integration',
      'Function Calling with custom tools',
      'Questions about professional experience and skills',
      'Project and technology information retrieval',
      'Natural language interaction',
      'Interactive Gradio interface',
    ],

    architecture:
      'AI application: Python with the OpenAI API and Function Calling. Custom tools provide structured access to portfolio information, allowing the model to determine which tool is relevant based on the user request. Gradio provides the web-based conversational interface, connecting user messages with the AI assistant and tool execution workflow.',

    challenges:
      'Designing custom tools that provide the assistant with reliable and structured portfolio information while allowing natural conversations. Defining clear tool responsibilities and integrating Function Calling so the assistant can determine when additional information is required instead of relying only on static prompts.',
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
  slug: 'api-ecommerce',
  name: 'E-Commerce API',
  tagline: 'REST API for e-commerce management',
  description:
    'A REST API built with ASP.NET Core for managing products, categories and user authentication, with versioned endpoints, authorization and repository-based data access.',
  status: 'completed',
  category: 'Backend API',
  year: '2026',
  technologies: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework Core', 'SQL Server', 'JWT', 'REST API', 'Swagger', 'Repository Pattern'],
  links: {
    github: 'https://github.com/ElvinMendez05/ApiEcommerce',
  },
  featured: true,
  accent: '160 60% 45%',
  image: ecommerceApi,
  caseStudy: {
    overview:
      'E-Commerce API is a REST API built with ASP.NET Core for managing products, categories and user authentication. The API provides versioned endpoints for managing the e-commerce catalog, protected resources and authentication workflows, with Swagger/OpenAPI documentation for exploring and testing the available endpoints.',

    problem:
      'E-commerce applications require a reliable backend for managing products and categories while protecting administrative operations and user data. The API needs to provide organized endpoints, authentication and authorization, persistent data management and a structure that can be maintained as the application grows.',

    solution:
      'A versioned ASP.NET Core REST API that separates API controllers, data access and application models. Entity Framework Core handles database persistence, while the Repository pattern provides an abstraction for data access. JWT-based authentication and authorization protect secured endpoints, and Swagger provides interactive API documentation.',

    keyFeatures: [
      'Product management with CRUD operations',
      'Category management with CRUD operations',
      'User authentication and authorization',
      'JWT-based security',
      'Versioned REST API endpoints',
      'Repository pattern for data access',
      'Entity Framework Core database integration',
      'Swagger/OpenAPI API documentation',
    ],

    architecture:
      'Backend: ASP.NET Core Web API organized into Controllers, Models, Repository, Data and Mapping layers. Controllers expose versioned REST endpoints, Repository handles data access, Entity Framework Core manages persistence, Mapping handles model transformations, and Data contains the database context and configuration. JWT authentication and authorization protect secured resources, while Swagger documents the API.',

    challenges:
      'Designing a versioned API structure while keeping controllers and data access responsibilities separated. Implementing authentication and authorization for protected endpoints, organizing product and category relationships, and creating a reusable Repository layer for database operations.',
  },
},

{
  slug: 'sidekick-ai-assistant',
  name: 'Sidekick AI Assistant',
  tagline: 'Intelligent AI assistant for productivity and learning',
  description:
    'An AI-powered assistant designed to enhance productivity, support learning and automate everyday tasks through conversational AI and tool-based workflows.',
  status: 'completed',
  category: 'AI Application',
  year: '2026',
  technologies: ['Python', 'OpenAI', 'LangGraph', 'Playwright', 'Gradio', 'AI Agents'],
  links: {
    github: 'https://github.com/ElvinMendez05/Sidekick-AI-Assistant',
  },
  featured: true,
  accent: '190 85% 55%',
  image: sidekick,
  caseStudy: {
    overview:
      'Sidekick AI Assistant is an intelligent AI-powered assistant designed to enhance productivity, support learning and automate everyday tasks. It combines conversational AI with tool-based workflows to research information, generate content, create documents, browse the web and support English learning.',

    problem:
      'Many everyday tasks require switching between different tools and workflows. Research, document creation, web browsing, file management and language learning are usually handled independently, creating unnecessary friction and repetitive work.',

    solution:
      'An agent-based AI assistant built with LangGraph and OpenAI that can reason about tasks and use external tools when necessary. Playwright enables browser automation, while Gradio provides an interactive interface for communicating with the assistant. The system can perform web searches, manage files, generate PDF documents and provide personalized English learning support.',

    keyFeatures: [
      'Web search and information research',
      'Browser automation with Playwright',
      'File management and document generation',
      'PDF document generation',
      'Grammar correction and essay evaluation',
      'English exercises and personalized learning support',
      'Tool-based agent workflows',
      'Task reasoning and progress evaluation',
    ],

    architecture:
      'AI application: Python with OpenAI and LangGraph for the agent workflow. LangGraph coordinates the assistant state and tool execution, while custom tools provide capabilities such as web research, browser automation, file management and document generation. Playwright handles browser interactions and Gradio provides the interactive web interface.',

    challenges:
      'Designing an agent workflow capable of determining which tools are required for different tasks while maintaining a reliable execution flow. Coordinating multiple tools, managing agent state and allowing the assistant to evaluate its progress and continue working until the requested objective is completed.',
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

{
  slug: 'ai-clinic-manager',
  name: 'AI Clinic Manager',
  tagline: 'AI-powered healthcare appointment management system',
  description:
    'An AI-powered healthcare appointment management system built with a multi-agent workflow using CrewAI to help manage patients, doctors, specialties, availability and appointments.',
  status: 'completed',
  category: 'AI Application',
  year: '2026',
  technologies: ['Python', 'CrewAI', 'AI Agents', 'Gradio'],
  links: {
    github: 'https://github.com/ElvinMendez05/AI_Clinic_Manager',
  },
  featured: true,
  accent: '145 65% 45%',
  image: aiClinicManager,
  caseStudy: {
    overview:
      'AI Clinic Manager is an AI-powered healthcare appointment management system developed using a multi-agent workflow with CrewAI. The application provides an interactive interface for managing patients, doctors, medical specialties, availability schedules and appointments.',

    problem:
      'Healthcare appointment management involves coordinating patients, doctors, specialties and availability schedules. Handling these workflows manually can make it difficult to organize appointment information and coordinate the different actors involved in the process.',

    solution:
      'An AI-powered application built around a multi-agent workflow using CrewAI. Specialized agents collaborate to handle different aspects of the clinic management workflow, while the interactive web interface provides a way for users to interact with the system and manage appointment-related information.',

    keyFeatures: [
      'Patient management',
      'Doctor management',
      'Medical specialty management',
      'Doctor availability schedules',
      'Appointment management',
      'Multi-agent workflow with CrewAI',
      'Interactive web interface',
    ],

    architecture:
      'AI application: Python with CrewAI for the multi-agent workflow. Specialized agents collaborate to process different clinic management tasks, while the application interface provides interactive access to patients, doctors, specialties, schedules and appointments. The architecture separates agent responsibilities according to the workflow requirements.',

    challenges:
      'Designing a multi-agent workflow where each agent has a clearly defined responsibility while allowing the agents to collaborate effectively. Coordinating appointment-related information across patients, doctors, specialties and availability schedules while keeping the workflow understandable and maintainable.',
  },
},

{
  slug: 'cinema-manager',
  name: 'Cinema Manager',
  tagline: 'Movie and genre catalog management application',
  description:
    'A web application built with Node.js and Express using MVC architecture, allowing users to manage a catalog of movies and genres with a structured and user-friendly interface.',
  status: 'completed',
  category: 'Web Application',
  year: '2025',
  technologies: ['Node.js', 'Express', 'JavaScript', 'Handlebars', 'Sequelize', 'JSON', 'MVC'],
  links: {
    github: 'https://github.com/ElvinMendez05/GestorCine-MVC-Express',
  },
  featured: true,
  accent: '160 60% 45%',
  image: cinemaManager,
  caseStudy: {
    overview:
      'Cinema Manager is a web application developed with Node.js and Express following the MVC architecture. The application provides a simple interface for managing a catalog of movies and genres, with Handlebars for server-side rendered views and JSON files for data persistence.',

    problem:
      'Managing a movie catalog manually can make it difficult to organize movies and genres efficiently. A structured application is needed to provide a centralized interface for creating, viewing and managing catalog information.',

    solution:
      'A Node.js and Express application structured using the MVC pattern. Handlebars is used for server-side rendered views, while JSON files provide simple data persistence. The application separates controllers, models and views to keep the project organized and maintainable.',

    keyFeatures: [
      'Movie catalog management',
      'Genre management',
      'Server-side rendered views with Handlebars',
      'JSON-based data persistence',
      'MVC architecture',
      'Express-based routes',
      'Structured and user-friendly interface',
    ],

    architecture:
      'Backend: Node.js + Express following the MVC architecture. Controllers handle application requests and logic, models manage movie and genre data, and Handlebars provides server-side rendered views. JSON files are used for data persistence, keeping the application lightweight and simple to maintain.',

    challenges:
      'Structuring the application using MVC while maintaining a simple data persistence strategy with JSON files. Organizing movie and genre management workflows and connecting the backend logic with dynamic Handlebars views.',
  },
},

{
  slug: 'task-manager',
  name: 'Task Manager',
  tagline: 'Task management web application',
  description:
    'A web application built with Python and Django for creating, organizing and managing tasks through a structured and user-friendly interface.',
  status: 'completed',
  category: 'Web Application',
  year: '2026',
  technologies: ['Python', 'Django', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
  links: {
    github: 'https://github.com/ElvinMendez05/task-django',
  },
  featured: true,
  accent: '45 90% 55%',
  image: taskManager,
  caseStudy: {
    overview:
      'Task Manager is a web application developed with Python and Django that allows users to create, organize and manage tasks. The application uses Django models for data management, forms for user input, views for application logic and templates for rendering the user interface.',

    problem:
      'Managing tasks without a centralized system can make it difficult to keep track of pending work and organize daily activities. Users need a simple interface where they can create, review and manage their tasks efficiently.',

    solution:
      'A Django-based web application that provides a structured task management workflow. Django handles the application logic, database models, forms and routing, while templates and static assets provide the user interface. SQLite is used for local data persistence.',

    keyFeatures: [
      'Task creation and management',
      'Task organization and tracking',
      'Django forms for data input',
      'Database persistence with SQLite',
      'Server-side rendered Django templates',
      'Structured MVC-style Django architecture',
      'Admin interface for data management',
    ],

    architecture:
      'Backend: Python + Django using Django models, views, forms and templates. Models define the task data structure, views handle application logic and requests, forms manage user input and validation, and templates render the web interface. SQLite is used as the database and Django migrations manage database schema changes.',

    challenges:
      'Structuring the application around Django conventions while keeping task management workflows simple and maintainable. Connecting models, forms, views and templates into a consistent workflow and managing persistent task data through Django migrations and SQLite.',
  },
},
  
];
