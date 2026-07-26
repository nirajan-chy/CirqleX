import type { TechCategory } from "@/lib/types";

export const techCategories: TechCategory[] = [
  {
    name: "Frontend",
    technologies: [
      { name: "Next.js", description: "React framework for production" },
      { name: "React", description: "Component-based UI library" },
      { name: "TypeScript", description: "Type-safe JavaScript" },
      { name: "Tailwind CSS", description: "Utility-first CSS framework" },
    ],
  },
  {
    name: "Backend",
    technologies: [
      { name: "Node.js", description: "JavaScript runtime" },
      { name: "Python", description: "Versatile programming language" },
      { name: "REST APIs", description: "Architectural style for APIs" },
      { name: "GraphQL", description: "Query language for APIs" },
    ],
  },
  {
    name: "Database",
    technologies: [
      { name: "PostgreSQL", description: "Advanced relational database" },
      { name: "MongoDB", description: "Document-oriented database" },
      { name: "Redis", description: "In-memory data store" },
    ],
  },
  {
    name: "Cloud",
    technologies: [
      { name: "AWS", description: "Amazon Web Services" },
      { name: "Azure", description: "Microsoft cloud platform" },
      { name: "Google Cloud", description: "Google cloud infrastructure" },
    ],
  },
  {
    name: "DevOps",
    technologies: [
      { name: "Docker", description: "Containerization platform" },
      { name: "CI/CD", description: "Continuous integration & delivery" },
      { name: "Kubernetes", description: "Container orchestration" },
    ],
  },
  {
    name: "AI",
    technologies: [
      { name: "OpenAI", description: "AI language models" },
      { name: "Machine Learning", description: "Predictive algorithms" },
      { name: "RAG", description: "Retrieval-augmented generation" },
    ],
  },
];
