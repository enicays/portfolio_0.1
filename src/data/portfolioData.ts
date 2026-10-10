export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  featured: boolean;
  summary: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  overview: string;
  challenge: string;
  solution: string;
  architectureHighlights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  accentColor?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  type: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface ToolItem {
  name: string;
  subtitle: string;
  iconType: "nextjs" | "react" | "typescript" | "tailwind" | "nodejs" | "postgresql" | "figma" | "github";
}

export interface PortfolioData {
  personal: {
    name: string;
    headlineRole: string;
    displayTitleLine1: string;
    displayTitleLine2: string;
    tagline: string;
    bio: string;
    location: string;
    email: string;
    status: string;
    avatarUrl?: string;
    stats: {
      value: string;
      label: string;
      sublabel: string;
    }[];
    socials: {
      platform: string;
      url: string;
      handle: string;
    }[];
  };
  marqueeItems: string[];
  projects: Project[];
  experience: ExperienceItem[];
  tools: ToolItem[];
  services: {
    id: string;
    title: string;
    description: string;
    deliverables: string[];
  }[];
  budgetRanges: string[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Silem Yacine",
    headlineRole: "FULL-STACK SOFTWARE DEVELOPER",
    displayTitleLine1: "FULL-STACK",
    displayTitleLine2: "DEVELOPER",
    tagline: "Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.",
    bio: "Full-stack developer building and deploying web applications. Focused on turning ideas into reliable, functional products with React, Node.js, and modern web technologies.",
    location: "Worldwide",
    email: "yacine.silem.dev@gmail.com",
    status: "Available",
    avatarUrl: "/profile.webp",
    stats: [
      {
        value: "+2",
        label: "YEARS OF",
        sublabel: "EXPERIENCE",
      },
      {
        value: "+10",
        label: "PROJECTS",
        sublabel: "DELIVERED",
      },
    ],
    socials: [
      {
        platform: "GitHub",
        url: "https://github.com/enicays",
        handle: "enicays",
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com",
        handle: "Silem Yacine",
      },
      {
        platform: "Email",
        url: "mailto:yacine.silem.dev@gmail.com",
        handle: "yacine.silem.dev@gmail.com",
      },
    ],
  },
  marqueeItems: [
    "DISTRIBUTED ARCHITECTURE",
    "NEXT.JS 15 & REACT",
    "TYPESCRIPT",
    "NODE.JS & GO",
    "POSTGRESQL & REDIS",
    "DOCKER & KUBERNETES",
    "CLOUD NATIVE AWS & GCP",
    "TAILWIND CSS & MOTION",
    "HIGH-CONCURRENCY APIS",
    "GRAPHQL & TRPC",
    "EVENT-DRIVEN ARCHITECTURE",
  ],
  projects: [
    {
      id: "hr-system",
      title: "Enterprise HR System",
      subtitle: "Personnel & Administrative Workflow System",
      category: "Full-Stack Enterprise System",
      year: "2024",
      featured: true,
      summary: "A complete human resources management system engineered to modernize personnel records, administrative leave approvals, and employee directories.",
      tags: ["React", "Node.js", "Express", "PostgreSQL", "REST APIs", "Tailwind CSS"],
      metrics: [
        { label: "Leave Approvals", value: "100% digital" },
        { label: "Processing Speed", value: "-75% time" },
        { label: "Security", value: "Role-Based RBAC" },
      ],
      overview: "Designed and engineered as a modern HR system for personnel record management, administrative leave workflows, and automated approval chains.",
      challenge: "Replacing fragmented manual paperwork with automated multi-tier leave tracking while ensuring secure role-based access across departments.",
      solution: "Built a full-stack architecture with React and Express, backed by normalized PostgreSQL relational schemas for personnel tracking and audit logging.",
      architectureHighlights: [
        "Automated leave and absence tracking with digital approval hierarchies",
        "Comprehensive personnel dashboard with searchable employee directory",
        "Role-based access control (RBAC) ensuring data confidentiality",
        "REST API backend designed for high reliability and secure record persistence",
      ],
      techStack: ["React", "Node.js", "Express", "PostgreSQL", "REST APIs", "Tailwind CSS"],
      accentColor: "#E8341C",
    },
    {
      id: "crm-system",
      title: "Custom CRM Platform",
      subtitle: "Client Relationship & Sales Pipeline System",
      category: "Full-Stack Business Platform",
      year: "2024",
      featured: true,
      summary: "A modern client relationship management platform featuring Kanban deal pipelines, communication timelines, revenue analytics, and client interaction logs.",
      tags: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
      metrics: [
        { label: "Pipeline Tracking", value: "Real-time" },
        { label: "Query Latency", value: "< 28ms" },
        { label: "Workflow Efficiency", value: "+45%" },
      ],
      overview: "A tailored CRM platform empowering businesses to track prospect funnels, manage customer interactions, and analyze deal conversions through clean data visualizations.",
      challenge: "Designing dynamic multi-stage Kanban drag-and-drop pipelines that update in real time without UI lag or desynchronization.",
      solution: "Engineered an optimistic client update pattern in React with debounced REST API sync to a PostgreSQL database with relational indexing.",
      architectureHighlights: [
        "Interactive multi-stage Kanban pipeline with drag-and-drop deal management",
        "Unified customer profile timeline consolidating interaction notes and tasks",
        "Revenue forecasting dashboard with interactive chart visualizations",
        "Secure team authentication and permission tiers",
      ],
      techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
      accentColor: "#E8341C",
    },
    {
      id: "landing-page",
      title: "Modern Showcase Landing Page",
      subtitle: "High-Converting Product Showcase & Website",
      category: "Frontend & Conversion Optimization",
      year: "2024",
      featured: true,
      summary: "A high-speed, modern showcase website designed with fluid micro-interactions, responsive typography, sub-second load times, and optimized conversion pathways.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      metrics: [
        { label: "Lighthouse Score", value: "100/100" },
        { label: "Conversion Lift", value: "+34%" },
        { label: "Load Time", value: "< 0.7s" },
      ],
      overview: "Crafted for a modern digital brand to present products and services with visual elegance, instant response times, and clear calls-to-action.",
      challenge: "Delivering smooth animations and rich visual transitions without sacrificing mobile responsiveness or Lighthouse performance scores.",
      solution: "Built with Next.js App Router, lightweight CSS hardware-accelerated transforms, and optimized asset delivery.",
      architectureHighlights: [
        "Responsive, mobile-first design with bespoke typography and layout hierarchy",
        "Interactive multi-step inquiry form with immediate input validation",
        "Fluid scroll transitions and micro-interactions powered by Framer Motion",
        "Comprehensive SEO metadata, OpenGraph cards, and accessible semantic markup",
      ],
      techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      accentColor: "#E8341C",
    },
  ],
  experience: [
    {
      id: "exp-1",
      role: "Freelance Full-Stack Developer",
      company: "Self-Employed / Freelance",
      location: "Remote / Worldwide",
      period: "2024 – Present",
      isCurrent: true,
      type: "Freelance",
      description: "Delivering custom full-stack web applications, e-commerce stores, high-converting landing pages, and modern showcase websites for clients worldwide.",
      achievements: [
        "Built and deployed responsive full-stack websites and e-commerce platforms with intuitive user experiences and secure checkout flows.",
        "Created high-speed landing pages and modern showcase websites optimized for fast load times, SEO, and clean visual design.",
        "Collaborated directly with clients to translate business requirements into reliable, production-ready web products.",
      ],
      techStack: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "REST APIs"],
    },
    {
      id: "exp-2",
      role: "Software Developer – Graduation Project",
      company: "Algeria Post",
      location: "Algiers, Algeria",
      period: "2024",
      isCurrent: false,
      type: "Graduation Project",
      description: "Designed and engineered a full-stack Human Resources (HR) management system for Algeria Post to modernize administrative workflows and personnel records.",
      achievements: [
        "Architected a comprehensive HR dashboard featuring employee management, department directories, and administrative controls.",
        "Implemented an automated leave and absence tracking system to replace manual record-keeping with seamless digital approvals.",
        "Built reliable backend REST APIs and database schemas, ensuring secure data persistence, role-based access, and fast query execution.",
      ],
      techStack: ["React", "Node.js", "Express", "PostgreSQL", "JavaScript", "REST APIs", "Tailwind CSS"],
    },
  ],
  tools: [
    {
      name: "Next.js",
      subtitle: "My core framework for building full-stack applications with server components and edge API routes.",
      iconType: "nextjs",
    },
    {
      name: "React",
      subtitle: "Used for crafting responsive, interactive client components and state-driven web interfaces.",
      iconType: "react",
    },
    {
      name: "TypeScript",
      subtitle: "Strict type safety across the entire codebase to catch bugs early and build maintainable apps.",
      iconType: "typescript",
    },
    {
      name: "Tailwind CSS",
      subtitle: "Rapid utility-first styling to build bespoke, responsive, and performance-minded design systems.",
      iconType: "tailwind",
    },
    {
      name: "Node.js",
      subtitle: "Building lightweight, event-driven REST APIs, backend services, and server-side utilities.",
      iconType: "nodejs",
    },
    {
      name: "PostgreSQL",
      subtitle: "Primary relational database for structured schemas, relational queries, and transactional integrity.",
      iconType: "postgresql",
    },
    {
      name: "Figma",
      subtitle: "Translating wireframes and client requirements into clean, production-ready interface mockups.",
      iconType: "figma",
    },
    {
      name: "GitHub",
      subtitle: "Version control, collaboration, code reviews, and automated CI/CD deployment pipelines.",
      iconType: "github",
    },
  ],
  services: [
    {
      id: "full-stack",
      title: "End-to-End Web Applications",
      description: "Designing and building complete SaaS platforms, internal tools, and client portals from database schema to interactive UI.",
      deliverables: ["Architecture blueprint", "Database schema & migrations", "Secure auth & APIs", "Production deployment"],
    },
    {
      id: "frontend-perf",
      title: "High-Performance Frontend Systems",
      description: "Refactoring slow web interfaces into ultra-responsive, 60 FPS web applications with pixel-perfect design accuracy.",
      deliverables: ["Component design system", "Sub-second page loads", "Fluid Framer animations", "Mobile-first responsiveness"],
    },
    {
      id: "api-cloud",
      title: "Cloud APIs & Microservice Architecture",
      description: "Scalable backend services engineered for high concurrency, zero data loss, and seamless third-party integrations.",
      deliverables: ["REST & GraphQL APIs", "Redis caching layer", "Docker containerization", "CI/CD automated pipelines"],
    },
  ],
  budgetRanges: ["< $3,000", "$3,000 - $5,000", "$5,000 - $10,000", "> $10,000"],
};
