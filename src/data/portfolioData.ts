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
    avatarUrl: "/profile.jpg",
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
        url: "https://github.com",
        handle: "@alexrivera-dev",
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com",
        handle: "alex-rivera-swe",
      },
      {
        platform: "Twitter / X",
        url: "https://x.com",
        handle: "@alexrivera_tech",
      },
      {
        platform: "Email",
        url: "mailto:alex.rivera.dev@gmail.com",
        handle: "alex.rivera.dev@gmail.com",
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
      id: "apex-cloud",
      title: "Apex Cloud AI Engine",
      subtitle: "High-throughput AI Workflow Orchestration Platform",
      category: "Full-Stack & Cloud Architecture",
      year: "2024",
      featured: true,
      summary: "Distributed pipeline orchestrating asynchronous multimodal AI jobs with real-time streaming telemetry and sub-50ms queue latency.",
      tags: ["Next.js 15", "TypeScript", "Node.js", "Redis", "PostgreSQL", "Docker", "AWS"],
      metrics: [
        { label: "Throughput", value: "1.2M jobs/day" },
        { label: "P99 Latency", value: "< 42ms" },
        { label: "Cost Reduction", value: "38%" },
      ],
      overview: "Apex is an enterprise-grade AI execution engine that lets engineering teams spin up chained inference workflows across heterogeneous LLM providers with automatic fallback, rate limiting, and persistent audit logs.",
      challenge: "Managing thousands of parallel streaming requests while maintaining zero dropped connection states, reliable backpressure management, and strict tenant resource isolation.",
      solution: "Engineered a fault-tolerant job scheduler backed by Redis Streams and PostgreSQL row-level locks, coupled with Next.js App Router streaming server components for instantaneous edge rendering.",
      architectureHighlights: [
        "Event-driven worker pool with dynamic autoscaling based on queue depth",
        "Bidirectional WebSocket & Server-Sent Events (SSE) telemetry layer",
        "Encrypted credential vault with fine-grained RBAC permission matrix",
        "Edge-cached dashboard rendering achieving 98+ Google Lighthouse scores",
      ],
      techStack: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Go", "Redis", "PostgreSQL", "Docker", "AWS ECS"],
      liveUrl: "https://example.com/apex-demo",
      githubUrl: "https://github.com/example/apex-engine",
      accentColor: "#C5FF41",
    },
    {
      id: "hyperflux-metrics",
      title: "HyperFlux Real-Time Analytics",
      subtitle: "Sub-Second Timeseries Observability Suite",
      category: "Big Data & Dashboard System",
      year: "2024",
      featured: true,
      summary: "High-density timeseries analytics dashboard consuming millions of events per second with instant visual aggregation.",
      tags: ["React", "TypeScript", "ClickHouse", "WebSockets", "Tailwind CSS", "Canvas API"],
      metrics: [
        { label: "Event Ingestion", value: "4.5M eps" },
        { label: "Query Time", value: "18ms avg" },
        { label: "Client FPS", value: "60 FPS steady" },
      ],
      overview: "HyperFlux provides infrastructure engineers with instantaneous visibility into server clusters, traffic anomalies, and memory saturation through hardware-accelerated time-series graphing.",
      challenge: "Standard SVG rendering engines choked when rendering >100,000 data points across 24 hours of multi-node telemetry in real-time.",
      solution: "Implemented an offscreen HTML5 Canvas pipeline with Web Workers to parse binary buffers, completely offloading the main UI thread.",
      architectureHighlights: [
        "Web Worker binary decompression for multi-megabyte metric batches",
        "ClickHouse columnar database schema optimized for time-bucket aggregations",
        "Optimistic UI updates with instant timeline scrub and zoom capability",
      ],
      techStack: ["React 19", "Next.js", "ClickHouse", "Go", "WebSockets", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://example.com/hyperflux",
      githubUrl: "https://github.com/example/hyperflux-analytics",
      accentColor: "#38BDF8",
    },
    {
      id: "lumina-vault",
      title: "Lumina Financial Core",
      subtitle: "Multi-Currency Global Settlements Engine",
      category: "Fintech & API Architecture",
      year: "2023",
      featured: true,
      summary: "Double-entry cryptographic ledger and instant payment gateway handling cross-border treasury settlements.",
      tags: ["TypeScript", "Node.js", "PostgreSQL", "Prisma", "Docker", "Stripe API"],
      metrics: [
        { label: "Settlement Volume", value: "$42M+ YTD" },
        { label: "Reconciliation Rate", value: "99.999%" },
        { label: "Zero Discrepancies", value: "Audited" },
      ],
      overview: "Lumina powers automated payouts, fx hedging calculations, and compliant tax ledger generation for international merchant marketplaces.",
      challenge: "Guaranteed idempotency and strict zero-loss double-entry accounting during volatile network timeouts and upstream banking API crashes.",
      solution: "Architected a state machine with distributed two-phase commits, immutable audit logs, and automated reconciler daemons running every 5 minutes.",
      architectureHighlights: [
        "Immutable append-only journal ledger with SHA-256 state hashing",
        "Deterministic retry queues with exponential jitter backoff",
        "Interactive compliance portal with automated PDF reporting and CSV export",
      ],
      techStack: ["TypeScript", "Node.js", "Next.js", "PostgreSQL", "Prisma ORM", "Redis", "Tailwind CSS"],
      liveUrl: "https://example.com/lumina-vault",
      githubUrl: "https://github.com/example/lumina-core",
      accentColor: "#F46C38",
    },
    {
      id: "strata-cms",
      title: "Strata Headless Platform",
      subtitle: "Ultra-Fast Developer-First Content Infrastructure",
      category: "Developer Tooling & Systems",
      year: "2023",
      featured: false,
      summary: "Modular headless engine offering instant GraphQL queries, real-time collaborative editing, and edge CDN synchronization.",
      tags: ["Next.js", "GraphQL", "Tailwind CSS", "PostgreSQL", "Framer Motion"],
      metrics: [
        { label: "Build Acceleration", value: "4x faster" },
        { label: "Global Edge TTFB", value: "24ms" },
      ],
      overview: "A high-performance CMS engineered for engineering teams seeking schema flexibility, instant static preview deploys, and automated media optimization pipelines.",
      challenge: "Providing seamless live block-editor collaboration without conflict divergence across multiple concurrent editors.",
      solution: "Integrated conflict-free replicated data types (CRDTs) with Yjs over WebSockets, synchronized directly into a distributed PostgreSQL backend.",
      architectureHighlights: [
        "CRDT collaborative document editing with presence indicators",
        "Automated edge webhooks invalidating CDN caches in under 100ms",
        "Granular asset transformation pipeline with WebP/AVIF generation",
      ],
      techStack: ["Next.js", "TypeScript", "GraphQL", "PostgreSQL", "Tailwind CSS", "Docker"],
      liveUrl: "https://example.com/strata-cms",
      githubUrl: "https://github.com/example/strata-headless",
      accentColor: "#A78BFA",
    },
  ],
  experience: [
    {
      id: "exp-1",
      role: "Freelance Full-Stack Developer",
      company: "Self-Employed / Freelance",
      location: "Remote / Worldwide",
      period: "2024 - Present",
      isCurrent: true,
      type: "Freelance",
      description: "Delivering custom full-stack web applications, e-commerce stores, high-converting landing pages, and modern showcase (vitrine) websites for clients.",
      achievements: [
        "Built and deployed responsive full-stack websites and e-commerce platforms with intuitive user experiences and secure checkout flows.",
        "Created high-speed landing pages and modern showcase websites optimized for fast load times, SEO, and clean visual design.",
        "Collaborated directly with clients to translate business requirements into reliable, production-ready web products.",
      ],
      techStack: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "REST APIs"],
    },
    {
      id: "exp-2",
      role: "Software Developer — Graduation Project",
      company: "Algérie Poste",
      location: "Algiers, Algeria",
      period: "2024",
      isCurrent: false,
      type: "Graduation Project",
      description: "Designed and engineered a full-stack HR (Ressources Humaines) management software for Algérie Poste to modernize administrative workflows and personnel records.",
      achievements: [
        "Architected a comprehensive HR dashboard featuring employee management, department directories, and administrative controls.",
        "Implemented an automated leave and absence tracking system to replace manual record-keeping with seamless digital approvals.",
        "Built reliable backend REST APIs and database schemas ensuring secure data persistence, role-based access, and fast query execution.",
      ],
      techStack: ["React", "Node.js", "Express", "PostgreSQL", "JavaScript", "REST APIs", "Tailwind CSS"],
    },
  ],
  tools: [
    {
      name: "Next.js",
      subtitle: "Web Application Engine",
      iconType: "nextjs",
    },
    {
      name: "React",
      subtitle: "Interactive User Interfaces",
      iconType: "react",
    },
    {
      name: "TypeScript",
      subtitle: "Reliable & Stable Code",
      iconType: "typescript",
    },
    {
      name: "Tailwind CSS",
      subtitle: "Modern Responsive Styling",
      iconType: "tailwind",
    },
    {
      name: "Node.js",
      subtitle: "Backend & API Services",
      iconType: "nodejs",
    },
    {
      name: "PostgreSQL",
      subtitle: "Secure Cloud Database",
      iconType: "postgresql",
    },
    {
      name: "Figma",
      subtitle: "UI/UX Design & Prototyping",
      iconType: "figma",
    },
    {
      name: "GitHub",
      subtitle: "Cloud Delivery & Deployment",
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
