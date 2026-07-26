import type { ProcessStep } from "@/lib/types";

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery",
    description: "Understanding your business, users, and technical requirements through deep research and collaboration.",
    deliverables: ["Requirements document", "User personas", "Technical assessment", "Project roadmap"],
    outcome: "A clear, shared understanding of what we're building and why.",
  },
  {
    step: 2,
    title: "Strategy",
    description: "Defining the technical approach, architecture, and implementation plan aligned with your business goals.",
    deliverables: ["Technical architecture", "Technology selection", "Sprint plan", "Risk assessment"],
    outcome: "A strategic blueprint that guides efficient development.",
  },
  {
    step: 3,
    title: "UI/UX Design",
    description: "Creating user-centered designs that balance aesthetics, usability, and conversion through iterative prototyping.",
    deliverables: ["Wireframes", "Design mockups", "Interactive prototype", "Design system"],
    outcome: "Validated designs that users love and businesses need.",
  },
  {
    step: 4,
    title: "Development",
    description: "Engineering robust, scalable software using modern practices, clean architecture, and continuous integration.",
    deliverables: ["Working software", "API documentation", "Code reviews", "Sprint demos"],
    outcome: "Production-quality code built for reliability and scale.",
  },
  {
    step: 5,
    title: "Testing",
    description: "Comprehensive quality assurance including automated testing, performance testing, and security reviews.",
    deliverables: ["Test reports", "Performance benchmarks", "Security audit", "Bug-free release"],
    outcome: "Confidence that the software works as expected under real conditions.",
  },
  {
    step: 6,
    title: "Launch",
    description: "Carefully planned deployment with monitoring, rollback procedures, and performance optimization.",
    deliverables: ["Deployment plan", "Monitoring setup", "Analytics integration", "Launch support"],
    outcome: "A smooth, successful launch with full operational visibility.",
  },
  {
    step: 7,
    title: "Support",
    description: "Ongoing maintenance, monitoring, improvements, and technical support to ensure long-term success.",
    deliverables: ["Monitoring reports", "Security updates", "Feature enhancements", "Performance tuning"],
    outcome: "A product that evolves and improves with your business.",
  },
];
