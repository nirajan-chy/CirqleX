import type { CaseStudy } from "@/lib/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "project-alpha",
    title: "Project Alpha",
    industry: "Placeholder Industry",
    challenge:
      "Placeholder challenge description. The client needed a modern digital solution to streamline operations.",
    solution:
      "Placeholder solution description. We designed and built a custom platform tailored to their requirements.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    result:
      "Placeholder result. The solution improved operational efficiency and provided a scalable foundation for growth.",
  },
  {
    slug: "project-beta",
    title: "Project Beta",
    industry: "Placeholder Industry",
    challenge:
      "Placeholder challenge description. The client needed to modernize their existing legacy system.",
    solution:
      "Placeholder solution description. We migrated their platform to a modern tech stack with improved performance.",
    technologies: ["React", "Node.js", "MongoDB", "Docker"],
    result:
      "Placeholder result. The new system reduced maintenance costs and improved user experience significantly.",
  },
  {
    slug: "project-gamma",
    title: "Project Gamma",
    industry: "Placeholder Industry",
    challenge:
      "Placeholder challenge description. The client required an AI-powered solution for data processing.",
    solution:
      "Placeholder solution description. We developed a custom AI pipeline that automated their workflow.",
    technologies: ["Python", "OpenAI", "FastAPI", "Redis"],
    result:
      "Placeholder result. The AI solution reduced manual processing time by a significant margin.",
  },
];
