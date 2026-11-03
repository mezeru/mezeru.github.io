export const person = {
  name: "Yash Chaudhari",
  role: "Full-Stack Software Engineer",
  location: "Dallas, Texas",
  email: "Jermpro0@gmail.com",
  github: "https://github.com/mezeru",
  linkedin: "https://www.linkedin.com/in/yashnchaudhari/",
  url: "https://ruizo.is-a.dev",
  resume: "/Yash-Chaudhari-Resume.docx",
  resumePdf: "/Yash-Chaudhari-Resume.pdf",
} as const;

export const navigation = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export const experience = [
  {
    company: "Incedo Inc.",
    context: "Supporting Verizon",
    role: "Software Engineer",
    dates: "Jun 2024 — Present",
    location: "Dallas, TX",
    overview:
      "Full-stack engineering for enterprise operations, from user-facing applications to event-driven services.",
    achievements: [
      "Designed an LLM-powered pipeline that turns operational emails into structured maintenance requests through internal REST APIs, eliminating manual data entry for the maintenance team.",
      "Built Java and Spring Boot services, REST and GraphQL APIs, and React and Next.js applications supporting workflows across multiple Verizon business units.",
      "Developed asynchronous workflows with Kafka and Redis, and maintained Docker and Jenkins delivery pipelines.",
      "Reduced page load and interaction latency by 80% through frontend rendering and API response optimizations.",
    ],
    stack: ["Java", "Spring Boot", "React", "Next.js", "GraphQL", "Kafka", "Redis", "Gemini"],
  },
  {
    company: "Florida Space Institute",
    context: "Research & collaboration",
    role: "Software Engineer · Part-time",
    dates: "Dec 2022 — Mar 2024",
    location: "Orlando, FL",
    overview: "Built software to make research data easier to manage and share.",
    achievements: [
      "Developed a research collaboration platform with React, Node.js, Fastify, and MongoDB, replacing manual operational workflows.",
      "Optimized database schemas and queries for large research datasets and built automated Python data-processing pipelines.",
      "Containerized services with Docker and deployed on AWS EC2 for consistent, repeatable environments.",
    ],
    stack: ["React", "Node.js", "Fastify", "MongoDB", "Python", "Docker", "AWS"],
  },
  {
    company: "Medblocks",
    context: "Healthcare interoperability",
    role: "Full Stack Developer",
    dates: "Sep 2021 — Jun 2022",
    location: "New Delhi, India",
    overview: "Connected healthcare applications with national digital health infrastructure.",
    achievements: [
      "Built healthcare applications with Svelte, Node.js, and MongoDB, implementing REST APIs aligned with FHIR interoperability standards.",
      "Developed backend systems supporting healthcare integration under India's Ayushman Bharat Digital Mission.",
      "Worked across product and engineering to deliver features meeting healthcare compliance requirements.",
    ],
    stack: ["Svelte", "Node.js", "MongoDB", "REST APIs", "FHIR", "openEHR"],
  },
] as const;

export type Project = {
  id: string;
  number: string;
  name: string;
  category: string;
  status: string;
  description: string;
  contribution: string;
  highlights: readonly string[];
  stack: readonly string[];
  github: string;
  diagram: "agent" | "health" | "billing" | "rewards";
};

export const projects: readonly Project[] = [
  {
    id: "threatlens",
    number: "01",
    name: "ThreatLens",
    category: "Applied AI / Security",
    status: "Hackathon prototype · Synthetic data",
    description: "An investigation agent that connects security events to evidence-backed reports.",
    contribution:
      "Implemented a bounded LLM tool loop behind a TypeScript API, with shared contracts and validated evidence provenance. The current web interface is a scaffold; investigations run through the API against a synthetic event fixture.",
    highlights: [
      "Three read-only investigation tools",
      "Per-investigation evidence validation",
      "Explicit model and tool-call budgets",
    ],
    stack: ["TypeScript", "Express", "OpenAI SDK", "Zod", "Vitest"],
    github: "https://github.com/mezeru/threatlens-hack",
    diagram: "agent",
  },
  {
    id: "iscov",
    number: "02",
    name: "ISCov-19",
    category: "Full-stack / Healthcare",
    status: "Research project",
    description: "A shared language for clinical records and patient data.",
    contribution:
      "Built a Svelte and TypeScript application for COVID-19 patient records, assessment forms, and dashboards. Links clinical records in EHRbase with patient demographics through FHIR resources.",
    highlights: [
      "openEHR assessment templates",
      "FHIR patient and immunization resources",
      "Docker-based service composition",
    ],
    stack: ["Svelte", "TypeScript", "openEHR", "FHIR", "PostgreSQL"],
    github: "https://github.com/mezeru/ISCov-19",
    diagram: "health",
  },
  {
    id: "telecom",
    number: "03",
    name: "Telecom Intelligence",
    category: "Backend / Applied AI",
    status: "Personal capstone",
    description: "Making telecom billing easier to understand and anticipate.",
    contribution:
      "Combined usage-based billing, TensorFlow.js forecasting, Gemini-generated billing summaries, and Twilio outage notifications in a Node.js service. A capstone implementation, without a verified public deployment.",
    highlights: [
      "Usage-based bill calculation",
      "Machine learning billing forecasts",
      "Generated summaries and SMS integration",
    ],
    stack: ["Node.js", "Express", "Gemini", "TensorFlow.js", "Twilio"],
    github: "https://github.com/mezeru/CapStone-GenAI",
    diagram: "billing",
  },
  {
    id: "rewards",
    number: "04",
    name: "Employee Rewards API",
    category: "Backend / API Design",
    status: "Training project",
    description: "Role-based workflows for recognition and rewards.",
    contribution:
      "Built Java and Spring Boot APIs for HR, managers, and employees: employee assignment, reward points, item management, and redemption. Uses Spring Security and JPA persistence with MySQL.",
    highlights: [
      "Distinct HR, manager, and employee APIs",
      "Reward and redemption domain models",
      "JPA repositories and service boundaries",
    ],
    stack: ["Java", "Spring Boot", "Spring Security", "JPA", "MySQL"],
    github: "https://github.com/mezeru/Capstone-Training-Project",
    diagram: "rewards",
  },
];

export const expertise = [
  {
    number: "01",
    title: "Product & interfaces",
    description:
      "Responsive applications, operational dashboards, and performance that users can feel.",
    skills: ["React", "Next.js", "TypeScript", "Svelte", "Redux", "Chart.js"],
  },
  {
    number: "02",
    title: "Services & systems",
    description: "Clear API contracts and reliable communication across service boundaries.",
    skills: ["Java", "Spring Boot", "Node.js", "REST", "GraphQL", "Kafka", "Redis"],
  },
  {
    number: "03",
    title: "Data & infrastructure",
    description: "Practical data modeling, repeatable deployments, and automated delivery.",
    skills: ["PostgreSQL", "MongoDB", "Oracle", "AWS", "Docker", "Jenkins", "CI/CD"],
  },
  {
    number: "04",
    title: "Applied AI",
    description:
      "LLM integrations for real workflows, with structured outputs and explicit boundaries.",
    skills: [
      "Gemini API · Production",
      "Workflow automation",
      "OpenAI SDK · Personal projects",
      "Zod · Personal projects",
    ],
  },
] as const;

export const principles = [
  {
    title: "Understand the whole system.",
    text: "A good interface depends on the services, data, and decisions behind it. I like working across those boundaries.",
  },
  {
    title: "Make the next change easier.",
    text: "Clear contracts, readable code, and repeatable deployments make systems easier to own long after the first release.",
  },
  {
    title: "Keep judgment in the loop.",
    text: "AI is useful when its inputs, outputs, and limits are understood. I build around those constraints, not around a demo.",
  },
] as const;
