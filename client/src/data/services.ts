import {
  Code2,
  Globe,
  Smartphone,
  Brain,
  Palette,
  Cloud,
  Server,
  Wrench,
} from "lucide-react";
import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "custom-software",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    description:
      "Build tailored software solutions designed around specific business requirements.",
    icon: Code2,
    tags: ["React", "Node.js", "TypeScript", ".NET", "Python"],
    features: [
      "Domain-driven architecture",
      "Scalable microservices",
      "Clean code practices",
      "Comprehensive testing",
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Dev",
    description:
      "Modern, scalable, high-performance websites and web applications.",
    icon: Globe,
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    features: [
      "Server-side rendering",
      "Progressive web apps",
      "Performance optimization",
      "SEO-ready architecture",
    ],
  },
  {
    slug: "mobile-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    description:
      "Cross-platform and native mobile experiences designed for real users.",
    icon: Smartphone,
    tags: ["React Native", "Flutter", "iOS", "Android"],
    features: [
      "Cross-platform development",
      "Native performance",
      "Offline capabilities",
      "App store deployment",
    ],
  },
  {
    slug: "ai-development",
    title: "AI Development",
    shortTitle: "AI Dev",
    description:
      "AI-powered applications, automation, intelligent workflows, and integrations.",
    icon: Brain,
    tags: ["OpenAI", "LangChain", "RAG", "ML"],
    features: [
      "LLM integrations",
      "Intelligent automation",
      "Custom AI models",
      "Data pipelines",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortTitle: "UI/UX",
    description:
      "User-centered product design focused on usability, clarity, and conversion.",
    icon: Palette,
    tags: ["Figma", "Prototyping", "Design Systems", "User Research"],
    features: [
      "User research & testing",
      "Design systems",
      "Interactive prototypes",
      "Accessibility-first design",
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    shortTitle: "Cloud & DevOps",
    description:
      "Reliable infrastructure, deployment pipelines, monitoring, scalability, and cloud architecture.",
    icon: Cloud,
    tags: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
    features: [
      "Infrastructure as code",
      "Automated deployments",
      "Monitoring & alerting",
      "Cost optimization",
    ],
  },
  {
    slug: "backend-api",
    title: "Backend & API Development",
    shortTitle: "Backend & API",
    description:
      "Robust backend systems and API architectures built for reliability and scale.",
    icon: Server,
    tags: ["Node.js", "Python", "REST", "GraphQL", "gRPC"],
    features: [
      "API design & development",
      "Database architecture",
      "Authentication & security",
      "Performance optimization",
    ],
  },
  {
    slug: "maintenance-support",
    title: "Maintenance & Support",
    shortTitle: "Maintenance",
    description:
      "Ongoing application maintenance, monitoring, updates, and technical support.",
    icon: Wrench,
    tags: ["Monitoring", "Updates", "Bug Fixes", "SLA"],
    features: [
      "Proactive monitoring",
      "Security patching",
      "Performance tuning",
      "24/7 support options",
    ],
  },
];
