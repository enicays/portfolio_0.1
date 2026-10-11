export interface ProjectScreenshot {
  url: string;
  title: string;
  caption: string;
}

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
  thumbnail?: string;
  screenshots?: ProjectScreenshot[];
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
      title: "Algeria Post HR System",
      subtitle: "Personnel & Administrative Workflow System",
      category: "Full-Stack Enterprise System",
      year: "2024",
      featured: true,
      summary: "A complete human resources and attendance tracking platform developed for Algeria Post to automate employee leave workflows, daily attendance logs, and administrative oversight.",
      tags: ["React", "Node.js", "Express", "PostgreSQL", "REST APIs", "Tailwind CSS"],
      metrics: [
        { label: "Leave Approvals", value: "100% digital" },
        { label: "Processing Speed", value: "-75% time" },
        { label: "Security", value: "Role-Based RBAC" },
      ],
      thumbnail: "/projects/hr/leave-requests.webp",
      screenshots: [
        {
          url: "/projects/hr/leave-requests.webp",
          title: "Leave & Absence Request Management",
          caption: "Multi-tier approval workflow for employee leave requests with multi-criteria filtering (Status, Department) and dual administrative approval levels.",
        },
        {
          url: "/projects/hr/attendance-records.webp",
          title: "Attendance Records & Personnel Ledger",
          caption: "Dynamic digital attendance registry tracking daily check-in/check-out timestamps, automated duration calculation, tardiness alerts, and data export.",
        },
        {
          url: "/projects/hr/attendance-summary.webp",
          title: "Attendance Analytics Dashboard",
          caption: "Real-time daily summary displaying total staff count, on-time arrivals, late arrivals, and absence metrics by department.",
        },
      ],
      overview: "Designed and engineered for Algeria Post as a comprehensive full-stack HR solution to modernize employee records, digitize approval chains, and provide real-time attendance analytics.",
      challenge: "Replacing slow, fragmented paper-based leave requests and manual attendance rosters while enforcing multi-tier role-based permissions across distinct postal divisions.",
      solution: "Engineered a robust full-stack web application with React and Express, backed by normalized PostgreSQL relational schemas, automated status transitions, and audit-ready data persistence.",
      architectureHighlights: [
        "Automated leave approval lifecycle with multi-level validation hierarchy (Department Supervisor & System Admin)",
        "Daily attendance tracking dashboard with instant punctuality categorization and record export",
        "Role-based access control (RBAC) guaranteeing data confidentiality and administrative integrity",
        "Normalized PostgreSQL database schemas with indexed queries for fast multi-department filtering",
      ],
      techStack: ["React", "Node.js", "Express", "PostgreSQL", "REST APIs", "Tailwind CSS"],
      accentColor: "#E8341C",
    },
    {
      id: "crm-system",
      title: "Clinic Management & EMR Platform",
      subtitle: "Healthcare CRM, Appointments & Clinical Encounters",
      category: "Full-Stack Healthcare System",
      year: "2024",
      featured: true,
      summary: "An enterprise clinical operations and healthcare management system featuring real-time appointment scheduling, doctor queues, ICD-11 diagnostic coding, SOAP consultation notes, and prescription safety checks.",
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "REST APIs", "Tailwind CSS"],
      metrics: [
        { label: "Slot Resolution", value: "15 min" },
        { label: "Safety Check", value: "Real-time" },
        { label: "Coding Standard", value: "ICD-11" },
      ],
      thumbnail: "/projects/clinic/appointments-schedule.webp",
      screenshots: [
        {
          url: "/projects/clinic/appointments-schedule.webp",
          title: "Appointments & Multi-Provider Schedule",
          caption: "Live timeline calendar grid with 15-minute slot resolution, real-time doctor consultation queue (Scheduled, Waiting, In-Consult), and dynamic booking modal.",
        },
        {
          url: "/projects/clinic/clinical-encounters.webp",
          title: "Clinical Encounters, SOAP Notes & Rx Prescriptions",
          caption: "Comprehensive consultation interface featuring searchable ICD-11 primary diagnosis codes, clinical findings, and multi-medication prescription builder with automated contraindication safety verification.",
        },
        {
          url: "/projects/clinic/patient-overview.webp",
          title: "Patient Medical Overview & Follow-up Tracking",
          caption: "Unified medical profile consolidating chronic condition histories, diagnostic records, and automated clinical follow-up reminders.",
        },
      ],
      overview: "Designed for healthcare facilities and private practices to streamline clinical workflows, eliminate scheduling conflicts, and centralize patient medical histories within a secure digital dashboard.",
      challenge: "Coordinating concurrent multi-doctor schedule timelines in real time while guaranteeing reliable drug-drug contraindication safety checks during live patient consultations.",
      solution: "Engineered a reactive scheduling engine with PostgreSQL database locking, integrated ICD-11 clinical taxonomies, and implemented instant client-side contraindication rules for electronic prescriptions.",
      architectureHighlights: [
        "Interactive appointment calendar with 15-minute time slots and real-time live sync",
        "Clinical encounter builder with ICD-11 diagnosis search and structured SOAP notes",
        "Electronic prescription module with automated drug contraindication safety checks",
        "Comprehensive patient medical charts with chronic condition tracking and clinical audit trails",
      ],
      techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "REST APIs", "Tailwind CSS"],
      accentColor: "#E8341C",
    },
    {
      id: "landing-page",
      title: "DigitalyHub Landing Page",
      subtitle: "High-Converting Digital Subscription Showcase",
      category: "Frontend & Conversion Optimization",
      year: "2024",
      featured: true,
      summary: "A high-converting, localized e-commerce and subscription platform landing page engineered for fast performance, clear pricing tiers, WhatsApp checkout conversion, and mobile-first responsiveness.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      metrics: [
        { label: "Lighthouse Score", value: "100/100" },
        { label: "Conversion Lift", value: "+34%" },
        { label: "Load Time", value: "< 0.7s" },
      ],
      thumbnail: "/projects/landing/hero-showcase.webp",
      screenshots: [
        {
          url: "/projects/landing/hero-showcase.webp",
          title: "Hero Section & Service Highlights",
          caption: "Dynamic dark-mode hero interface featuring floating service cards (Snapchat+, Gemini Pro, Netflix Premium), localized pricing badges, and instant WhatsApp ordering CTA.",
        },
        {
          url: "/projects/landing/pricing-grid.webp",
          title: "Subscription Plans & Pricing Grid",
          caption: "Multi-plan catalog displaying subscription tiers with localized pricing in Algerian Dinars (DA), instant plan benefits, and custom order inquiries.",
        },
        {
          url: "/projects/landing/faq-cta.webp",
          title: "Interactive FAQ & Conversion Banner",
          caption: "Collapsible FAQ accordion answering customer renewal and payment questions, paired with a high-contrast conversion banner driving direct WhatsApp checkouts.",
        },
      ],
      overview: "Crafted for DigitalyHub to market digital subscriptions with localized payment integration (BaridiMob & CCP). Designed to eliminate purchase friction through instant messaging conversion funnels.",
      challenge: "Creating a high-converting digital storefront optimized for Arabic typography and bilingual navigation without sacrificing sub-second load times or mobile responsiveness.",
      solution: "Built with Next.js and Tailwind CSS, leveraging hardware-accelerated transforms for interactive floating cards, lightweight accordions, and frictionless WhatsApp deep-linking.",
      architectureHighlights: [
        "Interactive dark-mode product showcase with responsive floating feature cards",
        "Localized subscription pricing catalog with dynamic plan details and direct checkout flows",
        "Collapsible FAQ accordion resolving customer objections before checkout",
        "Mobile-first conversion funnel integrating one-tap WhatsApp messaging and local payment methods",
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
